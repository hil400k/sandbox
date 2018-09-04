import { Component, OnDestroy } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app works!';

  constructor(private router: Router, private location: Location) {
    console.info('sdfsdfsdf');
    location.subscribe(data => {
      console.info(data);
    })
  }

  ngOnDestroy() {
    console.info('destroy');
  }

}
