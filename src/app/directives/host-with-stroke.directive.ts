import { Directive } from '@angular/core';
import { StrokeDirective } from './stroke.directive';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[all]',
  hostDirectives: [
    {
      directive: StrokeDirective,
      inputs: ['stroke']
    },
    {
      directive: BorderDirective,
      inputs: ['bord']
    }
  ]
})
export class HostWithStrokeDirective {

  constructor() { }

}
