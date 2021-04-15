import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { RootObject } from "../Interfaces/index"

type BeerBrowserProps = {
    beerData: RootObject[]
}

const BeerBrowser: FC<BeerBrowserProps> = (props) => {

    console.log(props);
    return (
        <div>

        </div>
    )
}


export default BeerBrowser

