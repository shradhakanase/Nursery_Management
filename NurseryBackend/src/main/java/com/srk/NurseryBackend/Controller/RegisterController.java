package com.srk.NurseryBackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srk.NurseryBackend.Model.Register;
import com.srk.NurseryBackend.Service.RegisterService;

@RestController
@RequestMapping("/nurserydb/")
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {
	@Autowired
	RegisterService regServ;

	@PostMapping("/register")
	public Register save(@RequestBody Register r)
	{
		return regServ.insert(r);
	}
	@GetMapping("/register")
	public List<Register> getAll()
	{
		return regServ.getAll();
	}
	@GetMapping("/login/{email}/{password}")
	public Register login(@PathVariable("email")String email,@PathVariable("password")String password)
	{
		return regServ.login(email, password);
	}
}
