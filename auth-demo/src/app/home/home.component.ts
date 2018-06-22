import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import {Subject} from "rxjs/Subject";
import 'rxjs/add/observable/fromPromise';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public subject: Subject<string> = new Subject<string>();
  public obs: Observable<string>;
  public d: string = this.authService.data;

  constructor(
    public authService: AuthService
  ) {
    this.doSmth();
    this.handle();
  }

  doSmth() {
    const name = 'name';

    setTimeout(() => {
      this.subject.next('200');
      this.subject.complete();
    }, 3000);

    // setTimeout(() => {
    //   this.obs = new Observable(observer => observer.next(name));
    // }, 2000);

    // this.obs = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(name);
    //   }, 1500);
    // });
  }

  handle() {
    this.subject.toPromise().then((data) => {
      console.info(data);
    })

    console.info(this.d);

    // this.obs.subscribe(data => console.info(data));
  }
}
