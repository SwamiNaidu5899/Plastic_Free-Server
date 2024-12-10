const express = require("express");
const app = express();
// env files
const dotenv = require("dotenv");
dotenv.config();
// import database
const db = require("./config/db");
const PORT = process.env.PORT || 5000;
// cors
const cors = require("cors");
app.use(cors());

// routes import
const userRoutes = require("./routes/userroutes");
const contactRoutes = require("./routes/contactroute");
const subscribeRoute = require("./routes/subscriberoute");
const scheduleRoute = require("./routes/scheduleRoute")
// middleware
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribe", subscribeRoute);
app.use("/api/schedule",scheduleRoute)

// Serve static files from React
if (process.env.NODE_ENV === "production") {
  const path = require("path");

  // Serve static files from React build folder
  app.use(express.static(path.join(__dirname, "client/build")));

  // Home route - can be modified if needed
  app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "client/build", "index.html"));
    res.send("this is home route")
  });
}

// For all other routes, return the index.html (React app)
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/build", "index.html"));\
  res.send("this is home route")
});

// listen on port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
db()