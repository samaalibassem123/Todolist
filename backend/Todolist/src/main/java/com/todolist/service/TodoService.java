package com.todolist.service;

import com.todolist.Reposotory.ToDoReposotery;
import com.todolist.model.ToDolist;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final ToDoReposotery toDoReposotery;
    public TodoService(ToDoReposotery toDoReposotery){
        this.toDoReposotery = toDoReposotery;
    }

    public void SavaToDo(ToDolist toDolist){
        toDoReposotery.save(toDolist);
    }
    public List<ToDolist> FindAllTodo(){
        return toDoReposotery.findAll();
    }

    public void DeleteToDo(int id){
        toDoReposotery.deleteById(id);
    }
}
