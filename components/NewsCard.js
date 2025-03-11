// components/NewsCard.js
export default function NewsCard({ title, date, placeholderId }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-48 bg-gray-100">
          <img
            src={`https://picsum.photos/400/300?random=${placeholderId}`}
            alt="News thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-3/5 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }