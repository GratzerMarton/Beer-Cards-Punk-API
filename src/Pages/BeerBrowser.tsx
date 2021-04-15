import React, { FC } from 'react'

import BeerCard from '../Components/BeerCard'
import { RootObject } from "../Interfaces/index"
import styles from "../styles/BeerBrowser.module.css"
type BeerBrowserProps = {
    beerData: RootObject[]
}

const BeerBrowser: FC<BeerBrowserProps> = (props) => {

    console.log(props);
    return (
        <div className={styles.container}>
            {
                props.beerData.map((item) =>
                    <BeerCard beer={item}></BeerCard>

                )
            }


        </div>
    )
}


export default BeerBrowser

