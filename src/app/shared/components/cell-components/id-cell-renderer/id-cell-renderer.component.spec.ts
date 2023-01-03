import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDCellRendererComponent } from './id-cell-renderer.component';

describe('IDCellRendererComponent', () => {
  let component: IDCellRendererComponent;
  let fixture: ComponentFixture<IDCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
