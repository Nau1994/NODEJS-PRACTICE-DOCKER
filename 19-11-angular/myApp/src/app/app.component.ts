import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Toggel List';
  todos:{id:number,todo:String}[]=[]
  length=0
  todoInput:any=''
  addTodo(todo:String){
    console.log(this.todoInput)
    if(todo.length>0){
      this.todos.push({id:++this.length,todo:todo})
      console.log(this.todos)
    }
  }
  removeTodo(id:number){
    this.todos=this.todos.filter(t=>t.id!=id)
  }
}
