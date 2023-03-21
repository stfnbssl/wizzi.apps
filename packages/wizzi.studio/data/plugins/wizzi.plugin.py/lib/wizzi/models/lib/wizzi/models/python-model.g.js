/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-legacy-v5\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: c:\my\wizzi\stfnbssl\wizzi\packages\wizzi-core\lib\artifacts\wfschema\model\gen\ittf\wfschema-model.js.ittf
    utc time: Mon, 20 Mar 2023 10:05:51 GMT
*/
'use strict';
// generated by v5-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var util = require('util');
var path = require('path');
var _ = require('lodash');
var chalk = require('chalk');
var wzutils = require('wizzi-utils');
var verify = wzutils.verify;
var _md = module.exports = {};
var wzSourceLineInfo = (function () {
    function wzSourceLineInfo(row, col, sourceKey) {
        _classCallCheck(this, wzSourceLineInfo);
        this.row = row;
        this.col = col;
        this.sourceKey = sourceKey;
    }
    wzSourceLineInfo.prototype.toString = function(instance) {
        if (instance) {
            return 'row: ' + this.row + ', col: ' + this.col + ', file: ' + instance.wzSourceFilepath(this.sourceKey);
        }
        else {
            return 'row: ' + this.row + ', col: ' + this.col + ', sourceKey: ' + this.sourceKey;
        }
    }
    return wzSourceLineInfo;
})();

_md.wzSourceLineInfo = wzSourceLineInfo;
var pyBase = (function () {
    function pyBase(name, sourceLineInfo) {
        _classCallCheck(this, pyBase);
        this.wzName = name || '';
        this.wzParent = null;
        this.wzSourceLineInfo = sourceLineInfo;
        this.wzChildren = [];
    }
    pyBase.prototype.wzRoot = function() {
        return this.wzParent == null ? this : this.wzParent.wzRoot();
    }
    pyBase.prototype.wzSourceFilepath = function(sourceKey) {
        var sk = sourceKey || this.wzSourceLineInfo.sourceKey;
        return this.wzRoot().loadHistory.getIttfDocumentUri(sk);
    }
    pyBase.prototype.wzSourceErrorLines = function(node, message) {
        return this.wzRoot().loadHistory.getIttfDocumentErrorLines(node.u, {
                row: node.r, 
                col: node.c, 
                description: message
            }, true);
    }
    pyBase.prototype.wzVerify = function() {
    }
    pyBase.prototype.wzInitialize = function() {
    }
    pyBase.prototype.wzInitializeAsync = function(ctx, callback) {
        callback(null);
    }
    pyBase.prototype.wzAddChild = function(node) {
        node.wzParent = this;
        this.wzChildren.push(node);
    }
    pyBase.prototype.wzAddChildToColl = function(node, coll) {
        node.wzParent = this;
        node.wzMoved = true;
        coll.push(node);
    }
    pyBase.prototype.wzMoveChildToColl = function(node, coll, fromColl) {
        var index = fromColl.indexOf(node);
        if (index < 0) {
            this.error('wzMoveChildToColl error. The from collection does not contain the node.', node);
        }
        fromColl.splice(index, 1);
        this.wzAddChildToColl(node, coll);
    }
    pyBase.prototype.wzLoadToChildColl = function(child, type, coll) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        item.wzParent = this;
        coll.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    pyBase.prototype.wzCreateChildColl = function(tag, name, type, coll) {
        var item = new type(name, this.wzSourceLineInfo);
        item.wzTag = tag;
        item.wzParent = this;
        item.wzCreated = true;
        coll.push(item);
        return item;
    }
    pyBase.prototype.wzLoadToChildren = function(child, type) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        item.wzTag = child.n;
        item.wzParent = this;
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        this.wzChildren.push(item);
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    pyBase.prototype.wzLoadOneToOne = function(child, type, fieldName) {
        var item = new type(child.v, new wzSourceLineInfo(child.r, child.c, child.u));
        if (child.wzMTreeData) {
            item.wzMTreeData = child.wzMTreeData;
        }
        item.wzParent = this;
        this[fieldName] = item;
        if (item.loadFromNode) {
            item.loadFromNode(child);
        }
        return true;
    }
    pyBase.prototype.wzRemove = function(fromColl) {
        var index = fromColl.indexOf(this);
        if (index < 0) {
            this.error('wzRemove error. The from collection does not contain the node.', this);
        }
        fromColl.splice(index, 1);
    }
    pyBase.prototype.error = function(message, node) {
        throw new _md.pyModelException(message, node, this);
    }
    return pyBase;
})();

