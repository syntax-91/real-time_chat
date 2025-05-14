import { _404_lazy } from '../pages/404/_404_lazy'
import { Login_lazy } from '../pages/login/login_lazy'

export const pagesConfig = {
	Home: { path: '/' },
	_404: { path: '*', component: <_404_lazy /> },
	Login: { path: '/login', component: <Login_lazy /> },
}
