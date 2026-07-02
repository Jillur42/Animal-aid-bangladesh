'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useState } from 'react';

interface Joke {
  setup?: string;
  delivery?: string;
  joke?: string;
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [jokeType, setJokeType] = useState('any');

  const fetchJoke = async () => {
    setIsLoading(true);
    setError('');
    try {
      const url = jokeType === 'any' ? 'https://v2.jokeapi.dev/joke/Any' : `https://v2.jokeapi.dev/joke/${jokeType}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch');
      const data: Joke = await response.json();
      setJoke(data);
    } catch (err) {
      setError('Could not fetch joke. Try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">😂 Laugh for a Cause</h1>
          <p className="text-gray-600">Get a random joke and share!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="min-h-96 flex flex-col justify-center">
              {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>}
              {joke ? (
                <div className="text-center">
                  <div className="text-5xl mb-6">😄</div>
                  {joke.setup && joke.delivery ? (
                    <div><p className="text-xl mb-6 font-semibold">{joke.setup}</p><p className="text-2xl text-primary font-bold">{joke.delivery}</p></div>
                  ) : (
                    <p className="text-xl">{joke.joke}</p>
                  )}
                </div>
              ) : (
                <div className="text-center"><div className="text-6xl mb-4">🎭</div><p className="text-gray-500">Click button to get a joke!</p></div>
              )}
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold mb-4 text-primary">Joke Category</h3>
              <select value={jokeType} onChange={(e) => setJokeType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4">
                <option value="any">Any Joke</option>
                <option value="Programming">Programming</option>
                <option value="Knock-Knock">Knock Knock</option>
                <option value="General">General</option>
              </select>
              <Button onClick={fetchJoke} loading={isLoading} className="w-full">Get Joke</Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}