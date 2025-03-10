// components/FacultyDirectory.js
import FacultyCard from '@/components/FacultyCard';

export default function FacultyDirectory() {
    const faculty = [
      { name: "Mrs. M Oliver", role: "Principal", placeholderId: 1 },
      { name: "Mr. Sipho Dlamini", role: "Deputy Principal", placeholderId: 2 },
      { name: "Ms. Nomsa Khumalo", role: "Head of Mathematics", placeholderId: 3 },
      { name: "Mr. James Petersen", role: "Head of Science", placeholderId: 4 },
      { name: "Ms. Ayesha Jacobs", role: "Head of Languages", placeholderId: 5 },
      { name: "Mr. David Botha", role: "Sports Director", placeholderId: 6 },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.placeholderId} {...member} />
          ))}
        </div>
      </div>
    );
  }