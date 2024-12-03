// app/layout.tsx
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-visible md:overflow-hidden">
        <ClientWrapper>
          <Header />
          <main className="flex-grow container m-auto h-screen">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
