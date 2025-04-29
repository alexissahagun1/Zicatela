import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Directora de Marketing',
    company: 'TechCorp',
    image: 'https://source.unsplash.com/150x150/?portrait,woman',
    text: 'Nuestra estancia en Casa Sol fue simplemente perfecta. El servicio fue impecable y la propiedad superó todas nuestras expectativas. Definitivamente volveremos.',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'CEO',
    company: 'Innovate Solutions',
    image: 'https://source.unsplash.com/150x150/?portrait,man',
    text: 'Villa Verde nos ofreció la privacidad y el lujo que estábamos buscando. El equipo de Zicatela Luxury se aseguró de que cada detalle estuviera perfecto.',
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Arquitecta',
    company: 'Design Studio',
    image: 'https://source.unsplash.com/150x150/?portrait,woman',
    text: 'Casa Mar es un verdadero paraíso. La combinación de diseño moderno y naturaleza es simplemente espectacular. Una experiencia que nunca olvidaremos.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros - Zicatela Luxury</title>
        <meta
          name="description"
          content="Conoce más sobre Zicatela Luxury y nuestra misión de ofrecer experiencias únicas en propiedades de lujo frente al mar."
        />
      </Head>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
            alt="Zicatela Luxury"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-serif text-white text-center">
              Sobre Nosotros
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-emerald mb-8">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 mb-6">
                Zicatela Luxury nació de la pasión por ofrecer experiencias únicas
                en uno de los destinos más hermosos de México. Nuestro compromiso
                es proporcionar a nuestros huéspedes un servicio excepcional y
                propiedades que combinan el lujo con la autenticidad de la
                región.
              </p>
              <p className="text-gray-700 mb-6">
                Cada una de nuestras propiedades ha sido cuidadosamente seleccionada
                y diseñada para ofrecer la máxima comodidad y privacidad, sin
                comprometer la belleza natural de Zicatela.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-emerald text-center mb-12">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-serif text-emerald mb-4">
                  Servicio Personalizado
                </h3>
                <p className="text-gray-700">
                  Nos dedicamos a entender y superar las expectativas de cada
                  huésped, ofreciendo un servicio único y personalizado.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-serif text-emerald mb-4">
                  Lujo Auténtico
                </h3>
                <p className="text-gray-700">
                  Combinamos el confort moderno con la autenticidad local para
                  crear experiencias verdaderamente memorables.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-serif text-emerald mb-4">
                  Privacidad Total
                </h3>
                <p className="text-gray-700">
                  Entendemos la importancia de la privacidad y nos aseguramos de
                  que cada propiedad ofrezca un refugio exclusivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-cream">
          <div className="container-custom">
            <h2 className="text-3xl font-serif text-emerald text-center mb-12">
              Lo que dicen nuestros huéspedes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-emerald">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 