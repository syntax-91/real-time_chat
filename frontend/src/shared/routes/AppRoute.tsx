import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pagesConfig } from '../config/pages.config'
import Home from '../pages/Home/Home'

//lazy imports
const _404 = React.lazy(() => import('./../pages/404/_404'))
const Login = React.lazy(() => import('./../pages/login/Login'))

export function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={pagesConfig.Home.path} element={<Home />} />

				<Route
					path={pagesConfig._404.path}
					element={pagesConfig._404.component}
				/>

				<Route
					path={pagesConfig.Login.path}
					element={
						<Suspense fallback={<p>Loading..</p>}>
							{pagesConfig.Login.component}
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
