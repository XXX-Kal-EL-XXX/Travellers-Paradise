package com.cognizant.dev.portal.services;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.cognizant.dev.portal.models.Booking;
import com.cognizant.dev.portal.models.LoginForm;
import com.cognizant.dev.portal.models.Users;


public interface UserService {
	int length = 8;
	
	public String passcode();
	
	public ResponseEntity<?> loginUser(LoginForm data) throws Exception;
	
	public List<Users> list();
	
	public ResponseEntity<?> createUser(Users user);
	
	
	
	public Set<Booking> getUserBookings(long id);
	
	public Users addBooking(Long uid, Booking booking);

	public ResponseEntity<?> sendMail(String email);
	


}
