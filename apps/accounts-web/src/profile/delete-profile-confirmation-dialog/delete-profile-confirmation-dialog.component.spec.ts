import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DeleteProfileConfirmationDialogComponent } from './delete-profile-confirmation-dialog.component';

describe('ConversationComponent', () => {
  let component: DeleteProfileConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteProfileConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProfileConfirmationDialogComponent],
      imports: [MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfileConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
