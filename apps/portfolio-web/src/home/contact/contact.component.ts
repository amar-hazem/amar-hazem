import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Email } from '../../app/email/email';
import { EmailService } from '../../app/email/email.service';

/** Component used to display the home page. */
@Component({
  selector: 'por-contact',
  styleUrls: ['./contact.component.scss'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  /** The contact form */
  public contactForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    subject: [null, [Validators.required]],
    htmlContent: [null, Validators.required],
  });

  constructor(private emailService: EmailService, private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) {}

  public sendEmail(): void {
    const formValue: any = this.contactForm.getRawValue();
    const email: Email = {
      htmlContent: formValue.htmlContent,
      sender: {
        email: formValue.email,
        name: formValue.name,
      },
      subject: formValue.subject,
    };
    this.emailService.sendEmail(email).subscribe(() => {
      this.matSnackBar.open('Your message has been sent.');
    });
  }
}
