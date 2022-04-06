// id draws snake by indexing the fields like rows and cols in
// Python's pd.DataFrame object
function drawBlock(ctx: CanvasRenderingContext2D,
    rowId: number, colId: number,
    blockWidth: number, blockHeight: number,
    color: string = "blue"): void {

    ctx.fillStyle = color;
    let xStartPx: number = (rowId * blockHeight) + 1; // upper left corner
    let yStartPx: number = (colId * blockWidth) + 1; // upper left corner
    ctx.fillRect(yStartPx, xStartPx, blockWidth - 2, blockHeight - 2);
}

export default drawBlock;
