import { Component, Inject, Optional } from '@angular/core';
import { TOKEN_STR, TOKEN_STR2 } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],

  // TOKEN_STR2 is avaliable in view children but not in content children (ng-content)
  viewProviders: [
    {
      provide: TOKEN_STR2,
      useValue: 'test2'
    }
  ]
})
export class ChildComponent {

  constructor (
    @Optional() @Inject(TOKEN_STR) private str1: string,
    @Optional() @Inject(TOKEN_STR2) private str2: string){
    console.log(str1, str2);
  }
}
