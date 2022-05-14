package com.cognizant.dev.portal.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cognizant.dev.portal.models.Users;
import com.cognizant.dev.portal.repositories.UsersRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
	@Autowired
	UsersRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Users user = userRepository.findByEmail(email);
		System.out.println("user found"+user);
		
		return new org.springframework.security.core.userdetails
				.User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

}
