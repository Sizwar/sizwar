document.addEventListener('DOMContentLoaded', function () {
  const tombol = document.getElementById('pesanSekarang');
  const output = document.getElementById('output');

  tombol.addEventListener('click', function () {
    output.textContent = 'Terima kasih! Kami akan segera menghubungi Anda.';
  });
});
