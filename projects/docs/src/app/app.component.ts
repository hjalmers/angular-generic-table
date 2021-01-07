import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$: BehaviorSubject<any> = new BehaviorSubject([
    {
      firstName: 'Peter',
      lastName: 'Parker',
      gender: 'male',
      favoriteColor: '#26BFAF',
      favoriteFood: 'Pasta'
    },
    {
      firstName: 'Mary Jane',
      lastName: 'Watson',
      gender: 'female',
      favoriteColor: '#0f0',
      favoriteFood: 'Pizza'
    }
  ]);

  tableConfig$ = new BehaviorSubject({
    columns: {
      firstName: {
        header: 'First name',
        template: 'name',
        sortable: true,
        order: 0
      },
      lastName: {
        header: 'Last name',
        hidden: false,
        sortable: true
      },
      gender: {
        header: 'Gender',
        template: 'date',
        sortable: true,
        order: 1
      },
      favoriteColor: {
        header: 'Favorite color',
        template: 'date',
        sortable: false,
        order: 2
      },
      favoriteFood: {
        header: 'Favorite food',
        hidden: false,
        sortable: true,
        order: 0
      }
    }
  });

  addData() {
    this.data$.next([
      ...this.data$.getValue(),
      {
        firstName: 'Clark',
        lastName: 'Kent',
        gender: 'male',
        favoriteColor: '#26BFAF',
        favoriteFood: 'Salmon'
      }
    ]);
  }
}
