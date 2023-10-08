import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bord]',
  standalone: true
})
export class BorderDirective {

  @Input('bord')
set color(c: string){
  this.setBorder(c);
}

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {

   }

   setBorder(color: string){
    console.log(`solid 1x ${color}`);
    this.renderer.setStyle(this.elRef.nativeElement, 'border', `solid 2px ${color}`);
   }
}
