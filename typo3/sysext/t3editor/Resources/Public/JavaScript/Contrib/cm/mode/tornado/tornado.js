'use strict';(function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],a):a(CodeMirror)})(function(a){a.defineMode("tornado:inner",function(){function a(a,c){a.eatWhile(/[^\{]/);var b=a.next();if("{"==b&&(b=a.eat(/\{|%|#/)))return c.tokenize=e(b),"tag"}function e(b){"{"==
b&&(b="}");return function(c,d){return c.next()==b&&c.eat("}")?(d.tokenize=a,"tag"):c.match(f)?"keyword":"#"==b?"comment":"string"}}var f="and as assert autoescape block break class comment context continue datetime def del elif else end escape except exec extends false finally for from global if import in include is json_encode lambda length linkify load module none not or pass print put raise raw return self set squeeze super true try url_escape while with without xhtml_escape yield".split(" "),
f=new RegExp("^(("+f.join(")|(")+"))\\b");return{startState:function(){return{tokenize:a}},token:function(a,c){return c.tokenize(a,c)}}});a.defineMode("tornado",function(d){var e=a.getMode(d,"text/html");d=a.getMode(d,"tornado:inner");return a.overlayMode(e,d)});a.defineMIME("text/x-tornado","tornado")});
