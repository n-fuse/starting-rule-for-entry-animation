import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-application-with-new-css-entry-transition';

  items: Item[] = [
    {
      name: 'Item 1 Name',
    },
    {
      name: 'Item 2 Name',
    },
    {
      name: 'Item 3 Name',
    },
    {
      name: 'Item 4 Name',
    },
  ];

  onAddItem() {
    this.items.push({ name: 'New Item' });
  }
}
