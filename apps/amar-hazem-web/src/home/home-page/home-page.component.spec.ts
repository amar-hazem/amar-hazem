import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LandingComponent } from '../landing/landing.component';
import { HomePageComponent } from './home-page.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

describe('AhwHomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        ContactComponent,
        HomePageComponent,
        LandingComponent,
        ProjectsComponent,
        TestimonialsComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatCardModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
