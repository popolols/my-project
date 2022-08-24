import React, { useRef, useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../store/api/authApi'
import { useDispatch } from 'react-redux'
import { login } from '../store/reducer/authSlice'
import { useNavigate, useLocation } from 'react-router-dom'
export default function AuthFrom() {
  const [isLoginForm, setIsLoginForm] = useState(true)
  // 引入注册的钩子
  const [regFn, { error: regError }] = useRegisterMutation()
  //引入登录的钩子
  const [loginFn, { error: loginError }] = useLoginMutation()
  //引入action和dispatch
  const dispatch = useDispatch()
  // 获取navgate
  const navigate = useNavigate()
  const from = useLocation().state?.from || '/'
  const usernameInp = useRef()
  const pwdInp = useRef()
  const emailInp = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    // 获取用户输入的内容
    const username = usernameInp.current.value
    const password = pwdInp.current.value
    if (isLoginForm) {
      loginFn({ identifier: username, password }).then((res) => {
        if (!res.error) {
          console.log('登录成功!')
          //存储登录信息
          //登录状态（token（jwt），用户信息） 同时跳转页面到之前的页面
          dispatch(
            login({
              token: res.data.jwt,
              user: res.data.user,
            })
          )
          navigate(from, { replace: true })
        }
      })
    } else {
      const email = emailInp.current.value
      // console.log('注册', username, pwd, email)
      regFn({ username, password, email }).then((res) => {
        // console.log(res)
        if (!res.error) {
          // 注册成功 让用户去登录一下
          setIsLoginForm(true)
        }
      })
    }
  }
  return (
    <div>
      <p style={{ color: 'red' }}>{regError && '用户名或电子邮箱已重复'}</p>
      <p style={{ color: 'red' }}>{loginError && '用户名或电子邮箱已重复'}</p>
      <h2>{isLoginForm ? '登录' : '注册'}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input ref={usernameInp} type="text" placeholder="用户名" />
        </div>
        {!isLoginForm && (
          <div>
            <input ref={emailInp} type="email" placeholder="电子邮箱" />
          </div>
        )}
        <div>
          <input ref={pwdInp} type="password" placeholder="密码" />
        </div>
        <button>{isLoginForm ? '登录' : '注册'}</button>
        <a
          href=" "
          onClick={(e) => {
            e.preventDefault()
            setIsLoginForm((preState) => !preState)
          }}>
          {isLoginForm ? '没有账号？点击注册' : '已有账号？点击登录'}
        </a>
      </form>
    </div>
  )
}
