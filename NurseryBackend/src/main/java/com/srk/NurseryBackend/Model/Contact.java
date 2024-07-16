package com.srk.NurseryBackend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long cid;
private String name,email,subject,message;
public Contact() {
	super();
	// TODO Auto-generated constructor stub
}
public Contact(String name, String email, String subject, String message) {
	super();
	this.name = name;
	this.email = email;
	this.subject = subject;
	this.message = message;
}
public long getCid() {
	return cid;
}
public void setCid(long cid) {
	this.cid = cid;
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
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}

}
