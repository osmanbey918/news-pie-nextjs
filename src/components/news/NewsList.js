import NewsCard from "./NewsCard"
export default function NewsList() {
    const newsArticles = [{
        title: 'ar',
        des: 'jghftgfyjk',
        url: 'httpd'
    },
    {
        title: 'ar',
        des: 'jghftgfyjk',
        url: 'https'
    }]
    return (
        <div>
            <ul>
                {newsArticles.map((a) => (<li key={a.url}>
                    <NewsCard a={a} />
                </li>
                ))
                }
            </ul>
        </div>
    )
}
