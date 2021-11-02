import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email = "";
  message = "";

  constructor() { }

  ngOnInit(): void {
  }

  scrollToContact(el: HTMLElement, input: HTMLElement) {
    el.scrollIntoView();
    input.focus();
  }

}
