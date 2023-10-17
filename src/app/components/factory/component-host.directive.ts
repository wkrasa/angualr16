import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentHost]'
})
export class ComponentHostDirective {

  constructor(public readonly viewContainer: ViewContainerRef) { }

}
