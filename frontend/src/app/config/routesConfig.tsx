import _404Lazy from '../../pages/404/404Lazy'
import LoginLazy from '../../pages/auth/Login/LoginLazy'
import HomeLazy from '../../pages/Home/homeLazy'
import LayoutLazy from '../../pages/Layout/LayoutLazy'

export const routesConfig = {
	Layout: { path: '/', element: LayoutLazy },
	Home: { path: '/Home', element: HomeLazy },
	Login: { path: '/login', element: LoginLazy },
	NotFound: { path: '*', element: _404Lazy },
}
