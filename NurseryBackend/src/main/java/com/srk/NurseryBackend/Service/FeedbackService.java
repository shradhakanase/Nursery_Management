package com.srk.NurseryBackend.Service;

import java.util.List;

import com.srk.NurseryBackend.Model.Feedback;

public interface FeedbackService {
Feedback insert(Feedback f);
List<Feedback> getAll();
}
