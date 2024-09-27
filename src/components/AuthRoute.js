// 封装高阶组件
// 核心逻辑：有token 正常跳转 无token 去登录

import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

export function AuthRoute({children}) {
  const token = getToken()
  if(token) {
    // 幽灵标签 只当作一个最外层包裹标签 实际并不会渲染
    return <>{children}</>
  }else {
    return <Navigate to={'/login'} replace />
  }
}