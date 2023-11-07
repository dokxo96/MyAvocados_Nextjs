import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

import * as console from 'console'
const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id
  const entry = await db.getById(id as string)
  const length = entry
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ data: entry }))
}

export default allAvos