_md.pyBase = pyBase;
/**
    element statement
     A statement line node with unlimited depth.
     Is the schema base node.
     In itself works as a comment line.
*/
var statement = (function (pyBase) {
    _inherits(statement, pyBase);
    function statement(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(statement.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, statement);
        this.wzElement = "statement";
        // relation statement
        this.statements = [];
    }
    statement.prototype.addStatement = function(name, sourceLineInfo) {
        var retval = new _md.statement(name, sourceLineInfo);
        retval.wzParent = this;
        this.statements.push(retval);
        return retval;
    }
    statement.prototype.getStatement = function(name) {
        var found = null;
        this.statements.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    statement.prototype.loadChild = function(child) {
        var name = child.n.toLowerCase();
        if (name === '#') {
            return this.wzLoadToChildColl(child, _md.statement, this.statements);
        }
        if (name === 'm') {
            return this.wzLoadToChildColl(child, _md.method, this.statements);
        }
        if (name === 'p') {
            return this.wzLoadToChildColl(child, _md.property, this.statements);
        }
        if (name === 'py') {
            return this.wzLoadToChildColl(child, _md.py, this.statements);
        }
        if (name === 'del') {
            return this.wzLoadToChildColl(child, _md.destructor, this.statements);
        }
        if (name === 'get') {
            return this.wzLoadToChildColl(child, _md.get, this.statements);
        }
        if (name === 'new') {
            return this.wzLoadToChildColl(child, _md.xnew, this.statements);
        }
        if (name === 'base') {
            return this.wzLoadToChildColl(child, _md.base, this.statements);
        }
        if (name === 'ctor') {
            return this.wzLoadToChildColl(child, _md.ctor, this.statements);
        }
        if (name === 'class') {
            return this.wzLoadToChildColl(child, _md.xclass, this.statements);
        }
        if (name === 'return') {
            return this.wzLoadToChildColl(child, _md.xreturn, this.statements);
        }
        if (name === 'codeline') {
            return this.wzLoadToChildColl(child, _md.codeline, this.statements);
        }
        if (name === 'function') {
            return this.wzLoadToChildColl(child, _md.xfunction, this.statements);
        }
        return false;
    }
    statement.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    statement.prototype.wzVerify = function(ctx) {
        this.statements.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.pyBase.prototype.wzVerify.call(this, ctx);
    }
    statement.prototype.wzInitialize = function(ctx) {
        this.statements.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.pyBase.prototype.wzInitialize.call(this, ctx);
    }
    return statement;
})(pyBase);

_md.statement = statement;
// element codeline
var codeline = (function (statement) {
    _inherits(codeline, statement);
    function codeline(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(codeline.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, codeline);
        this.wzElement = "codeline";
    }
    return codeline;
})(statement);

_md.codeline = codeline;
// element py
var py = (function (statement) {
    _inherits(py, statement);
    function py(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(py.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, py);
        this.wzElement = "py";
    }
    py.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        ok = _md.statement.prototype.loadChild.call(this, child);
        if (!ok) {
            return this.wzLoadToChildColl(child, _md.codeline, this.statements);
        }
        return ok;
    }
    py.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return py;
})(statement);

_md.py = py;
// element param
var param = (function (pyBase) {
    _inherits(param, pyBase);
    function param(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(param.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, param);
        this.wzElement = "param";
    }
    return param;
})(pyBase);

_md.param = param;
// element xfunction
var xfunction = (function (statement) {
    _inherits(xfunction, statement);
    function xfunction(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xfunction.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xfunction);
        this.wzElement = "xfunction";
        // relation param
        this.params = [];
    }
    xfunction.prototype.addParam = function(name, sourceLineInfo) {
        var retval = new _md.param(name, sourceLineInfo);
        retval.wzParent = this;
        this.params.push(retval);
        return retval;
    }
    xfunction.prototype.getParam = function(name) {
        var found = null;
        this.params.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    xfunction.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'param') {
            return this.wzLoadToChildColl(child, _md.param, this.params);
        }
        ok = _md.statement.prototype.loadChild.call(this, child);
        if (!ok) {
            return this.wzLoadToChildColl(child, _md.codeline, this.statements);
        }
        return ok;
    }
    xfunction.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    xfunction.prototype.wzVerify = function(ctx) {
        this.params.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.statement.prototype.wzVerify.call(this, ctx);
    }
    xfunction.prototype.wzInitialize = function(ctx) {
        this.params.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.statement.prototype.wzInitialize.call(this, ctx);
    }
    return xfunction;
})(statement);

_md.xfunction = xfunction;
// element xreturn
var xreturn = (function (statement) {
    _inherits(xreturn, statement);
    function xreturn(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xreturn.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xreturn);
        this.wzElement = "xreturn";
    }
    return xreturn;
})(statement);

