// app/page.tsx
import type React from 'react';

// ====== Konfigurasi singkat ======
const IMG_URL = 'https://i.postimg.cc/HkwZ8C9Q/sabun.jpg'; // gambar kamu
const ALT_TEXT = 'Promo Sabun Terbaru';                    // alt text (ubah kalau perlu)
const LINK = ''; // isi tujuan link; biarkan kosong dulu / isi mis. "https://domainmu.com"
// =================================

export default function Page() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!LINK) e.preventDefault(); // kalau LINK kosong, jangan pindah
  };

  return (
    <main>
      <a href={LINK || '#'} onClick={onClick} rel="noopener">
        <img
          src={IMG_URL}
          alt={ALT_TEXT}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </a>
    </main>
  );
}
