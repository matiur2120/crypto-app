
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BnbAmount from './Components/BnbAmount';
import Menu from './Components/Menu';
import RankList from './Components/RankList';
import RoomSelection from './Components/RoomSelection';
import WarningBody from './Components/WarningBody';

function App() {
  return (
    <div className="App">
      <Menu/>
       <Switch>
        <Route exact path="/">  <WarningBody /> </Route>
        <Route path="/parsel">  <RoomSelection /> </Route>
        <Route path="/bnb">  <BnbAmount /> </Route>
        <Route path="/rank">  <RankList /> </Route>
      </Switch> 
     
     
    </div>
  );
}

export default App;
