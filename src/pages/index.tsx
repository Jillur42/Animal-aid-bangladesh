import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🐾 Animal Aid Bangladesh</h1>
          <p className="text-xl mb-8 text-gray-100">Protecting and Rescuing Animals Across Bangladesh</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/donate"><Button>Donate Now</Button></Link>
            <Link href="/volunteer"><Button variant="secondary">Become a Volunteer</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center"><h3 className="text-4xl font-bold text-primary mb-2">500+</h3><p className="text-gray-600">Animals Rescued</p></Card>
            <Card className="text-center"><h3 className="text-4xl font-bold text-primary mb-2">150+</h3><p className="text-gray-600">Active Volunteers</p></Card>
            <Card className="text-center"><h3 className="text-4xl font-bold text-primary mb-2">50+</h3><p className="text-gray-600">Animals Adopted</p></Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recent Rescue Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card><div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl">🐕</div><h3 className="text-xl font-bold mb-2">Dog in Need</h3><p className="text-gray-600 mb-4">A stray dog needs medical care and foster home.</p><Link href="/cases"><Button variant="secondary" size="sm">View Details</Button></Link></Card>
            <Card><div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl">🐱</div><h3 className="text-xl font-bold mb-2">Cat for Adoption</h3><p className="text-gray-600 mb-4">A friendly cat looking for a loving home.</p><Link href="/cases"><Button variant="secondary" size="sm">View Details</Button></Link></Card>
            <Card><div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center text-4xl">🦆</div><h3 className="text-xl font-bold mb-2">Bird Rescue</h3><p className="text-gray-600 mb-4">Injured birds rescued and being prepared for release.</p><Link href="/cases"><Button variant="secondary" size="sm">View Details</Button></Link></Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">😂 Laugh for a Cause</h2>
          <p className="text-gray-600 mb-8">Get a random joke and share a laugh!</p>
          <Link href="/jokes"><Button size="lg">Get a Joke</Button></Link>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-lg mb-8">Your donation helps us rescue and rehome animals.</p>
          <Link href="/donate"><Button variant="secondary">Donate Now</Button></Link>
        </div>
      </section>
    </Layout>
  );
}