import {Switch, Route} from "react-router-dom";
import HomePage from "./router-pages/HomePage";
import RecipesPage from "./router-pages/RecipesPage";
import ShoppingListPage from "./router-pages/ShoppingListPage";
import AuthenticationPage from "./router-pages/AuthenticationPage";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
    return (
        <MainContainer>
            <Switch>
                <Route path='/auth'>
                    <AuthenticationPage/>
                </Route>
                <Route path='/home'>
                    <HomePage/>
                </Route>
                <Route path='/recipes'>
                    <RecipesPage/>
                </Route>
                <Route path='/shopping'>
                    <ShoppingListPage/>
                </Route>
            </Switch>
        </MainContainer>
    );
}

export default App;
