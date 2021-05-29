
const bit24 = 0x1000000;
const bit16 = 0x10000;
const bit8 = 0x100;
const ff = 0xff;

const NamedColors: { [p: string]: number } = {
  BLACK: 0x000000,
  NAVY: 0x000080,
  DARKBLUE: 0x00008B,
  MEDIUMBLUE: 0x0000CD,
  BLUE: 0x0000FF,
  DARKGREEN: 0x006400,
  GREEN: 0x008000,
  TEAL: 0x008080,
  DARKCYAN: 0x008B8B,
  DEEPSKYBLUE: 0x00BFFF,
  DARKTURQUOISE: 0x00CED1,
  MEDIUMSPRINGGREEN: 0x00FA9A,
  LIME: 0x00FF00,
  SPRINGGREEN: 0x00FF7F,
  AQUA: 0x00FFFF,
  CYAN: 0x00FFFF,
  MIDNIGHTBLUE: 0x191970,
  DODGERBLUE: 0x1E90FF,
  LIGHTSEAGREEN: 0x20B2AA,
  FORESTGREEN: 0x228B22,
  SEAGREEN: 0x2E8B57,
  DARKSLATEGRAY: 0x2F4F4F,
  LIMEGREEN: 0x32CD32,
  MEDIUMSEAGREEN: 0x3CB371,
  TURQUOISE: 0x40E0D0,
  ROYALBLUE: 0x4169E1,
  STEELBLUE: 0x4682B4,
  DARKSLATEBLUE: 0x483D8B,
  MEDIUMTURQUOISE: 0x48D1CC,
  INDIGO: 0x4B0082,
  DARKOLIVEGREEN: 0x556B2F,
  CADETBLUE: 0x5F9EA0,
  CORNFLOWERBLUE: 0x6495ED,
  MEDIUMAQUAMARINE: 0x66CDAA,
  DIMGRAY: 0x696969,
  SLATEBLUE: 0x6A5ACD,
  OLIVEDRAB: 0x6B8E23,
  SLATEGRAY: 0x708090,
  LIGHTSLATEGRAY: 0x778899,
  MEDIUMSLATEBLUE: 0x7B68EE,
  LAWNGREEN: 0x7CFC00,
  CHARTREUSE: 0x7FFF00,
  AQUAMARINE: 0x7FFFD4,
  MAROON: 0x800000,
  PURPLE: 0x800080,
  OLIVE: 0x808000,
  GRAY: 0x808080,
  SKYBLUE: 0x87CEEB,
  LIGHTSKYBLUE: 0x87CEFA,
  BLUEVIOLET: 0x8A2BE2,
  DARKRED: 0x8B0000,
  DARKMAGENTA: 0x8B008B,
  SADDLEBROWN: 0x8B4513,
  DARKSEAGREEN: 0x8FBC8F,
  LIGHTGREEN: 0x90EE90,
  MEDIUMPURPLE: 0x9370D8,
  DARKVIOLET: 0x9400D3,
  PALEGREEN: 0x98FB98,
  DARKORCHID: 0x9932CC,
  YELLOWGREEN: 0x9ACD32,
  SIENNA: 0xA0522D,
  BROWN: 0xA52A2A,
  DARKGRAY: 0xA9A9A9,
  LIGHTBLUE: 0xADD8E6,
  GREENYELLOW: 0xADFF2F,
  PALETURQUOISE: 0xAFEEEE,
  LIGHTSTEELBLUE: 0xB0C4DE,
  POWDERBLUE: 0xB0E0E6,
  FIREBRICK: 0xB22222,
  DARKGOLDENROD: 0xB8860B,
  MEDIUMORCHID: 0xBA55D3,
  ROSYBROWN: 0xBC8F8F,
  DARKKHAKI: 0xBDB76B,
  SILVER: 0xC0C0C0,
  MEDIUMVIOLETRED: 0xC71585,
  INDIANRED: 0xCD5C5C,
  PERU: 0xCD853F,
  CHOCOLATE: 0xD2691E,
  TAN: 0xD2B48C,
  LIGHTGRAY: 0xD3D3D3,
  PALEVIOLETRED: 0xD87093,
  THISTLE: 0xD8BFD8,
  ORCHID: 0xDA70D6,
  GOLDENROD: 0xDAA520,
  CRIMSON: 0xDC143C,
  GAINSBORO: 0xDCDCDC,
  PLUM: 0xDDA0DD,
  BURLYWOOD: 0xDEB887,
  LIGHTCYAN: 0xE0FFFF,
  LAVENDER: 0xE6E6FA,
  DARKSALMON: 0xE9967A,
  VIOLET: 0xEE82EE,
  PALEGOLDENROD: 0xEEE8AA,
  LIGHTCORAL: 0xF08080,
  KHAKI: 0xF0E68C,
  ALICEBLUE: 0xF0F8FF,
  HONEYDEW: 0xF0FFF0,
  AZURE: 0xF0FFFF,
  SANDYBROWN: 0xF4A460,
  WHEAT: 0xF5DEB3,
  BEIGE: 0xF5F5DC,
  WHITESMOKE: 0xF5F5F5,
  MINTCREAM: 0xF5FFFA,
  GHOSTWHITE: 0xF8F8FF,
  SALMON: 0xFA8072,
  ANTIQUEWHITE: 0xFAEBD7,
  LINEN: 0xFAF0E6,
  LIGHTGOLDENRODYELLOW: 0xFAFAD2,
  OLDLACE: 0xFDF5E6,
  RED: 0xFF0000,
  FUCHSIA: 0xFF00FF,
  MAGENTA: 0xFF00FF,
  DEEPPINK: 0xFF1493,
  ORANGERED: 0xFF4500,
  TOMATO: 0xFF6347,
  HOTPINK: 0xFF69B4,
  CORAL: 0xFF7F50,
  DARKORANGE: 0xFF8C00,
  LIGHTSALMON: 0xFFA07A,
  ORANGE: 0xFFA500,
  LIGHTPINK: 0xFFB6C1,
  PINK: 0xFFC0CB,
  GOLD: 0xFFD700,
  PEACHPUFF: 0xFFDAB9,
  NAVAJOWHITE: 0xFFDEAD,
  MOCCASIN: 0xFFE4B5,
  BISQUE: 0xFFE4C4,
  MISTYROSE: 0xFFE4E1,
  BLANCHEDALMOND: 0xFFEBCD,
  PAPAYAWHIP: 0xFFEFD5,
  LAVENDERBLUSH: 0xFFF0F5,
  SEASHELL: 0xFFF5EE,
  CORNSILK: 0xFFF8DC,
  LEMONCHIFFON: 0xFFFACD,
  FLORALWHITE: 0xFFFAF0,
  SNOW: 0xFFFAFA,
  YELLOW: 0xFFFF00,
  LIGHTYELLOW: 0xFFFFE0,
  IVORY: 0xFFFFF0,
  WHITE: 0xFFFFFF
};


