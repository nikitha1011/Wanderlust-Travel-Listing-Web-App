🌍 Wanderlust — Travel Listing Web App

A full-stack Node.js + Express + MongoDB web application for creating and managing travel listings.
Users can add, view, edit, and delete listings with details like title, description, price, location, and country.
This project demonstrates CRUD operations, RESTful routing, and EJS templating.

🧩 Project Overview

Wanderlust is a full-stack web application inspired by Airbnb that enables users to create, view, update, and delete travel listings.
The project demonstrates core concepts of the MERN-like stack (MongoDB, Express, Node.js) with EJS templating, server-side validation, and robust error handling.

Developed as a Major Project, this system focuses on seamless CRUD operations, modular architecture, and a user-friendly interface for managing travel listings.

⚙️ Tech Stack
| Layer                 | Technology                                 |
| --------------------- | ------------------------------------------ |
| **Frontend**          | EJS, Bootstrap 5, Font Awesome             |
| **Backend**           | Node.js, Express.js                        |
| **Database**          | MongoDB (Mongoose ODM)                     |
| **Templating Engine** | EJS with ejs-mate                          |
| **Validation**        | Joi                                        |
| **Utilities**         | Method-Override, Express Static Middleware |
| **Error Handling**    | ExpressError, wrapAsync                    |


🚀 Features Implemented

Complete CRUD Functionality:
Users can add, browse, edit, and delete listings.

Dynamic Frontend using EJS:
Reusable layouts and partials (navbar, footer, boilerplate) ensure maintainability.

Robust Validation:

Client-side validation using Bootstrap and custom JavaScript.

Server-side validation using Joi schema to prevent invalid data entry.

Centralized Error Handling:
Implemented via a custom ExpressError class and a global middleware for consistent error responses.

Async Error Wrapper:
All asynchronous route handlers are encapsulated using wrapAsync() for cleaner code and better stability.

Responsive UI:
Designed with Bootstrap 5 and Font Awesome for a simple and professional look.

🧱 Folder Structure

(https://github.com/user-attachments/assets/c06e0ee7-93f6-481c-9b45-2e7825926413)

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

| Route                | Method | Description                |
| -------------------- | ------ | -------------------------- |
| `/listings`          | GET    | Show all listings          |
| `/listings/new`      | GET    | Form to create new listing |
| `/listings`          | POST   | Add new listing            |
| `/listings/:id`      | GET    | Show details of a listing  |
| `/listings/:id/edit` | GET    | Edit listing form          |
| `/listings/:id`      | PUT    | Update listing             |
| `/listings/:id`      | DELETE | Delete listing             |


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
| Date             | Change                                              |
| ---------------- | --------------------------------------------------- |
| **Oct 15, 2025** | Created base server and MongoDB schema              |
| **Oct 16, 2025** | Fixed `toLocalString` → `toLocaleString`            |
| **Oct 16, 2025** | Added CRUD routes and EJS forms                     |
| **Oct 16, 2025** | Implemented method-override for PUT/DELETE          |
| **Oct 16, 2025** | Configured nodemon for hot reload                   |
| **Oct 17, 2025** | Added EJS layouts (`boilerplate.ejs`)               |
| **Oct 17, 2025** | Fixed image retention logic on edit                 |
| **Oct 17, 2025** | Added default Unsplash fallback image               |
| **Oct 17, 2025** | Resolved `Cannot read property 'image' of null` bug |
| **Oct 17, 2025** | Updated folder structure & pushed to GitHub         |

