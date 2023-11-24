import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Toggel List';
  todos:{id:number,todo:String}[]=[]
  length=0
  todoInput:String=''
  addTodo(){
    console.log(this.todoInput)
    if(this.todoInput.length>0){
      this.todos.push({id:++this.length,todo:this.todoInput})
      console.log(this.todoInput)
    }
  }
  removeTodo(id:number){
    this.todos=this.todos.filter(t=>t.id!=id)
  }
}
