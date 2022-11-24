import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRegister = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cPF: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
    });
    }
  ngOnInit() {
  }

  salvarRegister(){
    console.log('Formulário: ',  this.formRegister.valid);
  }

}
