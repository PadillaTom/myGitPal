import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Pages:
import {Main, Login, Error} from "../../Pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main></Main>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>       
      </Router>    
    </div>
  );
}

export default App;
