import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NeedAuth from './components/NeedAuth'
import AuthFormPage from './pages/AuthFormPage'

import HomePages from './pages/HomePages'
import ProfilePage from './pages/ProfilePage'
import StudentPage from './pages/StudentPage'
export default function App () {
  return (
    <div>

      <Layout>

        <Routes>
          <Route path='/' element={<HomePages />}></Route>
          <Route path='/profile' element={<NeedAuth><ProfilePage /></NeedAuth>}></Route>
          <Route path={'/auth-form'} element={<AuthFormPage />}></Route>
          <Route path={'/student'} element={<NeedAuth><StudentPage /></NeedAuth>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}