class ArgbComponents {
  public alpha: number;
  public r: number;
  public g: number;
  public b: number;

  constructor($alpha: number = ff, $r: number = 0, $g: number = 0, $b: number = 0) {
    this.alpha = $alpha;
    this.r = $r;
    this.g = $g;
    this.b = $b;
  }
}

export class AppColor {
  public color: string;
  public colorHex: number;
  public alpha: number;
  public r: number;
  public g: number;
  public b: number;

  set Alpha(value: number) {
    value = AppColor.ToRangeFF(value);
    this.alpha = value ^ 0;
    this.updateColorHex();
  }
  get Alpha() {
    return this.alpha;
  }

  set R(value: number) {
    value = AppColor.ToRangeFF(value);
    this.r = value ^ 0;
    this.updateColorHex();
  }
  get R() {
    return this.r;
  }

  set G(value: number) {
    value = AppColor.ToRangeFF(value);
    this.g = value ^ 0;
    this.updateColorHex();
  }

  get G() {
    return this.g;
  }

  set B(value: number) {
    value = AppColor.ToRangeFF(value);
    this.b = value ^ 0;
    this.updateColorHex();
  }
  get B() {
    return this.b;
  }

  get ArgbHex() {
    return this.colorHex;
  }
  set ArgbHex(value: number) {
    value = Math.min(0xffffffff, value);
    value = Math.max(0x00000000, value);
    this.colorHex = value ^ 0;

    this.updateArgbComponents();
  }

  constructor(color: string | number) {
    this.color = color.toString();
    this.colorHex = AppColor.toArgbHex(color);

    this.alpha = this.colorHex >>> 24 & ff;
    this.r = this.colorHex >>> 16 & ff;
    this.g = this.colorHex >>> 8 & ff;
    this.b = this.colorHex & ff;
  }

