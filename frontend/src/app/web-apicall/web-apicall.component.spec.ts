import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAPICallComponent } from './web-apicall.component';

describe('WebAPICallComponent', () => {
  let component: WebAPICallComponent;
  let fixture: ComponentFixture<WebAPICallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebAPICallComponent]
    });
    fixture = TestBed.createComponent(WebAPICallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
