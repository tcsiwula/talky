#!/usr/local/bin/node
// get input length, default with no args is 2.
var inputSize = process.argv.length - 2;

if (inputSize == 0) {
    console.log(' ');
    console.log('Usage: talky <command>');
    console.log(' ');

    console.log('where <command> is one of:');
    console.log('   what, why, when, how, who, where');
    console.log('   search, find, ask, help ....');
    console.log('   ');
    console.log('   ');
    console.log('   ');
    console.log('   ');
}
else {

    // print process.argv
    console.log('Talky is processing your input ....   ');
    console.log('   ');

    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
    console.log('   ');
}
