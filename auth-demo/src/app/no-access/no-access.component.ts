import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent implements OnInit {

  constructor(private router: Router) { console.info('eee'); }

  ngOnInit() {
    this.router.navigate(['/', 'hello']);
  }

}
