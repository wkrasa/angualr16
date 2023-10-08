import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";


@Directive({
  selector: "[sTabName]",
})
export class StructTabNameDirective {
  @Input() sTabName!: string;

  constructor(public template: TemplateRef<any>){
  }
}
