export default function Page() {
  const onClick = (e: React.MouseEvent) => e.preventDefault(); // belum ada tujuan
  return (
    <main>
      <a href="#" onClick={onClick}>
        <img src="/image/triplek.jpg" alt="Beli Sekarang" style={{display:'block',width:'100%'}} />
      </a>
    </main>
  );
}
