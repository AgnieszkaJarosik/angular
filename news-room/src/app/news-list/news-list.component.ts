import { Component, OnInit } from '@angular/core';
import { NewsData } from './news-data';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {
  news: NewsData[];
  constructor() { }

  ngOnInit() {
    this.news = [
      new NewsData (1, 'Pora na zmiany w czasie pracy: 6 godzin dziennie lub 4 dni w tygodniu', 'Przyjęte na przestrzeni ostatnich stu lat normy czasu pracy nie przystają do współczesnej gospodarki. Przedsiębiorcy i politycy coraz śmielej eksperymentują więc ze skracaniem tradycyjnej szychty.', 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg'),
      new NewsData (2, 'Rezydenci szykują protest', 'W styczniu ministra zdrowia Leszka Szumowskiego czekają renegocjacje porozumienia z rezydentami. Związkowcy ostrzegają, że zorganizują "głośny protest", jeśli nie zostaną spełnione ich postulaty.', 'https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149_960_720.jpg'),
      new NewsData(3, 'Adam Bielecki wrócił w góry', 'Adam Bielecki w ostrowskim szpitalu kilka miesięcy temu przeszedł poważną operację zespolenia gwoździem śródszpikowym złamania kości piętowej. Teraz himalaista wrócił w góry. - Na razie po stosunkowo łatwych drogach - pisze na Instagramie.', 'https://cdn.pixabay.com/photo/2016/02/19/10/18/summit-1209168_960_720.jpg')
    ]
  }

  removeItem(i: number) {
    this.news.splice(i,1);
  }

  addItem(news: NewsData) {
    const id = this.news.length + 1;
    news.id = id;
    this.news.push(news);
  }

}
