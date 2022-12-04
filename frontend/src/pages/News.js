import { useState, useEffect } from 'react'

import '../css/common.css';
import UserInfo from '../components/UserInfo';
import NewsYears from './../components/NewsYears';
import NewsList from './../components/NewsList';


function News() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingItems, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch("http://3.36.122.123:8080/api/news", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setIsLoading(false)

                const items = []

                for (const key in data) {
                    const item = {
                        ...data[key],
                    }

                    items.push(item)
                }
                console.log(items)
                setIsLoading(false)
                setLoadedMeetups(items)
            })
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
  return (
    <section className="main">
      <UserInfo></UserInfo>
      <NewsYears></NewsYears>
      <NewsList items={loadingItems}></NewsList>
    </section>
  );
}

export default News;