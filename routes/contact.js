let express = require('express');
let router = express.Router();
let postmark = require("postmark");
const POSTMARK_SERVERKEY = process.env.POSTMARK_SERVERKEY;
// Send an email:
let client = new postmark.Client(POSTMARK_SERVERKEY);

router.post("/", function (req, res) {

	console.log(req.body);
	/* client.sendEmail({
		"From": req.body.email,
		"To": "tech@biscuitech.me",
		"Subject": "New Message from Website: " + req.body.subject,
		"TextBody": req.body.message
	})
		.then(client.sendEmail({
			"From": "tech@biscuitech.me",
			"To": req.body.email,
			"Subject": "Message Reception Confirmation",
			"TextBody": "This is an automated email to let you know that we have received your message. \n Please allow 48 business hours at most to process."
		})
		)
		.catch(res => {
			res.send("There seems to be an error with your message. Please");
			throw new Error("PostMark Failed to deliver message");
		}); */
		res.send('200')
});
module.exports = router;