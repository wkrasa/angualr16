import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

class HideAfterContext {
  public get $implicit() {
    return this.hideAfter;
  };
  public hideAfter = 0;
  public counter = 0;
  public hideAfterThen = 1000;
}

@Directive({
  selector: "[hideAfter]",
})
export class HideAfterDirective implements OnInit {
  @Input("hideAfter")
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
  }
  private _delay = 0;

  @Input("hideAfterReplaceWith")
  placeholder: TemplateRef<HideAfterContext> | null = null;

  private context = new HideAfterContext();
  private isReplaceVisible: boolean = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<HideAfterContext>,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {

    setInterval(() => {
      this.context.counter--;
      this._cdr.markForCheck();
    },1000)

    this.viewContainerRef.createEmbeddedView(this.template, this.context);

    setInterval(() => {
      this.viewContainerRef.clear();

      if(this.isReplaceVisible){
        this.viewContainerRef.createEmbeddedView(this.template, this.context);
      }
      else if(this.placeholder){
        this.viewContainerRef.createEmbeddedView(this.placeholder, this.context);
      }
      this.isReplaceVisible = !this.isReplaceVisible;
      this.context.counter = this.context.hideAfter;
      this._cdr.markForCheck();

    }, this._delay);
  }

  static ngTemplateContextGuard(dir: HideAfterDirective, ctx: unknown): ctx is HideAfterContext { return true }
}
