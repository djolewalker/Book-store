import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectComponent } from './autocomplete-select.component';
import { ComponentHelperService } from 'src/app/services/component-helper.service';
import { BookService } from 'src/app/services/book.service';
import { ChangeDetectorRef } from '@angular/core';
import { Filter } from 'src/app/datamodel/filter';

describe('AutocompleteSelectComponent', () => {
  let component: AutocompleteSelectComponent;
  let fixture: ComponentFixture<AutocompleteSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteSelectComponent],
      providers: [ComponentHelperService, BookService, ChangeDetectorRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSelectComponent);
    component = fixture.componentInstance;
    component.filter = {
      title: "java",
      categories: [],
      languages: [],
      price: 2500,
      dateFrom : undefined,
      dateTo: undefined,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
