// app/page.tsx
import type React from 'react';

// ==== UBAH DI SINI JIKA PERLU ====
const IMG_PATH = '/image/banner.jpg'; // letakkan file di /public/image/banner.jpg
const ALT_TEXT = 'Promo Terbaru';     // teks alternatif gambar (penting untuk iklan/SEO)
const LINK     = '';                   // kosongkan dulu; isi nanti mis. "https://domain-tujuanmu.com"
// contoh WA jika sudah siap:
// const LINK = 'https://wa.me/62812xxxxxxx?text=Halo, saya tertarik.';
// ==================================

export default function Page() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!LINK) e.preventDefault(); // kalau LINK kosong, jangan pindah
  };

  return (
    <main>
      <a href={LINK || '#'} onClick={onClick} rel="noopener">
        <img
          src={IMG_PATH}
          alt={ALT_TEXT}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </a>
    </main>
  );
}
