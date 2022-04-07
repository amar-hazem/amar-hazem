import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserService } from '../../app/user/user.service';

@Component({
  selector: 'acc-delete-profile-confirmation-dialog',
  styleUrls: ['./delete-profile-confirmation-dialog.component.scss'],
  templateUrl: './delete-profile-confirmation-dialog.component.html',
})
export class DeleteProfileConfirmationDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {}

  public delete(): void {
    this.userService.remove(this.data.userId).subscribe();
  }
}
