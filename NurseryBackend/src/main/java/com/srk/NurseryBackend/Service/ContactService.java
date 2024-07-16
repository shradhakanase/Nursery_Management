package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.Contact;

public interface ContactService {
Contact insert(Contact c);
List<Contact> getAll();
}
