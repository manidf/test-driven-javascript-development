
function assert(message, expr) {
    if (!expr) {
        throw new Error(message);
    }
    assert.count++;
    return true;
}

assert.count = 0;

var date = new Date(2018, 7, 22);

try {
    assert('%Y should return full year', date.strftime('%Y') === '2015');
    assert('%m should return month', date.strftime('%m') === '07');
    assert('%d should return date', date.strftime('%d') === '22');
    assert('%y should return year as two digits', date.strftime('%y') === '15');
    assert('%F should act as %Y-%m-%d', date.strftime('%F') === '2015-07-22');
    console.log(assert.count + ' tests OK')
} catch (e) {
    console.log('Test failed: ' + e.message);
}

/*
console.log('year: ', date.strftime('%Y'));
console.log('month: ', date.strftime('%m'));
console.log('day: ', date.strftime('%d'));
console.log('year: ', date.strftime('%y'));
console.log('full date:', date.strftime('%F'));
*/

