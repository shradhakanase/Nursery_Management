package com.srk.NurseryBackend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.AdminLogin;
import com.srk.NurseryBackend.Repository.AdminRepository;

@Service
@Qualifier("adminRepo")
public class AdminServiceImpl implements AdminService{
@Autowired
AdminRepository adminRepo;
	@Override
	public AdminLogin login(String e, String p) {
		// TODO Auto-generated method stub
		return adminRepo.findByEmailAndPassword(e, p);
	}

}