_md.xreturn = xreturn;
/**
    element xclass
     A Python class
    
     ittf
     class Horse
     super Animal
     ctor
     string name
     required
     { options
     boolean canSpeakLikeAHuman
     required
     set this.name = name
     set this.options = options
     m sayHello
     if this.options.canSpeakLikeAHuman
     success 'Hello i am ' + this.name
     else
     success 'Hii i am ' + this.name
    
*/
var xclass = (function (statement) {
    _inherits(xclass, statement);
    function xclass(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xclass.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xclass);
        this.wzElement = "xclass";
    }
    xclass.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'super') {
            this.super = child.v; return true;
        }
        if (name === 'extends') {
            this.extends = child.v; return true;
        }
        ok = _md.statement.prototype.loadChild.call(this, child);
        return ok;
    }
    xclass.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    xclass.prototype.wzInitialize = function(ctx) {
        ctx.modelState = ctx.modelState || {};
        ctx.modelState.hasClasses = true;
        if (this.extends && this.extends.length > 0) {
            this.super = this.extends;
        }
        else {
            var tokens = this.wzName.split(':');
            if (tokens.length == 2) {
                this.wzName = tokens[0];
                this.super = tokens[1];
            }
        }
        _md.statement.prototype.wzInitialize.call(this, ctx);
    }
    xclass.prototype.findCtor = function() {
        return _.find(this.statements, function(item) { return item.wzElement === 'ctor' });
    }
    return xclass;
})(statement);

_md.xclass = xclass;
/**
    element ctor
    
     ittf
     class Horse
     super Animal
     ctor
     string name
     base name
    
*/
var ctor = (function (xfunction) {
    _inherits(ctor, xfunction);
    function ctor(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(ctor.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, ctor);
        this.wzElement = "ctor";
        // relation base
        this.bases = [];
    }
    ctor.prototype.addBase = function(name, sourceLineInfo) {
        var retval = new _md.base(name, sourceLineInfo);
        retval.wzParent = this;
        this.bases.push(retval);
        return retval;
    }
    ctor.prototype.getBase = function(name) {
        var found = null;
        this.bases.forEach(function(item) {
            found = found || (item.wzName === name ? item : null);
        });
        return found;
    }
    ctor.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'base') {
            return this.wzLoadToChildColl(child, _md.base, this.bases);
        }
        ok = _md.xfunction.prototype.loadChild.call(this, child);
        return ok;
    }
    ctor.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    ctor.prototype.wzVerify = function(ctx) {
        this.bases.forEach((item) => {
            item.wzVerify(ctx);
        });
        _md.xfunction.prototype.wzVerify.call(this, ctx);
    }
    ctor.prototype.wzInitialize = function(ctx) {
        this.bases.forEach((item) => {
            item.wzInitialize(ctx);
        });
        _md.xfunction.prototype.wzInitialize.call(this, ctx);
    }
    ctor.prototype.getBaseArgs = function() {
        var ret = [];
        var i, i_items=this.bases, i_len=this.bases.length, item;
        for (i=0; i<i_len; i++) {
            item = this.bases[i];
            ret.push(item.wzName);
        }
        return ret;
    }
    return ctor;
})(xfunction);

_md.ctor = ctor;
/**
    element destructor
    
     ittf
     class Horse
     super Animal
     ctor
     string name
     base name
     del
     print 'die'
*/
var destructor = (function (xfunction) {
    _inherits(destructor, xfunction);
    function destructor(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(destructor.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, destructor);
        this.wzElement = "destructor";
    }
    return destructor;
})(xfunction);

_md.destructor = destructor;
/**
    element base
    
     ittf
     see 'ctor' element example
*/
var base = (function (statement) {
    _inherits(base, statement);
    function base(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(base.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, base);
        this.wzElement = "base";
    }
    return base;
})(statement);

_md.base = base;
/**
    element method
     ittf
     class Foo
     m sayHello
     string name
     success 'Hello ' + name
*/
var method = (function (xfunction) {
    _inherits(method, xfunction);
    function method(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(method.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, method);
        this.wzElement = "method";
        this.static = false;
        this.async = false;
    }
    method.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'async') {
            this.async = parseboolean(child.v, true, child); return true;
        }
        if (name === 'static') {
            this.static = parseboolean(child.v, true, child); return true;
        }
        ok = _md.xfunction.prototype.loadChild.call(this, child);
        return ok;
    }
    method.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return method;
})(xfunction);

