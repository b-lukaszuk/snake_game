function drawBlock(ctx: CanvasRenderingContext2D,
    rowId: number, colId: number,
    blockWidth: number, blockHeight: number,
    color: string = "blue"): void {

    ctx.fillStyle = color;
    let xStartPx: number = (rowId * blockWidth); // upper left corner
    let yStartPx: number = (colId * blockHeight); // upper left corner
    ctx.fillRect(xStartPx, yStartPx, blockWidth - 1, blockHeight - 1);
}

export default drawBlock;
