package com.srk.NurseryBackend.Repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srk.NurseryBackend.Model.AdminLogin;
@Repository
@Qualifier("adminRepo")
public interface AdminRepository extends JpaRepository<AdminLogin, Long>{
	AdminLogin findByEmailAndPassword(String email,String password);
}
