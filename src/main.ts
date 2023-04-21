import './style.css'

const canvas = document.querySelector("canvas")!;

const ctx = canvas.getContext("2d")!;

function render() {
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);

  requestAnimationFrame(render);
}

render();