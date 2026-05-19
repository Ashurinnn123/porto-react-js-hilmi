export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-canvas text-steel py-section px-xxl text-center border-t border-hairline-soft">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-body-sm">
          &copy; {currentYear} Hilmi Naufal Ramadhani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
