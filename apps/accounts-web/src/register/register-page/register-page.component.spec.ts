import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterPageComponent } from './register-page.component';

describe('LayoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPageComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('should create the layout', () => {
    const fixture = TestBed.createComponent(RegisterPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
