import Layout from '@/components/Layout';
import Card from '@/components/Card';

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4">About Animal Aid Bangladesh</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card><h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2><p className="text-gray-600">We rescue, rehabilitate, and find homes for animals in need.</p></Card>
          <Card><h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2><p className="text-gray-600">A Bangladesh where all animals are treated with compassion and respect.</p></Card>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{ title: 'Compassion', icon: '❤️' }, { title: 'Integrity', icon: '🤝' }, { title: 'Excellence', icon: '⭐' }, { title: 'Community', icon: '👥' }].map((v) => (
              <Card key={v.title} className="text-center"><div className="text-4xl mb-3">{v.icon}</div><h3 className="text-xl font-bold text-primary">{v.title}</h3></Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}