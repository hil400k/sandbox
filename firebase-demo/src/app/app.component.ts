import {Component} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
// import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: AngularFireList<any>;
  coursesO$: Observable<any>

  constructor(public db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.coursesO$ = this.courses$.snapshotChanges();

    this.coursesO$.subscribe(data => {
      console.info(data);
    })
  }

  add(course: HTMLInputElement) {
    this.courses$.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Template' }
      ]
    });
    course.value = '';
  }

  update(course, i) { console.info(course, i);
    this.db.object('/courses/' + course.$key).set({
      name: 'updated'
    });
  }
}
