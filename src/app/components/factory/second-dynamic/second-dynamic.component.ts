import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-dynamic',
  templateUrl: './second-dynamic.component.html',
  styleUrls: ['./second-dynamic.component.css']
})
export class SecondDynamicComponent {
  @Input() text!: string;
}
