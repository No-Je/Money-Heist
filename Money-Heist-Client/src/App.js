import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';
import ShareResultPage from './pages/ShareResultPage';

function App() {
  return (
    <Switch>
      <Route component={MainPage} path="/" exact />
      <Route component={QuestionPage} path="/question" />
      <Route component={ResultPage} path="/result" />
      <Route component={ShareResultPage} path="/shareresult/:idx" />
      <Route component={() => <h2>404 Not Found</h2>} />
    </Switch>
  );
}

export default App;
