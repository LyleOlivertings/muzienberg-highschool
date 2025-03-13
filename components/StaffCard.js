// components/StaffCard.js
'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function StaffCard({ staff }) {
    const [imgError, setImgError] = useState(false);
  
    // Generate initials-based placeholder
    const getInitials = (name) => {
      return name.split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-100">
        {staff.image && !imgError ? (
          <Image
            src={staff.image}
            alt={`Portrait of ${staff.name}`}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            priority={staff.id <= 6}
          />
        ) : (
          <div className="w-full h-full bg-school-primary flex items-center justify-center">
            <span className="text-white text-4xl font-bold">
              {getInitials(staff.name)}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 text-gray-600">
        <h2 className="text-xl font-bold">{staff.name}</h2>
        <p className="text-blue-900 mb-2">{staff.position}</p>
        <div className="space-y-1 text-sm">
          <p> {staff.code}</p>
          {staff.register && <p><span className="font-semibold">Register Class:</span> {staff.register}</p>}
          {staff.gradeHead && <p><span className="font-semibold">Grade Head:</span> Grade {staff.gradeHead}</p>}
          
        </div>
      </div>
    </div>
  );
}