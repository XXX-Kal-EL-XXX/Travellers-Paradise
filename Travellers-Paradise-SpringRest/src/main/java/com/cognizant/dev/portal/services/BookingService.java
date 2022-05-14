package com.cognizant.dev.portal.services;



import com.cognizant.dev.portal.models.Booking;


public interface BookingService {
	
	
	public Booking getBookingById(long bid);
	
	public Booking createBooking(Booking booking);
	

}
