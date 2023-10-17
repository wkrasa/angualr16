import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-dynamic',
  templateUrl: './first-dynamic.component.html',
  styleUrls: ['./first-dynamic.component.css']
})
export class FirstDynamicComponent {
  @Input() text!: string;
}
