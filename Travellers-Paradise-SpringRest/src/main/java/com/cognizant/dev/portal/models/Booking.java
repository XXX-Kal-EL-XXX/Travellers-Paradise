package com.cognizant.dev.portal.models;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name = "booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long bookingId;
	
	@OneToOne
	private Inventory inventory;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String phoneNumber;
	
	private Long invoiceNumber;
	
	
	
	
	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public Long getInvoiceNumber() {
		return invoiceNumber;
	}


	public void setInvoiceNumber(Long invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}


	public Long getBookingId() {
		return bookingId;
	}


	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}


	public Inventory getInventory() {
		return inventory;
	}


	public void setInventory(Inventory inventory) {
		this.inventory = inventory;
	}


	public LocalDate getCheckIn() {
		return checkIn;
	}


	public void setCheckIn(LocalDate checkIn) {
		this.checkIn = checkIn;
	}


	public LocalDate getCheckOut() {
		return checkOut;
	}


	public void setCheckOut(LocalDate checkOut) {
		this.checkOut = checkOut;
	}


	public Long getTotalPrice() {
		return totalPrice;
	}


	public void setTotalPrice(Long totalPrice) {
		this.totalPrice = totalPrice;
	}




	public void setUser(Users user) {
		this.user = user;
	}


	public Date getDateCreated() {
		return dateCreated;
	}


	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}


	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column (name = "checkIn")
	private LocalDate  checkIn;
	
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column (name = "checkOut")
	private LocalDate checkOut;
	
	
	private Long totalPrice;
	
	@ManyToOne(fetch = FetchType.LAZY) 
	private Users user;
	
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column (name = "date_created")
	public Date dateCreated;


	public Booking(Inventory inventory, LocalDate checkIn, LocalDate checkOut, Long totalPrice,
			Users user, String firstName, String lastName, String email, Long invoiceNumber, String phoneNumber) {
		super();
		this.inventory = inventory;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.totalPrice = totalPrice;
		this.user = user;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.invoiceNumber = invoiceNumber;
		this.phoneNumber = phoneNumber;
	}
	
	public Booking() {
		
	}
	
	
	
	
	
	
	
	

}
