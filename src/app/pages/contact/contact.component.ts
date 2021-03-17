import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder,
              private contactService: ContactService) { }

  public contactForm: FormGroup;

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: [''],
      subject: [''],
      message: ['', [Validators.required]]
    })
  }

  public resetForm () {
    this.contactForm.get('name').setValue('');
    this.contactForm.get('email').setValue('');
    this.contactForm.get('mobileNumber').setValue('');
    this.contactForm.get('subject').setValue('');
    this.contactForm.get('message').setValue('');

  }

  public onSubmit(contactForm: FormGroup) {
      this.contactService.sendMessage(contactForm)
        .subscribe(response => {
          this.resetForm();
          location.href = 'https://mailthis.to/confirm';
          console.log(response)
        }, error => {
          console.warn(error.responseText);
          console.log({ error })
        })
  }


}
