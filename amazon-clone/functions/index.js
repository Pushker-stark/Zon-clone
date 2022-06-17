const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JwUHUSAtorW63tblyJ8OdzzwfkL8dG7GFnyLnHuK7GQvUasXE3dGQsLZSgYNAIGeMemQRu8wXrxel462DnWbnKZ005Y3fF38O"
);
//API

//App config
const app = express();
//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API route
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  //OK-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//example end point
// http://localhost:5001/clone-2a04d/us-central1/api
