import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRactivaComponent } from './tabla-ractiva.component';

describe('TablaRactivaComponent', () => {
  let component: TablaRactivaComponent;
  let fixture: ComponentFixture<TablaRactivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRactivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRactivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
