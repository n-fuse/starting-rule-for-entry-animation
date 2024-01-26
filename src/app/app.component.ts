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
      id: 1,
      name: 'Item 1 Name',
    },
    {
      id: 2,
      name: 'Item 2 Name',
    },
    {
      id: 3,
      name: 'Item 3 Name',
    },
    {
      id: 4,
      name: 'Item 4 Name',
    },
  ];

  onAddItem() {
    this.items.push({
      name: 'New Item',
      id: Math.floor(Math.random() * 100_000),
    });
  }

  onDeleteItem(id: number) {
    setTimeout(() => {
      this.items = this.items.filter((item) => item.id !== id);
    }, 500);
  }
}
