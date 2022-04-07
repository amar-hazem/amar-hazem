import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../app/user/user.service';

@Component({
  selector: 'acc-register-page',
  styleUrls: ['./register-page.component.scss'],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public registerForm: FormGroup = this.formBuilder.group({
    username: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    passwordConfirmation: [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  public register() {
    const userToCreate = this.registerForm.getRawValue();
    delete userToCreate.passwordConfirmation;
    this.userService.create(userToCreate).subscribe(() => this.router.navigate(['login']));
  }
}
