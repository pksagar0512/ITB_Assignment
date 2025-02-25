import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorpComponent } from './forgorp.component';

describe('ForgorpComponent', () => {
  let component: ForgorpComponent;
  let fixture: ComponentFixture<ForgorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgorpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
