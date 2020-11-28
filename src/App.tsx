import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Components from './components/common/typescript/pages/Components';
import Home from './components/home/Home';
import SurveyResult from './components/surveyResult/SurveyResult';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
        <Route path="/survey-result" exact component={SurveyResult} />
      </Switch>
    </Router>
  );
};

export default App;
