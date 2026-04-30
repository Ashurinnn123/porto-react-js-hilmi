export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-2">
          &copy; {currentYear} Hilmi Naufal Ramadhani. All rights reserved.
        </p>
        <p className="text-sm">
          Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
