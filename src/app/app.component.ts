import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

/*
- add to git repo
- create component dynamically (https://blog.bitsrc.io/dynamic-components-in-angular-9ddc346e2742)
-- simple approach
-- more complex approach
- move and add components with routing
- play with reactive forms
- play with ng-store
- hostDirectives
 */
export class AppComponent {
  title = 'Angular 16 Crud example';
}

