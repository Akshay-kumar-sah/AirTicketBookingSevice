const {StatusCodes} = require('http-status-codes');
//cost {Ser} = require('../utils/errors/index');
const {BookingService} = require('../services/index');

const bookingService = new BookingService();

const {createChannel,publishMessage } = require('../utils/messageQueue');
const {REMINDER_BINDING_KEY} = require('../config/serverConfig');

class BookingController { 
    
    constructor(){
        

    }

    async sendMessageToQueue (req,res) {
    const channel = await createChannel();
    const data = {message:'SUCCESS'};
    publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(data));
    return res.status(200).json({
        message: 'Successfully published the event'
    });
    }
     async create (req, res) {

    try {
        const response = await bookingService.createBooking(req.body);
      //  console.log('from booking controller',response);
       // console.log(StatusCodes);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed booking',
            success: true,
            err: {},
            data: response
         

        });
    
    } catch (error) {
       console.log('from booking controller ERROR', error);
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            err: error.explanation,
            data: {}

    });

}


}

}
module.exports =  BookingController;


