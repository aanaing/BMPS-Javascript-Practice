"use strict";
//-------------------- function -----------------
////////////Default Parameter ------

const booking = [];
const createBooking = function (flightNumber, passenger = 4, price = 8000 * 2) {
  const book = {
    flightNumber,
    passenger,
    price,
  };

  booking.push(book);
  console.log(booking);
};
createBooking("2bb"); //flightNumber: '2bb', passenger: 4, price: 16000
createBooking("2vv", 3, 2000); //flightNumber: '2vv', passenger: 3, price: 2000
