import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer/authSlice'
export default function MainMenu() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>首页</Link>
        </li>
        {!auth.isLogged && (
          <li>
            <Link to={'/auth-form'}>登录/注册</Link>
          </li>
        )}
        {auth.isLogged && (
          <li>
            <Link to={'/profile'}>用户信息</Link>
          </li>
        )}
        {auth.isLogged && (
          <li>
            <Link to={'/student'}>学生信息</Link>
          </li>
        )}
        {auth.isLogged && (
          <li>
            <Link to={'/'} onClick={() => dispatch(logout())}>
              登出
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
