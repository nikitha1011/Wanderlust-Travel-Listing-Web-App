🌍 Wanderlust — Travel Listing Web Application

Wanderlust is a full-stack travel listing platform inspired by Airbnb, designed to help users explore, create, and manage travel destinations with ease. This project demonstrates advanced full-stack development skills with a focus on MVC architecture and interactive maps integration.

🧭 Project Overview

Wanderlust is a dynamic web application built with Node.js, Express, MongoDB, and EJS, emphasizing:

MVC Architecture: Clean separation of Models, Views, and Controllers for scalability and maintainability

Map Integration: Interactive Mapbox maps for every listing, enhancing user experience

CRUD Functionality: Users can create, read, update, and delete listings

Cloud Image Management: Upload and display images with Cloudinary

Responsive UI: Designed with Bootstrap 5 for mobile-first responsiveness

Validation & Error Handling: Backend validation via Joi and centralized error management

This project reflects real-world application development, combining robust backend logic with a modern, user-friendly interface.

🚀 Key Features

🏗️ MVC Architecture: Organized structure separating routes, models, and views for clean code and scalability

🗺️ Interactive Maps (Mapbox): Users can see locations visually and interact with destination maps

✨ Full CRUD Operations: Add, view, edit, and delete travel listings

🖼️ Cloudinary Image Uploads: Efficient image handling and storage

💅 Responsive Design: Smooth experience across desktop, tablet, and mobile

🛡️ Validation & Error Handling: Backend validation with Joi, centralized error middleware

🧩 Reusable Components: EJS + ejs-mate for templating and modular views

🧩 Reusable Components: EJS + ejs-mate for templating and modular views
| Category          | Technology                               |
| ----------------- | ---------------------------------------- |
| **Frontend**      | EJS, Bootstrap 5                         |
| **Backend**       | Node.js, Express.js                      |
| **Database**      | MongoDB (Mongoose)                       |
| **Validation**    | Joi                                      |
| **Utilities**     | Method-Override, ExpressError, wrapAsync |
| **Maps**          | Mapbox                                   |
| **Image Storage** | Cloudinary                               |
| **Deployment**    | Render                                   |


⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/nikitha1011/Wanderlust-Travel-Listing-Web-App.git
cd Wanderlust-Travel-Listing-Web-App


2️⃣ Install Dependencies

npm install


3️⃣ Configure Environment Variables (.env)

CLOUD_NAME=<cloudinary_name>
CLOUD_API_KEY=<cloudinary_api_key>
CLOUD_API_SECRET=<cloudinary_api_secret>
MAP_TOKEN=<mapbox_token>
ATLASDB_URL=<mongodb_connection_string>
NODE_ENV=development


4️⃣ Run the Application

nodemon app.js


| Route                | Method | Description                  |
| -------------------- | ------ | ---------------------------- |
| `/`                  | GET    | Home route                   |
| `/listings`          | GET    | View all listings            |
| `/listings/new`      | GET    | Form to create a new listing |
| `/listings`          | POST   | Add a new listing            |
| `/listings/:id`      | GET    | View details of a listing    |
| `/listings/:id/edit` | GET    | Form to edit a listing       |
| `/listings/:id`      | PUT    | Update a listing             |
| `/listings/:id`      | DELETE | Delete a listing             |


🎨 UI & Maps Integration

Responsive Bootstrap 5 Layout

Listing Cards: Image previews, pricing, and location

Mapbox Integration: Each listing includes an interactive map displaying the exact location

Reusable EJS Templates: Modular views with header, footer, and navigation

Form Validation Feedback: Both client-side (Bootstrap) and server-side (Joi)

🌐 Deployment

Live Application: Wanderlust on Render

GitHub Repository: Wanderlust Web App

🏆 Summary

Wanderlust is a full-stack, production-ready application highlighting:

MVC architecture for clean, maintainable code

Mapbox maps for interactive location visualization

Full CRUD functionality with cloud image management

Robust validation and error handling

Responsive, modern UI design

It demonstrates the ability to integrate advanced features like interactive maps into a real-world web application, reflecting strong backend and frontend skills.
