import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesConfig } from '../config/routesConfig'

export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={routesConfig.Layout.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.Layout.element />
						</Suspense>
					}
				>
					<Route index element={<routesConfig.Home.element />} />
				</Route>

				<Route
					path={routesConfig.Login.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.Login.element />
						</Suspense>
					}
				/>

				<Route
					path={routesConfig.NotFound.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.NotFound.element />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
