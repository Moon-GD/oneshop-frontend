import { useState, useEffect } from 'react'

import '../css/common.css'
import UserInfo from '../components/UserInfo'
import ShopDescription from '../components/ShopDescription'
import ShopItems from '../components/ShopItems'

function Shop() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingItems, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch("http://3.36.122.123:8080/api/items", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
              console.log(response)
                return response.json()
            })
            .then((data) => {
                const items = []

                for (const key in data) {
                    const item = {
                        ...data[key],
                    }

                    items.push(item)
                }
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
        <section className='main'>
            <UserInfo></UserInfo>
            <ShopDescription></ShopDescription>
            <ShopItems items={loadingItems}></ShopItems>
        </section>
    )
}

export default Shop
