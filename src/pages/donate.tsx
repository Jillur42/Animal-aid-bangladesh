import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useState } from 'react';

export default function Donate() {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '50', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', amount: '50', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Donation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">Make a Donation</h1>
        <p className="text-gray-600 mb-12">Your generous donation helps us rescue and protect animals.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Thank you! We will process it soon.</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Donation Amount (USD)</label>
                  <div className="flex gap-4 mb-4">
                    {['25', '50', '100', '250'].map((amount) => (
                      <button key={amount} type="button" onClick={() => setFormData({ ...formData, amount })} className={`px-4 py-2 rounded-lg border-2 transition ${formData.amount === amount ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-700 hover:border-primary'}`}>
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>
                <Button type="submit" loading={isLoading} className="w-full">Donate ${formData.amount}</Button>
              </form>
            </Card>
          </div>
          <div className="space-y-6">
            <Card><h3 className="text-xl font-bold mb-3 text-primary">How Your Donation Helps</h3><ul className="space-y-3 text-sm text-gray-600"><li>✓ Medical care</li><li>✓ Shelter & food</li><li>✓ Rescue operations</li><li>✓ Adoption programs</li></ul></Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}