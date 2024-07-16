package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.Register;

public interface RegisterService {
Register insert(Register r);
List<Register> getAll();
Register login(String e,String p);

}
