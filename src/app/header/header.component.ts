import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileScreen: string = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  showMobileScreen(): void {
    this.mobileScreen = 'block';
  }

  hideMobileScreen(): void {
    this.mobileScreen = 'none';
  }

  changeOnScrol(): void {
    if (window.scrollY != 0) {
      document.getElementsByClassName("header")[0].classList.add("header-scroled");
      document.getElementsByClassName("header-content")[0].classList.add("header-content-scroled");
      document.getElementsByClassName("header-logo")[0].classList.add("header-logo-scroled");
    } else {
      document.getElementsByClassName("header")[0].classList.remove("header-scroled");
      document.getElementsByClassName("header-content")[0].classList.remove("header-content-scroled");
      document.getElementsByClassName("header-logo")[0].classList.remove("header-logo-scroled");
    }
  }
}
