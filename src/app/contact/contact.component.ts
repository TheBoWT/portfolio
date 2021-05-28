import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sendingStatus = 'Send Message';
  messageSent:boolean;
  messageFail:boolean;
  displayMsg:boolean;

  formData = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  SendEmail(){    
    this.sendingStatus = 'Sending...';

    emailjs.send('service_fxdkfxd', 'template_rnumar5' ,this.formData.value, 'user_S5UJtHHRcr7Yj8Jl3gFYf')
    .then(()=>{
      this.sendingStatus= 'Sent!'
      this.formData.reset();
      this.sendingStatus = 'Send';
      this.messageSent = true;
      this.displayMsg = true;
    },()=>{
      this.messageFail = true;
      this.displayMsg = true;
      this.sendingStatus = 'Send';
      
    }) 
setTimeout(() => {
  this.displayMsg = false;
}, 10000);
  }

  

}
