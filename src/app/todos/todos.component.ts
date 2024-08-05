import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
declare var $: any;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { taskTitle: '', taskNote: '', taskDeadline: '' };
  editTodo: Todo = { taskTitle: '', taskNote: '', taskDeadline: '', status: '' };

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    if (this.newTodo.taskTitle.trim() === '') {
      alert('Please fill in the required fields.');
      return;
    }

    this.todoService.addTodo(this.newTodo).subscribe(todo => {
      this.todos.push(todo);
      this.newTodo = { taskTitle: '', taskNote: '', taskDeadline: '' }; // Reset form
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  openEditModal(todo: Todo): void {
    this.editTodo = { ...todo }; // Clone the todo to avoid modifying the original
    $('#editModal').modal('show'); // Open the modal
  }

  saveEdit(): void {
    this.todoService.updateTodo(this.editTodo).subscribe(updatedTodo => {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
      $('#editModal').modal('hide'); // Close the modal
    });
  }
}
