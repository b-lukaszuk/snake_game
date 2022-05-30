function displayGameOver(ctx: CanvasRenderingContext2D,
    canv: HTMLCanvasElement): void {
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.font = `${(canv.height / 8).toFixed(0)}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", canv.width / 2, canv.height / 2);
}

export default displayGameOver;
