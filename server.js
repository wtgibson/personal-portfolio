// NPM Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Express Server
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public Routes

// Landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
});

// // Landing page
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/views/index.html"))
// });

// Technologist page
app.get("/technologist", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/views/technologist.html"));
});

// // Entrepreneur page
// app.get("/entrepreneur", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/views/entrepreneur.html"));
// });

// // Investor page
// app.get("/investor", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/views/investor.html"));
// });

// About page
app.get("/about", (req, res) => {
    console.log("About page routing");
    console.log(path.join(__dirname, "./public/views/about.html"));
    res.sendFile(path.join(__dirname, "./public/views/about.html"));
});

// Contact page
app.get("/contact", (req, res) => {
    console.log("Contact page routing");
    console.log(path.join(__dirname, "./public/views/contact.html"));
    res.sendFile(path.join(__dirname, "./public/views/contact.html"));
});

// Education page
app.get("/education", (req, res) => {
    console.log("Education page routing");
    console.log(path.join(__dirname, "./public/views/education.html"));
    res.sendFile(path.join(__dirname, "./public/views/education.html"));
});

// Interests page
app.get("/interests", (req, res) => {
    console.log("Interests page routing");
    console.log(path.join(__dirname, "./public/views/interests.html"));
    res.sendFile(path.join(__dirname, "./public/views/interests.html"));
});

// Resume page
app.get("/resume", (req, res) => {
    console.log("Resume page routing");
    console.log(path.join(__dirname, "./public/views/resume.html"));
    res.sendFile(path.join(__dirname, "./public/views/resume.html"));
});

// Skills page
app.get("/skills", (req, res) => {
    console.log("Skills page routing");
    console.log(path.join(__dirname, "./public/views/skills.html"));
    res.sendFile(path.join(__dirname, "./public/views/skills.html"));
});

// Web Development page
app.get("/web-development", (req, res) => {
    console.log("Web Development page routing");
    console.log(path.join(__dirname, "./public/views/web-development.html"));
    res.sendFile(path.join(__dirname, "./public/views/web-development.html"));
});

// Work page
app.get("/work", (req, res) => {
    console.log("Work Experience page routing");
    console.log(path.join(__dirname, "./public/views/work-experience.html"));
    res.sendFile(path.join(__dirname, "./public/views/work-experience.html"));
});

// Server Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

