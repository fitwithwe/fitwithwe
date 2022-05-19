import { Route, Redirect, Switch, BrowserRouter, } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/home"} component={Home} />
                    <Route exact path={"/about"} component={About} />
                    <Route path={"*"}>
                        <Redirect to={"/home"} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}