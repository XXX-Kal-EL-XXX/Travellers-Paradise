package com.cognizant.dev.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.dev.portal.models.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>  {

}
