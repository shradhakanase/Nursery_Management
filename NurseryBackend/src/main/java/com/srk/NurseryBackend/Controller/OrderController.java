package com.srk.NurseryBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srk.NurseryBackend.Model.OrderDetails;

import com.srk.NurseryBackend.Service.OrderService;

@RestController
@RequestMapping("/nurserydb/")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
@Autowired
OrderService orServ;
@PostMapping("/order")
public OrderDetails save(@RequestBody OrderDetails r)
{
	return orServ.insert(r);
}
@GetMapping("/order")
public List<OrderDetails> getAll()
{
	return orServ.getAll();
}

}
