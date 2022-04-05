import Block from '../interfaces/Block';

function getAllBlocks(nrows: number, ncols: number): Block[] {
    let result: Block[] = [];
    for (let r = 0; r < nrows; r++) {
        for (let c = 0; c < ncols; c++) {
            result.push({ x: r, y: c });
        }
    }
    return result;
}

export default getAllBlocks;
