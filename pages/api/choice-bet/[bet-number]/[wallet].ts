// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function ChoiceBet(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { wallet, 'bet-number': betNumber } = req.query;
  console.log(betNumber);
  res.json({ name: '' });
}
