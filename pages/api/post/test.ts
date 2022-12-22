// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Name = {
  name: string | string[] | undefined
}

export default function handler(
req: NextApiRequest,
  res: NextApiResponse<Name>
) {
    const { firstName } = req.body
    setTimeout(()=>{
      res.status(200).json({ name: firstName + '.' })
    }, 10000)
}
