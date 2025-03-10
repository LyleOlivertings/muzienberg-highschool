// components/FacultyCard.js
export default function FacultyCard({ name, role, placeholderId }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48 bg-gray-100">
          <img
            src={`https://picsum.photos/300/200?random=${placeholderId}`}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-blue-900 mt-2">{role}</p>
          <div className="mt-4 space-y-2">
            <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-3/5 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }