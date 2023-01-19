export interface statistic {
  totalWordsNum: number;
  externalLinksNum: number;
  externalLinks: {
    [k: string]: number;
  };
  postsNum: number;
  wordsPerYear: {
    [k: string]: number;
  };
  postsPerYear: {
    [k: string]: number;
  };
  years: number;
}
