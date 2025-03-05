import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Root from './routes/Root.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const router = createBrowserRouter([
	{
		path: '*',
		element: <Root />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>
)
