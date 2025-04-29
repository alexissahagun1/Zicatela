import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { properties } from '../../data/properties';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingForm from '../../components/BookingForm';

export default function PropertyDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <>
        <Head>
          <title>Propiedad no encontrada - Zicatela Luxury</title>
        </Head>
        <Navbar />
        <main className="container-custom py-20 text-center">
          <h1 className="text-4xl font-serif text-emerald mb-4">
            Propiedad no encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la propiedad que buscas no existe.
          </p>
          <button
            onClick={() => router.push('/')}
            className="btn-primary"
          >
            Volver al inicio
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{property.name} - Zicatela Luxury</title>
        <meta
          name="description"
          content={property.shortDescription}
        />
      </Head>

      <Navbar />
      <main>
        {/* Hero Image */}
        <div className="relative h-[60vh]">
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white text-center">
              {property.name}
            </h1>
          </div>
        </div>

        {/* Property Details and Booking Form */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Property Details */}
              <div>
                <h2 className="text-3xl font-serif text-emerald mb-6">
                  Detalles de la propiedad
                </h2>
                <p className="text-gray-700 mb-8">
                  {property.description}
                </p>

                <h3 className="text-2xl font-serif text-emerald mb-4">
                  Amenidades
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {property.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {amenity}
                    </li>
                  ))}
                </ul>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-serif text-emerald mb-2">
                    Desde ${property.price} USD
                  </p>
                  <p className="text-gray-600">por noche</p>
                </div>
              </div>

              {/* Booking Form */}
              <BookingForm property={property} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 