export class NewsData {
    public id: number;
    public title: string;
    public content: string;
    public imageURL: string;
    public votes: number;
  
    constructor(id:number , title: string, content: string, imageURL: string, votes: number = 0){
      this.id = id,
      this.title = title,
      this.content = content,
      this.imageURL = imageURL,
      this.votes = votes
    }
    
  }