import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow container mx-auto p-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
