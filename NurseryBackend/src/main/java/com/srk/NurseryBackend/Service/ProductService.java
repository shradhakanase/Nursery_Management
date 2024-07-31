package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.Product;

public interface ProductService {
	Product insert(Product p);
	List<Product> getAll();
}
