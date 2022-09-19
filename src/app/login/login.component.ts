import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  namea="";
  constructor(private service:UserService) { }

 ngOnInit() : void{}

respdata:any;

 ProceedLogin(logindata:any){
    if(logindata.valid){
    this.service.ProceedLogin(logindata).subscribe(item =>{
          this.respdata=item;
          if(this.respdata!=null){
            localStorage.setItem('token',this.respdata.jwtToken)
          }  
          else{
            console.log("Login.failed")
          }
    })
    }else{
      alert("Invalid Credentials")
    } 
 }
}
