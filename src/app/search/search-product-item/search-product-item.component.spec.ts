import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductItemComponent } from './search-product-item.component';

describe('SearchProductItemComponent', () => {
  let component: SearchProductItemComponent;
  let fixture: ComponentFixture<SearchProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
