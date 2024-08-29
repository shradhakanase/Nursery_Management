package com.srk.NurseryBackend.Model;
import java.util.Set;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;


@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productId;
	private String productName;
	private String productDescription;
	private int productDiscountedPrice;
	private int productActualPrice;
	@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinTable(name = "product_images",
	          joinColumns = {
	        		  @JoinColumn(name="product_id")
	          },
	          inverseJoinColumns = {
	        		  @JoinColumn(name="image_id")
	          }
	)
	private Set<ImageModel> productImages;
	
	public Set<ImageModel> getProductImages() {
		return productImages;
	}
	public void setProductImages(Set<ImageModel> productImages) {
		this.productImages = productImages;
	}
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String productName, String productDescription, int productDiscountedPrice, int productActualPrice) {
		super();
		this.productName = productName;
		this.productDescription = productDescription;
		this.productDiscountedPrice = productDiscountedPrice;
		this.productActualPrice = productActualPrice;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public int getProductDiscountedPrice() {
		return productDiscountedPrice;
	}
	public void setProductDiscountedPrice(int productDiscountedPrice) {
		this.productDiscountedPrice = productDiscountedPrice;
	}
	public int getProductActualPrice() {
		return productActualPrice;
	}
	public void setProductActualPrice(int productActualPrice) {
		this.productActualPrice = productActualPrice;
	}
	
	
	
	
	
}
