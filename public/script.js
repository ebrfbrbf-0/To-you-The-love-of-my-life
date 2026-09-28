const colors = ['#ff7eb6', '#ff9ec0', '#ff6fa8', '#ffb7d9', '#f8c7ff', '#ffd166', '#ff8fab', '#a78bfa', '#7dd3fc', '#86efac'];

const container = document.getElementById('hearts');
const totalHearts = 42;

if (container) {
  for (let i = 0; i < totalHearts; i += 1) {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const size = 22 + Math.random() * 64;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = 5 + Math.random() * 8;
    const delay = (Math.random() * -8).toFixed(2);
    const color = colors[Math.floor(Math.random() * colors.length)];

    heart.style.setProperty('--size', `${size}px`);
    heart.style.setProperty('--x', x.toFixed(2));
    heart.style.setProperty('--y', y.toFixed(2));
    heart.style.setProperty('--duration', `${duration}s`);
    heart.style.setProperty('--delay', `${delay}s`);
    heart.style.setProperty('--color', color);

    heart.innerHTML = '<span>Daniela</span>';
    container.appendChild(heart);
  }
}
