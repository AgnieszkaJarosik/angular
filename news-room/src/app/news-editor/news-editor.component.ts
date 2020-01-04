import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewsData } from '../news-list/news-data';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})

export class NewsEditorComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<NewsData>();

  news: NewsData;

  constructor() { }

  ngOnInit() {
    this.news = new NewsData( null, '', '', '' );
  }

  addNewItem(){
    if (this.news.title && this.news.content) {
      this.onAdd.emit(this.news);
      this.news = {
        id: null,
        title: '',
        content: '',
        imageURL: ''
      };
    }
  }

}
