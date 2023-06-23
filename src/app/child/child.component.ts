import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() data: Observable<any>;
  fruitList: string[] = [];

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.data.subscribe((item: string[]) => {
      this.fruitList = [...this.fruitList, ...item];
      this.cd.markForCheck();
    });
  }
}
