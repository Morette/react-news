export type NewsApiModel = {
  totalResults: number;
  articles: Array<{
      author: string
      description: string
      title: string
      publishedAt: Date | string
    }>
}
