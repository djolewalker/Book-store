import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ComponentHelperService } from '../../services/component-helper.service'
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BookService } from 'src/app/services/book.service';
import { Filter } from 'src/app/datamodel/filter';


@Component({
  selector: 'app-autocomplete-select',
  templateUrl: './autocomplete-select.component.html',
  styleUrls: ['./autocomplete-select.component.css']
})
export class AutocompleteSelectComponent implements OnInit {
  private textChangesListener: Subject<string> = new Subject<string>();
  private subscription: Subscription;
  private lastSelection: boolean = false;
  readonly compID: string;
  hiddenList: boolean = true;

  titles: string[] = [];
  @Input() filter: Filter;

  constructor(private helper: ComponentHelperService, private bookService: BookService, private cd: ChangeDetectorRef) {
    this.compID = helper.getUniqueID();
  }

  ngOnInit(): void {
    this.subscription = this.textChangesListener.pipe(
      debounceTime(500)
    ).subscribe(
      searchString => {
        this.titles = this.bookService.searchTitles(searchString);
        this.cd.detectChanges();
        if (!this.lastSelection)
          this.hiddenList = false;
        this.lastSelection = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showHideList(): void {
    if (this.hiddenList) this.hiddenList = false;
    else this.hiddenList = true;
  }

  checkToHide(event: any): void {
    if (!this.hiddenList)
      if (!this.helper.isDescendantOfById(event.target, this.compID.toString()))
        this.hiddenList = true;
  }

  changeSearchText(reset: Boolean): void {
    if (!reset)
      this.textChangesListener.next(this.filter.title);
    else {
      this.filter.title = "";
      this.textChangesListener.next(this.filter.title);
    }
  }

  applySelectText(event: any): void {
    this.filter.title = event.target.innerHTML;
    this.changeSearchText(false);
    this.lastSelection = true;
    this.showHideList();
  }
}
