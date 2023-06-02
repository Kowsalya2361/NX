import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component'
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
class MockMatSnackBarRef{
  
}
describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarComponent ],
      providers:[
        // {provide:MatSnackBarRef,useClass:mockMatSnackBarRef},
        { provide: MatSnackBarRef, useClass: MockMatSnackBarRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: {} }
      ],
      imports: [ 
        HttpClientTestingModule, 
        ReactiveFormsModule, 
        MatSnackBarModule,
        MatIconModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
