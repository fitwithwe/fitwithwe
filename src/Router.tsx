import { Route, Redirect, Switch, BrowserRouter, } from 'react-router-dom'
import { Home } from './pages/Home'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/home"} component={Home} />
                    <Route path={"*"}>
                        <Redirect to={"/home"} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}