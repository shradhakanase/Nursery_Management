package com.srk.NurseryBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.srk.NurseryBackend.Model.Product;
import com.srk.NurseryBackend.Repository.ProductRepository;
@Service
@Qualifier("proRepo")
public class ProductServiceImpl implements ProductService{
	@Autowired
ProductRepository proRepo;
	@Override
	public Product insert(Product p) {
		// TODO Auto-generated method stub
		return proRepo.save(p);
	}

	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return proRepo.findAll();
	}
}
