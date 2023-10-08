import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { TabNameDirective } from './tab-name-directive';

@Component({
  selector: 'tabs-with-content',
  templateUrl: './tabs-with-template.component.html',
  styleUrls: ['./tabs-with-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsWithContentComponent implements AfterContentInit {
  @ContentChildren(TabNameDirective, { read: TemplateRef}) tabTemplates!: QueryList<TemplateRef<any>>;
  @ContentChildren(TabNameDirective) tabs!: QueryList<TabNameDirective>;

  selectedTab!: TemplateRef<any>;
  selectTab(index: number){
    this.selectedTab = this.tabTemplates.get(index)!;
  }

  ngAfterContentInit() : void{
    this.selectTab(0);
  }
}
