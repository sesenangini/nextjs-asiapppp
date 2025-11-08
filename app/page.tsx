// app/page.tsx
import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <Link href="/promo"> {/* halaman internal mis. /promo */}
        <img
          src="https://i.postimg.cc/HkwZ8C9Q/sabun.jpg"
          alt="Promo Terbaru"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </Link>
    </main>
  );
}

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
