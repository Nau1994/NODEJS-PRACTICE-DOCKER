import { Component } from '@angular/core';

@Component({
  // standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormApp';
  user:any;
  getData(data:any){
    console.log(data)
  }
}
