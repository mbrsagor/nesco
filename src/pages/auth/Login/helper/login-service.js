import { apiRequest } from '../../../../utils'
import Cookies from 'js-cookie'

const LoginUser = async (formData) => {
  try {
    const result = await apiRequest('/login', 'POST', '', formData);
    if (result.success) {
      Cookies.set('accessToken', result.access);
      Cookies.set('refreshToken', result.refresh);
      return {success: true}
    }
    return { success: false }
  } catch (error) {
    return { error: error?.message || 'internal server error' }
  }
}

export default LoginUser