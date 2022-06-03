// it draws snake by indexing the fields like rows and cols like in
// Python's pd.DataFrame object
function drawBlock(ctx: CanvasRenderingContext2D,
    rowId: number, colId: number,
    blockWidth: number, blockHeight: number,
    color: string = "blue"): void {

    let blockMargin: number = Math.round(blockWidth * 0.05);

    ctx.fillStyle = color;
    let xStartPx: number = (rowId * blockHeight) + 1; // upper left corner
    let yStartPx: number = (colId * blockWidth) + 1; // upper left corner
    ctx.fillRect(yStartPx, xStartPx, blockWidth - blockMargin,
        blockHeight - blockMargin);
}

export default drawBlock;
