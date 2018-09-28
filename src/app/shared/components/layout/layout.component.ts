import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }
}
