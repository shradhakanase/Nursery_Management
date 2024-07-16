package com.srk.NurseryBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long fid;
private String name,email,message,rating;
public Feedback() {
	super();
	// TODO Auto-generated constructor stub
}
public Feedback(String name, String email, String message, String rating) {
	super();
	this.name = name;
	this.email = email;
	this.message = message;
	this.rating = rating;
}
public long getFid() {
	return fid;
}
public void setFid(long fid) {
	this.fid = fid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
public String getRating() {
	return rating;
}
public void setRating(String rating) {
	this.rating = rating;
}

}
