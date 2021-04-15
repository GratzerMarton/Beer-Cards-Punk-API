import React, { useEffect, useState, FC } from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import BeerBrowser from './Pages/BeerBrowser';
import Beer from './Pages/Beer';
import { consumeAPI } from './API';
import { RootObject } from "./Interfaces/index"




const Router: FC = () => {
  const [beerData, setBeerData] = useState<RootObject[]>([])
  useEffect(() => {
    const callToApi = async () => {
      const response = await consumeAPI<RootObject[]>()
      if (response)

        setBeerData(response)

    }
    callToApi()
  }, [])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/beer/:id">
          <Beer beerData={beerData} />
        </Route>

        <Route path="/">
          <BeerBrowser beerData={beerData} />
        </Route>
      </Switch>

    </BrowserRouter >
  );
}

export default Router;
