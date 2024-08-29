package com.srk.NurseryBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private int oid;
private String name,address,contact,quantity;
public OrderDetails() {
	super();
	// TODO Auto-generated constructor stub
}
public OrderDetails(String name, String address, String contact, String quantity, String amt) {
	super();
	this.name = name;
	this.address = address;
	this.contact = contact;
	this.quantity = quantity;
	
}
public int getOid() {
	return oid;
}
public void setOid(int oid) {
	this.oid = oid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getContact() {
	return contact;
}
public void setContact(String contact) {
	this.contact = contact;
}
public String getQuantity() {
	return quantity;
}
public void setQuantity(String quantity) {
	this.quantity = quantity;
}


}
