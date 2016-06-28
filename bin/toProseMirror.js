#! /usr/bin/env node
/* eslint-disable no-console */

var MarkupIt = require('../');
var utils = require('./utils');

utils.command(function(content) {
    console.log(
        JSON.stringify(
            MarkupIt.ProseMirrorUtils.encode(content),
            null, 4
        )
    );
});
