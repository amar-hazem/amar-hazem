import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../app/auth/auth.service';

@Component({
  selector: 'acc-login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {}

  public login(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(() => this.router.navigate(['profile']));
  }
}
