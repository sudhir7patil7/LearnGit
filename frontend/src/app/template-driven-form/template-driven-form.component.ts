import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
onSubmit(Form: NgForm) {
  console.log('Form is Submitted');
  console.log(Form);
  console.log('Form is Submitted');
}
constructor(private router:Router){}
ngOnInit(): void {
  console.log('Form is i');
  }
}

