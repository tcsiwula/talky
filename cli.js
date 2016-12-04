#!/usr/local/bin/node

/*
    INITIAL -- READ FILE AND OUTPUT
    EXECUTE:    node cli.js
 */
var fs = require('fs');

// read data and output to terminal.
fs.readFile('test_file.txt', function(err, data) {
    var test_file = data.toString().split('\n');
    var data = test_file[Math.floor(Math.random() * test_file.length)];
    console.log(data);
});


/*
    VERSION 2 -- EXECUTABLE
    added:
        1. shabang -- #!usr/bin/env node
        2. permissions -- chmod +x cli.js
    execute: ./cli.js
 */





/*
 VERSION 3 -- COMMAND LINE DATA INPUT
 http://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-node-js

 /cli.js HEY MAN THIS IS NUMBER 5
 0: /usr/local/bin/node
 1: /Users/timsiwula/WebstormProjects/talky/cli.js
 2: HEY
 3: MAN
 4: THIS
 5: IS
 6: NUMBER
 7: 5

 */

// print process.argv
// process.argv.forEach(function (val, index, array)
// {
//
//
//
//
//
//
//     //console.log('process.argv.size() = '+ process.argv.length);
//     //console.log(index + ': ' + val);
// });

// get input length, default with no args is 2.
var inputSize = process.argv.length - 2;

if(inputSize == 0)
{
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


/*
 Usage: npm <command>

 where <command> is one of:
 access, adduser, bin, bugs, c, cache, completion, config,
 ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
 help, help-search, i, init, install, install-test, it, link,
 list, ln, login, logout, ls, outdated, owner, pack, ping,
 prefix, prune, publish, rb, rebuild, repo, restart, root,
 run, run-script, s, se, search, set, shrinkwrap, star,
 stars, start, stop, t, team, test, tst, un, uninstall,
 unpublish, unstar, up, update, v, version, view, whoami

 npm <cmd> -h     quick help on <cmd>
 npm -l           display full usage info
 npm help <term>  search for help on <term>
 npm help npm     involved overview

 Specify configs in the ini-formatted file:
 /Users/timsiwula/.npmrc
 or on the command line via: npm <command> --key value
 Config info can be viewed via: npm help config

 npm@4.0.3 /usr/local/lib/node_modules/npm

 */










