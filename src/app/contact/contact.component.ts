import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sedningStatus = 'Send Message';
  message:boolean;

  formData = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  SendEmail(){    
    this.sedningStatus = 'Sending...';

    emailjs.send('service_fxdkfxd', 'template_rnumar5' ,this.formData.value, 'user_S5UJtHHRcr7Yj8Jl3gFYf')
    .then((result: EmailJSResponseStatus)=>{
      this.sedningStatus= 'Sent!'
      this.formData.reset();
      this.sedningStatus = 'Send';
      this.message = true;
    },(error)=>{
      console.log(error);
      this.message = false;
      
    }) 
  }

  

}
