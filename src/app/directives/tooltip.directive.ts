import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip')
  tooltipContent: string = ''!;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('mouseover')
  onMouseOver(){
    const tooltip = this.createTooltip();
    this.renderer.appendChild(this.elRef.nativeElement, tooltip);
  }

  @HostListener('mouseout')
  onMouseOut(){
    setTimeout(() => {
      const tooltip = this.elRef.nativeElement.querySelector('.app-tooltip');
      this.renderer.removeChild(this.elRef.nativeElement, tooltip);
    }, 300);
  }

  private createTooltip(): HTMLElement{
    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipContent);
    this.renderer.appendChild(tooltip, text);
    this.renderer.addClass(tooltip, 'app-tooltip');
    this.renderer.setStyle(tooltip, 'position', 'absolute');

    return tooltip;
  }
}
