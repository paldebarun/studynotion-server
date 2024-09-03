const Razorpay = require("razorpay");

exports.instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY || "rzp_test_skJr1L04f8k9Ks",
	key_secret: process.env.RAZORPAY_SECRET || "blu69tqbMh26iKvGXriRPPXu",
});
