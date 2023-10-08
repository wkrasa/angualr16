import { Component, Inject, Optional } from '@angular/core';
import { TOKEN_STR, TOKEN_STR2 } from '../parent/parent.component';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent {
  constructor (
    @Optional() @Inject(TOKEN_STR) private str1: string,
    @Optional() @Inject(TOKEN_STR2) private str2: string){
    console.log(str1, str2);
  }
}
