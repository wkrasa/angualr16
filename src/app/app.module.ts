import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { StructTabNameDirective, StructTabsWithContentComponent, TabNameDirective, TabsWithContentComponent, WitContentComponent } from './components';
import { HideAfterDirective } from './directives/hide-after-directive';
import { HideAfterPageComponent, TabsPageComponent } from './pages';
import { TooltipDirective } from './directives/tooltip.directive';
import { ParentComponent } from './components/hierarchy/parent/parent.component';
import { ChildComponent } from './components/hierarchy/child/child.component';
import { GrandChildComponent } from './components/hierarchy/grand-child/grand-child.component';
import { BorderDirective } from './directives/border.directive';
import { StrokeDirective } from './directives/stroke.directive';
import { HostWithStrokeDirective } from './directives/host-with-stroke.directive';
import { StandAloneComponent } from './components/hierarchy/stand-alone/stand-alone.component';
import { DisplayComponent } from './components/factory/display/display.component';
import { FirstDynamicComponent } from './components/factory/first-dynamic/first-dynamic.component';
import { SecondDynamicComponent } from './components/factory/second-dynamic/second-dynamic.component';
import { ThirdDynamicComponent } from './components/factory/third-dynamic/third-dynamic.component';
import { ComponentHostDirective } from './components/factory/component-host.directive';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    HideAfterDirective,
    WitContentComponent,
    TabsWithContentComponent,
    TabNameDirective,
    StructTabNameDirective,
    StructTabsWithContentComponent,
    TabsPageComponent,
    HideAfterPageComponent,
    TooltipDirective,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    HostWithStrokeDirective,
    DisplayComponent,
    FirstDynamicComponent,
    SecondDynamicComponent,
    ThirdDynamicComponent,
    ComponentHostDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StandAloneComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
