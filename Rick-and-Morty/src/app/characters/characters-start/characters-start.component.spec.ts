import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersStartComponent } from './characters-start.component';

describe('CharactersStartComponent', () => {
  let component: CharactersStartComponent;
  let fixture: ComponentFixture<CharactersStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
