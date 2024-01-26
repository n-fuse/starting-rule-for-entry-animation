import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() delete = new EventEmitter<number>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  onDelete(id: number) {
    const liElement = this.el.nativeElement.querySelector('li');
    this.renderer.addClass(liElement, 'is-deleting');
    this.delete.emit(id);
  }
}
