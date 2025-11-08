'use client';

import type React from 'react';

// ====== Konfigurasi singkat ======
const IMG_URL = 'https://i.postimg.cc/HkwZ8C9Q/sabun.jpg';
const ALT_TEXT = 'Promo Sabun Terbaru';
const LINK = 'https://heylink.me/kitajitucun'; // kosong dulu / isi nanti tujuan
// =================================

export default function Page() {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!LINK) e.preventDefault(); // kalau kosong, tidak pindah
  };

  return (
    <main>
      <a href={LINK || 'https://heylink.me/kitajitucun'} onClick={onClick} rel="noopener">
        <img
          src={IMG_URL}
          alt={ALT_TEXT}
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </a>
    </main>
  );
}
