🌍 Wanderlust — Travel Listing Web Application

A full-stack web application that enables users to explore, create, edit, and manage travel destination listings with a clean and responsive interface.

🧭 Overview

Wanderlust is a dynamic travel listing platform inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS.
It demonstrates strong skills in backend architecture, RESTful APIs, form validation, and error handling, combined with a modern Bootstrap UI.

This project is part of continuous learning in full-stack web development, reflecting daily progress and practical implementation of core development concepts.

🚀 Features

✨ Full CRUD Operations — Create, view, update, and delete travel listings

💅 Responsive UI — Built with Bootstrap 5 for a smooth experience across devices

🧩 Dynamic Templating — EJS + EJS-Mate layouts for reusable components

🛡️ Form Validation — Joi (backend) + Bootstrap validation (frontend)

⚙️ Error Management — Custom ExpressError class and global error handler

🔄 Async Handling — Clean promise handling via wrapAsync utility

🧠 Modular Structure — Organized routes, views, and utilities for scalability

🧱 Tech Stack
Category	Technology
Frontend	EJS, Bootstrap 5, Font Awesome
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
Templating Engine	EJS + EJS-Mate
Validation	Joi
Utilities	Method-Override, Path, ExpressError, wrapAsync
🗂️ Project Structure
Wanderlust/
│
├── models/
│   └── listing.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       ├── show.ejs
│       └── error.ejs
│
├── schema.js
├── app.js
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/Wanderlust.git
cd Wanderlust

2️⃣ Install Dependencies
npm install

3️⃣ Configure MongoDB

Ensure MongoDB is running locally or update your connection string in app.js:

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

4️⃣ Run the Application
nodemon app.js


App runs at: http://localhost:8080

🌐 Application Routes
Route	Method	Description
/	GET	Root route
/listings	GET	Fetch and display all listings
/listings/new	GET	Form to create a new listing
/listings	POST	Add a new listing
/listings/:id	GET	Show details of a specific listing
/listings/:id/edit	GET	Form to edit an existing listing
/listings/:id	PUT	Update a listing
/listings/:id	DELETE	Delete a listing
🧠 Validation & Error Handling
🔸 Server-Side Validation (Joi)
const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("")
  }).required()
});

🔸 Client-Side Validation

Bootstrap’s validation system + script.js prevent invalid form submissions.

🔸 Centralized Error Middleware
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

📆 Day-to-Day Work & Development Log
Date	Task	Description
Oct 15, 2025	Server & DB Setup	Configured Express server and MongoDB connection. Created basic schema and connected successfully.
Oct 16, 2025	CRUD Routes	Implemented GET, POST, PUT, and DELETE routes with EJS rendering. Added method-override for form-based PUT/DELETE requests.
Oct 17, 2025	Validation & Templates	Integrated Bootstrap + custom JS validation. Added ejs-mate for layouts and created reusable navbar and footer includes.
Oct 18, 2025	Error Handling	Introduced ExpressError and wrapAsync utilities. Added centralized error handling middleware and error.ejs page.
Oct 19, 2025	UI & Polishing	Improved card layouts, styled forms, and fixed image handling during edit. Finalized layout structure and validated all routes in Postman.

🧩 Daily Tasks Include:

Designing and maintaining EJS templates

Testing APIs via Postman & Hoppscotch

Managing version control using Git & GitHub

Debugging validation and rendering issues

Writing clean, reusable Express middleware

Keeping consistent commits and documentation

🎨 User Interface Highlights

Responsive Bootstrap 5 layout

Cards for travel listings with images and pricing

Clean typography using Google Fonts (Plus Jakarta Sans)

Form validation feedback (valid/invalid states)

Centralized layout with header, footer, and navigation
