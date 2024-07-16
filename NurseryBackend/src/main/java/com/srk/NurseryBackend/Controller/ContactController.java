package com.srk.NurseryBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srk.NurseryBackend.Model.Contact;
import com.srk.NurseryBackend.Service.ContactService;

@RestController
@RequestMapping("/nurserydb/")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
	@Autowired
	ContactService conServ;
	@PostMapping("/contact")
	public Contact save(@RequestBody Contact c)
	{
		return conServ.insert(c);
	}
	@GetMapping("/contact")
	public List<Contact> getAll()
	{
		return conServ.getAll();
	}
}
