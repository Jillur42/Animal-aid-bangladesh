import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Not allowed' });
  try {
    const { name, email, phone, skills } = req.body;
    if (!name || !email || !phone || !skills) return res.status(400).json({ success: false, message: 'Missing fields' });
    console.log('Volunteer:', { name, email, phone, skills });
    return res.status(200).json({ success: true, message: 'Application received!', data: { name, email } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Error' });
  }
}