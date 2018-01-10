import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImg: string = "../assets/staff.jpg"

  constructor() { }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
