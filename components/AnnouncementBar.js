// Create components/AnnouncementBar.js
export default function AnnouncementBar() {
    return (
      <div className="bg-yellow-500 text-black py-2 px-4 text-center">
        <p className="font-semibold">
          🎉 2026 Admissions Now Open! &nbsp;•&nbsp; 
          <a href="/admissions" className="underline hover:text-yellow-800">
            Apply Now
          </a>
        </p>
      </div>
    )
  }