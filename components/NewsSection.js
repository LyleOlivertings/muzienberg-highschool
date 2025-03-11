// components/NewsSection.js
import NewsCard from "./NewsCard";

export default function NewsSection() {
    const newsItems = [
      { 
        title: "New Sports Facilities Opening", 
        date: "15 March 2025",
        placeholderId: 7
      },
      {
        title: "Academic Achievements Celebration",
        date: "12 March 2025", 
        placeholderId: 8
      },
      {
        title: "Cultural Day Preparations Underway",
        date: "10 March 2025",
        placeholderId: 9
      },
    ];
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </section>
    );
  }