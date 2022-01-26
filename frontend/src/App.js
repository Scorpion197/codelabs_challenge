
import {

  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';

//components 
import Home from './components/home/Home';
import TakeSurvey from './components/survey/takesurvey/TakeSurvey';
import AddSurvey from './components/survey/addsurvey/AddSurvey';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path="/take_survey">
            <TakeSurvey />
          </Route>

          <Route path="/add_survey">
            <AddSurvey />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
