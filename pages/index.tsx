import Head from 'next/head';
import { properties } from '../data/properties';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zicatela Luxury - Villas de lujo frente al mar</title>
        <meta
          name="description"
          content="Descubre nuestras exclusivas villas de lujo frente al mar en Zicatela, Oaxaca. Experiencias únicas en propiedades privadas y de alto nivel."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        
        {/* Properties Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <h2 className="text-4xl font-serif text-emerald text-center mb-12">
              Nuestras Propiedades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 