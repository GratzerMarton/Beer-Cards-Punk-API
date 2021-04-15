import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { RootObject } from "../Interfaces/index"
import styles from "../styles/Beer.module.css"
type BeerBrowserProps = {
    beerData: RootObject[]
}

const Beer: FC<BeerBrowserProps> = (props) => {
    const [givenBeer, setGivenBeer] = useState<RootObject>()
    console.log(props);

    const { id } = useParams<{ id: string }>();
    useEffect(() => {


        if (id) {
            const givenitem = props.beerData.filter((item) => item.id === Number(id))
            setGivenBeer(givenitem[0])
        }


    }, [props])
    console.log(givenBeer);
    if (givenBeer !== undefined)
        return (
            <div className={styles.container}>
                <img className={styles.image} src={givenBeer!.image_url} alt={givenBeer!.name}></img>
                <h3 className={styles.showonhover}>{givenBeer!.tagline}</h3>
                <h1>{givenBeer!.name}</h1>
                <p>{givenBeer!.description}</p>
                <Link to={`/`}>Go Back</Link>
            </div>
        )

    return (<h1>Beer Not Found</h1>)
}


export default Beer

