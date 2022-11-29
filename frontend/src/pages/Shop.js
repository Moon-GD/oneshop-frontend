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
                return response.json()
            })
            .then((data) => {
                setIsLoading(false)
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
            <ShopItems></ShopItems>
        </section>
    )
}

export default Shop
