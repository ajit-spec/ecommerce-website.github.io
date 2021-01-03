import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../custom-validator';
import {Service1Service} from '../services/service1.service';

@Component({
  selector: 'app-comp12',
  templateUrl: './comp12.component.html',
  styleUrls: ['./comp12.component.scss']
})
export class Comp12Component implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  prop1: Service1Service;
  prop2: boolean;
  prop3: string;

  constructor(param1: FormBuilder, param2: Service1Service) {
    this.formBuilder = param1;
    this.prop1 = param2;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      firstname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        CustomValidator.validemail
      ])],
      password: ['', Validators.compose([
        Validators.required,
        CustomValidator.validpassword(/[a-z]/g, {nolowercase: true}),
        CustomValidator.validpassword(/[A-Z]/g, {nouppercase: true}),
        CustomValidator.validpassword(/[0-9]/g, {nodigit: true}),
        CustomValidator.validpassword(/[^a-zA-Z\d]/g, {nospecialchar: true}),
        Validators.minLength(8)
      ])],
      confirmpassword: ['', Validators.compose([Validators.required])]
    }, {
      validators: CustomValidator.notsamepassword
    });

  }

  onSubmit(): void {
    console.log(this.form);

    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.prop1.signup(email, password).subscribe(value => {
      console.log(value);

      this.prop2 = true;
      setTimeout(() => {
        this.prop2 = false;
      }, 3000);
      this.prop3 = `you have successfully resistered`;

    });


  }

}
