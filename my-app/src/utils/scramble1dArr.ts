function scramble(arr1d: any[], times: number = 0): any[] {
    // the Fisher-Yates algorithm
    // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    if (times > (arr1d.length - 1) || times <= 0) { times = arr1d.length - 1 }
    let arrCopy: any[] = [...arr1d];
    for (let i = times; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arrCopy[i];
        arrCopy[i] = arrCopy[j];
        arrCopy[j] = temp;
    }
    return arrCopy;
}

export default scramble;
