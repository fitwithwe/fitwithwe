import { Route, Redirect, Switch, BrowserRouter, } from 'react-router-dom'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FreePlan } from './pages/FreePlan'
import { Home } from './pages/Home'
import { Pricing } from './pages/Pricing'
import { Transformation } from './pages/Transformation'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/home"} component={Home} />
                    <Route exact path={"/about"} component={About} />
                    <Route exact path={"/contact"} component={Contact} />
                    <Route exact path={"/pricing"} component={Pricing} />
                    <Route exact path={"/freehelp"} component={FreePlan} />
                    <Route exact path={"/transformation"} component={Transformation} />
                    <Route path={"*"}>
                        <Redirect to={"/home"} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}