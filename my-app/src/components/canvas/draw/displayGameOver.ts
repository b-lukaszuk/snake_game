function displayGameOver(ctx: CanvasRenderingContext2D,
    canv: HTMLCanvasElement, score: number): void {

    let fontSize: string = (canv.height / 8).toFixed(0);
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ff3333";
    ctx.fillText("Game Over", (canv.width / 2),
        (canv.height / 2) - parseInt(fontSize));
    ctx.fillText(`Score: ${score}`,
        (canv.width / 2), (canv.height / 2) + parseInt(fontSize));

}

export default displayGameOver;
