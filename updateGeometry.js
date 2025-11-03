require('dotenv').config();
const mongoose = require('mongoose');
const Listing = require('./models/listing');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

mongoose.connect('mongodb://127.0.0.1:27017/wanderlust')
  .then(() => {
    console.log('✅ Mongo Connected');
  })
  .catch(err => {
    console.log('❌ Mongo Connection Error:', err);
  });

async function updateGeometry() {
  const listings = await Listing.find({});
  for (let listing of listings) {
    try {
      const geoData = await geocodingClient.forwardGeocode({
        query: listing.location,
        limit: 1
      }).send();

      if (geoData.body.features.length > 0) {
        listing.geometry = geoData.body.features[0].geometry;
        await listing.save();
        console.log(`✅ Updated: ${listing.title}`);
      } else {
        console.log(`⚠️ No coordinates found for: ${listing.title}`);
      }
    } catch (e) {
      console.log(`❌ Error updating ${listing.title}:`, e.message);
    }
  }

  mongoose.connection.close();
  console.log('🎯 Update complete, connection closed');
}

updateGeometry();
