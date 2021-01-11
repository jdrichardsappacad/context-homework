import { Route, Switch, NavLink } from 'react-router-dom';
import Player from './components/Player';
import SoundChooser from './components/SoundChooser';
function App() {
  return (
    <div className='container'>
      <div className='left'>
        <ul>
          <li>
            <NavLink to='/sounds'>Choose Sounds</NavLink>
          </li>
          <li>
            <NavLink to='/player'>Play Sounds</NavLink>
          </li>
        </ul>
      </div>
      <div className='right'>
        <Switch>
          <Route exact path='/'>
            <h1>
              Welcome Choose Your Type of Sound Effect and Play Them Using the
              Choices Given
            </h1>
          </Route>
          <Route path='/sounds'>
            <SoundChooser />
          </Route>
          <Route path='/player'>
            <Player />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
