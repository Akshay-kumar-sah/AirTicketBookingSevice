const express = require('express');
const BookingController = require('../../controllers/index');
//const bookingController = new BookingController();
// const {createChannel} = require('../../utils/messageQueue');

const router = express.Router();
//const channel = await createChannel();
const bookingController = new BookingController();

router.post('/publish',bookingController.sendMessageToQueue);
router.post('/bookings',bookingController.create);
module.exports = router;