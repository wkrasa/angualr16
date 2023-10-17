import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { HideAfterPageComponent, TabsPageComponent } from './pages';
import { ParentComponent } from './components/hierarchy';
import { DisplayComponent } from './components/factory';
import { TodoComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'todo', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'tabs', component: TabsPageComponent },
  { path: 'hide-after', component: HideAfterPageComponent },
  { path: 'hierarchy', component: ParentComponent },
  { path: 'factory', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
