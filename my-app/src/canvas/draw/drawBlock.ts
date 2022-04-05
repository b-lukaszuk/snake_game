function drawBlock(ctx: CanvasRenderingContext2D,
    rowId: number, colId: number,
    blockWidth: number, blockHeight: number,
    color: string = "blue"): void {

    ctx.fillStyle = color;
    let xStartPx: number = (rowId * blockWidth) + 1; // upper left corner
    let yStartPx: number = (colId * blockHeight) + 1; // upper left corner
    ctx.fillRect(xStartPx, yStartPx, blockWidth - 2, blockHeight - 2);
}

export default drawBlock;
