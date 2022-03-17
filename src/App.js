import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Posts from './components/Posts';


function App() {
  return ( 
    <Router>
      <div className="App" style = {{backgroundColor : "grey"}}>
        <h1>List Of Data Containing Name and Age.</h1>
      <NavBar/>
      <Switch>
        <Route exact path="/posts" component={Posts}></Route>
      </Switch>
    </div>
    </Router>
    
  );
}
export default App;
