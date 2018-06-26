import { Observer } from "rxjs/Observer";
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import {Subject} from "rxjs/Subject";
import 'rxjs/add/observable/fromPromise';
import {Observable} from "rxjs/Observable";
import {Location} from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public subject: Subject<string> = new Subject<string>();
  public obs: Observable<string>;
  public d: string = this.authService.data;
  public observer: Observer<string>;

  constructor(
    public authService: AuthService,
    public location: Location
  ) {

    this.obs = Observable.create(observer => {
      // this.observer = observer;
      observer.next('10');
      observer.complete();
    });

    console.info(this.obs, 's');
    this.obs.subscribe(console.info);
    this.obs.subscribe(console.info);
    // this.handle();
    // this.doSmth();



  }

  doSmth() { console.info('doSmth');
    const name = 'name';

    // setTimeout(() => {
    //   this.subject.next('200');
    //   this.subject.complete();
    // }, 3000);
    //
    // this.obs = new Observable(observer => {
    //   observer.next(name);
    //   observer.complete();
    // });

    // setTimeout(() => {
    //   this.obs = Observable.create(observer => {
    //     observer.next(name);
    //     observer.complete();
    //   });
    // }, 2000);

    // this.obs = new Observable(observer => {
      setTimeout(() => {
        this.observer.next(name + 3);
        this.observer.complete();
      }, 2000);
    // });



    // this.obs = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(name);
    //   }, 1500);
    // });
  }

  handle() {
    // this.subject.toPromise().then((data) => {
    //   console.info(data);
    // })

    // console.info(this.d);

    this.obs.subscribe(data => console.info(data));
  }
}
