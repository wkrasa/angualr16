import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { StructTabNameDirective } from './struct-tab-name-directive';

@Component({
  selector: 's-tabs-with-content',
  templateUrl: './struct-tabs-with-template.component.html',
  styleUrls: ['./struct-tabs-with-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StructTabsWithContentComponent implements AfterContentInit {
  @ContentChildren(StructTabNameDirective) tabs!: QueryList<StructTabNameDirective>;

  selectedTab!: TemplateRef<any>;
  selectTab(index: number){
    this.selectedTab = this.tabs.get(index)?.template!;
  }

  ngAfterContentInit() : void{
    this.selectTab(0);
  }
}
