import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
items : string[] =["apple", "banana", "carrot", "dog", "elephant", "frog", "guitar", "hat", "ice cream", "jacket", "kiwi", "lion", "mouse", "notebook", "orange", "pizza", "queen", "rose", "sun", "tiger"]

}
