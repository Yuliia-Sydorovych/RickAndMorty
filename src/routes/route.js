import { Routes as Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from '../configs/routes';
import Characters from '../pages/CharactersPage/Characters';
import Character from '../pages/CharacterPage/Character';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.pathToCharactersPage} element={<Characters/>}/>
        <Route path={routes.pathToCharacterPage} element={<Character/>}/>
        <Route path='/*' render={() => 'Not Found'}/>
      </Switch>
    </Router>
  );
};

export default Routes;
