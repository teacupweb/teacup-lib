export default function fingerprint() {
  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 2220;
  const ctx = canvas.getContext('2d');
  ctx.fillText('Hello', 10, 10);

  const data = canvas.toDataURL();
  return data.slice(-32);
}
