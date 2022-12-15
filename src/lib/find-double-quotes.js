// https://learn.javascript.ru/task/match-quoted-string

const findDoubleQuotes = (input) => {
    let regexp = /"(\\.|[^"])*"/g;
    return input.match(regexp);
}

export {
    findDoubleQuotes
}