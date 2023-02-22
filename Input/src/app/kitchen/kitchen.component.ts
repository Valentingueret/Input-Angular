import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {

  public cookieQuantity: number = 12;
  public withNuts: boolean = true;


  onSubmit(){
    

    alert('on submit fction');
  }

}
