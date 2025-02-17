export type Articles = {
  articles: Array<{
    author: string
    description: string
    title: string
    date: Date | string
  }>
}

export type TotalArticles = Articles & { total: number }
