import {  Component, OnInit ,ViewChild} from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'seriveApp';
  users:any=[];
  errorMessage:string="Data Loading..."

  constructor(private userservice:UserServiceService,
    private modalService:NgbModal){}

  ngOnInit(){
    
    this.userservice.getUser().subscribe((data)=>{
      this.users=data
    },(error)=>{
      this.errorMessage=`${error}`
      const modalRef=this.modalService.open(ErrorModalComponent)
      modalRef.componentInstance.errorBody=this.errorMessage
    })
  }
}
