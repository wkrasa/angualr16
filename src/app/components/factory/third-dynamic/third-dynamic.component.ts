import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-third-dynamic',
  templateUrl: './third-dynamic.component.html',
  styleUrls: ['./third-dynamic.component.css']
})
export class ThirdDynamicComponent {
  @Input() text!: string;
}
