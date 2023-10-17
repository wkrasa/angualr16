import { Injectable, Type } from '@angular/core';
import { FirstDynamicComponent } from './first-dynamic/first-dynamic.component';
import { SecondDynamicComponent } from './second-dynamic/second-dynamic.component';
import { ThirdDynamicComponent } from './third-dynamic/third-dynamic.component';
import { ComponentTypes } from './component-types';

export type CommonApi = FirstDynamicComponent | SecondDynamicComponent | ThirdDynamicComponent;

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  private readonly _componentTypes = {
    [ComponentTypes.first]: FirstDynamicComponent,
    [ComponentTypes.second]: SecondDynamicComponent,
    [ComponentTypes.third]: ThirdDynamicComponent,
  };
  getComponentType(type: ComponentTypes): Type<CommonApi>{
    return this._componentTypes[type];
  }
}
