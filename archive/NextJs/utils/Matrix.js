export class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = 'A';
    this.canvasHeight = canvasHeight;
    //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
  }
  draw(context) {
    //context.font = this.fontSize + 'px monospace';
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    //context.fillStyle = this.color;
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 0.9;
    }
  }
}

export class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.fontSize = 16;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#initialize();
  }
}

export class Matrix {
  last = 0;
  fps = 26;
  timer = 0;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.effect = new Effect(this.canvas.width, this.canvas.height);
    this.nextFrame = 1000 / this.fps;
    this.timer = 0;
  }
  width(w) {
    this.canvas.width = w;
  }
  height(h) {
    this.canvas.height = h;
  }
  resize() {
    this.effect.resize(this.canvas.width, this.canvas.height);
  }

}
