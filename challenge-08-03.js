
var matches = (str) => {
    return str.match( /(?:\btype|(?!^)\G,)\h*\K[^,\s]*/g );
}