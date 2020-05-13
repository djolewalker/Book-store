import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  @Output() closeMobileHeader = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(event: any): void {
    if (event.toElement.classList.contains("screen"))
      this.closeMobileHeader.emit();
  }

  closeModalOnResiza(event: any): void {
    if (event.target.innerWidth > 860)
      this.closeMobileHeader.emit();
  }

}
