import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactform = this.formBuilder.group({
    username:'',
    email:'',
    phone:'',
    message:'', })

    constructor(private formBuilder: FormBuilder,
      private router: Router,
      private http: HttpClient
      
      ){}
      
      onSubmit(): void {
        const formUser = this.contactform.value;
          const contactus = { username: formUser.username, email: formUser.email, phone: formUser.phone, message:formUser.message };
          this.http.post('/api/users', contactus).subscribe(
            (res) => {
              console.log(res);
              this.contactform.reset();
              
            },
            (error) => {
            
            }
          );
        
      }
      
  };





