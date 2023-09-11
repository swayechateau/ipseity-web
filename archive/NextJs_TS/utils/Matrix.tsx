export class Symbol {
  characters: string;
  x: number;
  y: number;
  fontSize: any;
  text: string;
  canvasHeight: any;
  constructor(x: number, y: number, fontSize: any, canvasHeight: any) {
    this.characters =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = 'A';
    this.canvasHeight = canvasHeight;
    //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
  }
  draw(context: { fillText: (arg0: any, arg1: number, arg2: number) => void; }) {
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
  fontSize: number;
  canvasWidth: any;
  canvasHeight: any;
  columns: number;
  symbols: Symbol[];
  constructor(canvasWidth: any, canvasHeight: any) {
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
  resize(width: any, height: any) {
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
  canvas: HTMLCanvasElement;
  ctx: any;
  effect: Effect;
  nextFrame: number;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.effect = new Effect(this.canvas.width, this.canvas.height);
    this.nextFrame = 1000 / this.fps;
    this.timer = 0;
  }
  width(w: number) {
    this.canvas.width = w;
  }
  height(h: number) {
    this.canvas.height = h;
  }
  resize() {
    this.effect.resize(this.canvas.width, this.canvas.height);
  }

}