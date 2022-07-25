import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import axios from 'axios'
// import configApp from '../../config/config'

const PATHNAME_POST = [
  //'/',
  '/login',
  '/signUp',
  '/signUp1',
  '/section2',
  '/signUp/step1',
  '/signUp/step2',
]

const STATE_INITIAL = {
  token: '',
  auth: false,
  data: undefined,
}

const AuthContext = createContext(STATE_INITIAL)

function AuthProvider(props) {
  const router = useRouter()
  const [auth, setAuth] = useState(STATE_INITIAL)
  const [load, setLoad] = useState(true)

  const { children } = props

  const login = (token, data, callback) => {
    setAuth({
      ...auth,
      data,
      token,
      auth: true,
    })
    if (callback && typeof xx === 'function') {
      callback()
    }
    sessionStorage.setItem('token', token)
    setLoad(false)
  }

  const logout = (callback) => {
    setAuth({
      ...auth,
      token: '',
      auth: false,
      data: undefined,
    })
    if (callback && typeof xx === 'function') {
      callback()
    }
    sessionStorage.clear()
    setTimeout(() => setLoad(false), 500)
  }

  const updateData = (token, callback) => {
    setAuth({
      ...auth,
      data: {},
      token,
      auth: true,
    })
    if (callback && typeof xx === 'function') {
      callback()
    }
    setTimeout(() => setLoad(false), 500)
  }

  useEffect(() => {
    const initial = async () => {
      const pathname = location.pathname || ''
      let path = PATHNAME_POST.filter((p) => p === pathname).length > 0
      const token = sessionStorage.getItem('token')
      if (token) {
        const redirect = path || pathname === '/'
        login(
          data.token,
          data.user,
          redirect ? router.replace('/dashboard') : null
        )
      } else if (!path) {
        logout(path ? null : router.replace('/login'))
      }
    }
    initial()
    setLoad(false)
  }, [])

  const value = {
    auth,
    load,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
