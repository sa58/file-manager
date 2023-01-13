const findDoubleQuotes = (input) => {
    let regexp = /"(\\.|[^"])*"/g;
    return input.match(regexp);
}

export {
    findDoubleQuotes
}
