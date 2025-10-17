🌍 Wanderlust — Travel Listing Web App

A full-stack Node.js + Express + MongoDB web application for creating and managing travel listings.
Users can add, view, edit, and delete listings with details like title, description, price, location, and country.
This project demonstrates CRUD operations, RESTful routing, and EJS templating.

🧩 Project Overview

Wanderlust is designed as a mini full-stack application inspired by travel platforms like Airbnb.
It helps in understanding how server-side rendering works with Express and EJS, along with MongoDB (Mongoose) for database management.

⚙️ Tech Stack
Category	              Technology
Backend	             Node.js, Express.js
Frontend	         EJS, HTML5, CSS3
Database	         MongoDB (Mongoose ODM)
Utilities	         Method-Override, Nodemon, EJS-Mate
Version Control      Git, GitHub

🚀 Features Implemented

✅ Server setup using Express.js
✅ MongoDB connection with Mongoose
✅ Dynamic templates using EJS + EJS-Mate layout engine
✅ Complete CRUD functionality:

Create new listings

Read all listings

View individual listing details

Edit existing listings

Delete listings
✅ Added Bootstrap-based boilerplate layout (Navbar + Footer)
✅ Proper image handling: retains old image if new one isn’t entered
✅ Default Unsplash image if image link is missing
✅ Fixed “Cannot read properties of null (reading 'image')” bug
✅ Currency formatting using toLocaleString("en-IN")
✅ Static assets served from /public
✅ Clean, modular project structure

🧱 Folder Structure
Wanderlust/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
│
└── node_modules/

💡 MongoDB Model — models/listing.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

🔌 Express App — app.js

Handles all major routes:

Route	              Method	      Description
/listings	           GET	       Show all listings
/listings/new	       GET	       Form to create new listing
/listings	           POST        Add new listing
/listings/:id	       GET	       Show details of a listing
/listings/:id/edit	   GET	       Edit listing form
/listings/:id	       PUT	       Update listing
/listings/:id	      DELETE	   Delete listing

Middleware Used:

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

🧠 EJS Views Summary
🪧 index.ejs

Displays all listings dynamically in a responsive card layout.

📝 show.ejs

Shows a single listing’s full details and image.

<img src="<%= listing.image.url || listing.image %>" alt="<%= listing.title %>">


Includes buttons for Edit and Delete.

➕ new.ejs

Form to create a new listing.

✏️ edit.ejs

Form to update an existing listing. Retains old image if left empty.

🧩 Layouts

boilerplate.ejs — Main layout template (wraps all pages)

navbar.ejs / footer.ejs — Reusable partials for navigation and footer

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/Wanderlust.git
cd Wanderlust

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB
mongod


Or modify app.js connection string:

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

4️⃣ Run the app
npx nodemon app.js -e js,ejs,json

5️⃣ Open in browser
http://localhost:8080

🧠 Development Log
Date	                          Change
Oct 15, 2025    	Created base server and MongoDB schema
Oct 16, 2025    	Fixed toLocalString → toLocaleString
Oct 16, 2025	    Added CRUD routes and EJS forms
Oct 16, 2025	    Implemented method-override for PUT/DELETE
Oct 16, 2025	    Configured nodemon for hot reload
Oct 17, 2025	    Added EJS layouts (boilerplate.ejs)
Oct 17, 2025	    Fixed image retention logic on edit
Oct 17, 2025	Added default Unsplash fallback image
Oct 17, 2025	Resolved Cannot read property 'image' of null bug
Oct 17, 2025	Updated folder structure & pushed to GitHub
