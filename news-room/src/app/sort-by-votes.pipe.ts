import { Pipe, PipeTransform } from '@angular/core';
import { NewsData } from './news-data';

@Pipe({
  name: 'sortByVotes'
})
export class SortByVotesPipe implements PipeTransform {

  transform(news: NewsData[]): NewsData[] {
    const newsToReturn = news.sort( (a,b) => a.votes - b.votes );
    return newsToReturn.reverse();
  }

}
