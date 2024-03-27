// import express from "express";
// import db from "../db/connection.js";
// import { ObjectId } from "mongodb";
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";

// const router = express.Router();
// router.use(cookieParser());

// // Secret key for JWT (should be stored securely, not hard-coded here)
// const secretKey = "your_secret_key";

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password)
//       return res.status(401).send("Unauthorized Request");

//     let user = await db.collection("users").findOne({ email });

//     if (!user) return res.status(404).send("User not found");

//     if (user.password !== password)
//       return res.status(400).send("Incorrect password");

//     // Generate JWT token
//     const token = jwt.sign({ email: user.email }, secretKey, {
//       expiresIn: "24h", // Token expiration time
//     });

//     // Set token as a cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
//     });

//     return res.status(200).send("Agent Found");
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Error adding agent");
//   }
// });

// router.get("/unauthorized", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../client/src/components/Unauthorized.jsx")
//   );
// });

// router.get("/", async (req, res) => {
//   let collection = await db.collection("agents");
//   let results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });

// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("agents");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// router.post("/", async (req, res) => {
//   try {
//     let newDocument = {
//       name: req.body.name,
//       rating: req.body.rating,
//       fee: req.body.fee,
//       region: req.body.region,
//     };
//     let collection = await db.collection("agents");
//     let result = await collection.insertOne(newDocument);
//     res.send(result).status(204);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding agent");
//   }
// });

// router.patch("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         rating: req.body.rating,
//         fee: req.body.fee,
//         region: req.body.region,
//       },
//     };

//     let collection = await db.collection("agents");
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating agent");
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };

//     const collection = db.collection("agents");
//     let result = await collection.deleteOne(query);

//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error deleting agent");
//   }
// });

// export default router;

////////////////////////////////////////////////////////////////

import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid"; // Import uuid package
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(cookieParser());

// Secret key for JWT (should be stored securely, not hard-coded here)
const secretKey = "your_secret_key";

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(401).send("Unauthorized Request");

    let user = await db.collection("users").findOne({ email });

    if (!user) return res.status(404).send("User not found");

    if (user.password !== password)
      return res.status(400).send("Incorrect password");

    // Generate session token using uuid
    const sessionToken = uuidv4();

    // Set token as a cookie with 24-hour expiration
    res.cookie("session_token", sessionToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    });

    // Optionally, sign a JWT token with the secret key
    const jwtToken = jwt.sign({ email: user.email }, secretKey, {
      expiresIn: "24h", // Token expiration time
    });

    return res.status(200).send("Agent Found");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error adding agent");
  }
});
// Validate token endpoint
router.get("/validate_token", async (req, res) => {
  try {
    const token = req.query.token;

    if (!token) {
      return res.status(400).json({
        status: "error",
        data: null,
        message: "Token is required",
      });
    }

    // Verify the JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: "error",
          data: { valid: false },
          message: "Invalid token",
        });
      }

      // If the token is valid, extract user information and return it
      const { email } = decoded;
      const user = {
        first_name: "John", // Example data, replace with actual user data
        last_name: "Doe",
        id: "123456789",
      };

      return res.status(200).json({
        status: "ok",
        data: { valid: true, user },
        message: null,
      });
    });
  } catch (error) {
    console.error("Error validating token:", error);
    return res.status(500).json({
      status: "error",
      data: null,
      message: "Internal server error",
    });
  }
});

router.get("/unauthorized", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/src/components/Unauthorized.jsx")
  );
});

router.get("/", async (req, res) => {
  let collection = await db.collection("agents");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("agents");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      rating: req.body.rating,
      fee: req.body.fee,
      region: req.body.region,
    };
    let collection = await db.collection("agents");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding agent");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        rating: req.body.rating,
        fee: req.body.fee,
        region: req.body.region,
      },
    };

    let collection = await db.collection("agents");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating agent");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("agents");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting agent");
  }
});

export default router;
