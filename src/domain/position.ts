export class StellarPosition {
  private x: number;
  private y: number;

  public constructor(x0: number, y0: number) {
    this.x = x0;
    this.y = y0;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }
}