package com.srk.NurseryBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.Register;
import com.srk.NurseryBackend.Repository.RegisterRepository;

@Service
@Qualifier("RegRepo")
public class RegisterServiceImpl implements RegisterService{
	@Autowired
RegisterRepository regRepo;
	@Override
	public Register insert(Register r) {
		// TODO Auto-generated method stub
		return regRepo.save(r);
	}

	@Override
	public List<Register> getAll() {
		// TODO Auto-generated method stub
		return regRepo.findAll();
	}

	@Override
	public Register login(String e, String p) {
		// TODO Auto-generated method stub
		return regRepo.findByEmailAndPassword(e, p);
	}
	

}
