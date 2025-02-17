import { List } from '@/components/pages'
import { Input } from '@/components/ui'
import { useArticles, useDebounce } from '@/hooks'
import { useEffect, useState } from 'react'

function App() {
  const { newsApi, search: handleSearch } = useArticles()
  const [search, setSearch] = useState('')

  const debounce = useDebounce(search)

  useEffect(() => {
    handleSearch(debounce)
  }, [debounce, handleSearch])

  return (
    <div className="m-5 grid gap-2">
      <h1 className="mb-4">Latests News</h1>

      <div className="flex justify-between">
        <Input className="w-120" placeholder="Search news by title" value={search} onChange={evt => setSearch(evt.target.value)} />
        <span>{newsApi.articles.length} articles</span>
      </div>

      <List articles={newsApi.articles} />
    </div>
  )
}

export default App
