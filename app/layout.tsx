// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beli Sekarang!',
  description: 'Landing sederhana – klik gambar untuk menuju tautan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
