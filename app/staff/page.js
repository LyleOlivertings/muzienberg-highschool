'use client';
import { useState } from 'react';
import { staffMembers } from '@/data/staff';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

import StaffSearch from '@/components/StaffSearch';

export default function StaffDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (

    <><>
          <Navbar />
      </><div className="container mx-auto px-4 py-12">

              <h1 className="text-4xl font-bold text-blue-900 mb-8">
                  Staff Directory 2025
              </h1>

              {/* Search */}
              <StaffSearch onSearch={setSearchQuery} />


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {staffMembers.map((staff) => (
                      <div key={staff.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                          <div className="relative h-48 bg-gray-100">
                              <Image
                                  src={staff.image}
                                  alt={`Portrait of ${staff.name}`}
                                  fill
                                  className="object-cover" />
                          </div>
                          <div className="p-6 text-gray-400">
                              <h2 className="text-xl font-bold">{staff.name}</h2>
                              <p className="text-blue-900 mb-2">{staff.position}</p>
                              <div className="space-y-1 text-sm">
                                  <p><span className="font-semibold">Code:</span> {staff.code}</p>
                                  {staff.register && <p><span className="font-semibold">Register:</span> {staff.register}</p>}
                                  {staff.gradeHead && <p><span className="font-semibold">Grade Head:</span> {staff.gradeHead}</p>}
                                  <p><span className="font-semibold">Venue:</span> {staff.venue}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div></>
  );
}