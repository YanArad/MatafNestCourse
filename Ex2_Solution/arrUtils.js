let utils = require('./strUtils')

exports.getArrTotalLen = arr =>
{
    let total = 0;
    arr.forEach(item => {
        total += utils.getLen(item);
    });

    return total;
}