  static From(color: string) {
    return new AppColor(color);
  }

  static toArgbHex(color: number | string, isNumber: boolean = false): number {
    if (typeof color == "number") return AppColor.fromNumber(color);

    color = color.toUpperCase();

    if (color.startsWith("RGB")) return AppColor.fromRgb(color);
    if (color.startsWith("RGBA")) return AppColor.fromRgba(color);

    if (color.startsWith("HSL")) return AppColor.fromHsl(color);
    if (color.startsWith("HSLA")) return AppColor.fromHsla(color);

    if (color.startsWith("#")) return AppColor.fromHex(color);

    return AppColor.fromName(color);
  }

  static fromRgb(color: string): number {
    let chanels = Array.from(color.matchAll(AppColor.rgbNumbersRegex));
    let r = Number(chanels[0][0]);
    let g = Number(chanels[1][0]);
    let b = Number(chanels[2][0]);

    return 0xff * bit24 + (r << 16 | g << 8 | b);
  }
  static fromRgba(color: string): number {
    let chanels = Array.from(color.matchAll(AppColor.rgbNumbersRegex));
    let r = Number(chanels[0][0]);
    let g = Number(chanels[1][0]);
    let b = Number(chanels[2][0]);
    let aChanel = color.match(AppColor.alphaRegex);
    let a = 0xff;
    if (aChanel != null) a = Math.round(255 * parseFloat(aChanel[1]));

    return a * bit24 + (r << 16 | g << 8 | b);
  }

  /** make #rgb from h s l */
  static hslToRgb(h: number, s: number, l: number): number {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return r * bit16 | g * bit8 | b;
  }
  static fromHsl(color: string): number {
    let chanels = Array.from(color.matchAll(AppColor.rgbNumbersRegex));
    let h = Number(chanels[0][0]);
    let s = Number(chanels[1][0]);
    let l = Number(chanels[2][0]);

    return 0xff * bit24 + (AppColor.hslToRgb(h, s, l));
  }
  static fromHsla(color: string): number {
    let chanels = Array.from(color.matchAll(AppColor.rgbNumbersRegex));
    let h = Number(chanels[0][0]);
    let s = Number(chanels[1][0]);
    let l = Number(chanels[2][0]);
    let aChanel = color.match(AppColor.alphaRegex);
    let a = 0xff;
    if (aChanel != null) a = Math.round(255 * parseFloat(aChanel[1]));

    return a * bit24 + (AppColor.hslToRgb(h, s, l));
  }

  static fromName(color: string): number {
    return 0xff * bit24 + NamedColors[color.toUpperCase()];
  }

  static fromHex(color: string): number {
    color = color.slice(1);

    if (color.length == 6) return 0xff * bit24 + parseInt(color, 16);

    let r = color.slice(0, 1);
    r += r;
    let g = color.slice(1, 2);
    g += g;
    let b = color.slice(2, 3);
    b += b;

    return 0xff * bit24 + parseInt(r + g + b, 16);
  }

  static fromNumber(color: number): number {
    if (color <= 0xffffff) return 0xff * bit24 + color;
    return Math.min(0xffffffff, color);
  }

  static ToRgba(argbHex: number) {
    let { alpha, r, g, b } = AppColor.GetArgbComponents(argbHex);

    return `rgba(${r}, ${g}, ${b}, ${(alpha / 255).toFixed(2)})`;
  }

  toRgba(): string {
    return AppColor.ToRgba(this.colorHex);
  }

  static ToHex(argbHex: number) {
    let color = argbHex;
    let { r, g, b } = AppColor.GetArgbComponents(argbHex);

    let rChanel = r.toString(16).padStart(2, "0");
    let gChanel = g.toString(16).padStart(2, "0");
    let bChanel = b.toString(16).padStart(2, "0");

    return `#${rChanel}${gChanel}${bChanel}`;
  }
  toHex() {
    AppColor.ToHex(this.colorHex);
  }

