import { Route, Redirect, Switch, BrowserRouter, } from 'react-router-dom'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/home"} component={Home} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route path={"*"}>
                        <Redirect to={"/home"} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}