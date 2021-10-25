import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = this.formBuilder.group({
    username:'',
    password:''
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit():void {
    this.login.reset();
  }

  ngOnInit() {
  }

}
