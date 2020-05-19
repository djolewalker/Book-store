import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ComponentHelperService } from '../services/component-helper.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  compID: string;

  //first element is closing/cancel option
  @Input()
  dialogOption: string[];
  @Output()
  onSelectedOption = new EventEmitter();

  constructor(private helperService: ComponentHelperService) { }

  ngOnInit(): void {
    this.compID = this.helperService.getUniqueID();
  }

  @HostListener('click', ['$event'])
  onClick(e: any): void {
    if (this.helperService.isDescendantOfById(e.target, this.compID)) {
      if (e.target.classList.contains('dialog-option'))
        this.onSelectedOption.emit(e.target.innerHTML);
    }
    else
      this.onSelectedOption.emit(this.dialogOption[0]);
  }

}
