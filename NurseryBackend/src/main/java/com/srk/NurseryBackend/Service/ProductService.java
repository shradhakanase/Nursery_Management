package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.Product;

public interface ProductService {
	List<Product> getAll();
	Product addNewProduct(Product product);
	void delete(int productId);
}
