package com.srk.NurseryBackend.Model;

import java.util.List;

public class OrderInput {
private String name,address,contact;
private List<OrderProductQuantity> orderProductQuantityList;
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
public List<OrderProductQuantity> getOrderProductQuantityList() {
	return orderProductQuantityList;
}
public void setOrderProductQuantityList(List<OrderProductQuantity> orderProductQuantityList) {
	this.orderProductQuantityList = orderProductQuantityList;
}

}
