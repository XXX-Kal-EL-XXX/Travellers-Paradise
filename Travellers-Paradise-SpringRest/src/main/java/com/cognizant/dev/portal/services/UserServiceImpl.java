 package com.cognizant.dev.portal.services;

import java.util.List;
import java.util.Set;

import javax.mail.internet.MimeMessage;

import org.apache.commons.text.RandomStringGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.dev.portal.models.AuthenticationResponse;
import com.cognizant.dev.portal.models.Booking;
import com.cognizant.dev.portal.models.ErrorResponse;
import com.cognizant.dev.portal.models.LoginForm;
import com.cognizant.dev.portal.models.Users;
import com.cognizant.dev.portal.repositories.UsersRepository;
import com.cognizant.dev.portal.utils.JwtUtil;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private CustomUserDetailsService userDetailsService;
	


	@Autowired
	private JwtUtil jwtTokenUtil;
	
	@Autowired
	private PasswordEncoder bpe;
	
	@Autowired
	private JavaMailSender sender;
	
	public String passcode() {
	    RandomStringGenerator pwdGenerator = new RandomStringGenerator.Builder().withinRange(33, 45)
	        .build();
	    return pwdGenerator.generate(length);
	}
	
	public ResponseEntity<?> loginUser(LoginForm data) throws Exception {
		try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(data.getEmail(), data.getPassword())
            );
        } catch (BadCredentialsException ex) {
        	System.out.println("bad credentials"+ex.getStackTrace());
        	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("Invalid Credentials"));
        } catch (Exception e) {
        	System.out.println(e);
        	return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ErrorResponse("Invalid Credentials"));
        }
		
		final UserDetails user = userDetailsService.loadUserByUsername(data.getEmail());
		Users u = this.usersRepository.findByEmail(data.getEmail());
		final String jwt = jwtTokenUtil.generateToken(user);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new AuthenticationResponse(jwt,
				u.getFirstName(), u.getEmail(), u.getUserId()));
	}
	
	public List<Users> list() {		
		return usersRepository.findAll();
	}
	
	public ResponseEntity<?> createUser(Users user) {
	
		System.out.println(user.toString());
		user.setPassword(bpe.encode(user.getPassword())); 
		
		if (usersRepository.existsByEmail(user.getEmail())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("Email already exists!"));
		}
		
		 Users u =  usersRepository.save(user);
		 initUsername(user.getEmail(), user.getFirstName(), user.getLastName(), user.getUserId());
		 
		 if(u==null) {
			 return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse("Error while saving data"));
		 }
		 else {
			return ResponseEntity.status(HttpStatus.OK).body(u); 
		}
		
	}
	
	public Set<Booking> getUserBookings(long id) {	
		return usersRepository.getBookingsByUserId(id);
	}

	@Override
	public Users addBooking(Long uid, Booking booking) {
		// TODO Auto-generated method stub
		
		Users user = usersRepository.getOne(uid);
		if(user != null) {
			booking.setUser(user);
			user.addBooking(booking);
			return usersRepository.save(user);
			
			//bookingService.createBooking(booking);
		}
		
		return null;
	}


	

	@Override
	public ResponseEntity<?> sendMail(String email) {
		Users user;
		try {
			user  = usersRepository.findByEmail(email);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("Invalid Credentials"));
		}
			
			try {
				System.out.println(forgotPasscode(user.getEmail(), user.getLastName(), user.getFirstName(), user.getUserId()));
				
			} catch (Exception e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("Error Sending Request. Try Later"));
			}
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(user.getUserId());
		
	}
	
	
     	 public String forgotPasscode(String email, String lname, String fname, long uid) {
         String msg = "Hi "+fname+ " as per your request for details to access Traveller's Paradise"
         		+ "\nHere is your name:"+fname+" "+lname 
        		+ "\n\nHere is your Email: "+email
        		+"\nHere is your User-ID:"+uid
         		+ "\n\nThis is just a Security alert that you want to reset your password."
         		+ "\n\nPlease revert back to this Email if you have any questions.\n\n"
         		+ "Thank You, \nTraveller's Paradise Team.";
   	  
        	  String subject = "Traveller's Paradise Forgot Password";
   	
     	try {
    		this.sendEmail(email, lname, fname, uid, msg, subject);
    		return "Sent Successfully";
    	} catch (Exception ex) {
    		return "Error in sending mail:" + ex;
    	}
    }
   
    public String initUsername(String email, String lname, String fname, long uid) {
   	
    	System.out.println("in mailer");
   	    String msg = "Hi "+lname+ ", Thank you for registring with us."
          		+ "\n\nHave a pleasant Hotel Booking"
          		+ "\n\nPlease revert back to this Email if you have any questions.\n\n"
          		+ "Thank You, \nTraveller's Paradise Team.";
    	  
    	  String subject = "Traveller's Paradise New User Registration";
    	
    	try {
    		this.sendEmail(email, lname, fname, uid, msg, subject);
    		return "Sent Successfully";
    	} catch (Exception ex) {
    		return "Error in sending mail:" + ex.getStackTrace();
    	}
   }
   
   private void sendEmail(String email, String lname, String fname, long uid, String msg, String subject) throws Exception{
       MimeMessage message = sender.createMimeMessage();
       MimeMessageHelper helper = new MimeMessageHelper(message);
        
       helper.setTo(email);
       helper.setText(msg);
       helper.setSubject(subject);
        
       sender.send(message);
   }

   
		
}
