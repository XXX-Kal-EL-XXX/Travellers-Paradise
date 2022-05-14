package com.cognizant.dev.portal.repositories;


import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.dev.portal.models.Booking;
import com.cognizant.dev.portal.models.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	
	
    Users findByEmail(String email);
    Boolean existsByEmail(String email);
  
    Set<Booking> getBookingsByUserId(Long userId);
    
    Users findByUserId(long uid);
    
}
