package com.todolist.Reposotory;

import com.todolist.model.ToDolist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoReposotery extends JpaRepository<ToDolist, Integer> {
}
