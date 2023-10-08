import { Component, Inject, InjectionToken, Optional } from '@angular/core';

export const TOKEN_STR = new InjectionToken<string>('TOKEN_STR');
export const TOKEN_STR2 = new InjectionToken<string>('TOKEN_STR2');

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [
    {
      provide: TOKEN_STR,
      useValue: 'test'
    },
  ]
})
export class ParentComponent {
  constructor (
    @Optional() @Inject(TOKEN_STR) private str1: string,
    @Optional() @Inject(TOKEN_STR2) private str2: string){
    console.log(str1, str2);
  }
}
