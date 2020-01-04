export class NewsData {
  public id: number;
  public title: string;
  public content: string;
  public imageURL: string;

  constructor(id, title, content, imageURL){
    this.id = id,
    this.title = title,
    this.content = content,
    this.imageURL = imageURL
  }
  
//   constructor(
//     id: number,
//     title: string,
//     content: string,
//     imageURL: string
// ) {}
}