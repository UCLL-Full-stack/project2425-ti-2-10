import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {  Customer, Driver, Vehicle } from '@types';
import RideService from '@services/RideService';

type Props = {
  driver: Driver;
  vehicle: Vehicle;
  customer: Customer;
};

const RideForm = ({ driver, vehicle, customer }: Props) => {
  const [startLocation, setStartLocation] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('');

  const validate = () => {
    let result = true;
    setErrors([]);

    if (!startLocation) {
      setErrors((errors) => [...errors, 'Start location is required.']);
      result = false;
    }
    if (!destination) {
      setErrors((errors) => [...errors, 'Destination is required.']);
      result = false;
    }
    if (!date) {
      setErrors((errors) => [...errors, 'Date is required.']);
      result = false;
    }
    return result;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const ride = {
      startLocation,
      destination,
      date,
      driver,
      vehicle,
      customer,
    };

    const response = await RideService.createRide(ride);
    const data = await response.json();
    if (!response.ok) {
      setErrors((errors) => [...errors, data.message]);
    } else {
      setStatus('Ride created successfully.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3">
        {!!errors.length && (
          <ul className="text-red-800 rounded-lg" role="alert">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        {status && (
          <p className="text-green-800" role="alert">
            {status}
          </p>
        )}
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Vehicle:</label>
        <input
          type="text"
          value={vehicle ? vehicle.brand : ''}
          disabled
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Driver:</label>
        <input
          type="text"
          value={
            driver
              ? `${driver.user.firstName} ${driver.user.lastName}`
              : ''
          }
          disabled
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Start Location:</label>
        <input
          type="text"
          value={startLocation || ''}
          onChange={(e) => setStartLocation(e.target.value)}
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Destination:</label>
        <input
          type="text"
          value={destination || ''}
          onChange={(e) => setDestination(e.target.value)}
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-medium">Start Date:</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy HH:mm"
          timeFormat="HH:mm"
          className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Book Ride
      </button>
    </form>
  );
};

export default RideForm;
