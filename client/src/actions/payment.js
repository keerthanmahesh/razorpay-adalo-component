export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  const options = {
    key: "<razorpay_key_id>",
    currency: data.currency,
    amount: data.amount,
    name: "Make Payment Online",
    description: "Online Transaction",
    image: "https://i.imgur.com/3g7nmJC.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID: " + response.razorpay_payment_id);
      alert("ORDER ID: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Tony Stark",
      email: "tony@gmail.com",
      contact: "9999999999",
    },
    theme: { color: '#04a797' }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
