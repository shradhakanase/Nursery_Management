package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.OrderDetails;

public interface OrderService {
OrderDetails insert(OrderDetails r);
List<OrderDetails> getAll();
}
