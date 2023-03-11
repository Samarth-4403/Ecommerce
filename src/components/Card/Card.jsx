import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {
    return (
        <Link to={'/product/${item.id}'}>
        <div className='card'>
        <div className='image'>
            <img></img>
        </div>
        </div>
        </Link>
    )
}

export default Card