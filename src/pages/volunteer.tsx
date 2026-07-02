import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', skills: '', availability: 'weekends' });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', skills: '', availability: 'weekends' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Volunteer error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">Become a Volunteer</h1>
        <p className="text-gray-600 mb-12">Join our team and help protect animals!</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">Thank you! We will contact you soon.</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+880 1XXX-XXXXXX" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <textarea name="skills" value={formData.skills} onChange={handleChange} required rows={4} placeholder="Tell us about your skills..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <select name="availability" value={formData.availability} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
                <Button type="submit" loading={isLoading} className="w-full">Submit Application</Button>
              </form>
            </Card>
          </div>
          <div className="space-y-6">
            <Card><h3 className="text-xl font-bold mb-3 text-primary">Opportunities</h3><ul className="text-sm text-gray-600 space-y-2"><li>• Rescue operations</li><li>• Care & shelter</li><li>• Adoption programs</li><li>• Community awareness</li></ul></Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}