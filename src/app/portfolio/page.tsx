// PortfolioPage.js (Server Component)
import PortfolioClient from "@/app/portfolio/[client]"; // Mengimpor komponen client-side

export default function PortfolioPage() {
  return (
    <div>
      {/* Komponen ini tidak menggunakan useEffect, hanya merender client-side */}
      <PortfolioClient />
    </div>
  );
}