  updateArgbComponents() {
    let { alpha, r, g, b } = AppColor.GetArgbComponents(this.colorHex);
    alpha = AppColor.ToRangeFF(alpha);

    r = AppColor.ToRangeFF(r);

    g = AppColor.ToRangeFF(g);

    b = AppColor.ToRangeFF(b);

    this.alpha = alpha;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  updateColorHex() {
    this.colorHex = AppColor.MakeArgbHex(this.alpha, this.r, this.g, this.b);
  }

  static ToRangeFF(chanel: number) {
    chanel = Math.min(255, chanel);
    chanel = Math.max(0, chanel);
    return chanel;
  }

  static GetArgbComponents(argbHex: number): ArgbComponents {
    const components = new ArgbComponents();

    components.alpha = argbHex >>> 24 & ff;
    components.r = argbHex >>> 16 & ff;
    components.g = argbHex >>> 8 & ff;
    components.b = argbHex & ff;

    return components;
  }

  static MakeArgbHex(alpha: number, r: number, g: number, b: number): number {
    return alpha * bit24 + (r << 16 | g << 8 | b);
  }

  static rgbNumbersRegex = /\d{1,3}/ig;
  static alphaRegex = /(0?.?\d{1,})\D*$/i;
  static maxArgbHex = 0xffffffff;

  // current operations
  negate() {
    this.ArgbHex = AppColor.Negate(this.colorHex);

    return this;
  }

  greyScale() {
    this.ArgbHex = AppColor.GreyScale(this.colorHex);
    return this;
  }

  changeOpacity(percent: number) {
    this.Alpha = this.Alpha * (1 + percent / 100)
    return this;
  }

  getContrastRgba() {
    return AppColor.ToRgba(AppColor.ContrastYiq(this.colorHex));
  }

  shadeLightColor(percent: number) {
    this.ArgbHex = AppColor.ShadeLightColor(this.colorHex, percent);
    return this;
  }

  // static operations
  static ContrastYiq(argbHex: number): number {
    let { alpha, r, g, b } = AppColor.GetArgbComponents(argbHex);

    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return alpha * bit24 + (yiq >= 128 ? 0x0 : 0xffffff);
  };
  static ContrastYiqToRgba(color: number | string): string {
    return AppColor.ToRgba(AppColor.ContrastYiq(AppColor.toArgbHex(color)));
  };


  static GreyScale(argbHex: number): number {
    const { alpha, r, g, b } = AppColor.GetArgbComponents(argbHex);

    const gray = (r + g + b) / 3 >> 0;

    return AppColor.MakeArgbHex(alpha, gray, gray, gray);
  };
  static GreyScaleToRgba(color: number | string): string {
    return AppColor.ToRgba(AppColor.GreyScale(AppColor.toArgbHex(color)));
  };

  static Negate(argbHex: number): number {
    const a = argbHex >>> 24 & 0xff;
    return a * bit24 + (argbHex ^ 0xffffff);
  }
  static NegateToRgba(color: number | string): string {
    return AppColor.ToRgba(AppColor.Negate(AppColor.toArgbHex(color)));
  }

  static ShadeLightColor(argbHex: number, deviationPercent: number): number {
    let { alpha, r, g, b } = AppColor.GetArgbComponents(argbHex);
    const amt = Math.round(2.55 * deviationPercent);

    r += amt;
    r = AppColor.ToRangeFF(r);

    g += amt;
    g = AppColor.ToRangeFF(g);

    b += amt;
    b = AppColor.ToRangeFF(b);

    return AppColor.MakeArgbHex(alpha, r, g, b);
  }
  static ShadeLightColorToRgba(color: number | string, deviationPercent: number): string {
    return AppColor.ToRgba(AppColor.ShadeLightColor(AppColor.toArgbHex(color), deviationPercent));
  }

  toString() {
    return this.toRgba();
  }
}




// THEORY
// f = 2 ** 4 -> 0xff00 = 0xff << 8((2 ** 4) * 2)

// color = 0x123456;
// get r = color >> 16(4 * f(0b1111)) & 0xff(0b11111111)
// get g = color >> 8 & 0xff
// get b = color & 0xff
// to create color
// r = 0x12
// g = 0x34
// b = 0x56
// color = r << 16 | g << 8 | b; // color = 0x123456

// пример color = 0xf5443c;
// для получения g нужно сдивинуть биты так, чтобы g была в конце -> color >> 8
// 0xf5443c -> 0x00f544 , затем нужно взять этот сектор из цвета, для этого нужно умножить на бит. 0x00f544 & 0xff
// 0x00f544 & 0xff -> 0x44