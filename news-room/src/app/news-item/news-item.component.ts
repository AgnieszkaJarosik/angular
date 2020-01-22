import { Component, Input } from '@angular/core';
import { NewsData } from '../news-data';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  constructor(
    private newsService: NewsService
  ) { }

  ratePlus() {
    this.newsService.addRate(this.news.id, 1);
  }

  rateMinus() {
    this.newsService.addRate(this.news.id, -1);
  }

  remove() {
    this.newsService.removeItem(this.news.id);
  }
}
