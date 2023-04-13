import { Component, Input } from '@angular/core';
import { CssInputComponent } from '../css-input/css-input.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})

export class ContainerComponent extends CssInputComponent {
  @Input() data: any;

}
