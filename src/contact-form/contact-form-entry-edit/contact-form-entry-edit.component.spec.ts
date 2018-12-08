import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactFormEntryEditComponent} from './contact-form-entry-edit.component';

describe('ContactFormEntryEditComponent', () => {
  let component: ContactFormEntryEditComponent;
  let fixture: ComponentFixture<ContactFormEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormEntryEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
