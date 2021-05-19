import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Author from "./Components/Author";
import Home from "./Components/Home";
import Navigation from "./Navigation";
import Article from "./Components/Article";

function App() {
    return (
        <div>
            <Navigation/>
            <Router>
                <Switch>
                    <Route path="/author" component={Author}/>
                    <Route path="/article" component={Article}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
