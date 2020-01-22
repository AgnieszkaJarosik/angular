import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';
import { NewsService } from '../news.service';
import { NewsData } from '../news-data';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {
  news: NewsData;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.news = new NewsData( null, '', '', '', 0);
  }

  addNewItem() {
    if (this.news.title && this.news.content) {
      this.newsService.addItem(this.news);
      this.news = {
        id: null,
        title: '',
        content: '',
        imageURL: '',
        votes: 0
      };
    }
  }
}
