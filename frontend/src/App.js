
import {

  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';

//components 
import Home from './components/home/Home';
import TakeSurvey from './components/survey/takesurvey/TakeSurvey';
import AddSurvey from './components/survey/addsurvey/AddSurvey';
import MobileMenu from './components/mobilemenu/MobileMenu';
import SurveyResults from './components/survey/surveyresults/SurveyResults';

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    
    <Provider store={store}>
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

            <Route path="/results">
              <SurveyResults />
            </Route>
            
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
