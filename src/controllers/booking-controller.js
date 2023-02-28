const {StatusCodes} = require('http-status-codes');
//cost {Ser} = require('../utils/errors/index');
const {BookingService} = require('../services/index');

const bookingService = new BookingService();

// class BookingController {

//     constructor(){

//     }

  const create = async (req, res) => {

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


module.exports = {
    create
}
