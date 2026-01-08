var reverse = function (x) {
    const sign = x < 0 ? '-' : '';
    const reversed = parseInt(
        Math.abs(x).toString().split('').reverse().join(''),
        10
    );

    return sign + reversed;
};

console.log(reverse(-12030));