import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { RootObject } from "../Interfaces/index"
import styles from "../styles/BeerCard.module.css"
type BeerBrowserProps = {
    beer: RootObject
}

const BeerCard: FC<BeerBrowserProps> = (props) => {

    console.log(props);
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.beer.image_url}></img>

            <h1>{props.beer.name}</h1>
            <p>{props.beer.description}</p>
            <Link to={`/beer/${props.beer.id}`}>Click for more info</Link>
        </div>
    )
}


export default BeerCard

