🌍 Wanderlust — Travel Listing Web App

A full-stack Node.js + Express + MongoDB web application for creating and managing travel listings.
Users can add, view, edit, and delete listings with details like title, description, price, location, and country.
This project demonstrates CRUD operations, RESTful routing, and EJS templating.

🧩 Project Overview

Wanderlust is designed as a mini full-stack application inspired by travel platforms like Airbnb.
It helps in understanding how server-side rendering works with Express and EJS, along with MongoDB for database operations.

⚙️ Tech Stack
Category	                Technology
Backend	              Node.js, Express.js
Frontend	            EJS, HTML5, CSS3
Database	            MongoDB with Mongoose ODM
Utilities	            Method-Override, Nodemon
Version Control	      Git, GitHub

🚀 Features Implemented

✅ Server setup using Express.js
✅ MongoDB connection with Mongoose
✅ Dynamic templates using EJS view engine
✅ Full CRUD functionality:

Create new listings

Read all listings

View individual listing details

Edit existing listings

Delete listings

✅ Used method-override to support PUT and DELETE HTTP methods
✅ Currency formatting using toLocaleString("en-IN")
✅ Fixed minor EJS bugs (typo in toLocalString)
✅ Verified MongoDB connection and CRUD operations

🧱 Folder Structure
Wanderlust/
│
├── app.js                      # Main server file
├── package.json
├── models/
│   └── listing.js              # Mongoose schema for listings
├── views/
│   ├── listings/
│   │   ├── index.ejs           # Displays all listings
│   │   ├── show.ejs            # Displays details of a single listing
│   │   ├── new.ejs             # Form to create a new listing
│   │   └── edit.ejs            # Form to edit an existing listing
│   └── partials/               # (for future header/footer reuse)
├── public/                     # (for future CSS/JS/static assets)
│
└── README.md                   # Documentation

💡 MongoDB Model (models/listing.js)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-sunset-over-a-body-of-water-with-houses-in-the-background-jVrZgVhqsqs",
        set: (v) =>
            v === "" 
                ? "https://unsplash.com/photos/a-sunset-over-a-body-of-water-with-houses-in-the-background-jVrZgVhqsqs"
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


🔌 Express App (app.js)

Your main server file defines all routes:

/listings → Show all listings

/listings/new → Form to add a new listing

/listings/:id → Show details for one listing

/listings/:id/edit → Edit form

/listings/:id (PUT) → Update listing

/listings/:id (DELETE) → Delete listing

Includes middleware for:

express.urlencoded({ extended: true })

method-override("_method")

🧠 EJS Views Summary
🪧 index.ejs

Displays all listings with loop through allListings.

📝 show.ejs

Displays details for a single listing:

<h3>Listing Details:</h3>
<ul>
  <li><%= listing.title %></li>
  <li><%= listing.description %></li>
  <li>&#8377; <%= listing.price.toLocaleString("en-IN") %></li>
  <li><%= listing.location %></li>
  <li><%= listing.country %></li>
</ul>

➕ new.ejs

Form for creating a new listing.

✏️ edit.ejs

Form for editing an existing listing.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/Wanderlust.git
cd Wanderlust

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB (locally or via Atlas)
mongod


or update your connection string in app.js:

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

4️⃣ Run the app
npx nodemon app.js -e js,ejs,json

5️⃣ Open in browser
http://localhost:8080

🧠 Notes & Fixes Log
Date	Change
Oct 15, 2025	Created base server and MongoDB model
Oct 16, 2025	Fixed toLocalString → toLocaleString bug
Oct 16, 2025	Added all CRUD routes
Oct 16, 2025	Implemented EJS forms for Create/Edit
Oct 16, 2025	Added method-override for PUT/DELETE support
Oct 16, 2025	Configured nodemon for auto-refresh
