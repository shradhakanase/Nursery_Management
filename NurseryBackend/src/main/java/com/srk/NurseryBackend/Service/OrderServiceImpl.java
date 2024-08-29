package com.srk.NurseryBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.OrderDetails;
import com.srk.NurseryBackend.Repository.OrderRepository;



@Service
@Qualifier("orRepo")
public class OrderServiceImpl implements OrderService{
@Autowired
OrderRepository orRepo;
	

	@Override
	public List<OrderDetails> getAll() {
		// TODO Auto-generated method stub
		return orRepo.findAll();
	}

	@Override
	public OrderDetails insert(OrderDetails r) {
		// TODO Auto-generated method stub
		return orRepo.save(r);
	}

}
