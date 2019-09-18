import React from 'react'
import Router from '../../components/Router'
import AsyncImport from '../../components/AsyncImport'

export default {
  path: '/home',
  component: () => <Router routes={[
    {
      path: '/home/',
      params: { key: 'home' },
      component: AsyncImport(() => import('./home'))
    }
  ]} />
}