_md.method = method;
/**
    element property
     ittf
     class Foo
     p options
*/
var property = (function (xfunction) {
    _inherits(property, xfunction);
    function property(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(property.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, property);
        this.wzElement = "property";
        this.static = false;
    }
    property.prototype.loadChild = function(child) {
        var ok = false, name = child.n.toLowerCase();
        if (name === 'static') {
            this.static = parseboolean(child.v, true, child); return true;
        }
        ok = _md.xfunction.prototype.loadChild.call(this, child);
        return ok;
    }
    property.prototype.loadFromNode = function(node) {
        node.children.forEach((item) => {
            var loaded = this.loadChild(item);
            if (!loaded) {
                throw new _md.pyModelException("Tag not recognized: " + item.n, item, this);
            }
        });
    }
    return property;
})(xfunction);

_md.property = property;
/**
    element get
     es6 - Defines a getter on a new object in the object initializer
     reference https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Functions/get
    
     ittf
     var obj
     {
     @ log ['test']
     get latest
     if this.log.length == 0
     return undefined
     return this.log[this.log.length - 1]
    
*/
var get = (function (statement) {
    _inherits(get, statement);
    function get(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(get.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, get);
        this.wzElement = "get";
    }
    return get;
})(statement);

_md.get = get;
/**
    element xnew
     ittf:
     var h
     new Hello
     var j
     new Hello
     function
     param p
     + ...
     js:
     var h = new Hello();
     var j = new Hello(function(p) { ... });
*/
var xnew = (function (statement) {
    _inherits(xnew, statement);
    function xnew(name, sourceLineInfo) {
        _get(Object.getPrototypeOf(xnew.prototype), 'constructor', this).call(this, name,sourceLineInfo);
        _classCallCheck(this, xnew);
        this.wzElement = "xnew";
    }
    return xnew;
})(statement);

_md.xnew = xnew;
_md.__tagElementMapping = { '#': 'statement', 'function': 'xfunction', 'del': 'destructor', 'm': 'method', 'p': 'property', 'return': 'xreturn', 'class': 'xclass', 'new': 'xnew' };
// model/replaceUnknownElement( )
var pyModelException = (function () {
    function pyModelException(message, node, instance) {
        _classCallCheck(this, pyModelException);
        // VIA 14/2/21 (pollutes log) set this.node = node
        // VIA 14/2/21 (pollutes log) set this.instance = instance
        if (node && instance) {
            this.message = message + ', wzElement: ' + node.wzElement + ', wzName:' + (node.wzName || '') + ', row:' + node.r + ', col:' + node.c + ', source:' + instance.wzSourceFilepath(node.u);
            this.errorLines = instance.wzSourceErrorLines(node, message);
        }
        else if (instance) {
            this.message = message + instance.wzSourceLineInfo.toString(instance);
        }
        else {
            this.message = message;
        }
        console.error('message', this.message);
        this.stack = (new Error()).stack;
    }
    pyModelException.prototype.toString = function() {
        var msg = [];
        msg.push(chalk.red('Error: ' + this.message));
        msg.push(chalk.red('  name: pyModelException'));
        if (this.node) {
            msg.push(chalk.yellow('  row: ' + this.node.r + ', col: ' + this.node.c));
        }
        if (this.instance) {
            if (this.node) {
                msg.push(chalk.yellow('  uri: ' + this.instance.wzSourceFilepath(this.node.u)));
            }
            else {
                msg.push(chalk.yellow('  uri: ' + this.instance.wzSourceLineInfo.toString(this.instance)));
            }
        }
        else {
            msg.push(chalk.yellow('  uri: unknown'));
        }
        if (this.errorLines) {
            var i, i_items=this.errorLines, i_len=this.errorLines.length, line;
            for (i=0; i<i_len; i++) {
                line = this.errorLines[i];
                msg.push(chalk.yellow('  ' + line));
            }
        }
        return msg.join('\n');
    }
    return pyModelException;
})();

_md.pyModelException = pyModelException;
var pyContext = (function () {
    function pyContext() {
        _classCallCheck(this, pyContext);
        this.validationErrors = [];
    }
    pyContext.prototype.schemaIsValid = function() {
        return this.validationErrors.length == 0;
    }
    pyContext.prototype.addError = function(message, node) {
        var at = node ? ' At ' + node.wzSourceLineInfo.toString(node) : '';
        this.validationErrors.push(message + at);
    }
    return pyContext;
})();

_md.pyContext = pyContext;
function parsestring(value, defaultValue, node) {
    if (isEmpty( value )) {
        return defaultValue;
    }
    return value;
}
function parseboolean(value, defaultValue, node) {
    if (isEmpty( value )) {
        return defaultValue;
    }
    if (!isBoolean(value)) {
        throw new pyModelException('Must be a boolean value (\"true\" or \"false\"), got:' + value, node);
    }
    return value === 'true' ? true : false;
}
function isString(value) {
    return (typeof value === 'string' || value instanceof String);
}
function isEmpty(value) {
    return !isString( value ) || value.length === 0;
}
function isBoolean(value) {
    return value === 'true' || value === 'false';
}

