package com.cognizant.dev.portal.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cognizant.dev.portal.models.Booking;
import com.cognizant.dev.portal.repositories.BookingRepository;


@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingRepository bookingRepository;

	@Override
	public Booking createBooking(Booking booking) {
		return bookingRepository.save(booking);
	}
	
	public Booking getBookingById(long bid) {	
		Booking t = bookingRepository.findById(bid).get();
		return t;
	}

	
	
}
