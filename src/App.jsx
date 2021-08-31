import './styles/global.scss'
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Planetas } from './pages/Planetas';

import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/planetas/:slug" component={Planetas} />
            </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
