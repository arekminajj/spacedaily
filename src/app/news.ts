export interface Doc {
  date_published: number;
  date_added: number;
  tags: string[];
  categories: string[];
  featured: boolean;
  launches: any[];
  events: any[];
  ll: any[];
  _id: string;
  news_site: string;
  news_site_long: string;
  title: string;
  url: string;
  id: any;
  featured_image: string;
  published_date: Date;
  imported_date: Date;
}

export interface News {
  docs: Doc[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: any;
  nextPage: number;
}
