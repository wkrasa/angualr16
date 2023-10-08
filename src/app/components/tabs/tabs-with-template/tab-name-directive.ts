import {
  ChangeDetectorRef,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";


@Directive({
  selector: "[tabName]",
})
export class TabNameDirective {
  @Input() tabName!: string;
}
