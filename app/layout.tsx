import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/content";

export const metadata: Metadata = {
  title: `${brand.name} · ${brand.tagline}`,
  description:
    "ERP integral para gestionar presupuestos, producción, stock, ventas, finanzas y equipo en un solo sistema.",
};

// Evita el parpadeo de tema aplicando la clase antes de pintar.
// Modo claro por defecto: solo se activa oscuro si el usuario lo eligió.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
