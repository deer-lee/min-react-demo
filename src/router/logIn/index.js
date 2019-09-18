import React from 'react'
import Router from '../../components/Router'
import AsyncImport from '../../components/AsyncImport'

export default {
  path: '/logIn',
  component: () => <Router routes={[
    {
      exact: true,
      path: '/logIn/',
      params: { key: 'logIn' },
      component: AsyncImport(() => import('./logIn'))
    }
  ]} />
}
