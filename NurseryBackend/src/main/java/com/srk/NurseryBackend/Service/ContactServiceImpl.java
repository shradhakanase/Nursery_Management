package com.srk.NurseryBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.Contact;
import com.srk.NurseryBackend.Repository.ContactRepository;

@Service
@Qualifier("conRepo")
public class ContactServiceImpl implements ContactService{
	@Autowired
 ContactRepository conRepo;
	@Override
	public Contact insert(Contact c) {
		// TODO Auto-generated method stub
		return conRepo.save(c);
	}

	@Override
	public List<Contact> getAll() {
		// TODO Auto-generated method stub
		return conRepo.findAll();
	}

}
