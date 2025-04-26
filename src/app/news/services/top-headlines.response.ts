export interface ArticleResource {
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  description: string | null;
  url: string;
  author: string;
  urlToImage: string | null;
  publishedAt: string;
}

export interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  articles: ArticleResource[];
}
