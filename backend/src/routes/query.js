import { Router } from 'express'
import { query_Service } from '../service/query.service.js'

export const QueryRoute = Router()

// /query
QueryRoute.post('/', (req, res) => {})

// /query/users
QueryRoute.get('/users', (req, res) => {
	res.set('Cache-Control', 'no-store')
	const query = req.query

	query_Service(query)
		.then(e => res.json({ success: e.success, data: e.data }))
		.catch(err => console.error('ERROR: ', err))
})
