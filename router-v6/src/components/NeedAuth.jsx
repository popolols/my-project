import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
export default function NeedAuth(props) {
  const auth = useSelector((state) => state.auth)
  const location = useLocation()
  // console.log('needauth', location)
  return auth.isLogged ? (
    props.children
  ) : (
    <Navigate
      to={'/auth-form'}
      replace
      state={{ from: location.pathname }}></Navigate>
  )
}
