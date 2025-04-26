export interface SourceResource {
  id: string;
  name: string;
  url: string;
  author: string;
  urlToLogo: string;
}

export interface SourcesResponse {
  status: string;
  sources: SourceResource[];
}
