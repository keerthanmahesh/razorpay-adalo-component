require('dotenv').config()

const app = require("express")();
const cors = require("cors");
const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "<razorpay_key_id>",
  key_secret: "<razorpay_key_secret>",
});

app.use(cors());

app.post("/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 5;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log("Error: " + JSON.stringify(error));
  }
});

app.listen(1337, () => {
  console.log("Backend running at localhost:1337");
});
