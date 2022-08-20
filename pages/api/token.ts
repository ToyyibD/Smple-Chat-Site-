// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  token: string
  expires: boolean
}

function tokengenerator(length: number) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    res.status(200).json({
        token: tokengenerator(60),
        expires: false
    })
}
