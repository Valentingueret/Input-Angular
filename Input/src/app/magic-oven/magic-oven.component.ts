import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magic-oven',
  templateUrl: './magic-oven.component.html',
  styleUrls: ['./magic-oven.component.css']
})
export class MagicOvenComponent {

  @Input() public nbCookies: number = 33;

  @Input() public withNuts: boolean = true;

}
