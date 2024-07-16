package com.srk.NurseryBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.Feedback;
import com.srk.NurseryBackend.Repository.FeedbackRepository;
@Service
@Qualifier("fbRepo")
public class FeedbackServiceImpl implements FeedbackService{
	@Autowired
	FeedbackRepository fbRepo;

	@Override
	public Feedback insert(Feedback f) {
		// TODO Auto-generated method stub
		return fbRepo.save(f);
	}

	@Override
	public List<Feedback> getAll() {
		// TODO Auto-generated method stub
		return fbRepo.findAll();
	}

}
