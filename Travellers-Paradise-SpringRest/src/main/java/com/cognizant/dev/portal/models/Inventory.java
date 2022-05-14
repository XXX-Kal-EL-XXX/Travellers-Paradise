package com.cognizant.dev.portal.models;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "inventory")
public class Inventory {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column (name = "inventory_id")
	private Long inventoryId;
	
	@Column (name = "price")
	private Long price;
	
	@Column (name = "room_type")
	private RoomType roomType;
	
	
	
	public Inventory(Long inventoryId, Long price, RoomType roomType) {
		super();
		this.inventoryId = inventoryId;
		this.price = price;
		this.roomType = roomType;
	}
	
	public Long getInventoryId() {
		return inventoryId;
	}
	public void setInventoryId(Long inventoryId) {
		this.inventoryId = inventoryId;
	}
	public Long getPrice() {
		return price;
	}
	public void setPrice(Long price) {
		this.price = price;
	}
	public RoomType getRoomType() {
		return roomType;
	}
	public void setRoomType(RoomType roomType) {
		this.roomType = roomType;
	}
	
	public Inventory() {
		
	}
	
	
	
}