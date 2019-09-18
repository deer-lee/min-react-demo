import React from 'react'
import AsyncImport from '../components/AsyncImport'

import LOGIN from './logIn' // 登录页
import HOME from './home' // 登录页
export default [
	{
		path: '/',
		exact: true,
		component: AsyncImport(() => import('./logIn/logIn')),
		params: { test: 'ok' }
	},
  LOGIN,
  HOME
]
