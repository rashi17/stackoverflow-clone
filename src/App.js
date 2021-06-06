import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {lazy} from 'react';
import { Suspense } from 'react';
const Login = lazy(() => import('./components/login'));
const Questions = lazy(() => import('./components/questions'));
const UserProfile  = lazy(()=>import('./components/user-profile'))

const pages = [
  {
    pageLink: '/',
    view: Login,
    displayName: 'Login',
  },
  {
    pageLink: '/questions',
    view: Questions,
    displayName: 'Questions',
  },
  {
    pageLink: '/userprofile',
    view: UserProfile,
    displayName: 'User Profile',
  },
]

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Router>
        <Switch>
          {pages.map((page,index)=>{
            return(
              <Route
              exact
              path={page.pageLink}
              render={() => <page.view />}
              key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
      </Router>
      </Suspense>
  );
}

export default App;
