import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const cases = [{ id: 1, title: 'Dog Rescue', description: 'Stray dog in need', location: 'Dhaka', type: 'rescue' }];
      return res.status(200).json({ success: true, data: cases });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error' });
    }
  }
  return res.status(405).json({ success: false, message: 'Not allowed' });
}