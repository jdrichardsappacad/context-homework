import { Route, Switch, NavLink } from 'react-router-dom';
import Player from './components/Player';
import SoundChooser from './components/SoundChooser';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '25%', paddingTop: '100px' }}>
        <ul>
          <li>
            <NavLink to='/sounds'>Choose Sounds</NavLink>
          </li>
          <li>
            <NavLink to='/player'>Play Sounds</NavLink>
          </li>
        </ul>
      </div>
      <div style={{ width: '75%', display: 'flex', justifyContent: 'center' }}>
        <Switch>
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
