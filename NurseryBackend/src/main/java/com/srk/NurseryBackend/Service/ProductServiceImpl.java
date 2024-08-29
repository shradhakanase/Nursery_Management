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
public Product addNewProduct(Product product) {
	return proRepo.save(product);
}
@Override
public List<Product> getAll() {
	// TODO Auto-generated method stub
	return proRepo.findAll();
}
@Override
public void delete(int productId) {
	// TODO Auto-generated method stub
	proRepo.deleteById(productId);
}
@Override
public List<Product> getAllByid(int productId) {
	// TODO Auto-generated method stub
	return proRepo.findAllByproductId(productId);
}

}
