import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif text-emerald mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-gray-700 mb-4">{property.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-emerald">
            Desde ${property.price} USD/noche
          </span>
          <Link
            href={`/property/${property.slug}`}
            className="btn-primary"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 