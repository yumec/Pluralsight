/// <reference path="require.d.ts" />
"use strict";
// this test does not actually reference amd module 'main.ts', create one yourself.
require.config({
    baseUrl: '../Definitions',
    // Requires versions afaik
    paths: {
        'jquery': '../Definitions/jquery',
        'underscore': '../Definitions/underscore',
        'backbone': '../Definitions/backbone'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
// load AMD module main.ts (compiled to main.js)
// and include shims $, _, Backbone
require(['main'], function (main, $, _, Backbone) {
    var app = main.AppMain();
    app.run();
});
var recOne = require.config({ baseUrl: 'js' });
recOne(['core'], function (core) { });
// Tests for 'module' magic module typings
// (Using 'module' only actually makes sense in an external module)
var module = require('module');
var moduleConfig = module.config();
var moduleId = module.id;
var moduleUri = module.uri;
//# sourceMappingURL=require-tests.js.map