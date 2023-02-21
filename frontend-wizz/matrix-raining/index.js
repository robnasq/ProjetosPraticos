const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  drops = [],
  text = [],
  font_size = 12;
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
canvas.height = window.innerHeight;
columns = canvas.width / font_size;
context.translate(canvas.width, 0);
context.scale(-1, 1.2);

//Hebrew @ hiragana characters.
const chars = "שרמזלמעראלההאחדは平凡なやさしいというにする文字であったことを味するなどをい".split(
  ""
);

for (let i = 0; i < columns; i++) drops[i] = Math.random() * 43 - 43;

function draw() {
  // Background with 0.1 opacity.
  context.font = font_size + "px 'Sawarabi Mincho', 'Roboto Mono'";
  context.fillStyle = "rgba(0, 0, 0, 0.07)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //Set the previous line to neon.
  context.fillStyle = "#00ffff";
  for (let i = 0; i < drops.length; i++) {
    context.fillText(text[i], i * font_size, drops[i] * font_size);
  }

  // Generate new characters.
  context.fillStyle = "#ff0099";
  for (let i = 0; i < drops.length; i++) {
    drops[i]++;

    // Random character to print.
    text[i] = chars[Math.floor(Math.random() * chars.length)];

    // Parameters - text, x-pos, y-pos.
    context.fillText(text[i], i * font_size, drops[i] * font_size);

    // Sending the drop to the top randomly, after it has crossed the screen.
    if (drops[i] * font_size > canvas.height)
      drops[i] = Math.random() * 43 - 43;
  }
}

setInterval(draw, 43);


document.body.style.overflow = 'hidden';
document.html.style.bacground = "#000";