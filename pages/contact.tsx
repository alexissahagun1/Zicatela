import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Head>
        <title>Contacto - Zicatela Luxury</title>
        <meta
          name="description"
          content="Contáctanos para más información sobre nuestras propiedades de lujo en Zicatela, Oaxaca."
        />
      </Head>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1464082354059-27db6ce50048"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white text-center">
              Contacto
            </h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-serif text-emerald mb-6">
                  Envíanos un mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Enviar mensaje
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif text-emerald mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-emerald mb-2">
                      Ubicación
                    </h3>
                    <p className="text-gray-700">
                      Zicatela, Puerto Escondido, Oaxaca, México
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-emerald mb-2">
                      Correo electrónico
                    </h3>
                    <p className="text-gray-700">info@zicatelaluxury.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-emerald mb-2">
                      Teléfono
                    </h3>
                    <p className="text-gray-700">+52 (954) 123-4567</p>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 h-64 relative rounded-lg overflow-hidden">
                  <iframe
                    title="Mapa de Zicatela, Puerto Escondido, Oaxaca"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.964964357425!2d-97.0738399240846!3d15.84989908481359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c549e2e2e2e2e3%3A0x7e7e7e7e7e7e7e7e!2sZicatela%2C%20Puerto%20Escondido%2C%20Oax.!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 