require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const path = require("path");
const destinationsRouter = require("./routes/destinations");
const packagesRouter = require("./routes/packages");

const app = express();

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
//     methods: ["GET"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    return seedData();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.use("/api/destinations", destinationsRouter);
app.use("/api/packages", packagesRouter);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const seedData = async () => {
  try {
    const Destination = require("./models/Destination");
    const Package = require("./models/Package");

    await Destination.deleteMany({});
    await Package.deleteMany({});

    const destinations = [
      {
        title: "Jammu & Kashmir",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Himachal Pradesh",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Goa",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Assam",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Maharashtra",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Kerala",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Kerala",
        price: "₹4999/-",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ];

    const packages = [
      {
        title: "Kashmir Holiday Tour",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Himachal Pradesh Tour",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Goa Holiday Tour",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ];

    await Destination.insertMany(destinations);
    await Package.insertMany(packages);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

const PORT = process.env.PORT || 5069;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
