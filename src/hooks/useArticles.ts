import { Articles, TotalArticles } from '@/models'
import { NewsApiModel } from '@/models/news-api'
import { apiService } from '@/services/api'
import { useCallback, useEffect, useState } from 'react'

export const useArticles = () => {
  const [newsApi, setNewsApi] = useState<TotalArticles>({ articles: [], total: 0 })

  const parse = ({ articles }: Pick<NewsApiModel, 'articles'>) => {
    const newsApiArticles: Articles = {
      articles: articles.map(article => ({
        author: article.author,
        title: article.title,
        description: article.description,
        date: new Date(article.publishedAt).toLocaleDateString(),
      })),
    }
    return newsApiArticles
  }

  const getNews = useCallback(async () => {
    const { articles, totalResults } = await apiService.get<NewsApiModel>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
    )
    const newsApiArticles = parse({ articles })
    setNewsApi({ articles: newsApiArticles.articles, total: totalResults })
  }, [])

  const search = useCallback(
    async (search: string) => {
      if (!search) {
        await getNews()
        return
      }
      const { articles, totalResults } = await apiService.get<NewsApiModel>(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`
      )
      const newsApiArticles = parse({ articles })
      setNewsApi({ articles: newsApiArticles.articles, total: totalResults })
    },
    [getNews]
  )

  useEffect(() => {
    getNews()
  }, [getNews])

  return { newsApi, search }
}
