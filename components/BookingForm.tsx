import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Property } from '../data/properties';

interface BookingFormProps {
  property: Property;
}

const BookingForm = ({ property }: BookingFormProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // En modo desarrollo, solo mostrar los datos en consola
    console.log('Reservación solicitada:', {
      property: property.name,
      dates: {
        checkIn: startDate,
        checkOut: endDate,
      },
      guest: formData,
    });

    // Mostrar mensaje de confirmación
    alert('Gracias por tu solicitud. En breve nos pondremos en contacto contigo para confirmar tu reserva.');

    // Resetear el formulario
    setStartDate(null);
    setEndDate(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      guests: '1',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-serif text-emerald mb-6">Reserva tu estancia</h3>
      
      <div className="space-y-6">
        {/* Date Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Fecha de llegada</label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
              placeholderText="Selecciona fecha"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Fecha de salida</label>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
              placeholderText="Selecciona fecha"
              required
            />
          </div>
        </div>

        {/* Personal Information */}
        <div>
          <label className="block text-gray-700 mb-2">Nombre completo</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Correo electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Número de huéspedes</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'huésped' : 'huéspedes'}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full btn-primary"
        >
          Solicitar reserva
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Al enviar tu solicitud, revisaremos la disponibilidad y te contactaremos para confirmar tu reserva.
        </p>
      </div>
    </form>
  );
};

export default BookingForm; 