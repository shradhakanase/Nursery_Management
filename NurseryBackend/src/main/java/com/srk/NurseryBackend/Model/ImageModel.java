package com.srk.NurseryBackend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "image_model")
public class ImageModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
private String name;
private String type;
@Column(length=50000000)
private byte[] picbyte;

public ImageModel() {
	
}

public ImageModel(String name, String type, byte[] picbyte) {
	super();
	this.name = name;
	this.type = type;
	this.picbyte = picbyte;
}

public Long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public byte[] getPicbyte() {
	return picbyte;
}

public void setPicbyte(byte[] picbyte) {
	this.picbyte = picbyte;
}

}
