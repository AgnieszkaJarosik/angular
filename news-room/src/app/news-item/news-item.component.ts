import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NewsData } from '../news-list/news-data';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input()
  public item: NewsData;

  @Output()
  public onRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }

}
