'use client';
import { useState } from 'react';
import { staffMembers } from '@/data/staff';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import StaffCard from '@/components/StaffCard';

import StaffSearch from '@/components/StaffSearch';

export default function StaffDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-school-primary mb-8">
          Staff Directory 2025
        </h1>
        
        <StaffSearch onSearch={setSearchQuery} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </main>
      
    </>
  );
}