import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

import * as console from 'console'
const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.id
  const entry = await db.getById(id as string)

  res.status(200).json({ data: entry })
}

export default allAvos
