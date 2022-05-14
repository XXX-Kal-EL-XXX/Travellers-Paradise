package com.cognizant.dev.portal.models;

public class AuthenticationResponse {
	
	String jwtToken;
	String fname;
	String email;
	Long userId;

	public AuthenticationResponse(String jwt, String fname, String email, Long id) {
		this.jwtToken = jwt;
		this.fname = fname;
		this.userId = id;
		this.email = email;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
