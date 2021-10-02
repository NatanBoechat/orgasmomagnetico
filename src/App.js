import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Initial from './Pages/Initial';
import LP from './Pages/LP';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Initial} path="/" />
        <Route exact component={LP} path="/lp" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
