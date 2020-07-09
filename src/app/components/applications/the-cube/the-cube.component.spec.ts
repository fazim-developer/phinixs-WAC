import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCubeComponent } from './the-cube.component';

describe('TheCubeComponent', () => {
  let component: TheCubeComponent;
  let fixture: ComponentFixture<TheCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
