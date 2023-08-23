import React, { useContext } from 'react'
import { MediaContext } from '../context/MediaContext'

import Actor from './Actor'

export default function Actors() {
    const { trendingPerson } = useContext(MediaContext)
    return (
        <>
            {trendingPerson.slice(0, 10).map((item, index) => (
                <Actor index={index} item={item} />
            ))}
        </>
    )
}
