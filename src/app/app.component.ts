import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fruits = new BehaviorSubject(['Mango', 'Orange', 'Banana']);
  constructor() {}
  addFruit(item: string[]) {
    this.fruits.next(item);
  }
}
