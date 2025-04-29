import { useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const propertiesRef = useRef<HTMLDivElement>(null);

  const scrollToProperties = () => {
    propertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
          alt="Zicatela Beach"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Villas de lujo frente al mar en Zicatela, México
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Privadas, exclusivas, inolvidables. Descubre tu próxima escapada.
          </p>
          <button
            onClick={scrollToProperties}
            className="btn-primary"
          >
            Explorar propiedades
          </button>
        </div>
      </div>

      {/* Properties Section Reference */}
      <div ref={propertiesRef} />
    </div>
  );
};

export default Hero; 