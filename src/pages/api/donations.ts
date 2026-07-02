import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Not allowed' });
  try {
    const { name, email, amount } = req.body;
    if (!name || !email || !amount) return res.status(400).json({ success: false, message: 'Missing fields' });
    console.log('Donation:', { name, email, amount });
    return res.status(200).json({ success: true, message: 'Donation received!', data: { name, email, amount } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error' });
  }
}