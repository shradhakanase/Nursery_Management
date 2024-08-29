package com.srk.NurseryBackend.Controller;

import java.io.IOException;
import java.util.HashSet;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.srk.NurseryBackend.Model.ImageModel;
import com.srk.NurseryBackend.Model.Product;

import com.srk.NurseryBackend.Service.ProductService;

@RestController
@RequestMapping("/nurserydb/")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	@Autowired
	 ProductService productServ;
	@PostMapping(value = {"/product"},consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public Product addNewProduct(@RequestPart("product") Product product,
			@RequestPart("imageFile")MultipartFile[] file) {
		try {
			Set<ImageModel> images=uploadImage(file);
			product.setProductImages(images);
		return productServ.addNewProduct(product);
			}catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
		
	}
	
	public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException{
		Set<ImageModel> imageModels=new HashSet<>();
		
		for(MultipartFile file:multipartFiles) {
			ImageModel imageModel=new ImageModel(
					file.getOriginalFilename(),
					file.getContentType(),
					file.getBytes()
					);
			imageModels.add(imageModel);
			
		}
		return imageModels;
		}
	
	
	@GetMapping("/product")
	public List<Product> getAll()
	{
		return productServ.getAll();
	}
	
	@DeleteMapping("/product/{productId}")
	public void delete(@PathVariable("productId") int productId) {
		productServ.delete(productId);
	}
	
	@GetMapping("/product/{productid}")
	public List<Product> getAllByid(@PathVariable("productid") int productId)
	{
		return productServ.getAllByid(productId);
	}
	
	}




