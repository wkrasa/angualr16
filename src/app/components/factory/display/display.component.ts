import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonApi, ComponentHostDirective, ComponentTypes, FactoryService, FirstDynamicComponent } from '..';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayComponent implements OnInit {
  @ViewChild(ComponentHostDirective, { static: true}) componentHost!: ComponentHostDirective;

  constructor(private readonly _factoryService: FactoryService){

  }
  ComponentTypes = ComponentTypes;
  ngOnInit(): void {
    this.changeType(ComponentTypes.second);
  }

  changeType(type: ComponentTypes){
    const { viewContainer } = this.componentHost;
    viewContainer.clear();
    var componentType = this._factoryService.getComponentType(type);
    const { instance } = viewContainer.createComponent<CommonApi>(componentType);
    instance.text = 'Test !!!!'
  }
}
