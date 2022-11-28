import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit{
  // @ts-ignore
  submit(object) {
    object = JSON.stringify(object);
    console.log(object);
    const user = object as User;
    console.log(typeof user);
    console.log(user.age + 1);
    console.log(user);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

interface User {
  email: String;
  gender: String;
  phone: String;
  age: number;
}
