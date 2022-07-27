import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../contexts/useAuthContext'
// import LayoutMenuLeft from '../layout/LayoutMenuLeft'
// import { Box } from '@mui/material'
// import Splash from '../utils/splash'

const WithAuth = (props) => {
  const { children, safe } = props

  const router = useRouter()
  const { auth, load } = useContext(AuthContext)

  if (load) {
    return "loading..."
  }

  if (safe && auth.auth) {
    return <div>   
              {children}
          </div>
  }

  if (safe && !auth.auth) {
    router.replace('/role')
    return <></>
  }

  if (!safe && auth.auth) {
    router.replace('/dashboard')
    return <></>
  }

  

  return children
}

export default WithAuth
