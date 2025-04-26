import {Source} from './source.entity';

export class Article {
  title: string;
  description: string;
  author: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: Source;

  constructor() {
    this.title = '';
    this.description = '';
    this.author = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.source = new Source();
  }
}
