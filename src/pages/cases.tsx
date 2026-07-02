import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function Cases() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const cases = [
    { id: 1, title: 'Street Dog Rescue', description: 'Injured stray dog needs care.', location: 'Dhaka', type: 'rescue', emoji: '🐕', status: 'open' },
    { id: 2, title: 'Cat for Adoption', description: 'Friendly cat looking for home.', location: 'Mirpur', type: 'adoption', emoji: '🐱', status: 'open' },
    { id: 3, title: 'Lost Puppy', description: 'Help find puppy owner.', location: 'Gulshan', type: 'lost', emoji: '🐶', status: 'open' },
    { id: 4, title: 'Bird Rescue', description: 'Injured birds being prepared.', location: 'Sylhet', type: 'rescue', emoji: '🦆', status: 'in-progress' },
  ];
  const filtered = selectedType === 'all' ? cases : cases.filter((c) => c.type === selectedType);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">Rescue Cases</h1>
        <div className="flex gap-4 mb-8 flex-wrap">
          {['all', 'rescue', 'adoption', 'lost'].map((type) => (
            <button key={type} onClick={() => setSelectedType(type)} className={`px-4 py-2 rounded-lg transition ${selectedType === type ? 'bg-primary text-white' : 'bg-gray-200'}`}>
              {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <Card key={c.id}>
              <div className="flex justify-between mb-4">
                <div className="text-4xl">{c.emoji}</div>
                <span className={`px-3 py-1 rounded-full text-xs ${c.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100'}`}>{c.status === 'open' ? 'Open' : 'In Progress'}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-600 mb-2 text-sm">{c.description}</p>
              <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">📍 {c.location}</div>
              <Link href={`/cases/${c.id}`}><Button variant="secondary" size="sm" className="w-full">View Details</Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}