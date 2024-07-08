package com.todolist.controller;

import com.todolist.model.ToDolist;
import com.todolist.service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
public class TodoListController {

    private final TodoService todoService;
    public TodoListController(TodoService todoService){
        this.todoService = todoService;
    }

    @PostMapping("/SaveToDo")
    public void save(@RequestBody ToDolist toDolist){
        todoService.SavaToDo(toDolist);
    }
    @GetMapping("/GetData")
    public List<ToDolist> getAllData(){
        return todoService.FindAllTodo();
    }
    @DeleteMapping("/DeleteTODo/{id}")
    public void DeleteaTodo(@PathVariable int id){
        todoService.DeleteToDo(id);
    }
}
