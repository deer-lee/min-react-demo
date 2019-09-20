import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props)
	}
	/** 初始化 routes 属性 **/
	static defaultProps = {
		routes: [],
		component: () => {}
	}
	/** 配置路由 **/
	createRoute (routeConfig, i) {
		const { key = i, path, exact, component: Comp, params, routes } = routeConfig
		return (
			<Route
				key={key}
				exact={exact}
				path={path}
				render={props => <Comp {...props} routes={routes} params={params} />}
			/>
		)
	}
	/** 渲染路由 **/
	render() {
		const { routes } = this.props
		return (
			<Switch>
				{routes.map((v, i) => this.createRoute(v, i))}
			</Switch>
		)
	}
}
