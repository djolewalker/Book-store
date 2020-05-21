import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ComponentHelperService } from '../../services/component-helper.service'

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  compID: string;
  @Input() items: string[] = [];
  @Input() selectedItems: string[] = [];
  @Input() compWidth: number;
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

  addRemoveItem(item: string): void {
    if (this.selectedItems.includes(item))
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    else
      this.selectedItems.push(item);
    this.cd.detectChanges();
  }

  startTransition(): void {
    this.transitionDone = false;
  }

  endTransition(): void {
    this.transitionDone = true;
  }
}
