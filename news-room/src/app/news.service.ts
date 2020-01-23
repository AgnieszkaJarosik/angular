import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();
  private id = 6;

  private news: NewsData[] = this.initializeNews();

  public getNewsList() : NewsData[] {
    return this.news.slice();
  }

  removeItem(i: number) {
    const removedItemIndex = this.news.findIndex( item => item.id === i );
    this.news.splice(removedItemIndex, 1);
    this.onChange.emit();
  }

  addItem(news: NewsData) {
    news.id = this.id;
    this.id++;
    this.news.push(news);
    this.onChange.emit();
  }

  addRate(id: number, rate: number) {
    const itemToRate = this.news.findIndex( item => item.id === id );
    this.news[itemToRate].votes += rate;
    this.onChange.emit();
  }

  initializeNews() : NewsData[] {
    this.onChange.emit();
    return this.news = [
      new NewsData(1, 'Sejm. Zbigniew Ziobro o kontrowersyjnej ustawie. "To remedium"', '- Ustawa, która ma przeciwdziałać chaosowi, anarchii i niejasnościom związanym z kwestionowaniem statusu sędziów, została uchwalona - powiedział Zbigniew Ziobro. Minister sprawiedliwości liczy na to, że budzący kontrowersje dokument wzmocni polskie sądownictwo.', 'https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_960_720.jpg', 0),
      new NewsData(2,'Solskjaer ma gorszy bilans od Moyesa. Na razie jednak nie zostanie zwolniony', 'Manchester United w ostatnich pięciu meczach ligowych, poniósł aż trzy porażki. Środowa niespodziewana przegrana u siebie z Burnley (0:2), przelała czarę goryczy. Kibice Czerwonych Diabłów opuszczali trybuny Old Trafford długo przed końcowym gwizdkiem. Ole Gunnar Solskjaer ma gorszy bilans od często wyszydzanego Davida Moyesa. "Sky Sport podaje, że mimo słabej serii, Norweg nie starci pracy. Przynajmniej na razie Solskjaera ma pozostać na stanowisku.', 'https://cdn.pixabay.com/photo/2014/10/14/20/24/the-ball-488718_960_720.jpg', 0),
      new NewsData(3, 'Pora na zmiany w czasie pracy: 6 godzin dziennie lub 4 dni w tygodniu', 'Przyjęte na przestrzeni ostatnich stu lat normy czasu pracy nie przystają do współczesnej gospodarki. Przedsiębiorcy i politycy coraz śmielej eksperymentują więc ze skracaniem tradycyjnej szychty.', 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg', 0),
      new NewsData(4, 'Rezydenci szykują protest', 'W styczniu ministra zdrowia Leszka Szumowskiego czekają renegocjacje porozumienia z rezydentami. Związkowcy ostrzegają, że zorganizują "głośny protest", jeśli nie zostaną spełnione ich postulaty.', 'https://cdn.pixabay.com/photo/2016/01/19/15/05/doctor-1149149_960_720.jpg', 0),
      new NewsData(5, 'Adam Bielecki wrócił w góry', 'Adam Bielecki w ostrowskim szpitalu kilka miesięcy temu przeszedł poważną operację zespolenia gwoździem śródszpikowym złamania kości piętowej. Teraz himalaista wrócił w góry. - Na razie po stosunkowo łatwych drogach - pisze na Instagramie.', 'https://cdn.pixabay.com/photo/2016/02/19/10/18/summit-1209168_960_720.jpg', 0),
      
    ];
  }
}
