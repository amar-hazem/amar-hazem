import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

import { AuthService } from '../../app/auth/auth.service';
import { User } from '../../app/user/user';
import { UserService } from '../../app/user/user.service';
import { DeleteProfileConfirmationDialogComponent } from '../delete-profile-confirmation-dialog/delete-profile-confirmation-dialog.component';

@Component({
  selector: 'acc-profile-page',
  styleUrls: ['./profile-page.component.scss'],
  templateUrl: './profile-page.component.html',
})
export class ProfilePageComponent implements OnInit {
  public editForm: FormGroup = this.formBuilder.group({
    id: null,
    username: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: null,
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService
      .getCurrentUser()
      .pipe(
        map((user: User) => {
          return this.formBuilder.group({
            _id: user._id,
            firstName: [user.firstName, Validators.required],
            lastName: [user.lastName, Validators.required],
            email: [user.email, [Validators.required, Validators.email]],
            password: user.password,
          });
        })
      )
      .subscribe((editForm: any) => {
        this.editForm = editForm;
      });
  }

  public delete(): void {
    this.matDialog.open(DeleteProfileConfirmationDialogComponent, {
      data: { userId: this.editForm.getRawValue()._id },
    });
  }

  public edit(): void {
    const newUser: User = this.editForm.getRawValue();
    this.userService.replace(newUser._id, newUser).subscribe();
  }
}
