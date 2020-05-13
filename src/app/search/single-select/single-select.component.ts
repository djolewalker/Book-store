import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ComponentHelperService } from '../../services/component-helper.service'

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css']
})
export class SingleSelectComponent implements OnInit {
  compID: string ;
  @Input() items: string[] = [];
  @Input() selectedItem: string[] = [];
  @Input() compWidth: number;
  @Output() onSelectionChange = new EventEmitter();
  hiddenList: boolean = true;
  transitionDone: boolean = true;

  constructor(private helper: ComponentHelperService, private cd: ChangeDetectorRef) { 
    this.compID = helper.getUniqueID();
  }

  ngOnInit(): void {
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

  selectItem(item: string): void {
    this.selectedItem.splice(0, this.selectedItem.length);
    this.selectedItem.push(item);
    this.cd.detectChanges();
    this.showHideList();
    this.onSelectionChange.emit();
  }

  startTransition(): void {
    this.transitionDone = false;
  }

  endTransition(): void {
    this.transitionDone = true;
  }

}
