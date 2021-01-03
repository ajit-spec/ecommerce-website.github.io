import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Service1Service} from '../services/service1.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comp11',
  templateUrl: './comp11.component.html',
  styleUrls: ['./comp11.component.scss']
})
export class Comp11Component implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;

  prop1: Service1Service;
  prop2: string;
  prop3: boolean;
  prop4: boolean;
  prop5: Router;

  constructor(param1: FormBuilder, param2: Service1Service, param3: Router) {
    this.formBuilder = param1;
    this.prop1 = param2;
    this.prop5 = param3;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });

  }

  onSubmit(): void {
    console.log(this.form);

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.prop1.login(email, password).subscribe(value => {

      console.log(value);
      this.prop3 = true;
      setTimeout(() => {
        this.prop3 = false;
        this.prop5.navigate(['/']);
        localStorage.setItem('loggedinuser', JSON.stringify(value.email.split('@')[0]));
      }, 3000);
      this.prop2 = `You have successfully logged in`;
    }, error => {
      this.prop4 = true;
      setTimeout(() => {
        this.prop4 = false;
      }, 3000);
      console.log(error);
      this.prop2 = error.error.error.message;
    });

    this.form.reset();

  }

}
