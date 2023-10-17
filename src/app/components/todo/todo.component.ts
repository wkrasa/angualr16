import { Component } from '@angular/core';
import { BehaviorSubject, Subject, combineLatest, zip } from 'rxjs';

interface TodoItem {
  todo: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    todos: TodoItem[] = [
      { isDone: true, todo: 'Create component dynamically  &#10004;  &#10004;  &#x2714;' },
      { isDone: false, todo: 'Move and add components with routing' },
      { isDone: false, todo: 'Play with reactive forms' },
      { isDone: false, todo: 'Play with ng-store' },
      { isDone: true, todo: 'hostDirectives' },
      { isDone: false, todo: 'Add few automatic tests' },
      { isDone: false, todo: 'Play with animations' },
    ];

    a = new BehaviorSubject<string>('1');
   b = new Subject<string>();
    constructor(){
      zip(this.a, this.b).subscribe(x => console.log('zip', x));
      combineLatest([this.a, this.b]).subscribe(x => console.log('combineLatest', x));
      this.a.next('2');
      this.a.subscribe(x => console.log(x));
      this.a.next('3');

      this.b.next('a');
      this.b.subscribe(x => console.log(x));
      this.b.next('b');
      this.b.next('c');
      this.b.next('d');
    }
}

