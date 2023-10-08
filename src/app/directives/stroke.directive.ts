import { Directive, ElementRef, Input, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[stroke]',
  standalone: true
})
export class StrokeDirective {
@Input('stroke')
set color(c: string){
  this.setColor(c);
}

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {
   }

   setColor(color: string){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
   }
}
