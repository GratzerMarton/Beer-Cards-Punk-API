import React, { FC, useEffect, useState } from 'react'

import BeerCard from '../Components/BeerCard'
import { RootObject } from "../Interfaces/index"
import styles from "../styles/BeerBrowser.module.css"
type BeerBrowserProps = {
    beerData: RootObject[]
}

const BeerBrowser: FC<BeerBrowserProps> = (props) => {
    const [filterState, setFilterState] = useState(false)
    const [filteredBeers, setFilteredBeers] = useState<RootObject[]>([])
    useEffect(() => {
        if (filterState) {
            setFilteredBeers(props.beerData.filter((item) => Number(item.first_brewed.split('/')[1]) < 2011))
        }
        else {
            setFilteredBeers(props.beerData)
        }

    }, [props.beerData, filterState])

    return (<>
        <div className={styles.filtercontainer}>
            <button className={filterState ? styles.button_on : styles.button_off} onClick={() => setFilterState(!filterState)}><h1>Filter</h1></button>

        </div>

        <div className={styles.container}>

            {
                filteredBeers.map((item) =>
                    <BeerCard beer={item}></BeerCard>

                )
            }


        </div></>
    )
}


export default BeerBrowser

