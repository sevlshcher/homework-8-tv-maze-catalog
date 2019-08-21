import React, { PureComponent } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Search from '../Search'
import ShowPage from '../ShowPage'
import './AppRouter.css'

// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

class AppRouter extends PureComponent {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route path='/shows/:id' component={ShowPage} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(AppRouter)