import { Component } from '@angular/core';
import { Developper } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  public developper = new Developper();

}
