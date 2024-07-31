package com.srk.NurseryBackend.Repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srk.NurseryBackend.Model.Product;
@Repository
@Qualifier("proRepo")
public interface ProductRepository extends JpaRepository<Product, Long>{

}
