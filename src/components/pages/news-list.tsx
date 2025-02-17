import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Articles } from '@/models'

export function List({ articles }: Articles) {
  return (
    <>
      {articles?.map((article, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.author}</CardDescription>
          </CardHeader>
          <CardContent>{article.description}</CardContent>
          <CardFooter>{new Date(article.date).toLocaleDateString()}</CardFooter>
        </Card>
      ))}
    </>
  )
}
