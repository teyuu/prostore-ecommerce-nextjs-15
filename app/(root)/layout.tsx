import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex wrapper">{children}</main>
      <Footer />
    </div>
  );
}
