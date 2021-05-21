import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Tops from './Tops/Tops.js'
import Bottoms from './Bottoms/Bottoms.js'


function Clothes() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Holi, estás en Clothes</h2>
      <ul>
				<li>
          <Link to={`${match.url}`}>All</Link>
        </li>
        <li>
          <Link to={`${match.url}/tops`}>Tops</Link>
        </li>
				<li>
          <Link to={`${match.url}/bottoms`}>Bottoms</Link>
        </li>
      </ul>

      <Switch>
				<Route path={`${match.path}/bottoms`}>
          <Bottoms />
        </Route>
				<Route path={`${match.path}/tops`}>
          <Tops />
        </Route>
        <Route path={`${match.path}`}>
          <AllClothes />
        </Route>
      </Switch>
    </div>
  );
}


function AllClothes () {
	return(
		<div>
			Aquí se visualiza todo Clothes
		</div>
	)
}


export default Clothes;