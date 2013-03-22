;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
var ko = require('knockout-client'),
	vm = require('./viewModel');

vm.wtf();
ko.applyBindings(vm);

},{"./viewModel":2,"knockout-client":3}],3:[function(require,module,exports){
(function(){// Knockout JavaScript library v2.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(){
var DEBUG=true;
(function(window,document,navigator,jQuery,undefined){
!function(factory) {
    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        define(['exports'], factory);
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {});
    }
}(function(koExports){
// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
var ko = typeof koExports !== 'undefined' ? koExports : {};
// Google Closure Compiler helpers (used only to make the minified file smaller)
ko.exportSymbol = function(koPath, object) {
	var tokens = koPath.split(".");

	// In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
	// At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
	var target = ko;

	for (var i = 0; i < tokens.length - 1; i++)
		target = target[tokens[i]];
	target[tokens[tokens.length - 1]] = object;
};
ko.exportProperty = function(owner, publicName, object) {
  owner[publicName] = object;
};
ko.version = "2.2.1";

ko.exportSymbol('version', ko.version);
ko.utils = new (function () {
    var stringTrimRegex = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;

    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
    var knownEvents = {}, knownEventTypesByEventName = {};
    var keyEventTypeName = /Firefox\/2/i.test(navigator.userAgent) ? 'KeyboardEvent' : 'UIEvents';
    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
    for (var eventType in knownEvents) {
        var knownEventsForType = knownEvents[eventType];
        if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++)
                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
        }
    }
    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
    // If there is a future need to detect specific versions of IE10+, we will amend this.
    var ieVersion = (function() {
        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
        while (
            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
            iElems[0]
        );
        return version > 4 ? version : undefined;
    }());
    var isIe6 = ieVersion === 6,
        isIe7 = ieVersion === 7;

    function isClickOnCheckableElement(element, eventType) {
        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
        if (eventType.toLowerCase() != "click") return false;
        var inputType = element.type;
        return (inputType == "checkbox") || (inputType == "radio");
    }

    return {
        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

        arrayForEach: function (array, action) {
            for (var i = 0, j = array.length; i < j; i++)
                action(array[i]);
        },

        arrayIndexOf: function (array, item) {
            if (typeof Array.prototype.indexOf == "function")
                return Array.prototype.indexOf.call(array, item);
            for (var i = 0, j = array.length; i < j; i++)
                if (array[i] === item)
                    return i;
            return -1;
        },

        arrayFirst: function (array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate.call(predicateOwner, array[i]))
                    return array[i];
            return null;
        },

        arrayRemoveItem: function (array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index >= 0)
                array.splice(index, 1);
        },

        arrayGetDistinctValues: function (array) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
            }
            return result;
        },

        arrayMap: function (array, mapping) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                result.push(mapping(array[i]));
            return result;
        },

        arrayFilter: function (array, predicate) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate(array[i]))
                    result.push(array[i]);
            return result;
        },

        arrayPushAll: function (array, valuesToPush) {
            if (valuesToPush instanceof Array)
                array.push.apply(array, valuesToPush);
            else
                for (var i = 0, j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
            return array;
        },

        extend: function (target, source) {
            if (source) {
                for(var prop in source) {
                    if(source.hasOwnProperty(prop)) {
                        target[prop] = source[prop];
                    }
                }
            }
            return target;
        },

        emptyDomNode: function (domNode) {
            while (domNode.firstChild) {
                ko.removeNode(domNode.firstChild);
            }
        },

        moveCleanedNodesToContainerElement: function(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);

            var container = document.createElement('div');
            for (var i = 0, j = nodesArray.length; i < j; i++) {
                container.appendChild(ko.cleanNode(nodesArray[i]));
            }
            return container;
        },

        cloneNodes: function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        },

        setDomNodeChildren: function (domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);
            if (childNodes) {
                for (var i = 0, j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
            }
        },

        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
            if (nodesToReplaceArray.length > 0) {
                var insertionPoint = nodesToReplaceArray[0];
                var parent = insertionPoint.parentNode;
                for (var i = 0, j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                }
            }
        },

        setOptionNodeSelectionState: function (optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7)
                optionNode.setAttribute("selected", isSelected);
            else
                optionNode.selected = isSelected;
        },

        stringTrim: function (string) {
            return (string || "").replace(stringTrimRegex, "");
        },

        stringTokenize: function (string, delimiter) {
            var result = [];
            var tokens = (string || "").split(delimiter);
            for (var i = 0, j = tokens.length; i < j; i++) {
                var trimmed = ko.utils.stringTrim(tokens[i]);
                if (trimmed !== "")
                    result.push(trimmed);
            }
            return result;
        },

        stringStartsWith: function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        },

        domNodeIsContainedBy: function (node, containedByNode) {
            if (containedByNode.compareDocumentPosition)
                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
            while (node != null) {
                if (node == containedByNode)
                    return true;
                node = node.parentNode;
            }
            return false;
        },

        domNodeIsAttachedToDocument: function (node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument);
        },

        tagNameLower: function(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
        },

        registerEventHandler: function (element, eventType, handler) {
            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
            if (!mustUseAttachEvent && typeof jQuery != "undefined") {
                if (isClickOnCheckableElement(element, eventType)) {
                    // For click events on checkboxes, jQuery interferes with the event handling in an awkward way:
                    // it toggles the element checked state *after* the click event handlers run, whereas native
                    // click events toggle the checked state *before* the event handler.
                    // Fix this by intecepting the handler and applying the correct checkedness before it runs.
                    var originalHandler = handler;
                    handler = function(event, eventData) {
                        var jQuerySuppliedCheckedState = this.checked;
                        if (eventData)
                            this.checked = eventData.checkedStateBeforeEvent !== true;
                        originalHandler.call(this, event);
                        this.checked = jQuerySuppliedCheckedState; // Restore the state jQuery applied
                    };
                }
                jQuery(element)['bind'](eventType, handler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                element.addEventListener(eventType, handler, false);
            else if (typeof element.attachEvent != "undefined")
                element.attachEvent("on" + eventType, function (event) {
                    handler.call(element, event);
                });
            else
                throw new Error("Browser doesn't support addEventListener or attachEvent");
        },

        triggerEvent: function (element, eventType) {
            if (!(element && element.nodeType))
                throw new Error("element must be a DOM node when calling triggerEvent");

            if (typeof jQuery != "undefined") {
                var eventData = [];
                if (isClickOnCheckableElement(element, eventType)) {
                    // Work around the jQuery "click events on checkboxes" issue described above by storing the original checked state before triggering the handler
                    eventData.push({ checkedStateBeforeEvent: element.checked });
                }
                jQuery(element)['trigger'](eventType, eventData);
            } else if (typeof document.createEvent == "function") {
                if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                }
                else
                    throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (typeof element.fireEvent != "undefined") {
                // Unlike other browsers, IE doesn't change the checked state of checkboxes/radiobuttons when you trigger their "click" event
                // so to make it consistent, we'll do it manually here
                if (isClickOnCheckableElement(element, eventType))
                    element.checked = element.checked !== true;
                element.fireEvent("on" + eventType);
            }
            else
                throw new Error("Browser doesn't support triggering events");
        },

        unwrapObservable: function (value) {
            return ko.isObservable(value) ? value() : value;
        },

        peekObservable: function (value) {
            return ko.isObservable(value) ? value.peek() : value;
        },

        toggleDomNodeCssClass: function (node, classNames, shouldHaveClass) {
            if (classNames) {
                var cssClassNameRegex = /[\w-]+/g,
                    currentClassNames = node.className.match(cssClassNameRegex) || [];
                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    var indexOfClass = ko.utils.arrayIndexOf(currentClassNames, className);
                    if (indexOfClass >= 0) {
                        if (!shouldHaveClass)
                            currentClassNames.splice(indexOfClass, 1);
                    } else {
                        if (shouldHaveClass)
                            currentClassNames.push(className);
                    }
                });
                node.className = currentClassNames.join(" ");
            }
        },

        setTextContent: function(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if ((value === null) || (value === undefined))
                value = "";

            if (element.nodeType === 3) {
                element.data = value;
            } else {
                // We need there to be exactly one child: a text node.
                // If there are no children, more than one, or if it's not a text node,
                // we'll clear everything and create a single text node.
                var innerTextNode = ko.virtualElements.firstChild(element);
                if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                    ko.virtualElements.setDomNodeChildren(element, [document.createTextNode(value)]);
                } else {
                    innerTextNode.data = value;
                }

                ko.utils.forceRefresh(element);
            }
        },

        setElementName: function(element, name) {
            element.name = name;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ieVersion <= 7) {
                try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                }
                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
            }
        },

        forceRefresh: function(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                var elem = node.nodeType == 1 ? node : node.parentNode;
                if (elem.style)
                    elem.style.zoom = elem.style.zoom;
            }
        },

        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            if (ieVersion >= 9) {
                var originalWidth = selectElement.style.width;
                selectElement.style.width = 0;
                selectElement.style.width = originalWidth;
            }
        },

        range: function (min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];
            for (var i = min; i <= max; i++)
                result.push(i);
            return result;
        },

        makeArray: function(arrayLikeObject) {
            var result = [];
            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                result.push(arrayLikeObject[i]);
            };
            return result;
        },

        isIe6 : isIe6,
        isIe7 : isIe7,
        ieVersion : ieVersion,

        getFormFields: function(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = (typeof fieldName == 'string')
                ? function(field) { return field.name === fieldName }
                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
            var matches = [];
            for (var i = fields.length - 1; i >= 0; i--) {
                if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
            };
            return matches;
        },

        parseJson: function (jsonString) {
            if (typeof jsonString == "string") {
                jsonString = ko.utils.stringTrim(jsonString);
                if (jsonString) {
                    if (window.JSON && window.JSON.parse) // Use native parsing where available
                        return window.JSON.parse(jsonString);
                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
                }
            }
            return null;
        },

        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
            if ((typeof JSON == "undefined") || (typeof JSON.stringify == "undefined"))
                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
        },

        postJson: function (urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm;

            // If we were given a form, use its 'action' URL and pick out any requested field values
            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                var originalForm = urlOrForm;
                url = originalForm.action;
                for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                        params[fields[j].name] = fields[j].value;
                }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";
            for (var key in data) {
                var input = document.createElement("input");
                input.name = key;
                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                form.appendChild(input);
            }
            for (var key in params) {
                var input = document.createElement("input");
                input.name = key;
                input.value = params[key];
                form.appendChild(input);
            }
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
        }
    }
})();

ko.exportSymbol('utils', ko.utils);
ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
ko.exportSymbol('utils.extend', ko.utils.extend);
ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
ko.exportSymbol('utils.postJson', ko.utils.postJson);
ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
ko.exportSymbol('utils.range', ko.utils.range);
ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);

if (!Function.prototype['bind']) {
    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
    Function.prototype['bind'] = function (object) {
        var originalFunction = this, args = Array.prototype.slice.call(arguments), object = args.shift();
        return function () {
            return originalFunction.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}

ko.utils.domData = new (function () {
    var uniqueId = 0;
    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
    var dataStore = {};
    return {
        get: function (node, key) {
            var allDataForNode = ko.utils.domData.getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
        },
        set: function (node, key, value) {
            if (value === undefined) {
                // Make sure we don't actually create a new domData key if we are actually deleting a value
                if (ko.utils.domData.getAll(node, false) === undefined)
                    return;
            }
            var allDataForNode = ko.utils.domData.getAll(node, true);
            allDataForNode[key] = value;
        },
        getAll: function (node, createIfNotFound) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
            if (!hasExistingDataStore) {
                if (!createIfNotFound)
                    return undefined;
                dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                dataStore[dataStoreKey] = {};
            }
            return dataStore[dataStoreKey];
        },
        clear: function (node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            if (dataStoreKey) {
                delete dataStore[dataStoreKey];
                node[dataStoreKeyExpandoPropertyName] = null;
                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }
            return false;
        }
    }
})();

ko.exportSymbol('utils.domData', ko.utils.domData);
ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

ko.utils.domNodeDisposal = new (function () {
    var domDataKey = "__ko_domNodeDisposal__" + (new Date).getTime();
    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

    function getDisposeCallbacksCollection(node, createIfNotFound) {
        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
        }
        return allDisposeCallbacks;
    }
    function destroyCallbacksCollection(node) {
        ko.utils.domData.set(node, domDataKey, undefined);
    }

    function cleanSingleNode(node) {
        // Run all the dispose callbacks
        var callbacks = getDisposeCallbacksCollection(node, false);
        if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](node);
        }

        // Also erase the DOM data
        ko.utils.domData.clear(node);

        // Special support for jQuery here because it's so commonly used.
        // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
        // so notify it to tear down any resources associated with the node & descendants here.
        if ((typeof jQuery == "function") && (typeof jQuery['cleanData'] == "function"))
            jQuery['cleanData']([node]);

        // Also clear any immediate-child comment nodes, as these wouldn't have been found by
        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
        if (cleanableNodeTypesWithDescendants[node.nodeType])
            cleanImmediateCommentTypeChildren(node);
    }

    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
        var child, nextChild = nodeWithChildren.firstChild;
        while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8)
                cleanSingleNode(child);
        }
    }

    return {
        addDisposeCallback : function(node, callback) {
            if (typeof callback != "function")
                throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
        },

        removeDisposeCallback : function(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);
            if (callbacksCollection) {
                ko.utils.arrayRemoveItem(callbacksCollection, callback);
                if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
            }
        },

        cleanNode : function(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
                cleanSingleNode(node);

                // ... then its descendants, where applicable
                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    // Clone the descendants list in case it changes during iteration
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0, j = descendants.length; i < j; i++)
                        cleanSingleNode(descendants[i]);
                }
            }
            return node;
        },

        removeNode : function(node) {
            ko.cleanNode(node);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        }
    }
})();
ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
ko.exportSymbol('cleanNode', ko.cleanNode);
ko.exportSymbol('removeNode', ko.removeNode);
ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
(function () {
    var leadingCommentRegex = /^(\s*)<!--(.*?)-->/;

    function simpleHtmlParse(html) {
        // Based on jQuery's "clean" function, but only accounting for table-related elements.
        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

        // Trim whitespace, otherwise indexOf won't work as expected
        var tags = ko.utils.stringTrim(html).toLowerCase(), div = document.createElement("div");

        // Finds the first match from the left column, and returns the corresponding "wrap" data from the right column
        var wrap = tags.match(/^<(thead|tbody|tfoot)/)              && [1, "<table>", "</table>"] ||
                   !tags.indexOf("<tr")                             && [2, "<table><tbody>", "</tbody></table>"] ||
                   (!tags.indexOf("<td") || !tags.indexOf("<th"))   && [3, "<table><tbody><tr>", "</tr></tbody></table>"] ||
                   /* anything else */                                 [0, "", ""];

        // Go to html and back, then peel off extra wrappers
        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
        if (typeof window['innerShiv'] == "function") {
            div.appendChild(window['innerShiv'](markup));
        } else {
            div.innerHTML = markup;
        }

        // Move to the right depth
        while (wrap[0]--)
            div = div.lastChild;

        return ko.utils.makeArray(div.lastChild.childNodes);
    }

    function jQueryHtmlParse(html) {
        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
        if (jQuery['parseHTML']) {
            return jQuery['parseHTML'](html);
        } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQuery['clean']([html]);

            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
            if (elems && elems[0]) {
                // Find the top-most parent element that's a direct child of a document fragment
                var elem = elems[0];
                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
                    elem = elem.parentNode;
                // ... then detach it
                if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
            }

            return elems;
        }
    }

    ko.utils.parseHtmlFragment = function(html) {
        return typeof jQuery != 'undefined' ? jQueryHtmlParse(html)   // As below, benefit from jQuery's optimisations where possible
                                            : simpleHtmlParse(html);  // ... otherwise, this simple logic will do in most common cases.
    };

    ko.utils.setHtml = function(node, html) {
        ko.utils.emptyDomNode(node);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        html = ko.utils.unwrapObservable(html);

        if ((html !== null) && (html !== undefined)) {
            if (typeof html != 'string')
                html = html.toString();

            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.
            if (typeof jQuery != 'undefined') {
                jQuery(node)['html'](html);
            } else {
                // ... otherwise, use KO's own parsing logic.
                var parsedNodes = ko.utils.parseHtmlFragment(html);
                for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
            }
        }
    };
})();

ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

ko.memoization = (function () {
    var memos = {};

    function randomMax8HexChars() {
        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
    }
    function generateRandomId() {
        return randomMax8HexChars() + randomMax8HexChars();
    }
    function findMemoNodes(rootNode, appendToArray) {
        if (!rootNode)
            return;
        if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null)
                appendToArray.push({ domNode: rootNode, memoId: memoId });
        } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
                findMemoNodes(childNodes[i], appendToArray);
        }
    }

    return {
        memoize: function (callback) {
            if (typeof callback != "function")
                throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
        },

        unmemoize: function (memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined)
                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
            try {
                callback.apply(null, callbackParams || []);
                return true;
            }
            finally { delete memos[memoId]; }
        },

        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);
            for (var i = 0, j = memos.length; i < j; i++) {
                var node = memos[i].domNode;
                var combinedParams = [node];
                if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                if (node.parentNode)
                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
        },

        parseMemoText: function (memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
        }
    };
})();

ko.exportSymbol('memoization', ko.memoization);
ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
ko.extenders = {
    'throttle': function(target, timeout) {
        // Throttling means two things:

        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
        target['throttleEvaluation'] = timeout;

        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
        //     so the target cannot change value synchronously or faster than a certain rate
        var writeTimeoutInstance = null;
        return ko.dependentObservable({
            'read': target,
            'write': function(value) {
                clearTimeout(writeTimeoutInstance);
                writeTimeoutInstance = setTimeout(function() {
                    target(value);
                }, timeout);
            }
        });
    },

    'notify': function(target, notifyWhen) {
        target["equalityComparer"] = notifyWhen == "always"
            ? function() { return false } // Treat all values as not equal
            : ko.observable["fn"]["equalityComparer"];
        return target;
    }
};

function applyExtenders(requestedExtenders) {
    var target = this;
    if (requestedExtenders) {
        for (var key in requestedExtenders) {
            var extenderHandler = ko.extenders[key];
            if (typeof extenderHandler == 'function') {
                target = extenderHandler(target, requestedExtenders[key]);
            }
        }
    }
    return target;
}

ko.exportSymbol('extenders', ko.extenders);

ko.subscription = function (target, callback, disposeCallback) {
    this.target = target;
    this.callback = callback;
    this.disposeCallback = disposeCallback;
    ko.exportProperty(this, 'dispose', this.dispose);
};
ko.subscription.prototype.dispose = function () {
    this.isDisposed = true;
    this.disposeCallback();
};

ko.subscribable = function () {
    this._subscriptions = {};

    ko.utils.extend(this, ko.subscribable['fn']);
    ko.exportProperty(this, 'subscribe', this.subscribe);
    ko.exportProperty(this, 'extend', this.extend);
    ko.exportProperty(this, 'getSubscriptionsCount', this.getSubscriptionsCount);
}

var defaultEvent = "change";

ko.subscribable['fn'] = {
    subscribe: function (callback, callbackTarget, event) {
        event = event || defaultEvent;
        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

        var subscription = new ko.subscription(this, boundCallback, function () {
            ko.utils.arrayRemoveItem(this._subscriptions[event], subscription);
        }.bind(this));

        if (!this._subscriptions[event])
            this._subscriptions[event] = [];
        this._subscriptions[event].push(subscription);
        return subscription;
    },

    "notifySubscribers": function (valueToNotify, event) {
        event = event || defaultEvent;
        if (this._subscriptions[event]) {
            ko.dependencyDetection.ignore(function() {
                ko.utils.arrayForEach(this._subscriptions[event].slice(0), function (subscription) {
                    // In case a subscription was disposed during the arrayForEach cycle, check
                    // for isDisposed on each subscription before invoking its callback
                    if (subscription && (subscription.isDisposed !== true))
                        subscription.callback(valueToNotify);
                });
            }, this);
        }
    },

    getSubscriptionsCount: function () {
        var total = 0;
        for (var eventName in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(eventName))
                total += this._subscriptions[eventName].length;
        }
        return total;
    },

    extend: applyExtenders
};


ko.isSubscribable = function (instance) {
    return typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
};

ko.exportSymbol('subscribable', ko.subscribable);
ko.exportSymbol('isSubscribable', ko.isSubscribable);

ko.dependencyDetection = (function () {
    var _frames = [];

    return {
        begin: function (callback) {
            _frames.push({ callback: callback, distinctDependencies:[] });
        },

        end: function () {
            _frames.pop();
        },

        registerDependency: function (subscribable) {
            if (!ko.isSubscribable(subscribable))
                throw new Error("Only subscribable things can act as dependencies");
            if (_frames.length > 0) {
                var topFrame = _frames[_frames.length - 1];
                if (!topFrame || ko.utils.arrayIndexOf(topFrame.distinctDependencies, subscribable) >= 0)
                    return;
                topFrame.distinctDependencies.push(subscribable);
                topFrame.callback(subscribable);
            }
        },

        ignore: function(callback, callbackTarget, callbackArgs) {
            try {
                _frames.push(null);
                return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
                _frames.pop();
            }
        }
    };
})();
var primitiveTypes = { 'undefined':true, 'boolean':true, 'number':true, 'string':true };

ko.observable = function (initialValue) {
    var _latestValue = initialValue;

    function observable() {
        if (arguments.length > 0) {
            // Write

            // Ignore writes if the value hasn't changed
            if ((!observable['equalityComparer']) || !observable['equalityComparer'](_latestValue, arguments[0])) {
                observable.valueWillMutate();
                _latestValue = arguments[0];
                if (DEBUG) observable._latestValue = _latestValue;
                observable.valueHasMutated();
            }
            return this; // Permits chained assignments
        }
        else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
            return _latestValue;
        }
    }
    if (DEBUG) observable._latestValue = _latestValue;
    ko.subscribable.call(observable);
    observable.peek = function() { return _latestValue };
    observable.valueHasMutated = function () { observable["notifySubscribers"](_latestValue); }
    observable.valueWillMutate = function () { observable["notifySubscribers"](_latestValue, "beforeChange"); }
    ko.utils.extend(observable, ko.observable['fn']);

    ko.exportProperty(observable, 'peek', observable.peek);
    ko.exportProperty(observable, "valueHasMutated", observable.valueHasMutated);
    ko.exportProperty(observable, "valueWillMutate", observable.valueWillMutate);

    return observable;
}

ko.observable['fn'] = {
    "equalityComparer": function valuesArePrimitiveAndEqual(a, b) {
        var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
        return oldValueIsPrimitive ? (a === b) : false;
    }
};

var protoProperty = ko.observable.protoProperty = "__ko_proto__";
ko.observable['fn'][protoProperty] = ko.observable;

ko.hasPrototype = function(instance, prototype) {
    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
    if (instance[protoProperty] === prototype) return true;
    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
};

ko.isObservable = function (instance) {
    return ko.hasPrototype(instance, ko.observable);
}
ko.isWriteableObservable = function (instance) {
    // Observable
    if ((typeof instance == "function") && instance[protoProperty] === ko.observable)
        return true;
    // Writeable dependent observable
    if ((typeof instance == "function") && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
        return true;
    // Anything else
    return false;
}


ko.exportSymbol('observable', ko.observable);
ko.exportSymbol('isObservable', ko.isObservable);
ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
ko.observableArray = function (initialValues) {
    if (arguments.length == 0) {
        // Zero-parameter constructor initializes to empty array
        initialValues = [];
    }
    if ((initialValues !== null) && (initialValues !== undefined) && !('length' in initialValues))
        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

    var result = ko.observable(initialValues);
    ko.utils.extend(result, ko.observableArray['fn']);
    return result;
}

ko.observableArray['fn'] = {
    'remove': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var removedValues = [];
        var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];
            if (predicate(value)) {
                if (removedValues.length === 0) {
                    this.valueWillMutate();
                }
                removedValues.push(value);
                underlyingArray.splice(i, 1);
                i--;
            }
        }
        if (removedValues.length) {
            this.valueHasMutated();
        }
        return removedValues;
    },

    'removeAll': function (arrayOfValues) {
        // If you passed zero args, we remove everything
        if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
        }
        // If you passed an arg, we interpret it as an array of entries to remove
        if (!arrayOfValues)
            return [];
        return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'destroy': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        this.valueWillMutate();
        for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value))
                underlyingArray[i]["_destroy"] = true;
        }
        this.valueHasMutated();
    },

    'destroyAll': function (arrayOfValues) {
        // If you passed zero args, we destroy everything
        if (arrayOfValues === undefined)
            return this['destroy'](function() { return true });

        // If you passed an arg, we interpret it as an array of entries to destroy
        if (!arrayOfValues)
            return [];
        return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'indexOf': function (item) {
        var underlyingArray = this();
        return ko.utils.arrayIndexOf(underlyingArray, item);
    },

    'replace': function(oldItem, newItem) {
        var index = this['indexOf'](oldItem);
        if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
        }
    }
}

// Populate ko.observableArray.fn with read/write functions from native arrays
// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
        // (for consistency with mutating regular observables)
        var underlyingArray = this.peek();
        this.valueWillMutate();
        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
        this.valueHasMutated();
        return methodCallResult;
    };
});

// Populate ko.observableArray.fn with read-only functions from native arrays
ko.utils.arrayForEach(["slice"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        var underlyingArray = this();
        return underlyingArray[methodName].apply(underlyingArray, arguments);
    };
});

ko.exportSymbol('observableArray', ko.observableArray);
ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
    var _latestValue,
        _hasBeenEvaluated = false,
        _isBeingEvaluated = false,
        readFunction = evaluatorFunctionOrOptions;

    if (readFunction && typeof readFunction == "object") {
        // Single-parameter syntax - everything is on this "options" param
        options = readFunction;
        readFunction = options["read"];
    } else {
        // Multi-parameter syntax - construct the options according to the params passed
        options = options || {};
        if (!readFunction)
            readFunction = options["read"];
    }
    if (typeof readFunction != "function")
        throw new Error("Pass a function that returns the value of the ko.computed");

    function addSubscriptionToDependency(subscribable) {
        _subscriptionsToDependencies.push(subscribable.subscribe(evaluatePossiblyAsync));
    }

    function disposeAllSubscriptionsToDependencies() {
        ko.utils.arrayForEach(_subscriptionsToDependencies, function (subscription) {
            subscription.dispose();
        });
        _subscriptionsToDependencies = [];
    }

    function evaluatePossiblyAsync() {
        var throttleEvaluationTimeout = dependentObservable['throttleEvaluation'];
        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(evaluationTimeoutInstance);
            evaluationTimeoutInstance = setTimeout(evaluateImmediate, throttleEvaluationTimeout);
        } else
            evaluateImmediate();
    }

    function evaluateImmediate() {
        if (_isBeingEvaluated) {
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
        }

        // Don't dispose on first evaluation, because the "disposeWhen" callback might
        // e.g., dispose when the associated DOM element isn't in the doc, and it's not
        // going to be in the doc until *after* the first evaluation
        if (_hasBeenEvaluated && disposeWhen()) {
            dispose();
            return;
        }

        _isBeingEvaluated = true;
        try {
            // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
            // Then, during evaluation, we cross off any that are in fact still being used.
            var disposalCandidates = ko.utils.arrayMap(_subscriptionsToDependencies, function(item) {return item.target;});

            ko.dependencyDetection.begin(function(subscribable) {
                var inOld;
                if ((inOld = ko.utils.arrayIndexOf(disposalCandidates, subscribable)) >= 0)
                    disposalCandidates[inOld] = undefined; // Don't want to dispose this subscription, as it's still being used
                else
                    addSubscriptionToDependency(subscribable); // Brand new subscription - add it
            });

            var newValue = readFunction.call(evaluatorFunctionTarget);

            // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
            for (var i = disposalCandidates.length - 1; i >= 0; i--) {
                if (disposalCandidates[i])
                    _subscriptionsToDependencies.splice(i, 1)[0].dispose();
            }
            _hasBeenEvaluated = true;

            dependentObservable["notifySubscribers"](_latestValue, "beforeChange");
            _latestValue = newValue;
            if (DEBUG) dependentObservable._latestValue = _latestValue;
        } finally {
            ko.dependencyDetection.end();
        }

        dependentObservable["notifySubscribers"](_latestValue);
        _isBeingEvaluated = false;
        if (!_subscriptionsToDependencies.length)
            dispose();
    }

    function dependentObservable() {
        if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
                // Writing a value
                writeFunction.apply(evaluatorFunctionTarget, arguments);
            } else {
                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }
            return this; // Permits chained assignments
        } else {
            // Reading the value
            if (!_hasBeenEvaluated)
                evaluateImmediate();
            ko.dependencyDetection.registerDependency(dependentObservable);
            return _latestValue;
        }
    }

    function peek() {
        if (!_hasBeenEvaluated)
            evaluateImmediate();
        return _latestValue;
    }

    function isActive() {
        return !_hasBeenEvaluated || _subscriptionsToDependencies.length > 0;
    }

    // By here, "options" is always non-null
    var writeFunction = options["write"],
        disposeWhenNodeIsRemoved = options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
        disposeWhen = options["disposeWhen"] || options.disposeWhen || function() { return false; },
        dispose = disposeAllSubscriptionsToDependencies,
        _subscriptionsToDependencies = [],
        evaluationTimeoutInstance = null;

    if (!evaluatorFunctionTarget)
        evaluatorFunctionTarget = options["owner"];

    dependentObservable.peek = peek;
    dependentObservable.getDependenciesCount = function () { return _subscriptionsToDependencies.length; };
    dependentObservable.hasWriteFunction = typeof options["write"] === "function";
    dependentObservable.dispose = function () { dispose(); };
    dependentObservable.isActive = isActive;

    ko.subscribable.call(dependentObservable);
    ko.utils.extend(dependentObservable, ko.dependentObservable['fn']);

    ko.exportProperty(dependentObservable, 'peek', dependentObservable.peek);
    ko.exportProperty(dependentObservable, 'dispose', dependentObservable.dispose);
    ko.exportProperty(dependentObservable, 'isActive', dependentObservable.isActive);
    ko.exportProperty(dependentObservable, 'getDependenciesCount', dependentObservable.getDependenciesCount);

    // Evaluate, unless deferEvaluation is true
    if (options['deferEvaluation'] !== true)
        evaluateImmediate();

    // Build "disposeWhenNodeIsRemoved" and "disposeWhenNodeIsRemovedCallback" option values.
    // But skip if isActive is false (there will never be any dependencies to dispose).
    // (Note: "disposeWhenNodeIsRemoved" option both proactively disposes as soon as the node is removed using ko.removeNode(),
    // plus adds a "disposeWhen" callback that, on each evaluation, disposes if the node was removed by some other means.)
    if (disposeWhenNodeIsRemoved && isActive()) {
        dispose = function() {
            ko.utils.domNodeDisposal.removeDisposeCallback(disposeWhenNodeIsRemoved, arguments.callee);
            disposeAllSubscriptionsToDependencies();
        };
        ko.utils.domNodeDisposal.addDisposeCallback(disposeWhenNodeIsRemoved, dispose);
        var existingDisposeWhenFunction = disposeWhen;
        disposeWhen = function () {
            return !ko.utils.domNodeIsAttachedToDocument(disposeWhenNodeIsRemoved) || existingDisposeWhenFunction();
        }
    }

    return dependentObservable;
};

ko.isComputed = function(instance) {
    return ko.hasPrototype(instance, ko.dependentObservable);
};

var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
ko.dependentObservable[protoProp] = ko.observable;

ko.dependentObservable['fn'] = {};
ko.dependentObservable['fn'][protoProp] = ko.dependentObservable;

ko.exportSymbol('dependentObservable', ko.dependentObservable);
ko.exportSymbol('computed', ko.dependentObservable); // Make "ko.computed" an alias for "ko.dependentObservable"
ko.exportSymbol('isComputed', ko.isComputed);

(function() {
    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

    ko.toJS = function(rootObject) {
        if (arguments.length == 0)
            throw new Error("When calling ko.toJS, pass the object you want to convert.");

        // We just unwrap everything at every level in the object graph
        return mapJsObjectGraph(rootObject, function(valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                valueToMap = valueToMap();
            return valueToMap;
        });
    };

    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
        var plainJavaScriptObject = ko.toJS(rootObject);
        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
    };

    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
        visitedObjects = visitedObjects || new objectLookup();

        rootObject = mapInputCallback(rootObject);
        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof Date));
        if (!canHaveProperties)
            return rootObject;

        var outputProperties = rootObject instanceof Array ? [] : {};
        visitedObjects.save(rootObject, outputProperties);

        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (typeof propertyValue) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                case "object":
                case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
                        ? previouslyMappedValue
                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
            }
        });

        return outputProperties;
    }

    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);

            // For arrays, also respect toJSON property for custom mappings (fixes #278)
            if (typeof rootObject['toJSON'] == 'function')
                visitorCallback('toJSON');
        } else {
            for (var propertyName in rootObject)
                visitorCallback(propertyName);
        }
    };

    function objectLookup() {
        var keys = [];
        var values = [];
        this.save = function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(keys, key);
            if (existingIndex >= 0)
                values[existingIndex] = value;
            else {
                keys.push(key);
                values.push(value);
            }
        };
        this.get = function(key) {
            var existingIndex = ko.utils.arrayIndexOf(keys, key);
            return (existingIndex >= 0) ? values[existingIndex] : undefined;
        };
    };
})();

ko.exportSymbol('toJS', ko.toJS);
ko.exportSymbol('toJSON', ko.toJSON);
(function () {
    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
    ko.selectExtensions = {
        readValue : function(element) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7
                        ? (element.getAttributeNode('value').specified ? element.value : element.text)
                        : element.value;
                case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                default:
                    return element.value;
            }
        },

        writeValue: function(element, value) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    switch(typeof value) {
                        case "string":
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                delete element[hasDomDataExpandoProperty];
                            }
                            element.value = value;
                            break;
                        default:
                            // Store arbitrary object using DomData
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                            element[hasDomDataExpandoProperty] = true;

                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                            element.value = typeof value === "number" ? value : "";
                            break;
                    }
                    break;
                case 'select':
                    for (var i = element.options.length - 1; i >= 0; i--) {
                        if (ko.selectExtensions.readValue(element.options[i]) == value) {
                            element.selectedIndex = i;
                            break;
                        }
                    }
                    break;
                default:
                    if ((value === null) || (value === undefined))
                        value = "";
                    element.value = value;
                    break;
            }
        }
    };
})();

ko.exportSymbol('selectExtensions', ko.selectExtensions);
ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
ko.expressionRewriting = (function () {
    var restoreCapturedTokensRegex = /\@ko_token_(\d+)\@/g;
    var javaScriptReservedWords = ["true", "false"];

    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

    function restoreTokens(string, tokens) {
        var prevValue = null;
        while (string != prevValue) { // Keep restoring tokens until it no longer makes a difference (they may be nested)
            prevValue = string;
            string = string.replace(restoreCapturedTokensRegex, function (match, tokenIndex) {
                return tokens[tokenIndex];
            });
        }
        return string;
    }

    function getWriteableValue(expression) {
        if (ko.utils.arrayIndexOf(javaScriptReservedWords, ko.utils.stringTrim(expression).toLowerCase()) >= 0)
            return false;
        var match = expression.match(javaScriptAssignmentTarget);
        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
    }

    function ensureQuoted(key) {
        var trimmedKey = ko.utils.stringTrim(key);
        switch (trimmedKey.length && trimmedKey.charAt(0)) {
            case "'":
            case '"':
                return key;
            default:
                return "'" + trimmedKey + "'";
        }
    }

    return {
        bindingRewriteValidators: [],

        parseObjectLiteral: function(objectLiteralString) {
            // A full tokeniser+lexer would add too much weight to this library, so here's a simple parser
            // that is sufficient just to split an object literal string into a set of top-level key-value pairs

            var str = ko.utils.stringTrim(objectLiteralString);
            if (str.length < 3)
                return [];
            if (str.charAt(0) === "{")// Ignore any braces surrounding the whole object literal
                str = str.substring(1, str.length - 1);

            // Pull out any string literals and regex literals
            var tokens = [];
            var tokenStart = null, tokenEndChar;
            for (var position = 0; position < str.length; position++) {
                var c = str.charAt(position);
                if (tokenStart === null) {
                    switch (c) {
                        case '"':
                        case "'":
                        case "/":
                            tokenStart = position;
                            tokenEndChar = c;
                            break;
                    }
                } else if ((c == tokenEndChar) && (str.charAt(position - 1) !== "\\")) {
                    var token = str.substring(tokenStart, position + 1);
                    tokens.push(token);
                    var replacement = "@ko_token_" + (tokens.length - 1) + "@";
                    str = str.substring(0, tokenStart) + replacement + str.substring(position + 1);
                    position -= (token.length - replacement.length);
                    tokenStart = null;
                }
            }

            // Next pull out balanced paren, brace, and bracket blocks
            tokenStart = null;
            tokenEndChar = null;
            var tokenDepth = 0, tokenStartChar = null;
            for (var position = 0; position < str.length; position++) {
                var c = str.charAt(position);
                if (tokenStart === null) {
                    switch (c) {
                        case "{": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = "}";
                                  break;
                        case "(": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = ")";
                                  break;
                        case "[": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = "]";
                                  break;
                    }
                }

                if (c === tokenStartChar)
                    tokenDepth++;
                else if (c === tokenEndChar) {
                    tokenDepth--;
                    if (tokenDepth === 0) {
                        var token = str.substring(tokenStart, position + 1);
                        tokens.push(token);
                        var replacement = "@ko_token_" + (tokens.length - 1) + "@";
                        str = str.substring(0, tokenStart) + replacement + str.substring(position + 1);
                        position -= (token.length - replacement.length);
                        tokenStart = null;
                    }
                }
            }

            // Now we can safely split on commas to get the key/value pairs
            var result = [];
            var keyValuePairs = str.split(",");
            for (var i = 0, j = keyValuePairs.length; i < j; i++) {
                var pair = keyValuePairs[i];
                var colonPos = pair.indexOf(":");
                if ((colonPos > 0) && (colonPos < pair.length - 1)) {
                    var key = pair.substring(0, colonPos);
                    var value = pair.substring(colonPos + 1);
                    result.push({ 'key': restoreTokens(key, tokens), 'value': restoreTokens(value, tokens) });
                } else {
                    result.push({ 'unknown': restoreTokens(pair, tokens) });
                }
            }
            return result;
        },

        preProcessBindings: function (objectLiteralStringOrKeyValueArray) {
            var keyValueArray = typeof objectLiteralStringOrKeyValueArray === "string"
                ? ko.expressionRewriting.parseObjectLiteral(objectLiteralStringOrKeyValueArray)
                : objectLiteralStringOrKeyValueArray;
            var resultStrings = [], propertyAccessorResultStrings = [];

            var keyValueEntry;
            for (var i = 0; keyValueEntry = keyValueArray[i]; i++) {
                if (resultStrings.length > 0)
                    resultStrings.push(",");

                if (keyValueEntry['key']) {
                    var quotedKey = ensureQuoted(keyValueEntry['key']), val = keyValueEntry['value'];
                    resultStrings.push(quotedKey);
                    resultStrings.push(":");
                    resultStrings.push(val);

                    if (val = getWriteableValue(ko.utils.stringTrim(val))) {
                        if (propertyAccessorResultStrings.length > 0)
                            propertyAccessorResultStrings.push(", ");
                        propertyAccessorResultStrings.push(quotedKey + " : function(__ko_value) { " + val + " = __ko_value; }");
                    }
                } else if (keyValueEntry['unknown']) {
                    resultStrings.push(keyValueEntry['unknown']);
                }
            }

            var combinedResult = resultStrings.join("");
            if (propertyAccessorResultStrings.length > 0) {
                var allPropertyAccessors = propertyAccessorResultStrings.join("");
                combinedResult = combinedResult + ", '_ko_property_writers' : { " + allPropertyAccessors + " } ";
            }

            return combinedResult;
        },

        keyValueArrayContainsKey: function(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++)
                if (ko.utils.stringTrim(keyValueArray[i]['key']) == key)
                    return true;
            return false;
        },

        // Internal, private KO utility for updating model properties from within bindings
        // property:            If the property being updated is (or might be) an observable, pass it here
        //                      If it turns out to be a writable observable, it will be written to directly
        // allBindingsAccessor: All bindings in the current execution context.
        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        // value:               The value to be written
        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
        //                      it is !== existing value on that writable observable
        writeValueToProperty: function(property, allBindingsAccessor, key, value, checkIfDifferent) {
            if (!property || !ko.isWriteableObservable(property)) {
                var propWriters = allBindingsAccessor()['_ko_property_writers'];
                if (propWriters && propWriters[key])
                    propWriters[key](value);
            } else if (!checkIfDifferent || property.peek() !== value) {
                property(value);
            }
        }
    };
})();

ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);(function() {
    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
    // of that virtual hierarchy
    //
    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
    // without having to scatter special cases all over the binding and templating code.

    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
    // So, use node.text where available, and node.nodeValue elsewhere
    var commentNodesHaveTextProperty = document.createComment("test").text === "<!--test-->";

    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*-->$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/;
    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

    function isStartComment(node) {
        return (node.nodeType == 8) && (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
    }

    function isEndComment(node) {
        return (node.nodeType == 8) && (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(endCommentRegex);
    }

    function getVirtualChildren(startComment, allowUnbalanced) {
        var currentNode = startComment;
        var depth = 1;
        var children = [];
        while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
                depth--;
                if (depth === 0)
                    return children;
            }

            children.push(currentNode);

            if (isStartComment(currentNode))
                depth++;
        }
        if (!allowUnbalanced)
            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
        return null;
    }

    function getMatchingEndComment(startComment, allowUnbalanced) {
        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
        if (allVirtualChildren) {
            if (allVirtualChildren.length > 0)
                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
        } else
            return null; // Must have no matching end comment, and allowUnbalanced is true
    }

    function getUnbalancedChildTags(node) {
        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
        var childNode = node.firstChild, captureRemaining = null;
        if (childNode) {
            do {
                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                    captureRemaining.push(childNode);
                else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
                        childNode = matchingEndComment;
                    else
                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                }
            } while (childNode = childNode.nextSibling);
        }
        return captureRemaining;
    }

    ko.virtualElements = {
        allowedBindings: {},

        childNodes: function(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
        },

        emptyNode: function(node) {
            if (!isStartComment(node))
                ko.utils.emptyDomNode(node);
            else {
                var virtualChildren = ko.virtualElements.childNodes(node);
                for (var i = 0, j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
            }
        },

        setDomNodeChildren: function(node, childNodes) {
            if (!isStartComment(node))
                ko.utils.setDomNodeChildren(node, childNodes);
            else {
                ko.virtualElements.emptyNode(node);
                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                for (var i = 0, j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
            }
        },

        prepend: function(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
                if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                else
                    containerNode.appendChild(nodeToPrepend);
            } else {
                // Start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
        },

        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
                ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
                // Insert after insertion point
                if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                else
                    containerNode.appendChild(nodeToInsert);
            } else {
                // Children of start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
        },

        firstChild: function(node) {
            if (!isStartComment(node))
                return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        nextSibling: function(node) {
            if (isStartComment(node))
                node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        virtualNodeBindingValue: function(node) {
            var regexMatch = isStartComment(node);
            return regexMatch ? regexMatch[1] : null;
        },

        normaliseVirtualElementDomStructure: function(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                return;

            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.
            var childNode = elementVerified.firstChild;
            if (childNode) {
                do {
                    if (childNode.nodeType === 1) {
                        var unbalancedTags = getUnbalancedChildTags(childNode);
                        if (unbalancedTags) {
                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                            var nodeToInsertBefore = childNode.nextSibling;
                            for (var i = 0; i < unbalancedTags.length; i++) {
                                if (nodeToInsertBefore)
                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                                else
                                    elementVerified.appendChild(unbalancedTags[i]);
                            }
                        }
                    }
                } while (childNode = childNode.nextSibling);
            }
        }
    };
})();
ko.exportSymbol('virtualElements', ko.virtualElements);
ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
(function() {
    var defaultBindingAttributeName = "data-bind";

    ko.bindingProvider = function() {
        this.bindingCache = {};
    };

    ko.utils.extend(ko.bindingProvider.prototype, {
        'nodeHasBindings': function(node) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName) != null;   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node) != null; // Comment node
                default: return false;
            }
        },

        'getBindings': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext);
            return bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'getBindingsString': function(node, bindingContext) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                default: return null;
            }
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'parseBindingsString': function(bindingsString, bindingContext, node) {
            try {
                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache);
                return bindingFunction(bindingContext, node);
            } catch (ex) {
                throw new Error("Unable to parse bindings.\nMessage: " + ex + ";\nBindings value: " + bindingsString);
            }
        }
    });

    ko.bindingProvider['instance'] = new ko.bindingProvider();

    function createBindingsStringEvaluatorViaCache(bindingsString, cache) {
        var cacheKey = bindingsString;
        return cache[cacheKey]
            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString));
    }

    function createBindingsStringEvaluator(bindingsString) {
        // Build the source for a function that evaluates "expression"
        // For each scope variable, add an extra level of "with" nesting
        // Example result: with(sc1) { with(sc0) { return (expression) } }
        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString),
            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
        return new Function("$context", "$element", functionBody);
    }
})();

ko.exportSymbol('bindingProvider', ko.bindingProvider);
(function () {
    ko.bindingHandlers = {};

    ko.bindingContext = function(dataItem, parentBindingContext, dataItemAlias) {
        if (parentBindingContext) {
            ko.utils.extend(this, parentBindingContext); // Inherit $root and any custom properties
            this['$parentContext'] = parentBindingContext;
            this['$parent'] = parentBindingContext['$data'];
            this['$parents'] = (parentBindingContext['$parents'] || []).slice(0);
            this['$parents'].unshift(this['$parent']);
        } else {
            this['$parents'] = [];
            this['$root'] = dataItem;
            // Export 'ko' in the binding context so it will be available in bindings and templates
            // even if 'ko' isn't exported as a global, such as when using an AMD loader.
            // See https://github.com/SteveSanderson/knockout/issues/490
            this['ko'] = ko;
        }
        this['$data'] = dataItem;
        if (dataItemAlias)
            this[dataItemAlias] = dataItem;
    }
    ko.bindingContext.prototype['createChildContext'] = function (dataItem, dataItemAlias) {
        return new ko.bindingContext(dataItem, this, dataItemAlias);
    };
    ko.bindingContext.prototype['extend'] = function(properties) {
        var clone = ko.utils.extend(new ko.bindingContext(), this);
        return ko.utils.extend(clone, properties);
    };

    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
        var validator = ko.virtualElements.allowedBindings[bindingName];
        if (!validator)
            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
    }

    function applyBindingsToDescendantsInternal (viewModel, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
        var currentChild, nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
        while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(viewModel, currentChild, bindingContextsMayDifferFromDomParentElement);
        }
    }

    function applyBindingsToNodeAndDescendantsInternal (viewModel, nodeVerified, bindingContextMayDifferFromDomParentElement) {
        var shouldBindDescendants = true;

        // Perf optimisation: Apply bindings only if...
        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
        var isElement = (nodeVerified.nodeType === 1);
        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
        if (shouldApplyBindings)
            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, viewModel, bindingContextMayDifferFromDomParentElement).shouldBindDescendants;

        if (shouldBindDescendants) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(viewModel, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
        }
    }

    function applyBindingsToNodeInternal (node, bindings, viewModelOrBindingContext, bindingContextMayDifferFromDomParentElement) {
        // Need to be sure that inits are only run once, and updates never run until all the inits have been run
        var initPhase = 0; // 0 = before all inits, 1 = during inits, 2 = after all inits

        // Each time the dependentObservable is evaluated (after data changes),
        // the binding attribute is reparsed so that it can pick out the correct
        // model properties in the context of the changed data.
        // DOM event callbacks need to be able to access this changed data,
        // so we need a single parsedBindings variable (shared by all callbacks
        // associated with this node's bindings) that all the closures can access.
        var parsedBindings;
        function makeValueAccessor(bindingKey) {
            return function () { return parsedBindings[bindingKey] }
        }
        function parsedBindingsAccessor() {
            return parsedBindings;
        }

        var bindingHandlerThatControlsDescendantBindings;
        ko.dependentObservable(
            function () {
                // Ensure we have a nonnull binding context to work with
                var bindingContextInstance = viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
                    ? viewModelOrBindingContext
                    : new ko.bindingContext(ko.utils.unwrapObservable(viewModelOrBindingContext));
                var viewModel = bindingContextInstance['$data'];

                // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
                // we can easily recover it just by scanning up the node's ancestors in the DOM
                // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
                if (bindingContextMayDifferFromDomParentElement)
                    ko.storedBindingContextForNode(node, bindingContextInstance);

                // Use evaluatedBindings if given, otherwise fall back on asking the bindings provider to give us some bindings
                var evaluatedBindings = (typeof bindings == "function") ? bindings(bindingContextInstance, node) : bindings;
                parsedBindings = evaluatedBindings || ko.bindingProvider['instance']['getBindings'](node, bindingContextInstance);

                if (parsedBindings) {
                    // First run all the inits, so bindings can register for notification on changes
                    if (initPhase === 0) {
                        initPhase = 1;
                        for (var bindingKey in parsedBindings) {
                            var binding = ko.bindingHandlers[bindingKey];
                            if (binding && node.nodeType === 8)
                                validateThatBindingIsAllowedForVirtualElements(bindingKey);

                            if (binding && typeof binding["init"] == "function") {
                                var handlerInitFn = binding["init"];
                                var initResult = handlerInitFn(node, makeValueAccessor(bindingKey), parsedBindingsAccessor, viewModel, bindingContextInstance);

                                // If this binding handler claims to control descendant bindings, make a note of this
                                if (initResult && initResult['controlsDescendantBindings']) {
                                    if (bindingHandlerThatControlsDescendantBindings !== undefined)
                                        throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    bindingHandlerThatControlsDescendantBindings = bindingKey;
                                }
                            }
                        }
                        initPhase = 2;
                    }

                    // ... then run all the updates, which might trigger changes even on the first evaluation
                    if (initPhase === 2) {
                        for (var bindingKey in parsedBindings) {
                            var binding = ko.bindingHandlers[bindingKey];
                            if (binding && typeof binding["update"] == "function") {
                                var handlerUpdateFn = binding["update"];
                                handlerUpdateFn(node, makeValueAccessor(bindingKey), parsedBindingsAccessor, viewModel, bindingContextInstance);
                            }
                        }
                    }
                }
            },
            null,
            { disposeWhenNodeIsRemoved : node }
        );

        return {
            shouldBindDescendants: bindingHandlerThatControlsDescendantBindings === undefined
        };
    };

    var storedBindingContextDomDataKey = "__ko_bindingContext__";
    ko.storedBindingContextForNode = function (node, bindingContext) {
        if (arguments.length == 2)
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
        else
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
    }

    ko.applyBindingsToNode = function (node, bindings, viewModel) {
        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
        return applyBindingsToNodeInternal(node, bindings, viewModel, true);
    };

    ko.applyBindingsToDescendants = function(viewModel, rootNode) {
        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
            applyBindingsToDescendantsInternal(viewModel, rootNode, true);
    };

    ko.applyBindings = function (viewModel, rootNode) {
        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

        applyBindingsToNodeAndDescendantsInternal(viewModel, rootNode, true);
    };

    // Retrieving binding context from arbitrary nodes
    ko.contextFor = function(node) {
        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
        switch (node.nodeType) {
            case 1:
            case 8:
                var context = ko.storedBindingContextForNode(node);
                if (context) return context;
                if (node.parentNode) return ko.contextFor(node.parentNode);
                break;
        }
        return undefined;
    };
    ko.dataFor = function(node) {
        var context = ko.contextFor(node);
        return context ? context['$data'] : undefined;
    };

    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
    ko.exportSymbol('applyBindings', ko.applyBindings);
    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
    ko.exportSymbol('contextFor', ko.contextFor);
    ko.exportSymbol('dataFor', ko.dataFor);
})();
var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
ko.bindingHandlers['attr'] = {
    'update': function(element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
        for (var attrName in value) {
            if (typeof attrName == "string") {
                var attrValue = ko.utils.unwrapObservable(value[attrName]);

                // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
                // when someProp is a "no value"-like value (strictly null, false, or undefined)
                // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
                var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
                if (toRemove)
                    element.removeAttribute(attrName);

                // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
                // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
                // but instead of figuring out the mode, we'll just set the attribute through the Javascript
                // property for IE <= 8.
                if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                    attrName = attrHtmlToJavascriptMap[attrName];
                    if (toRemove)
                        element.removeAttribute(attrName);
                    else
                        element[attrName] = attrValue;
                } else if (!toRemove) {
                    element.setAttribute(attrName, attrValue.toString());
                }

                // Treat "name" specially - although you can think of it as an attribute, it also needs
                // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
                // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
                // entirely, and there's no strong reason to allow for such casing in HTML.
                if (attrName === "name") {
                    ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
                }
            }
        }
    }
};
ko.bindingHandlers['checked'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        var updateHandler = function() {
            var valueToWrite;
            if (element.type == "checkbox") {
                valueToWrite = element.checked;
            } else if ((element.type == "radio") && (element.checked)) {
                valueToWrite = element.value;
            } else {
                return; // "checked" binding only responds to checkboxes and selected radio buttons
            }

            var modelValue = valueAccessor(), unwrappedValue = ko.utils.unwrapObservable(modelValue);
            if ((element.type == "checkbox") && (unwrappedValue instanceof Array)) {
                // For checkboxes bound to an array, we add/remove the checkbox value to that array
                // This works for both observable and non-observable arrays
                var existingEntryIndex = ko.utils.arrayIndexOf(unwrappedValue, element.value);
                if (element.checked && (existingEntryIndex < 0))
                    modelValue.push(element.value);
                else if ((!element.checked) && (existingEntryIndex >= 0))
                    modelValue.splice(existingEntryIndex, 1);
            } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'checked', valueToWrite, true);
            }
        };
        ko.utils.registerEventHandler(element, "click", updateHandler);

        // IE 6 won't allow radio buttons to be selected unless they have a name
        if ((element.type == "radio") && !element.name)
            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });
    },
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        if (element.type == "checkbox") {
            if (value instanceof Array) {
                // When bound to an array, the checkbox being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(value, element.value) >= 0;
            } else {
                // When bound to anything other value (not an array), the checkbox being checked represents the value being trueish
                element.checked = value;
            }
        } else if (element.type == "radio") {
            element.checked = (element.value == value);
        }
    }
};
var classesWrittenByBindingKey = '__ko__cssValue';
ko.bindingHandlers['css'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (typeof value == "object") {
            for (var className in value) {
                var shouldHaveClass = ko.utils.unwrapObservable(value[className]);
                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            }
        } else {
            value = String(value || ''); // Make sure we don't try to store or set a non-string value
            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
        }
    }
};
ko.bindingHandlers['enable'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value && element.disabled)
            element.removeAttribute("disabled");
        else if ((!value) && (!element.disabled))
            element.disabled = true;
    }
};

ko.bindingHandlers['disable'] = {
    'update': function (element, valueAccessor) {
        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
    }
};
// For certain common events (currently just 'click'), allow a simplified data-binding syntax
// e.g. click:handler instead of the usual full-length event:{click:handler}
function makeEventHandlerShortcut(eventName) {
    ko.bindingHandlers[eventName] = {
        'init': function(element, valueAccessor, allBindingsAccessor, viewModel) {
            var newValueAccessor = function () {
                var result = {};
                result[eventName] = valueAccessor();
                return result;
            };
            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindingsAccessor, viewModel);
        }
    }
}

ko.bindingHandlers['event'] = {
    'init' : function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var eventsToHandle = valueAccessor() || {};
        for(var eventNameOutsideClosure in eventsToHandle) {
            (function() {
                var eventName = eventNameOutsideClosure; // Separate variable to be captured by event handler closure
                if (typeof eventName == "string") {
                    ko.utils.registerEventHandler(element, eventName, function (event) {
                        var handlerReturnValue;
                        var handlerFunction = valueAccessor()[eventName];
                        if (!handlerFunction)
                            return;
                        var allBindings = allBindingsAccessor();

                        try {
                            // Take all the event args, and prefix with the viewmodel
                            var argsForHandler = ko.utils.makeArray(arguments);
                            argsForHandler.unshift(viewModel);
                            handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                        } finally {
                            if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                                if (event.preventDefault)
                                    event.preventDefault();
                                else
                                    event.returnValue = false;
                            }
                        }

                        var bubble = allBindings[eventName + 'Bubble'] !== false;
                        if (!bubble) {
                            event.cancelBubble = true;
                            if (event.stopPropagation)
                                event.stopPropagation();
                        }
                    });
                }
            })();
        }
    }
};
// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
ko.bindingHandlers['foreach'] = {
    makeTemplateValueAccessor: function(valueAccessor) {
        return function() {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)
            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
            ko.utils.unwrapObservable(modelValue);
            return {
                'foreach': unwrappedValue['data'],
                'as': unwrappedValue['as'],
                'includeDestroyed': unwrappedValue['includeDestroyed'],
                'afterAdd': unwrappedValue['afterAdd'],
                'beforeRemove': unwrappedValue['beforeRemove'],
                'afterRender': unwrappedValue['afterRender'],
                'beforeMove': unwrappedValue['beforeMove'],
                'afterMove': unwrappedValue['afterMove'],
                'templateEngine': ko.nativeTemplateEngine.instance
            };
        };
    },
    'init': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
    },
    'update': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindingsAccessor, viewModel, bindingContext);
    }
};
ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['foreach'] = true;
var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
ko.bindingHandlers['hasfocus'] = {
    'init': function(element, valueAccessor, allBindingsAccessor) {
        var handleElementFocusChange = function(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;
            if ("activeElement" in ownerDoc) {
                isFocused = (ownerDoc.activeElement === element);
            }
            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'hasfocus', isFocused, true);
            element[hasfocusUpdatingProperty] = false;
        };
        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
    },
    'update': function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (!element[hasfocusUpdatingProperty]) {
            value ? element.focus() : element.blur();
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]); // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
        }
    }
};
ko.bindingHandlers['html'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};
var withIfDomDataKey = '__ko_withIfBindingData';
// Makes a binding like with or if
function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
    ko.bindingHandlers[bindingKey] = {
        'init': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ko.utils.domData.set(element, withIfDomDataKey, {});
            return { 'controlsDescendantBindings': true };
        },
        'update': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var withIfData = ko.utils.domData.get(element, withIfDomDataKey),
                dataValue = ko.utils.unwrapObservable(valueAccessor()),
                shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
                isFirstRender = !withIfData.savedNodes,
                needsRefresh = isFirstRender || isWith || (shouldDisplay !== withIfData.didDisplayOnLastUpdate);

            if (needsRefresh) {
                if (isFirstRender) {
                    withIfData.savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                }

                if (shouldDisplay) {
                    if (!isFirstRender) {
                        ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(withIfData.savedNodes));
                    }
                    ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                } else {
                    ko.virtualElements.emptyNode(element);
                }

                withIfData.didDisplayOnLastUpdate = shouldDisplay;
            }
        }
    };
    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
    ko.virtualElements.allowedBindings[bindingKey] = true;
}

// Construct the actual binding handlers
makeWithIfBinding('if');
makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
makeWithIfBinding('with', true /* isWith */, false /* isNot */,
    function(bindingContext, dataValue) {
        return bindingContext['createChildContext'](dataValue);
    }
);
function ensureDropdownSelectionIsConsistentWithModelValue(element, modelValue, preferModelValue) {
    if (preferModelValue) {
        if (modelValue !== ko.selectExtensions.readValue(element))
            ko.selectExtensions.writeValue(element, modelValue);
    }

    // No matter which direction we're syncing in, we want the end result to be equality between dropdown value and model value.
    // If they aren't equal, either we prefer the dropdown value, or the model value couldn't be represented, so either way,
    // change the model value to match the dropdown.
    if (modelValue !== ko.selectExtensions.readValue(element))
        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
};

ko.bindingHandlers['options'] = {
    'update': function (element, valueAccessor, allBindingsAccessor) {
        if (ko.utils.tagNameLower(element) !== "select")
            throw new Error("options binding applies only to SELECT elements");

        var selectWasPreviouslyEmpty = element.length == 0;
        var previousSelectedValues = ko.utils.arrayMap(ko.utils.arrayFilter(element.childNodes, function (node) {
            return node.tagName && (ko.utils.tagNameLower(node) === "option") && node.selected;
        }), function (node) {
            return ko.selectExtensions.readValue(node) || node.innerText || node.textContent;
        });
        var previousScrollTop = element.scrollTop;

        var value = ko.utils.unwrapObservable(valueAccessor());
        var selectedValue = element.value;

        // Remove all existing <option>s.
        // Need to use .remove() rather than .removeChild() for <option>s otherwise IE behaves oddly (https://github.com/SteveSanderson/knockout/issues/134)
        while (element.length > 0) {
            ko.cleanNode(element.options[0]);
            element.remove(0);
        }

        if (value) {
            var allBindings = allBindingsAccessor(),
                includeDestroyed = allBindings['optionsIncludeDestroyed'];

            if (typeof value.length != "number")
                value = [value];
            if (allBindings['optionsCaption']) {
                var option = document.createElement("option");
                ko.utils.setHtml(option, allBindings['optionsCaption']);
                ko.selectExtensions.writeValue(option, undefined);
                element.appendChild(option);
            }

            for (var i = 0, j = value.length; i < j; i++) {
                // Skip destroyed items
                var arrayEntry = value[i];
                if (arrayEntry && arrayEntry['_destroy'] && !includeDestroyed)
                    continue;

                var option = document.createElement("option");

                function applyToObject(object, predicate, defaultValue) {
                    var predicateType = typeof predicate;
                    if (predicateType == "function")    // Given a function; run it against the data value
                        return predicate(object);
                    else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                        return object[predicate];
                    else                                // Given no optionsText arg; use the data value itself
                        return defaultValue;
                }

                // Apply a value to the option element
                var optionValue = applyToObject(arrayEntry, allBindings['optionsValue'], arrayEntry);
                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                // Apply some text to the option element
                var optionText = applyToObject(arrayEntry, allBindings['optionsText'], optionValue);
                ko.utils.setTextContent(option, optionText);

                element.appendChild(option);
            }

            // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
            // That's why we first added them without selection. Now it's time to set the selection.
            var newOptions = element.getElementsByTagName("option");
            var countSelectionsRetained = 0;
            for (var i = 0, j = newOptions.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[i])) >= 0) {
                    ko.utils.setOptionNodeSelectionState(newOptions[i], true);
                    countSelectionsRetained++;
                }
            }

            element.scrollTop = previousScrollTop;

            if (selectWasPreviouslyEmpty && ('value' in allBindings)) {
                // Ensure consistency between model value and selected option.
                // If the dropdown is being populated for the first time here (or was otherwise previously empty),
                // the dropdown selection state is meaningless, so we preserve the model value.
                ensureDropdownSelectionIsConsistentWithModelValue(element, ko.utils.peekObservable(allBindings['value']), /* preferModelValue */ true);
            }

            // Workaround for IE9 bug
            ko.utils.ensureSelectElementIsRenderedCorrectly(element);
        }
    }
};
ko.bindingHandlers['options'].optionValueDomDataKey = '__ko.optionValueDomData__';
ko.bindingHandlers['selectedOptions'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(), valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindingsAccessor, 'value', valueToWrite);
        });
    },
    'update': function (element, valueAccessor) {
        if (ko.utils.tagNameLower(element) != "select")
            throw new Error("values binding applies only to SELECT elements");

        var newValue = ko.utils.unwrapObservable(valueAccessor());
        if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                ko.utils.setOptionNodeSelectionState(node, isSelected);
            });
        }
    }
};
ko.bindingHandlers['style'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor() || {});
        for (var styleName in value) {
            if (typeof styleName == "string") {
                var styleValue = ko.utils.unwrapObservable(value[styleName]);
                element.style[styleName] = styleValue || ""; // Empty string removes the value, whereas null/undefined have no effect
            }
        }
    }
};
ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindingsAccessor, viewModel) {
        if (typeof valueAccessor() != "function")
            throw new Error("The value for a submit binding must be a function");
        ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();
            try { handlerReturnValue = value.call(viewModel, element); }
            finally {
                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
        });
    }
};
ko.bindingHandlers['text'] = {
    'update': function (element, valueAccessor) {
        ko.utils.setTextContent(element, valueAccessor());
    }
};
ko.virtualElements.allowedBindings['text'] = true;
ko.bindingHandlers['uniqueName'] = {
    'init': function (element, valueAccessor) {
        if (valueAccessor()) {
            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
            ko.utils.setElementName(element, name);
        }
    }
};
ko.bindingHandlers['uniqueName'].currentIndex = 0;
ko.bindingHandlers['value'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        // Always catch "change" event; possibly other events too if asked
        var eventsToCatch = ["change"];
        var requestedEventsToCatch = allBindingsAccessor()["valueUpdate"];
        var propertyChangedFired = false;
        if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
        }

        var valueUpdateHandler = function() {
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'value', elementValue);
        }

        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
            ko.utils.registerEventHandler(element, "blur", function() {
                if (propertyChangedFired) {
                    valueUpdateHandler();
                }
            });
        }

        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;
            if (ko.utils.stringStartsWith(eventName, "after")) {
                handler = function() { setTimeout(valueUpdateHandler, 0) };
                eventName = eventName.substring("after".length);
            }
            ko.utils.registerEventHandler(element, eventName, handler);
        });
    },
    'update': function (element, valueAccessor) {
        var valueIsSelectOption = ko.utils.tagNameLower(element) === "select";
        var newValue = ko.utils.unwrapObservable(valueAccessor());
        var elementValue = ko.selectExtensions.readValue(element);
        var valueHasChanged = (newValue != elementValue);

        // JavaScript's 0 == "" behavious is unfortunate here as it prevents writing 0 to an empty text box (loose equality suggests the values are the same).
        // We don't want to do a strict equality comparison as that is more confusing for developers in certain cases, so we specifically special case 0 != "" here.
        if ((newValue === 0) && (elementValue !== 0) && (elementValue !== "0"))
            valueHasChanged = true;

        if (valueHasChanged) {
            var applyValueAction = function () { ko.selectExtensions.writeValue(element, newValue); };
            applyValueAction();

            // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
            // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
            // to apply the value as well.
            var alsoApplyAsynchronously = valueIsSelectOption;
            if (alsoApplyAsynchronously)
                setTimeout(applyValueAction, 0);
        }

        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
        // because you're not allowed to have a model value that disagrees with a visible UI selection.
        if (valueIsSelectOption && (element.length > 0))
            ensureDropdownSelectionIsConsistentWithModelValue(element, newValue, /* preferModelValue */ false);
    }
};
ko.bindingHandlers['visible'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");
        if (value && !isCurrentlyVisible)
            element.style.display = "";
        else if ((!value) && isCurrentlyVisible)
            element.style.display = "none";
    }
};
// 'click' is just a shorthand for the usual full-length event:{click:handler}
makeEventHandlerShortcut('click');
// If you want to make a custom template engine,
//
// [1] Inherit from this class (like ko.nativeTemplateEngine does)
// [2] Override 'renderTemplateSource', supplying a function with this signature:
//
//        function (templateSource, bindingContext, options) {
//            // - templateSource.text() is the text of the template you should render
//            // - bindingContext.$data is the data you should pass into the template
//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
//            //     and bindingContext.$root available in the template too
//            // - options gives you access to any other properties set on "data-bind: { template: options }"
//            //
//            // Return value: an array of DOM nodes
//        }
//
// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
//
//        function (script) {
//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
//        }
//
//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

ko.templateEngine = function () { };

ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    throw new Error("Override renderTemplateSource");
};

ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
    throw new Error("Override createJavaScriptEvaluatorBlock");
};

ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem)
            throw new Error("Cannot find template with ID " + template);
        return new ko.templateSources.domElement(elem);
    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
        // Anonymous template
        return new ko.templateSources.anonymousTemplate(template);
    } else
        throw new Error("Unknown template type: " + template);
};

ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    return this['renderTemplateSource'](templateSource, bindingContext, options);
};

ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
    // Skip rewriting if requested
    if (this['allowTemplateRewriting'] === false)
        return true;
    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
};

ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    var rewritten = rewriterCallback(templateSource['text']());
    templateSource['text'](rewritten);
    templateSource['data']("isRewritten", true);
};

ko.exportSymbol('templateEngine', ko.templateEngine);

ko.templateRewriting = (function () {
    var memoizeDataBindingAttributeSyntaxRegex = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi;
    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

    function validateDataBindValuesForRewriting(keyValueArray) {
        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
        for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];
            if (allValidators.hasOwnProperty(key)) {
                var validator = allValidators[key];

                if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                        throw new Error(possibleErrorMessage);
                } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                }
            }
        }
    }

    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, templateEngine) {
        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
        validateDataBindValuesForRewriting(dataBindKeyValueArray);
        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray);

        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
        // extra indirection.
        var applyBindingsToNextSiblingScript =
            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()})";
        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
    }

    return {
        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                }, templateDocument);
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[6], /* tagToRetain: */ arguments[1], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", templateEngine);
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
                if (domNode.nextSibling)
                    ko.applyBindingsToNode(domNode.nextSibling, bindings, bindingContext);
            });
        }
    }
})();


// Exported only because it has to be referenced by string lookup from within rewritten template
ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
(function() {
    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
    //
    // Two are provided by default:
    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
    //                                           without reading/writing the actual element text content, since it will be overwritten
    //                                           with the rendered template output.
    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
    // Template sources need to have the following functions:
    //   text() 			- returns the template text from your storage location
    //   text(value)		- writes the supplied template text to your storage location
    //   data(key)			- reads values stored using data(key, value) - see below
    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
    //
    // Optionally, template sources can also have the following functions:
    //   nodes()            - returns a DOM element containing the nodes of this template, where available
    //   nodes(value)       - writes the given DOM element to your storage location
    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
    //
    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

    ko.templateSources = {};

    // ---- ko.templateSources.domElement -----

    ko.templateSources.domElement = function(element) {
        this.domElement = element;
    }

    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
        var tagNameLower = ko.utils.tagNameLower(this.domElement),
            elemContentsProperty = tagNameLower === "script" ? "text"
                                 : tagNameLower === "textarea" ? "value"
                                 : "innerHTML";

        if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
        } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML")
                ko.utils.setHtml(this.domElement, valueToWrite);
            else
                this.domElement[elemContentsProperty] = valueToWrite;
        }
    };

    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
        if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, "templateSourceData_" + key);
        } else {
            ko.utils.domData.set(this.domElement, "templateSourceData_" + key, arguments[1]);
        }
    };

    // ---- ko.templateSources.anonymousTemplate -----
    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

    var anonymousTemplatesDomDataKey = "__ko_anon_template__";
    ko.templateSources.anonymousTemplate = function(element) {
        this.domElement = element;
    }
    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            if (templateData.textData === undefined && templateData.containerData)
                templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {textData: valueToWrite});
        }
    };
    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            return templateData.containerData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {containerData: valueToWrite});
        }
    };

    ko.exportSymbol('templateSources', ko.templateSources);
    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
})();
(function () {
    var _templateEngine;
    ko.setTemplateEngine = function (templateEngine) {
        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
            throw new Error("templateEngine must inherit from ko.templateEngine");
        _templateEngine = templateEngine;
    }

    function invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, action) {
        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            if (node.nodeType === 1 || node.nodeType === 8)
                action(node);
        }
    }

    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

        if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0], lastNode = continuousNodeArray[continuousNodeArray.length - 1];

            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes
            invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, function(node) {
                ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, function(node) {
                ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            });
        }
    }

    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
                                        : null;
    }

    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
        options = options || {};
        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
        var templateDocument = firstTargetNode && firstTargetNode.ownerDocument;
        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

        // Loosely check result is an array of DOM nodes
        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
            throw new Error("Template engine must return an array of DOM nodes");

        var haveAddedNodesToParent = false;
        switch (renderMode) {
            case "replaceChildren":
                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "replaceNode":
                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "ignoreTargetNode": break;
            default:
                throw new Error("Unknown renderMode: " + renderMode);
        }

        if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender'])
                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
        }

        return renderedNodesArray;
    }

    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
        options = options || {};
        if ((options['templateEngine'] || _templateEngine) == undefined)
            throw new Error("Set a template engine before calling renderTemplate");
        renderMode = renderMode || "replaceChildren";

        if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                function () {
                    // Ensure we've got a proper binding context to work with
                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
                        ? dataOrBindingContext
                        : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));

                    // Support selecting template as a function of the data being rendered
                    var templateName = typeof(template) == 'function' ? template(bindingContext['$data'], bindingContext) : template;

                    var renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);
                    if (renderMode == "replaceNode") {
                        targetNodeOrNodeArray = renderedNodesArray;
                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    }
                },
                null,
                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
            );
        } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
        }
    };

    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
        var arrayItemContext;

        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
        var executeTemplateForArrayItem = function (arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](ko.utils.unwrapObservable(arrayValue), options['as']);
            arrayItemContext['$index'] = index;
            var templateName = typeof(template) == 'function' ? template(arrayValue, arrayItemContext) : template;
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
        }

        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender'])
                options['afterRender'](addedNodesArray, arrayValue);
        };

        return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

        }, null, { disposeWhenNodeIsRemoved: targetNode });
    };

    var templateComputedDomDataKey = '__ko__templateComputedDomDataKey__';
    function disposeOldComputedAndStoreNewOne(element, newComputed) {
        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
            oldComputed.dispose();
        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
    }

    ko.bindingHandlers['template'] = {
        'init': function(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
            if ((typeof bindingValue != "string") && (!bindingValue['name']) && (element.nodeType == 1 || element.nodeType == 8)) {
                // It's an anonymous template - store the element contents, then clear the element
                var templateNodes = element.nodeType == 1 ? element.childNodes : ko.virtualElements.childNodes(element),
                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }
            return { 'controlsDescendantBindings': true };
        },
        'update': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var templateName = ko.utils.unwrapObservable(valueAccessor()),
                options = {},
                shouldDisplay = true,
                dataValue,
                templateComputed = null;

            if (typeof templateName != "string") {
                options = templateName;
                templateName = options['name'];

                // Support "if"/"ifnot" conditions
                if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);

                dataValue = ko.utils.unwrapObservable(options['data']);
            }

            if ('foreach' in options) {
                // Render once for each data point (treating data set as empty if shouldDisplay==false)
                var dataArray = (shouldDisplay && options['foreach']) || [];
                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
                ko.virtualElements.emptyNode(element);
            } else {
                // Render once for this single data point (or use the viewModel if no data was provided)
                var innerBindingContext = ('data' in options) ?
                    bindingContext['createChildContext'](dataValue, options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            }

            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
            disposeOldComputedAndStoreNewOne(element, templateComputed);
        }
    };

    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
            return null; // Named templates can be rewritten, so return "no error"
        return "This template engine does not support anonymous templates nested within its templates";
    };

    ko.virtualElements.allowedBindings['template'] = true;
})();

ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
ko.exportSymbol('renderTemplate', ko.renderTemplate);

ko.utils.compareArrays = (function () {
    var statusNotInOld = 'added', statusNotInNew = 'deleted';

    // Simple calculation based on Levenshtein distance.
    function compareArrays(oldArray, newArray, dontLimitMoves) {
        oldArray = oldArray || [];
        newArray = newArray || [];

        if (oldArray.length <= newArray.length)
            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, dontLimitMoves);
        else
            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, dontLimitMoves);
    }

    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, dontLimitMoves) {
        var myMin = Math.min,
            myMax = Math.max,
            editDistanceMatrix = [],
            smlIndex, smlIndexMax = smlArray.length,
            bigIndex, bigIndexMax = bigArray.length,
            compareRange = (bigIndexMax - smlIndexMax) || 1,
            maxDistance = smlIndexMax + bigIndexMax + 1,
            thisRow, lastRow,
            bigIndexMaxForRow, bigIndexMinForRow;

        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);
            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                else if (!smlIndex)  // Top row - transform empty array into new array via additions
                    thisRow[bigIndex] = bigIndex + 1;
                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
                else {
                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
        }

        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
                notInSml.push(editScript[editScript.length] = {     // added
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                notInBig.push(editScript[editScript.length] = {     // deleted
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex });
            } else {
                editScript.push({
                    'status': "retained",
                    'value': bigArray[--bigIndex] });
                --smlIndex;
            }
        }

        if (notInSml.length && notInBig.length) {
            // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
            // smlIndexMax keeps the time complexity of this algorithm linear.
            var limitFailedCompares = smlIndexMax * 10, failedCompares,
                a, d, notInSmlItem, notInBigItem;
            // Go through the items that have been added and deleted and try to find matches between them.
            for (failedCompares = a = 0; (dontLimitMoves || failedCompares < limitFailedCompares) && (notInSmlItem = notInSml[a]); a++) {
                for (d = 0; notInBigItem = notInBig[d]; d++) {
                    if (notInSmlItem['value'] === notInBigItem['value']) {
                        notInSmlItem['moved'] = notInBigItem['index'];
                        notInBigItem['moved'] = notInSmlItem['index'];
                        notInBig.splice(d,1);       // This item is marked as moved; so remove it from notInBig list
                        failedCompares = d = 0;     // Reset failed compares count because we're checking for consecutive failures
                        break;
                    }
                }
                failedCompares += d;
            }
        }
        return editScript.reverse();
    }

    return compareArrays;
})();

ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);

(function () {
    // Objective:
    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
    //   previously mapped - retain those nodes, and just insert/delete other ones

    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
    // You can use this, for example, to activate bindings on those nodes.

    function fixUpNodesToBeMovedOrRemoved(contiguousNodeArray) {
        // Before moving, deleting, or replacing a set of nodes that were previously outputted by the "map" function, we have to reconcile
        // them against what is in the DOM right now. It may be that some of the nodes have already been removed from the document,
        // or that new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
        // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
        // So, this function translates the old "map" output array into its best guess of what set of current DOM nodes should be removed.
        //
        // Rules:
        //   [A] Any leading nodes that aren't in the document any more should be ignored
        //       These most likely correspond to memoization nodes that were already removed during binding
        //       See https://github.com/SteveSanderson/knockout/pull/440
        //   [B] We want to output a contiguous series of nodes that are still in the document. So, ignore any nodes that
        //       have already been removed, and include any nodes that have been inserted among the previous collection

        // Rule [A]
        while (contiguousNodeArray.length && !ko.utils.domNodeIsAttachedToDocument(contiguousNodeArray[0]))
            contiguousNodeArray.splice(0, 1);

        // Rule [B]
        if (contiguousNodeArray.length > 1) {
            // Build up the actual new contiguous node set
            var current = contiguousNodeArray[0], last = contiguousNodeArray[contiguousNodeArray.length - 1], newContiguousSet = [current];
            while (current !== last) {
                current = current.nextSibling;
                if (!current) // Won't happen, except if the developer has manually removed some DOM elements (then we're in an undefined scenario)
                    return;
                newContiguousSet.push(current);
            }

            // ... then mutate the input array to match this.
            // (The following line replaces the contents of contiguousNodeArray with newContiguousSet)
            Array.prototype.splice.apply(contiguousNodeArray, [0, contiguousNodeArray.length].concat(newContiguousSet));
        }
        return contiguousNodeArray;
    }

    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
        // Map this array value inside a dependentObservable so we re-map when any dependency changes
        var mappedNodes = [];
        var dependentObservable = ko.dependentObservable(function() {
            var newMappedNodes = mapping(valueToMap, index) || [];

            // On subsequent evaluations, just replace the previously-inserted DOM nodes
            if (mappedNodes.length > 0) {
                ko.utils.replaceDomNodes(fixUpNodesToBeMovedOrRemoved(mappedNodes), newMappedNodes);
                if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            }

            // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed
            mappedNodes.splice(0, mappedNodes.length);
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return (mappedNodes.length == 0) || !ko.utils.domNodeIsAttachedToDocument(mappedNodes[0]) } });
        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
    }

    var lastMappingResultDomDataKey = "setDomNodeChildrenFromArrayMapping_lastMappingResult";

    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
        // Compare the provided array against the previous one
        array = array || [];
        options = options || {};
        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
        var editScript = ko.utils.compareArrays(lastArray, array);

        // Build the new mapping result
        var newMappingResult = [];
        var lastMappingResultIndex = 0;
        var newMappingResultIndex = 0;

        var nodesToDelete = [];
        var itemsToProcess = [];
        var itemsForBeforeRemoveCallbacks = [];
        var itemsForMoveCallbacks = [];
        var itemsForAfterAddCallbacks = [];
        var mapData;

        function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition)
                itemsForMoveCallbacks[editScriptIndex] = mapData;
            // Since updating the index might change the nodes, do so before calling fixUpNodesToBeMovedOrRemoved
            mapData.indexObservable(newMappingResultIndex++);
            fixUpNodesToBeMovedOrRemoved(mapData.mappedNodes);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
        }

        function callCallback(callback, items) {
            if (callback) {
                for (var i = 0, n = items.length; i < n; i++) {
                    if (items[i]) {
                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                            callback(node, i, items[i].arrayEntry);
                        });
                    }
                }
            }
        }

        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];
            switch (editScriptItem['status']) {
                case "deleted":
                    if (movedIndex === undefined) {
                        mapData = lastMappingResult[lastMappingResultIndex];

                        // Stop tracking changes to the mapping for these nodes
                        if (mapData.dependentObservable)
                            mapData.dependentObservable.dispose();

                        // Queue these nodes for later removal
                        nodesToDelete.push.apply(nodesToDelete, fixUpNodesToBeMovedOrRemoved(mapData.mappedNodes));
                        if (options['beforeRemove']) {
                            itemsForBeforeRemoveCallbacks[i] = mapData;
                            itemsToProcess.push(mapData);
                        }
                    }
                    lastMappingResultIndex++;
                    break;

                case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;

                case "added":
                    if (movedIndex !== undefined) {
                        itemMovedOrRetained(i, movedIndex);
                    } else {
                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                        if (!isFirstExecution)
                            itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
            }
        }

        // Call beforeMove first before any changes have been made to the DOM
        callCallback(options['beforeMove'], itemsForMoveCallbacks);

        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes)
                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

            // Put nodes in the right place if they aren't there already
            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
            }

            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
            if (!mapData.initialized && callbackAfterAddingNodes) {
                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                mapData.initialized = true;
            }
        }

        // If there's a beforeRemove callback, call it after reordering.
        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
        // Perhaps we'll make that change in the future if this scenario becomes more common.
        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

        // Finally call afterMove and afterAdd callbacks
        callCallback(options['afterMove'], itemsForMoveCallbacks);
        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);

        // Store a copy of the array items we just considered so we can difference it next time
        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
    }
})();

ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
ko.nativeTemplateEngine = function () {
    this['allowTemplateRewriting'] = false;
}

ko.nativeTemplateEngine.prototype = new ko.templateEngine();
ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

    if (templateNodes) {
        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
    } else {
        var templateText = templateSource['text']();
        return ko.utils.parseHtmlFragment(templateText);
    }
};

ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
(function() {
    ko.jqueryTmplTemplateEngine = function () {
        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
        // doesn't expose a version number, so we have to infer it.
        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
        // which KO internally refers to as version "2", so older versions are no longer detected.
        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
            if ((typeof(jQuery) == "undefined") || !(jQuery['tmpl']))
                return 0;
            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
            try {
                if (jQuery['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
                    return 2; // Final version of jquery.tmpl
                }
            } catch(ex) { /* Apparently not the version we were looking for */ }

            return 1; // Any older version that we don't support
        })();

        function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2)
                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
        }

        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQuery['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
        }

        this['renderTemplateSource'] = function(templateSource, bindingContext, options) {
            options = options || {};
            ensureHasReferencedJQueryTemplates();

            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
            var precompiled = templateSource['data']('precompiled');
            if (!precompiled) {
                var templateText = templateSource['text']() || "";
                // Wrap in "with($whatever.koBindingContext) { ... }"
                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                precompiled = jQuery['template'](null, templateText);
                templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
            var jQueryTemplateOptions = jQuery['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](document.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQuery['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
            return resultNodes;
        };

        this['createJavaScriptEvaluatorBlock'] = function(script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
        };

        this['addTemplate'] = function(templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "</script>");
        };

        if (jQueryTmplVersion > 0) {
            jQuery['tmpl']['tag']['ko_code'] = {
                open: "__.push($1 || '');"
            };
            jQuery['tmpl']['tag']['ko_with'] = {
                open: "with($1) {",
                close: "} "
            };
        }
    };

    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();

    // Use this one by default *only if jquery.tmpl is referenced*
    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
})();
});
})(window,document,navigator,window["jQuery"]);
})();

})()
},{}],2:[function(require,module,exports){
var ko = require('knockout-client'),
	datejs = require('datejs');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfs) {
	this.wtfCount = ko.observable(wtfs);
	ko.computed(function() {
		localStorage.setItem('wtfs', this.wtfCount());
		localStorage.setItem('lastWtf', new Date());
	}, this).extend({throttle: 1});
	this.lastWtf = ko.computed(function() {
		var c = this.wtfCount();
		if (!c)
			return "never";
		return new Date().toString('yyyy-MM-dd HH:mm:ss');
	}, this);
}

ViewModel.prototype.wtf = function() {
	var currentWtfs = this.wtfCount();
	this.wtfCount(currentWtfs + 1);
}

ViewModel.prototype.reset = function() {
	this.wtfCount(0);
}

var storedVal = localStorage.getItem('wtfs');
var wtfs = parseInt(storedVal) || 0;
var vm = new ViewModel(wtfs);

module.exports = vm;

},{"knockout-client":3,"datejs":4,"knockout-mapping":5}],6:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],4:[function(require,module,exports){
(function(process){/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

})(require("__browserify_process"))
},{"__browserify_process":6}],5:[function(require,module,exports){
(function(){/// Knockout Mapping plugin v2.3.2
/// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout-client"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko, ko.mapping = {});
	}
}(function (ko, exports) {
	var DEBUG=true;
	var mappingProperty = "__ko_mapping__";
	var realKoDependentObservable = ko.dependentObservable;
	var mappingNesting = 0;
	var dependentObservables;
	var visitedObjects;
	var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
	var emptyReturn = {};

	var _defaultOptions = {
		include: ["_destroy"],
		ignore: [],
		copy: []
	};
	var defaultOptions = _defaultOptions;

	// Author: KennyTM @ StackOverflow
	function unionArrays (x, y) {
		var obj = {};
		for (var i = x.length - 1; i >= 0; -- i) obj[x[i]] = x[i];
		for (var i = y.length - 1; i >= 0; -- i) obj[y[i]] = y[i];
		var res = [];

		for (var k in obj) {
			res.push(obj[k]);
		};

		return res;
	}

	function extendObject(destination, source) {
		for (var key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				if (key && destination[key] && !(exports.getType(destination[key]) === "array")) {
					extendObject(destination[key], source[key]);
				} else {
					var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
					if (bothArrays) {
						destination[key] = unionArrays(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}

	function merge(obj1, obj2) {
		var merged = {};
		extendObject(merged, obj1);
		extendObject(merged, obj2);

		return merged;
	}

	exports.isMapped = function (viewModel) {
		var unwrapped = ko.utils.unwrapObservable(viewModel);
		return unwrapped && unwrapped[mappingProperty];
	}

	exports.fromJS = function (jsObject /*, inputOptions, target*/ ) {
		if (arguments.length == 0) throw new Error("When calling ko.fromJS, pass the object you want to convert.");

		// When mapping is completed, even with an exception, reset the nesting level
		window.setTimeout(function () {
			mappingNesting = 0;
		}, 0);

		if (!mappingNesting++) {
			dependentObservables = [];
			visitedObjects = new objectLookup();
		}

		var options;
		var target;

		if (arguments.length == 2) {
			if (arguments[1][mappingProperty]) {
				target = arguments[1];
			} else {
				options = arguments[1];
			}
		}
		if (arguments.length == 3) {
			options = arguments[1];
			target = arguments[2];
		}

		if (target) {
			options = merge(options, target[mappingProperty]);
		}
		options = fillOptions(options);

		var result = updateViewModel(target, jsObject, options);
		if (target) {
			result = target;
		}

		// Evaluate any dependent observables that were proxied.
		// Do this in a timeout to defer execution. Basically, any user code that explicitly looks up the DO will perform the first evaluation. Otherwise,
		// it will be done by this code.
		if (!--mappingNesting) {
			window.setTimeout(function () {
				while (dependentObservables.length) {
					var DO = dependentObservables.pop();
					if (DO) DO();
				}
			}, 0);
		}

		// Save any new mapping options in the view model, so that updateFromJS can use them later.
		result[mappingProperty] = merge(result[mappingProperty], options);

		return result;
	};

	exports.fromJSON = function (jsonString /*, options, target*/ ) {
		var parsed = ko.utils.parseJson(jsonString);
		arguments[0] = parsed;
		return exports.fromJS.apply(this, arguments);
	};

	exports.updateFromJS = function (viewModel) {
		throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
	};

	exports.updateFromJSON = function (viewModel) {
		throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
	};

	exports.toJS = function (rootObject, options) {
		if (!defaultOptions) exports.resetDefaultOptions();

		if (arguments.length == 0) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
		if (exports.getType(defaultOptions.ignore) !== "array") throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
		if (exports.getType(defaultOptions.include) !== "array") throw new Error("ko.mapping.defaultOptions().include should be an array.");
		if (exports.getType(defaultOptions.copy) !== "array") throw new Error("ko.mapping.defaultOptions().copy should be an array.");

		// Merge in the options used in fromJS
		options = fillOptions(options, rootObject[mappingProperty]);

		// We just unwrap everything at every level in the object graph
		return exports.visitModel(rootObject, function (x) {
			return ko.utils.unwrapObservable(x)
		}, options);
	};

	exports.toJSON = function (rootObject, options) {
		var plainJavaScriptObject = exports.toJS(rootObject, options);
		return ko.utils.stringifyJson(plainJavaScriptObject);
	};

	exports.defaultOptions = function () {
		if (arguments.length > 0) {
			defaultOptions = arguments[0];
		} else {
			return defaultOptions;
		}
	};

	exports.resetDefaultOptions = function () {
		defaultOptions = {
			include: _defaultOptions.include.slice(0),
			ignore: _defaultOptions.ignore.slice(0),
			copy: _defaultOptions.copy.slice(0)
		};
	};

	exports.getType = function(x) {
		if ((x) && (typeof (x) === "object")) {
			if (x.constructor == (new Date).constructor) return "date";
			if (Object.prototype.toString.call(x) === "[object Array]") return "array";
		}
		return typeof x;
	}

	function fillOptions(rawOptions, otherOptions) {
		var options = merge({}, rawOptions);

		// Move recognized root-level properties into a root namespace
		for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
			var property = recognizedRootProperties[i];
			
			// Carry on, unless this property is present
			if (!options[property]) continue;
			
			// Move the property into the root namespace
			if (!(options[""] instanceof Object)) options[""] = {};
			options[""][property] = options[property];
			delete options[property];
		}

		if (otherOptions) {
			options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
			options.include = mergeArrays(otherOptions.include, options.include);
			options.copy = mergeArrays(otherOptions.copy, options.copy);
		}
		options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
		options.include = mergeArrays(options.include, defaultOptions.include);
		options.copy = mergeArrays(options.copy, defaultOptions.copy);

		options.mappedProperties = options.mappedProperties || {};
		return options;
	}

	function mergeArrays(a, b) {
		if (exports.getType(a) !== "array") {
			if (exports.getType(a) === "undefined") a = [];
			else a = [a];
		}
		if (exports.getType(b) !== "array") {
			if (exports.getType(b) === "undefined") b = [];
			else b = [b];
		}

		return ko.utils.arrayGetDistinctValues(a.concat(b));
	}

	// When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
	// The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
	function withProxyDependentObservable(dependentObservables, callback) {
		var localDO = ko.dependentObservable;
		ko.dependentObservable = function (read, owner, options) {
			options = options || {};

			if (read && typeof read == "object") { // mirrors condition in knockout implementation of DO's
				options = read;
			}

			var realDeferEvaluation = options.deferEvaluation;

			var isRemoved = false;

			// We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
			// completed if the user already evaluated the DO themselves in the meantime.
			var wrap = function (DO) {
				// Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
				var tmp = ko.dependentObservable;
				ko.dependentObservable = realKoDependentObservable;
				var isWriteable = ko.isWriteableObservable(DO);
				ko.dependentObservable = tmp;

				var wrapped = realKoDependentObservable({
					read: function () {
						if (!isRemoved) {
							ko.utils.arrayRemoveItem(dependentObservables, DO);
							isRemoved = true;
						}
						return DO.apply(DO, arguments);
					},
					write: isWriteable && function (val) {
						return DO(val);
					},
					deferEvaluation: true
				});
				if (DEBUG) wrapped._wrapper = true;
				return wrapped;
			};
			
			options.deferEvaluation = true; // will either set for just options, or both read/options.
			var realDependentObservable = new realKoDependentObservable(read, owner, options);

			if (!realDeferEvaluation) {
				realDependentObservable = wrap(realDependentObservable);
				dependentObservables.push(realDependentObservable);
			}

			return realDependentObservable;
		}
		ko.dependentObservable.fn = realKoDependentObservable.fn;
		ko.computed = ko.dependentObservable;
		var result = callback();
		ko.dependentObservable = localDO;
		ko.computed = ko.dependentObservable;
		return result;
	}

	function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
		var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";

		parentPropertyName = parentPropertyName || "";

		// If this object was already mapped previously, take the options from there and merge them with our existing ones.
		if (exports.isMapped(mappedRootObject)) {
			var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
			options = merge(previousMapping, options);
		}

		var callbackParams = {
			data: rootObject,
			parent: mappedParent
		};

		var hasCreateCallback = function () {
			return options[parentName] && options[parentName].create instanceof Function;
		};

		var createCallback = function (data) {
			return withProxyDependentObservable(dependentObservables, function () {
				
				if (ko.utils.unwrapObservable(parent) instanceof Array) {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent,
						skip: emptyReturn
					});
				} else {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent
					});
				}				
			});
		};

		var hasUpdateCallback = function () {
			return options[parentName] && options[parentName].update instanceof Function;
		};

		var updateCallback = function (obj, data) {
			var params = {
				data: data || callbackParams.data,
				parent: callbackParams.parent,
				target: ko.utils.unwrapObservable(obj)
			};

			if (ko.isWriteableObservable(obj)) {
				params.observable = obj;
			}

			return options[parentName].update(params);
		}

		var alreadyMapped = visitedObjects.get(rootObject);
		if (alreadyMapped) {
			return alreadyMapped;
		}

		parentName = parentName || "";

		if (!isArray) {
			// For atomic types, do a direct update on the observable
			if (!canHaveProperties(rootObject)) {
				switch (exports.getType(rootObject)) {
				case "function":
					if (hasUpdateCallback()) {
						if (ko.isWriteableObservable(rootObject)) {
							rootObject(updateCallback(rootObject));
							mappedRootObject = rootObject;
						} else {
							mappedRootObject = updateCallback(rootObject);
						}
					} else {
						mappedRootObject = rootObject;
					}
					break;
				default:
					if (ko.isWriteableObservable(mappedRootObject)) {
						if (hasUpdateCallback()) {
							var valueToWrite = updateCallback(mappedRootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						} else {
							var valueToWrite = ko.utils.unwrapObservable(rootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						}
					} else {
						if (hasCreateCallback()) {
							mappedRootObject = createCallback();
							return mappedRootObject;
						} else {
							mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
							return mappedRootObject;
						}

						if (hasUpdateCallback()) {
							mappedRootObject(updateCallback(mappedRootObject));
							return mappedRootObject;
						}
					}
				}

			} else {
				mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
				if (!mappedRootObject) {
					if (hasCreateCallback()) {
						var result = createCallback();

						if (hasUpdateCallback()) {
							result = updateCallback(result);
						}

						return result;
					} else {
						if (hasUpdateCallback()) {
							return updateCallback(result);
						}

						mappedRootObject = {};
					}
				}

				if (hasUpdateCallback()) {
					mappedRootObject = updateCallback(mappedRootObject);
				}

				visitedObjects.save(rootObject, mappedRootObject);
				if (hasUpdateCallback()) return mappedRootObject;

				// For non-atomic types, visit all properties and update recursively
				visitPropertiesOrArrayEntries(rootObject, function (indexer) {
					var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;

					if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
						return;
					}

					if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
						mappedRootObject[indexer] = rootObject[indexer];
						return;
					}

					// In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
					// If this is a property that was generated by fromJS, we should use the options specified there
					var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
					var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
					var value = prevMappedProperty || retval;

					if (ko.isWriteableObservable(mappedRootObject[indexer])) {
						mappedRootObject[indexer](ko.utils.unwrapObservable(value));
					} else {
						mappedRootObject[indexer] = value;
					}

					options.mappedProperties[fullPropertyName] = true;
				});
			}
		} else { //mappedRootObject is an array
			var changes = [];

			var hasKeyCallback = false;
			var keyCallback = function (x) {
				return x;
			}
			if (options[parentName] && options[parentName].key) {
				keyCallback = options[parentName].key;
				hasKeyCallback = true;
			}

			if (!ko.isObservable(mappedRootObject)) {
				// When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
				mappedRootObject = ko.observableArray([]);

				mappedRootObject.mappedRemove = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.remove(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedRemoveAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.remove(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedDestroy = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.destroy(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedDestroyAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.destroy(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedIndexOf = function (item) {
					var keys = filterArrayByKey(mappedRootObject(), keyCallback);
					var key = keyCallback(item);
					return ko.utils.arrayIndexOf(keys, key);
				}

				mappedRootObject.mappedCreate = function (value) {
					if (mappedRootObject.mappedIndexOf(value) !== -1) {
						throw new Error("There already is an object with the key that you specified.");
					}

					var item = hasCreateCallback() ? createCallback(value) : value;
					if (hasUpdateCallback()) {
						var newValue = updateCallback(item, value);
						if (ko.isWriteableObservable(item)) {
							item(newValue);
						} else {
							item = newValue;
						}
					}
					mappedRootObject.push(item);
					return item;
				}
			}

			var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
			var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
			if (hasKeyCallback) newArrayKeys.sort();
			var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);

			var ignoreIndexOf = {};
			
			var i, j;

			var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
			var itemsByKey = {};
			var optimizedKeys = true;
			for (i = 0, j = unwrappedRootObject.length; i < j; i++) {
				var key = keyCallback(unwrappedRootObject[i]);
				if (key === undefined || key instanceof Object) {
					optimizedKeys = false;
					break;
				}
				itemsByKey[key] = unwrappedRootObject[i];
			}

			var newContents = [];
			var passedOver = 0;
			for (i = 0, j = editScript.length; i < j; i++) {
				var key = editScript[i];
				var mappedItem;
				var fullPropertyName = parentPropertyName + "[" + i + "]";
				switch (key.status) {
				case "added":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
					if(!hasCreateCallback()) {
						mappedItem = ko.utils.unwrapObservable(mappedItem);
					}

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					
					if (mappedItem === emptyReturn) {
						passedOver++;
					} else {
						newContents[index - passedOver] = mappedItem;
					}
						
					ignoreIndexOf[index] = true;
					break;
				case "retained":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					newContents[index] = mappedItem;
					ignoreIndexOf[index] = true;
					break;
				case "deleted":
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					break;
				}

				changes.push({
					event: key.status,
					item: mappedItem
				});
			}

			mappedRootObject(newContents);

			if (options[parentName] && options[parentName].arrayChanged) {
				ko.utils.arrayForEach(changes, function (change) {
					options[parentName].arrayChanged(change.event, change.item);
				});
			}
		}

		return mappedRootObject;
	}

	function ignorableIndexOf(array, item, ignoreIndices) {
		for (var i = 0, j = array.length; i < j; i++) {
			if (ignoreIndices[i] === true) continue;
			if (array[i] === item) return i;
		}
		return null;
	}

	function mapKey(item, callback) {
		var mappedItem;
		if (callback) mappedItem = callback(item);
		if (exports.getType(mappedItem) === "undefined") mappedItem = item;

		return ko.utils.unwrapObservable(mappedItem);
	}

	function getItemByKey(array, key, callback) {
		array = ko.utils.unwrapObservable(array);
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
			if (mapKey(item, callback) === key) return item;
		}

		throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
	}

	function filterArrayByKey(array, callback) {
		return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function (item) {
			if (callback) {
				return mapKey(item, callback);
			} else {
				return item;
			}
		});
	}

	function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
		if (exports.getType(rootObject) === "array") {
			for (var i = 0; i < rootObject.length; i++)
			visitorCallback(i);
		} else {
			for (var propertyName in rootObject)
			visitorCallback(propertyName);
		}
	};

	function canHaveProperties(object) {
		var type = exports.getType(object);
		return ((type === "object") || (type === "array")) && (object !== null);
	}

	// Based on the parentName, this creates a fully classified name of a property

	function getPropertyName(parentName, parent, indexer) {
		var propertyName = parentName || "";
		if (exports.getType(parent) === "array") {
			if (parentName) {
				propertyName += "[" + indexer + "]";
			}
		} else {
			if (parentName) {
				propertyName += ".";
			}
			propertyName += indexer;
		}
		return propertyName;
	}

	exports.visitModel = function (rootObject, callback, options) {
		options = options || {};
		options.visitedObjects = options.visitedObjects || new objectLookup();

		var mappedRootObject;
		var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);

		if (!canHaveProperties(unwrappedRootObject)) {
			return callback(rootObject, options.parentName);
		} else {
			options = fillOptions(options, unwrappedRootObject[mappingProperty]);

			// Only do a callback, but ignore the results
			callback(rootObject, options.parentName);
			mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
		}

		options.visitedObjects.save(rootObject, mappedRootObject);

		var parentName = options.parentName;
		visitPropertiesOrArrayEntries(unwrappedRootObject, function (indexer) {
			if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1) return;

			var propertyValue = unwrappedRootObject[indexer];
			options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);

			// If we don't want to explicitly copy the unmapped property...
			if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
				// ...find out if it's a property we want to explicitly include
				if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
					// The mapped properties object contains all the properties that were part of the original object.
					// If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
					if (unwrappedRootObject[mappingProperty] && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer] && !(exports.getType(unwrappedRootObject) === "array")) {
						return;
					}
				}
			}

			var outputProperty;
			switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
			case "object":
			case "array":
			case "undefined":
				var previouslyMappedValue = options.visitedObjects.get(propertyValue);
				mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
				break;
			default:
				mappedRootObject[indexer] = callback(propertyValue, options.parentName);
			}
		});

		return mappedRootObject;
	}

	function simpleObjectLookup() {
		var keys = [];
		var values = [];
		this.save = function (key, value) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			if (existingIndex >= 0) values[existingIndex] = value;
			else {
				keys.push(key);
				values.push(value);
			}
		};
		this.get = function (key) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
			return value;
		};
	};
	
	function objectLookup() {
		var buckets = {};
		
		var findBucket = function(key) {
			var bucketKey;
			try {
				bucketKey = key;//JSON.stringify(key);
			}
			catch (e) {
				bucketKey = "$$$";
			}

			var bucket = buckets[bucketKey];
			if (bucket === undefined) {
				bucket = new simpleObjectLookup();
				buckets[bucketKey] = bucket;
			}
			return bucket;
		};
		
		this.save = function (key, value) {
			findBucket(key).save(key, value);
		};
		this.get = function (key) {
			return findBucket(key).get(key);
		};
	};
}));
})()
},{"knockout-client":7}],7:[function(require,module,exports){
// Knockout JavaScript library v2.1.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,document,navigator,undefined){
function m(w){throw w;}var n=void 0,p=!0,s=null,t=!1;function A(w){return function(){return w}};function E(w){function B(b,c,d){d&&c!==a.k.r(b)&&a.k.S(b,c);c!==a.k.r(b)&&a.a.va(b,"change")}var a="undefined"!==typeof w?w:{};a.b=function(b,c){for(var d=b.split("."),f=a,g=0;g<d.length-1;g++)f=f[d[g]];f[d[d.length-1]]=c};a.B=function(a,c,d){a[c]=d};a.version="2.1.0";a.b("version",a.version);a.a=new function(){function b(b,c){if("input"!==a.a.o(b)||!b.type||"click"!=c.toLowerCase())return t;var e=b.type;return"checkbox"==e||"radio"==e}var c=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},f={};d[/Firefox\/2/i.test(navigator.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");for(var g in d){var e=d[g];if(e.length)for(var h=0,j=e.length;h<j;h++)f[e[h]]=g}var k={propertychange:p},i=function(){for(var a=3,b=document.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);return 4<a?a:n}();return{Ca:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
v:function(a,b){for(var c=0,e=a.length;c<e;c++)b(a[c])},j:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,e=a.length;c<e;c++)if(a[c]===b)return c;return-1},ab:function(a,b,c){for(var e=0,f=a.length;e<f;e++)if(b.call(c,a[e]))return a[e];return s},ba:function(b,c){var e=a.a.j(b,c);0<=e&&b.splice(e,1)},za:function(b){for(var b=b||[],c=[],e=0,f=b.length;e<f;e++)0>a.a.j(c,b[e])&&c.push(b[e]);return c},T:function(a,b){for(var a=a||[],c=[],
e=0,f=a.length;e<f;e++)c.push(b(a[e]));return c},aa:function(a,b){for(var a=a||[],c=[],e=0,f=a.length;e<f;e++)b(a[e])&&c.push(a[e]);return c},N:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,e=b.length;c<e;c++)a.push(b[c]);return a},extend:function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},ga:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Ab:function(b){for(var b=a.a.L(b),c=document.createElement("div"),e=0,f=b.length;e<f;e++)a.F(b[e]),
c.appendChild(b[e]);return c},X:function(b,c){a.a.ga(b);if(c)for(var e=0,f=c.length;e<f;e++)b.appendChild(c[e])},Na:function(b,c){var e=b.nodeType?[b]:b;if(0<e.length){for(var f=e[0],d=f.parentNode,g=0,h=c.length;g<h;g++)d.insertBefore(c[g],f);g=0;for(h=e.length;g<h;g++)a.removeNode(e[g])}},Pa:function(a,b){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",b):a.selected=b},w:function(a){return(a||"").replace(c,"")},Ib:function(b,c){for(var e=[],f=(b||"").split(c),g=0,d=f.length;g<
d;g++){var h=a.a.w(f[g]);""!==h&&e.push(h)}return e},Hb:function(a,b){a=a||"";return b.length>a.length?t:a.substring(0,b.length)===b},eb:function(a,b){for(var c="return ("+a+")",e=0;e<b;e++)c="with(sc["+e+"]) { "+c+" } ";return new Function("sc",c)},kb:function(a,b){if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a!=s;){if(a==b)return p;a=a.parentNode}return t},fa:function(b){return a.a.kb(b,b.ownerDocument)},o:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},
n:function(a,c,e){var f=i&&k[c];if(!f&&"undefined"!=typeof jQuery){if(b(a,c))var g=e,e=function(a,b){var c=this.checked;b&&(this.checked=b.fb!==p);g.call(this,a);this.checked=c};jQuery(a).bind(c,e)}else!f&&"function"==typeof a.addEventListener?a.addEventListener(c,e,t):"undefined"!=typeof a.attachEvent?a.attachEvent("on"+c,function(b){e.call(a,b)}):m(Error("Browser doesn't support addEventListener or attachEvent"))},va:function(a,c){(!a||!a.nodeType)&&m(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var e=[];b(a,c)&&e.push({fb:a.checked});jQuery(a).trigger(c,e)}else"function"==typeof document.createEvent?"function"==typeof a.dispatchEvent?(e=document.createEvent(f[c]||"HTMLEvents"),e.initEvent(c,p,p,window,0,0,0,0,0,t,t,t,t,0,a),a.dispatchEvent(e)):m(Error("The supplied element doesn't support dispatchEvent")):"undefined"!=typeof a.fireEvent?(b(a,c)&&(a.checked=a.checked!==p),a.fireEvent("on"+c)):m(Error("Browser doesn't support triggering events"))},d:function(b){return a.la(b)?
b():b},Ua:function(b,c,e){var f=(b.className||"").split(/\s+/),g=0<=a.a.j(f,c);if(e&&!g)b.className+=(f[0]?" ":"")+c;else if(g&&!e){e="";for(g=0;g<f.length;g++)f[g]!=c&&(e+=f[g]+" ");b.className=a.a.w(e)}},Qa:function(b,c){var e=a.a.d(c);if(e===s||e===n)e="";"innerText"in b?b.innerText=e:b.textContent=e;9<=i&&(b.style.display=b.style.display)},lb:function(a){if(9<=i){var b=a.style.width;a.style.width=0;a.style.width=b}},Eb:function(b,e){for(var b=a.a.d(b),e=a.a.d(e),c=[],f=b;f<=e;f++)c.push(f);return c},
L:function(a){for(var b=[],e=0,c=a.length;e<c;e++)b.push(a[e]);return b},tb:6===i,ub:7===i,ja:i,Da:function(b,e){for(var c=a.a.L(b.getElementsByTagName("input")).concat(a.a.L(b.getElementsByTagName("textarea"))),f="string"==typeof e?function(a){return a.name===e}:function(a){return e.test(a.name)},g=[],d=c.length-1;0<=d;d--)f(c[d])&&g.push(c[d]);return g},Bb:function(b){return"string"==typeof b&&(b=a.a.w(b))?window.JSON&&window.JSON.parse?window.JSON.parse(b):(new Function("return "+b))():s},sa:function(b,
e,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&m(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(a.a.d(b),e,c)},Cb:function(b,e,c){var c=c||{},f=c.params||{},g=c.includeFields||this.Ca,d=b;if("object"==typeof b&&"form"===a.a.o(b))for(var d=b.action,h=g.length-1;0<=h;h--)for(var k=a.a.Da(b,g[h]),
j=k.length-1;0<=j;j--)f[k[j].name]=k[j].value;var e=a.a.d(e),i=document.createElement("form");i.style.display="none";i.action=d;i.method="post";for(var z in e)b=document.createElement("input"),b.name=z,b.value=a.a.sa(a.a.d(e[z])),i.appendChild(b);for(z in f)b=document.createElement("input"),b.name=z,b.value=f[z],i.appendChild(b);document.body.appendChild(i);c.submitter?c.submitter(i):i.submit();setTimeout(function(){i.parentNode.removeChild(i)},0)}}};a.b("utils",a.a);a.b("utils.arrayForEach",a.a.v);
a.b("utils.arrayFirst",a.a.ab);a.b("utils.arrayFilter",a.a.aa);a.b("utils.arrayGetDistinctValues",a.a.za);a.b("utils.arrayIndexOf",a.a.j);a.b("utils.arrayMap",a.a.T);a.b("utils.arrayPushAll",a.a.N);a.b("utils.arrayRemoveItem",a.a.ba);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Ca);a.b("utils.getFormFields",a.a.Da);a.b("utils.postJson",a.a.Cb);a.b("utils.parseJson",a.a.Bb);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.sa);a.b("utils.range",a.a.Eb);
a.b("utils.toggleDomNodeCssClass",a.a.Ua);a.b("utils.triggerEvent",a.a.va);a.b("utils.unwrapObservable",a.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={};return{get:function(b,c){var e=a.a.f.getAll(b,t);return e===n?n:e[c]},set:function(b,c,e){e===n&&a.a.f.getAll(b,
t)===n||(a.a.f.getAll(b,p)[c]=e)},getAll:function(a,g){var e=a[c];if(!(e&&"null"!==e)){if(!g)return;e=a[c]="ko"+b++;d[e]={}}return d[e]},clear:function(a){var b=a[c];b&&(delete d[b],a[c]=s)}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.G=new function(){function b(b,c){var f=a.a.f.get(b,d);f===n&&c&&(f=[],a.a.f.set(b,d,f));return f}function c(e){var f=b(e,t);if(f)for(var f=f.slice(0),d=0;d<f.length;d++)f[d](e);a.a.f.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&
jQuery.cleanData([e]);if(g[e.nodeType])for(f=e.firstChild;e=f;)f=e.nextSibling,8===e.nodeType&&c(e)}var d="__ko_domNodeDisposal__"+(new Date).getTime(),f={1:p,8:p,9:p},g={1:p,9:p};return{wa:function(a,c){"function"!=typeof c&&m(Error("Callback must be a function"));b(a,p).push(c)},Ma:function(c,f){var g=b(c,t);g&&(a.a.ba(g,f),0==g.length&&a.a.f.set(c,d,n))},F:function(b){if(f[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.N(d,b.getElementsByTagName("*"));for(var b=0,j=d.length;b<j;b++)c(d[b])}},
removeNode:function(b){a.F(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.F=a.a.G.F;a.removeNode=a.a.G.removeNode;a.b("cleanNode",a.F);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.G.wa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.G.Ma);(function(){a.a.pa=function(b){var c;if("undefined"!=typeof jQuery){if((c=jQuery.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&
b.parentNode.removeChild(b)}}else{var d=a.a.w(b).toLowerCase();c=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof window.innerShiv?c.appendChild(window.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.L(c.lastChild.childNodes)}return c};
a.a.Y=function(b,c){a.a.ga(b);if(c!==s&&c!==n)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof jQuery)jQuery(b).html(c);else for(var d=a.a.pa(c),f=0;f<d.length;f++)b.appendChild(d[f])}})();a.b("utils.parseHtmlFragment",a.a.pa);a.b("utils.setHtml",a.a.Y);a.s=function(){function b(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function c(b,g){if(b)if(8==b.nodeType){var e=a.s.Ja(b.nodeValue);e!=s&&g.push({jb:b,yb:e})}else if(1==b.nodeType)for(var e=0,d=b.childNodes,j=d.length;e<
j;e++)c(d[e],g)}var d={};return{na:function(a){"function"!=typeof a&&m(Error("You can only pass a function to ko.memoization.memoize()"));var c=b()+b();d[c]=a;return"<\!--[ko_memo:"+c+"]--\>"},Va:function(a,b){var c=d[a];c===n&&m(Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized."));try{return c.apply(s,b||[]),p}finally{delete d[a]}},Wa:function(b,d){var e=[];c(b,e);for(var h=0,j=e.length;h<j;h++){var k=e[h].jb,i=[k];d&&a.a.N(i,d);a.s.Va(e[h].yb,i);k.nodeValue="";k.parentNode&&
k.parentNode.removeChild(k)}},Ja:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:s}}}();a.b("memoization",a.s);a.b("memoization.memoize",a.s.na);a.b("memoization.unmemoize",a.s.Va);a.b("memoization.parseMemoText",a.s.Ja);a.b("memoization.unmemoizeDomNodeAndDescendants",a.s.Wa);a.Ba={throttle:function(b,c){b.throttleEvaluation=c;var d=s;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(b,c){b.equalityComparer="always"==c?A(t):a.m.fn.equalityComparer;
return b}};a.b("extenders",a.Ba);a.Sa=function(b,c,d){this.target=b;this.ca=c;this.ib=d;a.B(this,"dispose",this.A)};a.Sa.prototype.A=function(){this.sb=p;this.ib()};a.R=function(){this.u={};a.a.extend(this,a.R.fn);a.B(this,"subscribe",this.ta);a.B(this,"extend",this.extend);a.B(this,"getSubscriptionsCount",this.ob)};a.R.fn={ta:function(b,c,d){var d=d||"change",b=c?b.bind(c):b,f=new a.Sa(this,b,function(){a.a.ba(this.u[d],f)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(f);return f},notifySubscribers:function(b,
c){c=c||"change";this.u[c]&&a.a.v(this.u[c].slice(0),function(a){a&&a.sb!==p&&a.ca(b)})},ob:function(){var a=0,c;for(c in this.u)this.u.hasOwnProperty(c)&&(a+=this.u[c].length);return a},extend:function(b){var c=this;if(b)for(var d in b){var f=a.Ba[d];"function"==typeof f&&(c=f(c,b[d]))}return c}};a.Ga=function(a){return"function"==typeof a.ta&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.R);a.b("isSubscribable",a.Ga);a.U=function(){var b=[];return{bb:function(a){b.push({ca:a,Aa:[]})},
end:function(){b.pop()},La:function(c){a.Ga(c)||m(Error("Only subscribable things can act as dependencies"));if(0<b.length){var d=b[b.length-1];0<=a.a.j(d.Aa,c)||(d.Aa.push(c),d.ca(c))}}}}();var G={undefined:p,"boolean":p,number:p,string:p};a.m=function(b){function c(){if(0<arguments.length){if(!c.equalityComparer||!c.equalityComparer(d,arguments[0]))c.I(),d=arguments[0],c.H();return this}a.U.La(c);return d}var d=b;a.R.call(c);c.H=function(){c.notifySubscribers(d)};c.I=function(){c.notifySubscribers(d,
"beforeChange")};a.a.extend(c,a.m.fn);a.B(c,"valueHasMutated",c.H);a.B(c,"valueWillMutate",c.I);return c};a.m.fn={equalityComparer:function(a,c){return a===s||typeof a in G?a===c:t}};var x=a.m.Db="__ko_proto__";a.m.fn[x]=a.m;a.ia=function(b,c){return b===s||b===n||b[x]===n?t:b[x]===c?p:a.ia(b[x],c)};a.la=function(b){return a.ia(b,a.m)};a.Ha=function(b){return"function"==typeof b&&b[x]===a.m||"function"==typeof b&&b[x]===a.h&&b.pb?p:t};a.b("observable",a.m);a.b("isObservable",a.la);a.b("isWriteableObservable",
a.Ha);a.Q=function(b){0==arguments.length&&(b=[]);b!==s&&(b!==n&&!("length"in b))&&m(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var c=a.m(b);a.a.extend(c,a.Q.fn);return c};a.Q.fn={remove:function(a){for(var c=this(),d=[],f="function"==typeof a?a:function(c){return c===a},g=0;g<c.length;g++){var e=c[g];f(e)&&(0===d.length&&this.I(),d.push(e),c.splice(g,1),g--)}d.length&&this.H();return d},removeAll:function(b){if(b===n){var c=this(),
d=c.slice(0);this.I();c.splice(0,c.length);this.H();return d}return!b?[]:this.remove(function(c){return 0<=a.a.j(b,c)})},destroy:function(a){var c=this(),d="function"==typeof a?a:function(c){return c===a};this.I();for(var f=c.length-1;0<=f;f--)d(c[f])&&(c[f]._destroy=p);this.H()},destroyAll:function(b){return b===n?this.destroy(A(p)):!b?[]:this.destroy(function(c){return 0<=a.a.j(b,c)})},indexOf:function(b){var c=this();return a.a.j(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.I(),
this()[d]=c,this.H())}};a.a.v("pop push reverse shift sort splice unshift".split(" "),function(b){a.Q.fn[b]=function(){var a=this();this.I();a=a[b].apply(a,arguments);this.H();return a}});a.a.v(["slice"],function(b){a.Q.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.Q);a.h=function(b,c,d){function f(){a.a.v(v,function(a){a.A()});v=[]}function g(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(e,a)):e()}function e(){if(!l)if(i&&w())u();else{l=
p;try{var b=a.a.T(v,function(a){return a.target});a.U.bb(function(c){var e;0<=(e=a.a.j(b,c))?b[e]=n:v.push(c.ta(g))});for(var e=q.call(c),f=b.length-1;0<=f;f--)b[f]&&v.splice(f,1)[0].A();i=p;h.notifySubscribers(k,"beforeChange");k=e}finally{a.U.end()}h.notifySubscribers(k);l=t}}function h(){if(0<arguments.length)j.apply(h,arguments);else return i||e(),a.U.La(h),k}function j(){"function"===typeof o?o.apply(c,arguments):m(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))}
var k,i=t,l=t,q=b;q&&"object"==typeof q?(d=q,q=d.read):(d=d||{},q||(q=d.read));"function"!=typeof q&&m(Error("Pass a function that returns the value of the ko.computed"));var o=d.write;c||(c=d.owner);var v=[],u=f,r="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:s,w=d.disposeWhen||A(t);if(r){u=function(){a.a.G.Ma(r,arguments.callee);f()};a.a.G.wa(r,u);var y=w,w=function(){return!a.a.fa(r)||y()}}var x=s;h.nb=function(){return v.length};h.pb="function"===typeof d.write;h.A=function(){u()};
a.R.call(h);a.a.extend(h,a.h.fn);d.deferEvaluation!==p&&e();a.B(h,"dispose",h.A);a.B(h,"getDependenciesCount",h.nb);return h};a.rb=function(b){return a.ia(b,a.h)};w=a.m.Db;a.h[w]=a.m;a.h.fn={};a.h.fn[w]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.rb);(function(){function b(a,g,e){e=e||new d;a=g(a);if(!("object"==typeof a&&a!==s&&a!==n&&!(a instanceof Date)))return a;var h=a instanceof Array?[]:{};e.save(a,h);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=
d;break;case "object":case "undefined":var i=e.get(d);h[c]=i!==n?i:b(d,g,e)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){var b=[],c=[];this.save=function(e,d){var j=a.a.j(b,e);0<=j?c[j]=d:(b.push(e),c.push(d))};this.get=function(e){e=a.a.j(b,e);return 0<=e?c[e]:n}}a.Ta=function(c){0==arguments.length&&m(Error("When calling ko.toJS, pass the object you want to convert."));return b(c,function(b){for(var c=
0;a.la(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,e){b=a.Ta(b);return a.a.sa(b,c,e)}})();a.b("toJS",a.Ta);a.b("toJSON",a.toJSON);(function(){a.k={r:function(b){switch(a.a.o(b)){case "option":return b.__ko__hasDomDataOptionValue__===p?a.a.f.get(b,a.c.options.oa):b.getAttribute("value");case "select":return 0<=b.selectedIndex?a.k.r(b.options[b.selectedIndex]):n;default:return b.value}},S:function(b,c){switch(a.a.o(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.c.options.oa,
n);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.c.options.oa,c),b.__ko__hasDomDataOptionValue__=p,b.value="number"===typeof c?c:""}break;case "select":for(var d=b.options.length-1;0<=d;d--)if(a.k.r(b.options[d])==c){b.selectedIndex=d;break}break;default:if(c===s||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.r);a.b("selectExtensions.writeValue",a.k.S);a.g=function(){function b(a,b){for(var d=
s;a!=d;)d=a,a=a.replace(c,function(a,c){return b[c]});return a}var c=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,f=["true","false"];return{D:[],W:function(c){var e=a.a.w(c);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var c=[],d=s,f,k=0;k<e.length;k++){var i=e.charAt(k);if(d===s)switch(i){case '"':case "'":case "/":d=k,f=i}else if(i==f&&"\\"!==e.charAt(k-1)){i=e.substring(d,k+1);c.push(i);var l="@ko_token_"+(c.length-
1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k=k-(i.length-l.length),d=s}}f=d=s;for(var q=0,o=s,k=0;k<e.length;k++){i=e.charAt(k);if(d===s)switch(i){case "{":d=k;o=i;f="}";break;case "(":d=k;o=i;f=")";break;case "[":d=k,o=i,f="]"}i===o?q++:i===f&&(q--,0===q&&(i=e.substring(d,k+1),c.push(i),l="@ko_token_"+(c.length-1)+"@",e=e.substring(0,d)+l+e.substring(k+1),k-=i.length-l.length,d=s))}f=[];e=e.split(",");d=0;for(k=e.length;d<k;d++)q=e[d],o=q.indexOf(":"),0<o&&o<q.length-1?(i=q.substring(o+1),f.push({key:b(q.substring(0,
o),c),value:b(i,c)})):f.push({unknown:b(q,c)});return f},ka:function(b){for(var c="string"===typeof b?a.g.W(b):b,h=[],b=[],j,k=0;j=c[k];k++)if(0<h.length&&h.push(","),j.key){var i;a:{i=j.key;var l=a.a.w(i);switch(l.length&&l.charAt(0)){case "'":case '"':break a;default:i="'"+l+"'"}}j=j.value;h.push(i);h.push(":");h.push(j);l=a.a.w(j);if(0<=a.a.j(f,a.a.w(l).toLowerCase())?0:l.match(d)!==s)0<b.length&&b.push(", "),b.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}else j.unknown&&h.push(j.unknown);
c=h.join("");0<b.length&&(c=c+", '_ko_property_writers' : { "+b.join("")+" } ");return c},wb:function(b,c){for(var d=0;d<b.length;d++)if(a.a.w(b[d].key)==c)return p;return t},$:function(b,c,d,f,k){if(!b||!a.Ha(b)){if((b=c()._ko_property_writers)&&b[d])b[d](f)}else(!k||b()!==f)&&b(f)}}}();a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.bindingRewriteValidators",a.g.D);a.b("jsonExpressionRewriting.parseObjectLiteral",a.g.W);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
a.g.ka);(function(){function b(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(e)}function c(a){return 8==a.nodeType&&(g?a.text:a.nodeValue).match(h)}function d(a,e){for(var d=a,f=1,g=[];d=d.nextSibling;){if(c(d)&&(f--,0===f))return g;g.push(d);b(d)&&f++}e||m(Error("Cannot find closing comment tag to match: "+a.nodeValue));return s}function f(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:s}var g="<\!--test--\>"===document.createComment("test").text,e=g?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,h=g?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,j={ul:p,ol:p};a.e={C:{},childNodes:function(a){return b(a)?d(a):a.childNodes},ha:function(c){if(b(c))for(var c=a.e.childNodes(c),e=0,d=c.length;e<d;e++)a.removeNode(c[e]);else a.a.ga(c)},X:function(c,e){if(b(c)){a.e.ha(c);for(var d=c.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else a.a.X(c,e)},Ka:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},
Fa:function(a,c,e){b(a)?a.parentNode.insertBefore(c,e.nextSibling):e.nextSibling?a.insertBefore(c,e.nextSibling):a.appendChild(c)},firstChild:function(a){return!b(a)?a.firstChild:!a.nextSibling||c(a.nextSibling)?s:a.nextSibling},nextSibling:function(a){b(a)&&(a=f(a));return a.nextSibling&&c(a.nextSibling)?s:a.nextSibling},Xa:function(a){return(a=b(a))?a[1]:s},Ia:function(e){if(j[a.a.o(e)]){var d=e.firstChild;if(d){do if(1===d.nodeType){var g;g=d.firstChild;var h=s;if(g){do if(h)h.push(g);else if(b(g)){var o=
f(g,p);o?g=o:h=[g]}else c(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=d.nextSibling;for(o=0;o<g.length;o++)h?e.insertBefore(g[o],h):e.appendChild(g[o])}}while(d=d.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.C);a.b("virtualElements.emptyNode",a.e.ha);a.b("virtualElements.insertAfter",a.e.Fa);a.b("virtualElements.prepend",a.e.Ka);a.b("virtualElements.setDomNodeChildren",a.e.X);(function(){a.J=function(){this.cb={}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind")!=
s;case 8:return a.e.Xa(b)!=s;default:return t}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c):s},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Xa(b);default:return s}},parseBindingsString:function(b,c){try{var d=c.$data,d="object"==typeof d&&d!=s?[d,c]:[c],f=d.length,g=this.cb,e=f+"_"+b,h;if(!(h=g[e])){var j=" { "+a.g.ka(b)+" } ";h=g[e]=a.a.eb(j,f)}return h(d)}catch(k){m(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+b))}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(b,d,e){for(var h=a.e.firstChild(d);d=h;)h=a.e.nextSibling(d),c(b,d,e)}function c(c,g,e){var h=p,j=1===g.nodeType;j&&a.e.Ia(g);if(j&&e||a.J.instance.nodeHasBindings(g))h=d(g,s,c,e).Gb;h&&b(c,g,!j)}function d(b,c,e,d){function j(a){return function(){return l[a]}}function k(){return l}var i=0,l,q;a.h(function(){var o=e&&e instanceof a.z?e:new a.z(a.a.d(e)),v=o.$data;d&&a.Ra(b,o);if(l=("function"==
typeof c?c():c)||a.J.instance.getBindings(b,o)){if(0===i){i=1;for(var u in l){var r=a.c[u];r&&8===b.nodeType&&!a.e.C[u]&&m(Error("The binding '"+u+"' cannot be used with virtual elements"));if(r&&"function"==typeof r.init&&(r=(0,r.init)(b,j(u),k,v,o))&&r.controlsDescendantBindings)q!==n&&m(Error("Multiple bindings ("+q+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),q=u}i=2}if(2===i)for(u in l)(r=a.c[u])&&"function"==
typeof r.update&&(0,r.update)(b,j(u),k,v,o)}},s,{disposeWhenNodeIsRemoved:b});return{Gb:q===n}}a.c={};a.z=function(b,c){c?(a.a.extend(this,c),this.$parentContext=c,this.$parent=c.$data,this.$parents=(c.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=b);this.$data=b};a.z.prototype.createChildContext=function(b){return new a.z(b,this)};a.z.prototype.extend=function(b){var c=a.a.extend(new a.z,this);return a.a.extend(c,b)};a.Ra=function(b,c){if(2==arguments.length)a.a.f.set(b,
"__ko_bindingContext__",c);else return a.a.f.get(b,"__ko_bindingContext__")};a.ya=function(b,c,e){1===b.nodeType&&a.e.Ia(b);return d(b,c,e,p)};a.Ya=function(a,c){(1===c.nodeType||8===c.nodeType)&&b(a,c,p)};a.xa=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&m(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||window.document.body;c(a,b,p)};a.ea=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ra(b);if(c)return c;if(b.parentNode)return a.ea(b.parentNode)}};
a.hb=function(b){return(b=a.ea(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("applyBindings",a.xa);a.b("applyBindingsToDescendants",a.Ya);a.b("applyBindingsToNode",a.ya);a.b("contextFor",a.ea);a.b("dataFor",a.hb)})();a.a.v(["click"],function(b){a.c[b]={init:function(c,d,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},f,g)}}});a.c.event={init:function(b,c,d,f){var g=c()||{},e;for(e in g)(function(){var g=e;"string"==typeof g&&a.a.n(b,g,function(b){var e,i=c()[g];if(i){var l=
d();try{var q=a.a.L(arguments);q.unshift(f);e=i.apply(f,q)}finally{e!==p&&(b.preventDefault?b.preventDefault():b.returnValue=t)}l[g+"Bubble"]===t&&(b.cancelBubble=p,b.stopPropagation&&b.stopPropagation())}})})()}};a.c.submit={init:function(b,c,d,f){"function"!=typeof c()&&m(Error("The value for a submit binding must be a function"));a.a.n(b,"submit",function(a){var e,d=c();try{e=d.call(f,b)}finally{e!==p&&(a.preventDefault?a.preventDefault():a.returnValue=t)}})}};a.c.visible={update:function(b,c){var d=
a.a.d(c()),f="none"!=b.style.display;d&&!f?b.style.display="":!d&&f&&(b.style.display="none")}};a.c.enable={update:function(b,c){var d=a.a.d(c());d&&b.disabled?b.removeAttribute("disabled"):!d&&!b.disabled&&(b.disabled=p)}};a.c.disable={update:function(b,c){a.c.enable.update(b,function(){return!a.a.d(c())})}};a.c.value={init:function(b,c,d){function f(){var e=c(),f=a.k.r(b);a.g.$(e,d,"value",f,p)}var g=["change"],e=d().valueUpdate;e&&("string"==typeof e&&(e=[e]),a.a.N(g,e),g=a.a.za(g));if(a.a.ja&&
("input"==b.tagName.toLowerCase()&&"text"==b.type&&"off"!=b.autocomplete&&(!b.form||"off"!=b.form.autocomplete))&&-1==a.a.j(g,"propertychange")){var h=t;a.a.n(b,"propertychange",function(){h=p});a.a.n(b,"blur",function(){if(h){h=t;f()}})}a.a.v(g,function(c){var e=f;if(a.a.Hb(c,"after")){e=function(){setTimeout(f,0)};c=c.substring(5)}a.a.n(b,c,e)})},update:function(b,c){var d="select"===a.a.o(b),f=a.a.d(c()),g=a.k.r(b),e=f!=g;0===f&&(0!==g&&"0"!==g)&&(e=p);e&&(g=function(){a.k.S(b,f)},g(),d&&setTimeout(g,
0));d&&0<b.length&&B(b,f,t)}};a.c.options={update:function(b,c,d){"select"!==a.a.o(b)&&m(Error("options binding applies only to SELECT elements"));for(var f=0==b.length,g=a.a.T(a.a.aa(b.childNodes,function(b){return b.tagName&&"option"===a.a.o(b)&&b.selected}),function(b){return a.k.r(b)||b.innerText||b.textContent}),e=b.scrollTop,h=a.a.d(c());0<b.length;)a.F(b.options[0]),b.remove(0);if(h){d=d();"number"!=typeof h.length&&(h=[h]);if(d.optionsCaption){var j=document.createElement("option");a.a.Y(j,
d.optionsCaption);a.k.S(j,n);b.appendChild(j)}for(var c=0,k=h.length;c<k;c++){var j=document.createElement("option"),i="string"==typeof d.optionsValue?h[c][d.optionsValue]:h[c],i=a.a.d(i);a.k.S(j,i);var l=d.optionsText,i="function"==typeof l?l(h[c]):"string"==typeof l?h[c][l]:i;if(i===s||i===n)i="";a.a.Qa(j,i);b.appendChild(j)}h=b.getElementsByTagName("option");c=j=0;for(k=h.length;c<k;c++)0<=a.a.j(g,a.k.r(h[c]))&&(a.a.Pa(h[c],p),j++);b.scrollTop=e;f&&"value"in d&&B(b,a.a.d(d.value),p);a.a.lb(b)}}};
a.c.options.oa="__ko.optionValueDomData__";a.c.selectedOptions={Ea:function(b){for(var c=[],b=b.childNodes,d=0,f=b.length;d<f;d++){var g=b[d],e=a.a.o(g);"option"==e&&g.selected?c.push(a.k.r(g)):"optgroup"==e&&(g=a.c.selectedOptions.Ea(g),Array.prototype.splice.apply(c,[c.length,0].concat(g)))}return c},init:function(b,c,d){a.a.n(b,"change",function(){var b=c(),g=a.c.selectedOptions.Ea(this);a.g.$(b,d,"value",g)})},update:function(b,c){"select"!=a.a.o(b)&&m(Error("values binding applies only to SELECT elements"));
var d=a.a.d(c());if(d&&"number"==typeof d.length)for(var f=b.childNodes,g=0,e=f.length;g<e;g++){var h=f[g];"option"===a.a.o(h)&&a.a.Pa(h,0<=a.a.j(d,a.k.r(h)))}}};a.c.text={update:function(b,c){a.a.Qa(b,c())}};a.c.html={init:function(){return{controlsDescendantBindings:p}},update:function(b,c){var d=a.a.d(c());a.a.Y(b,d)}};a.c.css={update:function(b,c){var d=a.a.d(c()||{}),f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);a.a.Ua(b,f,g)}}};a.c.style={update:function(b,c){var d=a.a.d(c()||{}),f;
for(f in d)if("string"==typeof f){var g=a.a.d(d[f]);b.style[f]=g||""}}};a.c.uniqueName={init:function(b,c){c()&&(b.name="ko_unique_"+ ++a.c.uniqueName.gb,(a.a.tb||a.a.ub)&&b.mergeAttributes(document.createElement("<input name='"+b.name+"'/>"),t))}};a.c.uniqueName.gb=0;a.c.checked={init:function(b,c,d){a.a.n(b,"click",function(){var f;if("checkbox"==b.type)f=b.checked;else if("radio"==b.type&&b.checked)f=b.value;else return;var g=c();"checkbox"==b.type&&a.a.d(g)instanceof Array?(f=a.a.j(a.a.d(g),b.value),
b.checked&&0>f?g.push(b.value):!b.checked&&0<=f&&g.splice(f,1)):a.g.$(g,d,"checked",f,p)});"radio"==b.type&&!b.name&&a.c.uniqueName.init(b,A(p))},update:function(b,c){var d=a.a.d(c());"checkbox"==b.type?b.checked=d instanceof Array?0<=a.a.j(d,b.value):d:"radio"==b.type&&(b.checked=b.value==d)}};var F={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.d(c())||{},f;for(f in d)if("string"==typeof f){var g=a.a.d(d[f]),e=g===t||g===s||g===n;e&&b.removeAttribute(f);8>=a.a.ja&&
f in F?(f=F[f],e?b.removeAttribute(f):b[f]=g):e||b.setAttribute(f,g.toString())}}};a.c.hasfocus={init:function(b,c,d){function f(b){var e=c();a.g.$(e,d,"hasfocus",b,p)}a.a.n(b,"focus",function(){f(p)});a.a.n(b,"focusin",function(){f(p)});a.a.n(b,"blur",function(){f(t)});a.a.n(b,"focusout",function(){f(t)})},update:function(b,c){var d=a.a.d(c());d?b.focus():b.blur();a.a.va(b,d?"focusin":"focusout")}};a.c["with"]={p:function(b){return function(){var c=b();return{"if":c,data:c,templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c["with"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["with"].p(c),d,f,g)}};a.g.D["with"]=t;a.e.C["with"]=p;a.c["if"]={p:function(b){return function(){return{"if":b(),templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c["if"].p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c["if"].p(c),d,f,g)}};a.g.D["if"]=t;a.e.C["if"]=p;a.c.ifnot={p:function(b){return function(){return{ifnot:b(),templateEngine:a.q.K}}},
init:function(b,c){return a.c.template.init(b,a.c.ifnot.p(c))},update:function(b,c,d,f,g){return a.c.template.update(b,a.c.ifnot.p(c),d,f,g)}};a.g.D.ifnot=t;a.e.C.ifnot=p;a.c.foreach={p:function(b){return function(){var c=a.a.d(b());return!c||"number"==typeof c.length?{foreach:c,templateEngine:a.q.K}:{foreach:c.data,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,templateEngine:a.q.K}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.p(c))},
update:function(b,c,d,f,g){return a.c.template.update(b,a.c.foreach.p(c),d,f,g)}};a.g.D.foreach=t;a.e.C.foreach=p;a.t=function(){};a.t.prototype.renderTemplateSource=function(){m(Error("Override renderTemplateSource"))};a.t.prototype.createJavaScriptEvaluatorBlock=function(){m(Error("Override createJavaScriptEvaluatorBlock"))};a.t.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){var c=c||document,d=c.getElementById(b);d||m(Error("Cannot find template with ID "+b));return new a.l.i(d)}if(1==
b.nodeType||8==b.nodeType)return new a.l.M(b);m(Error("Unknown template type: "+b))};a.t.prototype.renderTemplate=function(a,c,d,f){return this.renderTemplateSource(this.makeTemplateSource(a,f),c,d)};a.t.prototype.isTemplateRewritten=function(a,c){return this.allowTemplateRewriting===t||!(c&&c!=document)&&this.V&&this.V[a]?p:this.makeTemplateSource(a,c).data("isRewritten")};a.t.prototype.rewriteTemplate=function(a,c,d){var f=this.makeTemplateSource(a,d),c=c(f.text());f.text(c);f.data("isRewritten",
p);!(d&&d!=document)&&"string"==typeof a&&(this.V=this.V||{},this.V[a]=p)};a.b("templateEngine",a.t);a.Z=function(){function b(b,c,e){for(var b=a.g.W(b),d=a.g.D,j=0;j<b.length;j++){var k=b[j].key;if(d.hasOwnProperty(k)){var i=d[k];"function"===typeof i?(k=i(b[j].value))&&m(Error(k)):i||m(Error("This template engine does not support the '"+k+"' binding within its templates"))}}b="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+a.g.ka(b)+
" } })()         })";return e.createJavaScriptEvaluatorBlock(b)+c}var c=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{mb:function(b,c,e){c.isTemplateRewritten(b,e)||c.rewriteTemplate(b,function(b){return a.Z.zb(b,c)},e)},zb:function(a,g){return a.replace(c,function(a,c,d,f,i,l,q){return b(q,c,g)}).replace(d,function(a,c){return b(c,"<\!-- ko --\>",g)})},Za:function(b){return a.s.na(function(c,
e){c.nextSibling&&a.ya(c.nextSibling,b,e)})}}}();a.b("templateRewriting",a.Z);a.b("templateRewriting.applyMemoizedBindingsToNextSibling",a.Z.Za);(function(){a.l={};a.l.i=function(a){this.i=a};a.l.i.prototype.text=function(){var b=a.a.o(this.i),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.i[b];var c=arguments[0];"innerHTML"===b?a.a.Y(this.i,c):this.i[b]=c};a.l.i.prototype.data=function(b){if(1===arguments.length)return a.a.f.get(this.i,"templateSourceData_"+
b);a.a.f.set(this.i,"templateSourceData_"+b,arguments[1])};a.l.M=function(a){this.i=a};a.l.M.prototype=new a.l.i;a.l.M.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.i,"__ko_anon_template__")||{};b.ua===n&&b.da&&(b.ua=b.da.innerHTML);return b.ua}a.a.f.set(this.i,"__ko_anon_template__",{ua:arguments[0]})};a.l.i.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.i,"__ko_anon_template__")||{}).da;a.a.f.set(this.i,"__ko_anon_template__",{da:arguments[0]})};
a.b("templateSources",a.l);a.b("templateSources.domElement",a.l.i);a.b("templateSources.anonymousTemplate",a.l.M)})();(function(){function b(b,c,d){for(var f,c=a.e.nextSibling(c);b&&(f=b)!==c;)b=a.e.nextSibling(f),(1===f.nodeType||8===f.nodeType)&&d(f)}function c(c,d){if(c.length){var f=c[0],g=c[c.length-1];b(f,g,function(b){a.xa(d,b)});b(f,g,function(b){a.s.Wa(b,[d])})}}function d(a){return a.nodeType?a:0<a.length?a[0]:s}function f(b,f,j,k,i){var i=i||{},l=b&&d(b),l=l&&l.ownerDocument,q=i.templateEngine||
g;a.Z.mb(j,q,l);j=q.renderTemplate(j,k,i,l);("number"!=typeof j.length||0<j.length&&"number"!=typeof j[0].nodeType)&&m(Error("Template engine must return an array of DOM nodes"));l=t;switch(f){case "replaceChildren":a.e.X(b,j);l=p;break;case "replaceNode":a.a.Na(b,j);l=p;break;case "ignoreTargetNode":break;default:m(Error("Unknown renderMode: "+f))}l&&(c(j,k),i.afterRender&&i.afterRender(j,k.$data));return j}var g;a.ra=function(b){b!=n&&!(b instanceof a.t)&&m(Error("templateEngine must inherit from ko.templateEngine"));
g=b};a.qa=function(b,c,j,k,i){j=j||{};(j.templateEngine||g)==n&&m(Error("Set a template engine before calling renderTemplate"));i=i||"replaceChildren";if(k){var l=d(k);return a.h(function(){var g=c&&c instanceof a.z?c:new a.z(a.a.d(c)),o="function"==typeof b?b(g.$data):b,g=f(k,i,o,g,j);"replaceNode"==i&&(k=g,l=d(k))},s,{disposeWhen:function(){return!l||!a.a.fa(l)},disposeWhenNodeIsRemoved:l&&"replaceNode"==i?l.parentNode:l})}return a.s.na(function(d){a.qa(b,c,j,d,"replaceNode")})};a.Fb=function(b,
d,g,k,i){function l(a,b){c(b,o);g.afterRender&&g.afterRender(b,a)}function q(c,d){var h="function"==typeof b?b(c):b;o=i.createChildContext(a.a.d(c));o.$index=d;return f(s,"ignoreTargetNode",h,o,g)}var o;return a.h(function(){var b=a.a.d(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.aa(b,function(b){return g.includeDestroyed||b===n||b===s||!a.a.d(b._destroy)});a.a.Oa(k,b,q,g,l)},s,{disposeWhenNodeIsRemoved:k})};a.c.template={init:function(b,c){var d=a.a.d(c());if("string"!=typeof d&&!d.name&&
(1==b.nodeType||8==b.nodeType))d=1==b.nodeType?b.childNodes:a.e.childNodes(b),d=a.a.Ab(d),(new a.l.M(b)).nodes(d);return{controlsDescendantBindings:p}},update:function(b,c,d,f,g){c=a.a.d(c());f=p;"string"==typeof c?d=c:(d=c.name,"if"in c&&(f=f&&a.a.d(c["if"])),"ifnot"in c&&(f=f&&!a.a.d(c.ifnot)));var l=s;"object"===typeof c&&"foreach"in c?l=a.Fb(d||b,f&&c.foreach||[],c,b,g):f?(g="object"==typeof c&&"data"in c?g.createChildContext(a.a.d(c.data)):g,l=a.qa(d||b,g,c,b)):a.e.ha(b);g=l;(c=a.a.f.get(b,"__ko__templateSubscriptionDomDataKey__"))&&
"function"==typeof c.A&&c.A();a.a.f.set(b,"__ko__templateSubscriptionDomDataKey__",g)}};a.g.D.template=function(b){b=a.g.W(b);return 1==b.length&&b[0].unknown||a.g.wb(b,"name")?s:"This template engine does not support anonymous templates nested within its templates"};a.e.C.template=p})();a.b("setTemplateEngine",a.ra);a.b("renderTemplate",a.qa);(function(){a.a.O=function(b,c,d){if(d===n)return a.a.O(b,c,1)||a.a.O(b,c,10)||a.a.O(b,c,Number.MAX_VALUE);for(var b=b||[],c=c||[],f=b,g=c,e=[],h=0;h<=g.length;h++)e[h]=
[];for(var h=0,j=Math.min(f.length,d);h<=j;h++)e[0][h]=h;h=1;for(j=Math.min(g.length,d);h<=j;h++)e[h][0]=h;for(var j=f.length,k,i=g.length,h=1;h<=j;h++){k=Math.max(1,h-d);for(var l=Math.min(i,h+d);k<=l;k++)e[k][h]=f[h-1]===g[k-1]?e[k-1][h-1]:Math.min(e[k-1][h]===n?Number.MAX_VALUE:e[k-1][h]+1,e[k][h-1]===n?Number.MAX_VALUE:e[k][h-1]+1)}d=b.length;f=c.length;g=[];h=e[f][d];if(h===n)e=s;else{for(;0<d||0<f;){j=e[f][d];i=0<f?e[f-1][d]:h+1;l=0<d?e[f][d-1]:h+1;k=0<f&&0<d?e[f-1][d-1]:h+1;if(i===n||i<j-1)i=
h+1;if(l===n||l<j-1)l=h+1;k<j-1&&(k=h+1);i<=l&&i<k?(g.push({status:"added",value:c[f-1]}),f--):(l<i&&l<k?g.push({status:"deleted",value:b[d-1]}):(g.push({status:"retained",value:b[d-1]}),f--),d--)}e=g.reverse()}return e}})();a.b("utils.compareArrays",a.a.O);(function(){function b(a){if(2<a.length){for(var b=a[0],c=a[a.length-1],e=[b];b!==c;){b=b.nextSibling;if(!b)return;e.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}}function c(c,f,g,e,h){var j=[],c=a.h(function(){var c=f(g,h)||
[];0<j.length&&(b(j),a.a.Na(j,c),e&&e(g,c));j.splice(0,j.length);a.a.N(j,c)},s,{disposeWhenNodeIsRemoved:c,disposeWhen:function(){return 0==j.length||!a.a.fa(j[0])}});return{xb:j,h:c}}a.a.Oa=function(d,f,g,e,h){for(var f=f||[],e=e||{},j=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===n,k=a.a.f.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=a.a.T(k,function(a){return a.$a}),l=a.a.O(i,f),f=[],q=0,o=[],v=0,i=[],u=s,r=0,w=l.length;r<w;r++)switch(l[r].status){case "retained":var y=
k[q];y.qb(v);v=f.push(y);0<y.P.length&&(u=y.P[y.P.length-1]);q++;break;case "deleted":k[q].h.A();b(k[q].P);a.a.v(k[q].P,function(a){o.push({element:a,index:r,value:l[r].value});u=a});q++;break;case "added":for(var y=l[r].value,x=a.m(v),v=c(d,g,y,h,x),C=v.xb,v=f.push({$a:l[r].value,P:C,h:v.h,qb:x}),z=0,B=C.length;z<B;z++){var D=C[z];i.push({element:D,index:r,value:l[r].value});u==s?a.e.Ka(d,D):a.e.Fa(d,D,u);u=D}h&&h(y,C,x)}a.a.v(o,function(b){a.F(b.element)});g=t;if(!j){if(e.afterAdd)for(r=0;r<i.length;r++)e.afterAdd(i[r].element,
i[r].index,i[r].value);if(e.beforeRemove){for(r=0;r<o.length;r++)e.beforeRemove(o[r].element,o[r].index,o[r].value);g=p}}if(!g&&o.length)for(r=0;r<o.length;r++)e=o[r].element,e.parentNode&&e.parentNode.removeChild(e);a.a.f.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",f)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Oa);a.q=function(){this.allowTemplateRewriting=t};a.q.prototype=new a.t;a.q.prototype.renderTemplateSource=function(b){var c=!(9>a.a.ja)&&b.nodes?b.nodes():s;
if(c)return a.a.L(c.cloneNode(p).childNodes);b=b.text();return a.a.pa(b)};a.q.K=new a.q;a.ra(a.q.K);a.b("nativeTemplateEngine",a.q);(function(){a.ma=function(){var a=this.vb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,f,g){g=g||{};2>a&&m(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var e=b.data("precompiled");
e||(e=b.text()||"",e=jQuery.template(s,"{{ko_with $item.koBindingContext}}"+e+"{{/ko_with}}"),b.data("precompiled",e));b=[f.$data];f=jQuery.extend({koBindingContext:f},g.templateOptions);f=jQuery.tmpl(e,b,f);f.appendTo(document.createElement("div"));jQuery.fragments={};return f};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};0<a&&(jQuery.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.ma.prototype=new a.t;var b=new a.ma;0<b.vb&&a.ra(b);a.b("jqueryTmplTemplateEngine",a.ma)})()}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?E(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],E):E(window.ko={});p;
})(window,document,navigator);

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL3NjcmlwdHMvYXBwLmpzIiwiL1VzZXJzL2pvc2hrYS9Db2RlL2NvdW50dy50Zi9ub2RlX21vZHVsZXMva25vY2tvdXQtY2xpZW50L2tub2Nrb3V0LmpzIiwiL1VzZXJzL2pvc2hrYS9Db2RlL2NvdW50dy50Zi9zY3JpcHRzL3ZpZXdNb2RlbC5qcyIsIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9pbnNlcnQtbW9kdWxlLWdsb2JhbHMvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9Vc2Vycy9qb3Noa2EvQ29kZS9jb3VudHcudGYvbm9kZV9tb2R1bGVzL2RhdGVqcy9saWIvZGF0ZS5qcyIsIi9Vc2Vycy9qb3Noa2EvQ29kZS9jb3VudHcudGYvbm9kZV9tb2R1bGVzL2tub2Nrb3V0LW1hcHBpbmcvaW5kZXguanMiLCIvVXNlcnMvam9zaGthL0NvZGUvY291bnR3LnRmL25vZGVfbW9kdWxlcy9rbm9ja291dC1tYXBwaW5nL25vZGVfbW9kdWxlcy9rbm9ja291dC1jbGllbnQva25vY2tvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaGdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3J3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGtvID0gcmVxdWlyZSgna25vY2tvdXQtY2xpZW50JyksXG5cdHZtID0gcmVxdWlyZSgnLi92aWV3TW9kZWwnKTtcblxudm0ud3RmKCk7XG5rby5hcHBseUJpbmRpbmdzKHZtKTtcbiIsIihmdW5jdGlvbigpey8vIEtub2Nrb3V0IEphdmFTY3JpcHQgbGlicmFyeSB2Mi4yLjFcbi8vIChjKSBTdGV2ZW4gU2FuZGVyc29uIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuLy8gTGljZW5zZTogTUlUIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcblxuKGZ1bmN0aW9uKCl7XG52YXIgREVCVUc9dHJ1ZTtcbihmdW5jdGlvbih3aW5kb3csZG9jdW1lbnQsbmF2aWdhdG9yLGpRdWVyeSx1bmRlZmluZWQpe1xuIWZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAvLyBTdXBwb3J0IHRocmVlIG1vZHVsZSBsb2FkaW5nIHNjZW5hcmlvc1xuICAgIGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gWzFdIENvbW1vbkpTL05vZGUuanNcbiAgICAgICAgdmFyIHRhcmdldCA9IG1vZHVsZVsnZXhwb3J0cyddIHx8IGV4cG9ydHM7IC8vIG1vZHVsZS5leHBvcnRzIGlzIGZvciBOb2RlLmpzXG4gICAgICAgIGZhY3RvcnkodGFyZ2V0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lWydhbWQnXSkge1xuICAgICAgICAvLyBbMl0gQU1EIGFub255bW91cyBtb2R1bGVcbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBbM10gTm8gbW9kdWxlIGxvYWRlciAocGxhaW4gPHNjcmlwdD4gdGFnKSAtIHB1dCBkaXJlY3RseSBpbiBnbG9iYWwgbmFtZXNwYWNlXG4gICAgICAgIGZhY3Rvcnkod2luZG93WydrbyddID0ge30pO1xuICAgIH1cbn0oZnVuY3Rpb24oa29FeHBvcnRzKXtcbi8vIEludGVybmFsbHksIGFsbCBLTyBvYmplY3RzIGFyZSBhdHRhY2hlZCB0byBrb0V4cG9ydHMgKGV2ZW4gdGhlIG5vbi1leHBvcnRlZCBvbmVzIHdob3NlIG5hbWVzIHdpbGwgYmUgbWluaWZpZWQgYnkgdGhlIGNsb3N1cmUgY29tcGlsZXIpLlxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhlIGZvbGxvd2luZyBcImtvXCIgdmFyaWFibGUgbWF5IGJlIG1hZGUgZGlzdGluY3QgZnJvbSBcImtvRXhwb3J0c1wiIHNvIHRoYXQgcHJpdmF0ZSBvYmplY3RzIGFyZSBub3QgZXh0ZXJuYWxseSByZWFjaGFibGUuXG52YXIga28gPSB0eXBlb2Yga29FeHBvcnRzICE9PSAndW5kZWZpbmVkJyA/IGtvRXhwb3J0cyA6IHt9O1xuLy8gR29vZ2xlIENsb3N1cmUgQ29tcGlsZXIgaGVscGVycyAodXNlZCBvbmx5IHRvIG1ha2UgdGhlIG1pbmlmaWVkIGZpbGUgc21hbGxlcilcbmtvLmV4cG9ydFN5bWJvbCA9IGZ1bmN0aW9uKGtvUGF0aCwgb2JqZWN0KSB7XG5cdHZhciB0b2tlbnMgPSBrb1BhdGguc3BsaXQoXCIuXCIpO1xuXG5cdC8vIEluIHRoZSBmdXR1cmUsIFwia29cIiBtYXkgYmVjb21lIGRpc3RpbmN0IGZyb20gXCJrb0V4cG9ydHNcIiAoc28gdGhhdCBub24tZXhwb3J0ZWQgb2JqZWN0cyBhcmUgbm90IHJlYWNoYWJsZSlcblx0Ly8gQXQgdGhhdCBwb2ludCwgXCJ0YXJnZXRcIiB3b3VsZCBiZSBzZXQgdG86ICh0eXBlb2Yga29FeHBvcnRzICE9PSBcInVuZGVmaW5lZFwiID8ga29FeHBvcnRzIDoga28pXG5cdHZhciB0YXJnZXQgPSBrbztcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGggLSAxOyBpKyspXG5cdFx0dGFyZ2V0ID0gdGFyZ2V0W3Rva2Vuc1tpXV07XG5cdHRhcmdldFt0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdXSA9IG9iamVjdDtcbn07XG5rby5leHBvcnRQcm9wZXJ0eSA9IGZ1bmN0aW9uKG93bmVyLCBwdWJsaWNOYW1lLCBvYmplY3QpIHtcbiAgb3duZXJbcHVibGljTmFtZV0gPSBvYmplY3Q7XG59O1xua28udmVyc2lvbiA9IFwiMi4yLjFcIjtcblxua28uZXhwb3J0U3ltYm9sKCd2ZXJzaW9uJywga28udmVyc2lvbik7XG5rby51dGlscyA9IG5ldyAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdHJpbmdUcmltUmVnZXggPSAvXihcXHN8XFx1MDBBMCkrfChcXHN8XFx1MDBBMCkrJC9nO1xuXG4gICAgLy8gUmVwcmVzZW50IHRoZSBrbm93biBldmVudCB0eXBlcyBpbiBhIGNvbXBhY3Qgd2F5LCB0aGVuIGF0IHJ1bnRpbWUgdHJhbnNmb3JtIGl0IGludG8gYSBoYXNoIHdpdGggZXZlbnQgbmFtZSBhcyBrZXkgKGZvciBmYXN0IGxvb2t1cClcbiAgICB2YXIga25vd25FdmVudHMgPSB7fSwga25vd25FdmVudFR5cGVzQnlFdmVudE5hbWUgPSB7fTtcbiAgICB2YXIga2V5RXZlbnRUeXBlTmFtZSA9IC9GaXJlZm94XFwvMi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnS2V5Ym9hcmRFdmVudCcgOiAnVUlFdmVudHMnO1xuICAgIGtub3duRXZlbnRzW2tleUV2ZW50VHlwZU5hbWVdID0gWydrZXl1cCcsICdrZXlkb3duJywgJ2tleXByZXNzJ107XG4gICAga25vd25FdmVudHNbJ01vdXNlRXZlbnRzJ10gPSBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlbW92ZScsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJ107XG4gICAgZm9yICh2YXIgZXZlbnRUeXBlIGluIGtub3duRXZlbnRzKSB7XG4gICAgICAgIHZhciBrbm93bkV2ZW50c0ZvclR5cGUgPSBrbm93bkV2ZW50c1tldmVudFR5cGVdO1xuICAgICAgICBpZiAoa25vd25FdmVudHNGb3JUeXBlLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBrbm93bkV2ZW50c0ZvclR5cGUubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgIGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lW2tub3duRXZlbnRzRm9yVHlwZVtpXV0gPSBldmVudFR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGV2ZW50c1RoYXRNdXN0QmVSZWdpc3RlcmVkVXNpbmdBdHRhY2hFdmVudCA9IHsgJ3Byb3BlcnR5Y2hhbmdlJzogdHJ1ZSB9OyAvLyBXb3JrYXJvdW5kIGZvciBhbiBJRTkgaXNzdWUgLSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzQwNlxuXG4gICAgLy8gRGV0ZWN0IElFIHZlcnNpb25zIGZvciBidWcgd29ya2Fyb3VuZHMgKHVzZXMgSUUgY29uZGl0aW9uYWxzLCBub3QgVUEgc3RyaW5nLCBmb3Igcm9idXN0bmVzcylcbiAgICAvLyBOb3RlIHRoYXQsIHNpbmNlIElFIDEwIGRvZXMgbm90IHN1cHBvcnQgY29uZGl0aW9uYWwgY29tbWVudHMsIHRoZSBmb2xsb3dpbmcgbG9naWMgb25seSBkZXRlY3RzIElFIDwgMTAuXG4gICAgLy8gQ3VycmVudGx5IHRoaXMgaXMgYnkgZGVzaWduLCBzaW5jZSBJRSAxMCsgYmVoYXZlcyBjb3JyZWN0bHkgd2hlbiB0cmVhdGVkIGFzIGEgc3RhbmRhcmQgYnJvd3Nlci5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGZ1dHVyZSBuZWVkIHRvIGRldGVjdCBzcGVjaWZpYyB2ZXJzaW9ucyBvZiBJRTEwKywgd2Ugd2lsbCBhbWVuZCB0aGlzLlxuICAgIHZhciBpZVZlcnNpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gMywgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGlFbGVtcyA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaScpO1xuXG4gICAgICAgIC8vIEtlZXAgY29uc3RydWN0aW5nIGNvbmRpdGlvbmFsIEhUTUwgYmxvY2tzIHVudGlsIHdlIGhpdCBvbmUgdGhhdCByZXNvbHZlcyB0byBhbiBlbXB0eSBmcmFnbWVudFxuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzwhLS1baWYgZ3QgSUUgJyArICgrK3ZlcnNpb24pICsgJ10+PGk+PC9pPjwhW2VuZGlmXS0tPicsXG4gICAgICAgICAgICBpRWxlbXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPiA0ID8gdmVyc2lvbiA6IHVuZGVmaW5lZDtcbiAgICB9KCkpO1xuICAgIHZhciBpc0llNiA9IGllVmVyc2lvbiA9PT0gNixcbiAgICAgICAgaXNJZTcgPSBpZVZlcnNpb24gPT09IDc7XG5cbiAgICBmdW5jdGlvbiBpc0NsaWNrT25DaGVja2FibGVFbGVtZW50KGVsZW1lbnQsIGV2ZW50VHlwZSkge1xuICAgICAgICBpZiAoKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSAhPT0gXCJpbnB1dFwiKSB8fCAhZWxlbWVudC50eXBlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChldmVudFR5cGUudG9Mb3dlckNhc2UoKSAhPSBcImNsaWNrXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGlucHV0VHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgICAgICAgcmV0dXJuIChpbnB1dFR5cGUgPT0gXCJjaGVja2JveFwiKSB8fCAoaW5wdXRUeXBlID09IFwicmFkaW9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3Q6IFsnYXV0aGVudGljaXR5X3Rva2VuJywgL15fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbihfLiopPyQvXSxcblxuICAgICAgICBhcnJheUZvckVhY2g6IGZ1bmN0aW9uIChhcnJheSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBhY3Rpb24oYXJyYXlbaV0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5SW5kZXhPZjogZnVuY3Rpb24gKGFycmF5LCBpdGVtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhcnJheSwgaXRlbSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5Rmlyc3Q6IGZ1bmN0aW9uIChhcnJheSwgcHJlZGljYXRlLCBwcmVkaWNhdGVPd25lcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHByZWRpY2F0ZU93bmVyLCBhcnJheVtpXSkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFycmF5UmVtb3ZlSXRlbTogZnVuY3Rpb24gKGFycmF5LCBpdGVtVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheSwgaXRlbVRvUmVtb3ZlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKVxuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXJyYXlHZXREaXN0aW5jdFZhbHVlczogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICBhcnJheSA9IGFycmF5IHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKHJlc3VsdCwgYXJyYXlbaV0pIDwgMClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheU1hcDogZnVuY3Rpb24gKGFycmF5LCBtYXBwaW5nKSB7XG4gICAgICAgICAgICBhcnJheSA9IGFycmF5IHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWFwcGluZyhhcnJheVtpXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheUZpbHRlcjogZnVuY3Rpb24gKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgICAgICAgICAgIGFycmF5ID0gYXJyYXkgfHwgW107XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2ldKSlcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBhcnJheVB1c2hBbGw6IGZ1bmN0aW9uIChhcnJheSwgdmFsdWVzVG9QdXNoKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzVG9QdXNoIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgdmFsdWVzVG9QdXNoKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZhbHVlc1RvUHVzaC5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godmFsdWVzVG9QdXNoW2ldKTtcbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGVtcHR5RG9tTm9kZTogZnVuY3Rpb24gKGRvbU5vZGUpIHtcbiAgICAgICAgICAgIHdoaWxlIChkb21Ob2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKGRvbU5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW92ZUNsZWFuZWROb2Rlc1RvQ29udGFpbmVyRWxlbWVudDogZnVuY3Rpb24obm9kZXMpIHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBpdCdzIGEgcmVhbCBhcnJheSwgYXMgd2UncmUgYWJvdXQgdG8gcmVwYXJlbnQgdGhlIG5vZGVzIGFuZFxuICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGUgdW5kZXJseWluZyBjb2xsZWN0aW9uIHRvIGNoYW5nZSB3aGlsZSB3ZSdyZSBkb2luZyB0aGF0LlxuICAgICAgICAgICAgdmFyIG5vZGVzQXJyYXkgPSBrby51dGlscy5tYWtlQXJyYXkobm9kZXMpO1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzQXJyYXkubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtvLmNsZWFuTm9kZShub2Rlc0FycmF5W2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsb25lTm9kZXM6IGZ1bmN0aW9uIChub2Rlc0FycmF5LCBzaG91bGRDbGVhbk5vZGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG5vZGVzQXJyYXkubGVuZ3RoLCBuZXdOb2Rlc0FycmF5ID0gW107IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkTm9kZSA9IG5vZGVzQXJyYXlbaV0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIG5ld05vZGVzQXJyYXkucHVzaChzaG91bGRDbGVhbk5vZGVzID8ga28uY2xlYW5Ob2RlKGNsb25lZE5vZGUpIDogY2xvbmVkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3Tm9kZXNBcnJheTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXREb21Ob2RlQ2hpbGRyZW46IGZ1bmN0aW9uIChkb21Ob2RlLCBjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBrby51dGlscy5lbXB0eURvbU5vZGUoZG9tTm9kZSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGRvbU5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVwbGFjZURvbU5vZGVzOiBmdW5jdGlvbiAobm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5LCBuZXdOb2Rlc0FycmF5KSB7XG4gICAgICAgICAgICB2YXIgbm9kZXNUb1JlcGxhY2VBcnJheSA9IG5vZGVUb1JlcGxhY2VPck5vZGVBcnJheS5ub2RlVHlwZSA/IFtub2RlVG9SZXBsYWNlT3JOb2RlQXJyYXldIDogbm9kZVRvUmVwbGFjZU9yTm9kZUFycmF5O1xuICAgICAgICAgICAgaWYgKG5vZGVzVG9SZXBsYWNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRpb25Qb2ludCA9IG5vZGVzVG9SZXBsYWNlQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGluc2VydGlvblBvaW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBuZXdOb2Rlc0FycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2Rlc0FycmF5W2ldLCBpbnNlcnRpb25Qb2ludCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBub2Rlc1RvUmVwbGFjZUFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBrby5yZW1vdmVOb2RlKG5vZGVzVG9SZXBsYWNlQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXRPcHRpb25Ob2RlU2VsZWN0aW9uU3RhdGU6IGZ1bmN0aW9uIChvcHRpb25Ob2RlLCBpc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBJRTYgc29tZXRpbWVzIHRocm93cyBcInVua25vd24gZXJyb3JcIiBpZiB5b3UgdHJ5IHRvIHdyaXRlIHRvIC5zZWxlY3RlZCBkaXJlY3RseSwgd2hlcmVhcyBGaXJlZm94IHN0cnVnZ2xlcyB3aXRoIHNldEF0dHJpYnV0ZS4gUGljayBvbmUgYmFzZWQgb24gYnJvd3Nlci5cbiAgICAgICAgICAgIGlmIChpZVZlcnNpb24gPCA3KVxuICAgICAgICAgICAgICAgIG9wdGlvbk5vZGUuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgaXNTZWxlY3RlZCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb3B0aW9uTm9kZS5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RyaW5nVHJpbTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIChzdHJpbmcgfHwgXCJcIikucmVwbGFjZShzdHJpbmdUcmltUmVnZXgsIFwiXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cmluZ1Rva2VuaXplOiBmdW5jdGlvbiAoc3RyaW5nLCBkZWxpbWl0ZXIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHZhciB0b2tlbnMgPSAoc3RyaW5nIHx8IFwiXCIpLnNwbGl0KGRlbGltaXRlcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRva2Vucy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJpbW1lZCA9IGtvLnV0aWxzLnN0cmluZ1RyaW0odG9rZW5zW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodHJpbW1lZCAhPT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godHJpbW1lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0cmluZ1N0YXJ0c1dpdGg6IGZ1bmN0aW9uIChzdHJpbmcsIHN0YXJ0c1dpdGgpIHtcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHN0YXJ0c1dpdGgubGVuZ3RoID4gc3RyaW5nLmxlbmd0aClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzdGFydHNXaXRoLmxlbmd0aCkgPT09IHN0YXJ0c1dpdGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZG9tTm9kZUlzQ29udGFpbmVkQnk6IGZ1bmN0aW9uIChub2RlLCBjb250YWluZWRCeU5vZGUpIHtcbiAgICAgICAgICAgIGlmIChjb250YWluZWRCeU5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZWRCeU5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAxNikgPT0gMTY7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT0gY29udGFpbmVkQnlOb2RlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5kb21Ob2RlSXNDb250YWluZWRCeShub2RlLCBub2RlLm93bmVyRG9jdW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRhZ05hbWVMb3dlcjogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gRm9yIEhUTUwgZWxlbWVudHMsIHRhZ05hbWUgd2lsbCBhbHdheXMgYmUgdXBwZXIgY2FzZTsgZm9yIFhIVE1MIGVsZW1lbnRzLCBpdCdsbCBiZSBsb3dlciBjYXNlLlxuICAgICAgICAgICAgLy8gUG9zc2libGUgZnV0dXJlIG9wdGltaXphdGlvbjogSWYgd2Uga25vdyBpdCdzIGFuIGVsZW1lbnQgZnJvbSBhbiBYSFRNTCBkb2N1bWVudCAobm90IEhUTUwpLFxuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBkbyB0aGUgLnRvTG93ZXJDYXNlKCkgYXMgaXQgd2lsbCBhbHdheXMgYmUgbG93ZXIgY2FzZSBhbnl3YXkuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHZhciBtdXN0VXNlQXR0YWNoRXZlbnQgPSBpZVZlcnNpb24gJiYgZXZlbnRzVGhhdE11c3RCZVJlZ2lzdGVyZWRVc2luZ0F0dGFjaEV2ZW50W2V2ZW50VHlwZV07XG4gICAgICAgICAgICBpZiAoIW11c3RVc2VBdHRhY2hFdmVudCAmJiB0eXBlb2YgalF1ZXJ5ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDbGlja09uQ2hlY2thYmxlRWxlbWVudChlbGVtZW50LCBldmVudFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBjbGljayBldmVudHMgb24gY2hlY2tib3hlcywgalF1ZXJ5IGludGVyZmVyZXMgd2l0aCB0aGUgZXZlbnQgaGFuZGxpbmcgaW4gYW4gYXdrd2FyZCB3YXk6XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHRvZ2dsZXMgdGhlIGVsZW1lbnQgY2hlY2tlZCBzdGF0ZSAqYWZ0ZXIqIHRoZSBjbGljayBldmVudCBoYW5kbGVycyBydW4sIHdoZXJlYXMgbmF0aXZlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrIGV2ZW50cyB0b2dnbGUgdGhlIGNoZWNrZWQgc3RhdGUgKmJlZm9yZSogdGhlIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeCB0aGlzIGJ5IGludGVjZXB0aW5nIHRoZSBoYW5kbGVyIGFuZCBhcHBseWluZyB0aGUgY29ycmVjdCBjaGVja2VkbmVzcyBiZWZvcmUgaXQgcnVucy5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbihldmVudCwgZXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5U3VwcGxpZWRDaGVja2VkU3RhdGUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnREYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGV2ZW50RGF0YS5jaGVja2VkU3RhdGVCZWZvcmVFdmVudCAhPT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IGpRdWVyeVN1cHBsaWVkQ2hlY2tlZFN0YXRlOyAvLyBSZXN0b3JlIHRoZSBzdGF0ZSBqUXVlcnkgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudClbJ2JpbmQnXShldmVudFR5cGUsIGhhbmRsZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghbXVzdFVzZUF0dGFjaEV2ZW50ICYmIHR5cGVvZiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIgPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmF0dGFjaEV2ZW50ICE9IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChcIm9uXCIgKyBldmVudFR5cGUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlckV2ZW50OiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRUeXBlKSB7XG4gICAgICAgICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQubm9kZVR5cGUpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVsZW1lbnQgbXVzdCBiZSBhIERPTSBub2RlIHdoZW4gY2FsbGluZyB0cmlnZ2VyRXZlbnRcIik7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnREYXRhID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xpY2tPbkNoZWNrYWJsZUVsZW1lbnQoZWxlbWVudCwgZXZlbnRUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXb3JrIGFyb3VuZCB0aGUgalF1ZXJ5IFwiY2xpY2sgZXZlbnRzIG9uIGNoZWNrYm94ZXNcIiBpc3N1ZSBkZXNjcmliZWQgYWJvdmUgYnkgc3RvcmluZyB0aGUgb3JpZ2luYWwgY2hlY2tlZCBzdGF0ZSBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEucHVzaCh7IGNoZWNrZWRTdGF0ZUJlZm9yZUV2ZW50OiBlbGVtZW50LmNoZWNrZWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50KVsndHJpZ2dlciddKGV2ZW50VHlwZSwgZXZlbnREYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LmNyZWF0ZUV2ZW50ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudC5kaXNwYXRjaEV2ZW50ID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRDYXRlZ29yeSA9IGtub3duRXZlbnRUeXBlc0J5RXZlbnROYW1lW2V2ZW50VHlwZV0gfHwgXCJIVE1MRXZlbnRzXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KGV2ZW50Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5pbml0RXZlbnQoZXZlbnRUeXBlLCB0cnVlLCB0cnVlLCB3aW5kb3csIDAsIDAsIDAsIDAsIDAsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3VwcGxpZWQgZWxlbWVudCBkb2Vzbid0IHN1cHBvcnQgZGlzcGF0Y2hFdmVudFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuZmlyZUV2ZW50ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBVbmxpa2Ugb3RoZXIgYnJvd3NlcnMsIElFIGRvZXNuJ3QgY2hhbmdlIHRoZSBjaGVja2VkIHN0YXRlIG9mIGNoZWNrYm94ZXMvcmFkaW9idXR0b25zIHdoZW4geW91IHRyaWdnZXIgdGhlaXIgXCJjbGlja1wiIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gc28gdG8gbWFrZSBpdCBjb25zaXN0ZW50LCB3ZSdsbCBkbyBpdCBtYW51YWxseSBoZXJlXG4gICAgICAgICAgICAgICAgaWYgKGlzQ2xpY2tPbkNoZWNrYWJsZUVsZW1lbnQoZWxlbWVudCwgZXZlbnRUeXBlKSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gZWxlbWVudC5jaGVja2VkICE9PSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdHJpZ2dlcmluZyBldmVudHNcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW53cmFwT2JzZXJ2YWJsZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28uaXNPYnNlcnZhYmxlKHZhbHVlKSA/IHZhbHVlKCkgOiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBwZWVrT2JzZXJ2YWJsZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28uaXNPYnNlcnZhYmxlKHZhbHVlKSA/IHZhbHVlLnBlZWsoKSA6IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZURvbU5vZGVDc3NDbGFzczogZnVuY3Rpb24gKG5vZGUsIGNsYXNzTmFtZXMsIHNob3VsZEhhdmVDbGFzcykge1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzQ2xhc3NOYW1lUmVnZXggPSAvW1xcdy1dKy9nLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lcyA9IG5vZGUuY2xhc3NOYW1lLm1hdGNoKGNzc0NsYXNzTmFtZVJlZ2V4KSB8fCBbXTtcbiAgICAgICAgICAgICAgICBrby51dGlscy5hcnJheUZvckVhY2goY2xhc3NOYW1lcy5tYXRjaChjc3NDbGFzc05hbWVSZWdleCksIGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZkNsYXNzID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGN1cnJlbnRDbGFzc05hbWVzLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZkNsYXNzID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkSGF2ZUNsYXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDbGFzc05hbWVzLnNwbGljZShpbmRleE9mQ2xhc3MsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZEhhdmVDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGN1cnJlbnRDbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldFRleHRDb250ZW50OiBmdW5jdGlvbihlbGVtZW50LCB0ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh0ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpZiAoKHZhbHVlID09PSBudWxsKSB8fCAodmFsdWUgPT09IHVuZGVmaW5lZCkpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRoZXJlIHRvIGJlIGV4YWN0bHkgb25lIGNoaWxkOiBhIHRleHQgbm9kZS5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gY2hpbGRyZW4sIG1vcmUgdGhhbiBvbmUsIG9yIGlmIGl0J3Mgbm90IGEgdGV4dCBub2RlLFxuICAgICAgICAgICAgICAgIC8vIHdlJ2xsIGNsZWFyIGV2ZXJ5dGhpbmcgYW5kIGNyZWF0ZSBhIHNpbmdsZSB0ZXh0IG5vZGUuXG4gICAgICAgICAgICAgICAgdmFyIGlubmVyVGV4dE5vZGUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIWlubmVyVGV4dE5vZGUgfHwgaW5uZXJUZXh0Tm9kZS5ub2RlVHlwZSAhPSAzIHx8IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhpbm5lclRleHROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuKGVsZW1lbnQsIFtkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbm5lclRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrby51dGlscy5mb3JjZVJlZnJlc2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RWxlbWVudE5hbWU6IGZ1bmN0aW9uKGVsZW1lbnQsIG5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgICAgIC8vIFdvcmthcm91bmQgSUUgNi83IGlzc3VlXG4gICAgICAgICAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTk3XG4gICAgICAgICAgICAvLyAtIGh0dHA6Ly93d3cubWF0dHM0MTEuY29tL3Bvc3Qvc2V0dGluZ190aGVfbmFtZV9hdHRyaWJ1dGVfaW5faWVfZG9tL1xuICAgICAgICAgICAgaWYgKGllVmVyc2lvbiA8PSA3KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5tZXJnZUF0dHJpYnV0ZXMoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIiArIGVsZW1lbnQubmFtZSArIFwiJy8+XCIpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGUpIHt9IC8vIEZvciBJRTkgd2l0aCBkb2MgbW9kZSBcIklFOSBTdGFuZGFyZHNcIiBhbmQgYnJvd3NlciBtb2RlIFwiSUU5IENvbXBhdGliaWxpdHkgVmlld1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9yY2VSZWZyZXNoOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBhbiBJRTkgcmVuZGVyaW5nIGJ1ZyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMjA5XG4gICAgICAgICAgICBpZiAoaWVWZXJzaW9uID49IDkpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgdGV4dCBub2RlcyBhbmQgY29tbWVudCBub2RlcyAobW9zdCBsaWtlbHkgdmlydHVhbCBlbGVtZW50cyksIHdlIHdpbGwgaGF2ZSB0byByZWZyZXNoIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IG5vZGUubm9kZVR5cGUgPT0gMSA/IG5vZGUgOiBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuem9vbSA9IGVsZW0uc3R5bGUuem9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbnN1cmVTZWxlY3RFbGVtZW50SXNSZW5kZXJlZENvcnJlY3RseTogZnVuY3Rpb24oc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgSUU5IHJlbmRlcmluZyBidWcgLSBpdCBkb2Vzbid0IHJlbGlhYmx5IGRpc3BsYXkgYWxsIHRoZSB0ZXh0IGluIGR5bmFtaWNhbGx5LWFkZGVkIHNlbGVjdCBib3hlcyB1bmxlc3MgeW91IGZvcmNlIGl0IHRvIHJlLXJlbmRlciBieSB1cGRhdGluZyB0aGUgd2lkdGguXG4gICAgICAgICAgICAvLyAoU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMzEyLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU5MDg0OTQvc2VsZWN0LW9ubHktc2hvd3MtZmlyc3QtY2hhci1vZi1zZWxlY3RlZC1vcHRpb24pXG4gICAgICAgICAgICBpZiAoaWVWZXJzaW9uID49IDkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IHNlbGVjdEVsZW1lbnQuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmFuZ2U6IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtaW4pO1xuICAgICAgICAgICAgbWF4ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXgpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKylcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFrZUFycmF5OiBmdW5jdGlvbihhcnJheUxpa2VPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJyYXlMaWtlT2JqZWN0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5TGlrZU9iamVjdFtpXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0llNiA6IGlzSWU2LFxuICAgICAgICBpc0llNyA6IGlzSWU3LFxuICAgICAgICBpZVZlcnNpb24gOiBpZVZlcnNpb24sXG5cbiAgICAgICAgZ2V0Rm9ybUZpZWxkczogZnVuY3Rpb24oZm9ybSwgZmllbGROYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRzID0ga28udXRpbHMubWFrZUFycmF5KGZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGtvLnV0aWxzLm1ha2VBcnJheShmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKTtcbiAgICAgICAgICAgIHZhciBpc01hdGNoaW5nRmllbGQgPSAodHlwZW9mIGZpZWxkTmFtZSA9PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uKGZpZWxkKSB7IHJldHVybiBmaWVsZC5uYW1lID09PSBmaWVsZE5hbWUgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZmllbGQpIHsgcmV0dXJuIGZpZWxkTmFtZS50ZXN0KGZpZWxkLm5hbWUpIH07IC8vIFRyZWF0IGZpZWxkTmFtZSBhcyByZWdleCBvciBvYmplY3QgY29udGFpbmluZyBwcmVkaWNhdGVcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZmllbGRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2hpbmdGaWVsZChmaWVsZHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goZmllbGRzW2ldKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZUpzb246IGZ1bmN0aW9uIChqc29uU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb25TdHJpbmcgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGpzb25TdHJpbmcgPSBrby51dGlscy5zdHJpbmdUcmltKGpzb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChqc29uU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuSlNPTiAmJiB3aW5kb3cuSlNPTi5wYXJzZSkgLy8gVXNlIG5hdGl2ZSBwYXJzaW5nIHdoZXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5KU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5ldyBGdW5jdGlvbihcInJldHVybiBcIiArIGpzb25TdHJpbmcpKSgpOyAvLyBGYWxsYmFjayBvbiBsZXNzIHNhZmUgcGFyc2luZyBmb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJpbmdpZnlKc29uOiBmdW5jdGlvbiAoZGF0YSwgcmVwbGFjZXIsIHNwYWNlKSB7ICAgLy8gcmVwbGFjZXIgYW5kIHNwYWNlIGFyZSBvcHRpb25hbFxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgSlNPTiA9PSBcInVuZGVmaW5lZFwiKSB8fCAodHlwZW9mIEpTT04uc3RyaW5naWZ5ID09IFwidW5kZWZpbmVkXCIpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoZGF0YSksIHJlcGxhY2VyLCBzcGFjZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zdEpzb246IGZ1bmN0aW9uICh1cmxPckZvcm0sIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG9wdGlvbnNbJ3BhcmFtcyddIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGluY2x1ZGVGaWVsZHMgPSBvcHRpb25zWydpbmNsdWRlRmllbGRzJ10gfHwgdGhpcy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdDtcbiAgICAgICAgICAgIHZhciB1cmwgPSB1cmxPckZvcm07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIHdlcmUgZ2l2ZW4gYSBmb3JtLCB1c2UgaXRzICdhY3Rpb24nIFVSTCBhbmQgcGljayBvdXQgYW55IHJlcXVlc3RlZCBmaWVsZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmKCh0eXBlb2YgdXJsT3JGb3JtID09ICdvYmplY3QnKSAmJiAoa28udXRpbHMudGFnTmFtZUxvd2VyKHVybE9yRm9ybSkgPT09IFwiZm9ybVwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEZvcm0gPSB1cmxPckZvcm07XG4gICAgICAgICAgICAgICAgdXJsID0gb3JpZ2luYWxGb3JtLmFjdGlvbjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5jbHVkZUZpZWxkcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRzID0ga28udXRpbHMuZ2V0Rm9ybUZpZWxkcyhvcmlnaW5hbEZvcm0sIGluY2x1ZGVGaWVsZHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gZmllbGRzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zW2ZpZWxkc1tqXS5uYW1lXSA9IGZpZWxkc1tqXS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGEgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSB1cmw7XG4gICAgICAgICAgICBmb3JtLm1ldGhvZCA9IFwicG9zdFwiO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGtvLnV0aWxzLnN0cmluZ2lmeUpzb24oa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShkYXRhW2tleV0pKTtcbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgaW5wdXQubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIG9wdGlvbnNbJ3N1Ym1pdHRlciddID8gb3B0aW9uc1snc3VibWl0dGVyJ10oZm9ybSkgOiBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGZvcm0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmb3JtKTsgfSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzJywga28udXRpbHMpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUZvckVhY2gnLCBrby51dGlscy5hcnJheUZvckVhY2gpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUZpcnN0Jywga28udXRpbHMuYXJyYXlGaXJzdCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5RmlsdGVyJywga28udXRpbHMuYXJyYXlGaWx0ZXIpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzJywga28udXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlcyk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5SW5kZXhPZicsIGtvLnV0aWxzLmFycmF5SW5kZXhPZik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmFycmF5TWFwJywga28udXRpbHMuYXJyYXlNYXApO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheVB1c2hBbGwnLCBrby51dGlscy5hcnJheVB1c2hBbGwpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5hcnJheVJlbW92ZUl0ZW0nLCBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0pO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5leHRlbmQnLCBrby51dGlscy5leHRlbmQpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdCcsIGtvLnV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0KTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZ2V0Rm9ybUZpZWxkcycsIGtvLnV0aWxzLmdldEZvcm1GaWVsZHMpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5wZWVrT2JzZXJ2YWJsZScsIGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMucG9zdEpzb24nLCBrby51dGlscy5wb3N0SnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnBhcnNlSnNvbicsIGtvLnV0aWxzLnBhcnNlSnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyJywga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy5zdHJpbmdpZnlKc29uJywga28udXRpbHMuc3RyaW5naWZ5SnNvbik7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLnJhbmdlJywga28udXRpbHMucmFuZ2UpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MnLCBrby51dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3MpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy50cmlnZ2VyRXZlbnQnLCBrby51dGlscy50cmlnZ2VyRXZlbnQpO1xua28uZXhwb3J0U3ltYm9sKCd1dGlscy51bndyYXBPYnNlcnZhYmxlJywga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSk7XG5cbmlmICghRnVuY3Rpb24ucHJvdG90eXBlWydiaW5kJ10pIHtcbiAgICAvLyBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBpcyBhIHN0YW5kYXJkIHBhcnQgb2YgRUNNQVNjcmlwdCA1dGggRWRpdGlvbiAoRGVjZW1iZXIgMjAwOSwgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL3B1YmxpY2F0aW9ucy9maWxlcy9FQ01BLVNUL0VDTUEtMjYyLnBkZilcbiAgICAvLyBJbiBjYXNlIHRoZSBicm93c2VyIGRvZXNuJ3QgaW1wbGVtZW50IGl0IG5hdGl2ZWx5LCBwcm92aWRlIGEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbi4gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIHByb3RvdHlwZS5qc1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZVsnYmluZCddID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxGdW5jdGlvbiA9IHRoaXMsIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLCBvYmplY3QgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbi5hcHBseShvYmplY3QsIGFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuXG5rby51dGlscy5kb21EYXRhID0gbmV3IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuaXF1ZUlkID0gMDtcbiAgICB2YXIgZGF0YVN0b3JlS2V5RXhwYW5kb1Byb3BlcnR5TmFtZSA9IFwiX19rb19fXCIgKyAobmV3IERhdGUpLmdldFRpbWUoKTtcbiAgICB2YXIgZGF0YVN0b3JlID0ge307XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAobm9kZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgYWxsRGF0YUZvck5vZGUgPSBrby51dGlscy5kb21EYXRhLmdldEFsbChub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gYWxsRGF0YUZvck5vZGUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFsbERhdGFGb3JOb2RlW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5vZGUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBkb21EYXRhIGtleSBpZiB3ZSBhcmUgYWN0dWFsbHkgZGVsZXRpbmcgYSB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChrby51dGlscy5kb21EYXRhLmdldEFsbChub2RlLCBmYWxzZSkgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFsbERhdGFGb3JOb2RlID0ga28udXRpbHMuZG9tRGF0YS5nZXRBbGwobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBhbGxEYXRhRm9yTm9kZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEFsbDogZnVuY3Rpb24gKG5vZGUsIGNyZWF0ZUlmTm90Rm91bmQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhU3RvcmVLZXkgPSBub2RlW2RhdGFTdG9yZUtleUV4cGFuZG9Qcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgdmFyIGhhc0V4aXN0aW5nRGF0YVN0b3JlID0gZGF0YVN0b3JlS2V5ICYmIChkYXRhU3RvcmVLZXkgIT09IFwibnVsbFwiKSAmJiBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XTtcbiAgICAgICAgICAgIGlmICghaGFzRXhpc3RpbmdEYXRhU3RvcmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZUlmTm90Rm91bmQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZGF0YVN0b3JlS2V5ID0gbm9kZVtkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lXSA9IFwia29cIiArIHVuaXF1ZUlkKys7XG4gICAgICAgICAgICAgICAgZGF0YVN0b3JlW2RhdGFTdG9yZUtleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhU3RvcmVbZGF0YVN0b3JlS2V5XTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVN0b3JlS2V5ID0gbm9kZVtkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmIChkYXRhU3RvcmVLZXkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVN0b3JlW2RhdGFTdG9yZUtleV07XG4gICAgICAgICAgICAgICAgbm9kZVtkYXRhU3RvcmVLZXlFeHBhbmRvUHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEV4cG9zaW5nIFwiZGlkIGNsZWFuXCIgZmxhZyBwdXJlbHkgc28gc3BlY3MgY2FuIGluZmVyIHdoZXRoZXIgdGhpbmdzIGhhdmUgYmVlbiBjbGVhbmVkIHVwIGFzIGludGVuZGVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbURhdGEnLCBrby51dGlscy5kb21EYXRhKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tRGF0YS5jbGVhcicsIGtvLnV0aWxzLmRvbURhdGEuY2xlYXIpOyAvLyBFeHBvcnRpbmcgb25seSBzbyBzcGVjcyBjYW4gY2xlYXIgdXAgYWZ0ZXIgdGhlbXNlbHZlcyBmdWxseVxuXG5rby51dGlscy5kb21Ob2RlRGlzcG9zYWwgPSBuZXcgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZG9tRGF0YUtleSA9IFwiX19rb19kb21Ob2RlRGlzcG9zYWxfX1wiICsgKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG4gICAgdmFyIGNsZWFuYWJsZU5vZGVUeXBlcyA9IHsgMTogdHJ1ZSwgODogdHJ1ZSwgOTogdHJ1ZSB9OyAgICAgICAvLyBFbGVtZW50LCBDb21tZW50LCBEb2N1bWVudFxuICAgIHZhciBjbGVhbmFibGVOb2RlVHlwZXNXaXRoRGVzY2VuZGFudHMgPSB7IDE6IHRydWUsIDk6IHRydWUgfTsgLy8gRWxlbWVudCwgRG9jdW1lbnRcblxuICAgIGZ1bmN0aW9uIGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGNyZWF0ZUlmTm90Rm91bmQpIHtcbiAgICAgICAgdmFyIGFsbERpc3Bvc2VDYWxsYmFja3MgPSBrby51dGlscy5kb21EYXRhLmdldChub2RlLCBkb21EYXRhS2V5KTtcbiAgICAgICAgaWYgKChhbGxEaXNwb3NlQ2FsbGJhY2tzID09PSB1bmRlZmluZWQpICYmIGNyZWF0ZUlmTm90Rm91bmQpIHtcbiAgICAgICAgICAgIGFsbERpc3Bvc2VDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIGRvbURhdGFLZXksIGFsbERpc3Bvc2VDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGxEaXNwb3NlQ2FsbGJhY2tzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95Q2FsbGJhY2tzQ29sbGVjdGlvbihub2RlKSB7XG4gICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KG5vZGUsIGRvbURhdGFLZXksIHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW5TaW5nbGVOb2RlKG5vZGUpIHtcbiAgICAgICAgLy8gUnVuIGFsbCB0aGUgZGlzcG9zZSBjYWxsYmFja3NcbiAgICAgICAgdmFyIGNhbGxiYWNrcyA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApOyAvLyBDbG9uZSwgYXMgdGhlIGFycmF5IG1heSBiZSBtb2RpZmllZCBkdXJpbmcgaXRlcmF0aW9uICh0eXBpY2FsbHksIGNhbGxiYWNrcyB3aWxsIHJlbW92ZSB0aGVtc2VsdmVzKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxzbyBlcmFzZSB0aGUgRE9NIGRhdGFcbiAgICAgICAga28udXRpbHMuZG9tRGF0YS5jbGVhcihub2RlKTtcblxuICAgICAgICAvLyBTcGVjaWFsIHN1cHBvcnQgZm9yIGpRdWVyeSBoZXJlIGJlY2F1c2UgaXQncyBzbyBjb21tb25seSB1c2VkLlxuICAgICAgICAvLyBNYW55IGpRdWVyeSBwbHVnaW5zIChpbmNsdWRpbmcganF1ZXJ5LnRtcGwpIHN0b3JlIGRhdGEgdXNpbmcgalF1ZXJ5J3MgZXF1aXZhbGVudCBvZiBkb21EYXRhXG4gICAgICAgIC8vIHNvIG5vdGlmeSBpdCB0byB0ZWFyIGRvd24gYW55IHJlc291cmNlcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5vZGUgJiBkZXNjZW5kYW50cyBoZXJlLlxuICAgICAgICBpZiAoKHR5cGVvZiBqUXVlcnkgPT0gXCJmdW5jdGlvblwiKSAmJiAodHlwZW9mIGpRdWVyeVsnY2xlYW5EYXRhJ10gPT0gXCJmdW5jdGlvblwiKSlcbiAgICAgICAgICAgIGpRdWVyeVsnY2xlYW5EYXRhJ10oW25vZGVdKTtcblxuICAgICAgICAvLyBBbHNvIGNsZWFyIGFueSBpbW1lZGlhdGUtY2hpbGQgY29tbWVudCBub2RlcywgYXMgdGhlc2Ugd291bGRuJ3QgaGF2ZSBiZWVuIGZvdW5kIGJ5XG4gICAgICAgIC8vIG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIGluIGNsZWFuTm9kZSgpIChjb21tZW50IG5vZGVzIGFyZW4ndCBlbGVtZW50cylcbiAgICAgICAgaWYgKGNsZWFuYWJsZU5vZGVUeXBlc1dpdGhEZXNjZW5kYW50c1tub2RlLm5vZGVUeXBlXSlcbiAgICAgICAgICAgIGNsZWFuSW1tZWRpYXRlQ29tbWVudFR5cGVDaGlsZHJlbihub2RlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbkltbWVkaWF0ZUNvbW1lbnRUeXBlQ2hpbGRyZW4obm9kZVdpdGhDaGlsZHJlbikge1xuICAgICAgICB2YXIgY2hpbGQsIG5leHRDaGlsZCA9IG5vZGVXaXRoQ2hpbGRyZW4uZmlyc3RDaGlsZDtcbiAgICAgICAgd2hpbGUgKGNoaWxkID0gbmV4dENoaWxkKSB7XG4gICAgICAgICAgICBuZXh0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gOClcbiAgICAgICAgICAgICAgICBjbGVhblNpbmdsZU5vZGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkRGlzcG9zZUNhbGxiYWNrIDogZnVuY3Rpb24obm9kZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIHRydWUpLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZURpc3Bvc2VDYWxsYmFjayA6IGZ1bmN0aW9uKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzQ29sbGVjdGlvbiA9IGdldERpc3Bvc2VDYWxsYmFja3NDb2xsZWN0aW9uKG5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NDb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKGNhbGxiYWNrc0NvbGxlY3Rpb24sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzQ29sbGVjdGlvbi5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgZGVzdHJveUNhbGxiYWNrc0NvbGxlY3Rpb24obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlYW5Ob2RlIDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgLy8gRmlyc3QgY2xlYW4gdGhpcyBub2RlLCB3aGVyZSBhcHBsaWNhYmxlXG4gICAgICAgICAgICBpZiAoY2xlYW5hYmxlTm9kZVR5cGVzW25vZGUubm9kZVR5cGVdKSB7XG4gICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gLi4uIHRoZW4gaXRzIGRlc2NlbmRhbnRzLCB3aGVyZSBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuYWJsZU5vZGVUeXBlc1dpdGhEZXNjZW5kYW50c1tub2RlLm5vZGVUeXBlXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgZGVzY2VuZGFudHMgbGlzdCBpbiBjYXNlIGl0IGNoYW5nZXMgZHVyaW5nIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzY2VuZGFudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGRlc2NlbmRhbnRzLCBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gZGVzY2VuZGFudHMubGVuZ3RoOyBpIDwgajsgaSsrKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5TaW5nbGVOb2RlKGRlc2NlbmRhbnRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVOb2RlIDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAga28uY2xlYW5Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xua28uY2xlYW5Ob2RlID0ga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmNsZWFuTm9kZTsgLy8gU2hvcnRoYW5kIG5hbWUgZm9yIGNvbnZlbmllbmNlXG5rby5yZW1vdmVOb2RlID0ga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZU5vZGU7IC8vIFNob3J0aGFuZCBuYW1lIGZvciBjb252ZW5pZW5jZVxua28uZXhwb3J0U3ltYm9sKCdjbGVhbk5vZGUnLCBrby5jbGVhbk5vZGUpO1xua28uZXhwb3J0U3ltYm9sKCdyZW1vdmVOb2RlJywga28ucmVtb3ZlTm9kZSk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbU5vZGVEaXNwb3NhbCcsIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbCk7XG5rby5leHBvcnRTeW1ib2woJ3V0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2snLCBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFjaycsIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2spO1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVhZGluZ0NvbW1lbnRSZWdleCA9IC9eKFxccyopPCEtLSguKj8pLS0+LztcblxuICAgIGZ1bmN0aW9uIHNpbXBsZUh0bWxQYXJzZShodG1sKSB7XG4gICAgICAgIC8vIEJhc2VkIG9uIGpRdWVyeSdzIFwiY2xlYW5cIiBmdW5jdGlvbiwgYnV0IG9ubHkgYWNjb3VudGluZyBmb3IgdGFibGUtcmVsYXRlZCBlbGVtZW50cy5cbiAgICAgICAgLy8gSWYgeW91IGhhdmUgcmVmZXJlbmNlZCBqUXVlcnksIHRoaXMgd29uJ3QgYmUgdXNlZCBhbnl3YXkgLSBLTyB3aWxsIHVzZSBqUXVlcnkncyBcImNsZWFuXCIgZnVuY3Rpb24gZGlyZWN0bHlcblxuICAgICAgICAvLyBOb3RlIHRoYXQgdGhlcmUncyBzdGlsbCBhbiBpc3N1ZSBpbiBJRSA8IDkgd2hlcmVieSBpdCB3aWxsIGRpc2NhcmQgY29tbWVudCBub2RlcyB0aGF0IGFyZSB0aGUgZmlyc3QgY2hpbGQgb2ZcbiAgICAgICAgLy8gYSBkZXNjZW5kYW50IG5vZGUuIEZvciBleGFtcGxlOiBcIjxkaXY+PCEtLSBteWNvbW1lbnQgLS0+YWJjPC9kaXY+XCIgd2lsbCBnZXQgcGFyc2VkIGFzIFwiPGRpdj5hYmM8L2Rpdj5cIlxuICAgICAgICAvLyBUaGlzIHdvbid0IGFmZmVjdCBhbnlvbmUgd2hvIGhhcyByZWZlcmVuY2VkIGpRdWVyeSwgYW5kIHRoZXJlJ3MgYWx3YXlzIHRoZSB3b3JrYXJvdW5kIG9mIGluc2VydGluZyBhIGR1bW15IG5vZGVcbiAgICAgICAgLy8gKHBvc3NpYmx5IGEgdGV4dCBub2RlKSBpbiBmcm9udCBvZiB0aGUgY29tbWVudC4gU28sIEtPIGRvZXMgbm90IGF0dGVtcHQgdG8gd29ya2Fyb3VuZCB0aGlzIElFIGlzc3VlIGF1dG9tYXRpY2FsbHkgYXQgcHJlc2VudC5cblxuICAgICAgICAvLyBUcmltIHdoaXRlc3BhY2UsIG90aGVyd2lzZSBpbmRleE9mIHdvbid0IHdvcmsgYXMgZXhwZWN0ZWRcbiAgICAgICAgdmFyIHRhZ3MgPSBrby51dGlscy5zdHJpbmdUcmltKGh0bWwpLnRvTG93ZXJDYXNlKCksIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRmluZHMgdGhlIGZpcnN0IG1hdGNoIGZyb20gdGhlIGxlZnQgY29sdW1uLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBcIndyYXBcIiBkYXRhIGZyb20gdGhlIHJpZ2h0IGNvbHVtblxuICAgICAgICB2YXIgd3JhcCA9IHRhZ3MubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pICAgICAgICAgICAgICAmJiBbMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIl0gfHxcbiAgICAgICAgICAgICAgICAgICAhdGFncy5pbmRleE9mKFwiPHRyXCIpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBbMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIl0gfHxcbiAgICAgICAgICAgICAgICAgICAoIXRhZ3MuaW5kZXhPZihcIjx0ZFwiKSB8fCAhdGFncy5pbmRleE9mKFwiPHRoXCIpKSAgICYmIFszLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSB8fFxuICAgICAgICAgICAgICAgICAgIC8qIGFueXRoaW5nIGVsc2UgKi8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMCwgXCJcIiwgXCJcIl07XG5cbiAgICAgICAgLy8gR28gdG8gaHRtbCBhbmQgYmFjaywgdGhlbiBwZWVsIG9mZiBleHRyYSB3cmFwcGVyc1xuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgYWx3YXlzIHByZWZpeCB3aXRoIHNvbWUgZHVtbXkgdGV4dCwgYmVjYXVzZSBvdGhlcndpc2UsIElFPDkgd2lsbCBzdHJpcCBvdXQgbGVhZGluZyBjb21tZW50IG5vZGVzIGluIGRlc2NlbmRhbnRzLiBUb3RhbCBtYWRuZXNzLlxuICAgICAgICB2YXIgbWFya3VwID0gXCJpZ25vcmVkPGRpdj5cIiArIHdyYXBbMV0gKyBodG1sICsgd3JhcFsyXSArIFwiPC9kaXY+XCI7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Wydpbm5lclNoaXYnXSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh3aW5kb3dbJ2lubmVyU2hpdiddKG1hcmt1cCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1vdmUgdG8gdGhlIHJpZ2h0IGRlcHRoXG4gICAgICAgIHdoaWxlICh3cmFwWzBdLS0pXG4gICAgICAgICAgICBkaXYgPSBkaXYubGFzdENoaWxkO1xuXG4gICAgICAgIHJldHVybiBrby51dGlscy5tYWtlQXJyYXkoZGl2Lmxhc3RDaGlsZC5jaGlsZE5vZGVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBqUXVlcnlIdG1sUGFyc2UoaHRtbCkge1xuICAgICAgICAvLyBqUXVlcnkncyBcInBhcnNlSFRNTFwiIGZ1bmN0aW9uIHdhcyBpbnRyb2R1Y2VkIGluIGpRdWVyeSAxLjguMCBhbmQgaXMgYSBkb2N1bWVudGVkIHB1YmxpYyBBUEkuXG4gICAgICAgIGlmIChqUXVlcnlbJ3BhcnNlSFRNTCddKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5WydwYXJzZUhUTUwnXShodG1sKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZvciBqUXVlcnkgPCAxLjguMCwgd2UgZmFsbCBiYWNrIG9uIHRoZSB1bmRvY3VtZW50ZWQgaW50ZXJuYWwgXCJjbGVhblwiIGZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIGVsZW1zID0galF1ZXJ5WydjbGVhbiddKFtodG1sXSk7XG5cbiAgICAgICAgICAgIC8vIEFzIG9mIGpRdWVyeSAxLjcuMSwgalF1ZXJ5IHBhcnNlcyB0aGUgSFRNTCBieSBhcHBlbmRpbmcgaXQgdG8gc29tZSBkdW1teSBwYXJlbnQgbm9kZXMgaGVsZCBpbiBhbiBpbi1tZW1vcnkgZG9jdW1lbnQgZnJhZ21lbnQuXG4gICAgICAgICAgICAvLyBVbmZvcnR1bmF0ZWx5LCBpdCBuZXZlciBjbGVhcnMgdGhlIGR1bW15IHBhcmVudCBub2RlcyBmcm9tIHRoZSBkb2N1bWVudCBmcmFnbWVudCwgc28gaXQgbGVha3MgbWVtb3J5IG92ZXIgdGltZS5cbiAgICAgICAgICAgIC8vIEZpeCB0aGlzIGJ5IGZpbmRpbmcgdGhlIHRvcC1tb3N0IGR1bW15IHBhcmVudCBlbGVtZW50LCBhbmQgZGV0YWNoaW5nIGl0IGZyb20gaXRzIG93bmVyIGZyYWdtZW50LlxuICAgICAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgdG9wLW1vc3QgcGFyZW50IGVsZW1lbnQgdGhhdCdzIGEgZGlyZWN0IGNoaWxkIG9mIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IGVsZW1zWzBdO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSAxMSAvKiBpLmUuLCBEb2N1bWVudEZyYWdtZW50ICovKVxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIC8vIC4uLiB0aGVuIGRldGFjaCBpdFxuICAgICAgICAgICAgICAgIGlmIChlbGVtLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9ICd1bmRlZmluZWQnID8galF1ZXJ5SHRtbFBhcnNlKGh0bWwpICAgLy8gQXMgYmVsb3csIGJlbmVmaXQgZnJvbSBqUXVlcnkncyBvcHRpbWlzYXRpb25zIHdoZXJlIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2ltcGxlSHRtbFBhcnNlKGh0bWwpOyAgLy8gLi4uIG90aGVyd2lzZSwgdGhpcyBzaW1wbGUgbG9naWMgd2lsbCBkbyBpbiBtb3N0IGNvbW1vbiBjYXNlcy5cbiAgICB9O1xuXG4gICAga28udXRpbHMuc2V0SHRtbCA9IGZ1bmN0aW9uKG5vZGUsIGh0bWwpIHtcbiAgICAgICAga28udXRpbHMuZW1wdHlEb21Ob2RlKG5vZGUpO1xuXG4gICAgICAgIC8vIFRoZXJlJ3Mgbm8gbGVnaXRpbWF0ZSByZWFzb24gdG8gZGlzcGxheSBhIHN0cmluZ2lmaWVkIG9ic2VydmFibGUgd2l0aG91dCB1bndyYXBwaW5nIGl0LCBzbyB3ZSdsbCB1bndyYXAgaXRcbiAgICAgICAgaHRtbCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoaHRtbCk7XG5cbiAgICAgICAgaWYgKChodG1sICE9PSBudWxsKSAmJiAoaHRtbCAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBodG1sICE9ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIC8vIGpRdWVyeSBjb250YWlucyBhIGxvdCBvZiBzb3BoaXN0aWNhdGVkIGNvZGUgdG8gcGFyc2UgYXJiaXRyYXJ5IEhUTUwgZnJhZ21lbnRzLFxuICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgPHRyPiBlbGVtZW50cyB3aGljaCBhcmUgbm90IG5vcm1hbGx5IGFsbG93ZWQgdG8gZXhpc3Qgb24gdGhlaXIgb3duLlxuICAgICAgICAgICAgLy8gSWYgeW91J3ZlIHJlZmVyZW5jZWQgalF1ZXJ5IHdlJ2xsIHVzZSB0aGF0IHJhdGhlciB0aGFuIGR1cGxpY2F0aW5nIGl0cyBjb2RlLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkobm9kZSlbJ2h0bWwnXShodG1sKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uIG90aGVyd2lzZSwgdXNlIEtPJ3Mgb3duIHBhcnNpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZE5vZGVzID0ga28udXRpbHMucGFyc2VIdG1sRnJhZ21lbnQoaHRtbCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJzZWROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChwYXJzZWROb2Rlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCd1dGlscy5wYXJzZUh0bWxGcmFnbWVudCcsIGtvLnV0aWxzLnBhcnNlSHRtbEZyYWdtZW50KTtcbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuc2V0SHRtbCcsIGtvLnV0aWxzLnNldEh0bWwpO1xuXG5rby5tZW1vaXphdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lbW9zID0ge307XG5cbiAgICBmdW5jdGlvbiByYW5kb21NYXg4SGV4Q2hhcnMoKSB7XG4gICAgICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKCkge1xuICAgICAgICByZXR1cm4gcmFuZG9tTWF4OEhleENoYXJzKCkgKyByYW5kb21NYXg4SGV4Q2hhcnMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZE1lbW9Ob2Rlcyhyb290Tm9kZSwgYXBwZW5kVG9BcnJheSkge1xuICAgICAgICBpZiAoIXJvb3ROb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT0gOCkge1xuICAgICAgICAgICAgdmFyIG1lbW9JZCA9IGtvLm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHQocm9vdE5vZGUubm9kZVZhbHVlKTtcbiAgICAgICAgICAgIGlmIChtZW1vSWQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICBhcHBlbmRUb0FycmF5LnB1c2goeyBkb21Ob2RlOiByb290Tm9kZSwgbWVtb0lkOiBtZW1vSWQgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNoaWxkTm9kZXMgPSByb290Tm9kZS5jaGlsZE5vZGVzLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgZmluZE1lbW9Ob2RlcyhjaGlsZE5vZGVzW2ldLCBhcHBlbmRUb0FycmF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lbW9pemU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBvbmx5IHBhc3MgYSBmdW5jdGlvbiB0byBrby5tZW1vaXphdGlvbi5tZW1vaXplKClcIik7XG4gICAgICAgICAgICB2YXIgbWVtb0lkID0gZ2VuZXJhdGVSYW5kb21JZCgpO1xuICAgICAgICAgICAgbWVtb3NbbWVtb0lkXSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIFwiPCEtLVtrb19tZW1vOlwiICsgbWVtb0lkICsgXCJdLS0+XCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5tZW1vaXplOiBmdW5jdGlvbiAobWVtb0lkLCBjYWxsYmFja1BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gbWVtb3NbbWVtb0lkXTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIiArIG1lbW9JZCArIFwiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBjYWxsYmFja1BhcmFtcyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgZGVsZXRlIG1lbW9zW21lbW9JZF07IH1cbiAgICAgICAgfSxcblxuICAgICAgICB1bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHM6IGZ1bmN0aW9uIChkb21Ob2RlLCBleHRyYUNhbGxiYWNrUGFyYW1zQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBtZW1vcyA9IFtdO1xuICAgICAgICAgICAgZmluZE1lbW9Ob2Rlcyhkb21Ob2RlLCBtZW1vcyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IG1lbW9zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbWVtb3NbaV0uZG9tTm9kZTtcbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRQYXJhbXMgPSBbbm9kZV07XG4gICAgICAgICAgICAgICAgaWYgKGV4dHJhQ2FsbGJhY2tQYXJhbXNBcnJheSlcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlQdXNoQWxsKGNvbWJpbmVkUGFyYW1zLCBleHRyYUNhbGxiYWNrUGFyYW1zQXJyYXkpO1xuICAgICAgICAgICAgICAgIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZShtZW1vc1tpXS5tZW1vSWQsIGNvbWJpbmVkUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9IFwiXCI7IC8vIE5ldXRlciB0aGlzIG5vZGUgc28gd2UgZG9uJ3QgdHJ5IHRvIHVubWVtb2l6ZSBpdCBhZ2FpblxuICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTsgLy8gSWYgcG9zc2libGUsIGVyYXNlIGl0IHRvdGFsbHkgKG5vdCBhbHdheXMgcG9zc2libGUgLSBzb21lb25lIGVsc2UgbWlnaHQganVzdCBob2xkIGEgcmVmZXJlbmNlIHRvIGl0IHRoZW4gY2FsbCB1bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHMgYWdhaW4pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2VNZW1vVGV4dDogZnVuY3Rpb24gKG1lbW9UZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2ggPSBtZW1vVGV4dC5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uJywga28ubWVtb2l6YXRpb24pO1xua28uZXhwb3J0U3ltYm9sKCdtZW1vaXphdGlvbi5tZW1vaXplJywga28ubWVtb2l6YXRpb24ubWVtb2l6ZSk7XG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnVubWVtb2l6ZScsIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZSk7XG5rby5leHBvcnRTeW1ib2woJ21lbW9pemF0aW9uLnBhcnNlTWVtb1RleHQnLCBrby5tZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0KTtcbmtvLmV4cG9ydFN5bWJvbCgnbWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzJywga28ubWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzKTtcbmtvLmV4dGVuZGVycyA9IHtcbiAgICAndGhyb3R0bGUnOiBmdW5jdGlvbih0YXJnZXQsIHRpbWVvdXQpIHtcbiAgICAgICAgLy8gVGhyb3R0bGluZyBtZWFucyB0d28gdGhpbmdzOlxuXG4gICAgICAgIC8vICgxKSBGb3IgZGVwZW5kZW50IG9ic2VydmFibGVzLCB3ZSB0aHJvdHRsZSAqZXZhbHVhdGlvbnMqIHNvIHRoYXQsIG5vIG1hdHRlciBob3cgZmFzdCBpdHMgZGVwZW5kZW5jaWVzXG4gICAgICAgIC8vICAgICBub3RpZnkgdXBkYXRlcywgdGhlIHRhcmdldCBkb2Vzbid0IHJlLWV2YWx1YXRlIChhbmQgaGVuY2UgZG9lc24ndCBub3RpZnkpIGZhc3RlciB0aGFuIGEgY2VydGFpbiByYXRlXG4gICAgICAgIHRhcmdldFsndGhyb3R0bGVFdmFsdWF0aW9uJ10gPSB0aW1lb3V0O1xuXG4gICAgICAgIC8vICgyKSBGb3Igd3JpdGFibGUgdGFyZ2V0cyAob2JzZXJ2YWJsZXMsIG9yIHdyaXRhYmxlIGRlcGVuZGVudCBvYnNlcnZhYmxlcyksIHdlIHRocm90dGxlICp3cml0ZXMqXG4gICAgICAgIC8vICAgICBzbyB0aGUgdGFyZ2V0IGNhbm5vdCBjaGFuZ2UgdmFsdWUgc3luY2hyb25vdXNseSBvciBmYXN0ZXIgdGhhbiBhIGNlcnRhaW4gcmF0ZVxuICAgICAgICB2YXIgd3JpdGVUaW1lb3V0SW5zdGFuY2UgPSBudWxsO1xuICAgICAgICByZXR1cm4ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSh7XG4gICAgICAgICAgICAncmVhZCc6IHRhcmdldCxcbiAgICAgICAgICAgICd3cml0ZSc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHdyaXRlVGltZW91dEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB3cml0ZVRpbWVvdXRJbnN0YW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAnbm90aWZ5JzogZnVuY3Rpb24odGFyZ2V0LCBub3RpZnlXaGVuKSB7XG4gICAgICAgIHRhcmdldFtcImVxdWFsaXR5Q29tcGFyZXJcIl0gPSBub3RpZnlXaGVuID09IFwiYWx3YXlzXCJcbiAgICAgICAgICAgID8gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZSB9IC8vIFRyZWF0IGFsbCB2YWx1ZXMgYXMgbm90IGVxdWFsXG4gICAgICAgICAgICA6IGtvLm9ic2VydmFibGVbXCJmblwiXVtcImVxdWFsaXR5Q29tcGFyZXJcIl07XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYXBwbHlFeHRlbmRlcnMocmVxdWVzdGVkRXh0ZW5kZXJzKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHJlcXVlc3RlZEV4dGVuZGVycykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmVxdWVzdGVkRXh0ZW5kZXJzKSB7XG4gICAgICAgICAgICB2YXIgZXh0ZW5kZXJIYW5kbGVyID0ga28uZXh0ZW5kZXJzW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV4dGVuZGVySGFuZGxlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZXh0ZW5kZXJIYW5kbGVyKHRhcmdldCwgcmVxdWVzdGVkRXh0ZW5kZXJzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmtvLmV4cG9ydFN5bWJvbCgnZXh0ZW5kZXJzJywga28uZXh0ZW5kZXJzKTtcblxua28uc3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldCwgY2FsbGJhY2ssIGRpc3Bvc2VDYWxsYmFjaykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmRpc3Bvc2VDYWxsYmFjayA9IGRpc3Bvc2VDYWxsYmFjaztcbiAgICBrby5leHBvcnRQcm9wZXJ0eSh0aGlzLCAnZGlzcG9zZScsIHRoaXMuZGlzcG9zZSk7XG59O1xua28uc3Vic2NyaXB0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgdGhpcy5kaXNwb3NlQ2FsbGJhY2soKTtcbn07XG5cbmtvLnN1YnNjcmliYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0ge307XG5cbiAgICBrby51dGlscy5leHRlbmQodGhpcywga28uc3Vic2NyaWJhYmxlWydmbiddKTtcbiAgICBrby5leHBvcnRQcm9wZXJ0eSh0aGlzLCAnc3Vic2NyaWJlJywgdGhpcy5zdWJzY3JpYmUpO1xuICAgIGtvLmV4cG9ydFByb3BlcnR5KHRoaXMsICdleHRlbmQnLCB0aGlzLmV4dGVuZCk7XG4gICAga28uZXhwb3J0UHJvcGVydHkodGhpcywgJ2dldFN1YnNjcmlwdGlvbnNDb3VudCcsIHRoaXMuZ2V0U3Vic2NyaXB0aW9uc0NvdW50KTtcbn1cblxudmFyIGRlZmF1bHRFdmVudCA9IFwiY2hhbmdlXCI7XG5cbmtvLnN1YnNjcmliYWJsZVsnZm4nXSA9IHtcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChjYWxsYmFjaywgY2FsbGJhY2tUYXJnZXQsIGV2ZW50KSB7XG4gICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgZGVmYXVsdEV2ZW50O1xuICAgICAgICB2YXIgYm91bmRDYWxsYmFjayA9IGNhbGxiYWNrVGFyZ2V0ID8gY2FsbGJhY2suYmluZChjYWxsYmFja1RhcmdldCkgOiBjYWxsYmFjaztcblxuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IGtvLnN1YnNjcmlwdGlvbih0aGlzLCBib3VuZENhbGxiYWNrLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBrby51dGlscy5hcnJheVJlbW92ZUl0ZW0odGhpcy5fc3Vic2NyaXB0aW9uc1tldmVudF0sIHN1YnNjcmlwdGlvbik7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XSlcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdID0gW107XG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgXCJub3RpZnlTdWJzY3JpYmVyc1wiOiBmdW5jdGlvbiAodmFsdWVUb05vdGlmeSwgZXZlbnQpIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBkZWZhdWx0RXZlbnQ7XG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50XSkge1xuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKHRoaXMuX3N1YnNjcmlwdGlvbnNbZXZlbnRdLnNsaWNlKDApLCBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgYSBzdWJzY3JpcHRpb24gd2FzIGRpc3Bvc2VkIGR1cmluZyB0aGUgYXJyYXlGb3JFYWNoIGN5Y2xlLCBjaGVja1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgaXNEaXNwb3NlZCBvbiBlYWNoIHN1YnNjcmlwdGlvbiBiZWZvcmUgaW52b2tpbmcgaXRzIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24gJiYgKHN1YnNjcmlwdGlvbi5pc0Rpc3Bvc2VkICE9PSB0cnVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5jYWxsYmFjayh2YWx1ZVRvTm90aWZ5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFN1YnNjcmlwdGlvbnNDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG90YWwgPSAwO1xuICAgICAgICBmb3IgKHZhciBldmVudE5hbWUgaW4gdGhpcy5fc3Vic2NyaXB0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSlcbiAgICAgICAgICAgICAgICB0b3RhbCArPSB0aGlzLl9zdWJzY3JpcHRpb25zW2V2ZW50TmFtZV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LFxuXG4gICAgZXh0ZW5kOiBhcHBseUV4dGVuZGVyc1xufTtcblxuXG5rby5pc1N1YnNjcmliYWJsZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHJldHVybiB0eXBlb2YgaW5zdGFuY2Uuc3Vic2NyaWJlID09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgaW5zdGFuY2VbXCJub3RpZnlTdWJzY3JpYmVyc1wiXSA9PSBcImZ1bmN0aW9uXCI7XG59O1xuXG5rby5leHBvcnRTeW1ib2woJ3N1YnNjcmliYWJsZScsIGtvLnN1YnNjcmliYWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2lzU3Vic2NyaWJhYmxlJywga28uaXNTdWJzY3JpYmFibGUpO1xuXG5rby5kZXBlbmRlbmN5RGV0ZWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2ZyYW1lcyA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmVnaW46IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgX2ZyYW1lcy5wdXNoKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBkaXN0aW5jdERlcGVuZGVuY2llczpbXSB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9mcmFtZXMucG9wKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVnaXN0ZXJEZXBlbmRlbmN5OiBmdW5jdGlvbiAoc3Vic2NyaWJhYmxlKSB7XG4gICAgICAgICAgICBpZiAoIWtvLmlzU3Vic2NyaWJhYmxlKHN1YnNjcmliYWJsZSkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpO1xuICAgICAgICAgICAgaWYgKF9mcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciB0b3BGcmFtZSA9IF9mcmFtZXNbX2ZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRvcEZyYW1lIHx8IGtvLnV0aWxzLmFycmF5SW5kZXhPZih0b3BGcmFtZS5kaXN0aW5jdERlcGVuZGVuY2llcywgc3Vic2NyaWJhYmxlKSA+PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdG9wRnJhbWUuZGlzdGluY3REZXBlbmRlbmNpZXMucHVzaChzdWJzY3JpYmFibGUpO1xuICAgICAgICAgICAgICAgIHRvcEZyYW1lLmNhbGxiYWNrKHN1YnNjcmliYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaWdub3JlOiBmdW5jdGlvbihjYWxsYmFjaywgY2FsbGJhY2tUYXJnZXQsIGNhbGxiYWNrQXJncykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBfZnJhbWVzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrVGFyZ2V0LCBjYWxsYmFja0FyZ3MgfHwgW10pO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfZnJhbWVzLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG52YXIgcHJpbWl0aXZlVHlwZXMgPSB7ICd1bmRlZmluZWQnOnRydWUsICdib29sZWFuJzp0cnVlLCAnbnVtYmVyJzp0cnVlLCAnc3RyaW5nJzp0cnVlIH07XG5cbmtvLm9ic2VydmFibGUgPSBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIF9sYXRlc3RWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcblxuICAgIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gV3JpdGVcblxuICAgICAgICAgICAgLy8gSWdub3JlIHdyaXRlcyBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWRcbiAgICAgICAgICAgIGlmICgoIW9ic2VydmFibGVbJ2VxdWFsaXR5Q29tcGFyZXInXSkgfHwgIW9ic2VydmFibGVbJ2VxdWFsaXR5Q29tcGFyZXInXShfbGF0ZXN0VmFsdWUsIGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgICAgIF9sYXRlc3RWYWx1ZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpIG9ic2VydmFibGUuX2xhdGVzdFZhbHVlID0gX2xhdGVzdFZhbHVlO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gUGVybWl0cyBjaGFpbmVkIGFzc2lnbm1lbnRzXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBSZWFkXG4gICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLnJlZ2lzdGVyRGVwZW5kZW5jeShvYnNlcnZhYmxlKTsgLy8gVGhlIGNhbGxlciBvbmx5IG5lZWRzIHRvIGJlIG5vdGlmaWVkIG9mIGNoYW5nZXMgaWYgdGhleSBkaWQgYSBcInJlYWRcIiBvcGVyYXRpb25cbiAgICAgICAgICAgIHJldHVybiBfbGF0ZXN0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKERFQlVHKSBvYnNlcnZhYmxlLl9sYXRlc3RWYWx1ZSA9IF9sYXRlc3RWYWx1ZTtcbiAgICBrby5zdWJzY3JpYmFibGUuY2FsbChvYnNlcnZhYmxlKTtcbiAgICBvYnNlcnZhYmxlLnBlZWsgPSBmdW5jdGlvbigpIHsgcmV0dXJuIF9sYXRlc3RWYWx1ZSB9O1xuICAgIG9ic2VydmFibGUudmFsdWVIYXNNdXRhdGVkID0gZnVuY3Rpb24gKCkgeyBvYnNlcnZhYmxlW1wibm90aWZ5U3Vic2NyaWJlcnNcIl0oX2xhdGVzdFZhbHVlKTsgfVxuICAgIG9ic2VydmFibGUudmFsdWVXaWxsTXV0YXRlID0gZnVuY3Rpb24gKCkgeyBvYnNlcnZhYmxlW1wibm90aWZ5U3Vic2NyaWJlcnNcIl0oX2xhdGVzdFZhbHVlLCBcImJlZm9yZUNoYW5nZVwiKTsgfVxuICAgIGtvLnV0aWxzLmV4dGVuZChvYnNlcnZhYmxlLCBrby5vYnNlcnZhYmxlWydmbiddKTtcblxuICAgIGtvLmV4cG9ydFByb3BlcnR5KG9ic2VydmFibGUsICdwZWVrJywgb2JzZXJ2YWJsZS5wZWVrKTtcbiAgICBrby5leHBvcnRQcm9wZXJ0eShvYnNlcnZhYmxlLCBcInZhbHVlSGFzTXV0YXRlZFwiLCBvYnNlcnZhYmxlLnZhbHVlSGFzTXV0YXRlZCk7XG4gICAga28uZXhwb3J0UHJvcGVydHkob2JzZXJ2YWJsZSwgXCJ2YWx1ZVdpbGxNdXRhdGVcIiwgb2JzZXJ2YWJsZS52YWx1ZVdpbGxNdXRhdGUpO1xuXG4gICAgcmV0dXJuIG9ic2VydmFibGU7XG59XG5cbmtvLm9ic2VydmFibGVbJ2ZuJ10gPSB7XG4gICAgXCJlcXVhbGl0eUNvbXBhcmVyXCI6IGZ1bmN0aW9uIHZhbHVlc0FyZVByaW1pdGl2ZUFuZEVxdWFsKGEsIGIpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlSXNQcmltaXRpdmUgPSAoYSA9PT0gbnVsbCkgfHwgKHR5cGVvZihhKSBpbiBwcmltaXRpdmVUeXBlcyk7XG4gICAgICAgIHJldHVybiBvbGRWYWx1ZUlzUHJpbWl0aXZlID8gKGEgPT09IGIpIDogZmFsc2U7XG4gICAgfVxufTtcblxudmFyIHByb3RvUHJvcGVydHkgPSBrby5vYnNlcnZhYmxlLnByb3RvUHJvcGVydHkgPSBcIl9fa29fcHJvdG9fX1wiO1xua28ub2JzZXJ2YWJsZVsnZm4nXVtwcm90b1Byb3BlcnR5XSA9IGtvLm9ic2VydmFibGU7XG5cbmtvLmhhc1Byb3RvdHlwZSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBwcm90b3R5cGUpIHtcbiAgICBpZiAoKGluc3RhbmNlID09PSBudWxsKSB8fCAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkgfHwgKGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSB1bmRlZmluZWQpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGluc3RhbmNlW3Byb3RvUHJvcGVydHldID09PSBwcm90b3R5cGUpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0sIHByb3RvdHlwZSk7IC8vIFdhbGsgdGhlIHByb3RvdHlwZSBjaGFpblxufTtcblxua28uaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGtvLmhhc1Byb3RvdHlwZShpbnN0YW5jZSwga28ub2JzZXJ2YWJsZSk7XG59XG5rby5pc1dyaXRlYWJsZU9ic2VydmFibGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyBPYnNlcnZhYmxlXG4gICAgaWYgKCh0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiKSAmJiBpbnN0YW5jZVtwcm90b1Byb3BlcnR5XSA9PT0ga28ub2JzZXJ2YWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gV3JpdGVhYmxlIGRlcGVuZGVudCBvYnNlcnZhYmxlXG4gICAgaWYgKCh0eXBlb2YgaW5zdGFuY2UgPT0gXCJmdW5jdGlvblwiKSAmJiAoaW5zdGFuY2VbcHJvdG9Qcm9wZXJ0eV0gPT09IGtvLmRlcGVuZGVudE9ic2VydmFibGUpICYmIChpbnN0YW5jZS5oYXNXcml0ZUZ1bmN0aW9uKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gQW55dGhpbmcgZWxzZVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG5rby5leHBvcnRTeW1ib2woJ29ic2VydmFibGUnLCBrby5vYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNPYnNlcnZhYmxlJywga28uaXNPYnNlcnZhYmxlKTtcbmtvLmV4cG9ydFN5bWJvbCgnaXNXcml0ZWFibGVPYnNlcnZhYmxlJywga28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKTtcbmtvLm9ic2VydmFibGVBcnJheSA9IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAvLyBaZXJvLXBhcmFtZXRlciBjb25zdHJ1Y3RvciBpbml0aWFsaXplcyB0byBlbXB0eSBhcnJheVxuICAgICAgICBpbml0aWFsVmFsdWVzID0gW107XG4gICAgfVxuICAgIGlmICgoaW5pdGlhbFZhbHVlcyAhPT0gbnVsbCkgJiYgKGluaXRpYWxWYWx1ZXMgIT09IHVuZGVmaW5lZCkgJiYgISgnbGVuZ3RoJyBpbiBpbml0aWFsVmFsdWVzKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7XG5cbiAgICB2YXIgcmVzdWx0ID0ga28ub2JzZXJ2YWJsZShpbml0aWFsVmFsdWVzKTtcbiAgICBrby51dGlscy5leHRlbmQocmVzdWx0LCBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ10pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmtvLm9ic2VydmFibGVBcnJheVsnZm4nXSA9IHtcbiAgICAncmVtb3ZlJzogZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgcmVtb3ZlZFZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiID8gdmFsdWVPclByZWRpY2F0ZSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IHZhbHVlT3JQcmVkaWNhdGU7IH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5kZXJseWluZ0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB1bmRlcmx5aW5nQXJyYXlbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZW1vdmVkVmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW1vdmVkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlZFZhbHVlcztcbiAgICB9LFxuXG4gICAgJ3JlbW92ZUFsbCc6IGZ1bmN0aW9uIChhcnJheU9mVmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHlvdSBwYXNzZWQgemVybyBhcmdzLCB3ZSByZW1vdmUgZXZlcnl0aGluZ1xuICAgICAgICBpZiAoYXJyYXlPZlZhbHVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdW5kZXJseWluZ0FycmF5ID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgYWxsVmFsdWVzID0gdW5kZXJseWluZ0FycmF5LnNsaWNlKDApO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVdpbGxNdXRhdGUoKTtcbiAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheS5zcGxpY2UoMCwgdW5kZXJseWluZ0FycmF5Lmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFsbFZhbHVlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB5b3UgcGFzc2VkIGFuIGFyZywgd2UgaW50ZXJwcmV0IGl0IGFzIGFuIGFycmF5IG9mIGVudHJpZXMgdG8gcmVtb3ZlXG4gICAgICAgIGlmICghYXJyYXlPZlZhbHVlcylcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ3JlbW92ZSddKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mVmFsdWVzLCB2YWx1ZSkgPj0gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgICdkZXN0cm95JzogZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpO1xuICAgICAgICB2YXIgcHJlZGljYXRlID0gdHlwZW9mIHZhbHVlT3JQcmVkaWNhdGUgPT0gXCJmdW5jdGlvblwiID8gdmFsdWVPclByZWRpY2F0ZSA6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IHZhbHVlT3JQcmVkaWNhdGU7IH07XG4gICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSB1bmRlcmx5aW5nQXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVuZGVybHlpbmdBcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKVxuICAgICAgICAgICAgICAgIHVuZGVybHlpbmdBcnJheVtpXVtcIl9kZXN0cm95XCJdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlSGFzTXV0YXRlZCgpO1xuICAgIH0sXG5cbiAgICAnZGVzdHJveUFsbCc6IGZ1bmN0aW9uIChhcnJheU9mVmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHlvdSBwYXNzZWQgemVybyBhcmdzLCB3ZSBkZXN0cm95IGV2ZXJ5dGhpbmdcbiAgICAgICAgaWYgKGFycmF5T2ZWYWx1ZXMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzWydkZXN0cm95J10oZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlIH0pO1xuXG4gICAgICAgIC8vIElmIHlvdSBwYXNzZWQgYW4gYXJnLCB3ZSBpbnRlcnByZXQgaXQgYXMgYW4gYXJyYXkgb2YgZW50cmllcyB0byBkZXN0cm95XG4gICAgICAgIGlmICghYXJyYXlPZlZhbHVlcylcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ2Rlc3Ryb3knXShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXlPZlZhbHVlcywgdmFsdWUpID49IDA7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAnaW5kZXhPZic6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzKCk7XG4gICAgICAgIHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YodW5kZXJseWluZ0FycmF5LCBpdGVtKTtcbiAgICB9LFxuXG4gICAgJ3JlcGxhY2UnOiBmdW5jdGlvbihvbGRJdGVtLCBuZXdJdGVtKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXNbJ2luZGV4T2YnXShvbGRJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVXaWxsTXV0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBlZWsoKVtpbmRleF0gPSBuZXdJdGVtO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUhhc011dGF0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUG9wdWxhdGUga28ub2JzZXJ2YWJsZUFycmF5LmZuIHdpdGggcmVhZC93cml0ZSBmdW5jdGlvbnMgZnJvbSBuYXRpdmUgYXJyYXlzXG4vLyBJbXBvcnRhbnQ6IERvIG5vdCBhZGQgYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25zIGhlcmUgdGhhdCBtYXkgcmVhc29uYWJseSBiZSB1c2VkIHRvICpyZWFkKiBkYXRhIGZyb20gdGhlIGFycmF5XG4vLyBiZWNhdXNlIHdlJ2xsIGV2YWwgdGhlbSB3aXRob3V0IGNhdXNpbmcgc3Vic2NyaXB0aW9ucywgc28ga28uY29tcHV0ZWQgb3V0cHV0IGNvdWxkIGVuZCB1cCBnZXR0aW5nIHN0YWxlXG5rby51dGlscy5hcnJheUZvckVhY2goW1wicG9wXCIsIFwicHVzaFwiLCBcInJldmVyc2VcIiwgXCJzaGlmdFwiLCBcInNvcnRcIiwgXCJzcGxpY2VcIiwgXCJ1bnNoaWZ0XCJdLCBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIGtvLm9ic2VydmFibGVBcnJheVsnZm4nXVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlIFwicGVla1wiIHRvIGF2b2lkIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGluIGFueSBjb21wdXRlZCB0aGF0IHdlJ3JlIGV4ZWN1dGluZyBpbiB0aGUgY29udGV4dCBvZlxuICAgICAgICAvLyAoZm9yIGNvbnNpc3RlbmN5IHdpdGggbXV0YXRpbmcgcmVndWxhciBvYnNlcnZhYmxlcylcbiAgICAgICAgdmFyIHVuZGVybHlpbmdBcnJheSA9IHRoaXMucGVlaygpO1xuICAgICAgICB0aGlzLnZhbHVlV2lsbE11dGF0ZSgpO1xuICAgICAgICB2YXIgbWV0aG9kQ2FsbFJlc3VsdCA9IHVuZGVybHlpbmdBcnJheVttZXRob2ROYW1lXS5hcHBseSh1bmRlcmx5aW5nQXJyYXksIGFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudmFsdWVIYXNNdXRhdGVkKCk7XG4gICAgICAgIHJldHVybiBtZXRob2RDYWxsUmVzdWx0O1xuICAgIH07XG59KTtcblxuLy8gUG9wdWxhdGUga28ub2JzZXJ2YWJsZUFycmF5LmZuIHdpdGggcmVhZC1vbmx5IGZ1bmN0aW9ucyBmcm9tIG5hdGl2ZSBhcnJheXNcbmtvLnV0aWxzLmFycmF5Rm9yRWFjaChbXCJzbGljZVwiXSwgZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgICBrby5vYnNlcnZhYmxlQXJyYXlbJ2ZuJ11bbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bmRlcmx5aW5nQXJyYXkgPSB0aGlzKCk7XG4gICAgICAgIHJldHVybiB1bmRlcmx5aW5nQXJyYXlbbWV0aG9kTmFtZV0uYXBwbHkodW5kZXJseWluZ0FycmF5LCBhcmd1bWVudHMpO1xuICAgIH07XG59KTtcblxua28uZXhwb3J0U3ltYm9sKCdvYnNlcnZhYmxlQXJyYXknLCBrby5vYnNlcnZhYmxlQXJyYXkpO1xua28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucywgZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2xhdGVzdFZhbHVlLFxuICAgICAgICBfaGFzQmVlbkV2YWx1YXRlZCA9IGZhbHNlLFxuICAgICAgICBfaXNCZWluZ0V2YWx1YXRlZCA9IGZhbHNlLFxuICAgICAgICByZWFkRnVuY3Rpb24gPSBldmFsdWF0b3JGdW5jdGlvbk9yT3B0aW9ucztcblxuICAgIGlmIChyZWFkRnVuY3Rpb24gJiYgdHlwZW9mIHJlYWRGdW5jdGlvbiA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIC8vIFNpbmdsZS1wYXJhbWV0ZXIgc3ludGF4IC0gZXZlcnl0aGluZyBpcyBvbiB0aGlzIFwib3B0aW9uc1wiIHBhcmFtXG4gICAgICAgIG9wdGlvbnMgPSByZWFkRnVuY3Rpb247XG4gICAgICAgIHJlYWRGdW5jdGlvbiA9IG9wdGlvbnNbXCJyZWFkXCJdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE11bHRpLXBhcmFtZXRlciBzeW50YXggLSBjb25zdHJ1Y3QgdGhlIG9wdGlvbnMgYWNjb3JkaW5nIHRvIHRoZSBwYXJhbXMgcGFzc2VkXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIXJlYWRGdW5jdGlvbilcbiAgICAgICAgICAgIHJlYWRGdW5jdGlvbiA9IG9wdGlvbnNbXCJyZWFkXCJdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHJlYWRGdW5jdGlvbiAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKTtcblxuICAgIGZ1bmN0aW9uIGFkZFN1YnNjcmlwdGlvblRvRGVwZW5kZW5jeShzdWJzY3JpYmFibGUpIHtcbiAgICAgICAgX3N1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcy5wdXNoKHN1YnNjcmliYWJsZS5zdWJzY3JpYmUoZXZhbHVhdGVQb3NzaWJseUFzeW5jKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZUFsbFN1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcygpIHtcbiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKF9zdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzID0gW107XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZhbHVhdGVQb3NzaWJseUFzeW5jKCkge1xuICAgICAgICB2YXIgdGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCA9IGRlcGVuZGVudE9ic2VydmFibGVbJ3Rocm90dGxlRXZhbHVhdGlvbiddO1xuICAgICAgICBpZiAodGhyb3R0bGVFdmFsdWF0aW9uVGltZW91dCAmJiB0aHJvdHRsZUV2YWx1YXRpb25UaW1lb3V0ID49IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChldmFsdWF0aW9uVGltZW91dEluc3RhbmNlKTtcbiAgICAgICAgICAgIGV2YWx1YXRpb25UaW1lb3V0SW5zdGFuY2UgPSBzZXRUaW1lb3V0KGV2YWx1YXRlSW1tZWRpYXRlLCB0aHJvdHRsZUV2YWx1YXRpb25UaW1lb3V0KTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBldmFsdWF0ZUltbWVkaWF0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2YWx1YXRlSW1tZWRpYXRlKCkge1xuICAgICAgICBpZiAoX2lzQmVpbmdFdmFsdWF0ZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBldmFsdWF0aW9uIG9mIGEga28uY29tcHV0ZWQgY2F1c2VzIHNpZGUgZWZmZWN0cywgaXQncyBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgdHJpZ2dlciBpdHMgb3duIHJlLWV2YWx1YXRpb24uXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCBkZXNpcmFibGUgKGl0J3MgaGFyZCBmb3IgYSBkZXZlbG9wZXIgdG8gcmVhbGlzZSBhIGNoYWluIG9mIGRlcGVuZGVuY2llcyBtaWdodCBjYXVzZSB0aGlzLCBhbmQgdGhleSBhbG1vc3RcbiAgICAgICAgICAgIC8vIGNlcnRhaW5seSBkaWRuJ3QgaW50ZW5kIGluZmluaXRlIHJlLWV2YWx1YXRpb25zKS4gU28sIGZvciBwcmVkaWN0YWJpbGl0eSwgd2Ugc2ltcGx5IHByZXZlbnQga28uY29tcHV0ZWRzIGZyb20gY2F1c2luZ1xuICAgICAgICAgICAgLy8gdGhlaXIgb3duIHJlLWV2YWx1YXRpb24uIEZ1cnRoZXIgZGlzY3Vzc2lvbiBhdCBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zODdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGRpc3Bvc2Ugb24gZmlyc3QgZXZhbHVhdGlvbiwgYmVjYXVzZSB0aGUgXCJkaXNwb3NlV2hlblwiIGNhbGxiYWNrIG1pZ2h0XG4gICAgICAgIC8vIGUuZy4sIGRpc3Bvc2Ugd2hlbiB0aGUgYXNzb2NpYXRlZCBET00gZWxlbWVudCBpc24ndCBpbiB0aGUgZG9jLCBhbmQgaXQncyBub3RcbiAgICAgICAgLy8gZ29pbmcgdG8gYmUgaW4gdGhlIGRvYyB1bnRpbCAqYWZ0ZXIqIHRoZSBmaXJzdCBldmFsdWF0aW9uXG4gICAgICAgIGlmIChfaGFzQmVlbkV2YWx1YXRlZCAmJiBkaXNwb3NlV2hlbigpKSB7XG4gICAgICAgICAgICBkaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfaXNCZWluZ0V2YWx1YXRlZCA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsbHksIHdlIGFzc3VtZSB0aGF0IG5vbmUgb2YgdGhlIHN1YnNjcmlwdGlvbnMgYXJlIHN0aWxsIGJlaW5nIHVzZWQgKGkuZS4sIGFsbCBhcmUgY2FuZGlkYXRlcyBmb3IgZGlzcG9zYWwpLlxuICAgICAgICAgICAgLy8gVGhlbiwgZHVyaW5nIGV2YWx1YXRpb24sIHdlIGNyb3NzIG9mZiBhbnkgdGhhdCBhcmUgaW4gZmFjdCBzdGlsbCBiZWluZyB1c2VkLlxuICAgICAgICAgICAgdmFyIGRpc3Bvc2FsQ2FuZGlkYXRlcyA9IGtvLnV0aWxzLmFycmF5TWFwKF9zdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMsIGZ1bmN0aW9uKGl0ZW0pIHtyZXR1cm4gaXRlbS50YXJnZXQ7fSk7XG5cbiAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uYmVnaW4oZnVuY3Rpb24oc3Vic2NyaWJhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluT2xkO1xuICAgICAgICAgICAgICAgIGlmICgoaW5PbGQgPSBrby51dGlscy5hcnJheUluZGV4T2YoZGlzcG9zYWxDYW5kaWRhdGVzLCBzdWJzY3JpYmFibGUpKSA+PSAwKVxuICAgICAgICAgICAgICAgICAgICBkaXNwb3NhbENhbmRpZGF0ZXNbaW5PbGRdID0gdW5kZWZpbmVkOyAvLyBEb24ndCB3YW50IHRvIGRpc3Bvc2UgdGhpcyBzdWJzY3JpcHRpb24sIGFzIGl0J3Mgc3RpbGwgYmVpbmcgdXNlZFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYWRkU3Vic2NyaXB0aW9uVG9EZXBlbmRlbmN5KHN1YnNjcmliYWJsZSk7IC8vIEJyYW5kIG5ldyBzdWJzY3JpcHRpb24gLSBhZGQgaXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSByZWFkRnVuY3Rpb24uY2FsbChldmFsdWF0b3JGdW5jdGlvblRhcmdldCk7XG5cbiAgICAgICAgICAgIC8vIEZvciBlYWNoIHN1YnNjcmlwdGlvbiBubyBsb25nZXIgYmVpbmcgdXNlZCwgcmVtb3ZlIGl0IGZyb20gdGhlIGFjdGl2ZSBzdWJzY3JpcHRpb25zIGxpc3QgYW5kIGRpc3Bvc2UgaXRcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBkaXNwb3NhbENhbmRpZGF0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzcG9zYWxDYW5kaWRhdGVzW2ldKVxuICAgICAgICAgICAgICAgICAgICBfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzLnNwbGljZShpLCAxKVswXS5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfaGFzQmVlbkV2YWx1YXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGRlcGVuZGVudE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShfbGF0ZXN0VmFsdWUsIFwiYmVmb3JlQ2hhbmdlXCIpO1xuICAgICAgICAgICAgX2xhdGVzdFZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBpZiAoREVCVUcpIGRlcGVuZGVudE9ic2VydmFibGUuX2xhdGVzdFZhbHVlID0gX2xhdGVzdFZhbHVlO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlcGVuZGVudE9ic2VydmFibGVbXCJub3RpZnlTdWJzY3JpYmVyc1wiXShfbGF0ZXN0VmFsdWUpO1xuICAgICAgICBfaXNCZWluZ0V2YWx1YXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIV9zdWJzY3JpcHRpb25zVG9EZXBlbmRlbmNpZXMubGVuZ3RoKVxuICAgICAgICAgICAgZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlcGVuZGVudE9ic2VydmFibGUoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cml0ZUZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXcml0aW5nIGEgdmFsdWVcbiAgICAgICAgICAgICAgICB3cml0ZUZ1bmN0aW9uLmFwcGx5KGV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzOyAvLyBQZXJtaXRzIGNoYWluZWQgYXNzaWdubWVudHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlYWRpbmcgdGhlIHZhbHVlXG4gICAgICAgICAgICBpZiAoIV9oYXNCZWVuRXZhbHVhdGVkKVxuICAgICAgICAgICAgICAgIGV2YWx1YXRlSW1tZWRpYXRlKCk7XG4gICAgICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLnJlZ2lzdGVyRGVwZW5kZW5jeShkZXBlbmRlbnRPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIHJldHVybiBfbGF0ZXN0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWVrKCkge1xuICAgICAgICBpZiAoIV9oYXNCZWVuRXZhbHVhdGVkKVxuICAgICAgICAgICAgZXZhbHVhdGVJbW1lZGlhdGUoKTtcbiAgICAgICAgcmV0dXJuIF9sYXRlc3RWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICFfaGFzQmVlbkV2YWx1YXRlZCB8fCBfc3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLy8gQnkgaGVyZSwgXCJvcHRpb25zXCIgaXMgYWx3YXlzIG5vbi1udWxsXG4gICAgdmFyIHdyaXRlRnVuY3Rpb24gPSBvcHRpb25zW1wid3JpdGVcIl0sXG4gICAgICAgIGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCA9IG9wdGlvbnNbXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgfHwgbnVsbCxcbiAgICAgICAgZGlzcG9zZVdoZW4gPSBvcHRpb25zW1wiZGlzcG9zZVdoZW5cIl0gfHwgb3B0aW9ucy5kaXNwb3NlV2hlbiB8fCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBkaXNwb3NlID0gZGlzcG9zZUFsbFN1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcyxcbiAgICAgICAgX3N1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcyA9IFtdLFxuICAgICAgICBldmFsdWF0aW9uVGltZW91dEluc3RhbmNlID0gbnVsbDtcblxuICAgIGlmICghZXZhbHVhdG9yRnVuY3Rpb25UYXJnZXQpXG4gICAgICAgIGV2YWx1YXRvckZ1bmN0aW9uVGFyZ2V0ID0gb3B0aW9uc1tcIm93bmVyXCJdO1xuXG4gICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5wZWVrID0gcGVlaztcbiAgICBkZXBlbmRlbnRPYnNlcnZhYmxlLmdldERlcGVuZGVuY2llc0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3N1YnNjcmlwdGlvbnNUb0RlcGVuZGVuY2llcy5sZW5ndGg7IH07XG4gICAgZGVwZW5kZW50T2JzZXJ2YWJsZS5oYXNXcml0ZUZ1bmN0aW9uID0gdHlwZW9mIG9wdGlvbnNbXCJ3cml0ZVwiXSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIGRlcGVuZGVudE9ic2VydmFibGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHsgZGlzcG9zZSgpOyB9O1xuICAgIGRlcGVuZGVudE9ic2VydmFibGUuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcblxuICAgIGtvLnN1YnNjcmliYWJsZS5jYWxsKGRlcGVuZGVudE9ic2VydmFibGUpO1xuICAgIGtvLnV0aWxzLmV4dGVuZChkZXBlbmRlbnRPYnNlcnZhYmxlLCBrby5kZXBlbmRlbnRPYnNlcnZhYmxlWydmbiddKTtcblxuICAgIGtvLmV4cG9ydFByb3BlcnR5KGRlcGVuZGVudE9ic2VydmFibGUsICdwZWVrJywgZGVwZW5kZW50T2JzZXJ2YWJsZS5wZWVrKTtcbiAgICBrby5leHBvcnRQcm9wZXJ0eShkZXBlbmRlbnRPYnNlcnZhYmxlLCAnZGlzcG9zZScsIGRlcGVuZGVudE9ic2VydmFibGUuZGlzcG9zZSk7XG4gICAga28uZXhwb3J0UHJvcGVydHkoZGVwZW5kZW50T2JzZXJ2YWJsZSwgJ2lzQWN0aXZlJywgZGVwZW5kZW50T2JzZXJ2YWJsZS5pc0FjdGl2ZSk7XG4gICAga28uZXhwb3J0UHJvcGVydHkoZGVwZW5kZW50T2JzZXJ2YWJsZSwgJ2dldERlcGVuZGVuY2llc0NvdW50JywgZGVwZW5kZW50T2JzZXJ2YWJsZS5nZXREZXBlbmRlbmNpZXNDb3VudCk7XG5cbiAgICAvLyBFdmFsdWF0ZSwgdW5sZXNzIGRlZmVyRXZhbHVhdGlvbiBpcyB0cnVlXG4gICAgaWYgKG9wdGlvbnNbJ2RlZmVyRXZhbHVhdGlvbiddICE9PSB0cnVlKVxuICAgICAgICBldmFsdWF0ZUltbWVkaWF0ZSgpO1xuXG4gICAgLy8gQnVpbGQgXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIiBhbmQgXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRDYWxsYmFja1wiIG9wdGlvbiB2YWx1ZXMuXG4gICAgLy8gQnV0IHNraXAgaWYgaXNBY3RpdmUgaXMgZmFsc2UgKHRoZXJlIHdpbGwgbmV2ZXIgYmUgYW55IGRlcGVuZGVuY2llcyB0byBkaXNwb3NlKS5cbiAgICAvLyAoTm90ZTogXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIiBvcHRpb24gYm90aCBwcm9hY3RpdmVseSBkaXNwb3NlcyBhcyBzb29uIGFzIHRoZSBub2RlIGlzIHJlbW92ZWQgdXNpbmcga28ucmVtb3ZlTm9kZSgpLFxuICAgIC8vIHBsdXMgYWRkcyBhIFwiZGlzcG9zZVdoZW5cIiBjYWxsYmFjayB0aGF0LCBvbiBlYWNoIGV2YWx1YXRpb24sIGRpc3Bvc2VzIGlmIHRoZSBub2RlIHdhcyByZW1vdmVkIGJ5IHNvbWUgb3RoZXIgbWVhbnMuKVxuICAgIGlmIChkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgJiYgaXNBY3RpdmUoKSkge1xuICAgICAgICBkaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrKGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCwgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICAgICAgICBkaXNwb3NlQWxsU3Vic2NyaXB0aW9uc1RvRGVwZW5kZW5jaWVzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkLCBkaXNwb3NlKTtcbiAgICAgICAgdmFyIGV4aXN0aW5nRGlzcG9zZVdoZW5GdW5jdGlvbiA9IGRpc3Bvc2VXaGVuO1xuICAgICAgICBkaXNwb3NlV2hlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAha28udXRpbHMuZG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCkgfHwgZXhpc3RpbmdEaXNwb3NlV2hlbkZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVwZW5kZW50T2JzZXJ2YWJsZTtcbn07XG5cbmtvLmlzQ29tcHV0ZWQgPSBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgIHJldHVybiBrby5oYXNQcm90b3R5cGUoaW5zdGFuY2UsIGtvLmRlcGVuZGVudE9ic2VydmFibGUpO1xufTtcblxudmFyIHByb3RvUHJvcCA9IGtvLm9ic2VydmFibGUucHJvdG9Qcm9wZXJ0eTsgLy8gPT0gXCJfX2tvX3Byb3RvX19cIlxua28uZGVwZW5kZW50T2JzZXJ2YWJsZVtwcm90b1Byb3BdID0ga28ub2JzZXJ2YWJsZTtcblxua28uZGVwZW5kZW50T2JzZXJ2YWJsZVsnZm4nXSA9IHt9O1xua28uZGVwZW5kZW50T2JzZXJ2YWJsZVsnZm4nXVtwcm90b1Byb3BdID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblxua28uZXhwb3J0U3ltYm9sKCdkZXBlbmRlbnRPYnNlcnZhYmxlJywga28uZGVwZW5kZW50T2JzZXJ2YWJsZSk7XG5rby5leHBvcnRTeW1ib2woJ2NvbXB1dGVkJywga28uZGVwZW5kZW50T2JzZXJ2YWJsZSk7IC8vIE1ha2UgXCJrby5jb21wdXRlZFwiIGFuIGFsaWFzIGZvciBcImtvLmRlcGVuZGVudE9ic2VydmFibGVcIlxua28uZXhwb3J0U3ltYm9sKCdpc0NvbXB1dGVkJywga28uaXNDb21wdXRlZCk7XG5cbihmdW5jdGlvbigpIHtcbiAgICB2YXIgbWF4TmVzdGVkT2JzZXJ2YWJsZURlcHRoID0gMTA7IC8vIEVzY2FwZSB0aGUgKHVubGlrZWx5KSBwYXRoYWxvZ2ljYWwgY2FzZSB3aGVyZSBhbiBvYnNlcnZhYmxlJ3MgY3VycmVudCB2YWx1ZSBpcyBpdHNlbGYgKG9yIHNpbWlsYXIgcmVmZXJlbmNlIGN5Y2xlKVxuXG4gICAga28udG9KUyA9IGZ1bmN0aW9uKHJvb3RPYmplY3QpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7XG5cbiAgICAgICAgLy8gV2UganVzdCB1bndyYXAgZXZlcnl0aGluZyBhdCBldmVyeSBsZXZlbCBpbiB0aGUgb2JqZWN0IGdyYXBoXG4gICAgICAgIHJldHVybiBtYXBKc09iamVjdEdyYXBoKHJvb3RPYmplY3QsIGZ1bmN0aW9uKHZhbHVlVG9NYXApIHtcbiAgICAgICAgICAgIC8vIExvb3AgYmVjYXVzZSBhbiBvYnNlcnZhYmxlJ3MgdmFsdWUgbWlnaHQgaW4gdHVybiBiZSBhbm90aGVyIG9ic2VydmFibGUgd3JhcHBlclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGtvLmlzT2JzZXJ2YWJsZSh2YWx1ZVRvTWFwKSAmJiAoaSA8IG1heE5lc3RlZE9ic2VydmFibGVEZXB0aCk7IGkrKylcbiAgICAgICAgICAgICAgICB2YWx1ZVRvTWFwID0gdmFsdWVUb01hcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9NYXA7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBrby50b0pTT04gPSBmdW5jdGlvbihyb290T2JqZWN0LCByZXBsYWNlciwgc3BhY2UpIHsgICAgIC8vIHJlcGxhY2VyIGFuZCBzcGFjZSBhcmUgb3B0aW9uYWxcbiAgICAgICAgdmFyIHBsYWluSmF2YVNjcmlwdE9iamVjdCA9IGtvLnRvSlMocm9vdE9iamVjdCk7XG4gICAgICAgIHJldHVybiBrby51dGlscy5zdHJpbmdpZnlKc29uKHBsYWluSmF2YVNjcmlwdE9iamVjdCwgcmVwbGFjZXIsIHNwYWNlKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFwSnNPYmplY3RHcmFwaChyb290T2JqZWN0LCBtYXBJbnB1dENhbGxiYWNrLCB2aXNpdGVkT2JqZWN0cykge1xuICAgICAgICB2aXNpdGVkT2JqZWN0cyA9IHZpc2l0ZWRPYmplY3RzIHx8IG5ldyBvYmplY3RMb29rdXAoKTtcblxuICAgICAgICByb290T2JqZWN0ID0gbWFwSW5wdXRDYWxsYmFjayhyb290T2JqZWN0KTtcbiAgICAgICAgdmFyIGNhbkhhdmVQcm9wZXJ0aWVzID0gKHR5cGVvZiByb290T2JqZWN0ID09IFwib2JqZWN0XCIpICYmIChyb290T2JqZWN0ICE9PSBudWxsKSAmJiAocm9vdE9iamVjdCAhPT0gdW5kZWZpbmVkKSAmJiAoIShyb290T2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkpO1xuICAgICAgICBpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKVxuICAgICAgICAgICAgcmV0dXJuIHJvb3RPYmplY3Q7XG5cbiAgICAgICAgdmFyIG91dHB1dFByb3BlcnRpZXMgPSByb290T2JqZWN0IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9O1xuICAgICAgICB2aXNpdGVkT2JqZWN0cy5zYXZlKHJvb3RPYmplY3QsIG91dHB1dFByb3BlcnRpZXMpO1xuXG4gICAgICAgIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uKGluZGV4ZXIpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gbWFwSW5wdXRDYWxsYmFjayhyb290T2JqZWN0W2luZGV4ZXJdKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcHJvcGVydHlWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0UHJvcGVydGllc1tpbmRleGVyXSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c2x5TWFwcGVkVmFsdWUgPSB2aXNpdGVkT2JqZWN0cy5nZXQocHJvcGVydHlWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFByb3BlcnRpZXNbaW5kZXhlcl0gPSAocHJldmlvdXNseU1hcHBlZFZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByZXZpb3VzbHlNYXBwZWRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXBKc09iamVjdEdyYXBoKHByb3BlcnR5VmFsdWUsIG1hcElucHV0Q2FsbGJhY2ssIHZpc2l0ZWRPYmplY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvdXRwdXRQcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIHZpc2l0b3JDYWxsYmFjaykge1xuICAgICAgICBpZiAocm9vdE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RPYmplY3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKGkpO1xuXG4gICAgICAgICAgICAvLyBGb3IgYXJyYXlzLCBhbHNvIHJlc3BlY3QgdG9KU09OIHByb3BlcnR5IGZvciBjdXN0b20gbWFwcGluZ3MgKGZpeGVzICMyNzgpXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3RPYmplY3RbJ3RvSlNPTiddID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdmlzaXRvckNhbGxiYWNrKCd0b0pTT04nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiByb290T2JqZWN0KVxuICAgICAgICAgICAgICAgIHZpc2l0b3JDYWxsYmFjayhwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9iamVjdExvb2t1cCgpIHtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnNhdmUgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihrZXlzLCBrZXkpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nSW5kZXggPj0gMClcbiAgICAgICAgICAgICAgICB2YWx1ZXNbZXhpc3RpbmdJbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gKGV4aXN0aW5nSW5kZXggPj0gMCkgPyB2YWx1ZXNbZXhpc3RpbmdJbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG4gICAgfTtcbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndG9KUycsIGtvLnRvSlMpO1xua28uZXhwb3J0U3ltYm9sKCd0b0pTT04nLCBrby50b0pTT04pO1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eSA9ICdfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXyc7XG5cbiAgICAvLyBOb3JtYWxseSwgU0VMRUNUIGVsZW1lbnRzIGFuZCB0aGVpciBPUFRJT05zIGNhbiBvbmx5IHRha2UgdmFsdWUgb2YgdHlwZSAnc3RyaW5nJyAoYmVjYXVzZSB0aGUgdmFsdWVzXG4gICAgLy8gYXJlIHN0b3JlZCBvbiBET00gYXR0cmlidXRlcykuIGtvLnNlbGVjdEV4dGVuc2lvbnMgcHJvdmlkZXMgYSB3YXkgZm9yIFNFTEVDVHMvT1BUSU9OcyB0byBoYXZlIHZhbHVlc1xuICAgIC8vIHRoYXQgYXJlIGFyYml0cmFyeSBvYmplY3RzLiBUaGlzIGlzIHZlcnkgY29udmVuaWVudCB3aGVuIGltcGxlbWVudGluZyB0aGluZ3MgbGlrZSBjYXNjYWRpbmcgZHJvcGRvd25zLlxuICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMgPSB7XG4gICAgICAgIHJlYWRWYWx1ZSA6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eV0gPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQoZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzLm9wdGlvbnMub3B0aW9uVmFsdWVEb21EYXRhS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmllVmVyc2lvbiA8PSA3XG4gICAgICAgICAgICAgICAgICAgICAgICA/IChlbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUoJ3ZhbHVlJykuc3BlY2lmaWVkID8gZWxlbWVudC52YWx1ZSA6IGVsZW1lbnQudGV4dClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5zZWxlY3RlZEluZGV4ID49IDAgPyBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50Lm9wdGlvbnNbZWxlbWVudC5zZWxlY3RlZEluZGV4XSkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd3JpdGVWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3B0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmRvbURhdGEuc2V0KGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVycy5vcHRpb25zLm9wdGlvblZhbHVlRG9tRGF0YUtleSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRG9tRGF0YUV4cGFuZG9Qcm9wZXJ0eSBpbiBlbGVtZW50KSB7IC8vIElFIDw9IDggdGhyb3dzIGVycm9ycyBpZiB5b3UgZGVsZXRlIG5vbi1leGlzdGVudCBwcm9wZXJ0aWVzIGZyb20gYSBET00gbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudFtoYXNEb21EYXRhRXhwYW5kb1Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSBhcmJpdHJhcnkgb2JqZWN0IHVzaW5nIERvbURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCBrby5iaW5kaW5nSGFuZGxlcnMub3B0aW9ucy5vcHRpb25WYWx1ZURvbURhdGFLZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2hhc0RvbURhdGFFeHBhbmRvUHJvcGVydHldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwZWNpYWwgdHJlYXRtZW50IG9mIG51bWJlcnMgaXMganVzdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gS08gMS4yLjEgd3JvdGUgbnVtZXJpY2FsIHZhbHVlcyB0byBlbGVtZW50LnZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyB2YWx1ZSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGVsZW1lbnQub3B0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQub3B0aW9uc1tpXSkgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICgodmFsdWUgPT09IG51bGwpIHx8ICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ3NlbGVjdEV4dGVuc2lvbnMnLCBrby5zZWxlY3RFeHRlbnNpb25zKTtcbmtvLmV4cG9ydFN5bWJvbCgnc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUnLCBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZSk7XG5rby5leHBvcnRTeW1ib2woJ3NlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZScsIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZSk7XG5rby5leHByZXNzaW9uUmV3cml0aW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdG9yZUNhcHR1cmVkVG9rZW5zUmVnZXggPSAvXFxAa29fdG9rZW5fKFxcZCspXFxAL2c7XG4gICAgdmFyIGphdmFTY3JpcHRSZXNlcnZlZFdvcmRzID0gW1widHJ1ZVwiLCBcImZhbHNlXCJdO1xuXG4gICAgLy8gTWF0Y2hlcyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8tLWVpdGhlciBhbiBpc29sYXRlZCBpZGVudGlmaWVyIG9yIHNvbWV0aGluZyBlbmRpbmcgd2l0aCBhIHByb3BlcnR5IGFjY2Vzc29yXG4gICAgLy8gVGhpcyBpcyBkZXNpZ25lZCB0byBiZSBzaW1wbGUgYW5kIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcywgYnV0IGNvdWxkIHByb2R1Y2UgZmFsc2UgcG9zaXRpdmVzIChlLmcuLCBhK2IuYykuXG4gICAgdmFyIGphdmFTY3JpcHRBc3NpZ25tZW50VGFyZ2V0ID0gL14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pO1xuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVRva2VucyhzdHJpbmcsIHRva2Vucykge1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKHN0cmluZyAhPSBwcmV2VmFsdWUpIHsgLy8gS2VlcCByZXN0b3JpbmcgdG9rZW5zIHVudGlsIGl0IG5vIGxvbmdlciBtYWtlcyBhIGRpZmZlcmVuY2UgKHRoZXkgbWF5IGJlIG5lc3RlZClcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IHN0cmluZztcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlc3RvcmVDYXB0dXJlZFRva2Vuc1JlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHRva2VuSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5zW3Rva2VuSW5kZXhdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXcml0ZWFibGVWYWx1ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmIChrby51dGlscy5hcnJheUluZGV4T2YoamF2YVNjcmlwdFJlc2VydmVkV29yZHMsIGtvLnV0aWxzLnN0cmluZ1RyaW0oZXhwcmVzc2lvbikudG9Mb3dlckNhc2UoKSkgPj0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIG1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChqYXZhU2NyaXB0QXNzaWdubWVudFRhcmdldCk7XG4gICAgICAgIHJldHVybiBtYXRjaCA9PT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hbMV0gPyAoJ09iamVjdCgnICsgbWF0Y2hbMV0gKyAnKScgKyBtYXRjaFsyXSkgOiBleHByZXNzaW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZVF1b3RlZChrZXkpIHtcbiAgICAgICAgdmFyIHRyaW1tZWRLZXkgPSBrby51dGlscy5zdHJpbmdUcmltKGtleSk7XG4gICAgICAgIHN3aXRjaCAodHJpbW1lZEtleS5sZW5ndGggJiYgdHJpbW1lZEtleS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiJ1wiICsgdHJpbW1lZEtleSArIFwiJ1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzOiBbXSxcblxuICAgICAgICBwYXJzZU9iamVjdExpdGVyYWw6IGZ1bmN0aW9uKG9iamVjdExpdGVyYWxTdHJpbmcpIHtcbiAgICAgICAgICAgIC8vIEEgZnVsbCB0b2tlbmlzZXIrbGV4ZXIgd291bGQgYWRkIHRvbyBtdWNoIHdlaWdodCB0byB0aGlzIGxpYnJhcnksIHNvIGhlcmUncyBhIHNpbXBsZSBwYXJzZXJcbiAgICAgICAgICAgIC8vIHRoYXQgaXMgc3VmZmljaWVudCBqdXN0IHRvIHNwbGl0IGFuIG9iamVjdCBsaXRlcmFsIHN0cmluZyBpbnRvIGEgc2V0IG9mIHRvcC1sZXZlbCBrZXktdmFsdWUgcGFpcnNcblxuICAgICAgICAgICAgdmFyIHN0ciA9IGtvLnV0aWxzLnN0cmluZ1RyaW0ob2JqZWN0TGl0ZXJhbFN0cmluZyk7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDMpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgaWYgKHN0ci5jaGFyQXQoMCkgPT09IFwie1wiKS8vIElnbm9yZSBhbnkgYnJhY2VzIHN1cnJvdW5kaW5nIHRoZSB3aG9sZSBvYmplY3QgbGl0ZXJhbFxuICAgICAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMSwgc3RyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICAvLyBQdWxsIG91dCBhbnkgc3RyaW5nIGxpdGVyYWxzIGFuZCByZWdleCBsaXRlcmFsc1xuICAgICAgICAgICAgdmFyIHRva2VucyA9IFtdO1xuICAgICAgICAgICAgdmFyIHRva2VuU3RhcnQgPSBudWxsLCB0b2tlbkVuZENoYXI7XG4gICAgICAgICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgc3RyLmxlbmd0aDsgcG9zaXRpb24rKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gc3RyLmNoYXJBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuU3RhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIi9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlblN0YXJ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5FbmRDaGFyID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGMgPT0gdG9rZW5FbmRDaGFyKSAmJiAoc3RyLmNoYXJBdChwb3NpdGlvbiAtIDEpICE9PSBcIlxcXFxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gc3RyLnN1YnN0cmluZyh0b2tlblN0YXJ0LCBwb3NpdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFwiQGtvX3Rva2VuX1wiICsgKHRva2Vucy5sZW5ndGggLSAxKSArIFwiQFwiO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIHRva2VuU3RhcnQpICsgcmVwbGFjZW1lbnQgKyBzdHIuc3Vic3RyaW5nKHBvc2l0aW9uICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIC09ICh0b2tlbi5sZW5ndGggLSByZXBsYWNlbWVudC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE5leHQgcHVsbCBvdXQgYmFsYW5jZWQgcGFyZW4sIGJyYWNlLCBhbmQgYnJhY2tldCBibG9ja3NcbiAgICAgICAgICAgIHRva2VuU3RhcnQgPSBudWxsO1xuICAgICAgICAgICAgdG9rZW5FbmRDaGFyID0gbnVsbDtcbiAgICAgICAgICAgIHZhciB0b2tlbkRlcHRoID0gMCwgdG9rZW5TdGFydENoYXIgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHN0ci5sZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlblN0YXJ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIntcIjogdG9rZW5TdGFydCA9IHBvc2l0aW9uOyB0b2tlblN0YXJ0Q2hhciA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5FbmRDaGFyID0gXCJ9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOiB0b2tlblN0YXJ0ID0gcG9zaXRpb247IHRva2VuU3RhcnRDaGFyID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkVuZENoYXIgPSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJbXCI6IHRva2VuU3RhcnQgPSBwb3NpdGlvbjsgdG9rZW5TdGFydENoYXIgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuRW5kQ2hhciA9IFwiXVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09IHRva2VuU3RhcnRDaGFyKVxuICAgICAgICAgICAgICAgICAgICB0b2tlbkRlcHRoKys7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gdG9rZW5FbmRDaGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuRGVwdGgtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IHN0ci5zdWJzdHJpbmcodG9rZW5TdGFydCwgcG9zaXRpb24gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFwiQGtvX3Rva2VuX1wiICsgKHRva2Vucy5sZW5ndGggLSAxKSArIFwiQFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCB0b2tlblN0YXJ0KSArIHJlcGxhY2VtZW50ICsgc3RyLnN1YnN0cmluZyhwb3NpdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gLT0gKHRva2VuLmxlbmd0aCAtIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm93IHdlIGNhbiBzYWZlbHkgc3BsaXQgb24gY29tbWFzIHRvIGdldCB0aGUga2V5L3ZhbHVlIHBhaXJzXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICB2YXIga2V5VmFsdWVQYWlycyA9IHN0ci5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IGtleVZhbHVlUGFpcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhaXIgPSBrZXlWYWx1ZVBhaXJzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBjb2xvblBvcyA9IHBhaXIuaW5kZXhPZihcIjpcIik7XG4gICAgICAgICAgICAgICAgaWYgKChjb2xvblBvcyA+IDApICYmIChjb2xvblBvcyA8IHBhaXIubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyaW5nKDAsIGNvbG9uUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpci5zdWJzdHJpbmcoY29sb25Qb3MgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyAna2V5JzogcmVzdG9yZVRva2VucyhrZXksIHRva2VucyksICd2YWx1ZSc6IHJlc3RvcmVUb2tlbnModmFsdWUsIHRva2VucykgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyAndW5rbm93bic6IHJlc3RvcmVUb2tlbnMocGFpciwgdG9rZW5zKSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZVByb2Nlc3NCaW5kaW5nczogZnVuY3Rpb24gKG9iamVjdExpdGVyYWxTdHJpbmdPcktleVZhbHVlQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBrZXlWYWx1ZUFycmF5ID0gdHlwZW9mIG9iamVjdExpdGVyYWxTdHJpbmdPcktleVZhbHVlQXJyYXkgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICA/IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsKG9iamVjdExpdGVyYWxTdHJpbmdPcktleVZhbHVlQXJyYXkpXG4gICAgICAgICAgICAgICAgOiBvYmplY3RMaXRlcmFsU3RyaW5nT3JLZXlWYWx1ZUFycmF5O1xuICAgICAgICAgICAgdmFyIHJlc3VsdFN0cmluZ3MgPSBbXSwgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MgPSBbXTtcblxuICAgICAgICAgICAgdmFyIGtleVZhbHVlRW50cnk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsga2V5VmFsdWVFbnRyeSA9IGtleVZhbHVlQXJyYXlbaV07IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRTdHJpbmdzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZ3MucHVzaChcIixcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVFbnRyeVsna2V5J10pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1b3RlZEtleSA9IGVuc3VyZVF1b3RlZChrZXlWYWx1ZUVudHJ5WydrZXknXSksIHZhbCA9IGtleVZhbHVlRW50cnlbJ3ZhbHVlJ107XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZ3MucHVzaChxdW90ZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmdzLnB1c2goXCI6XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmdzLnB1c2godmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID0gZ2V0V3JpdGVhYmxlVmFsdWUoa28udXRpbHMuc3RyaW5nVHJpbSh2YWwpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5QWNjZXNzb3JSZXN1bHRTdHJpbmdzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MucHVzaChcIiwgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3MucHVzaChxdW90ZWRLZXkgKyBcIiA6IGZ1bmN0aW9uKF9fa29fdmFsdWUpIHsgXCIgKyB2YWwgKyBcIiA9IF9fa29fdmFsdWU7IH1cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleVZhbHVlRW50cnlbJ3Vua25vd24nXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmdzLnB1c2goa2V5VmFsdWVFbnRyeVsndW5rbm93biddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjb21iaW5lZFJlc3VsdCA9IHJlc3VsdFN0cmluZ3Muam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eUFjY2Vzc29yUmVzdWx0U3RyaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsbFByb3BlcnR5QWNjZXNzb3JzID0gcHJvcGVydHlBY2Nlc3NvclJlc3VsdFN0cmluZ3Muam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBjb21iaW5lZFJlc3VsdCA9IGNvbWJpbmVkUmVzdWx0ICsgXCIsICdfa29fcHJvcGVydHlfd3JpdGVycycgOiB7IFwiICsgYWxsUHJvcGVydHlBY2Nlc3NvcnMgKyBcIiB9IFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAga2V5VmFsdWVBcnJheUNvbnRhaW5zS2V5OiBmdW5jdGlvbihrZXlWYWx1ZUFycmF5LCBrZXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5VmFsdWVBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoa28udXRpbHMuc3RyaW5nVHJpbShrZXlWYWx1ZUFycmF5W2ldWydrZXknXSkgPT0ga2V5KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJbnRlcm5hbCwgcHJpdmF0ZSBLTyB1dGlsaXR5IGZvciB1cGRhdGluZyBtb2RlbCBwcm9wZXJ0aWVzIGZyb20gd2l0aGluIGJpbmRpbmdzXG4gICAgICAgIC8vIHByb3BlcnR5OiAgICAgICAgICAgIElmIHRoZSBwcm9wZXJ0eSBiZWluZyB1cGRhdGVkIGlzIChvciBtaWdodCBiZSkgYW4gb2JzZXJ2YWJsZSwgcGFzcyBpdCBoZXJlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIElmIGl0IHR1cm5zIG91dCB0byBiZSBhIHdyaXRhYmxlIG9ic2VydmFibGUsIGl0IHdpbGwgYmUgd3JpdHRlbiB0byBkaXJlY3RseVxuICAgICAgICAvLyBhbGxCaW5kaW5nc0FjY2Vzc29yOiBBbGwgYmluZGluZ3MgaW4gdGhlIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQuXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lsbCBiZSBzZWFyY2hlZCBmb3IgYSAnX2tvX3Byb3BlcnR5X3dyaXRlcnMnIHByb3BlcnR5IGluIGNhc2UgeW91J3JlIHdyaXRpbmcgdG8gYSBub24tb2JzZXJ2YWJsZVxuICAgICAgICAvLyBrZXk6ICAgICAgICAgICAgICAgICBUaGUga2V5IGlkZW50aWZ5aW5nIHRoZSBwcm9wZXJ0eSB0byBiZSB3cml0dGVuLiBFeGFtcGxlOiBmb3IgeyBoYXNGb2N1czogbXlWYWx1ZSB9LCB3cml0ZSB0byAnbXlWYWx1ZScgYnkgc3BlY2lmeWluZyB0aGUga2V5ICdoYXNGb2N1cydcbiAgICAgICAgLy8gdmFsdWU6ICAgICAgICAgICAgICAgVGhlIHZhbHVlIHRvIGJlIHdyaXR0ZW5cbiAgICAgICAgLy8gY2hlY2tJZkRpZmZlcmVudDogICAgSWYgdHJ1ZSwgYW5kIGlmIHRoZSBwcm9wZXJ0eSBiZWluZyB3cml0dGVuIGlzIGEgd3JpdGFibGUgb2JzZXJ2YWJsZSwgdGhlIHZhbHVlIHdpbGwgb25seSBiZSB3cml0dGVuIGlmXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgIGl0IGlzICE9PSBleGlzdGluZyB2YWx1ZSBvbiB0aGF0IHdyaXRhYmxlIG9ic2VydmFibGVcbiAgICAgICAgd3JpdGVWYWx1ZVRvUHJvcGVydHk6IGZ1bmN0aW9uKHByb3BlcnR5LCBhbGxCaW5kaW5nc0FjY2Vzc29yLCBrZXksIHZhbHVlLCBjaGVja0lmRGlmZmVyZW50KSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5IHx8ICFrby5pc1dyaXRlYWJsZU9ic2VydmFibGUocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BXcml0ZXJzID0gYWxsQmluZGluZ3NBY2Nlc3NvcigpWydfa29fcHJvcGVydHlfd3JpdGVycyddO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wV3JpdGVycyAmJiBwcm9wV3JpdGVyc1trZXldKVxuICAgICAgICAgICAgICAgICAgICBwcm9wV3JpdGVyc1trZXldKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrSWZEaWZmZXJlbnQgfHwgcHJvcGVydHkucGVlaygpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcnLCBrby5leHByZXNzaW9uUmV3cml0aW5nKTtcbmtvLmV4cG9ydFN5bWJvbCgnZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnMnLCBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycyk7XG5rby5leHBvcnRTeW1ib2woJ2V4cHJlc3Npb25SZXdyaXRpbmcucGFyc2VPYmplY3RMaXRlcmFsJywga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwpO1xua28uZXhwb3J0U3ltYm9sKCdleHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKTtcblxuLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGRlZmluZSB0aGUgZm9sbG93aW5nIGFsaWFzZXMuIChQcmV2aW91c2x5LCB0aGVzZSBmdW5jdGlvbiBuYW1lcyB3ZXJlIG1pc2xlYWRpbmcgYmVjYXVzZVxuLy8gdGhleSByZWZlcnJlZCB0byBKU09OIHNwZWNpZmljYWxseSwgZXZlbiB0aG91Z2ggdGhleSBhY3R1YWxseSB3b3JrIHdpdGggYXJiaXRyYXJ5IEphdmFTY3JpcHQgb2JqZWN0IGxpdGVyYWwgZXhwcmVzc2lvbnMuKVxua28uZXhwb3J0U3ltYm9sKCdqc29uRXhwcmVzc2lvblJld3JpdGluZycsIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcpO1xua28uZXhwb3J0U3ltYm9sKCdqc29uRXhwcmVzc2lvblJld3JpdGluZy5pbnNlcnRQcm9wZXJ0eUFjY2Vzc29yc0ludG9Kc29uJywga28uZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3MpOyhmdW5jdGlvbigpIHtcbiAgICAvLyBcIlZpcnR1YWwgZWxlbWVudHNcIiBpcyBhbiBhYnN0cmFjdGlvbiBvbiB0b3Agb2YgdGhlIHVzdWFsIERPTSBBUEkgd2hpY2ggdW5kZXJzdGFuZHMgdGhlIG5vdGlvbiB0aGF0IGNvbW1lbnQgbm9kZXNcbiAgICAvLyBtYXkgYmUgdXNlZCB0byByZXByZXNlbnQgaGllcmFyY2h5IChpbiBhZGRpdGlvbiB0byB0aGUgRE9NJ3MgbmF0dXJhbCBoaWVyYXJjaHkpLlxuICAgIC8vIElmIHlvdSBjYWxsIHRoZSBET00tbWFuaXB1bGF0aW5nIGZ1bmN0aW9ucyBvbiBrby52aXJ0dWFsRWxlbWVudHMsIHlvdSB3aWxsIGJlIGFibGUgdG8gcmVhZCBhbmQgd3JpdGUgdGhlIHN0YXRlXG4gICAgLy8gb2YgdGhhdCB2aXJ0dWFsIGhpZXJhcmNoeVxuICAgIC8vXG4gICAgLy8gVGhlIHBvaW50IG9mIGFsbCB0aGlzIGlzIHRvIHN1cHBvcnQgY29udGFpbmVybGVzcyB0ZW1wbGF0ZXMgKGUuZy4sIDwhLS0ga28gZm9yZWFjaDpzb21lQ29sbGVjdGlvbiAtLT5ibGFoPCEtLSAva28gLS0+KVxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHNjYXR0ZXIgc3BlY2lhbCBjYXNlcyBhbGwgb3ZlciB0aGUgYmluZGluZyBhbmQgdGVtcGxhdGluZyBjb2RlLlxuXG4gICAgLy8gSUUgOSBjYW5ub3QgcmVsaWFibHkgcmVhZCB0aGUgXCJub2RlVmFsdWVcIiBwcm9wZXJ0eSBvZiBhIGNvbW1lbnQgbm9kZSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTg2KVxuICAgIC8vIGJ1dCBpdCBkb2VzIGdpdmUgdGhlbSBhIG5vbnN0YW5kYXJkIGFsdGVybmF0aXZlIHByb3BlcnR5IGNhbGxlZCBcInRleHRcIiB0aGF0IGl0IGNhbiByZWFkIHJlbGlhYmx5LiBPdGhlciBicm93c2VycyBkb24ndCBoYXZlIHRoYXQgcHJvcGVydHkuXG4gICAgLy8gU28sIHVzZSBub2RlLnRleHQgd2hlcmUgYXZhaWxhYmxlLCBhbmQgbm9kZS5ub2RlVmFsdWUgZWxzZXdoZXJlXG4gICAgdmFyIGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0ID09PSBcIjwhLS10ZXN0LS0+XCI7XG5cbiAgICB2YXIgc3RhcnRDb21tZW50UmVnZXggPSBjb21tZW50Tm9kZXNIYXZlVGV4dFByb3BlcnR5ID8gL148IS0tXFxzKmtvKD86XFxzKyguK1xccypcXDpbXFxzXFxTXSopKT9cXHMqLS0+JC8gOiAvXlxccyprbyg/OlxccysoLitcXHMqXFw6W1xcc1xcU10qKSk/XFxzKiQvO1xuICAgIHZhciBlbmRDb21tZW50UmVnZXggPSAgIGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyAvXjwhLS1cXHMqXFwva29cXHMqLS0+JC8gOiAvXlxccypcXC9rb1xccyokLztcbiAgICB2YXIgaHRtbFRhZ3NXaXRoT3B0aW9uYWxseUNsb3NpbmdDaGlsZHJlbiA9IHsgJ3VsJzogdHJ1ZSwgJ29sJzogdHJ1ZSB9O1xuXG4gICAgZnVuY3Rpb24gaXNTdGFydENvbW1lbnQobm9kZSkge1xuICAgICAgICByZXR1cm4gKG5vZGUubm9kZVR5cGUgPT0gOCkgJiYgKGNvbW1lbnROb2Rlc0hhdmVUZXh0UHJvcGVydHkgPyBub2RlLnRleHQgOiBub2RlLm5vZGVWYWx1ZSkubWF0Y2goc3RhcnRDb21tZW50UmVnZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRW5kQ29tbWVudChub2RlKSB7XG4gICAgICAgIHJldHVybiAobm9kZS5ub2RlVHlwZSA9PSA4KSAmJiAoY29tbWVudE5vZGVzSGF2ZVRleHRQcm9wZXJ0eSA/IG5vZGUudGV4dCA6IG5vZGUubm9kZVZhbHVlKS5tYXRjaChlbmRDb21tZW50UmVnZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxDaGlsZHJlbihzdGFydENvbW1lbnQsIGFsbG93VW5iYWxhbmNlZCkge1xuICAgICAgICB2YXIgY3VycmVudE5vZGUgPSBzdGFydENvbW1lbnQ7XG4gICAgICAgIHZhciBkZXB0aCA9IDE7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgaWYgKGlzRW5kQ29tbWVudChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGlzU3RhcnRDb21tZW50KGN1cnJlbnROb2RlKSlcbiAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dVbmJhbGFuY2VkKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgY2xvc2luZyBjb21tZW50IHRhZyB0byBtYXRjaDogXCIgKyBzdGFydENvbW1lbnQubm9kZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TWF0Y2hpbmdFbmRDb21tZW50KHN0YXJ0Q29tbWVudCwgYWxsb3dVbmJhbGFuY2VkKSB7XG4gICAgICAgIHZhciBhbGxWaXJ0dWFsQ2hpbGRyZW4gPSBnZXRWaXJ0dWFsQ2hpbGRyZW4oc3RhcnRDb21tZW50LCBhbGxvd1VuYmFsYW5jZWQpO1xuICAgICAgICBpZiAoYWxsVmlydHVhbENoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoYWxsVmlydHVhbENoaWxkcmVuLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbFZpcnR1YWxDaGlsZHJlblthbGxWaXJ0dWFsQ2hpbGRyZW4ubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnRDb21tZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBNdXN0IGhhdmUgbm8gbWF0Y2hpbmcgZW5kIGNvbW1lbnQsIGFuZCBhbGxvd1VuYmFsYW5jZWQgaXMgdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFVuYmFsYW5jZWRDaGlsZFRhZ3Mobm9kZSkge1xuICAgICAgICAvLyBlLmcuLCBmcm9tIDxkaXY+T0s8L2Rpdj48IS0tIGtvIGJsYWggLS0+PHNwYW4+QW5vdGhlcjwvc3Bhbj4sIHJldHVybnM6IDwhLS0ga28gYmxhaCAtLT48c3Bhbj5Bbm90aGVyPC9zcGFuPlxuICAgICAgICAvLyAgICAgICBmcm9tIDxkaXY+T0s8L2Rpdj48IS0tIC9rbyAtLT48IS0tIC9rbyAtLT4sICAgICAgICAgICAgIHJldHVybnM6IDwhLS0gL2tvIC0tPjwhLS0gL2tvIC0tPlxuICAgICAgICB2YXIgY2hpbGROb2RlID0gbm9kZS5maXJzdENoaWxkLCBjYXB0dXJlUmVtYWluaW5nID0gbnVsbDtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlUmVtYWluaW5nKSAgICAgICAgICAgICAgICAgICAvLyBXZSBhbHJlYWR5IGhpdCBhbiB1bmJhbGFuY2VkIG5vZGUgYW5kIGFyZSBub3cganVzdCBzY29vcGluZyB1cCBhbGwgc3Vic2VxdWVudCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nLnB1c2goY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0YXJ0Q29tbWVudChjaGlsZE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZ0VuZENvbW1lbnQgPSBnZXRNYXRjaGluZ0VuZENvbW1lbnQoY2hpbGROb2RlLCAvKiBhbGxvd1VuYmFsYW5jZWQ6ICovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdFbmRDb21tZW50KSAgICAgICAgICAgICAvLyBJdCdzIGEgYmFsYW5jZWQgdGFnLCBzbyBza2lwIGltbWVkaWF0ZWx5IHRvIHRoZSBlbmQgb2YgdGhpcyB2aXJ0dWFsIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlID0gbWF0Y2hpbmdFbmRDb21tZW50O1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlUmVtYWluaW5nID0gW2NoaWxkTm9kZV07IC8vIEl0J3MgdW5iYWxhbmNlZCwgc28gc3RhcnQgY2FwdHVyaW5nIGZyb20gdGhpcyBwb2ludFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFbmRDb21tZW50KGNoaWxkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FwdHVyZVJlbWFpbmluZyA9IFtjaGlsZE5vZGVdOyAgICAgLy8gSXQncyB1bmJhbGFuY2VkIChpZiBpdCB3YXNuJ3QsIHdlJ2QgaGF2ZSBza2lwcGVkIG92ZXIgaXQgYWxyZWFkeSksIHNvIHN0YXJ0IGNhcHR1cmluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKGNoaWxkTm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcHR1cmVSZW1haW5pbmc7XG4gICAgfVxuXG4gICAga28udmlydHVhbEVsZW1lbnRzID0ge1xuICAgICAgICBhbGxvd2VkQmluZGluZ3M6IHt9LFxuXG4gICAgICAgIGNoaWxkTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1N0YXJ0Q29tbWVudChub2RlKSA/IGdldFZpcnR1YWxDaGlsZHJlbihub2RlKSA6IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgfSxcblxuICAgICAgICBlbXB0eU5vZGU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghaXNTdGFydENvbW1lbnQobm9kZSkpXG4gICAgICAgICAgICAgICAga28udXRpbHMuZW1wdHlEb21Ob2RlKG5vZGUpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpcnR1YWxDaGlsZHJlbiA9IGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKG5vZGUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdmlydHVhbENoaWxkcmVuLmxlbmd0aDsgaSA8IGo7IGkrKylcbiAgICAgICAgICAgICAgICAgICAga28ucmVtb3ZlTm9kZSh2aXJ0dWFsQ2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldERvbU5vZGVDaGlsZHJlbjogZnVuY3Rpb24obm9kZSwgY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgaWYgKCFpc1N0YXJ0Q29tbWVudChub2RlKSlcbiAgICAgICAgICAgICAgICBrby51dGlscy5zZXREb21Ob2RlQ2hpbGRyZW4obm9kZSwgY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBlbmRDb21tZW50Tm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7IC8vIE11c3QgYmUgdGhlIG5leHQgc2libGluZywgYXMgd2UganVzdCBlbXB0aWVkIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBqOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIGVuZENvbW1lbnROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZXNbaV0sIGVuZENvbW1lbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbihjb250YWluZXJOb2RlLCBub2RlVG9QcmVwZW5kKSB7XG4gICAgICAgICAgICBpZiAoIWlzU3RhcnRDb21tZW50KGNvbnRhaW5lck5vZGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lck5vZGUuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvUHJlcGVuZCwgY29udGFpbmVyTm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQobm9kZVRvUHJlcGVuZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGNvbW1lbnRzIG11c3QgYWx3YXlzIGhhdmUgYSBwYXJlbnQgYW5kIGF0IGxlYXN0IG9uZSBmb2xsb3dpbmcgc2libGluZyAodGhlIGVuZCBjb21tZW50KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvUHJlcGVuZCwgY29udGFpbmVyTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uKGNvbnRhaW5lck5vZGUsIG5vZGVUb0luc2VydCwgaW5zZXJ0QWZ0ZXJOb2RlKSB7XG4gICAgICAgICAgICBpZiAoIWluc2VydEFmdGVyTm9kZSkge1xuICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKGNvbnRhaW5lck5vZGUsIG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1N0YXJ0Q29tbWVudChjb250YWluZXJOb2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIEluc2VydCBhZnRlciBpbnNlcnRpb24gcG9pbnRcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QWZ0ZXJOb2RlLm5leHRTaWJsaW5nKVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmluc2VydEJlZm9yZShub2RlVG9JbnNlcnQsIGluc2VydEFmdGVyTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENoaWxkcmVuIG9mIHN0YXJ0IGNvbW1lbnRzIG11c3QgYWx3YXlzIGhhdmUgYSBwYXJlbnQgYW5kIGF0IGxlYXN0IG9uZSBmb2xsb3dpbmcgc2libGluZyAodGhlIGVuZCBjb21tZW50KVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lck5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZVRvSW5zZXJ0LCBpbnNlcnRBZnRlck5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZpcnN0Q2hpbGQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICghaXNTdGFydENvbW1lbnQobm9kZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmICghbm9kZS5uZXh0U2libGluZyB8fCBpc0VuZENvbW1lbnQobm9kZS5uZXh0U2libGluZykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0U2libGluZzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgaWYgKGlzU3RhcnRDb21tZW50KG5vZGUpKVxuICAgICAgICAgICAgICAgIG5vZGUgPSBnZXRNYXRjaGluZ0VuZENvbW1lbnQobm9kZSk7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0U2libGluZyAmJiBpc0VuZENvbW1lbnQobm9kZS5uZXh0U2libGluZykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgfSxcblxuICAgICAgICB2aXJ0dWFsTm9kZUJpbmRpbmdWYWx1ZTogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgdmFyIHJlZ2V4TWF0Y2ggPSBpc1N0YXJ0Q29tbWVudChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiByZWdleE1hdGNoID8gcmVnZXhNYXRjaFsxXSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmU6IGZ1bmN0aW9uKGVsZW1lbnRWZXJpZmllZCkge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xNTVcbiAgICAgICAgICAgIC8vIChJRSA8PSA4IG9yIElFIDkgcXVpcmtzIG1vZGUgcGFyc2VzIHlvdXIgSFRNTCB3ZWlyZGx5LCB0cmVhdGluZyBjbG9zaW5nIDwvbGk+IHRhZ3MgYXMgaWYgdGhleSBkb24ndCBleGlzdCwgdGhlcmVieSBtb3ZpbmcgY29tbWVudCBub2Rlc1xuICAgICAgICAgICAgLy8gdGhhdCBhcmUgZGlyZWN0IGRlc2NlbmRhbnRzIG9mIDx1bD4gaW50byB0aGUgcHJlY2VkaW5nIDxsaT4pXG4gICAgICAgICAgICBpZiAoIWh0bWxUYWdzV2l0aE9wdGlvbmFsbHlDbG9zaW5nQ2hpbGRyZW5ba28udXRpbHMudGFnTmFtZUxvd2VyKGVsZW1lbnRWZXJpZmllZCldKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gU2NhbiBpbW1lZGlhdGUgY2hpbGRyZW4gdG8gc2VlIGlmIHRoZXkgY29udGFpbiB1bmJhbGFuY2VkIGNvbW1lbnQgdGFncy4gSWYgdGhleSBkbywgdGhvc2UgY29tbWVudCB0YWdzXG4gICAgICAgICAgICAvLyBtdXN0IGJlIGludGVuZGVkIHRvIGFwcGVhciAqYWZ0ZXIqIHRoYXQgY2hpbGQsIHNvIG1vdmUgdGhlbSB0aGVyZS5cbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBlbGVtZW50VmVyaWZpZWQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bmJhbGFuY2VkVGFncyA9IGdldFVuYmFsYW5jZWRDaGlsZFRhZ3MoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmJhbGFuY2VkVGFncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpeCB1cCB0aGUgRE9NIGJ5IG1vdmluZyB0aGUgdW5iYWxhbmNlZCB0YWdzIHRvIHdoZXJlIHRoZXkgbW9zdCBsaWtlbHkgd2VyZSBpbnRlbmRlZCB0byBiZSBwbGFjZWQgLSAqYWZ0ZXIqIHRoZSBjaGlsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlVG9JbnNlcnRCZWZvcmUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmJhbGFuY2VkVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvSW5zZXJ0QmVmb3JlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZlcmlmaWVkLmluc2VydEJlZm9yZSh1bmJhbGFuY2VkVGFnc1tpXSwgbm9kZVRvSW5zZXJ0QmVmb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZlcmlmaWVkLmFwcGVuZENoaWxkKHVuYmFsYW5jZWRUYWdzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0pKCk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cycsIGtvLnZpcnR1YWxFbGVtZW50cyk7XG5rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3MnLCBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzKTtcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZScsIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUpO1xuLy9rby5leHBvcnRTeW1ib2woJ3ZpcnR1YWxFbGVtZW50cy5maXJzdENoaWxkJywga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQpOyAgICAgLy8gZmlyc3RDaGlsZCBpcyBub3QgbWluaWZpZWRcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyJywga28udmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyKTtcbi8va28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcnLCBrby52aXJ0dWFsRWxlbWVudHMubmV4dFNpYmxpbmcpOyAgIC8vIG5leHRTaWJsaW5nIGlzIG5vdCBtaW5pZmllZFxua28uZXhwb3J0U3ltYm9sKCd2aXJ0dWFsRWxlbWVudHMucHJlcGVuZCcsIGtvLnZpcnR1YWxFbGVtZW50cy5wcmVwZW5kKTtcbmtvLmV4cG9ydFN5bWJvbCgndmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbicsIGtvLnZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW4pO1xuKGZ1bmN0aW9uKCkge1xuICAgIHZhciBkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUgPSBcImRhdGEtYmluZFwiO1xuXG4gICAga28uYmluZGluZ1Byb3ZpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmluZGluZ0NhY2hlID0ge307XG4gICAgfTtcblxuICAgIGtvLnV0aWxzLmV4dGVuZChrby5iaW5kaW5nUHJvdmlkZXIucHJvdG90eXBlLCB7XG4gICAgICAgICdub2RlSGFzQmluZGluZ3MnOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUpICE9IG51bGw7ICAgLy8gRWxlbWVudFxuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIGtvLnZpcnR1YWxFbGVtZW50cy52aXJ0dWFsTm9kZUJpbmRpbmdWYWx1ZShub2RlKSAhPSBudWxsOyAvLyBDb21tZW50IG5vZGVcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ2dldEJpbmRpbmdzJzogZnVuY3Rpb24obm9kZSwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBiaW5kaW5nc1N0cmluZyA9IHRoaXNbJ2dldEJpbmRpbmdzU3RyaW5nJ10obm9kZSwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdzU3RyaW5nID8gdGhpc1sncGFyc2VCaW5kaW5nc1N0cmluZyddKGJpbmRpbmdzU3RyaW5nLCBiaW5kaW5nQ29udGV4dCwgbm9kZSkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgb25seSB1c2VkIGludGVybmFsbHkgYnkgdGhpcyBkZWZhdWx0IHByb3ZpZGVyLlxuICAgICAgICAvLyBJdCdzIG5vdCBwYXJ0IG9mIHRoZSBpbnRlcmZhY2UgZGVmaW5pdGlvbiBmb3IgYSBnZW5lcmFsIGJpbmRpbmcgcHJvdmlkZXIuXG4gICAgICAgICdnZXRCaW5kaW5nc1N0cmluZyc6IGZ1bmN0aW9uKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShkZWZhdWx0QmluZGluZ0F0dHJpYnV0ZU5hbWUpOyAgIC8vIEVsZW1lbnRcbiAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBrby52aXJ0dWFsRWxlbWVudHMudmlydHVhbE5vZGVCaW5kaW5nVmFsdWUobm9kZSk7IC8vIENvbW1lbnQgbm9kZVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgb25seSB1c2VkIGludGVybmFsbHkgYnkgdGhpcyBkZWZhdWx0IHByb3ZpZGVyLlxuICAgICAgICAvLyBJdCdzIG5vdCBwYXJ0IG9mIHRoZSBpbnRlcmZhY2UgZGVmaW5pdGlvbiBmb3IgYSBnZW5lcmFsIGJpbmRpbmcgcHJvdmlkZXIuXG4gICAgICAgICdwYXJzZUJpbmRpbmdzU3RyaW5nJzogZnVuY3Rpb24oYmluZGluZ3NTdHJpbmcsIGJpbmRpbmdDb250ZXh0LCBub2RlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nRnVuY3Rpb24gPSBjcmVhdGVCaW5kaW5nc1N0cmluZ0V2YWx1YXRvclZpYUNhY2hlKGJpbmRpbmdzU3RyaW5nLCB0aGlzLmJpbmRpbmdDYWNoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdGdW5jdGlvbihiaW5kaW5nQ29udGV4dCwgbm9kZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBiaW5kaW5ncy5cXG5NZXNzYWdlOiBcIiArIGV4ICsgXCI7XFxuQmluZGluZ3MgdmFsdWU6IFwiICsgYmluZGluZ3NTdHJpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ10gPSBuZXcga28uYmluZGluZ1Byb3ZpZGVyKCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCaW5kaW5nc1N0cmluZ0V2YWx1YXRvclZpYUNhY2hlKGJpbmRpbmdzU3RyaW5nLCBjYWNoZSkge1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSBiaW5kaW5nc1N0cmluZztcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NhY2hlS2V5XVxuICAgICAgICAgICAgfHwgKGNhY2hlW2NhY2hlS2V5XSA9IGNyZWF0ZUJpbmRpbmdzU3RyaW5nRXZhbHVhdG9yKGJpbmRpbmdzU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmluZGluZ3NTdHJpbmdFdmFsdWF0b3IoYmluZGluZ3NTdHJpbmcpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIHNvdXJjZSBmb3IgYSBmdW5jdGlvbiB0aGF0IGV2YWx1YXRlcyBcImV4cHJlc3Npb25cIlxuICAgICAgICAvLyBGb3IgZWFjaCBzY29wZSB2YXJpYWJsZSwgYWRkIGFuIGV4dHJhIGxldmVsIG9mIFwid2l0aFwiIG5lc3RpbmdcbiAgICAgICAgLy8gRXhhbXBsZSByZXN1bHQ6IHdpdGgoc2MxKSB7IHdpdGgoc2MwKSB7IHJldHVybiAoZXhwcmVzc2lvbikgfSB9XG4gICAgICAgIHZhciByZXdyaXR0ZW5CaW5kaW5ncyA9IGtvLmV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzKGJpbmRpbmdzU3RyaW5nKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uQm9keSA9IFwid2l0aCgkY29udGV4dCl7d2l0aCgkZGF0YXx8e30pe3JldHVybntcIiArIHJld3JpdHRlbkJpbmRpbmdzICsgXCJ9fX1cIjtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIiRjb250ZXh0XCIsIFwiJGVsZW1lbnRcIiwgZnVuY3Rpb25Cb2R5KTtcbiAgICB9XG59KSgpO1xuXG5rby5leHBvcnRTeW1ib2woJ2JpbmRpbmdQcm92aWRlcicsIGtvLmJpbmRpbmdQcm92aWRlcik7XG4oZnVuY3Rpb24gKCkge1xuICAgIGtvLmJpbmRpbmdIYW5kbGVycyA9IHt9O1xuXG4gICAga28uYmluZGluZ0NvbnRleHQgPSBmdW5jdGlvbihkYXRhSXRlbSwgcGFyZW50QmluZGluZ0NvbnRleHQsIGRhdGFJdGVtQWxpYXMpIHtcbiAgICAgICAgaWYgKHBhcmVudEJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICBrby51dGlscy5leHRlbmQodGhpcywgcGFyZW50QmluZGluZ0NvbnRleHQpOyAvLyBJbmhlcml0ICRyb290IGFuZCBhbnkgY3VzdG9tIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHRoaXNbJyRwYXJlbnRDb250ZXh0J10gPSBwYXJlbnRCaW5kaW5nQ29udGV4dDtcbiAgICAgICAgICAgIHRoaXNbJyRwYXJlbnQnXSA9IHBhcmVudEJpbmRpbmdDb250ZXh0WyckZGF0YSddO1xuICAgICAgICAgICAgdGhpc1snJHBhcmVudHMnXSA9IChwYXJlbnRCaW5kaW5nQ29udGV4dFsnJHBhcmVudHMnXSB8fCBbXSkuc2xpY2UoMCk7XG4gICAgICAgICAgICB0aGlzWyckcGFyZW50cyddLnVuc2hpZnQodGhpc1snJHBhcmVudCddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbJyRwYXJlbnRzJ10gPSBbXTtcbiAgICAgICAgICAgIHRoaXNbJyRyb290J10gPSBkYXRhSXRlbTtcbiAgICAgICAgICAgIC8vIEV4cG9ydCAna28nIGluIHRoZSBiaW5kaW5nIGNvbnRleHQgc28gaXQgd2lsbCBiZSBhdmFpbGFibGUgaW4gYmluZGluZ3MgYW5kIHRlbXBsYXRlc1xuICAgICAgICAgICAgLy8gZXZlbiBpZiAna28nIGlzbid0IGV4cG9ydGVkIGFzIGEgZ2xvYmFsLCBzdWNoIGFzIHdoZW4gdXNpbmcgYW4gQU1EIGxvYWRlci5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvaXNzdWVzLzQ5MFxuICAgICAgICAgICAgdGhpc1sna28nXSA9IGtvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbJyRkYXRhJ10gPSBkYXRhSXRlbTtcbiAgICAgICAgaWYgKGRhdGFJdGVtQWxpYXMpXG4gICAgICAgICAgICB0aGlzW2RhdGFJdGVtQWxpYXNdID0gZGF0YUl0ZW07XG4gICAgfVxuICAgIGtvLmJpbmRpbmdDb250ZXh0LnByb3RvdHlwZVsnY3JlYXRlQ2hpbGRDb250ZXh0J10gPSBmdW5jdGlvbiAoZGF0YUl0ZW0sIGRhdGFJdGVtQWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBrby5iaW5kaW5nQ29udGV4dChkYXRhSXRlbSwgdGhpcywgZGF0YUl0ZW1BbGlhcyk7XG4gICAgfTtcbiAgICBrby5iaW5kaW5nQ29udGV4dC5wcm90b3R5cGVbJ2V4dGVuZCddID0gZnVuY3Rpb24ocHJvcGVydGllcykge1xuICAgICAgICB2YXIgY2xvbmUgPSBrby51dGlscy5leHRlbmQobmV3IGtvLmJpbmRpbmdDb250ZXh0KCksIHRoaXMpO1xuICAgICAgICByZXR1cm4ga28udXRpbHMuZXh0ZW5kKGNsb25lLCBwcm9wZXJ0aWVzKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVUaGF0QmluZGluZ0lzQWxsb3dlZEZvclZpcnR1YWxFbGVtZW50cyhiaW5kaW5nTmFtZSkge1xuICAgICAgICB2YXIgdmFsaWRhdG9yID0ga28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1tiaW5kaW5nTmFtZV07XG4gICAgICAgIGlmICghdmFsaWRhdG9yKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGJpbmRpbmcgJ1wiICsgYmluZGluZ05hbWUgKyBcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNJbnRlcm5hbCAodmlld01vZGVsLCBlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgYmluZGluZ0NvbnRleHRzTWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRDaGlsZCwgbmV4dEluUXVldWUgPSBrby52aXJ0dWFsRWxlbWVudHMuZmlyc3RDaGlsZChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Q2hpbGQgPSBuZXh0SW5RdWV1ZSkge1xuICAgICAgICAgICAgLy8gS2VlcCBhIHJlY29yZCBvZiB0aGUgbmV4dCBjaGlsZCAqYmVmb3JlKiBhcHBseWluZyBiaW5kaW5ncywgaW4gY2FzZSB0aGUgYmluZGluZyByZW1vdmVzIHRoZSBjdXJyZW50IGNoaWxkIGZyb20gaXRzIHBvc2l0aW9uXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhjdXJyZW50Q2hpbGQpO1xuICAgICAgICAgICAgYXBwbHlCaW5kaW5nc1RvTm9kZUFuZERlc2NlbmRhbnRzSW50ZXJuYWwodmlld01vZGVsLCBjdXJyZW50Q2hpbGQsIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QmluZGluZ3NUb05vZGVBbmREZXNjZW5kYW50c0ludGVybmFsICh2aWV3TW9kZWwsIG5vZGVWZXJpZmllZCwgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkge1xuICAgICAgICB2YXIgc2hvdWxkQmluZERlc2NlbmRhbnRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBQZXJmIG9wdGltaXNhdGlvbjogQXBwbHkgYmluZGluZ3Mgb25seSBpZi4uLlxuICAgICAgICAvLyAoMSkgV2UgbmVlZCB0byBzdG9yZSB0aGUgYmluZGluZyBjb250ZXh0IG9uIHRoaXMgbm9kZSAoYmVjYXVzZSBpdCBtYXkgZGlmZmVyIGZyb20gdGhlIERPTSBwYXJlbnQgbm9kZSdzIGJpbmRpbmcgY29udGV4dClcbiAgICAgICAgLy8gICAgIE5vdGUgdGhhdCB3ZSBjYW4ndCBzdG9yZSBiaW5kaW5nIGNvbnRleHRzIG9uIG5vbi1lbGVtZW50cyAoZS5nLiwgdGV4dCBub2RlcyksIGFzIElFIGRvZXNuJ3QgYWxsb3cgZXhwYW5kbyBwcm9wZXJ0aWVzIGZvciB0aG9zZVxuICAgICAgICAvLyAoMikgSXQgbWlnaHQgaGF2ZSBiaW5kaW5ncyAoZS5nLiwgaXQgaGFzIGEgZGF0YS1iaW5kIGF0dHJpYnV0ZSwgb3IgaXQncyBhIG1hcmtlciBmb3IgYSBjb250YWluZXJsZXNzIHRlbXBsYXRlKVxuICAgICAgICB2YXIgaXNFbGVtZW50ID0gKG5vZGVWZXJpZmllZC5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgIGlmIChpc0VsZW1lbnQpIC8vIFdvcmthcm91bmQgSUUgPD0gOCBIVE1MIHBhcnNpbmcgd2VpcmRuZXNzXG4gICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMubm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmUobm9kZVZlcmlmaWVkKTtcblxuICAgICAgICB2YXIgc2hvdWxkQXBwbHlCaW5kaW5ncyA9IChpc0VsZW1lbnQgJiYgYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudCkgICAgICAgICAgICAgLy8gQ2FzZSAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBrby5iaW5kaW5nUHJvdmlkZXJbJ2luc3RhbmNlJ11bJ25vZGVIYXNCaW5kaW5ncyddKG5vZGVWZXJpZmllZCk7ICAgICAgIC8vIENhc2UgKDIpXG4gICAgICAgIGlmIChzaG91bGRBcHBseUJpbmRpbmdzKVxuICAgICAgICAgICAgc2hvdWxkQmluZERlc2NlbmRhbnRzID0gYXBwbHlCaW5kaW5nc1RvTm9kZUludGVybmFsKG5vZGVWZXJpZmllZCwgbnVsbCwgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dE1heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50KS5zaG91bGRCaW5kRGVzY2VuZGFudHM7XG5cbiAgICAgICAgaWYgKHNob3VsZEJpbmREZXNjZW5kYW50cykge1xuICAgICAgICAgICAgLy8gV2UncmUgcmVjdXJzaW5nIGF1dG9tYXRpY2FsbHkgaW50byAocmVhbCBvciB2aXJ0dWFsKSBjaGlsZCBub2RlcyB3aXRob3V0IGNoYW5naW5nIGJpbmRpbmcgY29udGV4dHMuIFNvLFxuICAgICAgICAgICAgLy8gICogRm9yIGNoaWxkcmVuIG9mIGEgKnJlYWwqIGVsZW1lbnQsIHRoZSBiaW5kaW5nIGNvbnRleHQgaXMgY2VydGFpbmx5IHRoZSBzYW1lIGFzIG9uIHRoZWlyIERPTSAucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIC8vICAgIGhlbmNlIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50IGlzIGZhbHNlXG4gICAgICAgICAgICAvLyAgKiBGb3IgY2hpbGRyZW4gb2YgYSAqdmlydHVhbCogZWxlbWVudCwgd2UgY2FuJ3QgYmUgc3VyZS4gRXZhbHVhdGluZyAucGFyZW50Tm9kZSBvbiB0aG9zZSBjaGlsZHJlbiBtYXlcbiAgICAgICAgICAgIC8vICAgIHNraXAgb3ZlciBhbnkgbnVtYmVyIG9mIGludGVybWVkaWF0ZSB2aXJ0dWFsIGVsZW1lbnRzLCBhbnkgb2Ygd2hpY2ggbWlnaHQgZGVmaW5lIGEgY3VzdG9tIGJpbmRpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vICAgIGhlbmNlIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50IGlzIHRydWVcbiAgICAgICAgICAgIGFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzSW50ZXJuYWwodmlld01vZGVsLCBub2RlVmVyaWZpZWQsIC8qIGJpbmRpbmdDb250ZXh0c01heURpZmZlckZyb21Eb21QYXJlbnRFbGVtZW50OiAqLyAhaXNFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QmluZGluZ3NUb05vZGVJbnRlcm5hbCAobm9kZSwgYmluZGluZ3MsIHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHQsIGJpbmRpbmdDb250ZXh0TWF5RGlmZmVyRnJvbURvbVBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgLy8gTmVlZCB0byBiZSBzdXJlIHRoYXQgaW5pdHMgYXJlIG9ubHkgcnVuIG9uY2UsIGFuZCB1cGRhdGVzIG5ldmVyIHJ1biB1bnRpbCBhbGwgdGhlIGluaXRzIGhhdmUgYmVlbiBydW5cbiAgICAgICAgdmFyIGluaXRQaGFzZSA9IDA7IC8vIDAgPSBiZWZvcmUgYWxsIGluaXRzLCAxID0gZHVyaW5nIGluaXRzLCAyID0gYWZ0ZXIgYWxsIGluaXRzXG5cbiAgICAgICAgLy8gRWFjaCB0aW1lIHRoZSBkZXBlbmRlbnRPYnNlcnZhYmxlIGlzIGV2YWx1YXRlZCAoYWZ0ZXIgZGF0YSBjaGFuZ2VzKSxcbiAgICAgICAgLy8gdGhlIGJpbmRpbmcgYXR0cmlidXRlIGlzIHJlcGFyc2VkIHNvIHRoYXQgaXQgY2FuIHBpY2sgb3V0IHRoZSBjb3JyZWN0XG4gICAgICAgIC8vIG1vZGVsIHByb3BlcnRpZXMgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGNoYW5nZWQgZGF0YS5cbiAgICAgICAgLy8gRE9NIGV2ZW50IGNhbGxiYWNrcyBuZWVkIHRvIGJlIGFibGUgdG8gYWNjZXNzIHRoaXMgY2hhbmdlZCBkYXRhLFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIGEgc2luZ2xlIHBhcnNlZEJpbmRpbmdzIHZhcmlhYmxlIChzaGFyZWQgYnkgYWxsIGNhbGxiYWNrc1xuICAgICAgICAvLyBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlJ3MgYmluZGluZ3MpIHRoYXQgYWxsIHRoZSBjbG9zdXJlcyBjYW4gYWNjZXNzLlxuICAgICAgICB2YXIgcGFyc2VkQmluZGluZ3M7XG4gICAgICAgIGZ1bmN0aW9uIG1ha2VWYWx1ZUFjY2Vzc29yKGJpbmRpbmdLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJzZWRCaW5kaW5nc1tiaW5kaW5nS2V5XSB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VkQmluZGluZ3NBY2Nlc3NvcigpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRCaW5kaW5ncztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiaW5kaW5nSGFuZGxlclRoYXRDb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncztcbiAgICAgICAga28uZGVwZW5kZW50T2JzZXJ2YWJsZShcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSBhIG5vbm51bGwgYmluZGluZyBjb250ZXh0IHRvIHdvcmsgd2l0aFxuICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nQ29udGV4dEluc3RhbmNlID0gdmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCAmJiAodmlld01vZGVsT3JCaW5kaW5nQ29udGV4dCBpbnN0YW5jZW9mIGtvLmJpbmRpbmdDb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICA/IHZpZXdNb2RlbE9yQmluZGluZ0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcga28uYmluZGluZ0NvbnRleHQoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2aWV3TW9kZWxPckJpbmRpbmdDb250ZXh0KSk7XG4gICAgICAgICAgICAgICAgdmFyIHZpZXdNb2RlbCA9IGJpbmRpbmdDb250ZXh0SW5zdGFuY2VbJyRkYXRhJ107XG5cbiAgICAgICAgICAgICAgICAvLyBPcHRpbWl6YXRpb246IERvbid0IHN0b3JlIHRoZSBiaW5kaW5nIGNvbnRleHQgb24gdGhpcyBub2RlIGlmIGl0J3MgZGVmaW5pdGVseSB0aGUgc2FtZSBhcyBvbiBub2RlLnBhcmVudE5vZGUsIGJlY2F1c2VcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gZWFzaWx5IHJlY292ZXIgaXQganVzdCBieSBzY2FubmluZyB1cCB0aGUgbm9kZSdzIGFuY2VzdG9ycyBpbiB0aGUgRE9NXG4gICAgICAgICAgICAgICAgLy8gKG5vdGU6IGhlcmUsIHBhcmVudCBub2RlIG1lYW5zIFwicmVhbCBET00gcGFyZW50XCIgbm90IFwidmlydHVhbCBwYXJlbnRcIiwgYXMgdGhlcmUncyBubyBPKDEpIHdheSB0byBmaW5kIHRoZSB2aXJ0dWFsIHBhcmVudClcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZ0NvbnRleHRNYXlEaWZmZXJGcm9tRG9tUGFyZW50RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAga28uc3RvcmVkQmluZGluZ0NvbnRleHRGb3JOb2RlKG5vZGUsIGJpbmRpbmdDb250ZXh0SW5zdGFuY2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIGV2YWx1YXRlZEJpbmRpbmdzIGlmIGdpdmVuLCBvdGhlcndpc2UgZmFsbCBiYWNrIG9uIGFza2luZyB0aGUgYmluZGluZ3MgcHJvdmlkZXIgdG8gZ2l2ZSB1cyBzb21lIGJpbmRpbmdzXG4gICAgICAgICAgICAgICAgdmFyIGV2YWx1YXRlZEJpbmRpbmdzID0gKHR5cGVvZiBiaW5kaW5ncyA9PSBcImZ1bmN0aW9uXCIpID8gYmluZGluZ3MoYmluZGluZ0NvbnRleHRJbnN0YW5jZSwgbm9kZSkgOiBiaW5kaW5ncztcbiAgICAgICAgICAgICAgICBwYXJzZWRCaW5kaW5ncyA9IGV2YWx1YXRlZEJpbmRpbmdzIHx8IGtvLmJpbmRpbmdQcm92aWRlclsnaW5zdGFuY2UnXVsnZ2V0QmluZGluZ3MnXShub2RlLCBiaW5kaW5nQ29udGV4dEluc3RhbmNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRCaW5kaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJzdCBydW4gYWxsIHRoZSBpbml0cywgc28gYmluZGluZ3MgY2FuIHJlZ2lzdGVyIGZvciBub3RpZmljYXRpb24gb24gY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdFBoYXNlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0UGhhc2UgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYmluZGluZ0tleSBpbiBwYXJzZWRCaW5kaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nID0ga28uYmluZGluZ0hhbmRsZXJzW2JpbmRpbmdLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nICYmIG5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVGhhdEJpbmRpbmdJc0FsbG93ZWRGb3JWaXJ0dWFsRWxlbWVudHMoYmluZGluZ0tleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmluZGluZyAmJiB0eXBlb2YgYmluZGluZ1tcImluaXRcIl0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVySW5pdEZuID0gYmluZGluZ1tcImluaXRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbml0UmVzdWx0ID0gaGFuZGxlckluaXRGbihub2RlLCBtYWtlVmFsdWVBY2Nlc3NvcihiaW5kaW5nS2V5KSwgcGFyc2VkQmluZGluZ3NBY2Nlc3Nvciwgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dEluc3RhbmNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGJpbmRpbmcgaGFuZGxlciBjbGFpbXMgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzLCBtYWtlIGEgbm90ZSBvZiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0UmVzdWx0ICYmIGluaXRSZXN1bHRbJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nSGFuZGxlclRoYXRDb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11bHRpcGxlIGJpbmRpbmdzIChcIiArIGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzICsgXCIgYW5kIFwiICsgYmluZGluZ0tleSArIFwiKSBhcmUgdHJ5aW5nIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncyBvZiB0aGUgc2FtZSBlbGVtZW50LiBZb3UgY2Fubm90IHVzZSB0aGVzZSBiaW5kaW5ncyB0b2dldGhlciBvbiB0aGUgc2FtZSBlbGVtZW50LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzID0gYmluZGluZ0tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRQaGFzZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAuLi4gdGhlbiBydW4gYWxsIHRoZSB1cGRhdGVzLCB3aGljaCBtaWdodCB0cmlnZ2VyIGNoYW5nZXMgZXZlbiBvbiB0aGUgZmlyc3QgZXZhbHVhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdFBoYXNlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaW5kaW5nS2V5IGluIHBhcnNlZEJpbmRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpbmRpbmcgPSBrby5iaW5kaW5nSGFuZGxlcnNbYmluZGluZ0tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcgJiYgdHlwZW9mIGJpbmRpbmdbXCJ1cGRhdGVcIl0gPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyVXBkYXRlRm4gPSBiaW5kaW5nW1widXBkYXRlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyVXBkYXRlRm4obm9kZSwgbWFrZVZhbHVlQWNjZXNzb3IoYmluZGluZ0tleSksIHBhcnNlZEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHRJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB7IGRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCA6IG5vZGUgfVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG91bGRCaW5kRGVzY2VuZGFudHM6IGJpbmRpbmdIYW5kbGVyVGhhdENvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzID09PSB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSA9IFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCI7XG4gICAga28uc3RvcmVkQmluZGluZ0NvbnRleHRGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpXG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChub2RlLCBzdG9yZWRCaW5kaW5nQ29udGV4dERvbURhdGFLZXksIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGtvLnV0aWxzLmRvbURhdGEuZ2V0KG5vZGUsIHN0b3JlZEJpbmRpbmdDb250ZXh0RG9tRGF0YUtleSk7XG4gICAgfVxuXG4gICAga28uYXBwbHlCaW5kaW5nc1RvTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBiaW5kaW5ncywgdmlld01vZGVsKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSAvLyBJZiBpdCdzIGFuIGVsZW1lbnQsIHdvcmthcm91bmQgSUUgPD0gOCBIVE1MIHBhcnNpbmcgd2VpcmRuZXNzXG4gICAgICAgICAgICBrby52aXJ0dWFsRWxlbWVudHMubm9ybWFsaXNlVmlydHVhbEVsZW1lbnREb21TdHJ1Y3R1cmUobm9kZSk7XG4gICAgICAgIHJldHVybiBhcHBseUJpbmRpbmdzVG9Ob2RlSW50ZXJuYWwobm9kZSwgYmluZGluZ3MsIHZpZXdNb2RlbCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzID0gZnVuY3Rpb24odmlld01vZGVsLCByb290Tm9kZSkge1xuICAgICAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IDEgfHwgcm9vdE5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICBhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c0ludGVybmFsKHZpZXdNb2RlbCwgcm9vdE5vZGUsIHRydWUpO1xuICAgIH07XG5cbiAgICBrby5hcHBseUJpbmRpbmdzID0gZnVuY3Rpb24gKHZpZXdNb2RlbCwgcm9vdE5vZGUpIHtcbiAgICAgICAgaWYgKHJvb3ROb2RlICYmIChyb290Tm9kZS5ub2RlVHlwZSAhPT0gMSkgJiYgKHJvb3ROb2RlLm5vZGVUeXBlICE9PSA4KSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImtvLmFwcGx5QmluZGluZ3M6IGZpcnN0IHBhcmFtZXRlciBzaG91bGQgYmUgeW91ciB2aWV3IG1vZGVsOyBzZWNvbmQgcGFyYW1ldGVyIHNob3VsZCBiZSBhIERPTSBub2RlXCIpO1xuICAgICAgICByb290Tm9kZSA9IHJvb3ROb2RlIHx8IHdpbmRvdy5kb2N1bWVudC5ib2R5OyAvLyBNYWtlIFwicm9vdE5vZGVcIiBwYXJhbWV0ZXIgb3B0aW9uYWxcblxuICAgICAgICBhcHBseUJpbmRpbmdzVG9Ob2RlQW5kRGVzY2VuZGFudHNJbnRlcm5hbCh2aWV3TW9kZWwsIHJvb3ROb2RlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgLy8gUmV0cmlldmluZyBiaW5kaW5nIGNvbnRleHQgZnJvbSBhcmJpdHJhcnkgbm9kZXNcbiAgICBrby5jb250ZXh0Rm9yID0gZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAvLyBXZSBjYW4gb25seSBkbyBzb21ldGhpbmcgbWVhbmluZ2Z1bCBmb3IgZWxlbWVudHMgYW5kIGNvbW1lbnQgbm9kZXMgKGluIHBhcnRpY3VsYXIsIG5vdCB0ZXh0IG5vZGVzLCBhcyBJRSBjYW4ndCBzdG9yZSBkb21kYXRhIGZvciB0aGVtKVxuICAgICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dCA9IGtvLnN0b3JlZEJpbmRpbmdDb250ZXh0Rm9yTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dCkgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSkgcmV0dXJuIGtvLmNvbnRleHRGb3Iobm9kZS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAga28uZGF0YUZvciA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBrby5jb250ZXh0Rm9yKG5vZGUpO1xuICAgICAgICByZXR1cm4gY29udGV4dCA/IGNvbnRleHRbJyRkYXRhJ10gOiB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIGtvLmV4cG9ydFN5bWJvbCgnYmluZGluZ0hhbmRsZXJzJywga28uYmluZGluZ0hhbmRsZXJzKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2FwcGx5QmluZGluZ3MnLCBrby5hcHBseUJpbmRpbmdzKTtcbiAgICBrby5leHBvcnRTeW1ib2woJ2FwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzJywga28uYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHMpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnYXBwbHlCaW5kaW5nc1RvTm9kZScsIGtvLmFwcGx5QmluZGluZ3NUb05vZGUpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnY29udGV4dEZvcicsIGtvLmNvbnRleHRGb3IpO1xuICAgIGtvLmV4cG9ydFN5bWJvbCgnZGF0YUZvcicsIGtvLmRhdGFGb3IpO1xufSkoKTtcbnZhciBhdHRySHRtbFRvSmF2YXNjcmlwdE1hcCA9IHsgJ2NsYXNzJzogJ2NsYXNzTmFtZScsICdmb3InOiAnaHRtbEZvcicgfTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snYXR0ciddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0ck5hbWUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlW2F0dHJOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBUbyBjb3ZlciBjYXNlcyBsaWtlIFwiYXR0cjogeyBjaGVja2VkOnNvbWVQcm9wIH1cIiwgd2Ugd2FudCB0byByZW1vdmUgdGhlIGF0dHJpYnV0ZSBlbnRpcmVseVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gc29tZVByb3AgaXMgYSBcIm5vIHZhbHVlXCItbGlrZSB2YWx1ZSAoc3RyaWN0bHkgbnVsbCwgZmFsc2UsIG9yIHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAvLyAoYmVjYXVzZSB0aGUgYWJzZW5jZSBvZiB0aGUgXCJjaGVja2VkXCIgYXR0ciBpcyBob3cgdG8gbWFyayBhbiBlbGVtZW50IGFzIG5vdCBjaGVja2VkLCBldGMuKVxuICAgICAgICAgICAgICAgIHZhciB0b1JlbW92ZSA9IChhdHRyVmFsdWUgPT09IGZhbHNlKSB8fCAoYXR0clZhbHVlID09PSBudWxsKSB8fCAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIGlmICh0b1JlbW92ZSlcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gSW4gSUUgPD0gNyBhbmQgSUU4IFF1aXJrcyBNb2RlLCB5b3UgaGF2ZSB0byB1c2UgdGhlIEphdmFzY3JpcHQgcHJvcGVydHkgbmFtZSBpbnN0ZWFkIG9mIHRoZVxuICAgICAgICAgICAgICAgIC8vIEhUTUwgYXR0cmlidXRlIG5hbWUgZm9yIGNlcnRhaW4gYXR0cmlidXRlcy4gSUU4IFN0YW5kYXJkcyBNb2RlIHN1cHBvcnRzIHRoZSBjb3JyZWN0IGJlaGF2aW9yLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBpbnN0ZWFkIG9mIGZpZ3VyaW5nIG91dCB0aGUgbW9kZSwgd2UnbGwganVzdCBzZXQgdGhlIGF0dHJpYnV0ZSB0aHJvdWdoIHRoZSBKYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgZm9yIElFIDw9IDguXG4gICAgICAgICAgICAgICAgaWYgKGtvLnV0aWxzLmllVmVyc2lvbiA8PSA4ICYmIGF0dHJOYW1lIGluIGF0dHJIdG1sVG9KYXZhc2NyaXB0TWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gYXR0ckh0bWxUb0phdmFzY3JpcHRNYXBbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9SZW1vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0clZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJlYXQgXCJuYW1lXCIgc3BlY2lhbGx5IC0gYWx0aG91Z2ggeW91IGNhbiB0aGluayBvZiBpdCBhcyBhbiBhdHRyaWJ1dGUsIGl0IGFsc28gbmVlZHNcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9uIG9sZGVyIHZlcnNpb25zIG9mIElFIChodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zMzMpXG4gICAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGJlaW5nIGNhc2Utc2Vuc2l0aXZlIGhlcmUgYmVjYXVzZSBYSFRNTCB3b3VsZCByZWdhcmQgXCJOYW1lXCIgYXMgYSBkaWZmZXJlbnQgdGhpbmdcbiAgICAgICAgICAgICAgICAvLyBlbnRpcmVseSwgYW5kIHRoZXJlJ3Mgbm8gc3Ryb25nIHJlYXNvbiB0byBhbGxvdyBmb3Igc3VjaCBjYXNpbmcgaW4gSFRNTC5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ck5hbWUgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldEVsZW1lbnROYW1lKGVsZW1lbnQsIHRvUmVtb3ZlID8gXCJcIiA6IGF0dHJWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xua28uYmluZGluZ0hhbmRsZXJzWydjaGVja2VkJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3NBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdXBkYXRlSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlVG9Xcml0ZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVUb1dyaXRlID0gZWxlbWVudC5jaGVja2VkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoZWxlbWVudC50eXBlID09IFwicmFkaW9cIikgJiYgKGVsZW1lbnQuY2hlY2tlZCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVRvV3JpdGUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIFwiY2hlY2tlZFwiIGJpbmRpbmcgb25seSByZXNwb25kcyB0byBjaGVja2JveGVzIGFuZCBzZWxlY3RlZCByYWRpbyBidXR0b25zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLCB1bndyYXBwZWRWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIpICYmICh1bndyYXBwZWRWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgICAgIC8vIEZvciBjaGVja2JveGVzIGJvdW5kIHRvIGFuIGFycmF5LCB3ZSBhZGQvcmVtb3ZlIHRoZSBjaGVja2JveCB2YWx1ZSB0byB0aGF0IGFycmF5XG4gICAgICAgICAgICAgICAgLy8gVGhpcyB3b3JrcyBmb3IgYm90aCBvYnNlcnZhYmxlIGFuZCBub24tb2JzZXJ2YWJsZSBhcnJheXNcbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdFbnRyeUluZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKHVud3JhcHBlZFZhbHVlLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkICYmIChleGlzdGluZ0VudHJ5SW5kZXggPCAwKSlcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZS5wdXNoKGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCghZWxlbWVudC5jaGVja2VkKSAmJiAoZXhpc3RpbmdFbnRyeUluZGV4ID49IDApKVxuICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlLnNwbGljZShleGlzdGluZ0VudHJ5SW5kZXgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrby5leHByZXNzaW9uUmV3cml0aW5nLndyaXRlVmFsdWVUb1Byb3BlcnR5KG1vZGVsVmFsdWUsIGFsbEJpbmRpbmdzQWNjZXNzb3IsICdjaGVja2VkJywgdmFsdWVUb1dyaXRlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJjbGlja1wiLCB1cGRhdGVIYW5kbGVyKTtcblxuICAgICAgICAvLyBJRSA2IHdvbid0IGFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gYmUgc2VsZWN0ZWQgdW5sZXNzIHRoZXkgaGF2ZSBhIG5hbWVcbiAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgPT0gXCJyYWRpb1wiKSAmJiAhZWxlbWVudC5uYW1lKVxuICAgICAgICAgICAga28uYmluZGluZ0hhbmRsZXJzWyd1bmlxdWVOYW1lJ11bJ2luaXQnXShlbGVtZW50LCBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWUgfSk7XG4gICAgfSxcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIC8vIFdoZW4gYm91bmQgdG8gYW4gYXJyYXksIHRoZSBjaGVja2JveCBiZWluZyBjaGVja2VkIHJlcHJlc2VudHMgaXRzIHZhbHVlIGJlaW5nIHByZXNlbnQgaW4gdGhhdCBhcnJheVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZih2YWx1ZSwgZWxlbWVudC52YWx1ZSkgPj0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBib3VuZCB0byBhbnl0aGluZyBvdGhlciB2YWx1ZSAobm90IGFuIGFycmF5KSwgdGhlIGNoZWNrYm94IGJlaW5nIGNoZWNrZWQgcmVwcmVzZW50cyB0aGUgdmFsdWUgYmVpbmcgdHJ1ZWlzaFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSA9PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IChlbGVtZW50LnZhbHVlID09IHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXkgPSAnX19rb19fY3NzVmFsdWUnO1xua28uYmluZGluZ0hhbmRsZXJzWydjc3MnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGNsYXNzTmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGRIYXZlQ2xhc3MgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlW2NsYXNzTmFtZV0pO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnRvZ2dsZURvbU5vZGVDc3NDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIHNob3VsZEhhdmVDbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJyk7IC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCB0cnkgdG8gc3RvcmUgb3Igc2V0IGEgbm9uLXN0cmluZyB2YWx1ZVxuICAgICAgICAgICAga28udXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzKGVsZW1lbnQsIGVsZW1lbnRbY2xhc3Nlc1dyaXR0ZW5CeUJpbmRpbmdLZXldLCBmYWxzZSk7XG4gICAgICAgICAgICBlbGVtZW50W2NsYXNzZXNXcml0dGVuQnlCaW5kaW5nS2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAga28udXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzKGVsZW1lbnQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2VuYWJsZSddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgIGlmICh2YWx1ZSAmJiBlbGVtZW50LmRpc2FibGVkKVxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgZWxzZSBpZiAoKCF2YWx1ZSkgJiYgKCFlbGVtZW50LmRpc2FibGVkKSlcbiAgICAgICAgICAgIGVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbmtvLmJpbmRpbmdIYW5kbGVyc1snZGlzYWJsZSddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICBrby5iaW5kaW5nSGFuZGxlcnNbJ2VuYWJsZSddWyd1cGRhdGUnXShlbGVtZW50LCBmdW5jdGlvbigpIHsgcmV0dXJuICFrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSkgfSk7XG4gICAgfVxufTtcbi8vIEZvciBjZXJ0YWluIGNvbW1vbiBldmVudHMgKGN1cnJlbnRseSBqdXN0ICdjbGljaycpLCBhbGxvdyBhIHNpbXBsaWZpZWQgZGF0YS1iaW5kaW5nIHN5bnRheFxuLy8gZS5nLiBjbGljazpoYW5kbGVyIGluc3RlYWQgb2YgdGhlIHVzdWFsIGZ1bGwtbGVuZ3RoIGV2ZW50OntjbGljazpoYW5kbGVyfVxuZnVuY3Rpb24gbWFrZUV2ZW50SGFuZGxlclNob3J0Y3V0KGV2ZW50TmFtZSkge1xuICAgIGtvLmJpbmRpbmdIYW5kbGVyc1tldmVudE5hbWVdID0ge1xuICAgICAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlQWNjZXNzb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgIHJlc3VsdFtldmVudE5hbWVdID0gdmFsdWVBY2Nlc3NvcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1snZXZlbnQnXVsnaW5pdCddLmNhbGwodGhpcywgZWxlbWVudCwgbmV3VmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3NBY2Nlc3Nvciwgdmlld01vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxua28uYmluZGluZ0hhbmRsZXJzWydldmVudCddID0ge1xuICAgICdpbml0JyA6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yLCB2aWV3TW9kZWwpIHtcbiAgICAgICAgdmFyIGV2ZW50c1RvSGFuZGxlID0gdmFsdWVBY2Nlc3NvcigpIHx8IHt9O1xuICAgICAgICBmb3IodmFyIGV2ZW50TmFtZU91dHNpZGVDbG9zdXJlIGluIGV2ZW50c1RvSGFuZGxlKSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZU91dHNpZGVDbG9zdXJlOyAvLyBTZXBhcmF0ZSB2YXJpYWJsZSB0byBiZSBjYXB0dXJlZCBieSBldmVudCBoYW5kbGVyIGNsb3N1cmVcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlclJldHVyblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJGdW5jdGlvbiA9IHZhbHVlQWNjZXNzb3IoKVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyRnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsbEJpbmRpbmdzID0gYWxsQmluZGluZ3NBY2Nlc3NvcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRha2UgYWxsIHRoZSBldmVudCBhcmdzLCBhbmQgcHJlZml4IHdpdGggdGhlIHZpZXdtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzRm9ySGFuZGxlciA9IGtvLnV0aWxzLm1ha2VBcnJheShhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NGb3JIYW5kbGVyLnVuc2hpZnQodmlld01vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyUmV0dXJuVmFsdWUgPSBoYW5kbGVyRnVuY3Rpb24uYXBwbHkodmlld01vZGVsLCBhcmdzRm9ySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyUmV0dXJuVmFsdWUgIT09IHRydWUpIHsgLy8gTm9ybWFsbHkgd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLiBEZXZlbG9wZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmUgZXhwbGljaXRseSByZXR1cm5pbmcgdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWJibGUgPSBhbGxCaW5kaW5nc1tldmVudE5hbWUgKyAnQnViYmxlJ10gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFidWJibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFwiZm9yZWFjaDogc29tZUV4cHJlc3Npb25cIiBpcyBlcXVpdmFsZW50IHRvIFwidGVtcGxhdGU6IHsgZm9yZWFjaDogc29tZUV4cHJlc3Npb24gfVwiXG4vLyBcImZvcmVhY2g6IHsgZGF0YTogc29tZUV4cHJlc3Npb24sIGFmdGVyQWRkOiBteWZuIH1cIiBpcyBlcXVpdmFsZW50IHRvIFwidGVtcGxhdGU6IHsgZm9yZWFjaDogc29tZUV4cHJlc3Npb24sIGFmdGVyQWRkOiBteWZuIH1cIlxua28uYmluZGluZ0hhbmRsZXJzWydmb3JlYWNoJ10gPSB7XG4gICAgbWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3NvcjogZnVuY3Rpb24odmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKSxcbiAgICAgICAgICAgICAgICB1bndyYXBwZWRWYWx1ZSA9IGtvLnV0aWxzLnBlZWtPYnNlcnZhYmxlKG1vZGVsVmFsdWUpOyAgICAvLyBVbndyYXAgd2l0aG91dCBzZXR0aW5nIGEgZGVwZW5kZW5jeSBoZXJlXG5cbiAgICAgICAgICAgIC8vIElmIHVud3JhcHBlZFZhbHVlIGlzIHRoZSBhcnJheSwgcGFzcyBpbiB0aGUgd3JhcHBlZCB2YWx1ZSBvbiBpdHMgb3duXG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgd2lsbCBiZSB1bndyYXBwZWQgYW5kIHRyYWNrZWQgd2l0aGluIHRoZSB0ZW1wbGF0ZSBiaW5kaW5nXG4gICAgICAgICAgICAvLyAoU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvNTIzKVxuICAgICAgICAgICAgaWYgKCghdW53cmFwcGVkVmFsdWUpIHx8IHR5cGVvZiB1bndyYXBwZWRWYWx1ZS5sZW5ndGggPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnZm9yZWFjaCc6IG1vZGVsVmFsdWUsICd0ZW1wbGF0ZUVuZ2luZSc6IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLmluc3RhbmNlIH07XG5cbiAgICAgICAgICAgIC8vIElmIHVud3JhcHBlZFZhbHVlLmRhdGEgaXMgdGhlIGFycmF5LCBwcmVzZXJ2ZSBhbGwgcmVsZXZhbnQgb3B0aW9ucyBhbmQgdW53cmFwIGFnYWluIHZhbHVlIHNvIHdlIGdldCB1cGRhdGVzXG4gICAgICAgICAgICBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnZm9yZWFjaCc6IHVud3JhcHBlZFZhbHVlWydkYXRhJ10sXG4gICAgICAgICAgICAgICAgJ2FzJzogdW53cmFwcGVkVmFsdWVbJ2FzJ10sXG4gICAgICAgICAgICAgICAgJ2luY2x1ZGVEZXN0cm95ZWQnOiB1bndyYXBwZWRWYWx1ZVsnaW5jbHVkZURlc3Ryb3llZCddLFxuICAgICAgICAgICAgICAgICdhZnRlckFkZCc6IHVud3JhcHBlZFZhbHVlWydhZnRlckFkZCddLFxuICAgICAgICAgICAgICAgICdiZWZvcmVSZW1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYmVmb3JlUmVtb3ZlJ10sXG4gICAgICAgICAgICAgICAgJ2FmdGVyUmVuZGVyJzogdW53cmFwcGVkVmFsdWVbJ2FmdGVyUmVuZGVyJ10sXG4gICAgICAgICAgICAgICAgJ2JlZm9yZU1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYmVmb3JlTW92ZSddLFxuICAgICAgICAgICAgICAgICdhZnRlck1vdmUnOiB1bndyYXBwZWRWYWx1ZVsnYWZ0ZXJNb3ZlJ10sXG4gICAgICAgICAgICAgICAgJ3RlbXBsYXRlRW5naW5lJzoga28ubmF0aXZlVGVtcGxhdGVFbmdpbmUuaW5zdGFuY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXVsnaW5pdCddKGVsZW1lbnQsIGtvLmJpbmRpbmdIYW5kbGVyc1snZm9yZWFjaCddLm1ha2VUZW1wbGF0ZVZhbHVlQWNjZXNzb3IodmFsdWVBY2Nlc3NvcikpO1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXVsndXBkYXRlJ10oZWxlbWVudCwga28uYmluZGluZ0hhbmRsZXJzWydmb3JlYWNoJ10ubWFrZVRlbXBsYXRlVmFsdWVBY2Nlc3Nvcih2YWx1ZUFjY2Vzc29yKSwgYWxsQmluZGluZ3NBY2Nlc3Nvciwgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCk7XG4gICAgfVxufTtcbmtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzWydmb3JlYWNoJ10gPSBmYWxzZTsgLy8gQ2FuJ3QgcmV3cml0ZSBjb250cm9sIGZsb3cgYmluZGluZ3NcbmtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ2ZvcmVhY2gnXSA9IHRydWU7XG52YXIgaGFzZm9jdXNVcGRhdGluZ1Byb3BlcnR5ID0gJ19fa29faGFzZm9jdXNVcGRhdGluZyc7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2hhc2ZvY3VzJ10gPSB7XG4gICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yKSB7XG4gICAgICAgIHZhciBoYW5kbGVFbGVtZW50Rm9jdXNDaGFuZ2UgPSBmdW5jdGlvbihpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIC8vIFdoZXJlIHBvc3NpYmxlLCBpZ25vcmUgd2hpY2ggZXZlbnQgd2FzIHJhaXNlZCBhbmQgZGV0ZXJtaW5lIGZvY3VzIHN0YXRlIHVzaW5nIGFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAvLyBhcyB0aGlzIGF2b2lkcyBwaGFudG9tIGZvY3VzL2JsdXIgZXZlbnRzIHJhaXNlZCB3aGVuIGNoYW5naW5nIHRhYnMgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgbm90IGFsbCBLTy10YXJnZXRlZCBicm93c2VycyAoRmlyZWZveCAyKSBzdXBwb3J0IGFjdGl2ZUVsZW1lbnQuIEZvciB0aG9zZSBicm93c2VycyxcbiAgICAgICAgICAgIC8vIHByZXZlbnQgYSBsb3NzIG9mIGZvY3VzIHdoZW4gY2hhbmdpbmcgdGFicy93aW5kb3dzIGJ5IHNldHRpbmcgYSBmbGFnIHRoYXQgcHJldmVudHMgaGFzZm9jdXNcbiAgICAgICAgICAgIC8vIGZyb20gY2FsbGluZyAnYmx1cigpJyBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGxvc2VzIGZvY3VzLlxuICAgICAgICAgICAgLy8gRGlzY3Vzc2lvbiBhdCBodHRwczovL2dpdGh1Yi5jb20vU3RldmVTYW5kZXJzb24va25vY2tvdXQvcHVsbC8zNTJcbiAgICAgICAgICAgIGVsZW1lbnRbaGFzZm9jdXNVcGRhdGluZ1Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb3duZXJEb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBpZiAoXCJhY3RpdmVFbGVtZW50XCIgaW4gb3duZXJEb2MpIHtcbiAgICAgICAgICAgICAgICBpc0ZvY3VzZWQgPSAob3duZXJEb2MuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKTtcbiAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3NBY2Nlc3NvciwgJ2hhc2ZvY3VzJywgaXNGb2N1c2VkLCB0cnVlKTtcbiAgICAgICAgICAgIGVsZW1lbnRbaGFzZm9jdXNVcGRhdGluZ1Byb3BlcnR5XSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgaGFuZGxlRWxlbWVudEZvY3VzSW4gPSBoYW5kbGVFbGVtZW50Rm9jdXNDaGFuZ2UuYmluZChudWxsLCB0cnVlKTtcbiAgICAgICAgdmFyIGhhbmRsZUVsZW1lbnRGb2N1c091dCA9IGhhbmRsZUVsZW1lbnRGb2N1c0NoYW5nZS5iaW5kKG51bGwsIGZhbHNlKTtcblxuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcImZvY3VzXCIsIGhhbmRsZUVsZW1lbnRGb2N1c0luKTtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJmb2N1c2luXCIsIGhhbmRsZUVsZW1lbnRGb2N1c0luKTsgLy8gRm9yIElFXG4gICAgICAgIGtvLnV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKGVsZW1lbnQsIFwiYmx1clwiLCAgaGFuZGxlRWxlbWVudEZvY3VzT3V0KTtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJmb2N1c291dFwiLCAgaGFuZGxlRWxlbWVudEZvY3VzT3V0KTsgLy8gRm9yIElFXG4gICAgfSxcbiAgICAndXBkYXRlJzogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgIGlmICghZWxlbWVudFtoYXNmb2N1c1VwZGF0aW5nUHJvcGVydHldKSB7XG4gICAgICAgICAgICB2YWx1ZSA/IGVsZW1lbnQuZm9jdXMoKSA6IGVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoa28udXRpbHMudHJpZ2dlckV2ZW50LCBudWxsLCBbZWxlbWVudCwgdmFsdWUgPyBcImZvY3VzaW5cIiA6IFwiZm9jdXNvdXRcIl0pOyAvLyBGb3IgSUUsIHdoaWNoIGRvZXNuJ3QgcmVsaWFibHkgZmlyZSBcImZvY3VzXCIgb3IgXCJibHVyXCIgZXZlbnRzIHN5bmNocm9ub3VzbHlcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ2h0bWwnXSA9IHtcbiAgICAnaW5pdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBQcmV2ZW50IGJpbmRpbmcgb24gdGhlIGR5bmFtaWNhbGx5LWluamVjdGVkIEhUTUwgKGFzIGRldmVsb3BlcnMgYXJlIHVubGlrZWx5IHRvIGV4cGVjdCB0aGF0LCBhbmQgaXQgaGFzIHNlY3VyaXR5IGltcGxpY2F0aW9ucylcbiAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgIH0sXG4gICAgJ3VwZGF0ZSc6IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgIC8vIHNldEh0bWwgd2lsbCB1bndyYXAgdGhlIHZhbHVlIGlmIG5lZWRlZFxuICAgICAgICBrby51dGlscy5zZXRIdG1sKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgfVxufTtcbnZhciB3aXRoSWZEb21EYXRhS2V5ID0gJ19fa29fd2l0aElmQmluZGluZ0RhdGEnO1xuLy8gTWFrZXMgYSBiaW5kaW5nIGxpa2Ugd2l0aCBvciBpZlxuZnVuY3Rpb24gbWFrZVdpdGhJZkJpbmRpbmcoYmluZGluZ0tleSwgaXNXaXRoLCBpc05vdCwgbWFrZUNvbnRleHRDYWxsYmFjaykge1xuICAgIGtvLmJpbmRpbmdIYW5kbGVyc1tiaW5kaW5nS2V5XSA9IHtcbiAgICAgICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCB3aXRoSWZEb21EYXRhS2V5LCB7fSk7XG4gICAgICAgICAgICByZXR1cm4geyAnY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MnOiB0cnVlIH07XG4gICAgICAgIH0sXG4gICAgICAgICd1cGRhdGUnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5nc0FjY2Vzc29yLCB2aWV3TW9kZWwsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgd2l0aElmRGF0YSA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KGVsZW1lbnQsIHdpdGhJZkRvbURhdGFLZXkpLFxuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKSxcbiAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gIWlzTm90ICE9PSAhZGF0YVZhbHVlLCAvLyBlcXVpdmFsZW50IHRvIGlzTm90ID8gIWRhdGFWYWx1ZSA6ICEhZGF0YVZhbHVlXG4gICAgICAgICAgICAgICAgaXNGaXJzdFJlbmRlciA9ICF3aXRoSWZEYXRhLnNhdmVkTm9kZXMsXG4gICAgICAgICAgICAgICAgbmVlZHNSZWZyZXNoID0gaXNGaXJzdFJlbmRlciB8fCBpc1dpdGggfHwgKHNob3VsZERpc3BsYXkgIT09IHdpdGhJZkRhdGEuZGlkRGlzcGxheU9uTGFzdFVwZGF0ZSk7XG5cbiAgICAgICAgICAgIGlmIChuZWVkc1JlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICB3aXRoSWZEYXRhLnNhdmVkTm9kZXMgPSBrby51dGlscy5jbG9uZU5vZGVzKGtvLnZpcnR1YWxFbGVtZW50cy5jaGlsZE5vZGVzKGVsZW1lbnQpLCB0cnVlIC8qIHNob3VsZENsZWFuTm9kZXMgKi8pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaG91bGREaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbihlbGVtZW50LCBrby51dGlscy5jbG9uZU5vZGVzKHdpdGhJZkRhdGEuc2F2ZWROb2RlcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzKG1ha2VDb250ZXh0Q2FsbGJhY2sgPyBtYWtlQ29udGV4dENhbGxiYWNrKGJpbmRpbmdDb250ZXh0LCBkYXRhVmFsdWUpIDogYmluZGluZ0NvbnRleHQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtvLnZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2l0aElmRGF0YS5kaWREaXNwbGF5T25MYXN0VXBkYXRlID0gc2hvdWxkRGlzcGxheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAga28uZXhwcmVzc2lvblJld3JpdGluZy5iaW5kaW5nUmV3cml0ZVZhbGlkYXRvcnNbYmluZGluZ0tleV0gPSBmYWxzZTsgLy8gQ2FuJ3QgcmV3cml0ZSBjb250cm9sIGZsb3cgYmluZGluZ3NcbiAgICBrby52aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzW2JpbmRpbmdLZXldID0gdHJ1ZTtcbn1cblxuLy8gQ29uc3RydWN0IHRoZSBhY3R1YWwgYmluZGluZyBoYW5kbGVyc1xubWFrZVdpdGhJZkJpbmRpbmcoJ2lmJyk7XG5tYWtlV2l0aElmQmluZGluZygnaWZub3QnLCBmYWxzZSAvKiBpc1dpdGggKi8sIHRydWUgLyogaXNOb3QgKi8pO1xubWFrZVdpdGhJZkJpbmRpbmcoJ3dpdGgnLCB0cnVlIC8qIGlzV2l0aCAqLywgZmFsc2UgLyogaXNOb3QgKi8sXG4gICAgZnVuY3Rpb24oYmluZGluZ0NvbnRleHQsIGRhdGFWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYmluZGluZ0NvbnRleHRbJ2NyZWF0ZUNoaWxkQ29udGV4dCddKGRhdGFWYWx1ZSk7XG4gICAgfVxuKTtcbmZ1bmN0aW9uIGVuc3VyZURyb3Bkb3duU2VsZWN0aW9uSXNDb25zaXN0ZW50V2l0aE1vZGVsVmFsdWUoZWxlbWVudCwgbW9kZWxWYWx1ZSwgcHJlZmVyTW9kZWxWYWx1ZSkge1xuICAgIGlmIChwcmVmZXJNb2RlbFZhbHVlKSB7XG4gICAgICAgIGlmIChtb2RlbFZhbHVlICE9PSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KSlcbiAgICAgICAgICAgIGtvLnNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZShlbGVtZW50LCBtb2RlbFZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBObyBtYXR0ZXIgd2hpY2ggZGlyZWN0aW9uIHdlJ3JlIHN5bmNpbmcgaW4sIHdlIHdhbnQgdGhlIGVuZCByZXN1bHQgdG8gYmUgZXF1YWxpdHkgYmV0d2VlbiBkcm9wZG93biB2YWx1ZSBhbmQgbW9kZWwgdmFsdWUuXG4gICAgLy8gSWYgdGhleSBhcmVuJ3QgZXF1YWwsIGVpdGhlciB3ZSBwcmVmZXIgdGhlIGRyb3Bkb3duIHZhbHVlLCBvciB0aGUgbW9kZWwgdmFsdWUgY291bGRuJ3QgYmUgcmVwcmVzZW50ZWQsIHNvIGVpdGhlciB3YXksXG4gICAgLy8gY2hhbmdlIHRoZSBtb2RlbCB2YWx1ZSB0byBtYXRjaCB0aGUgZHJvcGRvd24uXG4gICAgaWYgKG1vZGVsVmFsdWUgIT09IGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKGVsZW1lbnQpKVxuICAgICAgICBrby5kZXBlbmRlbmN5RGV0ZWN0aW9uLmlnbm9yZShrby51dGlscy50cmlnZ2VyRXZlbnQsIG51bGwsIFtlbGVtZW50LCBcImNoYW5nZVwiXSk7XG59O1xuXG5rby5iaW5kaW5nSGFuZGxlcnNbJ29wdGlvbnMnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSAhPT0gXCJzZWxlY3RcIilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO1xuXG4gICAgICAgIHZhciBzZWxlY3RXYXNQcmV2aW91c2x5RW1wdHkgPSBlbGVtZW50Lmxlbmd0aCA9PSAwO1xuICAgICAgICB2YXIgcHJldmlvdXNTZWxlY3RlZFZhbHVlcyA9IGtvLnV0aWxzLmFycmF5TWFwKGtvLnV0aWxzLmFycmF5RmlsdGVyKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnRhZ05hbWUgJiYgKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihub2RlKSA9PT0gXCJvcHRpb25cIikgJiYgbm9kZS5zZWxlY3RlZDtcbiAgICAgICAgfSksIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobm9kZSkgfHwgbm9kZS5pbm5lclRleHQgfHwgbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBwcmV2aW91c1Njcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVBY2Nlc3NvcigpKTtcbiAgICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXhpc3RpbmcgPG9wdGlvbj5zLlxuICAgICAgICAvLyBOZWVkIHRvIHVzZSAucmVtb3ZlKCkgcmF0aGVyIHRoYW4gLnJlbW92ZUNoaWxkKCkgZm9yIDxvcHRpb24+cyBvdGhlcndpc2UgSUUgYmVoYXZlcyBvZGRseSAoaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L2lzc3Vlcy8xMzQpXG4gICAgICAgIHdoaWxlIChlbGVtZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGtvLmNsZWFuTm9kZShlbGVtZW50Lm9wdGlvbnNbMF0pO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhbGxCaW5kaW5ncyA9IGFsbEJpbmRpbmdzQWNjZXNzb3IoKSxcbiAgICAgICAgICAgICAgICBpbmNsdWRlRGVzdHJveWVkID0gYWxsQmluZGluZ3NbJ29wdGlvbnNJbmNsdWRlRGVzdHJveWVkJ107XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUubGVuZ3RoICE9IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICAgICAgaWYgKGFsbEJpbmRpbmdzWydvcHRpb25zQ2FwdGlvbiddKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0SHRtbChvcHRpb24sIGFsbEJpbmRpbmdzWydvcHRpb25zQ2FwdGlvbiddKTtcbiAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUob3B0aW9uLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB2YWx1ZS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIGRlc3Ryb3llZCBpdGVtc1xuICAgICAgICAgICAgICAgIHZhciBhcnJheUVudHJ5ID0gdmFsdWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5RW50cnkgJiYgYXJyYXlFbnRyeVsnX2Rlc3Ryb3knXSAmJiAhaW5jbHVkZURlc3Ryb3llZClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGx5VG9PYmplY3Qob2JqZWN0LCBwcmVkaWNhdGUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJlZGljYXRlVHlwZSA9IHR5cGVvZiBwcmVkaWNhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVkaWNhdGVUeXBlID09IFwiZnVuY3Rpb25cIikgICAgLy8gR2l2ZW4gYSBmdW5jdGlvbjsgcnVuIGl0IGFnYWluc3QgdGhlIGRhdGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUob2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJlZGljYXRlVHlwZSA9PSBcInN0cmluZ1wiKSAvLyBHaXZlbiBhIHN0cmluZzsgdHJlYXQgaXQgYXMgYSBwcm9wZXJ0eSBuYW1lIG9uIHRoZSBkYXRhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0W3ByZWRpY2F0ZV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdpdmVuIG5vIG9wdGlvbnNUZXh0IGFyZzsgdXNlIHRoZSBkYXRhIHZhbHVlIGl0c2VsZlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhIHZhbHVlIHRvIHRoZSBvcHRpb24gZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGFwcGx5VG9PYmplY3QoYXJyYXlFbnRyeSwgYWxsQmluZGluZ3NbJ29wdGlvbnNWYWx1ZSddLCBhcnJheUVudHJ5KTtcbiAgICAgICAgICAgICAgICBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUob3B0aW9uLCBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9wdGlvblZhbHVlKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBzb21lIHRleHQgdG8gdGhlIG9wdGlvbiBlbGVtZW50XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblRleHQgPSBhcHBseVRvT2JqZWN0KGFycmF5RW50cnksIGFsbEJpbmRpbmdzWydvcHRpb25zVGV4dCddLCBvcHRpb25WYWx1ZSk7XG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0VGV4dENvbnRlbnQob3B0aW9uLCBvcHRpb25UZXh0KTtcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSUU2IGRvZXNuJ3QgbGlrZSB1cyB0byBhc3NpZ24gc2VsZWN0aW9uIHRvIE9QVElPTiBub2RlcyBiZWZvcmUgdGhleSdyZSBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICAgICAgICAvLyBUaGF0J3Mgd2h5IHdlIGZpcnN0IGFkZGVkIHRoZW0gd2l0aG91dCBzZWxlY3Rpb24uIE5vdyBpdCdzIHRpbWUgdG8gc2V0IHRoZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICB2YXIgbmV3T3B0aW9ucyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIik7XG4gICAgICAgICAgICB2YXIgY291bnRTZWxlY3Rpb25zUmV0YWluZWQgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBuZXdPcHRpb25zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChrby51dGlscy5hcnJheUluZGV4T2YocHJldmlvdXNTZWxlY3RlZFZhbHVlcywga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUobmV3T3B0aW9uc1tpXSkpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAga28udXRpbHMuc2V0T3B0aW9uTm9kZVNlbGVjdGlvblN0YXRlKG5ld09wdGlvbnNbaV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudFNlbGVjdGlvbnNSZXRhaW5lZCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBwcmV2aW91c1Njcm9sbFRvcDtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdFdhc1ByZXZpb3VzbHlFbXB0eSAmJiAoJ3ZhbHVlJyBpbiBhbGxCaW5kaW5ncykpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29uc2lzdGVuY3kgYmV0d2VlbiBtb2RlbCB2YWx1ZSBhbmQgc2VsZWN0ZWQgb3B0aW9uLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBkcm9wZG93biBpcyBiZWluZyBwb3B1bGF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIGhlcmUgKG9yIHdhcyBvdGhlcndpc2UgcHJldmlvdXNseSBlbXB0eSksXG4gICAgICAgICAgICAgICAgLy8gdGhlIGRyb3Bkb3duIHNlbGVjdGlvbiBzdGF0ZSBpcyBtZWFuaW5nbGVzcywgc28gd2UgcHJlc2VydmUgdGhlIG1vZGVsIHZhbHVlLlxuICAgICAgICAgICAgICAgIGVuc3VyZURyb3Bkb3duU2VsZWN0aW9uSXNDb25zaXN0ZW50V2l0aE1vZGVsVmFsdWUoZWxlbWVudCwga28udXRpbHMucGVla09ic2VydmFibGUoYWxsQmluZGluZ3NbJ3ZhbHVlJ10pLCAvKiBwcmVmZXJNb2RlbFZhbHVlICovIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBJRTkgYnVnXG4gICAgICAgICAgICBrby51dGlscy5lbnN1cmVTZWxlY3RFbGVtZW50SXNSZW5kZXJlZENvcnJlY3RseShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ29wdGlvbnMnXS5vcHRpb25WYWx1ZURvbURhdGFLZXkgPSAnX19rby5vcHRpb25WYWx1ZURvbURhdGFfXyc7XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3NlbGVjdGVkT3B0aW9ucyddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IpIHtcbiAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVBY2Nlc3NvcigpLCB2YWx1ZVRvV3JpdGUgPSBbXTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVG9Xcml0ZS5wdXNoKGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAga28uZXhwcmVzc2lvblJld3JpdGluZy53cml0ZVZhbHVlVG9Qcm9wZXJ0eSh2YWx1ZSwgYWxsQmluZGluZ3NBY2Nlc3NvciwgJ3ZhbHVlJywgdmFsdWVUb1dyaXRlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSAhPSBcInNlbGVjdFwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTtcblxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAmJiB0eXBlb2YgbmV3VmFsdWUubGVuZ3RoID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBrby51dGlscy5hcnJheUluZGV4T2YobmV3VmFsdWUsIGtvLnNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlKG5vZGUpKSA+PSAwO1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnNldE9wdGlvbk5vZGVTZWxlY3Rpb25TdGF0ZShub2RlLCBpc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1snc3R5bGUnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgdmFyIHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkgfHwge30pO1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVOYW1lID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWVbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVWYWx1ZSB8fCBcIlwiOyAvLyBFbXB0eSBzdHJpbmcgcmVtb3ZlcyB0aGUgdmFsdWUsIHdoZXJlYXMgbnVsbC91bmRlZmluZWQgaGF2ZSBubyBlZmZlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3N1Ym1pdCddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlQWNjZXNzb3IoKSAhPSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZUFjY2Vzc29yKCk7XG4gICAgICAgICAgICB0cnkgeyBoYW5kbGVyUmV0dXJuVmFsdWUgPSB2YWx1ZS5jYWxsKHZpZXdNb2RlbCwgZWxlbWVudCk7IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyUmV0dXJuVmFsdWUgIT09IHRydWUpIHsgLy8gTm9ybWFsbHkgd2Ugd2FudCB0byBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLiBEZXZlbG9wZXIgY2FuIG92ZXJyaWRlIHRoaXMgYmUgZXhwbGljaXRseSByZXR1cm5pbmcgdHJ1ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3RleHQnXSA9IHtcbiAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAga28udXRpbHMuc2V0VGV4dENvbnRlbnQoZWxlbWVudCwgdmFsdWVBY2Nlc3NvcigpKTtcbiAgICB9XG59O1xua28udmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1sndGV4dCddID0gdHJ1ZTtcbmtvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IpIHtcbiAgICAgICAgaWYgKHZhbHVlQWNjZXNzb3IoKSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcImtvX3VuaXF1ZV9cIiArICgrK2tvLmJpbmRpbmdIYW5kbGVyc1sndW5pcXVlTmFtZSddLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBrby51dGlscy5zZXRFbGVtZW50TmFtZShlbGVtZW50LCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5rby5iaW5kaW5nSGFuZGxlcnNbJ3VuaXF1ZU5hbWUnXS5jdXJyZW50SW5kZXggPSAwO1xua28uYmluZGluZ0hhbmRsZXJzWyd2YWx1ZSddID0ge1xuICAgICdpbml0JzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IpIHtcbiAgICAgICAgLy8gQWx3YXlzIGNhdGNoIFwiY2hhbmdlXCIgZXZlbnQ7IHBvc3NpYmx5IG90aGVyIGV2ZW50cyB0b28gaWYgYXNrZWRcbiAgICAgICAgdmFyIGV2ZW50c1RvQ2F0Y2ggPSBbXCJjaGFuZ2VcIl07XG4gICAgICAgIHZhciByZXF1ZXN0ZWRFdmVudHNUb0NhdGNoID0gYWxsQmluZGluZ3NBY2Nlc3NvcigpW1widmFsdWVVcGRhdGVcIl07XG4gICAgICAgIHZhciBwcm9wZXJ0eUNoYW5nZWRGaXJlZCA9IGZhbHNlO1xuICAgICAgICBpZiAocmVxdWVzdGVkRXZlbnRzVG9DYXRjaCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0ZWRFdmVudHNUb0NhdGNoID09IFwic3RyaW5nXCIpIC8vIEFsbG93IGJvdGggaW5kaXZpZHVhbCBldmVudCBuYW1lcywgYW5kIGFycmF5cyBvZiBldmVudCBuYW1lc1xuICAgICAgICAgICAgICAgIHJlcXVlc3RlZEV2ZW50c1RvQ2F0Y2ggPSBbcmVxdWVzdGVkRXZlbnRzVG9DYXRjaF07XG4gICAgICAgICAgICBrby51dGlscy5hcnJheVB1c2hBbGwoZXZlbnRzVG9DYXRjaCwgcmVxdWVzdGVkRXZlbnRzVG9DYXRjaCk7XG4gICAgICAgICAgICBldmVudHNUb0NhdGNoID0ga28udXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlcyhldmVudHNUb0NhdGNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2YWx1ZVVwZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb3BlcnR5Q2hhbmdlZEZpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IHZhbHVlQWNjZXNzb3IoKTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50VmFsdWUgPSBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcud3JpdGVWYWx1ZVRvUHJvcGVydHkobW9kZWxWYWx1ZSwgYWxsQmluZGluZ3NBY2Nlc3NvciwgJ3ZhbHVlJywgZWxlbWVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGV2ZVNhbmRlcnNvbi9rbm9ja291dC9pc3N1ZXMvMTIyXG4gICAgICAgIC8vIElFIGRvZXNuJ3QgZmlyZSBcImNoYW5nZVwiIGV2ZW50cyBvbiB0ZXh0Ym94ZXMgaWYgdGhlIHVzZXIgc2VsZWN0cyBhIHZhbHVlIGZyb20gaXRzIGF1dG9jb21wbGV0ZSBsaXN0XG4gICAgICAgIHZhciBpZUF1dG9Db21wbGV0ZUhhY2tOZWVkZWQgPSBrby51dGlscy5pZVZlcnNpb24gJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJpbnB1dFwiICYmIGVsZW1lbnQudHlwZSA9PSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZWxlbWVudC5hdXRvY29tcGxldGUgIT0gXCJvZmZcIiAmJiAoIWVsZW1lbnQuZm9ybSB8fCBlbGVtZW50LmZvcm0uYXV0b2NvbXBsZXRlICE9IFwib2ZmXCIpO1xuICAgICAgICBpZiAoaWVBdXRvQ29tcGxldGVIYWNrTmVlZGVkICYmIGtvLnV0aWxzLmFycmF5SW5kZXhPZihldmVudHNUb0NhdGNoLCBcInByb3BlcnR5Y2hhbmdlXCIpID09IC0xKSB7XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBcInByb3BlcnR5Y2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgcHJvcGVydHlDaGFuZ2VkRmlyZWQgPSB0cnVlIH0pO1xuICAgICAgICAgICAga28udXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXIoZWxlbWVudCwgXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eUNoYW5nZWRGaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVVwZGF0ZUhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChldmVudHNUb0NhdGNoLCBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBzeW50YXggXCJhZnRlcjxldmVudG5hbWU+XCIgbWVhbnMgXCJydW4gdGhlIGhhbmRsZXIgYXN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGV2ZW50XCJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdXNlZnVsLCBmb3IgZXhhbXBsZSwgdG8gY2F0Y2ggXCJrZXlkb3duXCIgZXZlbnRzIGFmdGVyIHRoZSBicm93c2VyIGhhcyB1cGRhdGVkIHRoZSBjb250cm9sXG4gICAgICAgICAgICAvLyAob3RoZXJ3aXNlLCBrby5zZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZSh0aGlzKSB3aWxsIHJlY2VpdmUgdGhlIGNvbnRyb2wncyB2YWx1ZSAqYmVmb3JlKiB0aGUga2V5IGV2ZW50KVxuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSB2YWx1ZVVwZGF0ZUhhbmRsZXI7XG4gICAgICAgICAgICBpZiAoa28udXRpbHMuc3RyaW5nU3RhcnRzV2l0aChldmVudE5hbWUsIFwiYWZ0ZXJcIikpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24oKSB7IHNldFRpbWVvdXQodmFsdWVVcGRhdGVIYW5kbGVyLCAwKSB9O1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50TmFtZS5zdWJzdHJpbmcoXCJhZnRlclwiLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrby51dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWVJc1NlbGVjdE9wdGlvbiA9IGtvLnV0aWxzLnRhZ05hbWVMb3dlcihlbGVtZW50KSA9PT0gXCJzZWxlY3RcIjtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZUFjY2Vzc29yKCkpO1xuICAgICAgICB2YXIgZWxlbWVudFZhbHVlID0ga28uc2VsZWN0RXh0ZW5zaW9ucy5yZWFkVmFsdWUoZWxlbWVudCk7XG4gICAgICAgIHZhciB2YWx1ZUhhc0NoYW5nZWQgPSAobmV3VmFsdWUgIT0gZWxlbWVudFZhbHVlKTtcblxuICAgICAgICAvLyBKYXZhU2NyaXB0J3MgMCA9PSBcIlwiIGJlaGF2aW91cyBpcyB1bmZvcnR1bmF0ZSBoZXJlIGFzIGl0IHByZXZlbnRzIHdyaXRpbmcgMCB0byBhbiBlbXB0eSB0ZXh0IGJveCAobG9vc2UgZXF1YWxpdHkgc3VnZ2VzdHMgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWUpLlxuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIGRvIGEgc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb24gYXMgdGhhdCBpcyBtb3JlIGNvbmZ1c2luZyBmb3IgZGV2ZWxvcGVycyBpbiBjZXJ0YWluIGNhc2VzLCBzbyB3ZSBzcGVjaWZpY2FsbHkgc3BlY2lhbCBjYXNlIDAgIT0gXCJcIiBoZXJlLlxuICAgICAgICBpZiAoKG5ld1ZhbHVlID09PSAwKSAmJiAoZWxlbWVudFZhbHVlICE9PSAwKSAmJiAoZWxlbWVudFZhbHVlICE9PSBcIjBcIikpXG4gICAgICAgICAgICB2YWx1ZUhhc0NoYW5nZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh2YWx1ZUhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHZhciBhcHBseVZhbHVlQWN0aW9uID0gZnVuY3Rpb24gKCkgeyBrby5zZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWUoZWxlbWVudCwgbmV3VmFsdWUpOyB9O1xuICAgICAgICAgICAgYXBwbHlWYWx1ZUFjdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBJRTYgYnVnOiBJdCB3b24ndCByZWxpYWJseSBhcHBseSB2YWx1ZXMgdG8gU0VMRUNUIG5vZGVzIGR1cmluZyB0aGUgc2FtZSBleGVjdXRpb24gdGhyZWFkXG4gICAgICAgICAgICAvLyByaWdodCBhZnRlciB5b3UndmUgY2hhbmdlZCB0aGUgc2V0IG9mIE9QVElPTiBub2RlcyBvbiBpdC4gU28gZm9yIHRoYXQgbm9kZSB0eXBlLCB3ZSdsbCBzY2hlZHVsZSBhIHNlY29uZCB0aHJlYWRcbiAgICAgICAgICAgIC8vIHRvIGFwcGx5IHRoZSB2YWx1ZSBhcyB3ZWxsLlxuICAgICAgICAgICAgdmFyIGFsc29BcHBseUFzeW5jaHJvbm91c2x5ID0gdmFsdWVJc1NlbGVjdE9wdGlvbjtcbiAgICAgICAgICAgIGlmIChhbHNvQXBwbHlBc3luY2hyb25vdXNseSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFwcGx5VmFsdWVBY3Rpb24sIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgeW91IHRyeSB0byBzZXQgYSBtb2RlbCB2YWx1ZSB0aGF0IGNhbid0IGJlIHJlcHJlc2VudGVkIGluIGFuIGFscmVhZHktcG9wdWxhdGVkIGRyb3Bkb3duLCByZWplY3QgdGhhdCBjaGFuZ2UsXG4gICAgICAgIC8vIGJlY2F1c2UgeW91J3JlIG5vdCBhbGxvd2VkIHRvIGhhdmUgYSBtb2RlbCB2YWx1ZSB0aGF0IGRpc2FncmVlcyB3aXRoIGEgdmlzaWJsZSBVSSBzZWxlY3Rpb24uXG4gICAgICAgIGlmICh2YWx1ZUlzU2VsZWN0T3B0aW9uICYmIChlbGVtZW50Lmxlbmd0aCA+IDApKVxuICAgICAgICAgICAgZW5zdXJlRHJvcGRvd25TZWxlY3Rpb25Jc0NvbnNpc3RlbnRXaXRoTW9kZWxWYWx1ZShlbGVtZW50LCBuZXdWYWx1ZSwgLyogcHJlZmVyTW9kZWxWYWx1ZSAqLyBmYWxzZSk7XG4gICAgfVxufTtcbmtvLmJpbmRpbmdIYW5kbGVyc1sndmlzaWJsZSddID0ge1xuICAgICd1cGRhdGUnOiBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVBY2Nlc3Nvcikge1xuICAgICAgICB2YXIgdmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgIHZhciBpc0N1cnJlbnRseVZpc2libGUgPSAhKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIik7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhaXNDdXJyZW50bHlWaXNpYmxlKVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgZWxzZSBpZiAoKCF2YWx1ZSkgJiYgaXNDdXJyZW50bHlWaXNpYmxlKVxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufTtcbi8vICdjbGljaycgaXMganVzdCBhIHNob3J0aGFuZCBmb3IgdGhlIHVzdWFsIGZ1bGwtbGVuZ3RoIGV2ZW50OntjbGljazpoYW5kbGVyfVxubWFrZUV2ZW50SGFuZGxlclNob3J0Y3V0KCdjbGljaycpO1xuLy8gSWYgeW91IHdhbnQgdG8gbWFrZSBhIGN1c3RvbSB0ZW1wbGF0ZSBlbmdpbmUsXG4vL1xuLy8gWzFdIEluaGVyaXQgZnJvbSB0aGlzIGNsYXNzIChsaWtlIGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lIGRvZXMpXG4vLyBbMl0gT3ZlcnJpZGUgJ3JlbmRlclRlbXBsYXRlU291cmNlJywgc3VwcGx5aW5nIGEgZnVuY3Rpb24gd2l0aCB0aGlzIHNpZ25hdHVyZTpcbi8vXG4vLyAgICAgICAgZnVuY3Rpb24gKHRlbXBsYXRlU291cmNlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucykge1xuLy8gICAgICAgICAgICAvLyAtIHRlbXBsYXRlU291cmNlLnRleHQoKSBpcyB0aGUgdGV4dCBvZiB0aGUgdGVtcGxhdGUgeW91IHNob3VsZCByZW5kZXJcbi8vICAgICAgICAgICAgLy8gLSBiaW5kaW5nQ29udGV4dC4kZGF0YSBpcyB0aGUgZGF0YSB5b3Ugc2hvdWxkIHBhc3MgaW50byB0aGUgdGVtcGxhdGVcbi8vICAgICAgICAgICAgLy8gICAtIHlvdSBtaWdodCBhbHNvIHdhbnQgdG8gbWFrZSBiaW5kaW5nQ29udGV4dC4kcGFyZW50LCBiaW5kaW5nQ29udGV4dC4kcGFyZW50cyxcbi8vICAgICAgICAgICAgLy8gICAgIGFuZCBiaW5kaW5nQ29udGV4dC4kcm9vdCBhdmFpbGFibGUgaW4gdGhlIHRlbXBsYXRlIHRvb1xuLy8gICAgICAgICAgICAvLyAtIG9wdGlvbnMgZ2l2ZXMgeW91IGFjY2VzcyB0byBhbnkgb3RoZXIgcHJvcGVydGllcyBzZXQgb24gXCJkYXRhLWJpbmQ6IHsgdGVtcGxhdGU6IG9wdGlvbnMgfVwiXG4vLyAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgIC8vIFJldHVybiB2YWx1ZTogYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4vLyAgICAgICAgfVxuLy9cbi8vIFszXSBPdmVycmlkZSAnY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrJywgc3VwcGx5aW5nIGEgZnVuY3Rpb24gd2l0aCB0aGlzIHNpZ25hdHVyZTpcbi8vXG4vLyAgICAgICAgZnVuY3Rpb24gKHNjcmlwdCkge1xuLy8gICAgICAgICAgICAvLyBSZXR1cm4gdmFsdWU6IFdoYXRldmVyIHN5bnRheCBtZWFucyBcIkV2YWx1YXRlIHRoZSBKYXZhU2NyaXB0IHN0YXRlbWVudCAnc2NyaXB0JyBhbmQgb3V0cHV0IHRoZSByZXN1bHRcIlxuLy8gICAgICAgICAgICAvLyAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCB0aGUganF1ZXJ5LnRtcGwgdGVtcGxhdGUgZW5naW5lIGNvbnZlcnRzICdzb21lU2NyaXB0JyB0byAnJHsgc29tZVNjcmlwdCB9J1xuLy8gICAgICAgIH1cbi8vXG4vLyAgICAgVGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBpZiB5b3Ugd2FudCB0byBhbGxvdyBkYXRhLWJpbmQgYXR0cmlidXRlcyB0byByZWZlcmVuY2UgYXJiaXRyYXJ5IHRlbXBsYXRlIHZhcmlhYmxlcy5cbi8vICAgICBJZiB5b3UgZG9uJ3Qgd2FudCB0byBhbGxvdyB0aGF0LCB5b3UgY2FuIHNldCB0aGUgcHJvcGVydHkgJ2FsbG93VGVtcGxhdGVSZXdyaXRpbmcnIHRvIGZhbHNlIChsaWtlIGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lIGRvZXMpXG4vLyAgICAgYW5kIHRoZW4geW91IGRvbid0IG5lZWQgdG8gb3ZlcnJpZGUgJ2NyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaycuXG5cbmtvLnRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKCkgeyB9O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbiAodGVtcGxhdGVTb3VyY2UsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2VcIik7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ2NyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jayddID0gZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk92ZXJyaWRlIGNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9ja1wiKTtcbn07XG5cbmtvLnRlbXBsYXRlRW5naW5lLnByb3RvdHlwZVsnbWFrZVRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZSwgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIC8vIE5hbWVkIHRlbXBsYXRlXG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRlbXBsYXRlRG9jdW1lbnQgPSB0ZW1wbGF0ZURvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgICB2YXIgZWxlbSA9IHRlbXBsYXRlRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGUpO1xuICAgICAgICBpZiAoIWVsZW0pXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiICsgdGVtcGxhdGUpO1xuICAgICAgICByZXR1cm4gbmV3IGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50KGVsZW0pO1xuICAgIH0gZWxzZSBpZiAoKHRlbXBsYXRlLm5vZGVUeXBlID09IDEpIHx8ICh0ZW1wbGF0ZS5ub2RlVHlwZSA9PSA4KSkge1xuICAgICAgICAvLyBBbm9ueW1vdXMgdGVtcGxhdGVcbiAgICAgICAgcmV0dXJuIG5ldyBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH0gZWxzZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiICsgdGVtcGxhdGUpO1xufTtcblxua28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydyZW5kZXJUZW1wbGF0ZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgdGVtcGxhdGVEb2N1bWVudCkge1xuICAgIHZhciB0ZW1wbGF0ZVNvdXJjZSA9IHRoaXNbJ21ha2VUZW1wbGF0ZVNvdXJjZSddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KTtcbiAgICByZXR1cm4gdGhpc1sncmVuZGVyVGVtcGxhdGVTb3VyY2UnXSh0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpO1xufTtcblxua28udGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydpc1RlbXBsYXRlUmV3cml0dGVuJ10gPSBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpIHtcbiAgICAvLyBTa2lwIHJld3JpdGluZyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAodGhpc1snYWxsb3dUZW1wbGF0ZVJld3JpdGluZyddID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXNbJ21ha2VUZW1wbGF0ZVNvdXJjZSddKHRlbXBsYXRlLCB0ZW1wbGF0ZURvY3VtZW50KVsnZGF0YSddKFwiaXNSZXdyaXR0ZW5cIik7XG59O1xuXG5rby50ZW1wbGF0ZUVuZ2luZS5wcm90b3R5cGVbJ3Jld3JpdGVUZW1wbGF0ZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlLCByZXdyaXRlckNhbGxiYWNrLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgdmFyIHRlbXBsYXRlU291cmNlID0gdGhpc1snbWFrZVRlbXBsYXRlU291cmNlJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpO1xuICAgIHZhciByZXdyaXR0ZW4gPSByZXdyaXRlckNhbGxiYWNrKHRlbXBsYXRlU291cmNlWyd0ZXh0J10oKSk7XG4gICAgdGVtcGxhdGVTb3VyY2VbJ3RleHQnXShyZXdyaXR0ZW4pO1xuICAgIHRlbXBsYXRlU291cmNlWydkYXRhJ10oXCJpc1Jld3JpdHRlblwiLCB0cnVlKTtcbn07XG5cbmtvLmV4cG9ydFN5bWJvbCgndGVtcGxhdGVFbmdpbmUnLCBrby50ZW1wbGF0ZUVuZ2luZSk7XG5cbmtvLnRlbXBsYXRlUmV3cml0aW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWVtb2l6ZURhdGFCaW5kaW5nQXR0cmlidXRlU3ludGF4UmVnZXggPSAvKDxbYS16XStcXGQqKFxccysoPyFkYXRhLWJpbmQ9KVthLXowLTlcXC1dKyg9KFxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJykpPykqXFxzKylkYXRhLWJpbmQ9KFtcIiddKShbXFxzXFxTXSo/KVxcNS9naTtcbiAgICB2YXIgbWVtb2l6ZVZpcnR1YWxDb250YWluZXJCaW5kaW5nU3ludGF4UmVnZXggPSAvPCEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS0+L2c7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURhdGFCaW5kVmFsdWVzRm9yUmV3cml0aW5nKGtleVZhbHVlQXJyYXkpIHtcbiAgICAgICAgdmFyIGFsbFZhbGlkYXRvcnMgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9ycztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlWYWx1ZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5VmFsdWVBcnJheVtpXVsna2V5J107XG4gICAgICAgICAgICBpZiAoYWxsVmFsaWRhdG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IGFsbFZhbGlkYXRvcnNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmxlRXJyb3JNZXNzYWdlID0gdmFsaWRhdG9yKGtleVZhbHVlQXJyYXlbaV1bJ3ZhbHVlJ10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVFcnJvck1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocG9zc2libGVFcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIgKyBrZXkgKyBcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RNZW1vaXplZFRhZ1JlcGxhY2VtZW50KGRhdGFCaW5kQXR0cmlidXRlVmFsdWUsIHRhZ1RvUmV0YWluLCB0ZW1wbGF0ZUVuZ2luZSkge1xuICAgICAgICB2YXIgZGF0YUJpbmRLZXlWYWx1ZUFycmF5ID0ga28uZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWwoZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIHZhbGlkYXRlRGF0YUJpbmRWYWx1ZXNGb3JSZXdyaXRpbmcoZGF0YUJpbmRLZXlWYWx1ZUFycmF5KTtcbiAgICAgICAgdmFyIHJld3JpdHRlbkRhdGFCaW5kQXR0cmlidXRlVmFsdWUgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnByZVByb2Nlc3NCaW5kaW5ncyhkYXRhQmluZEtleVZhbHVlQXJyYXkpO1xuXG4gICAgICAgIC8vIEZvciBubyBvYnZpb3VzIHJlYXNvbiwgT3BlcmEgZmFpbHMgdG8gZXZhbHVhdGUgcmV3cml0dGVuRGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZSB1bmxlc3MgaXQncyB3cmFwcGVkIGluIGFuIGFkZGl0aW9uYWxcbiAgICAgICAgLy8gYW5vbnltb3VzIGZ1bmN0aW9uLCBldmVuIHRob3VnaCBPcGVyYSdzIGJ1aWx0LWluIGRlYnVnZ2VyIGNhbiBldmFsdWF0ZSBpdCBhbnl3YXkuIE5vIG90aGVyIGJyb3dzZXIgcmVxdWlyZXMgdGhpc1xuICAgICAgICAvLyBleHRyYSBpbmRpcmVjdGlvbi5cbiAgICAgICAgdmFyIGFwcGx5QmluZGluZ3NUb05leHRTaWJsaW5nU2NyaXB0ID1cbiAgICAgICAgICAgIFwia28uX190cl9hbWJ0bnMoZnVuY3Rpb24oJGNvbnRleHQsJGVsZW1lbnQpe3JldHVybihmdW5jdGlvbigpe3JldHVybnsgXCIgKyByZXdyaXR0ZW5EYXRhQmluZEF0dHJpYnV0ZVZhbHVlICsgXCIgfSB9KSgpfSlcIjtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlRW5naW5lWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXShhcHBseUJpbmRpbmdzVG9OZXh0U2libGluZ1NjcmlwdCkgKyB0YWdUb1JldGFpbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbnN1cmVUZW1wbGF0ZUlzUmV3cml0dGVuOiBmdW5jdGlvbiAodGVtcGxhdGUsIHRlbXBsYXRlRW5naW5lLCB0ZW1wbGF0ZURvY3VtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRlbXBsYXRlRW5naW5lWydpc1RlbXBsYXRlUmV3cml0dGVuJ10odGVtcGxhdGUsIHRlbXBsYXRlRG9jdW1lbnQpKVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlRW5naW5lWydyZXdyaXRlVGVtcGxhdGUnXSh0ZW1wbGF0ZSwgZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtvLnRlbXBsYXRlUmV3cml0aW5nLm1lbW9pemVCaW5kaW5nQXR0cmlidXRlU3ludGF4KGh0bWxTdHJpbmcsIHRlbXBsYXRlRW5naW5lKTtcbiAgICAgICAgICAgICAgICB9LCB0ZW1wbGF0ZURvY3VtZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZW1vaXplQmluZGluZ0F0dHJpYnV0ZVN5bnRheDogZnVuY3Rpb24gKGh0bWxTdHJpbmcsIHRlbXBsYXRlRW5naW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbFN0cmluZy5yZXBsYWNlKG1lbW9pemVEYXRhQmluZGluZ0F0dHJpYnV0ZVN5bnRheFJlZ2V4LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdE1lbW9pemVkVGFnUmVwbGFjZW1lbnQoLyogZGF0YUJpbmRBdHRyaWJ1dGVWYWx1ZTogKi8gYXJndW1lbnRzWzZdLCAvKiB0YWdUb1JldGFpbjogKi8gYXJndW1lbnRzWzFdLCB0ZW1wbGF0ZUVuZ2luZSk7XG4gICAgICAgICAgICB9KS5yZXBsYWNlKG1lbW9pemVWaXJ0dWFsQ29udGFpbmVyQmluZGluZ1N5bnRheFJlZ2V4LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0TWVtb2l6ZWRUYWdSZXBsYWNlbWVudCgvKiBkYXRhQmluZEF0dHJpYnV0ZVZhbHVlOiAqLyBhcmd1bWVudHNbMV0sIC8qIHRhZ1RvUmV0YWluOiAqLyBcIjwhLS0ga28gLS0+XCIsIHRlbXBsYXRlRW5naW5lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGx5TWVtb2l6ZWRCaW5kaW5nc1RvTmV4dFNpYmxpbmc6IGZ1bmN0aW9uIChiaW5kaW5ncykge1xuICAgICAgICAgICAgcmV0dXJuIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoZnVuY3Rpb24gKGRvbU5vZGUsIGJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbU5vZGUubmV4dFNpYmxpbmcpXG4gICAgICAgICAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3NUb05vZGUoZG9tTm9kZS5uZXh0U2libGluZywgYmluZGluZ3MsIGJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuXG4vLyBFeHBvcnRlZCBvbmx5IGJlY2F1c2UgaXQgaGFzIHRvIGJlIHJlZmVyZW5jZWQgYnkgc3RyaW5nIGxvb2t1cCBmcm9tIHdpdGhpbiByZXdyaXR0ZW4gdGVtcGxhdGVcbmtvLmV4cG9ydFN5bWJvbCgnX190cl9hbWJ0bnMnLCBrby50ZW1wbGF0ZVJld3JpdGluZy5hcHBseU1lbW9pemVkQmluZGluZ3NUb05leHRTaWJsaW5nKTtcbihmdW5jdGlvbigpIHtcbiAgICAvLyBBIHRlbXBsYXRlIHNvdXJjZSByZXByZXNlbnRzIGEgcmVhZC93cml0ZSB3YXkgb2YgYWNjZXNzaW5nIGEgdGVtcGxhdGUuIFRoaXMgaXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciB0ZW1wbGF0ZSBsb2FkaW5nL3NhdmluZ1xuICAgIC8vIGxvZ2ljIHRvIGJlIGR1cGxpY2F0ZWQgaW4gZXZlcnkgdGVtcGxhdGUgZW5naW5lIChhbmQgbWVhbnMgdGhleSBjYW4gYWxsIHdvcmsgd2l0aCBhbm9ueW1vdXMgdGVtcGxhdGVzLCBldGMuKVxuICAgIC8vXG4gICAgLy8gVHdvIGFyZSBwcm92aWRlZCBieSBkZWZhdWx0OlxuICAgIC8vICAxLiBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCAgICAgICAtIHJlYWRzL3dyaXRlcyB0aGUgdGV4dCBjb250ZW50IG9mIGFuIGFyYml0cmFyeSBET00gZWxlbWVudFxuICAgIC8vICAyLiBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzRWxlbWVudCAtIHVzZXMga28udXRpbHMuZG9tRGF0YSB0byByZWFkL3dyaXRlIHRleHQgKmFzc29jaWF0ZWQqIHdpdGggdGhlIERPTSBlbGVtZW50LCBidXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IHJlYWRpbmcvd3JpdGluZyB0aGUgYWN0dWFsIGVsZW1lbnQgdGV4dCBjb250ZW50LCBzaW5jZSBpdCB3aWxsIGJlIG92ZXJ3cml0dGVuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgcmVuZGVyZWQgdGVtcGxhdGUgb3V0cHV0LlxuICAgIC8vIFlvdSBjYW4gaW1wbGVtZW50IHlvdXIgb3duIHRlbXBsYXRlIHNvdXJjZSBpZiB5b3Ugd2FudCB0byBmZXRjaC9zdG9yZSB0ZW1wbGF0ZXMgc29tZXdoZXJlIG90aGVyIHRoYW4gaW4gRE9NIGVsZW1lbnRzLlxuICAgIC8vIFRlbXBsYXRlIHNvdXJjZXMgbmVlZCB0byBoYXZlIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICAgIC8vICAgdGV4dCgpIFx0XHRcdC0gcmV0dXJucyB0aGUgdGVtcGxhdGUgdGV4dCBmcm9tIHlvdXIgc3RvcmFnZSBsb2NhdGlvblxuICAgIC8vICAgdGV4dCh2YWx1ZSlcdFx0LSB3cml0ZXMgdGhlIHN1cHBsaWVkIHRlbXBsYXRlIHRleHQgdG8geW91ciBzdG9yYWdlIGxvY2F0aW9uXG4gICAgLy8gICBkYXRhKGtleSlcdFx0XHQtIHJlYWRzIHZhbHVlcyBzdG9yZWQgdXNpbmcgZGF0YShrZXksIHZhbHVlKSAtIHNlZSBiZWxvd1xuICAgIC8vICAgZGF0YShrZXksIHZhbHVlKVx0LSBhc3NvY2lhdGVzIFwidmFsdWVcIiB3aXRoIHRoaXMgdGVtcGxhdGUgYW5kIHRoZSBrZXkgXCJrZXlcIi4gSXMgdXNlZCB0byBzdG9yZSBpbmZvcm1hdGlvbiBsaWtlIFwiaXNSZXdyaXR0ZW5cIi5cbiAgICAvL1xuICAgIC8vIE9wdGlvbmFsbHksIHRlbXBsYXRlIHNvdXJjZXMgY2FuIGFsc28gaGF2ZSB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAgICAvLyAgIG5vZGVzKCkgICAgICAgICAgICAtIHJldHVybnMgYSBET00gZWxlbWVudCBjb250YWluaW5nIHRoZSBub2RlcyBvZiB0aGlzIHRlbXBsYXRlLCB3aGVyZSBhdmFpbGFibGVcbiAgICAvLyAgIG5vZGVzKHZhbHVlKSAgICAgICAtIHdyaXRlcyB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQgdG8geW91ciBzdG9yYWdlIGxvY2F0aW9uXG4gICAgLy8gSWYgYSBET00gZWxlbWVudCBpcyBhdmFpbGFibGUgZm9yIGEgZ2l2ZW4gdGVtcGxhdGUgc291cmNlLCB0ZW1wbGF0ZSBlbmdpbmVzIGFyZSBlbmNvdXJhZ2VkIHRvIHVzZSBpdCBpbiBwcmVmZXJlbmNlIG92ZXIgdGV4dCgpXG4gICAgLy8gZm9yIGltcHJvdmVkIHNwZWVkLiBIb3dldmVyLCBhbGwgdGVtcGxhdGVTb3VyY2VzIG11c3Qgc3VwcGx5IHRleHQoKSBldmVuIGlmIHRoZXkgZG9uJ3Qgc3VwcGx5IG5vZGVzKCkuXG4gICAgLy9cbiAgICAvLyBPbmNlIHlvdSd2ZSBpbXBsZW1lbnRlZCBhIHRlbXBsYXRlU291cmNlLCBtYWtlIHlvdXIgdGVtcGxhdGUgZW5naW5lIHVzZSBpdCBieSBzdWJjbGFzc2luZyB3aGF0ZXZlciB0ZW1wbGF0ZSBlbmdpbmUgeW91IHdlcmVcbiAgICAvLyB1c2luZyBhbmQgb3ZlcnJpZGluZyBcIm1ha2VUZW1wbGF0ZVNvdXJjZVwiIHRvIHJldHVybiBhbiBpbnN0YW5jZSBvZiB5b3VyIGN1c3RvbSB0ZW1wbGF0ZSBzb3VyY2UuXG5cbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMgPSB7fTtcblxuICAgIC8vIC0tLS0ga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQgLS0tLS1cblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsndGV4dCddID0gZnVuY3Rpb24oLyogdmFsdWVUb1dyaXRlICovKSB7XG4gICAgICAgIHZhciB0YWdOYW1lTG93ZXIgPSBrby51dGlscy50YWdOYW1lTG93ZXIodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGVsZW1Db250ZW50c1Byb3BlcnR5ID0gdGFnTmFtZUxvd2VyID09PSBcInNjcmlwdFwiID8gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFnTmFtZUxvd2VyID09PSBcInRleHRhcmVhXCIgPyBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpbm5lckhUTUxcIjtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50W2VsZW1Db250ZW50c1Byb3BlcnR5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAoZWxlbUNvbnRlbnRzUHJvcGVydHkgPT09IFwiaW5uZXJIVE1MXCIpXG4gICAgICAgICAgICAgICAga28udXRpbHMuc2V0SHRtbCh0aGlzLmRvbUVsZW1lbnQsIHZhbHVlVG9Xcml0ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50W2VsZW1Db250ZW50c1Byb3BlcnR5XSA9IHZhbHVlVG9Xcml0ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudC5wcm90b3R5cGVbJ2RhdGEnXSA9IGZ1bmN0aW9uKGtleSAvKiwgdmFsdWVUb1dyaXRlICovKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4ga28udXRpbHMuZG9tRGF0YS5nZXQodGhpcy5kb21FbGVtZW50LCBcInRlbXBsYXRlU291cmNlRGF0YV9cIiArIGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldCh0aGlzLmRvbUVsZW1lbnQsIFwidGVtcGxhdGVTb3VyY2VEYXRhX1wiICsga2V5LCBhcmd1bWVudHNbMV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIC0tLS0ga28udGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlIC0tLS0tXG4gICAgLy8gQW5vbnltb3VzIHRlbXBsYXRlcyBhcmUgbm9ybWFsbHkgc2F2ZWQvcmV0cmlldmVkIGFzIERPTSBub2RlcyB0aHJvdWdoIFwibm9kZXNcIi5cbiAgICAvLyBGb3IgY29tcGF0aWJpbGl0eSwgeW91IGNhbiBhbHNvIHJlYWQgXCJ0ZXh0XCI7IGl0IHdpbGwgYmUgc2VyaWFsaXplZCBmcm9tIHRoZSBub2RlcyBvbiBkZW1hbmQuXG4gICAgLy8gV3JpdGluZyB0byBcInRleHRcIiBpcyBzdGlsbCBzdXBwb3J0ZWQsIGJ1dCB0aGVuIHRoZSB0ZW1wbGF0ZSBkYXRhIHdpbGwgbm90IGJlIGF2YWlsYWJsZSBhcyBET00gbm9kZXMuXG5cbiAgICB2YXIgYW5vbnltb3VzVGVtcGxhdGVzRG9tRGF0YUtleSA9IFwiX19rb19hbm9uX3RlbXBsYXRlX19cIjtcbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZS5wcm90b3R5cGUgPSBuZXcga28udGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnQoKTtcbiAgICBrby50ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGUucHJvdG90eXBlWyd0ZXh0J10gPSBmdW5jdGlvbigvKiB2YWx1ZVRvV3JpdGUgKi8pIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlRGF0YSA9IGtvLnV0aWxzLmRvbURhdGEuZ2V0KHRoaXMuZG9tRWxlbWVudCwgYW5vbnltb3VzVGVtcGxhdGVzRG9tRGF0YUtleSkgfHwge307XG4gICAgICAgICAgICBpZiAodGVtcGxhdGVEYXRhLnRleHREYXRhID09PSB1bmRlZmluZWQgJiYgdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGEpXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVEYXRhLnRleHREYXRhID0gdGVtcGxhdGVEYXRhLmNvbnRhaW5lckRhdGEuaW5uZXJIVE1MO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlRGF0YS50ZXh0RGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldCh0aGlzLmRvbUVsZW1lbnQsIGFub255bW91c1RlbXBsYXRlc0RvbURhdGFLZXksIHt0ZXh0RGF0YTogdmFsdWVUb1dyaXRlfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50LnByb3RvdHlwZVsnbm9kZXMnXSA9IGZ1bmN0aW9uKC8qIHZhbHVlVG9Xcml0ZSAqLykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVEYXRhID0ga28udXRpbHMuZG9tRGF0YS5nZXQodGhpcy5kb21FbGVtZW50LCBhbm9ueW1vdXNUZW1wbGF0ZXNEb21EYXRhS2V5KSB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZURhdGEuY29udGFpbmVyRGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvV3JpdGUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBrby51dGlscy5kb21EYXRhLnNldCh0aGlzLmRvbUVsZW1lbnQsIGFub255bW91c1RlbXBsYXRlc0RvbURhdGFLZXksIHtjb250YWluZXJEYXRhOiB2YWx1ZVRvV3JpdGV9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBrby5leHBvcnRTeW1ib2woJ3RlbXBsYXRlU291cmNlcycsIGtvLnRlbXBsYXRlU291cmNlcyk7XG4gICAga28uZXhwb3J0U3ltYm9sKCd0ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudCcsIGtvLnRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50KTtcbiAgICBrby5leHBvcnRTeW1ib2woJ3RlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZScsIGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZSk7XG59KSgpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RlbXBsYXRlRW5naW5lO1xuICAgIGtvLnNldFRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKHRlbXBsYXRlRW5naW5lKSB7XG4gICAgICAgIGlmICgodGVtcGxhdGVFbmdpbmUgIT0gdW5kZWZpbmVkKSAmJiAhKHRlbXBsYXRlRW5naW5lIGluc3RhbmNlb2Yga28udGVtcGxhdGVFbmdpbmUpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmVcIik7XG4gICAgICAgIF90ZW1wbGF0ZUVuZ2luZSA9IHRlbXBsYXRlRW5naW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludm9rZUZvckVhY2hOb2RlT3JDb21tZW50SW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBub2RlLCBuZXh0SW5RdWV1ZSA9IGZpcnN0Tm9kZSwgZmlyc3RPdXRPZlJhbmdlTm9kZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhsYXN0Tm9kZSk7XG4gICAgICAgIHdoaWxlIChuZXh0SW5RdWV1ZSAmJiAoKG5vZGUgPSBuZXh0SW5RdWV1ZSkgIT09IGZpcnN0T3V0T2ZSYW5nZU5vZGUpKSB7XG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IGtvLnZpcnR1YWxFbGVtZW50cy5uZXh0U2libGluZyhub2RlKTtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDgpXG4gICAgICAgICAgICAgICAgYWN0aW9uKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaW5kaW5nc09uQ29udGludW91c05vZGVBcnJheShjb250aW51b3VzTm9kZUFycmF5LCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAvLyBUbyBiZSB1c2VkIG9uIGFueSBub2RlcyB0aGF0IGhhdmUgYmVlbiByZW5kZXJlZCBieSBhIHRlbXBsYXRlIGFuZCBoYXZlIGJlZW4gaW5zZXJ0ZWQgaW50byBzb21lIHBhcmVudCBlbGVtZW50XG4gICAgICAgIC8vIFdhbGtzIHRocm91Z2ggY29udGludW91c05vZGVBcnJheSAod2hpY2ggKm11c3QqIGJlIGNvbnRpbnVvdXMsIGkuZS4sIGFuIHVuaW50ZXJydXB0ZWQgc2VxdWVuY2Ugb2Ygc2libGluZyBub2RlcywgYmVjYXVzZVxuICAgICAgICAvLyB0aGUgYWxnb3JpdGhtIGZvciB3YWxraW5nIHRoZW0gcmVsaWVzIG9uIHRoaXMpLCBhbmQgZm9yIGVhY2ggdG9wLWxldmVsIGl0ZW0gaW4gdGhlIHZpcnR1YWwtZWxlbWVudCBzZW5zZSxcbiAgICAgICAgLy8gKDEpIERvZXMgYSByZWd1bGFyIFwiYXBwbHlCaW5kaW5nc1wiIHRvIGFzc29jaWF0ZSBiaW5kaW5nQ29udGV4dCB3aXRoIHRoaXMgbm9kZSBhbmQgdG8gYWN0aXZhdGUgYW55IG5vbi1tZW1vaXplZCBiaW5kaW5nc1xuICAgICAgICAvLyAoMikgVW5tZW1vaXplcyBhbnkgbWVtb3MgaW4gdGhlIERPTSBzdWJ0cmVlIChlLmcuLCB0byBhY3RpdmF0ZSBiaW5kaW5ncyB0aGF0IGhhZCBiZWVuIG1lbW9pemVkIGR1cmluZyB0ZW1wbGF0ZSByZXdyaXRpbmcpXG5cbiAgICAgICAgaWYgKGNvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3ROb2RlID0gY29udGludW91c05vZGVBcnJheVswXSwgbGFzdE5vZGUgPSBjb250aW51b3VzTm9kZUFycmF5W2NvbnRpbnVvdXNOb2RlQXJyYXkubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIC8vIE5lZWQgdG8gYXBwbHlCaW5kaW5ncyAqYmVmb3JlKiB1bm1lbW96aWF0aW9uLCBiZWNhdXNlIHVubWVtb2l6YXRpb24gbWlnaHQgaW50cm9kdWNlIGV4dHJhIG5vZGVzICh0aGF0IHdlIGRvbid0IHdhbnQgdG8gcmUtYmluZClcbiAgICAgICAgICAgIC8vIHdoZXJlYXMgYSByZWd1bGFyIGFwcGx5QmluZGluZ3Mgd29uJ3QgaW50cm9kdWNlIG5ldyBtZW1vaXplZCBub2Rlc1xuICAgICAgICAgICAgaW52b2tlRm9yRWFjaE5vZGVPckNvbW1lbnRJbkNvbnRpbnVvdXNSYW5nZShmaXJzdE5vZGUsIGxhc3ROb2RlLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAga28uYXBwbHlCaW5kaW5ncyhiaW5kaW5nQ29udGV4dCwgbm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGludm9rZUZvckVhY2hOb2RlT3JDb21tZW50SW5Db250aW51b3VzUmFuZ2UoZmlyc3ROb2RlLCBsYXN0Tm9kZSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGtvLm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50cyhub2RlLCBbYmluZGluZ0NvbnRleHRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkobm9kZU9yTm9kZUFycmF5KSB7XG4gICAgICAgIHJldHVybiBub2RlT3JOb2RlQXJyYXkubm9kZVR5cGUgPyBub2RlT3JOb2RlQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vZGVPck5vZGVBcnJheS5sZW5ndGggPiAwID8gbm9kZU9yTm9kZUFycmF5WzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZSh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUsIHRlbXBsYXRlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGZpcnN0VGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGVPck5vZGVBcnJheSAmJiBnZXRGaXJzdE5vZGVGcm9tUG9zc2libGVBcnJheSh0YXJnZXROb2RlT3JOb2RlQXJyYXkpO1xuICAgICAgICB2YXIgdGVtcGxhdGVEb2N1bWVudCA9IGZpcnN0VGFyZ2V0Tm9kZSAmJiBmaXJzdFRhcmdldE5vZGUub3duZXJEb2N1bWVudDtcbiAgICAgICAgdmFyIHRlbXBsYXRlRW5naW5lVG9Vc2UgPSAob3B0aW9uc1sndGVtcGxhdGVFbmdpbmUnXSB8fCBfdGVtcGxhdGVFbmdpbmUpO1xuICAgICAgICBrby50ZW1wbGF0ZVJld3JpdGluZy5lbnN1cmVUZW1wbGF0ZUlzUmV3cml0dGVuKHRlbXBsYXRlLCB0ZW1wbGF0ZUVuZ2luZVRvVXNlLCB0ZW1wbGF0ZURvY3VtZW50KTtcbiAgICAgICAgdmFyIHJlbmRlcmVkTm9kZXNBcnJheSA9IHRlbXBsYXRlRW5naW5lVG9Vc2VbJ3JlbmRlclRlbXBsYXRlJ10odGVtcGxhdGUsIGJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0ZW1wbGF0ZURvY3VtZW50KTtcblxuICAgICAgICAvLyBMb29zZWx5IGNoZWNrIHJlc3VsdCBpcyBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAgICAgICAgaWYgKCh0eXBlb2YgcmVuZGVyZWROb2Rlc0FycmF5Lmxlbmd0aCAhPSBcIm51bWJlclwiKSB8fCAocmVuZGVyZWROb2Rlc0FycmF5Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHJlbmRlcmVkTm9kZXNBcnJheVswXS5ub2RlVHlwZSAhPSBcIm51bWJlclwiKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIik7XG5cbiAgICAgICAgdmFyIGhhdmVBZGRlZE5vZGVzVG9QYXJlbnQgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChyZW5kZXJNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwicmVwbGFjZUNoaWxkcmVuXCI6XG4gICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlbih0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlcmVkTm9kZXNBcnJheSk7XG4gICAgICAgICAgICAgICAgaGF2ZUFkZGVkTm9kZXNUb1BhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVwbGFjZU5vZGVcIjpcbiAgICAgICAgICAgICAgICBrby51dGlscy5yZXBsYWNlRG9tTm9kZXModGFyZ2V0Tm9kZU9yTm9kZUFycmF5LCByZW5kZXJlZE5vZGVzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGhhdmVBZGRlZE5vZGVzVG9QYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjogYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIgKyByZW5kZXJNb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXZlQWRkZWROb2Rlc1RvUGFyZW50KSB7XG4gICAgICAgICAgICBhY3RpdmF0ZUJpbmRpbmdzT25Db250aW51b3VzTm9kZUFycmF5KHJlbmRlcmVkTm9kZXNBcnJheSwgYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2FmdGVyUmVuZGVyJ10pXG4gICAgICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUob3B0aW9uc1snYWZ0ZXJSZW5kZXInXSwgbnVsbCwgW3JlbmRlcmVkTm9kZXNBcnJheSwgYmluZGluZ0NvbnRleHRbJyRkYXRhJ11dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlZE5vZGVzQXJyYXk7XG4gICAgfVxuXG4gICAga28ucmVuZGVyVGVtcGxhdGUgPSBmdW5jdGlvbiAodGVtcGxhdGUsIGRhdGFPckJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCB0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICgob3B0aW9uc1sndGVtcGxhdGVFbmdpbmUnXSB8fCBfdGVtcGxhdGVFbmdpbmUpID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTtcbiAgICAgICAgcmVuZGVyTW9kZSA9IHJlbmRlck1vZGUgfHwgXCJyZXBsYWNlQ2hpbGRyZW5cIjtcblxuICAgICAgICBpZiAodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RUYXJnZXROb2RlID0gZ2V0Rmlyc3ROb2RlRnJvbVBvc3NpYmxlQXJyYXkodGFyZ2V0Tm9kZU9yTm9kZUFycmF5KTtcblxuICAgICAgICAgICAgdmFyIHdoZW5Ub0Rpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoIWZpcnN0VGFyZ2V0Tm9kZSkgfHwgIWtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChmaXJzdFRhcmdldE5vZGUpOyB9OyAvLyBQYXNzaXZlIGRpc3Bvc2FsIChvbiBuZXh0IGV2YWx1YXRpb24pXG4gICAgICAgICAgICB2YXIgYWN0aXZlbHlEaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQgPSAoZmlyc3RUYXJnZXROb2RlICYmIHJlbmRlck1vZGUgPT0gXCJyZXBsYWNlTm9kZVwiKSA/IGZpcnN0VGFyZ2V0Tm9kZS5wYXJlbnROb2RlIDogZmlyc3RUYXJnZXROb2RlO1xuXG4gICAgICAgICAgICByZXR1cm4ga28uZGVwZW5kZW50T2JzZXJ2YWJsZSggLy8gU28gdGhlIERPTSBpcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQgd2hlbiBhbnkgZGVwZW5kZW5jeSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgd2UndmUgZ290IGEgcHJvcGVyIGJpbmRpbmcgY29udGV4dCB0byB3b3JrIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJpbmRpbmdDb250ZXh0ID0gKGRhdGFPckJpbmRpbmdDb250ZXh0ICYmIChkYXRhT3JCaW5kaW5nQ29udGV4dCBpbnN0YW5jZW9mIGtvLmJpbmRpbmdDb250ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YU9yQmluZGluZ0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbmV3IGtvLmJpbmRpbmdDb250ZXh0KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoZGF0YU9yQmluZGluZ0NvbnRleHQpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHNlbGVjdGluZyB0ZW1wbGF0ZSBhcyBhIGZ1bmN0aW9uIG9mIHRoZSBkYXRhIGJlaW5nIHJlbmRlcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5hbWUgPSB0eXBlb2YodGVtcGxhdGUpID09ICdmdW5jdGlvbicgPyB0ZW1wbGF0ZShiaW5kaW5nQ29udGV4dFsnJGRhdGEnXSwgYmluZGluZ0NvbnRleHQpIDogdGVtcGxhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVkTm9kZXNBcnJheSA9IGV4ZWN1dGVUZW1wbGF0ZSh0YXJnZXROb2RlT3JOb2RlQXJyYXksIHJlbmRlck1vZGUsIHRlbXBsYXRlTmFtZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVuZGVyTW9kZSA9PSBcInJlcGxhY2VOb2RlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGVPck5vZGVBcnJheSA9IHJlbmRlcmVkTm9kZXNBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGFyZ2V0Tm9kZSA9IGdldEZpcnN0Tm9kZUZyb21Qb3NzaWJsZUFycmF5KHRhcmdldE5vZGVPck5vZGVBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgeyBkaXNwb3NlV2hlbjogd2hlblRvRGlzcG9zZSwgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBhY3RpdmVseURpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZCB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgeWV0IGhhdmUgYSBET00gbm9kZSB0byBldmFsdWF0ZSwgc28gdXNlIGEgbWVtbyBhbmQgcmVuZGVyIHRoZSB0ZW1wbGF0ZSBsYXRlciB3aGVuIHRoZXJlIGlzIGEgRE9NIG5vZGVcbiAgICAgICAgICAgIHJldHVybiBrby5tZW1vaXphdGlvbi5tZW1vaXplKGZ1bmN0aW9uIChkb21Ob2RlKSB7XG4gICAgICAgICAgICAgICAga28ucmVuZGVyVGVtcGxhdGUodGVtcGxhdGUsIGRhdGFPckJpbmRpbmdDb250ZXh0LCBvcHRpb25zLCBkb21Ob2RlLCBcInJlcGxhY2VOb2RlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28ucmVuZGVyVGVtcGxhdGVGb3JFYWNoID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBhcnJheU9yT2JzZXJ2YWJsZUFycmF5LCBvcHRpb25zLCB0YXJnZXROb2RlLCBwYXJlbnRCaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAvLyBTaW5jZSBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIGFsd2F5cyBjYWxscyBleGVjdXRlVGVtcGxhdGVGb3JBcnJheUl0ZW0gYW5kIHRoZW5cbiAgICAgICAgLy8gYWN0aXZhdGVCaW5kaW5nc0NhbGxiYWNrIGZvciBhZGRlZCBpdGVtcywgd2UgY2FuIHN0b3JlIHRoZSBiaW5kaW5nIGNvbnRleHQgaW4gdGhlIGZvcm1lciB0byB1c2UgaW4gdGhlIGxhdHRlci5cbiAgICAgICAgdmFyIGFycmF5SXRlbUNvbnRleHQ7XG5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNhbGxlZCBieSBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nIHRvIGdldCB0aGUgbm9kZXMgdG8gYWRkIHRvIHRhcmdldE5vZGVcbiAgICAgICAgdmFyIGV4ZWN1dGVUZW1wbGF0ZUZvckFycmF5SXRlbSA9IGZ1bmN0aW9uIChhcnJheVZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBzZWxlY3RpbmcgdGVtcGxhdGUgYXMgYSBmdW5jdGlvbiBvZiB0aGUgZGF0YSBiZWluZyByZW5kZXJlZFxuICAgICAgICAgICAgYXJyYXlJdGVtQ29udGV4dCA9IHBhcmVudEJpbmRpbmdDb250ZXh0WydjcmVhdGVDaGlsZENvbnRleHQnXShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5VmFsdWUpLCBvcHRpb25zWydhcyddKTtcbiAgICAgICAgICAgIGFycmF5SXRlbUNvbnRleHRbJyRpbmRleCddID0gaW5kZXg7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVOYW1lID0gdHlwZW9mKHRlbXBsYXRlKSA9PSAnZnVuY3Rpb24nID8gdGVtcGxhdGUoYXJyYXlWYWx1ZSwgYXJyYXlJdGVtQ29udGV4dCkgOiB0ZW1wbGF0ZTtcbiAgICAgICAgICAgIHJldHVybiBleGVjdXRlVGVtcGxhdGUobnVsbCwgXCJpZ25vcmVUYXJnZXROb2RlXCIsIHRlbXBsYXRlTmFtZSwgYXJyYXlJdGVtQ29udGV4dCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgaGFzIGFkZGVkIG5vZGVzIHRvIHRhcmdldE5vZGVcbiAgICAgICAgdmFyIGFjdGl2YXRlQmluZGluZ3NDYWxsYmFjayA9IGZ1bmN0aW9uKGFycmF5VmFsdWUsIGFkZGVkTm9kZXNBcnJheSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlQmluZGluZ3NPbkNvbnRpbnVvdXNOb2RlQXJyYXkoYWRkZWROb2Rlc0FycmF5LCBhcnJheUl0ZW1Db250ZXh0KTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zWydhZnRlclJlbmRlciddKVxuICAgICAgICAgICAgICAgIG9wdGlvbnNbJ2FmdGVyUmVuZGVyJ10oYWRkZWROb2Rlc0FycmF5LCBhcnJheVZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ga28uZGVwZW5kZW50T2JzZXJ2YWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdW53cmFwcGVkQXJyYXkgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5T3JPYnNlcnZhYmxlQXJyYXkpIHx8IFtdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1bndyYXBwZWRBcnJheS5sZW5ndGggPT0gXCJ1bmRlZmluZWRcIikgLy8gQ29lcmNlIHNpbmdsZSB2YWx1ZSBpbnRvIGFycmF5XG4gICAgICAgICAgICAgICAgdW53cmFwcGVkQXJyYXkgPSBbdW53cmFwcGVkQXJyYXldO1xuXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGFueSBlbnRyaWVzIG1hcmtlZCBhcyBkZXN0cm95ZWRcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFycmF5ID0ga28udXRpbHMuYXJyYXlGaWx0ZXIodW53cmFwcGVkQXJyYXksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uc1snaW5jbHVkZURlc3Ryb3llZCddIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCB8fCBpdGVtID09PSBudWxsIHx8ICFrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGl0ZW1bJ19kZXN0cm95J10pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbGwgc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZywgaWdub3JpbmcgYW55IG9ic2VydmFibGVzIHVud3JhcHBlZCB3aXRoaW4gKG1vc3QgbGlrZWx5IGZyb20gYSBjYWxsYmFjayBmdW5jdGlvbikuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYXJyYXkgaXRlbXMgYXJlIG9ic2VydmFibGVzLCB0aG91Z2gsIHRoZXkgd2lsbCBiZSB1bndyYXBwZWQgaW4gZXhlY3V0ZVRlbXBsYXRlRm9yQXJyYXlJdGVtIGFuZCBtYW5hZ2VkIHdpdGhpbiBzZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nLlxuICAgICAgICAgICAga28uZGVwZW5kZW5jeURldGVjdGlvbi5pZ25vcmUoa28udXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZywgbnVsbCwgW3RhcmdldE5vZGUsIGZpbHRlcmVkQXJyYXksIGV4ZWN1dGVUZW1wbGF0ZUZvckFycmF5SXRlbSwgb3B0aW9ucywgYWN0aXZhdGVCaW5kaW5nc0NhbGxiYWNrXSk7XG5cbiAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IHRhcmdldE5vZGUgfSk7XG4gICAgfTtcblxuICAgIHZhciB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSA9ICdfX2tvX190ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleV9fJztcbiAgICBmdW5jdGlvbiBkaXNwb3NlT2xkQ29tcHV0ZWRBbmRTdG9yZU5ld09uZShlbGVtZW50LCBuZXdDb21wdXRlZCkge1xuICAgICAgICB2YXIgb2xkQ29tcHV0ZWQgPSBrby51dGlscy5kb21EYXRhLmdldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSk7XG4gICAgICAgIGlmIChvbGRDb21wdXRlZCAmJiAodHlwZW9mKG9sZENvbXB1dGVkLmRpc3Bvc2UpID09ICdmdW5jdGlvbicpKVxuICAgICAgICAgICAgb2xkQ29tcHV0ZWQuZGlzcG9zZSgpO1xuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkRG9tRGF0YUtleSwgKG5ld0NvbXB1dGVkICYmIG5ld0NvbXB1dGVkLmlzQWN0aXZlKCkpID8gbmV3Q29tcHV0ZWQgOiB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIGtvLmJpbmRpbmdIYW5kbGVyc1sndGVtcGxhdGUnXSA9IHtcbiAgICAgICAgJ2luaXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yKSB7XG4gICAgICAgICAgICAvLyBTdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXNcbiAgICAgICAgICAgIHZhciBiaW5kaW5nVmFsdWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSk7XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBiaW5kaW5nVmFsdWUgIT0gXCJzdHJpbmdcIikgJiYgKCFiaW5kaW5nVmFsdWVbJ25hbWUnXSkgJiYgKGVsZW1lbnQubm9kZVR5cGUgPT0gMSB8fCBlbGVtZW50Lm5vZGVUeXBlID09IDgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQncyBhbiBhbm9ueW1vdXMgdGVtcGxhdGUgLSBzdG9yZSB0aGUgZWxlbWVudCBjb250ZW50cywgdGhlbiBjbGVhciB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5vZGVzID0gZWxlbWVudC5ub2RlVHlwZSA9PSAxID8gZWxlbWVudC5jaGlsZE5vZGVzIDoga28udmlydHVhbEVsZW1lbnRzLmNoaWxkTm9kZXMoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGtvLnV0aWxzLm1vdmVDbGVhbmVkTm9kZXNUb0NvbnRhaW5lckVsZW1lbnQodGVtcGxhdGVOb2Rlcyk7IC8vIFRoaXMgYWxzbyByZW1vdmVzIHRoZSBub2RlcyBmcm9tIHRoZWlyIGN1cnJlbnQgcGFyZW50XG4gICAgICAgICAgICAgICAgbmV3IGtvLnRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZShlbGVtZW50KVsnbm9kZXMnXShjb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgJ2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzJzogdHJ1ZSB9O1xuICAgICAgICB9LFxuICAgICAgICAndXBkYXRlJzogZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlQWNjZXNzb3IsIGFsbEJpbmRpbmdzQWNjZXNzb3IsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU5hbWUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlQWNjZXNzb3IoKSksXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgICAgIHNob3VsZERpc3BsYXkgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbXB1dGVkID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZU5hbWUgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0ZW1wbGF0ZU5hbWU7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVOYW1lID0gb3B0aW9uc1snbmFtZSddO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCBcImlmXCIvXCJpZm5vdFwiIGNvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoJ2lmJyBpbiBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShvcHRpb25zWydpZiddKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRGlzcGxheSAmJiAnaWZub3QnIGluIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZERpc3BsYXkgPSAha28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShvcHRpb25zWydpZm5vdCddKTtcblxuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob3B0aW9uc1snZGF0YSddKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCdmb3JlYWNoJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIG9uY2UgZm9yIGVhY2ggZGF0YSBwb2ludCAodHJlYXRpbmcgZGF0YSBzZXQgYXMgZW1wdHkgaWYgc2hvdWxkRGlzcGxheT09ZmFsc2UpXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFBcnJheSA9IChzaG91bGREaXNwbGF5ICYmIG9wdGlvbnNbJ2ZvcmVhY2gnXSkgfHwgW107XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDb21wdXRlZCA9IGtvLnJlbmRlclRlbXBsYXRlRm9yRWFjaCh0ZW1wbGF0ZU5hbWUgfHwgZWxlbWVudCwgZGF0YUFycmF5LCBvcHRpb25zLCBlbGVtZW50LCBiaW5kaW5nQ29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGREaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZShlbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIG9uY2UgZm9yIHRoaXMgc2luZ2xlIGRhdGEgcG9pbnQgKG9yIHVzZSB0aGUgdmlld01vZGVsIGlmIG5vIGRhdGEgd2FzIHByb3ZpZGVkKVxuICAgICAgICAgICAgICAgIHZhciBpbm5lckJpbmRpbmdDb250ZXh0ID0gKCdkYXRhJyBpbiBvcHRpb25zKSA/XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdDb250ZXh0WydjcmVhdGVDaGlsZENvbnRleHQnXShkYXRhVmFsdWUsIG9wdGlvbnNbJ2FzJ10pIDogIC8vIEdpdmVuIGFuIGV4cGxpdGl0ICdkYXRhJyB2YWx1ZSwgd2UgY3JlYXRlIGEgY2hpbGQgYmluZGluZyBjb250ZXh0IGZvciBpdFxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nQ29udGV4dDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdpdmVuIG5vIGV4cGxpY2l0ICdkYXRhJyB2YWx1ZSwgd2UgcmV0YWluIHRoZSBzYW1lIGJpbmRpbmcgY29udGV4dFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29tcHV0ZWQgPSBrby5yZW5kZXJUZW1wbGF0ZSh0ZW1wbGF0ZU5hbWUgfHwgZWxlbWVudCwgaW5uZXJCaW5kaW5nQ29udGV4dCwgb3B0aW9ucywgZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEl0IG9ubHkgbWFrZXMgc2Vuc2UgdG8gaGF2ZSBhIHNpbmdsZSB0ZW1wbGF0ZSBjb21wdXRlZCBwZXIgZWxlbWVudCAob3RoZXJ3aXNlIHdoaWNoIG9uZSBzaG91bGQgaGF2ZSBpdHMgb3V0cHV0IGRpc3BsYXllZD8pXG4gICAgICAgICAgICBkaXNwb3NlT2xkQ29tcHV0ZWRBbmRTdG9yZU5ld09uZShlbGVtZW50LCB0ZW1wbGF0ZUNvbXB1dGVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBBbm9ueW1vdXMgdGVtcGxhdGVzIGNhbid0IGJlIHJld3JpdHRlbi4gR2l2ZSBhIG5pY2UgZXJyb3IgbWVzc2FnZSBpZiB5b3UgdHJ5IHRvIGRvIGl0LlxuICAgIGtvLmV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzWyd0ZW1wbGF0ZSddID0gZnVuY3Rpb24oYmluZGluZ1ZhbHVlKSB7XG4gICAgICAgIHZhciBwYXJzZWRCaW5kaW5nVmFsdWUgPSBrby5leHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbChiaW5kaW5nVmFsdWUpO1xuXG4gICAgICAgIGlmICgocGFyc2VkQmluZGluZ1ZhbHVlLmxlbmd0aCA9PSAxKSAmJiBwYXJzZWRCaW5kaW5nVmFsdWVbMF1bJ3Vua25vd24nXSlcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBJdCBsb29rcyBsaWtlIGEgc3RyaW5nIGxpdGVyYWwsIG5vdCBhbiBvYmplY3QgbGl0ZXJhbCwgc28gdHJlYXQgaXQgYXMgYSBuYW1lZCB0ZW1wbGF0ZSAod2hpY2ggaXMgYWxsb3dlZCBmb3IgcmV3cml0aW5nKVxuXG4gICAgICAgIGlmIChrby5leHByZXNzaW9uUmV3cml0aW5nLmtleVZhbHVlQXJyYXlDb250YWluc0tleShwYXJzZWRCaW5kaW5nVmFsdWUsIFwibmFtZVwiKSlcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBOYW1lZCB0ZW1wbGF0ZXMgY2FuIGJlIHJld3JpdHRlbiwgc28gcmV0dXJuIFwibm8gZXJyb3JcIlxuICAgICAgICByZXR1cm4gXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCI7XG4gICAgfTtcblxuICAgIGtvLnZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NbJ3RlbXBsYXRlJ10gPSB0cnVlO1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCdzZXRUZW1wbGF0ZUVuZ2luZScsIGtvLnNldFRlbXBsYXRlRW5naW5lKTtcbmtvLmV4cG9ydFN5bWJvbCgncmVuZGVyVGVtcGxhdGUnLCBrby5yZW5kZXJUZW1wbGF0ZSk7XG5cbmtvLnV0aWxzLmNvbXBhcmVBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXNOb3RJbk9sZCA9ICdhZGRlZCcsIHN0YXR1c05vdEluTmV3ID0gJ2RlbGV0ZWQnO1xuXG4gICAgLy8gU2ltcGxlIGNhbGN1bGF0aW9uIGJhc2VkIG9uIExldmVuc2h0ZWluIGRpc3RhbmNlLlxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMob2xkQXJyYXksIG5ld0FycmF5LCBkb250TGltaXRNb3Zlcykge1xuICAgICAgICBvbGRBcnJheSA9IG9sZEFycmF5IHx8IFtdO1xuICAgICAgICBuZXdBcnJheSA9IG5ld0FycmF5IHx8IFtdO1xuXG4gICAgICAgIGlmIChvbGRBcnJheS5sZW5ndGggPD0gbmV3QXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVTbWFsbEFycmF5VG9CaWdBcnJheShvbGRBcnJheSwgbmV3QXJyYXksIHN0YXR1c05vdEluT2xkLCBzdGF0dXNOb3RJbk5ldywgZG9udExpbWl0TW92ZXMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KG5ld0FycmF5LCBvbGRBcnJheSwgc3RhdHVzTm90SW5OZXcsIHN0YXR1c05vdEluT2xkLCBkb250TGltaXRNb3Zlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGFyZVNtYWxsQXJyYXlUb0JpZ0FycmF5KHNtbEFycmF5LCBiaWdBcnJheSwgc3RhdHVzTm90SW5TbWwsIHN0YXR1c05vdEluQmlnLCBkb250TGltaXRNb3Zlcykge1xuICAgICAgICB2YXIgbXlNaW4gPSBNYXRoLm1pbixcbiAgICAgICAgICAgIG15TWF4ID0gTWF0aC5tYXgsXG4gICAgICAgICAgICBlZGl0RGlzdGFuY2VNYXRyaXggPSBbXSxcbiAgICAgICAgICAgIHNtbEluZGV4LCBzbWxJbmRleE1heCA9IHNtbEFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIGJpZ0luZGV4LCBiaWdJbmRleE1heCA9IGJpZ0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIGNvbXBhcmVSYW5nZSA9IChiaWdJbmRleE1heCAtIHNtbEluZGV4TWF4KSB8fCAxLFxuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBzbWxJbmRleE1heCArIGJpZ0luZGV4TWF4ICsgMSxcbiAgICAgICAgICAgIHRoaXNSb3csIGxhc3RSb3csXG4gICAgICAgICAgICBiaWdJbmRleE1heEZvclJvdywgYmlnSW5kZXhNaW5Gb3JSb3c7XG5cbiAgICAgICAgZm9yIChzbWxJbmRleCA9IDA7IHNtbEluZGV4IDw9IHNtbEluZGV4TWF4OyBzbWxJbmRleCsrKSB7XG4gICAgICAgICAgICBsYXN0Um93ID0gdGhpc1JvdztcbiAgICAgICAgICAgIGVkaXREaXN0YW5jZU1hdHJpeC5wdXNoKHRoaXNSb3cgPSBbXSk7XG4gICAgICAgICAgICBiaWdJbmRleE1heEZvclJvdyA9IG15TWluKGJpZ0luZGV4TWF4LCBzbWxJbmRleCArIGNvbXBhcmVSYW5nZSk7XG4gICAgICAgICAgICBiaWdJbmRleE1pbkZvclJvdyA9IG15TWF4KDAsIHNtbEluZGV4IC0gMSk7XG4gICAgICAgICAgICBmb3IgKGJpZ0luZGV4ID0gYmlnSW5kZXhNaW5Gb3JSb3c7IGJpZ0luZGV4IDw9IGJpZ0luZGV4TWF4Rm9yUm93OyBiaWdJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFiaWdJbmRleClcbiAgICAgICAgICAgICAgICAgICAgdGhpc1Jvd1tiaWdJbmRleF0gPSBzbWxJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXNtbEluZGV4KSAgLy8gVG9wIHJvdyAtIHRyYW5zZm9ybSBlbXB0eSBhcnJheSBpbnRvIG5ldyBhcnJheSB2aWEgYWRkaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gYmlnSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNtbEFycmF5W3NtbEluZGV4IC0gMV0gPT09IGJpZ0FycmF5W2JpZ0luZGV4IC0gMV0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXNSb3dbYmlnSW5kZXhdID0gbGFzdFJvd1tiaWdJbmRleCAtIDFdOyAgICAgICAgICAgICAgICAgIC8vIGNvcHkgdmFsdWUgKG5vIGVkaXQpXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub3J0aERpc3RhbmNlID0gbGFzdFJvd1tiaWdJbmRleF0gfHwgbWF4RGlzdGFuY2U7ICAgICAgIC8vIG5vdCBpbiBiaWcgKGRlbGV0aW9uKVxuICAgICAgICAgICAgICAgICAgICB2YXIgd2VzdERpc3RhbmNlID0gdGhpc1Jvd1tiaWdJbmRleCAtIDFdIHx8IG1heERpc3RhbmNlOyAgICAvLyBub3QgaW4gc21hbGwgKGFkZGl0aW9uKVxuICAgICAgICAgICAgICAgICAgICB0aGlzUm93W2JpZ0luZGV4XSA9IG15TWluKG5vcnRoRGlzdGFuY2UsIHdlc3REaXN0YW5jZSkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlZGl0U2NyaXB0ID0gW10sIG1lTWludXNPbmUsIG5vdEluU21sID0gW10sIG5vdEluQmlnID0gW107XG4gICAgICAgIGZvciAoc21sSW5kZXggPSBzbWxJbmRleE1heCwgYmlnSW5kZXggPSBiaWdJbmRleE1heDsgc21sSW5kZXggfHwgYmlnSW5kZXg7KSB7XG4gICAgICAgICAgICBtZU1pbnVzT25lID0gZWRpdERpc3RhbmNlTWF0cml4W3NtbEluZGV4XVtiaWdJbmRleF0gLSAxO1xuICAgICAgICAgICAgaWYgKGJpZ0luZGV4ICYmIG1lTWludXNPbmUgPT09IGVkaXREaXN0YW5jZU1hdHJpeFtzbWxJbmRleF1bYmlnSW5kZXgtMV0pIHtcbiAgICAgICAgICAgICAgICBub3RJblNtbC5wdXNoKGVkaXRTY3JpcHRbZWRpdFNjcmlwdC5sZW5ndGhdID0geyAgICAgLy8gYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgJ3N0YXR1cyc6IHN0YXR1c05vdEluU21sLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBiaWdBcnJheVstLWJpZ0luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgJ2luZGV4JzogYmlnSW5kZXggfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNtbEluZGV4ICYmIG1lTWludXNPbmUgPT09IGVkaXREaXN0YW5jZU1hdHJpeFtzbWxJbmRleCAtIDFdW2JpZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIG5vdEluQmlnLnB1c2goZWRpdFNjcmlwdFtlZGl0U2NyaXB0Lmxlbmd0aF0gPSB7ICAgICAvLyBkZWxldGVkXG4gICAgICAgICAgICAgICAgICAgICdzdGF0dXMnOiBzdGF0dXNOb3RJbkJpZyxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogc21sQXJyYXlbLS1zbWxJbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICdpbmRleCc6IHNtbEluZGV4IH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0U2NyaXB0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnc3RhdHVzJzogXCJyZXRhaW5lZFwiLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBiaWdBcnJheVstLWJpZ0luZGV4XSB9KTtcbiAgICAgICAgICAgICAgICAtLXNtbEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vdEluU21sLmxlbmd0aCAmJiBub3RJbkJpZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFNldCBhIGxpbWl0IG9uIHRoZSBudW1iZXIgb2YgY29uc2VjdXRpdmUgbm9uLW1hdGNoaW5nIGNvbXBhcmlzb25zOyBoYXZpbmcgaXQgYSBtdWx0aXBsZSBvZlxuICAgICAgICAgICAgLy8gc21sSW5kZXhNYXgga2VlcHMgdGhlIHRpbWUgY29tcGxleGl0eSBvZiB0aGlzIGFsZ29yaXRobSBsaW5lYXIuXG4gICAgICAgICAgICB2YXIgbGltaXRGYWlsZWRDb21wYXJlcyA9IHNtbEluZGV4TWF4ICogMTAsIGZhaWxlZENvbXBhcmVzLFxuICAgICAgICAgICAgICAgIGEsIGQsIG5vdEluU21sSXRlbSwgbm90SW5CaWdJdGVtO1xuICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgaXRlbXMgdGhhdCBoYXZlIGJlZW4gYWRkZWQgYW5kIGRlbGV0ZWQgYW5kIHRyeSB0byBmaW5kIG1hdGNoZXMgYmV0d2VlbiB0aGVtLlxuICAgICAgICAgICAgZm9yIChmYWlsZWRDb21wYXJlcyA9IGEgPSAwOyAoZG9udExpbWl0TW92ZXMgfHwgZmFpbGVkQ29tcGFyZXMgPCBsaW1pdEZhaWxlZENvbXBhcmVzKSAmJiAobm90SW5TbWxJdGVtID0gbm90SW5TbWxbYV0pOyBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGQgPSAwOyBub3RJbkJpZ0l0ZW0gPSBub3RJbkJpZ1tkXTsgZCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3RJblNtbEl0ZW1bJ3ZhbHVlJ10gPT09IG5vdEluQmlnSXRlbVsndmFsdWUnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5TbWxJdGVtWydtb3ZlZCddID0gbm90SW5CaWdJdGVtWydpbmRleCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5CaWdJdGVtWydtb3ZlZCddID0gbm90SW5TbWxJdGVtWydpbmRleCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90SW5CaWcuc3BsaWNlKGQsMSk7ICAgICAgIC8vIFRoaXMgaXRlbSBpcyBtYXJrZWQgYXMgbW92ZWQ7IHNvIHJlbW92ZSBpdCBmcm9tIG5vdEluQmlnIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxlZENvbXBhcmVzID0gZCA9IDA7ICAgICAvLyBSZXNldCBmYWlsZWQgY29tcGFyZXMgY291bnQgYmVjYXVzZSB3ZSdyZSBjaGVja2luZyBmb3IgY29uc2VjdXRpdmUgZmFpbHVyZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZhaWxlZENvbXBhcmVzICs9IGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVkaXRTY3JpcHQucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlQXJyYXlzO1xufSkoKTtcblxua28uZXhwb3J0U3ltYm9sKCd1dGlscy5jb21wYXJlQXJyYXlzJywga28udXRpbHMuY29tcGFyZUFycmF5cyk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgLy8gT2JqZWN0aXZlOlxuICAgIC8vICogR2l2ZW4gYW4gaW5wdXQgYXJyYXksIGEgY29udGFpbmVyIERPTSBub2RlLCBhbmQgYSBmdW5jdGlvbiBmcm9tIGFycmF5IGVsZW1lbnRzIHRvIGFycmF5cyBvZiBET00gbm9kZXMsXG4gICAgLy8gICBtYXAgdGhlIGFycmF5IGVsZW1lbnRzIHRvIGFycmF5cyBvZiBET00gbm9kZXMsIGNvbmNhdGVuYXRlIHRvZ2V0aGVyIGFsbCB0aGVzZSBhcnJheXMsIGFuZCB1c2UgdGhlbSB0byBwb3B1bGF0ZSB0aGUgY29udGFpbmVyIERPTSBub2RlXG4gICAgLy8gKiBOZXh0IHRpbWUgd2UncmUgZ2l2ZW4gdGhlIHNhbWUgY29tYmluYXRpb24gb2YgdGhpbmdzICh3aXRoIHRoZSBhcnJheSBwb3NzaWJseSBoYXZpbmcgbXV0YXRlZCksIHVwZGF0ZSB0aGUgY29udGFpbmVyIERPTSBub2RlXG4gICAgLy8gICBzbyB0aGF0IGl0cyBjaGlsZHJlbiBpcyBhZ2FpbiB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgbWFwcGluZ3Mgb2YgdGhlIGFycmF5IGVsZW1lbnRzLCBidXQgZG9uJ3QgcmUtbWFwIGFueSBhcnJheSBlbGVtZW50cyB0aGF0IHdlXG4gICAgLy8gICBwcmV2aW91c2x5IG1hcHBlZCAtIHJldGFpbiB0aG9zZSBub2RlcywgYW5kIGp1c3QgaW5zZXJ0L2RlbGV0ZSBvdGhlciBvbmVzXG5cbiAgICAvLyBcImNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2Rlc1wiIHdpbGwgYmUgaW52b2tlZCBhZnRlciBhbnkgXCJtYXBwaW5nXCItZ2VuZXJhdGVkIG5vZGVzIGFyZSBpbnNlcnRlZCBpbnRvIHRoZSBjb250YWluZXIgbm9kZVxuICAgIC8vIFlvdSBjYW4gdXNlIHRoaXMsIGZvciBleGFtcGxlLCB0byBhY3RpdmF0ZSBiaW5kaW5ncyBvbiB0aG9zZSBub2Rlcy5cblxuICAgIGZ1bmN0aW9uIGZpeFVwTm9kZXNUb0JlTW92ZWRPclJlbW92ZWQoY29udGlndW91c05vZGVBcnJheSkge1xuICAgICAgICAvLyBCZWZvcmUgbW92aW5nLCBkZWxldGluZywgb3IgcmVwbGFjaW5nIGEgc2V0IG9mIG5vZGVzIHRoYXQgd2VyZSBwcmV2aW91c2x5IG91dHB1dHRlZCBieSB0aGUgXCJtYXBcIiBmdW5jdGlvbiwgd2UgaGF2ZSB0byByZWNvbmNpbGVcbiAgICAgICAgLy8gdGhlbSBhZ2FpbnN0IHdoYXQgaXMgaW4gdGhlIERPTSByaWdodCBub3cuIEl0IG1heSBiZSB0aGF0IHNvbWUgb2YgdGhlIG5vZGVzIGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQsXG4gICAgICAgIC8vIG9yIHRoYXQgbmV3IG5vZGVzIG1pZ2h0IGhhdmUgYmVlbiBpbnNlcnRlZCBpbiB0aGUgbWlkZGxlLCBmb3IgZXhhbXBsZSBieSBhIGJpbmRpbmcuIEFsc28sIHRoZXJlIG1heSBwcmV2aW91c2x5IGhhdmUgYmVlblxuICAgICAgICAvLyBsZWFkaW5nIGNvbW1lbnQgbm9kZXMgKGNyZWF0ZWQgYnkgcmV3cml0dGVuIHN0cmluZy1iYXNlZCB0ZW1wbGF0ZXMpIHRoYXQgaGF2ZSBzaW5jZSBiZWVuIHJlbW92ZWQgZHVyaW5nIGJpbmRpbmcuXG4gICAgICAgIC8vIFNvLCB0aGlzIGZ1bmN0aW9uIHRyYW5zbGF0ZXMgdGhlIG9sZCBcIm1hcFwiIG91dHB1dCBhcnJheSBpbnRvIGl0cyBiZXN0IGd1ZXNzIG9mIHdoYXQgc2V0IG9mIGN1cnJlbnQgRE9NIG5vZGVzIHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBSdWxlczpcbiAgICAgICAgLy8gICBbQV0gQW55IGxlYWRpbmcgbm9kZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGRvY3VtZW50IGFueSBtb3JlIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgICAgIC8vICAgICAgIFRoZXNlIG1vc3QgbGlrZWx5IGNvcnJlc3BvbmQgdG8gbWVtb2l6YXRpb24gbm9kZXMgdGhhdCB3ZXJlIGFscmVhZHkgcmVtb3ZlZCBkdXJpbmcgYmluZGluZ1xuICAgICAgICAvLyAgICAgICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1N0ZXZlU2FuZGVyc29uL2tub2Nrb3V0L3B1bGwvNDQwXG4gICAgICAgIC8vICAgW0JdIFdlIHdhbnQgdG8gb3V0cHV0IGEgY29udGlndW91cyBzZXJpZXMgb2Ygbm9kZXMgdGhhdCBhcmUgc3RpbGwgaW4gdGhlIGRvY3VtZW50LiBTbywgaWdub3JlIGFueSBub2RlcyB0aGF0XG4gICAgICAgIC8vICAgICAgIGhhdmUgYWxyZWFkeSBiZWVuIHJlbW92ZWQsIGFuZCBpbmNsdWRlIGFueSBub2RlcyB0aGF0IGhhdmUgYmVlbiBpbnNlcnRlZCBhbW9uZyB0aGUgcHJldmlvdXMgY29sbGVjdGlvblxuXG4gICAgICAgIC8vIFJ1bGUgW0FdXG4gICAgICAgIHdoaWxlIChjb250aWd1b3VzTm9kZUFycmF5Lmxlbmd0aCAmJiAha28udXRpbHMuZG9tTm9kZUlzQXR0YWNoZWRUb0RvY3VtZW50KGNvbnRpZ3VvdXNOb2RlQXJyYXlbMF0pKVxuICAgICAgICAgICAgY29udGlndW91c05vZGVBcnJheS5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgLy8gUnVsZSBbQl1cbiAgICAgICAgaWYgKGNvbnRpZ3VvdXNOb2RlQXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gQnVpbGQgdXAgdGhlIGFjdHVhbCBuZXcgY29udGlndW91cyBub2RlIHNldFxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBjb250aWd1b3VzTm9kZUFycmF5WzBdLCBsYXN0ID0gY29udGlndW91c05vZGVBcnJheVtjb250aWd1b3VzTm9kZUFycmF5Lmxlbmd0aCAtIDFdLCBuZXdDb250aWd1b3VzU2V0ID0gW2N1cnJlbnRdO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IGxhc3QpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQpIC8vIFdvbid0IGhhcHBlbiwgZXhjZXB0IGlmIHRoZSBkZXZlbG9wZXIgaGFzIG1hbnVhbGx5IHJlbW92ZWQgc29tZSBET00gZWxlbWVudHMgKHRoZW4gd2UncmUgaW4gYW4gdW5kZWZpbmVkIHNjZW5hcmlvKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgbmV3Q29udGlndW91c1NldC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAuLi4gdGhlbiBtdXRhdGUgdGhlIGlucHV0IGFycmF5IHRvIG1hdGNoIHRoaXMuXG4gICAgICAgICAgICAvLyAoVGhlIGZvbGxvd2luZyBsaW5lIHJlcGxhY2VzIHRoZSBjb250ZW50cyBvZiBjb250aWd1b3VzTm9kZUFycmF5IHdpdGggbmV3Q29udGlndW91c1NldClcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoY29udGlndW91c05vZGVBcnJheSwgWzAsIGNvbnRpZ3VvdXNOb2RlQXJyYXkubGVuZ3RoXS5jb25jYXQobmV3Q29udGlndW91c1NldCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250aWd1b3VzTm9kZUFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hcE5vZGVBbmRSZWZyZXNoV2hlbkNoYW5nZWQoY29udGFpbmVyTm9kZSwgbWFwcGluZywgdmFsdWVUb01hcCwgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBpbmRleCkge1xuICAgICAgICAvLyBNYXAgdGhpcyBhcnJheSB2YWx1ZSBpbnNpZGUgYSBkZXBlbmRlbnRPYnNlcnZhYmxlIHNvIHdlIHJlLW1hcCB3aGVuIGFueSBkZXBlbmRlbmN5IGNoYW5nZXNcbiAgICAgICAgdmFyIG1hcHBlZE5vZGVzID0gW107XG4gICAgICAgIHZhciBkZXBlbmRlbnRPYnNlcnZhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuZXdNYXBwZWROb2RlcyA9IG1hcHBpbmcodmFsdWVUb01hcCwgaW5kZXgpIHx8IFtdO1xuXG4gICAgICAgICAgICAvLyBPbiBzdWJzZXF1ZW50IGV2YWx1YXRpb25zLCBqdXN0IHJlcGxhY2UgdGhlIHByZXZpb3VzbHktaW5zZXJ0ZWQgRE9NIG5vZGVzXG4gICAgICAgICAgICBpZiAobWFwcGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGtvLnV0aWxzLnJlcGxhY2VEb21Ob2RlcyhmaXhVcE5vZGVzVG9CZU1vdmVkT3JSZW1vdmVkKG1hcHBlZE5vZGVzKSwgbmV3TWFwcGVkTm9kZXMpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0FmdGVyQWRkaW5nTm9kZXMpXG4gICAgICAgICAgICAgICAgICAgIGtvLmRlcGVuZGVuY3lEZXRlY3Rpb24uaWdub3JlKGNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2RlcywgbnVsbCwgW3ZhbHVlVG9NYXAsIG5ld01hcHBlZE5vZGVzLCBpbmRleF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBjb250ZW50cyBvZiB0aGUgbWFwcGVkTm9kZXMgYXJyYXksIHRoZXJlYnkgdXBkYXRpbmcgdGhlIHJlY29yZFxuICAgICAgICAgICAgLy8gb2Ygd2hpY2ggbm9kZXMgd291bGQgYmUgZGVsZXRlZCBpZiB2YWx1ZVRvTWFwIHdhcyBpdHNlbGYgbGF0ZXIgcmVtb3ZlZFxuICAgICAgICAgICAgbWFwcGVkTm9kZXMuc3BsaWNlKDAsIG1hcHBlZE5vZGVzLmxlbmd0aCk7XG4gICAgICAgICAgICBrby51dGlscy5hcnJheVB1c2hBbGwobWFwcGVkTm9kZXMsIG5ld01hcHBlZE5vZGVzKTtcbiAgICAgICAgfSwgbnVsbCwgeyBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGNvbnRhaW5lck5vZGUsIGRpc3Bvc2VXaGVuOiBmdW5jdGlvbigpIHsgcmV0dXJuIChtYXBwZWROb2Rlcy5sZW5ndGggPT0gMCkgfHwgIWtvLnV0aWxzLmRvbU5vZGVJc0F0dGFjaGVkVG9Eb2N1bWVudChtYXBwZWROb2Rlc1swXSkgfSB9KTtcbiAgICAgICAgcmV0dXJuIHsgbWFwcGVkTm9kZXMgOiBtYXBwZWROb2RlcywgZGVwZW5kZW50T2JzZXJ2YWJsZSA6IChkZXBlbmRlbnRPYnNlcnZhYmxlLmlzQWN0aXZlKCkgPyBkZXBlbmRlbnRPYnNlcnZhYmxlIDogdW5kZWZpbmVkKSB9O1xuICAgIH1cblxuICAgIHZhciBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXkgPSBcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIjtcblxuICAgIGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcgPSBmdW5jdGlvbiAoZG9tTm9kZSwgYXJyYXksIG1hcHBpbmcsIG9wdGlvbnMsIGNhbGxiYWNrQWZ0ZXJBZGRpbmdOb2Rlcykge1xuICAgICAgICAvLyBDb21wYXJlIHRoZSBwcm92aWRlZCBhcnJheSBhZ2FpbnN0IHRoZSBwcmV2aW91cyBvbmVcbiAgICAgICAgYXJyYXkgPSBhcnJheSB8fCBbXTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBpc0ZpcnN0RXhlY3V0aW9uID0ga28udXRpbHMuZG9tRGF0YS5nZXQoZG9tTm9kZSwgbGFzdE1hcHBpbmdSZXN1bHREb21EYXRhS2V5KSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHQgPSBrby51dGlscy5kb21EYXRhLmdldChkb21Ob2RlLCBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXkpIHx8IFtdO1xuICAgICAgICB2YXIgbGFzdEFycmF5ID0ga28udXRpbHMuYXJyYXlNYXAobGFzdE1hcHBpbmdSZXN1bHQsIGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmFycmF5RW50cnk7IH0pO1xuICAgICAgICB2YXIgZWRpdFNjcmlwdCA9IGtvLnV0aWxzLmNvbXBhcmVBcnJheXMobGFzdEFycmF5LCBhcnJheSk7XG5cbiAgICAgICAgLy8gQnVpbGQgdGhlIG5ldyBtYXBwaW5nIHJlc3VsdFxuICAgICAgICB2YXIgbmV3TWFwcGluZ1Jlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgbGFzdE1hcHBpbmdSZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIHZhciBuZXdNYXBwaW5nUmVzdWx0SW5kZXggPSAwO1xuXG4gICAgICAgIHZhciBub2Rlc1RvRGVsZXRlID0gW107XG4gICAgICAgIHZhciBpdGVtc1RvUHJvY2VzcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXNGb3JCZWZvcmVSZW1vdmVDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdmFyIGl0ZW1zRm9yTW92ZUNhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXNGb3JBZnRlckFkZENhbGxiYWNrcyA9IFtdO1xuICAgICAgICB2YXIgbWFwRGF0YTtcblxuICAgICAgICBmdW5jdGlvbiBpdGVtTW92ZWRPclJldGFpbmVkKGVkaXRTY3JpcHRJbmRleCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIG1hcERhdGEgPSBsYXN0TWFwcGluZ1Jlc3VsdFtvbGRQb3NpdGlvbl07XG4gICAgICAgICAgICBpZiAobmV3TWFwcGluZ1Jlc3VsdEluZGV4ICE9PSBvbGRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICBpdGVtc0Zvck1vdmVDYWxsYmFja3NbZWRpdFNjcmlwdEluZGV4XSA9IG1hcERhdGE7XG4gICAgICAgICAgICAvLyBTaW5jZSB1cGRhdGluZyB0aGUgaW5kZXggbWlnaHQgY2hhbmdlIHRoZSBub2RlcywgZG8gc28gYmVmb3JlIGNhbGxpbmcgZml4VXBOb2Rlc1RvQmVNb3ZlZE9yUmVtb3ZlZFxuICAgICAgICAgICAgbWFwRGF0YS5pbmRleE9ic2VydmFibGUobmV3TWFwcGluZ1Jlc3VsdEluZGV4KyspO1xuICAgICAgICAgICAgZml4VXBOb2Rlc1RvQmVNb3ZlZE9yUmVtb3ZlZChtYXBEYXRhLm1hcHBlZE5vZGVzKTtcbiAgICAgICAgICAgIG5ld01hcHBpbmdSZXN1bHQucHVzaChtYXBEYXRhKTtcbiAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzLnB1c2gobWFwRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjYWxsQ2FsbGJhY2soY2FsbGJhY2ssIGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChpdGVtc1tpXS5tYXBwZWROb2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUsIGksIGl0ZW1zW2ldLmFycmF5RW50cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZWRpdFNjcmlwdEl0ZW0sIG1vdmVkSW5kZXg7IGVkaXRTY3JpcHRJdGVtID0gZWRpdFNjcmlwdFtpXTsgaSsrKSB7XG4gICAgICAgICAgICBtb3ZlZEluZGV4ID0gZWRpdFNjcmlwdEl0ZW1bJ21vdmVkJ107XG4gICAgICAgICAgICBzd2l0Y2ggKGVkaXRTY3JpcHRJdGVtWydzdGF0dXMnXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEgPSBsYXN0TWFwcGluZ1Jlc3VsdFtsYXN0TWFwcGluZ1Jlc3VsdEluZGV4XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0cmFja2luZyBjaGFuZ2VzIHRvIHRoZSBtYXBwaW5nIGZvciB0aGVzZSBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcERhdGEuZGVwZW5kZW50T2JzZXJ2YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLmRlcGVuZGVudE9ic2VydmFibGUuZGlzcG9zZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBRdWV1ZSB0aGVzZSBub2RlcyBmb3IgbGF0ZXIgcmVtb3ZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNUb0RlbGV0ZS5wdXNoLmFwcGx5KG5vZGVzVG9EZWxldGUsIGZpeFVwTm9kZXNUb0JlTW92ZWRPclJlbW92ZWQobWFwRGF0YS5tYXBwZWROb2RlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNGb3JCZWZvcmVSZW1vdmVDYWxsYmFja3NbaV0gPSBtYXBEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzLnB1c2gobWFwRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE1hcHBpbmdSZXN1bHRJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJyZXRhaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICBpdGVtTW92ZWRPclJldGFpbmVkKGksIGxhc3RNYXBwaW5nUmVzdWx0SW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Nb3ZlZE9yUmV0YWluZWQoaSwgbW92ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhID0geyBhcnJheUVudHJ5OiBlZGl0U2NyaXB0SXRlbVsndmFsdWUnXSwgaW5kZXhPYnNlcnZhYmxlOiBrby5vYnNlcnZhYmxlKG5ld01hcHBpbmdSZXN1bHRJbmRleCsrKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWFwcGluZ1Jlc3VsdC5wdXNoKG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNUb1Byb2Nlc3MucHVzaChtYXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdEV4ZWN1dGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc0ZvckFmdGVyQWRkQ2FsbGJhY2tzW2ldID0gbWFwRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgYmVmb3JlTW92ZSBmaXJzdCBiZWZvcmUgYW55IGNoYW5nZXMgaGF2ZSBiZWVuIG1hZGUgdG8gdGhlIERPTVxuICAgICAgICBjYWxsQ2FsbGJhY2sob3B0aW9uc1snYmVmb3JlTW92ZSddLCBpdGVtc0Zvck1vdmVDYWxsYmFja3MpO1xuXG4gICAgICAgIC8vIE5leHQgcmVtb3ZlIG5vZGVzIGZvciBkZWxldGVkIGl0ZW1zIChvciBqdXN0IGNsZWFuIGlmIHRoZXJlJ3MgYSBiZWZvcmVSZW1vdmUgY2FsbGJhY2spXG4gICAgICAgIGtvLnV0aWxzLmFycmF5Rm9yRWFjaChub2Rlc1RvRGVsZXRlLCBvcHRpb25zWydiZWZvcmVSZW1vdmUnXSA/IGtvLmNsZWFuTm9kZSA6IGtvLnJlbW92ZU5vZGUpO1xuXG4gICAgICAgIC8vIE5leHQgYWRkL3Jlb3JkZXIgdGhlIHJlbWFpbmluZyBpdGVtcyAod2lsbCBpbmNsdWRlIGRlbGV0ZWQgaXRlbXMgaWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaylcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIG5leHROb2RlID0ga28udmlydHVhbEVsZW1lbnRzLmZpcnN0Q2hpbGQoZG9tTm9kZSksIGxhc3ROb2RlLCBub2RlOyBtYXBEYXRhID0gaXRlbXNUb1Byb2Nlc3NbaV07IGkrKykge1xuICAgICAgICAgICAgLy8gR2V0IG5vZGVzIGZvciBuZXdseSBhZGRlZCBpdGVtc1xuICAgICAgICAgICAgaWYgKCFtYXBEYXRhLm1hcHBlZE5vZGVzKVxuICAgICAgICAgICAgICAgIGtvLnV0aWxzLmV4dGVuZChtYXBEYXRhLCBtYXBOb2RlQW5kUmVmcmVzaFdoZW5DaGFuZ2VkKGRvbU5vZGUsIG1hcHBpbmcsIG1hcERhdGEuYXJyYXlFbnRyeSwgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzLCBtYXBEYXRhLmluZGV4T2JzZXJ2YWJsZSkpO1xuXG4gICAgICAgICAgICAvLyBQdXQgbm9kZXMgaW4gdGhlIHJpZ2h0IHBsYWNlIGlmIHRoZXkgYXJlbid0IHRoZXJlIGFscmVhZHlcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBub2RlID0gbWFwRGF0YS5tYXBwZWROb2Rlc1tqXTsgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nLCBsYXN0Tm9kZSA9IG5vZGUsIGorKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlICE9PSBuZXh0Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAga28udmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyKGRvbU5vZGUsIG5vZGUsIGxhc3ROb2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFja3MgZm9yIG5ld2x5IGFkZGVkIG5vZGVzIChmb3IgZXhhbXBsZSwgdG8gYXBwbHkgYmluZGluZ3MsIGV0Yy4pXG4gICAgICAgICAgICBpZiAoIW1hcERhdGEuaW5pdGlhbGl6ZWQgJiYgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tBZnRlckFkZGluZ05vZGVzKG1hcERhdGEuYXJyYXlFbnRyeSwgbWFwRGF0YS5tYXBwZWROb2RlcywgbWFwRGF0YS5pbmRleE9ic2VydmFibGUpO1xuICAgICAgICAgICAgICAgIG1hcERhdGEuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGJlZm9yZVJlbW92ZSBjYWxsYmFjaywgY2FsbCBpdCBhZnRlciByZW9yZGVyaW5nLlxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgYXNzdW1lIHRoYXQgdGhlIGJlZm9yZVJlbW92ZSBjYWxsYmFjayB3aWxsIHVzdWFsbHkgYmUgdXNlZCB0byByZW1vdmUgdGhlIG5vZGVzIHVzaW5nXG4gICAgICAgIC8vIHNvbWUgc29ydCBvZiBhbmltYXRpb24sIHdoaWNoIGlzIHdoeSB3ZSBmaXJzdCByZW9yZGVyIHRoZSBub2RlcyB0aGF0IHdpbGwgYmUgcmVtb3ZlZC4gSWYgdGhlXG4gICAgICAgIC8vIGNhbGxiYWNrIGluc3RlYWQgcmVtb3ZlcyB0aGUgbm9kZXMgcmlnaHQgYXdheSwgaXQgd291bGQgYmUgbW9yZSBlZmZpY2llbnQgdG8gc2tpcCByZW9yZGVyaW5nIHRoZW0uXG4gICAgICAgIC8vIFBlcmhhcHMgd2UnbGwgbWFrZSB0aGF0IGNoYW5nZSBpbiB0aGUgZnV0dXJlIGlmIHRoaXMgc2NlbmFyaW8gYmVjb21lcyBtb3JlIGNvbW1vbi5cbiAgICAgICAgY2FsbENhbGxiYWNrKG9wdGlvbnNbJ2JlZm9yZVJlbW92ZSddLCBpdGVtc0ZvckJlZm9yZVJlbW92ZUNhbGxiYWNrcyk7XG5cbiAgICAgICAgLy8gRmluYWxseSBjYWxsIGFmdGVyTW92ZSBhbmQgYWZ0ZXJBZGQgY2FsbGJhY2tzXG4gICAgICAgIGNhbGxDYWxsYmFjayhvcHRpb25zWydhZnRlck1vdmUnXSwgaXRlbXNGb3JNb3ZlQ2FsbGJhY2tzKTtcbiAgICAgICAgY2FsbENhbGxiYWNrKG9wdGlvbnNbJ2FmdGVyQWRkJ10sIGl0ZW1zRm9yQWZ0ZXJBZGRDYWxsYmFja3MpO1xuXG4gICAgICAgIC8vIFN0b3JlIGEgY29weSBvZiB0aGUgYXJyYXkgaXRlbXMgd2UganVzdCBjb25zaWRlcmVkIHNvIHdlIGNhbiBkaWZmZXJlbmNlIGl0IG5leHQgdGltZVxuICAgICAgICBrby51dGlscy5kb21EYXRhLnNldChkb21Ob2RlLCBsYXN0TWFwcGluZ1Jlc3VsdERvbURhdGFLZXksIG5ld01hcHBpbmdSZXN1bHQpO1xuICAgIH1cbn0pKCk7XG5cbmtvLmV4cG9ydFN5bWJvbCgndXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZycsIGtvLnV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmcpO1xua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpc1snYWxsb3dUZW1wbGF0ZVJld3JpdGluZyddID0gZmFsc2U7XG59XG5cbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLnByb3RvdHlwZSA9IG5ldyBrby50ZW1wbGF0ZUVuZ2luZSgpO1xua28ubmF0aXZlVGVtcGxhdGVFbmdpbmUucHJvdG90eXBlWydyZW5kZXJUZW1wbGF0ZVNvdXJjZSddID0gZnVuY3Rpb24gKHRlbXBsYXRlU291cmNlLCBiaW5kaW5nQ29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciB1c2VOb2Rlc0lmQXZhaWxhYmxlID0gIShrby51dGlscy5pZVZlcnNpb24gPCA5KSwgLy8gSUU8OSBjbG9uZU5vZGUgZG9lc24ndCB3b3JrIHByb3Blcmx5XG4gICAgICAgIHRlbXBsYXRlTm9kZXNGdW5jID0gdXNlTm9kZXNJZkF2YWlsYWJsZSA/IHRlbXBsYXRlU291cmNlWydub2RlcyddIDogbnVsbCxcbiAgICAgICAgdGVtcGxhdGVOb2RlcyA9IHRlbXBsYXRlTm9kZXNGdW5jID8gdGVtcGxhdGVTb3VyY2VbJ25vZGVzJ10oKSA6IG51bGw7XG5cbiAgICBpZiAodGVtcGxhdGVOb2Rlcykge1xuICAgICAgICByZXR1cm4ga28udXRpbHMubWFrZUFycmF5KHRlbXBsYXRlTm9kZXMuY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZVRleHQgPSB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCk7XG4gICAgICAgIHJldHVybiBrby51dGlscy5wYXJzZUh0bWxGcmFnbWVudCh0ZW1wbGF0ZVRleHQpO1xuICAgIH1cbn07XG5cbmtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lLmluc3RhbmNlID0gbmV3IGtvLm5hdGl2ZVRlbXBsYXRlRW5naW5lKCk7XG5rby5zZXRUZW1wbGF0ZUVuZ2luZShrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZS5pbnN0YW5jZSk7XG5cbmtvLmV4cG9ydFN5bWJvbCgnbmF0aXZlVGVtcGxhdGVFbmdpbmUnLCBrby5uYXRpdmVUZW1wbGF0ZUVuZ2luZSk7XG4oZnVuY3Rpb24oKSB7XG4gICAga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZXRlY3Qgd2hpY2ggdmVyc2lvbiBvZiBqcXVlcnktdG1wbCB5b3UncmUgdXNpbmcuIFVuZm9ydHVuYXRlbHkganF1ZXJ5LXRtcGxcbiAgICAgICAgLy8gZG9lc24ndCBleHBvc2UgYSB2ZXJzaW9uIG51bWJlciwgc28gd2UgaGF2ZSB0byBpbmZlciBpdC5cbiAgICAgICAgLy8gTm90ZSB0aGF0IGFzIG9mIEtub2Nrb3V0IDEuMywgd2Ugb25seSBzdXBwb3J0IGpRdWVyeS50bXBsIDEuMC4wcHJlIGFuZCBsYXRlcixcbiAgICAgICAgLy8gd2hpY2ggS08gaW50ZXJuYWxseSByZWZlcnMgdG8gYXMgdmVyc2lvbiBcIjJcIiwgc28gb2xkZXIgdmVyc2lvbnMgYXJlIG5vIGxvbmdlciBkZXRlY3RlZC5cbiAgICAgICAgdmFyIGpRdWVyeVRtcGxWZXJzaW9uID0gdGhpcy5qUXVlcnlUbXBsVmVyc2lvbiA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgodHlwZW9mKGpRdWVyeSkgPT0gXCJ1bmRlZmluZWRcIikgfHwgIShqUXVlcnlbJ3RtcGwnXSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAvLyBTaW5jZSBpdCBleHBvc2VzIG5vIG9mZmljaWFsIHZlcnNpb24gbnVtYmVyLCB3ZSB1c2Ugb3VyIG93biBudW1iZXJpbmcgc3lzdGVtLiBUbyBiZSB1cGRhdGVkIGFzIGpxdWVyeS10bXBsIGV2b2x2ZXMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChqUXVlcnlbJ3RtcGwnXVsndGFnJ11bJ3RtcGwnXVsnb3BlbiddLnRvU3RyaW5nKCkuaW5kZXhPZignX18nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIDEuMC4wcHJlLCBjdXN0b20gdGFncyBzaG91bGQgYXBwZW5kIG1hcmt1cCB0byBhbiBhcnJheSBjYWxsZWQgXCJfX1wiXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyOyAvLyBGaW5hbCB2ZXJzaW9uIG9mIGpxdWVyeS50bXBsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChleCkgeyAvKiBBcHBhcmVudGx5IG5vdCB0aGUgdmVyc2lvbiB3ZSB3ZXJlIGxvb2tpbmcgZm9yICovIH1cblxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEFueSBvbGRlciB2ZXJzaW9uIHRoYXQgd2UgZG9uJ3Qgc3VwcG9ydFxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGVuc3VyZUhhc1JlZmVyZW5jZWRKUXVlcnlUZW1wbGF0ZXMoKSB7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5VG1wbFZlcnNpb24gPCAyKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleGVjdXRlVGVtcGxhdGUoY29tcGlsZWRUZW1wbGF0ZSwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5Wyd0bXBsJ10oY29tcGlsZWRUZW1wbGF0ZSwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbJ3JlbmRlclRlbXBsYXRlU291cmNlJ10gPSBmdW5jdGlvbih0ZW1wbGF0ZVNvdXJjZSwgYmluZGluZ0NvbnRleHQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgZW5zdXJlSGFzUmVmZXJlbmNlZEpRdWVyeVRlbXBsYXRlcygpO1xuXG4gICAgICAgICAgICAvLyBFbnN1cmUgd2UgaGF2ZSBzdG9yZWQgYSBwcmVjb21waWxlZCB2ZXJzaW9uIG9mIHRoaXMgdGVtcGxhdGUgKGRvbid0IHdhbnQgdG8gcmVwYXJzZSBvbiBldmVyeSByZW5kZXIpXG4gICAgICAgICAgICB2YXIgcHJlY29tcGlsZWQgPSB0ZW1wbGF0ZVNvdXJjZVsnZGF0YSddKCdwcmVjb21waWxlZCcpO1xuICAgICAgICAgICAgaWYgKCFwcmVjb21waWxlZCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZVRleHQgPSB0ZW1wbGF0ZVNvdXJjZVsndGV4dCddKCkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAvLyBXcmFwIGluIFwid2l0aCgkd2hhdGV2ZXIua29CaW5kaW5nQ29udGV4dCkgeyAuLi4gfVwiXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVUZXh0ID0gXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIgKyB0ZW1wbGF0ZVRleHQgKyBcInt7L2tvX3dpdGh9fVwiO1xuXG4gICAgICAgICAgICAgICAgcHJlY29tcGlsZWQgPSBqUXVlcnlbJ3RlbXBsYXRlJ10obnVsbCwgdGVtcGxhdGVUZXh0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVNvdXJjZVsnZGF0YSddKCdwcmVjb21waWxlZCcsIHByZWNvbXBpbGVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbYmluZGluZ0NvbnRleHRbJyRkYXRhJ11dOyAvLyBQcmV3cmFwIHRoZSBkYXRhIGluIGFuIGFycmF5IHRvIHN0b3AganF1ZXJ5LnRtcGwgZnJvbSB0cnlpbmcgdG8gdW53cmFwIGFueSBhcnJheXNcbiAgICAgICAgICAgIHZhciBqUXVlcnlUZW1wbGF0ZU9wdGlvbnMgPSBqUXVlcnlbJ2V4dGVuZCddKHsgJ2tvQmluZGluZ0NvbnRleHQnOiBiaW5kaW5nQ29udGV4dCB9LCBvcHRpb25zWyd0ZW1wbGF0ZU9wdGlvbnMnXSk7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHROb2RlcyA9IGV4ZWN1dGVUZW1wbGF0ZShwcmVjb21waWxlZCwgZGF0YSwgalF1ZXJ5VGVtcGxhdGVPcHRpb25zKTtcbiAgICAgICAgICAgIHJlc3VsdE5vZGVzWydhcHBlbmRUbyddKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpOyAvLyBVc2luZyBcImFwcGVuZFRvXCIgZm9yY2VzIGpRdWVyeS9qUXVlcnkudG1wbCB0byBwZXJmb3JtIG5lY2Vzc2FyeSBjbGVhbnVwIHdvcmtcblxuICAgICAgICAgICAgalF1ZXJ5WydmcmFnbWVudHMnXSA9IHt9OyAvLyBDbGVhciBqUXVlcnkncyBmcmFnbWVudCBjYWNoZSB0byBhdm9pZCBhIG1lbW9yeSBsZWFrIGFmdGVyIGEgbGFyZ2UgbnVtYmVyIG9mIHRlbXBsYXRlIHJlbmRlcnNcbiAgICAgICAgICAgIHJldHVybiByZXN1bHROb2RlcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzWydjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2snXSA9IGZ1bmN0aW9uKHNjcmlwdCkge1xuICAgICAgICAgICAgcmV0dXJuIFwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIiArIHNjcmlwdCArIFwiIH0pKCkpIH19XCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpc1snYWRkVGVtcGxhdGUnXSA9IGZ1bmN0aW9uKHRlbXBsYXRlTmFtZSwgdGVtcGxhdGVNYXJrdXApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LndyaXRlKFwiPHNjcmlwdCB0eXBlPSd0ZXh0L2h0bWwnIGlkPSdcIiArIHRlbXBsYXRlTmFtZSArIFwiJz5cIiArIHRlbXBsYXRlTWFya3VwICsgXCI8L3NjcmlwdD5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGpRdWVyeVRtcGxWZXJzaW9uID4gMCkge1xuICAgICAgICAgICAgalF1ZXJ5Wyd0bXBsJ11bJ3RhZyddWydrb19jb2RlJ10gPSB7XG4gICAgICAgICAgICAgICAgb3BlbjogXCJfXy5wdXNoKCQxIHx8ICcnKTtcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGpRdWVyeVsndG1wbCddWyd0YWcnXVsna29fd2l0aCddID0ge1xuICAgICAgICAgICAgICAgIG9wZW46IFwid2l0aCgkMSkge1wiLFxuICAgICAgICAgICAgICAgIGNsb3NlOiBcIn0gXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lLnByb3RvdHlwZSA9IG5ldyBrby50ZW1wbGF0ZUVuZ2luZSgpO1xuXG4gICAgLy8gVXNlIHRoaXMgb25lIGJ5IGRlZmF1bHQgKm9ubHkgaWYganF1ZXJ5LnRtcGwgaXMgcmVmZXJlbmNlZCpcbiAgICB2YXIganF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lSW5zdGFuY2UgPSBuZXcga28uanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lKCk7XG4gICAgaWYgKGpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZUluc3RhbmNlLmpRdWVyeVRtcGxWZXJzaW9uID4gMClcbiAgICAgICAga28uc2V0VGVtcGxhdGVFbmdpbmUoanF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lSW5zdGFuY2UpO1xuXG4gICAga28uZXhwb3J0U3ltYm9sKCdqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUnLCBrby5qcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmUpO1xufSkoKTtcbn0pO1xufSkod2luZG93LGRvY3VtZW50LG5hdmlnYXRvcix3aW5kb3dbXCJqUXVlcnlcIl0pO1xufSkoKTtcblxufSkoKSIsInZhciBrbyA9IHJlcXVpcmUoJ2tub2Nrb3V0LWNsaWVudCcpLFxuXHRkYXRlanMgPSByZXF1aXJlKCdkYXRlanMnKTtcbmtvLm1hcHBpbmcgPSByZXF1aXJlKCdrbm9ja291dC1tYXBwaW5nJyk7XG5cbmZ1bmN0aW9uIFZpZXdNb2RlbCh3dGZzKSB7XG5cdHRoaXMud3RmQ291bnQgPSBrby5vYnNlcnZhYmxlKHd0ZnMpO1xuXHRrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3RmcycsIHRoaXMud3RmQ291bnQoKSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RXdGYnLCBuZXcgRGF0ZSgpKTtcblx0fSwgdGhpcykuZXh0ZW5kKHt0aHJvdHRsZTogMX0pO1xuXHR0aGlzLmxhc3RXdGYgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHtcblx0XHR2YXIgYyA9IHRoaXMud3RmQ291bnQoKTtcblx0XHRpZiAoIWMpXG5cdFx0XHRyZXR1cm4gXCJuZXZlclwiO1xuXHRcdHJldHVybiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCd5eXl5LU1NLWRkIEhIOm1tOnNzJyk7XG5cdH0sIHRoaXMpO1xufVxuXG5WaWV3TW9kZWwucHJvdG90eXBlLnd0ZiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgY3VycmVudFd0ZnMgPSB0aGlzLnd0ZkNvdW50KCk7XG5cdHRoaXMud3RmQ291bnQoY3VycmVudFd0ZnMgKyAxKTtcbn1cblxuVmlld01vZGVsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLnd0ZkNvdW50KDApO1xufVxuXG52YXIgc3RvcmVkVmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3d0ZnMnKTtcbnZhciB3dGZzID0gcGFyc2VJbnQoc3RvcmVkVmFsKSB8fCAwO1xudmFyIHZtID0gbmV3IFZpZXdNb2RlbCh3dGZzKTtcblxubW9kdWxlLmV4cG9ydHMgPSB2bTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIiwiKGZ1bmN0aW9uKHByb2Nlc3Mpey8qKlxyXG4gKiBAdmVyc2lvbjogMS4wIEFscGhhLTFcclxuICogQGF1dGhvcjogQ29vbGl0ZSBJbmMuIGh0dHA6Ly93d3cuY29vbGl0ZS5jb20vXHJcbiAqIEBkYXRlOiAyMDA4LTA1LTEzXHJcbiAqIEBjb3B5cmlnaHQ6IENvcHlyaWdodCAoYykgMjAwNi0yMDA4LCBDb29saXRlIEluYy4gKGh0dHA6Ly93d3cuY29vbGl0ZS5jb20vKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogQGxpY2Vuc2U6IExpY2Vuc2VkIHVuZGVyIFRoZSBNSVQgTGljZW5zZS4gU2VlIGxpY2Vuc2UudHh0IGFuZCBodHRwOi8vd3d3LmRhdGVqcy5jb20vbGljZW5zZS8uIFxyXG4gKiBAd2Vic2l0ZTogaHR0cDovL3d3dy5kYXRlanMuY29tL1xyXG4gKi9cclxuRGF0ZS5DdWx0dXJlSW5mbz17bmFtZTpcImVuLVVTXCIsZW5nbGlzaE5hbWU6XCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiLG5hdGl2ZU5hbWU6XCJFbmdsaXNoIChVbml0ZWQgU3RhdGVzKVwiLGRheU5hbWVzOltcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdLGFiYnJldmlhdGVkRGF5TmFtZXM6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLHNob3J0ZXN0RGF5TmFtZXM6W1wiU3VcIixcIk1vXCIsXCJUdVwiLFwiV2VcIixcIlRoXCIsXCJGclwiLFwiU2FcIl0sZmlyc3RMZXR0ZXJEYXlOYW1lczpbXCJTXCIsXCJNXCIsXCJUXCIsXCJXXCIsXCJUXCIsXCJGXCIsXCJTXCJdLG1vbnRoTmFtZXM6W1wiSmFudWFyeVwiLFwiRmVicnVhcnlcIixcIk1hcmNoXCIsXCJBcHJpbFwiLFwiTWF5XCIsXCJKdW5lXCIsXCJKdWx5XCIsXCJBdWd1c3RcIixcIlNlcHRlbWJlclwiLFwiT2N0b2JlclwiLFwiTm92ZW1iZXJcIixcIkRlY2VtYmVyXCJdLGFiYnJldmlhdGVkTW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLGFtRGVzaWduYXRvcjpcIkFNXCIscG1EZXNpZ25hdG9yOlwiUE1cIixmaXJzdERheU9mV2VlazowLHR3b0RpZ2l0WWVhck1heDoyMDI5LGRhdGVFbGVtZW50T3JkZXI6XCJtZHlcIixmb3JtYXRQYXR0ZXJuczp7c2hvcnREYXRlOlwiTS9kL3l5eXlcIixsb25nRGF0ZTpcImRkZGQsIE1NTU0gZGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOm1tIHR0XCIsbG9uZ1RpbWU6XCJoOm1tOnNzIHR0XCIsZnVsbERhdGVUaW1lOlwiZGRkZCwgTU1NTSBkZCwgeXl5eSBoOm1tOnNzIHR0XCIsc29ydGFibGVEYXRlVGltZTpcInl5eXktTU0tZGRUSEg6bW06c3NcIix1bml2ZXJzYWxTb3J0YWJsZURhdGVUaW1lOlwieXl5eS1NTS1kZCBISDptbTpzc1pcIixyZmMxMTIzOlwiZGRkLCBkZCBNTU0geXl5eSBISDptbTpzcyBHTVRcIixtb250aERheTpcIk1NTU0gZGRcIix5ZWFyTW9udGg6XCJNTU1NLCB5eXl5XCJ9LHJlZ2V4UGF0dGVybnM6e2phbjovXmphbih1YXJ5KT8vaSxmZWI6L15mZWIocnVhcnkpPy9pLG1hcjovXm1hcihjaCk/L2ksYXByOi9eYXByKGlsKT8vaSxtYXk6L15tYXkvaSxqdW46L15qdW4oZSk/L2ksanVsOi9eanVsKHkpPy9pLGF1ZzovXmF1Zyh1c3QpPy9pLHNlcDovXnNlcCh0KGVtYmVyKT8pPy9pLG9jdDovXm9jdChvYmVyKT8vaSxub3Y6L15ub3YoZW1iZXIpPy9pLGRlYzovXmRlYyhlbWJlcik/L2ksc3VuOi9ec3UobihkYXkpPyk/L2ksbW9uOi9ebW8obihkYXkpPyk/L2ksdHVlOi9edHUoZShzKGRheSk/KT8pPy9pLHdlZDovXndlKGQobmVzZGF5KT8pPy9pLHRodTovXnRoKHUocihzKGRheSk/KT8pPyk/L2ksZnJpOi9eZnIoaShkYXkpPyk/L2ksc2F0Oi9ec2EodCh1cmRheSk/KT8vaSxmdXR1cmU6L15uZXh0L2kscGFzdDovXmxhc3R8cGFzdHxwcmV2KGlvdXMpPy9pLGFkZDovXihcXCt8YWZ0KGVyKT98ZnJvbXxoZW5jZSkvaSxzdWJ0cmFjdDovXihcXC18YmVmKG9yZSk/fGFnbykvaSx5ZXN0ZXJkYXk6L155ZXModGVyZGF5KT8vaSx0b2RheTovXnQob2QoYXkpPyk/L2ksdG9tb3Jyb3c6L150b20ob3Jyb3cpPy9pLG5vdzovXm4ob3cpPy9pLG1pbGxpc2Vjb25kOi9ebXN8bWlsbGkoc2Vjb25kKT9zPy9pLHNlY29uZDovXnNlYyhvbmQpP3M/L2ksbWludXRlOi9ebW58bWluKHV0ZSk/cz8vaSxob3VyOi9eaChvdXIpP3M/L2ksd2VlazovXncoZWVrKT9zPy9pLG1vbnRoOi9ebShvbnRoKT9zPy9pLGRheTovXmQoYXkpP3M/L2kseWVhcjovXnkoZWFyKT9zPy9pLHNob3J0TWVyaWRpYW46L14oYXxwKS9pLGxvbmdNZXJpZGlhbjovXihhXFwuP20/XFwuP3xwXFwuP20/XFwuPykvaSx0aW1lem9uZTovXigoZShzfGQpdHxjKHN8ZCl0fG0oc3xkKXR8cChzfGQpdCl8KChnbXQpP1xccyooXFwrfFxcLSlcXHMqXFxkXFxkXFxkXFxkPyl8Z210fHV0YykvaSxvcmRpbmFsU3VmZml4Oi9eXFxzKihzdHxuZHxyZHx0aCkvaSx0aW1lQ29udGV4dDovXlxccyooXFw6fGEoPyF1fHApfHApL2l9LHRpbWV6b25lczpbe25hbWU6XCJVVENcIixvZmZzZXQ6XCItMDAwXCJ9LHtuYW1lOlwiR01UXCIsb2Zmc2V0OlwiLTAwMFwifSx7bmFtZTpcIkVTVFwiLG9mZnNldDpcIi0wNTAwXCJ9LHtuYW1lOlwiRURUXCIsb2Zmc2V0OlwiLTA0MDBcIn0se25hbWU6XCJDU1RcIixvZmZzZXQ6XCItMDYwMFwifSx7bmFtZTpcIkNEVFwiLG9mZnNldDpcIi0wNTAwXCJ9LHtuYW1lOlwiTVNUXCIsb2Zmc2V0OlwiLTA3MDBcIn0se25hbWU6XCJNRFRcIixvZmZzZXQ6XCItMDYwMFwifSx7bmFtZTpcIlBTVFwiLG9mZnNldDpcIi0wODAwXCJ9LHtuYW1lOlwiUERUXCIsb2Zmc2V0OlwiLTA3MDBcIn1dfTtcbihmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbyxwPWZ1bmN0aW9uKHMsbCl7aWYoIWwpe2w9Mjt9XG5yZXR1cm4oXCIwMDBcIitzKS5zbGljZShsKi0xKTt9OyRQLmNsZWFyVGltZT1mdW5jdGlvbigpe3RoaXMuc2V0SG91cnMoMCk7dGhpcy5zZXRNaW51dGVzKDApO3RoaXMuc2V0U2Vjb25kcygwKTt0aGlzLnNldE1pbGxpc2Vjb25kcygwKTtyZXR1cm4gdGhpczt9OyRQLnNldFRpbWVUb05vdz1mdW5jdGlvbigpe3ZhciBuPW5ldyBEYXRlKCk7dGhpcy5zZXRIb3VycyhuLmdldEhvdXJzKCkpO3RoaXMuc2V0TWludXRlcyhuLmdldE1pbnV0ZXMoKSk7dGhpcy5zZXRTZWNvbmRzKG4uZ2V0U2Vjb25kcygpKTt0aGlzLnNldE1pbGxpc2Vjb25kcyhuLmdldE1pbGxpc2Vjb25kcygpKTtyZXR1cm4gdGhpczt9OyRELnRvZGF5PWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKCkuY2xlYXJUaW1lKCk7fTskRC5jb21wYXJlPWZ1bmN0aW9uKGRhdGUxLGRhdGUyKXtpZihpc05hTihkYXRlMSl8fGlzTmFOKGRhdGUyKSl7dGhyb3cgbmV3IEVycm9yKGRhdGUxK1wiIC0gXCIrZGF0ZTIpO31lbHNlIGlmKGRhdGUxIGluc3RhbmNlb2YgRGF0ZSYmZGF0ZTIgaW5zdGFuY2VvZiBEYXRlKXtyZXR1cm4oZGF0ZTE8ZGF0ZTIpPy0xOihkYXRlMT5kYXRlMik/MTowO31lbHNle3Rocm93IG5ldyBUeXBlRXJyb3IoZGF0ZTErXCIgLSBcIitkYXRlMik7fX07JEQuZXF1YWxzPWZ1bmN0aW9uKGRhdGUxLGRhdGUyKXtyZXR1cm4oZGF0ZTEuY29tcGFyZVRvKGRhdGUyKT09PTApO307JEQuZ2V0RGF5TnVtYmVyRnJvbU5hbWU9ZnVuY3Rpb24obmFtZSl7dmFyIG49JEMuZGF5TmFtZXMsbT0kQy5hYmJyZXZpYXRlZERheU5hbWVzLG89JEMuc2hvcnRlc3REYXlOYW1lcyxzPW5hbWUudG9Mb3dlckNhc2UoKTtmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7aWYobltpXS50b0xvd2VyQ2FzZSgpPT1zfHxtW2ldLnRvTG93ZXJDYXNlKCk9PXN8fG9baV0udG9Mb3dlckNhc2UoKT09cyl7cmV0dXJuIGk7fX1cbnJldHVybi0xO307JEQuZ2V0TW9udGhOdW1iZXJGcm9tTmFtZT1mdW5jdGlvbihuYW1lKXt2YXIgbj0kQy5tb250aE5hbWVzLG09JEMuYWJicmV2aWF0ZWRNb250aE5hbWVzLHM9bmFtZS50b0xvd2VyQ2FzZSgpO2Zvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXtpZihuW2ldLnRvTG93ZXJDYXNlKCk9PXN8fG1baV0udG9Mb3dlckNhc2UoKT09cyl7cmV0dXJuIGk7fX1cbnJldHVybi0xO307JEQuaXNMZWFwWWVhcj1mdW5jdGlvbih5ZWFyKXtyZXR1cm4oKHllYXIlND09PTAmJnllYXIlMTAwIT09MCl8fHllYXIlNDAwPT09MCk7fTskRC5nZXREYXlzSW5Nb250aD1mdW5jdGlvbih5ZWFyLG1vbnRoKXtyZXR1cm5bMzEsKCRELmlzTGVhcFllYXIoeWVhcik/Mjk6MjgpLDMxLDMwLDMxLDMwLDMxLDMxLDMwLDMxLDMwLDMxXVttb250aF07fTskRC5nZXRUaW1lem9uZUFiYnJldmlhdGlvbj1mdW5jdGlvbihvZmZzZXQpe3ZhciB6PSRDLnRpbWV6b25lcyxwO2Zvcih2YXIgaT0wO2k8ei5sZW5ndGg7aSsrKXtpZih6W2ldLm9mZnNldD09PW9mZnNldCl7cmV0dXJuIHpbaV0ubmFtZTt9fVxucmV0dXJuIG51bGw7fTskRC5nZXRUaW1lem9uZU9mZnNldD1mdW5jdGlvbihuYW1lKXt2YXIgej0kQy50aW1lem9uZXMscDtmb3IodmFyIGk9MDtpPHoubGVuZ3RoO2krKyl7aWYoeltpXS5uYW1lPT09bmFtZS50b1VwcGVyQ2FzZSgpKXtyZXR1cm4geltpXS5vZmZzZXQ7fX1cbnJldHVybiBudWxsO307JFAuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkpO307JFAuY29tcGFyZVRvPWZ1bmN0aW9uKGRhdGUpe3JldHVybiBEYXRlLmNvbXBhcmUodGhpcyxkYXRlKTt9OyRQLmVxdWFscz1mdW5jdGlvbihkYXRlKXtyZXR1cm4gRGF0ZS5lcXVhbHModGhpcyxkYXRlfHxuZXcgRGF0ZSgpKTt9OyRQLmJldHdlZW49ZnVuY3Rpb24oc3RhcnQsZW5kKXtyZXR1cm4gdGhpcy5nZXRUaW1lKCk+PXN0YXJ0LmdldFRpbWUoKSYmdGhpcy5nZXRUaW1lKCk8PWVuZC5nZXRUaW1lKCk7fTskUC5pc0FmdGVyPWZ1bmN0aW9uKGRhdGUpe3JldHVybiB0aGlzLmNvbXBhcmVUbyhkYXRlfHxuZXcgRGF0ZSgpKT09PTE7fTskUC5pc0JlZm9yZT1mdW5jdGlvbihkYXRlKXtyZXR1cm4odGhpcy5jb21wYXJlVG8oZGF0ZXx8bmV3IERhdGUoKSk9PT0tMSk7fTskUC5pc1RvZGF5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNTYW1lRGF5KG5ldyBEYXRlKCkpO307JFAuaXNTYW1lRGF5PWZ1bmN0aW9uKGRhdGUpe3JldHVybiB0aGlzLmNsb25lKCkuY2xlYXJUaW1lKCkuZXF1YWxzKGRhdGUuY2xvbmUoKS5jbGVhclRpbWUoKSk7fTskUC5hZGRNaWxsaXNlY29uZHM9ZnVuY3Rpb24odmFsdWUpe3RoaXMuc2V0TWlsbGlzZWNvbmRzKHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkrdmFsdWUpO3JldHVybiB0aGlzO307JFAuYWRkU2Vjb25kcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjEwMDApO307JFAuYWRkTWludXRlcz1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuIHRoaXMuYWRkTWlsbGlzZWNvbmRzKHZhbHVlKjYwMDAwKTt9OyRQLmFkZEhvdXJzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNaWxsaXNlY29uZHModmFsdWUqMzYwMDAwMCk7fTskUC5hZGREYXlzPWZ1bmN0aW9uKHZhbHVlKXt0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkrdmFsdWUpO3JldHVybiB0aGlzO307JFAuYWRkV2Vla3M9ZnVuY3Rpb24odmFsdWUpe3JldHVybiB0aGlzLmFkZERheXModmFsdWUqNyk7fTskUC5hZGRNb250aHM9ZnVuY3Rpb24odmFsdWUpe3ZhciBuPXRoaXMuZ2V0RGF0ZSgpO3RoaXMuc2V0RGF0ZSgxKTt0aGlzLnNldE1vbnRoKHRoaXMuZ2V0TW9udGgoKSt2YWx1ZSk7dGhpcy5zZXREYXRlKE1hdGgubWluKG4sJEQuZ2V0RGF5c0luTW9udGgodGhpcy5nZXRGdWxsWWVhcigpLHRoaXMuZ2V0TW9udGgoKSkpKTtyZXR1cm4gdGhpczt9OyRQLmFkZFllYXJzPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdGhpcy5hZGRNb250aHModmFsdWUqMTIpO307JFAuYWRkPWZ1bmN0aW9uKGNvbmZpZyl7aWYodHlwZW9mIGNvbmZpZz09XCJudW1iZXJcIil7dGhpcy5fb3JpZW50PWNvbmZpZztyZXR1cm4gdGhpczt9XG52YXIgeD1jb25maWc7aWYoeC5taWxsaXNlY29uZHMpe3RoaXMuYWRkTWlsbGlzZWNvbmRzKHgubWlsbGlzZWNvbmRzKTt9XG5pZih4LnNlY29uZHMpe3RoaXMuYWRkU2Vjb25kcyh4LnNlY29uZHMpO31cbmlmKHgubWludXRlcyl7dGhpcy5hZGRNaW51dGVzKHgubWludXRlcyk7fVxuaWYoeC5ob3Vycyl7dGhpcy5hZGRIb3Vycyh4LmhvdXJzKTt9XG5pZih4LndlZWtzKXt0aGlzLmFkZFdlZWtzKHgud2Vla3MpO31cbmlmKHgubW9udGhzKXt0aGlzLmFkZE1vbnRocyh4Lm1vbnRocyk7fVxuaWYoeC55ZWFycyl7dGhpcy5hZGRZZWFycyh4LnllYXJzKTt9XG5pZih4LmRheXMpe3RoaXMuYWRkRGF5cyh4LmRheXMpO31cbnJldHVybiB0aGlzO307dmFyICR5LCRtLCRkOyRQLmdldFdlZWs9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxuLHMsdzskeT0oISR5KT90aGlzLmdldEZ1bGxZZWFyKCk6JHk7JG09KCEkbSk/dGhpcy5nZXRNb250aCgpKzE6JG07JGQ9KCEkZCk/dGhpcy5nZXREYXRlKCk6JGQ7aWYoJG08PTIpe2E9JHktMTtiPShhLzR8MCktKGEvMTAwfDApKyhhLzQwMHwwKTtjPSgoYS0xKS80fDApLSgoYS0xKS8xMDB8MCkrKChhLTEpLzQwMHwwKTtzPWItYztlPTA7Zj0kZC0xKygzMSooJG0tMSkpO31lbHNle2E9JHk7Yj0oYS80fDApLShhLzEwMHwwKSsoYS80MDB8MCk7Yz0oKGEtMSkvNHwwKS0oKGEtMSkvMTAwfDApKygoYS0xKS80MDB8MCk7cz1iLWM7ZT1zKzE7Zj0kZCsoKDE1MyooJG0tMykrMikvNSkrNTgrczt9XG5nPShhK2IpJTc7ZD0oZitnLWUpJTc7bj0oZiszLWQpfDA7aWYobjwwKXt3PTUzLSgoZy1zKS81fDApO31lbHNlIGlmKG4+MzY0K3Mpe3c9MTt9ZWxzZXt3PShuLzd8MCkrMTt9XG4keT0kbT0kZD1udWxsO3JldHVybiB3O307JFAuZ2V0SVNPV2Vlaz1mdW5jdGlvbigpeyR5PXRoaXMuZ2V0VVRDRnVsbFllYXIoKTskbT10aGlzLmdldFVUQ01vbnRoKCkrMTskZD10aGlzLmdldFVUQ0RhdGUoKTtyZXR1cm4gcCh0aGlzLmdldFdlZWsoKSk7fTskUC5zZXRXZWVrPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLm1vdmVUb0RheU9mV2VlaygxKS5hZGRXZWVrcyhuLXRoaXMuZ2V0V2VlaygpKTt9OyRELl92YWxpZGF0ZT1mdW5jdGlvbihuLG1pbixtYXgsbmFtZSl7aWYodHlwZW9mIG49PVwidW5kZWZpbmVkXCIpe3JldHVybiBmYWxzZTt9ZWxzZSBpZih0eXBlb2YgbiE9XCJudW1iZXJcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihuK1wiIGlzIG5vdCBhIE51bWJlci5cIik7fWVsc2UgaWYobjxtaW58fG4+bWF4KXt0aHJvdyBuZXcgUmFuZ2VFcnJvcihuK1wiIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBcIituYW1lK1wiLlwiKTt9XG5yZXR1cm4gdHJ1ZTt9OyRELnZhbGlkYXRlTWlsbGlzZWNvbmQ9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw5OTksXCJtaWxsaXNlY29uZFwiKTt9OyRELnZhbGlkYXRlU2Vjb25kPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsNTksXCJzZWNvbmRcIik7fTskRC52YWxpZGF0ZU1pbnV0ZT1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDU5LFwibWludXRlXCIpO307JEQudmFsaWRhdGVIb3VyPWZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gJEQuX3ZhbGlkYXRlKHZhbHVlLDAsMjMsXCJob3VyXCIpO307JEQudmFsaWRhdGVEYXk9ZnVuY3Rpb24odmFsdWUseWVhcixtb250aCl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwxLCRELmdldERheXNJbk1vbnRoKHllYXIsbW9udGgpLFwiZGF5XCIpO307JEQudmFsaWRhdGVNb250aD1mdW5jdGlvbih2YWx1ZSl7cmV0dXJuICRELl92YWxpZGF0ZSh2YWx1ZSwwLDExLFwibW9udGhcIik7fTskRC52YWxpZGF0ZVllYXI9ZnVuY3Rpb24odmFsdWUpe3JldHVybiAkRC5fdmFsaWRhdGUodmFsdWUsMCw5OTk5LFwieWVhclwiKTt9OyRQLnNldD1mdW5jdGlvbihjb25maWcpe2lmKCRELnZhbGlkYXRlTWlsbGlzZWNvbmQoY29uZmlnLm1pbGxpc2Vjb25kKSl7dGhpcy5hZGRNaWxsaXNlY29uZHMoY29uZmlnLm1pbGxpc2Vjb25kLXRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkpO31cbmlmKCRELnZhbGlkYXRlU2Vjb25kKGNvbmZpZy5zZWNvbmQpKXt0aGlzLmFkZFNlY29uZHMoY29uZmlnLnNlY29uZC10aGlzLmdldFNlY29uZHMoKSk7fVxuaWYoJEQudmFsaWRhdGVNaW51dGUoY29uZmlnLm1pbnV0ZSkpe3RoaXMuYWRkTWludXRlcyhjb25maWcubWludXRlLXRoaXMuZ2V0TWludXRlcygpKTt9XG5pZigkRC52YWxpZGF0ZUhvdXIoY29uZmlnLmhvdXIpKXt0aGlzLmFkZEhvdXJzKGNvbmZpZy5ob3VyLXRoaXMuZ2V0SG91cnMoKSk7fVxuaWYoJEQudmFsaWRhdGVNb250aChjb25maWcubW9udGgpKXt0aGlzLmFkZE1vbnRocyhjb25maWcubW9udGgtdGhpcy5nZXRNb250aCgpKTt9XG5pZigkRC52YWxpZGF0ZVllYXIoY29uZmlnLnllYXIpKXt0aGlzLmFkZFllYXJzKGNvbmZpZy55ZWFyLXRoaXMuZ2V0RnVsbFllYXIoKSk7fVxuaWYoJEQudmFsaWRhdGVEYXkoY29uZmlnLmRheSx0aGlzLmdldEZ1bGxZZWFyKCksdGhpcy5nZXRNb250aCgpKSl7dGhpcy5hZGREYXlzKGNvbmZpZy5kYXktdGhpcy5nZXREYXRlKCkpO31cbmlmKGNvbmZpZy50aW1lem9uZSl7dGhpcy5zZXRUaW1lem9uZShjb25maWcudGltZXpvbmUpO31cbmlmKGNvbmZpZy50aW1lem9uZU9mZnNldCl7dGhpcy5zZXRUaW1lem9uZU9mZnNldChjb25maWcudGltZXpvbmVPZmZzZXQpO31cbmlmKGNvbmZpZy53ZWVrJiYkRC5fdmFsaWRhdGUoY29uZmlnLndlZWssMCw1MyxcIndlZWtcIikpe3RoaXMuc2V0V2Vlayhjb25maWcud2Vlayk7fVxucmV0dXJuIHRoaXM7fTskUC5tb3ZlVG9GaXJzdERheU9mTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXQoe2RheToxfSk7fTskUC5tb3ZlVG9MYXN0RGF5T2ZNb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNldCh7ZGF5OiRELmdldERheXNJbk1vbnRoKHRoaXMuZ2V0RnVsbFllYXIoKSx0aGlzLmdldE1vbnRoKCkpfSk7fTskUC5tb3ZlVG9OdGhPY2N1cnJlbmNlPWZ1bmN0aW9uKGRheU9mV2VlayxvY2N1cnJlbmNlKXt2YXIgc2hpZnQ9MDtpZihvY2N1cnJlbmNlPjApe3NoaWZ0PW9jY3VycmVuY2UtMTt9XG5lbHNlIGlmKG9jY3VycmVuY2U9PT0tMSl7dGhpcy5tb3ZlVG9MYXN0RGF5T2ZNb250aCgpO2lmKHRoaXMuZ2V0RGF5KCkhPT1kYXlPZldlZWspe3RoaXMubW92ZVRvRGF5T2ZXZWVrKGRheU9mV2VlaywtMSk7fVxucmV0dXJuIHRoaXM7fVxucmV0dXJuIHRoaXMubW92ZVRvRmlyc3REYXlPZk1vbnRoKCkuYWRkRGF5cygtMSkubW92ZVRvRGF5T2ZXZWVrKGRheU9mV2VlaywrMSkuYWRkV2Vla3Moc2hpZnQpO307JFAubW92ZVRvRGF5T2ZXZWVrPWZ1bmN0aW9uKGRheU9mV2VlayxvcmllbnQpe3ZhciBkaWZmPShkYXlPZldlZWstdGhpcy5nZXREYXkoKSs3KihvcmllbnR8fCsxKSklNztyZXR1cm4gdGhpcy5hZGREYXlzKChkaWZmPT09MCk/ZGlmZis9Nyoob3JpZW50fHwrMSk6ZGlmZik7fTskUC5tb3ZlVG9Nb250aD1mdW5jdGlvbihtb250aCxvcmllbnQpe3ZhciBkaWZmPShtb250aC10aGlzLmdldE1vbnRoKCkrMTIqKG9yaWVudHx8KzEpKSUxMjtyZXR1cm4gdGhpcy5hZGRNb250aHMoKGRpZmY9PT0wKT9kaWZmKz0xMioob3JpZW50fHwrMSk6ZGlmZik7fTskUC5nZXRPcmRpbmFsTnVtYmVyPWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguY2VpbCgodGhpcy5jbG9uZSgpLmNsZWFyVGltZSgpLW5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwwLDEpKS84NjQwMDAwMCkrMTt9OyRQLmdldFRpbWV6b25lPWZ1bmN0aW9uKCl7cmV0dXJuICRELmdldFRpbWV6b25lQWJicmV2aWF0aW9uKHRoaXMuZ2V0VVRDT2Zmc2V0KCkpO307JFAuc2V0VGltZXpvbmVPZmZzZXQ9ZnVuY3Rpb24ob2Zmc2V0KXt2YXIgaGVyZT10aGlzLmdldFRpbWV6b25lT2Zmc2V0KCksdGhlcmU9TnVtYmVyKG9mZnNldCkqLTYvMTA7cmV0dXJuIHRoaXMuYWRkTWludXRlcyh0aGVyZS1oZXJlKTt9OyRQLnNldFRpbWV6b25lPWZ1bmN0aW9uKG9mZnNldCl7cmV0dXJuIHRoaXMuc2V0VGltZXpvbmVPZmZzZXQoJEQuZ2V0VGltZXpvbmVPZmZzZXQob2Zmc2V0KSk7fTskUC5oYXNEYXlsaWdodFNhdmluZ1RpbWU9ZnVuY3Rpb24oKXtyZXR1cm4oRGF0ZS50b2RheSgpLnNldCh7bW9udGg6MCxkYXk6MX0pLmdldFRpbWV6b25lT2Zmc2V0KCkhPT1EYXRlLnRvZGF5KCkuc2V0KHttb250aDo2LGRheToxfSkuZ2V0VGltZXpvbmVPZmZzZXQoKSk7fTskUC5pc0RheWxpZ2h0U2F2aW5nVGltZT1mdW5jdGlvbigpe3JldHVybih0aGlzLmhhc0RheWxpZ2h0U2F2aW5nVGltZSgpJiZuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk9PT1EYXRlLnRvZGF5KCkuc2V0KHttb250aDo2LGRheToxfSkuZ2V0VGltZXpvbmVPZmZzZXQoKSk7fTskUC5nZXRVVENPZmZzZXQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkqLTEwLzYscjtpZihuPDApe3I9KG4tMTAwMDApLnRvU3RyaW5nKCk7cmV0dXJuIHIuY2hhckF0KDApK3Iuc3Vic3RyKDIpO31lbHNle3I9KG4rMTAwMDApLnRvU3RyaW5nKCk7cmV0dXJuXCIrXCIrci5zdWJzdHIoMSk7fX07JFAuZ2V0RWxhcHNlZD1mdW5jdGlvbihkYXRlKXtyZXR1cm4oZGF0ZXx8bmV3IERhdGUoKSktdGhpczt9O2lmKCEkUC50b0lTT1N0cmluZyl7JFAudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBmKG4pe3JldHVybiBuPDEwPycwJytuOm47fVxucmV0dXJuJ1wiJyt0aGlzLmdldFVUQ0Z1bGxZZWFyKCkrJy0nK1xuZih0aGlzLmdldFVUQ01vbnRoKCkrMSkrJy0nK1xuZih0aGlzLmdldFVUQ0RhdGUoKSkrJ1QnK1xuZih0aGlzLmdldFVUQ0hvdXJzKCkpKyc6JytcbmYodGhpcy5nZXRVVENNaW51dGVzKCkpKyc6JytcbmYodGhpcy5nZXRVVENTZWNvbmRzKCkpKydaXCInO307fVxuJFAuX3RvU3RyaW5nPSRQLnRvU3RyaW5nOyRQLnRvU3RyaW5nPWZ1bmN0aW9uKGZvcm1hdCl7dmFyIHg9dGhpcztpZihmb3JtYXQmJmZvcm1hdC5sZW5ndGg9PTEpe3ZhciBjPSRDLmZvcm1hdFBhdHRlcm5zO3gudD14LnRvU3RyaW5nO3N3aXRjaChmb3JtYXQpe2Nhc2VcImRcIjpyZXR1cm4geC50KGMuc2hvcnREYXRlKTtjYXNlXCJEXCI6cmV0dXJuIHgudChjLmxvbmdEYXRlKTtjYXNlXCJGXCI6cmV0dXJuIHgudChjLmZ1bGxEYXRlVGltZSk7Y2FzZVwibVwiOnJldHVybiB4LnQoYy5tb250aERheSk7Y2FzZVwiclwiOnJldHVybiB4LnQoYy5yZmMxMTIzKTtjYXNlXCJzXCI6cmV0dXJuIHgudChjLnNvcnRhYmxlRGF0ZVRpbWUpO2Nhc2VcInRcIjpyZXR1cm4geC50KGMuc2hvcnRUaW1lKTtjYXNlXCJUXCI6cmV0dXJuIHgudChjLmxvbmdUaW1lKTtjYXNlXCJ1XCI6cmV0dXJuIHgudChjLnVuaXZlcnNhbFNvcnRhYmxlRGF0ZVRpbWUpO2Nhc2VcInlcIjpyZXR1cm4geC50KGMueWVhck1vbnRoKTt9fVxudmFyIG9yZD1mdW5jdGlvbihuKXtzd2l0Y2gobioxKXtjYXNlIDE6Y2FzZSAyMTpjYXNlIDMxOnJldHVyblwic3RcIjtjYXNlIDI6Y2FzZSAyMjpyZXR1cm5cIm5kXCI7Y2FzZSAzOmNhc2UgMjM6cmV0dXJuXCJyZFwiO2RlZmF1bHQ6cmV0dXJuXCJ0aFwiO319O3JldHVybiBmb3JtYXQ/Zm9ybWF0LnJlcGxhY2UoLyhcXFxcKT8oZGQ/ZD9kP3xNTT9NP00/fHl5P3k/eT98aGg/fEhIP3xtbT98c3M/fHR0P3xTKS9nLGZ1bmN0aW9uKG0pe2lmKG0uY2hhckF0KDApPT09XCJcXFxcXCIpe3JldHVybiBtLnJlcGxhY2UoXCJcXFxcXCIsXCJcIik7fVxueC5oPXguZ2V0SG91cnM7c3dpdGNoKG0pe2Nhc2VcImhoXCI6cmV0dXJuIHAoeC5oKCk8MTM/KHguaCgpPT09MD8xMjp4LmgoKSk6KHguaCgpLTEyKSk7Y2FzZVwiaFwiOnJldHVybiB4LmgoKTwxMz8oeC5oKCk9PT0wPzEyOnguaCgpKTooeC5oKCktMTIpO2Nhc2VcIkhIXCI6cmV0dXJuIHAoeC5oKCkpO2Nhc2VcIkhcIjpyZXR1cm4geC5oKCk7Y2FzZVwibW1cIjpyZXR1cm4gcCh4LmdldE1pbnV0ZXMoKSk7Y2FzZVwibVwiOnJldHVybiB4LmdldE1pbnV0ZXMoKTtjYXNlXCJzc1wiOnJldHVybiBwKHguZ2V0U2Vjb25kcygpKTtjYXNlXCJzXCI6cmV0dXJuIHguZ2V0U2Vjb25kcygpO2Nhc2VcInl5eXlcIjpyZXR1cm4gcCh4LmdldEZ1bGxZZWFyKCksNCk7Y2FzZVwieXlcIjpyZXR1cm4gcCh4LmdldEZ1bGxZZWFyKCkpO2Nhc2VcImRkZGRcIjpyZXR1cm4gJEMuZGF5TmFtZXNbeC5nZXREYXkoKV07Y2FzZVwiZGRkXCI6cmV0dXJuICRDLmFiYnJldmlhdGVkRGF5TmFtZXNbeC5nZXREYXkoKV07Y2FzZVwiZGRcIjpyZXR1cm4gcCh4LmdldERhdGUoKSk7Y2FzZVwiZFwiOnJldHVybiB4LmdldERhdGUoKTtjYXNlXCJNTU1NXCI6cmV0dXJuICRDLm1vbnRoTmFtZXNbeC5nZXRNb250aCgpXTtjYXNlXCJNTU1cIjpyZXR1cm4gJEMuYWJicmV2aWF0ZWRNb250aE5hbWVzW3guZ2V0TW9udGgoKV07Y2FzZVwiTU1cIjpyZXR1cm4gcCgoeC5nZXRNb250aCgpKzEpKTtjYXNlXCJNXCI6cmV0dXJuIHguZ2V0TW9udGgoKSsxO2Nhc2VcInRcIjpyZXR1cm4geC5oKCk8MTI/JEMuYW1EZXNpZ25hdG9yLnN1YnN0cmluZygwLDEpOiRDLnBtRGVzaWduYXRvci5zdWJzdHJpbmcoMCwxKTtjYXNlXCJ0dFwiOnJldHVybiB4LmgoKTwxMj8kQy5hbURlc2lnbmF0b3I6JEMucG1EZXNpZ25hdG9yO2Nhc2VcIlNcIjpyZXR1cm4gb3JkKHguZ2V0RGF0ZSgpKTtkZWZhdWx0OnJldHVybiBtO319KTp0aGlzLl90b1N0cmluZygpO307fSgpKTtcbihmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbywkTj1OdW1iZXIucHJvdG90eXBlOyRQLl9vcmllbnQ9KzE7JFAuX250aD1udWxsOyRQLl9pcz1mYWxzZTskUC5fc2FtZT1mYWxzZTskUC5faXNTZWNvbmQ9ZmFsc2U7JE4uX2RhdGVFbGVtZW50PVwiZGF5XCI7JFAubmV4dD1mdW5jdGlvbigpe3RoaXMuX29yaWVudD0rMTtyZXR1cm4gdGhpczt9OyRELm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5uZXh0KCk7fTskUC5sYXN0PSRQLnByZXY9JFAucHJldmlvdXM9ZnVuY3Rpb24oKXt0aGlzLl9vcmllbnQ9LTE7cmV0dXJuIHRoaXM7fTskRC5sYXN0PSRELnByZXY9JEQucHJldmlvdXM9ZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5sYXN0KCk7fTskUC5pcz1mdW5jdGlvbigpe3RoaXMuX2lzPXRydWU7cmV0dXJuIHRoaXM7fTskUC5zYW1lPWZ1bmN0aW9uKCl7dGhpcy5fc2FtZT10cnVlO3RoaXMuX2lzU2Vjb25kPWZhbHNlO3JldHVybiB0aGlzO307JFAudG9kYXk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zYW1lKCkuZGF5KCk7fTskUC53ZWVrZGF5PWZ1bmN0aW9uKCl7aWYodGhpcy5faXMpe3RoaXMuX2lzPWZhbHNlO3JldHVybighdGhpcy5pcygpLnNhdCgpJiYhdGhpcy5pcygpLnN1bigpKTt9XG5yZXR1cm4gZmFsc2U7fTskUC5hdD1mdW5jdGlvbih0aW1lKXtyZXR1cm4odHlwZW9mIHRpbWU9PT1cInN0cmluZ1wiKT8kRC5wYXJzZSh0aGlzLnRvU3RyaW5nKFwiZFwiKStcIiBcIit0aW1lKTp0aGlzLnNldCh0aW1lKTt9OyROLmZyb21Ob3c9JE4uYWZ0ZXI9ZnVuY3Rpb24oZGF0ZSl7dmFyIGM9e307Y1t0aGlzLl9kYXRlRWxlbWVudF09dGhpcztyZXR1cm4oKCFkYXRlKT9uZXcgRGF0ZSgpOmRhdGUuY2xvbmUoKSkuYWRkKGMpO307JE4uYWdvPSROLmJlZm9yZT1mdW5jdGlvbihkYXRlKXt2YXIgYz17fTtjW3RoaXMuX2RhdGVFbGVtZW50XT10aGlzKi0xO3JldHVybigoIWRhdGUpP25ldyBEYXRlKCk6ZGF0ZS5jbG9uZSgpKS5hZGQoYyk7fTt2YXIgZHg9KFwic3VuZGF5IG1vbmRheSB0dWVzZGF5IHdlZG5lc2RheSB0aHVyc2RheSBmcmlkYXkgc2F0dXJkYXlcIikuc3BsaXQoL1xccy8pLG14PShcImphbnVhcnkgZmVicnVhcnkgbWFyY2ggYXByaWwgbWF5IGp1bmUganVseSBhdWd1c3Qgc2VwdGVtYmVyIG9jdG9iZXIgbm92ZW1iZXIgZGVjZW1iZXJcIikuc3BsaXQoL1xccy8pLHB4PShcIk1pbGxpc2Vjb25kIFNlY29uZCBNaW51dGUgSG91ciBEYXkgV2VlayBNb250aCBZZWFyXCIpLnNwbGl0KC9cXHMvKSxweGY9KFwiTWlsbGlzZWNvbmRzIFNlY29uZHMgTWludXRlcyBIb3VycyBEYXRlIFdlZWsgTW9udGggRnVsbFllYXJcIikuc3BsaXQoL1xccy8pLG50aD0oXCJmaW5hbCBmaXJzdCBzZWNvbmQgdGhpcmQgZm91cnRoIGZpZnRoXCIpLnNwbGl0KC9cXHMvKSxkZTskUC50b09iamVjdD1mdW5jdGlvbigpe3ZhciBvPXt9O2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7b1tweFtpXS50b0xvd2VyQ2FzZSgpXT10aGlzW1wiZ2V0XCIrcHhmW2ldXSgpO31cbnJldHVybiBvO307JEQuZnJvbU9iamVjdD1mdW5jdGlvbihjb25maWcpe2NvbmZpZy53ZWVrPW51bGw7cmV0dXJuIERhdGUudG9kYXkoKS5zZXQoY29uZmlnKTt9O3ZhciBkZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtpZih0aGlzLl9pcyl7dGhpcy5faXM9ZmFsc2U7cmV0dXJuIHRoaXMuZ2V0RGF5KCk9PW47fVxuaWYodGhpcy5fbnRoIT09bnVsbCl7aWYodGhpcy5faXNTZWNvbmQpe3RoaXMuYWRkU2Vjb25kcyh0aGlzLl9vcmllbnQqLTEpO31cbnRoaXMuX2lzU2Vjb25kPWZhbHNlO3ZhciBudGVtcD10aGlzLl9udGg7dGhpcy5fbnRoPW51bGw7dmFyIHRlbXA9dGhpcy5jbG9uZSgpLm1vdmVUb0xhc3REYXlPZk1vbnRoKCk7dGhpcy5tb3ZlVG9OdGhPY2N1cnJlbmNlKG4sbnRlbXApO2lmKHRoaXM+dGVtcCl7dGhyb3cgbmV3IFJhbmdlRXJyb3IoJEQuZ2V0RGF5TmFtZShuKStcIiBkb2VzIG5vdCBvY2N1ciBcIitudGVtcCtcIiB0aW1lcyBpbiB0aGUgbW9udGggb2YgXCIrJEQuZ2V0TW9udGhOYW1lKHRlbXAuZ2V0TW9udGgoKSkrXCIgXCIrdGVtcC5nZXRGdWxsWWVhcigpK1wiLlwiKTt9XG5yZXR1cm4gdGhpczt9XG5yZXR1cm4gdGhpcy5tb3ZlVG9EYXlPZldlZWsobix0aGlzLl9vcmllbnQpO307fTt2YXIgc2RmPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PSRELnRvZGF5KCksc2hpZnQ9bi10LmdldERheSgpO2lmKG49PT0wJiYkQy5maXJzdERheU9mV2Vlaz09PTEmJnQuZ2V0RGF5KCkhPT0wKXtzaGlmdD1zaGlmdCs3O31cbnJldHVybiB0LmFkZERheXMoc2hpZnQpO307fTtmb3IodmFyIGk9MDtpPGR4Lmxlbmd0aDtpKyspeyREW2R4W2ldLnRvVXBwZXJDYXNlKCldPSREW2R4W2ldLnRvVXBwZXJDYXNlKCkuc3Vic3RyaW5nKDAsMyldPWk7JERbZHhbaV1dPSREW2R4W2ldLnN1YnN0cmluZygwLDMpXT1zZGYoaSk7JFBbZHhbaV1dPSRQW2R4W2ldLnN1YnN0cmluZygwLDMpXT1kZihpKTt9XG52YXIgbWY9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKCl7aWYodGhpcy5faXMpe3RoaXMuX2lzPWZhbHNlO3JldHVybiB0aGlzLmdldE1vbnRoKCk9PT1uO31cbnJldHVybiB0aGlzLm1vdmVUb01vbnRoKG4sdGhpcy5fb3JpZW50KTt9O307dmFyIHNtZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gJEQudG9kYXkoKS5zZXQoe21vbnRoOm4sZGF5OjF9KTt9O307Zm9yKHZhciBqPTA7ajxteC5sZW5ndGg7aisrKXskRFtteFtqXS50b1VwcGVyQ2FzZSgpXT0kRFtteFtqXS50b1VwcGVyQ2FzZSgpLnN1YnN0cmluZygwLDMpXT1qOyREW214W2pdXT0kRFtteFtqXS5zdWJzdHJpbmcoMCwzKV09c21mKGopOyRQW214W2pdXT0kUFtteFtqXS5zdWJzdHJpbmcoMCwzKV09bWYoaik7fVxudmFyIGVmPWZ1bmN0aW9uKGope3JldHVybiBmdW5jdGlvbigpe2lmKHRoaXMuX2lzU2Vjb25kKXt0aGlzLl9pc1NlY29uZD1mYWxzZTtyZXR1cm4gdGhpczt9XG5pZih0aGlzLl9zYW1lKXt0aGlzLl9zYW1lPXRoaXMuX2lzPWZhbHNlO3ZhciBvMT10aGlzLnRvT2JqZWN0KCksbzI9KGFyZ3VtZW50c1swXXx8bmV3IERhdGUoKSkudG9PYmplY3QoKSx2PVwiXCIsaz1qLnRvTG93ZXJDYXNlKCk7Zm9yKHZhciBtPShweC5sZW5ndGgtMSk7bT4tMTttLS0pe3Y9cHhbbV0udG9Mb3dlckNhc2UoKTtpZihvMVt2XSE9bzJbdl0pe3JldHVybiBmYWxzZTt9XG5pZihrPT12KXticmVhazt9fVxucmV0dXJuIHRydWU7fVxuaWYoai5zdWJzdHJpbmcoai5sZW5ndGgtMSkhPVwic1wiKXtqKz1cInNcIjt9XG5yZXR1cm4gdGhpc1tcImFkZFwiK2pdKHRoaXMuX29yaWVudCk7fTt9O3ZhciBuZj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLl9kYXRlRWxlbWVudD1uO3JldHVybiB0aGlzO307fTtmb3IodmFyIGs9MDtrPHB4Lmxlbmd0aDtrKyspe2RlPXB4W2tdLnRvTG93ZXJDYXNlKCk7JFBbZGVdPSRQW2RlK1wic1wiXT1lZihweFtrXSk7JE5bZGVdPSROW2RlK1wic1wiXT1uZihkZSk7fVxuJFAuX3NzPWVmKFwiU2Vjb25kXCIpO3ZhciBudGhmbj1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oZGF5T2ZXZWVrKXtpZih0aGlzLl9zYW1lKXtyZXR1cm4gdGhpcy5fc3MoYXJndW1lbnRzWzBdKTt9XG5pZihkYXlPZldlZWt8fGRheU9mV2Vlaz09PTApe3JldHVybiB0aGlzLm1vdmVUb050aE9jY3VycmVuY2UoZGF5T2ZXZWVrLG4pO31cbnRoaXMuX250aD1uO2lmKG49PT0yJiYoZGF5T2ZXZWVrPT09dW5kZWZpbmVkfHxkYXlPZldlZWs9PT1udWxsKSl7dGhpcy5faXNTZWNvbmQ9dHJ1ZTtyZXR1cm4gdGhpcy5hZGRTZWNvbmRzKHRoaXMuX29yaWVudCk7fVxucmV0dXJuIHRoaXM7fTt9O2Zvcih2YXIgbD0wO2w8bnRoLmxlbmd0aDtsKyspeyRQW250aFtsXV09KGw9PT0wKT9udGhmbigtMSk6bnRoZm4obCk7fX0oKSk7XG4oZnVuY3Rpb24oKXtEYXRlLlBhcnNpbmc9e0V4Y2VwdGlvbjpmdW5jdGlvbihzKXt0aGlzLm1lc3NhZ2U9XCJQYXJzZSBlcnJvciBhdCAnXCIrcy5zdWJzdHJpbmcoMCwxMCkrXCIgLi4uJ1wiO319O3ZhciAkUD1EYXRlLlBhcnNpbmc7dmFyIF89JFAuT3BlcmF0b3JzPXtydG9rZW46ZnVuY3Rpb24ocil7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciBteD1zLm1hdGNoKHIpO2lmKG14KXtyZXR1cm4oW214WzBdLHMuc3Vic3RyaW5nKG14WzBdLmxlbmd0aCldKTt9ZWxzZXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO319O30sdG9rZW46ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKHMpe3JldHVybiBfLnJ0b2tlbihuZXcgUmVnRXhwKFwiXlxccypcIitzK1wiXFxzKlwiKSkocyk7fTt9LHN0b2tlbjpmdW5jdGlvbihzKXtyZXR1cm4gXy5ydG9rZW4obmV3IFJlZ0V4cChcIl5cIitzKSk7fSx1bnRpbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHF4PVtdLHJ4PW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyeD1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cXgucHVzaChyeFswXSk7cz1yeFsxXTtjb250aW51ZTt9XG5icmVhazt9XG5yZXR1cm5bcXgsc107fTt9LG1hbnk6ZnVuY3Rpb24ocCl7cmV0dXJuIGZ1bmN0aW9uKHMpe3ZhciByeD1bXSxyPW51bGw7d2hpbGUocy5sZW5ndGgpe3RyeXtyPXAuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bcngsc107fVxucngucHVzaChyWzBdKTtzPXJbMV07fVxucmV0dXJuW3J4LHNdO307fSxvcHRpb25hbDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDt0cnl7cj1wLmNhbGwodGhpcyxzKTt9Y2F0Y2goZSl7cmV0dXJuW251bGwsc107fVxucmV0dXJuW3JbMF0sclsxXV07fTt9LG5vdDpmdW5jdGlvbihwKXtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3AuY2FsbCh0aGlzLHMpO31jYXRjaChlKXtyZXR1cm5bbnVsbCxzXTt9XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxpZ25vcmU6ZnVuY3Rpb24ocCl7cmV0dXJuIHA/ZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtyPXAuY2FsbCh0aGlzLHMpO3JldHVybltudWxsLHJbMV1dO306bnVsbDt9LHByb2R1Y3Q6ZnVuY3Rpb24oKXt2YXIgcHg9YXJndW1lbnRzWzBdLHF4PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxyeD1bXTtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe3J4LnB1c2goXy5lYWNoKHB4W2ldLHF4KSk7fVxucmV0dXJuIHJ4O30sY2FjaGU6ZnVuY3Rpb24ocnVsZSl7dmFyIGNhY2hlPXt9LHI9bnVsbDtyZXR1cm4gZnVuY3Rpb24ocyl7dHJ5e3I9Y2FjaGVbc109KGNhY2hlW3NdfHxydWxlLmNhbGwodGhpcyxzKSk7fWNhdGNoKGUpe3I9Y2FjaGVbc109ZTt9XG5pZihyIGluc3RhbmNlb2YgJFAuRXhjZXB0aW9uKXt0aHJvdyByO31lbHNle3JldHVybiByO319O30sYW55OmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7cj1udWxsO31cbmlmKHIpe3JldHVybiByO319XG50aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHMpO307fSxlYWNoOmZ1bmN0aW9uKCl7dmFyIHB4PWFyZ3VtZW50cztyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PVtdLHI9bnVsbDtmb3IodmFyIGk9MDtpPHB4Lmxlbmd0aDtpKyspe2lmKHB4W2ldPT1udWxsKXtjb250aW51ZTt9XG50cnl7cj0ocHhbaV0uY2FsbCh0aGlzLHMpKTt9Y2F0Y2goZSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5yeC5wdXNoKHJbMF0pO3M9clsxXTt9XG5yZXR1cm5bcngsc107fTt9LGFsbDpmdW5jdGlvbigpe3ZhciBweD1hcmd1bWVudHMsXz1fO3JldHVybiBfLmVhY2goXy5vcHRpb25hbChweCkpO30sc2VxdWVuY2U6ZnVuY3Rpb24ocHgsZCxjKXtkPWR8fF8ucnRva2VuKC9eXFxzKi8pO2M9Y3x8bnVsbDtpZihweC5sZW5ndGg9PTEpe3JldHVybiBweFswXTt9XG5yZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9bnVsbCxxPW51bGw7dmFyIHJ4PVtdO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7dHJ5e3I9cHhbaV0uY2FsbCh0aGlzLHMpO31jYXRjaChlKXticmVhazt9XG5yeC5wdXNoKHJbMF0pO3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7cT1udWxsO2JyZWFrO31cbnM9cVsxXTt9XG5pZighcil7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihzKTt9XG5pZihxKXt0aHJvdyBuZXcgJFAuRXhjZXB0aW9uKHFbMV0pO31cbmlmKGMpe3RyeXtyPWMuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihyWzFdKTt9fVxucmV0dXJuW3J4LChyP3JbMV06cyldO307fSxiZXR3ZWVuOmZ1bmN0aW9uKGQxLHAsZDIpe2QyPWQyfHxkMTt2YXIgX2ZuPV8uZWFjaChfLmlnbm9yZShkMSkscCxfLmlnbm9yZShkMikpO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcng9X2ZuLmNhbGwodGhpcyxzKTtyZXR1cm5bW3J4WzBdWzBdLHJbMF1bMl1dLHJ4WzFdXTt9O30sbGlzdDpmdW5jdGlvbihwLGQsYyl7ZD1kfHxfLnJ0b2tlbigvXlxccyovKTtjPWN8fG51bGw7cmV0dXJuKHAgaW5zdGFuY2VvZiBBcnJheT9fLmVhY2goXy5wcm9kdWN0KHAuc2xpY2UoMCwtMSksXy5pZ25vcmUoZCkpLHAuc2xpY2UoLTEpLF8uaWdub3JlKGMpKTpfLmVhY2goXy5tYW55KF8uZWFjaChwLF8uaWdub3JlKGQpKSkscHgsXy5pZ25vcmUoYykpKTt9LHNldDpmdW5jdGlvbihweCxkLGMpe2Q9ZHx8Xy5ydG9rZW4oL15cXHMqLyk7Yz1jfHxudWxsO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsLHA9bnVsbCxxPW51bGwscng9bnVsbCxiZXN0PVtbXSxzXSxsYXN0PWZhbHNlO2Zvcih2YXIgaT0wO2k8cHgubGVuZ3RoO2krKyl7cT1udWxsO3A9bnVsbDtyPW51bGw7bGFzdD0ocHgubGVuZ3RoPT0xKTt0cnl7cj1weFtpXS5jYWxsKHRoaXMscyk7fWNhdGNoKGUpe2NvbnRpbnVlO31cbnJ4PVtbclswXV0sclsxXV07aWYoclsxXS5sZW5ndGg+MCYmIWxhc3Qpe3RyeXtxPWQuY2FsbCh0aGlzLHJbMV0pO31jYXRjaChleCl7bGFzdD10cnVlO319ZWxzZXtsYXN0PXRydWU7fVxuaWYoIWxhc3QmJnFbMV0ubGVuZ3RoPT09MCl7bGFzdD10cnVlO31cbmlmKCFsYXN0KXt2YXIgcXg9W107Zm9yKHZhciBqPTA7ajxweC5sZW5ndGg7aisrKXtpZihpIT1qKXtxeC5wdXNoKHB4W2pdKTt9fVxucD1fLnNldChxeCxkKS5jYWxsKHRoaXMscVsxXSk7aWYocFswXS5sZW5ndGg+MCl7cnhbMF09cnhbMF0uY29uY2F0KHBbMF0pO3J4WzFdPXBbMV07fX1cbmlmKHJ4WzFdLmxlbmd0aDxiZXN0WzFdLmxlbmd0aCl7YmVzdD1yeDt9XG5pZihiZXN0WzFdLmxlbmd0aD09PTApe2JyZWFrO319XG5pZihiZXN0WzBdLmxlbmd0aD09PTApe3JldHVybiBiZXN0O31cbmlmKGMpe3RyeXtxPWMuY2FsbCh0aGlzLGJlc3RbMV0pO31jYXRjaChleSl7dGhyb3cgbmV3ICRQLkV4Y2VwdGlvbihiZXN0WzFdKTt9XG5iZXN0WzFdPXFbMV07fVxucmV0dXJuIGJlc3Q7fTt9LGZvcndhcmQ6ZnVuY3Rpb24oZ3IsZm5hbWUpe3JldHVybiBmdW5jdGlvbihzKXtyZXR1cm4gZ3JbZm5hbWVdLmNhbGwodGhpcyxzKTt9O30scmVwbGFjZTpmdW5jdGlvbihydWxlLHJlcGwpe3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1ydWxlLmNhbGwodGhpcyxzKTtyZXR1cm5bcmVwbCxyWzFdXTt9O30scHJvY2VzczpmdW5jdGlvbihydWxlLGZuKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHI9cnVsZS5jYWxsKHRoaXMscyk7cmV0dXJuW2ZuLmNhbGwodGhpcyxyWzBdKSxyWzFdXTt9O30sbWluOmZ1bmN0aW9uKG1pbixydWxlKXtyZXR1cm4gZnVuY3Rpb24ocyl7dmFyIHJ4PXJ1bGUuY2FsbCh0aGlzLHMpO2lmKHJ4WzBdLmxlbmd0aDxtaW4pe3Rocm93IG5ldyAkUC5FeGNlcHRpb24ocyk7fVxucmV0dXJuIHJ4O307fX07dmFyIF9nZW5lcmF0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe3ZhciBhcmdzPW51bGwscng9W107aWYoYXJndW1lbnRzLmxlbmd0aD4xKXthcmdzPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7fWVsc2UgaWYoYXJndW1lbnRzWzBdaW5zdGFuY2VvZiBBcnJheSl7YXJncz1hcmd1bWVudHNbMF07fVxuaWYoYXJncyl7Zm9yKHZhciBpPTAscHg9YXJncy5zaGlmdCgpO2k8cHgubGVuZ3RoO2krKyl7YXJncy51bnNoaWZ0KHB4W2ldKTtyeC5wdXNoKG9wLmFwcGx5KG51bGwsYXJncykpO2FyZ3Muc2hpZnQoKTtyZXR1cm4gcng7fX1lbHNle3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50cyk7fX07fTt2YXIgZ3g9XCJvcHRpb25hbCBub3QgaWdub3JlIGNhY2hlXCIuc3BsaXQoL1xccy8pO2Zvcih2YXIgaT0wO2k8Z3gubGVuZ3RoO2krKyl7X1tneFtpXV09X2dlbmVyYXRvcihfW2d4W2ldXSk7fVxudmFyIF92ZWN0b3I9ZnVuY3Rpb24ob3Ape3JldHVybiBmdW5jdGlvbigpe2lmKGFyZ3VtZW50c1swXWluc3RhbmNlb2YgQXJyYXkpe3JldHVybiBvcC5hcHBseShudWxsLGFyZ3VtZW50c1swXSk7fWVsc2V7cmV0dXJuIG9wLmFwcGx5KG51bGwsYXJndW1lbnRzKTt9fTt9O3ZhciB2eD1cImVhY2ggYW55IGFsbFwiLnNwbGl0KC9cXHMvKTtmb3IodmFyIGo9MDtqPHZ4Lmxlbmd0aDtqKyspe19bdnhbal1dPV92ZWN0b3IoX1t2eFtqXV0pO319KCkpOyhmdW5jdGlvbigpe3ZhciAkRD1EYXRlLCRQPSRELnByb3RvdHlwZSwkQz0kRC5DdWx0dXJlSW5mbzt2YXIgZmxhdHRlbkFuZENvbXBhY3Q9ZnVuY3Rpb24oYXgpe3ZhciByeD1bXTtmb3IodmFyIGk9MDtpPGF4Lmxlbmd0aDtpKyspe2lmKGF4W2ldaW5zdGFuY2VvZiBBcnJheSl7cng9cnguY29uY2F0KGZsYXR0ZW5BbmRDb21wYWN0KGF4W2ldKSk7fWVsc2V7aWYoYXhbaV0pe3J4LnB1c2goYXhbaV0pO319fVxucmV0dXJuIHJ4O307JEQuR3JhbW1hcj17fTskRC5UcmFuc2xhdG9yPXtob3VyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMuaG91cj1OdW1iZXIocyk7fTt9LG1pbnV0ZTpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm1pbnV0ZT1OdW1iZXIocyk7fTt9LHNlY29uZDpmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnNlY29uZD1OdW1iZXIocyk7fTt9LG1lcmlkaWFuOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubWVyaWRpYW49cy5zbGljZSgwLDEpLnRvTG93ZXJDYXNlKCk7fTt9LHRpbWV6b25lOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXMucmVwbGFjZSgvW15cXGRcXCtcXC1dL2csXCJcIik7aWYobi5sZW5ndGgpe3RoaXMudGltZXpvbmVPZmZzZXQ9TnVtYmVyKG4pO31lbHNle3RoaXMudGltZXpvbmU9cy50b0xvd2VyQ2FzZSgpO319O30sZGF5OmZ1bmN0aW9uKHgpe3ZhciBzPXhbMF07cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy5kYXk9TnVtYmVyKHMubWF0Y2goL1xcZCsvKVswXSk7fTt9LG1vbnRoOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMubW9udGg9KHMubGVuZ3RoPT0zKT9cImphbiBmZWIgbWFyIGFwciBtYXkganVuIGp1bCBhdWcgc2VwIG9jdCBub3YgZGVjXCIuaW5kZXhPZihzKS80Ok51bWJlcihzKS0xO307fSx5ZWFyOmZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPU51bWJlcihzKTt0aGlzLnllYXI9KChzLmxlbmd0aD4yKT9uOihuKygoKG4rMjAwMCk8JEMudHdvRGlnaXRZZWFyTWF4KT8yMDAwOjE5MDApKSk7fTt9LHJkYXk6ZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7c3dpdGNoKHMpe2Nhc2VcInllc3RlcmRheVwiOnRoaXMuZGF5cz0tMTticmVhaztjYXNlXCJ0b21vcnJvd1wiOnRoaXMuZGF5cz0xO2JyZWFrO2Nhc2VcInRvZGF5XCI6dGhpcy5kYXlzPTA7YnJlYWs7Y2FzZVwibm93XCI6dGhpcy5kYXlzPTA7dGhpcy5ub3c9dHJ1ZTticmVhazt9fTt9LGZpbmlzaEV4YWN0OmZ1bmN0aW9uKHgpe3g9KHggaW5zdGFuY2VvZiBBcnJheSk/eDpbeF07Zm9yKHZhciBpPTA7aTx4Lmxlbmd0aDtpKyspe2lmKHhbaV0pe3hbaV0uY2FsbCh0aGlzKTt9fVxudmFyIG5vdz1uZXcgRGF0ZSgpO2lmKCh0aGlzLmhvdXJ8fHRoaXMubWludXRlKSYmKCF0aGlzLm1vbnRoJiYhdGhpcy55ZWFyJiYhdGhpcy5kYXkpKXt0aGlzLmRheT1ub3cuZ2V0RGF0ZSgpO31cbmlmKCF0aGlzLnllYXIpe3RoaXMueWVhcj1ub3cuZ2V0RnVsbFllYXIoKTt9XG5pZighdGhpcy5tb250aCYmdGhpcy5tb250aCE9PTApe3RoaXMubW9udGg9bm93LmdldE1vbnRoKCk7fVxuaWYoIXRoaXMuZGF5KXt0aGlzLmRheT0xO31cbmlmKCF0aGlzLmhvdXIpe3RoaXMuaG91cj0wO31cbmlmKCF0aGlzLm1pbnV0ZSl7dGhpcy5taW51dGU9MDt9XG5pZighdGhpcy5zZWNvbmQpe3RoaXMuc2Vjb25kPTA7fVxuaWYodGhpcy5tZXJpZGlhbiYmdGhpcy5ob3VyKXtpZih0aGlzLm1lcmlkaWFuPT1cInBcIiYmdGhpcy5ob3VyPDEyKXt0aGlzLmhvdXI9dGhpcy5ob3VyKzEyO31lbHNlIGlmKHRoaXMubWVyaWRpYW49PVwiYVwiJiZ0aGlzLmhvdXI9PTEyKXt0aGlzLmhvdXI9MDt9fVxuaWYodGhpcy5kYXk+JEQuZ2V0RGF5c0luTW9udGgodGhpcy55ZWFyLHRoaXMubW9udGgpKXt0aHJvdyBuZXcgUmFuZ2VFcnJvcih0aGlzLmRheStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZGF5cy5cIik7fVxudmFyIHI9bmV3IERhdGUodGhpcy55ZWFyLHRoaXMubW9udGgsdGhpcy5kYXksdGhpcy5ob3VyLHRoaXMubWludXRlLHRoaXMuc2Vjb25kKTtpZih0aGlzLnRpbWV6b25lKXtyLnNldCh7dGltZXpvbmU6dGhpcy50aW1lem9uZX0pO31lbHNlIGlmKHRoaXMudGltZXpvbmVPZmZzZXQpe3Iuc2V0KHt0aW1lem9uZU9mZnNldDp0aGlzLnRpbWV6b25lT2Zmc2V0fSk7fVxucmV0dXJuIHI7fSxmaW5pc2g6ZnVuY3Rpb24oeCl7eD0oeCBpbnN0YW5jZW9mIEFycmF5KT9mbGF0dGVuQW5kQ29tcGFjdCh4KTpbeF07aWYoeC5sZW5ndGg9PT0wKXtyZXR1cm4gbnVsbDt9XG5mb3IodmFyIGk9MDtpPHgubGVuZ3RoO2krKyl7aWYodHlwZW9mIHhbaV09PVwiZnVuY3Rpb25cIil7eFtpXS5jYWxsKHRoaXMpO319XG52YXIgdG9kYXk9JEQudG9kYXkoKTtpZih0aGlzLm5vdyYmIXRoaXMudW5pdCYmIXRoaXMub3BlcmF0b3Ipe3JldHVybiBuZXcgRGF0ZSgpO31lbHNlIGlmKHRoaXMubm93KXt0b2RheT1uZXcgRGF0ZSgpO31cbnZhciBleHByZXNzaW9uPSEhKHRoaXMuZGF5cyYmdGhpcy5kYXlzIT09bnVsbHx8dGhpcy5vcmllbnR8fHRoaXMub3BlcmF0b3IpO3ZhciBnYXAsbW9kLG9yaWVudDtvcmllbnQ9KCh0aGlzLm9yaWVudD09XCJwYXN0XCJ8fHRoaXMub3BlcmF0b3I9PVwic3VidHJhY3RcIik/LTE6MSk7aWYoIXRoaXMubm93JiZcImhvdXIgbWludXRlIHNlY29uZFwiLmluZGV4T2YodGhpcy51bml0KSE9LTEpe3RvZGF5LnNldFRpbWVUb05vdygpO31cbmlmKHRoaXMubW9udGh8fHRoaXMubW9udGg9PT0wKXtpZihcInllYXIgZGF5IGhvdXIgbWludXRlIHNlY29uZFwiLmluZGV4T2YodGhpcy51bml0KSE9LTEpe3RoaXMudmFsdWU9dGhpcy5tb250aCsxO3RoaXMubW9udGg9bnVsbDtleHByZXNzaW9uPXRydWU7fX1cbmlmKCFleHByZXNzaW9uJiZ0aGlzLndlZWtkYXkmJiF0aGlzLmRheSYmIXRoaXMuZGF5cyl7dmFyIHRlbXA9RGF0ZVt0aGlzLndlZWtkYXldKCk7dGhpcy5kYXk9dGVtcC5nZXREYXRlKCk7aWYoIXRoaXMubW9udGgpe3RoaXMubW9udGg9dGVtcC5nZXRNb250aCgpO31cbnRoaXMueWVhcj10ZW1wLmdldEZ1bGxZZWFyKCk7fVxuaWYoZXhwcmVzc2lvbiYmdGhpcy53ZWVrZGF5JiZ0aGlzLnVuaXQhPVwibW9udGhcIil7dGhpcy51bml0PVwiZGF5XCI7Z2FwPSgkRC5nZXREYXlOdW1iZXJGcm9tTmFtZSh0aGlzLndlZWtkYXkpLXRvZGF5LmdldERheSgpKTttb2Q9Nzt0aGlzLmRheXM9Z2FwPygoZ2FwKyhvcmllbnQqbW9kKSklbW9kKToob3JpZW50Km1vZCk7fVxuaWYodGhpcy5tb250aCYmdGhpcy51bml0PT1cImRheVwiJiZ0aGlzLm9wZXJhdG9yKXt0aGlzLnZhbHVlPSh0aGlzLm1vbnRoKzEpO3RoaXMubW9udGg9bnVsbDt9XG5pZih0aGlzLnZhbHVlIT1udWxsJiZ0aGlzLm1vbnRoIT1udWxsJiZ0aGlzLnllYXIhPW51bGwpe3RoaXMuZGF5PXRoaXMudmFsdWUqMTt9XG5pZih0aGlzLm1vbnRoJiYhdGhpcy5kYXkmJnRoaXMudmFsdWUpe3RvZGF5LnNldCh7ZGF5OnRoaXMudmFsdWUqMX0pO2lmKCFleHByZXNzaW9uKXt0aGlzLmRheT10aGlzLnZhbHVlKjE7fX1cbmlmKCF0aGlzLm1vbnRoJiZ0aGlzLnZhbHVlJiZ0aGlzLnVuaXQ9PVwibW9udGhcIiYmIXRoaXMubm93KXt0aGlzLm1vbnRoPXRoaXMudmFsdWU7ZXhwcmVzc2lvbj10cnVlO31cbmlmKGV4cHJlc3Npb24mJih0aGlzLm1vbnRofHx0aGlzLm1vbnRoPT09MCkmJnRoaXMudW5pdCE9XCJ5ZWFyXCIpe3RoaXMudW5pdD1cIm1vbnRoXCI7Z2FwPSh0aGlzLm1vbnRoLXRvZGF5LmdldE1vbnRoKCkpO21vZD0xMjt0aGlzLm1vbnRocz1nYXA/KChnYXArKG9yaWVudCptb2QpKSVtb2QpOihvcmllbnQqbW9kKTt0aGlzLm1vbnRoPW51bGw7fVxuaWYoIXRoaXMudW5pdCl7dGhpcy51bml0PVwiZGF5XCI7fVxuaWYoIXRoaXMudmFsdWUmJnRoaXMub3BlcmF0b3ImJnRoaXMub3BlcmF0b3IhPT1udWxsJiZ0aGlzW3RoaXMudW5pdCtcInNcIl0mJnRoaXNbdGhpcy51bml0K1wic1wiXSE9PW51bGwpe3RoaXNbdGhpcy51bml0K1wic1wiXT10aGlzW3RoaXMudW5pdCtcInNcIl0rKCh0aGlzLm9wZXJhdG9yPT1cImFkZFwiKT8xOi0xKSsodGhpcy52YWx1ZXx8MCkqb3JpZW50O31lbHNlIGlmKHRoaXNbdGhpcy51bml0K1wic1wiXT09bnVsbHx8dGhpcy5vcGVyYXRvciE9bnVsbCl7aWYoIXRoaXMudmFsdWUpe3RoaXMudmFsdWU9MTt9XG50aGlzW3RoaXMudW5pdCtcInNcIl09dGhpcy52YWx1ZSpvcmllbnQ7fVxuaWYodGhpcy5tZXJpZGlhbiYmdGhpcy5ob3VyKXtpZih0aGlzLm1lcmlkaWFuPT1cInBcIiYmdGhpcy5ob3VyPDEyKXt0aGlzLmhvdXI9dGhpcy5ob3VyKzEyO31lbHNlIGlmKHRoaXMubWVyaWRpYW49PVwiYVwiJiZ0aGlzLmhvdXI9PTEyKXt0aGlzLmhvdXI9MDt9fVxuaWYodGhpcy53ZWVrZGF5JiYhdGhpcy5kYXkmJiF0aGlzLmRheXMpe3ZhciB0ZW1wPURhdGVbdGhpcy53ZWVrZGF5XSgpO3RoaXMuZGF5PXRlbXAuZ2V0RGF0ZSgpO2lmKHRlbXAuZ2V0TW9udGgoKSE9PXRvZGF5LmdldE1vbnRoKCkpe3RoaXMubW9udGg9dGVtcC5nZXRNb250aCgpO319XG5pZigodGhpcy5tb250aHx8dGhpcy5tb250aD09PTApJiYhdGhpcy5kYXkpe3RoaXMuZGF5PTE7fVxuaWYoIXRoaXMub3JpZW50JiYhdGhpcy5vcGVyYXRvciYmdGhpcy51bml0PT1cIndlZWtcIiYmdGhpcy52YWx1ZSYmIXRoaXMuZGF5JiYhdGhpcy5tb250aCl7cmV0dXJuIERhdGUudG9kYXkoKS5zZXRXZWVrKHRoaXMudmFsdWUpO31cbmlmKGV4cHJlc3Npb24mJnRoaXMudGltZXpvbmUmJnRoaXMuZGF5JiZ0aGlzLmRheXMpe3RoaXMuZGF5PXRoaXMuZGF5czt9XG5yZXR1cm4oZXhwcmVzc2lvbik/dG9kYXkuYWRkKHRoaXMpOnRvZGF5LnNldCh0aGlzKTt9fTt2YXIgXz0kRC5QYXJzaW5nLk9wZXJhdG9ycyxnPSRELkdyYW1tYXIsdD0kRC5UcmFuc2xhdG9yLF9mbjtnLmRhdGVQYXJ0RGVsaW1pdGVyPV8ucnRva2VuKC9eKFtcXHNcXC1cXC5cXCxcXC9cXHgyN10rKS8pO2cudGltZVBhcnREZWxpbWl0ZXI9Xy5zdG9rZW4oXCI6XCIpO2cud2hpdGVTcGFjZT1fLnJ0b2tlbigvXlxccyovKTtnLmdlbmVyYWxEZWxpbWl0ZXI9Xy5ydG9rZW4oL14oKFtcXHNcXCxdfGF0fEB8b24pKykvKTt2YXIgX0M9e307Zy5jdG9rZW49ZnVuY3Rpb24oa2V5cyl7dmFyIGZuPV9DW2tleXNdO2lmKCFmbil7dmFyIGM9JEMucmVnZXhQYXR0ZXJuczt2YXIga3g9a2V5cy5zcGxpdCgvXFxzKy8pLHB4PVtdO2Zvcih2YXIgaT0wO2k8a3gubGVuZ3RoO2krKyl7cHgucHVzaChfLnJlcGxhY2UoXy5ydG9rZW4oY1treFtpXV0pLGt4W2ldKSk7fVxuZm49X0Nba2V5c109Xy5hbnkuYXBwbHkobnVsbCxweCk7fVxucmV0dXJuIGZuO307Zy5jdG9rZW4yPWZ1bmN0aW9uKGtleSl7cmV0dXJuIF8ucnRva2VuKCRDLnJlZ2V4UGF0dGVybnNba2V5XSk7fTtnLmg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMFswLTldfDFbMC0yXXxbMS05XSkvKSx0LmhvdXIpKTtnLmhoPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDBbMC05XXwxWzAtMl0pLyksdC5ob3VyKSk7Zy5IPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTFdWzAtOV18MlswLTNdfFswLTldKS8pLHQuaG91cikpO2cuSEg9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oWzAtMV1bMC05XXwyWzAtM10pLyksdC5ob3VyKSk7Zy5tPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTVdWzAtOV18WzAtOV0pLyksdC5taW51dGUpKTtnLm1tPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eWzAtNV1bMC05XS8pLHQubWludXRlKSk7Zy5zPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFswLTVdWzAtOV18WzAtOV0pLyksdC5zZWNvbmQpKTtnLnNzPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eWzAtNV1bMC05XS8pLHQuc2Vjb25kKSk7Zy5obXM9Xy5jYWNoZShfLnNlcXVlbmNlKFtnLkgsZy5tLGcuc10sZy50aW1lUGFydERlbGltaXRlcikpO2cudD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJzaG9ydE1lcmlkaWFuXCIpLHQubWVyaWRpYW4pKTtnLnR0PV8uY2FjaGUoXy5wcm9jZXNzKGcuY3Rva2VuMihcImxvbmdNZXJpZGlhblwiKSx0Lm1lcmlkaWFuKSk7Zy56PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKChcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQpfCgoXFwrfFxcLSlcXGRcXGRcXDo/XFxkXFxkKS8pLHQudGltZXpvbmUpKTtnLnp6PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKChcXCt8XFwtKVxccypcXGRcXGRcXGRcXGQpfCgoXFwrfFxcLSlcXGRcXGRcXDo/XFxkXFxkKS8pLHQudGltZXpvbmUpKTtnLnp6ej1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbjIoXCJ0aW1lem9uZVwiKSx0LnRpbWV6b25lKSk7Zy50aW1lU3VmZml4PV8uZWFjaChfLmlnbm9yZShnLndoaXRlU3BhY2UpLF8uc2V0KFtnLnR0LGcuenp6XSkpO2cudGltZT1fLmVhY2goXy5vcHRpb25hbChfLmlnbm9yZShfLnN0b2tlbihcIlRcIikpKSxnLmhtcyxnLnRpbWVTdWZmaXgpO2cuZD1fLmNhY2hlKF8ucHJvY2VzcyhfLmVhY2goXy5ydG9rZW4oL14oWzAtMl1cXGR8M1swLTFdfFxcZCkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGQ9Xy5jYWNoZShfLnByb2Nlc3MoXy5lYWNoKF8ucnRva2VuKC9eKFswLTJdXFxkfDNbMC0xXSkvKSxfLm9wdGlvbmFsKGcuY3Rva2VuMihcIm9yZGluYWxTdWZmaXhcIikpKSx0LmRheSkpO2cuZGRkPWcuZGRkZD1fLmNhY2hlKF8ucHJvY2VzcyhnLmN0b2tlbihcInN1biBtb24gdHVlIHdlZCB0aHUgZnJpIHNhdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLndlZWtkYXk9czt9O30pKTtnLk09Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oMVswLTJdfDBcXGR8XFxkKS8pLHQubW9udGgpKTtnLk1NPV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKDFbMC0yXXwwXFxkKS8pLHQubW9udGgpKTtnLk1NTT1nLk1NTU09Xy5jYWNoZShfLnByb2Nlc3MoZy5jdG9rZW4oXCJqYW4gZmViIG1hciBhcHIgbWF5IGp1biBqdWwgYXVnIHNlcCBvY3Qgbm92IGRlY1wiKSx0Lm1vbnRoKSk7Zy55PV8uY2FjaGUoXy5wcm9jZXNzKF8ucnRva2VuKC9eKFxcZFxcZD8pLyksdC55ZWFyKSk7Zy55eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGQpLyksdC55ZWFyKSk7Zy55eXk9Xy5jYWNoZShfLnByb2Nlc3MoXy5ydG9rZW4oL14oXFxkXFxkP1xcZD9cXGQ/KS8pLHQueWVhcikpO2cueXl5eT1fLmNhY2hlKF8ucHJvY2VzcyhfLnJ0b2tlbigvXihcXGRcXGRcXGRcXGQpLyksdC55ZWFyKSk7X2ZuPWZ1bmN0aW9uKCl7cmV0dXJuIF8uZWFjaChfLmFueS5hcHBseShudWxsLGFyZ3VtZW50cyksXy5ub3QoZy5jdG9rZW4yKFwidGltZUNvbnRleHRcIikpKTt9O2cuZGF5PV9mbihnLmQsZy5kZCk7Zy5tb250aD1fZm4oZy5NLGcuTU1NKTtnLnllYXI9X2ZuKGcueXl5eSxnLnl5KTtnLm9yaWVudGF0aW9uPV8ucHJvY2VzcyhnLmN0b2tlbihcInBhc3QgZnV0dXJlXCIpLGZ1bmN0aW9uKHMpe3JldHVybiBmdW5jdGlvbigpe3RoaXMub3JpZW50PXM7fTt9KTtnLm9wZXJhdG9yPV8ucHJvY2VzcyhnLmN0b2tlbihcImFkZCBzdWJ0cmFjdFwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLm9wZXJhdG9yPXM7fTt9KTtnLnJkYXk9Xy5wcm9jZXNzKGcuY3Rva2VuKFwieWVzdGVyZGF5IHRvbW9ycm93IHRvZGF5IG5vd1wiKSx0LnJkYXkpO2cudW5pdD1fLnByb2Nlc3MoZy5jdG9rZW4oXCJzZWNvbmQgbWludXRlIGhvdXIgZGF5IHdlZWsgbW9udGggeWVhclwiKSxmdW5jdGlvbihzKXtyZXR1cm4gZnVuY3Rpb24oKXt0aGlzLnVuaXQ9czt9O30pO2cudmFsdWU9Xy5wcm9jZXNzKF8ucnRva2VuKC9eXFxkXFxkPyhzdHxuZHxyZHx0aCk/LyksZnVuY3Rpb24ocyl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhpcy52YWx1ZT1zLnJlcGxhY2UoL1xcRC9nLFwiXCIpO307fSk7Zy5leHByZXNzaW9uPV8uc2V0KFtnLnJkYXksZy5vcGVyYXRvcixnLnZhbHVlLGcudW5pdCxnLm9yaWVudGF0aW9uLGcuZGRkLGcuTU1NXSk7X2ZuPWZ1bmN0aW9uKCl7cmV0dXJuIF8uc2V0KGFyZ3VtZW50cyxnLmRhdGVQYXJ0RGVsaW1pdGVyKTt9O2cubWR5PV9mbihnLmRkZCxnLm1vbnRoLGcuZGF5LGcueWVhcik7Zy55bWQ9X2ZuKGcuZGRkLGcueWVhcixnLm1vbnRoLGcuZGF5KTtnLmRteT1fZm4oZy5kZGQsZy5kYXksZy5tb250aCxnLnllYXIpO2cuZGF0ZT1mdW5jdGlvbihzKXtyZXR1cm4oKGdbJEMuZGF0ZUVsZW1lbnRPcmRlcl18fGcubWR5KS5jYWxsKHRoaXMscykpO307Zy5mb3JtYXQ9Xy5wcm9jZXNzKF8ubWFueShfLmFueShfLnByb2Nlc3MoXy5ydG9rZW4oL14oZGQ/ZD9kP3xNTT9NP00/fHl5P3k/eT98aGg/fEhIP3xtbT98c3M/fHR0P3x6ej96PykvKSxmdW5jdGlvbihmbXQpe2lmKGdbZm10XSl7cmV0dXJuIGdbZm10XTt9ZWxzZXt0aHJvdyAkRC5QYXJzaW5nLkV4Y2VwdGlvbihmbXQpO319KSxfLnByb2Nlc3MoXy5ydG9rZW4oL15bXmRNeWhIbXN0el0rLyksZnVuY3Rpb24ocyl7cmV0dXJuIF8uaWdub3JlKF8uc3Rva2VuKHMpKTt9KSkpLGZ1bmN0aW9uKHJ1bGVzKXtyZXR1cm4gXy5wcm9jZXNzKF8uZWFjaC5hcHBseShudWxsLHJ1bGVzKSx0LmZpbmlzaEV4YWN0KTt9KTt2YXIgX0Y9e307dmFyIF9nZXQ9ZnVuY3Rpb24oZil7cmV0dXJuIF9GW2ZdPShfRltmXXx8Zy5mb3JtYXQoZilbMF0pO307Zy5mb3JtYXRzPWZ1bmN0aW9uKGZ4KXtpZihmeCBpbnN0YW5jZW9mIEFycmF5KXt2YXIgcng9W107Zm9yKHZhciBpPTA7aTxmeC5sZW5ndGg7aSsrKXtyeC5wdXNoKF9nZXQoZnhbaV0pKTt9XG5yZXR1cm4gXy5hbnkuYXBwbHkobnVsbCxyeCk7fWVsc2V7cmV0dXJuIF9nZXQoZngpO319O2cuX2Zvcm1hdHM9Zy5mb3JtYXRzKFtcIlxcXCJ5eXl5LU1NLWRkVEhIOm1tOnNzWlxcXCJcIixcInl5eXktTU0tZGRUSEg6bW06c3NaXCIsXCJ5eXl5LU1NLWRkVEhIOm1tOnNzelwiLFwieXl5eS1NTS1kZFRISDptbTpzc1wiLFwieXl5eS1NTS1kZFRISDptbVpcIixcInl5eXktTU0tZGRUSEg6bW16XCIsXCJ5eXl5LU1NLWRkVEhIOm1tXCIsXCJkZGQsIE1NTSBkZCwgeXl5eSBIOm1tOnNzIHR0XCIsXCJkZGQgTU1NIGQgeXl5eSBISDptbTpzcyB6enpcIixcIk1NZGR5eXl5XCIsXCJkZE1NeXl5eVwiLFwiTWRkeXl5eVwiLFwiZGRNeXl5eVwiLFwiTWR5eXl5XCIsXCJkTXl5eXlcIixcInl5eXlcIixcIk1keXlcIixcImRNeXlcIixcImRcIl0pO2cuX3N0YXJ0PV8ucHJvY2VzcyhfLnNldChbZy5kYXRlLGcudGltZSxnLmV4cHJlc3Npb25dLGcuZ2VuZXJhbERlbGltaXRlcixnLndoaXRlU3BhY2UpLHQuZmluaXNoKTtnLnN0YXJ0PWZ1bmN0aW9uKHMpe3RyeXt2YXIgcj1nLl9mb3JtYXRzLmNhbGwoe30scyk7aWYoclsxXS5sZW5ndGg9PT0wKXtyZXR1cm4gcjt9fWNhdGNoKGUpe31cbnJldHVybiBnLl9zdGFydC5jYWxsKHt9LHMpO307JEQuX3BhcnNlPSRELnBhcnNlOyRELnBhcnNlPWZ1bmN0aW9uKHMpe3ZhciByPW51bGw7aWYoIXMpe3JldHVybiBudWxsO31cbmlmKHMgaW5zdGFuY2VvZiBEYXRlKXtyZXR1cm4gczt9XG50cnl7cj0kRC5HcmFtbWFyLnN0YXJ0LmNhbGwoe30scy5yZXBsYWNlKC9eXFxzKihcXFMqKFxccytcXFMrKSopXFxzKiQvLFwiJDFcIikpO31jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG5yZXR1cm4oKHJbMV0ubGVuZ3RoPT09MCk/clswXTpudWxsKTt9OyRELmdldFBhcnNlRnVuY3Rpb249ZnVuY3Rpb24oZngpe3ZhciBmbj0kRC5HcmFtbWFyLmZvcm1hdHMoZngpO3JldHVybiBmdW5jdGlvbihzKXt2YXIgcj1udWxsO3RyeXtyPWZuLmNhbGwoe30scyk7fWNhdGNoKGUpe3JldHVybiBudWxsO31cbnJldHVybigoclsxXS5sZW5ndGg9PT0wKT9yWzBdOm51bGwpO307fTskRC5wYXJzZUV4YWN0PWZ1bmN0aW9uKHMsZngpe3JldHVybiAkRC5nZXRQYXJzZUZ1bmN0aW9uKGZ4KShzKTt9O30oKSk7XHJcblxufSkocmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpKSIsIihmdW5jdGlvbigpey8vLyBLbm9ja291dCBNYXBwaW5nIHBsdWdpbiB2Mi4zLjJcbi8vLyAoYykgMjAxMiBTdGV2ZW4gU2FuZGVyc29uLCBSb3kgSmFjb2JzIC0gaHR0cDovL2tub2Nrb3V0anMuY29tL1xuLy8vIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0Ly8gTW9kdWxlIHN5c3RlbXMgbWFnaWMgZGFuY2UuXG5cblx0aWYgKHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTIG9yIE5vZGU6IGhhcmQtY29kZWQgZGVwZW5kZW5jeSBvbiBcImtub2Nrb3V0XCJcblx0XHRmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dC1jbGllbnRcIiksIGV4cG9ydHMpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmVbXCJhbWRcIl0pIHtcblx0XHQvLyBBTUQgYW5vbnltb3VzIG1vZHVsZSB3aXRoIGhhcmQtY29kZWQgZGVwZW5kZW5jeSBvbiBcImtub2Nrb3V0XCJcblx0XHRkZWZpbmUoW1wia25vY2tvdXRcIiwgXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcblx0fSBlbHNlIHtcblx0XHQvLyA8c2NyaXB0PiB0YWc6IHVzZSB0aGUgZ2xvYmFsIGBrb2Agb2JqZWN0LCBhdHRhY2hpbmcgYSBgbWFwcGluZ2AgcHJvcGVydHlcblx0XHRmYWN0b3J5KGtvLCBrby5tYXBwaW5nID0ge30pO1xuXHR9XG59KGZ1bmN0aW9uIChrbywgZXhwb3J0cykge1xuXHR2YXIgREVCVUc9dHJ1ZTtcblx0dmFyIG1hcHBpbmdQcm9wZXJ0eSA9IFwiX19rb19tYXBwaW5nX19cIjtcblx0dmFyIHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGUgPSBrby5kZXBlbmRlbnRPYnNlcnZhYmxlO1xuXHR2YXIgbWFwcGluZ05lc3RpbmcgPSAwO1xuXHR2YXIgZGVwZW5kZW50T2JzZXJ2YWJsZXM7XG5cdHZhciB2aXNpdGVkT2JqZWN0cztcblx0dmFyIHJlY29nbml6ZWRSb290UHJvcGVydGllcyA9IFtcImNyZWF0ZVwiLCBcInVwZGF0ZVwiLCBcImtleVwiLCBcImFycmF5Q2hhbmdlZFwiXTtcblx0dmFyIGVtcHR5UmV0dXJuID0ge307XG5cblx0dmFyIF9kZWZhdWx0T3B0aW9ucyA9IHtcblx0XHRpbmNsdWRlOiBbXCJfZGVzdHJveVwiXSxcblx0XHRpZ25vcmU6IFtdLFxuXHRcdGNvcHk6IFtdXG5cdH07XG5cdHZhciBkZWZhdWx0T3B0aW9ucyA9IF9kZWZhdWx0T3B0aW9ucztcblxuXHQvLyBBdXRob3I6IEtlbm55VE0gQCBTdGFja092ZXJmbG93XG5cdGZ1bmN0aW9uIHVuaW9uQXJyYXlzICh4LCB5KSB7XG5cdFx0dmFyIG9iaiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSB4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgLS0gaSkgb2JqW3hbaV1dID0geFtpXTtcblx0XHRmb3IgKHZhciBpID0geS5sZW5ndGggLSAxOyBpID49IDA7IC0tIGkpIG9ialt5W2ldXSA9IHlbaV07XG5cdFx0dmFyIHJlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgayBpbiBvYmopIHtcblx0XHRcdHJlcy5wdXNoKG9ialtrXSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiByZXM7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmRPYmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuXHRcdGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcblx0XHRcdGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzb3VyY2Vba2V5XSkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGRlc3RpbmF0aW9uW2tleV0gJiYgIShleHBvcnRzLmdldFR5cGUoZGVzdGluYXRpb25ba2V5XSkgPT09IFwiYXJyYXlcIikpIHtcblx0XHRcdFx0XHRleHRlbmRPYmplY3QoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBib3RoQXJyYXlzID0gZXhwb3J0cy5nZXRUeXBlKGRlc3RpbmF0aW9uW2tleV0pID09PSBcImFycmF5XCIgJiYgZXhwb3J0cy5nZXRUeXBlKHNvdXJjZVtrZXldKSA9PT0gXCJhcnJheVwiO1xuXHRcdFx0XHRcdGlmIChib3RoQXJyYXlzKSB7XG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gdW5pb25BcnJheXMoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMikge1xuXHRcdHZhciBtZXJnZWQgPSB7fTtcblx0XHRleHRlbmRPYmplY3QobWVyZ2VkLCBvYmoxKTtcblx0XHRleHRlbmRPYmplY3QobWVyZ2VkLCBvYmoyKTtcblxuXHRcdHJldHVybiBtZXJnZWQ7XG5cdH1cblxuXHRleHBvcnRzLmlzTWFwcGVkID0gZnVuY3Rpb24gKHZpZXdNb2RlbCkge1xuXHRcdHZhciB1bndyYXBwZWQgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZpZXdNb2RlbCk7XG5cdFx0cmV0dXJuIHVud3JhcHBlZCAmJiB1bndyYXBwZWRbbWFwcGluZ1Byb3BlcnR5XTtcblx0fVxuXG5cdGV4cG9ydHMuZnJvbUpTID0gZnVuY3Rpb24gKGpzT2JqZWN0IC8qLCBpbnB1dE9wdGlvbnMsIHRhcmdldCovICkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby5mcm9tSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtcblxuXHRcdC8vIFdoZW4gbWFwcGluZyBpcyBjb21wbGV0ZWQsIGV2ZW4gd2l0aCBhbiBleGNlcHRpb24sIHJlc2V0IHRoZSBuZXN0aW5nIGxldmVsXG5cdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0bWFwcGluZ05lc3RpbmcgPSAwO1xuXHRcdH0sIDApO1xuXG5cdFx0aWYgKCFtYXBwaW5nTmVzdGluZysrKSB7XG5cdFx0XHRkZXBlbmRlbnRPYnNlcnZhYmxlcyA9IFtdO1xuXHRcdFx0dmlzaXRlZE9iamVjdHMgPSBuZXcgb2JqZWN0TG9va3VwKCk7XG5cdFx0fVxuXG5cdFx0dmFyIG9wdGlvbnM7XG5cdFx0dmFyIHRhcmdldDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcblx0XHRcdGlmIChhcmd1bWVudHNbMV1bbWFwcGluZ1Byb3BlcnR5XSkge1xuXHRcdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzJdO1xuXHRcdH1cblxuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdG9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCB0YXJnZXRbbWFwcGluZ1Byb3BlcnR5XSk7XG5cdFx0fVxuXHRcdG9wdGlvbnMgPSBmaWxsT3B0aW9ucyhvcHRpb25zKTtcblxuXHRcdHZhciByZXN1bHQgPSB1cGRhdGVWaWV3TW9kZWwodGFyZ2V0LCBqc09iamVjdCwgb3B0aW9ucyk7XG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0cmVzdWx0ID0gdGFyZ2V0O1xuXHRcdH1cblxuXHRcdC8vIEV2YWx1YXRlIGFueSBkZXBlbmRlbnQgb2JzZXJ2YWJsZXMgdGhhdCB3ZXJlIHByb3hpZWQuXG5cdFx0Ly8gRG8gdGhpcyBpbiBhIHRpbWVvdXQgdG8gZGVmZXIgZXhlY3V0aW9uLiBCYXNpY2FsbHksIGFueSB1c2VyIGNvZGUgdGhhdCBleHBsaWNpdGx5IGxvb2tzIHVwIHRoZSBETyB3aWxsIHBlcmZvcm0gdGhlIGZpcnN0IGV2YWx1YXRpb24uIE90aGVyd2lzZSxcblx0XHQvLyBpdCB3aWxsIGJlIGRvbmUgYnkgdGhpcyBjb2RlLlxuXHRcdGlmICghLS1tYXBwaW5nTmVzdGluZykge1xuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR3aGlsZSAoZGVwZW5kZW50T2JzZXJ2YWJsZXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIERPID0gZGVwZW5kZW50T2JzZXJ2YWJsZXMucG9wKCk7XG5cdFx0XHRcdFx0aWYgKERPKSBETygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cblx0XHQvLyBTYXZlIGFueSBuZXcgbWFwcGluZyBvcHRpb25zIGluIHRoZSB2aWV3IG1vZGVsLCBzbyB0aGF0IHVwZGF0ZUZyb21KUyBjYW4gdXNlIHRoZW0gbGF0ZXIuXG5cdFx0cmVzdWx0W21hcHBpbmdQcm9wZXJ0eV0gPSBtZXJnZShyZXN1bHRbbWFwcGluZ1Byb3BlcnR5XSwgb3B0aW9ucyk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGV4cG9ydHMuZnJvbUpTT04gPSBmdW5jdGlvbiAoanNvblN0cmluZyAvKiwgb3B0aW9ucywgdGFyZ2V0Ki8gKSB7XG5cdFx0dmFyIHBhcnNlZCA9IGtvLnV0aWxzLnBhcnNlSnNvbihqc29uU3RyaW5nKTtcblx0XHRhcmd1bWVudHNbMF0gPSBwYXJzZWQ7XG5cdFx0cmV0dXJuIGV4cG9ydHMuZnJvbUpTLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH07XG5cblx0ZXhwb3J0cy51cGRhdGVGcm9tSlMgPSBmdW5jdGlvbiAodmlld01vZGVsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy51cGRhdGVGcm9tSlMsIHVzZSBrby5tYXBwaW5nLmZyb21KUyBpbnN0ZWFkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBvcmRlciBvZiBwYXJhbWV0ZXJzIGlzIGRpZmZlcmVudCFcIik7XG5cdH07XG5cblx0ZXhwb3J0cy51cGRhdGVGcm9tSlNPTiA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJrby5tYXBwaW5nLnVwZGF0ZUZyb21KU09OLCB1c2Uga28ubWFwcGluZy5mcm9tSlNPTiBpbnN0ZWFkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBvcmRlciBvZiBwYXJhbWV0ZXJzIGlzIGRpZmZlcmVudCFcIik7XG5cdH07XG5cblx0ZXhwb3J0cy50b0pTID0gZnVuY3Rpb24gKHJvb3RPYmplY3QsIG9wdGlvbnMpIHtcblx0XHRpZiAoIWRlZmF1bHRPcHRpb25zKSBleHBvcnRzLnJlc2V0RGVmYXVsdE9wdGlvbnMoKTtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHRocm93IG5ldyBFcnJvcihcIldoZW4gY2FsbGluZyBrby5tYXBwaW5nLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGRlZmF1bHRPcHRpb25zLmlnbm9yZSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmlnbm9yZSBzaG91bGQgYmUgYW4gYXJyYXkuXCIpO1xuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuaW5jbHVkZSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmluY2x1ZGUgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGRlZmF1bHRPcHRpb25zLmNvcHkpICE9PSBcImFycmF5XCIpIHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcuZGVmYXVsdE9wdGlvbnMoKS5jb3B5IHNob3VsZCBiZSBhbiBhcnJheS5cIik7XG5cblx0XHQvLyBNZXJnZSBpbiB0aGUgb3B0aW9ucyB1c2VkIGluIGZyb21KU1xuXHRcdG9wdGlvbnMgPSBmaWxsT3B0aW9ucyhvcHRpb25zLCByb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0pO1xuXG5cdFx0Ly8gV2UganVzdCB1bndyYXAgZXZlcnl0aGluZyBhdCBldmVyeSBsZXZlbCBpbiB0aGUgb2JqZWN0IGdyYXBoXG5cdFx0cmV0dXJuIGV4cG9ydHMudmlzaXRNb2RlbChyb290T2JqZWN0LCBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoeClcblx0XHR9LCBvcHRpb25zKTtcblx0fTtcblxuXHRleHBvcnRzLnRvSlNPTiA9IGZ1bmN0aW9uIChyb290T2JqZWN0LCBvcHRpb25zKSB7XG5cdFx0dmFyIHBsYWluSmF2YVNjcmlwdE9iamVjdCA9IGV4cG9ydHMudG9KUyhyb290T2JqZWN0LCBvcHRpb25zKTtcblx0XHRyZXR1cm4ga28udXRpbHMuc3RyaW5naWZ5SnNvbihwbGFpbkphdmFTY3JpcHRPYmplY3QpO1xuXHR9O1xuXG5cdGV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRkZWZhdWx0T3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuXHRcdH1cblx0fTtcblxuXHRleHBvcnRzLnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRpbmNsdWRlOiBfZGVmYXVsdE9wdGlvbnMuaW5jbHVkZS5zbGljZSgwKSxcblx0XHRcdGlnbm9yZTogX2RlZmF1bHRPcHRpb25zLmlnbm9yZS5zbGljZSgwKSxcblx0XHRcdGNvcHk6IF9kZWZhdWx0T3B0aW9ucy5jb3B5LnNsaWNlKDApXG5cdFx0fTtcblx0fTtcblxuXHRleHBvcnRzLmdldFR5cGUgPSBmdW5jdGlvbih4KSB7XG5cdFx0aWYgKCh4KSAmJiAodHlwZW9mICh4KSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdGlmICh4LmNvbnN0cnVjdG9yID09IChuZXcgRGF0ZSkuY29uc3RydWN0b3IpIHJldHVybiBcImRhdGVcIjtcblx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09IFwiW29iamVjdCBBcnJheV1cIikgcmV0dXJuIFwiYXJyYXlcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGVvZiB4O1xuXHR9XG5cblx0ZnVuY3Rpb24gZmlsbE9wdGlvbnMocmF3T3B0aW9ucywgb3RoZXJPcHRpb25zKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSBtZXJnZSh7fSwgcmF3T3B0aW9ucyk7XG5cblx0XHQvLyBNb3ZlIHJlY29nbml6ZWQgcm9vdC1sZXZlbCBwcm9wZXJ0aWVzIGludG8gYSByb290IG5hbWVzcGFjZVxuXHRcdGZvciAodmFyIGkgPSByZWNvZ25pemVkUm9vdFByb3BlcnRpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdHZhciBwcm9wZXJ0eSA9IHJlY29nbml6ZWRSb290UHJvcGVydGllc1tpXTtcblx0XHRcdFxuXHRcdFx0Ly8gQ2Fycnkgb24sIHVubGVzcyB0aGlzIHByb3BlcnR5IGlzIHByZXNlbnRcblx0XHRcdGlmICghb3B0aW9uc1twcm9wZXJ0eV0pIGNvbnRpbnVlO1xuXHRcdFx0XG5cdFx0XHQvLyBNb3ZlIHRoZSBwcm9wZXJ0eSBpbnRvIHRoZSByb290IG5hbWVzcGFjZVxuXHRcdFx0aWYgKCEob3B0aW9uc1tcIlwiXSBpbnN0YW5jZW9mIE9iamVjdCkpIG9wdGlvbnNbXCJcIl0gPSB7fTtcblx0XHRcdG9wdGlvbnNbXCJcIl1bcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XG5cdFx0XHRkZWxldGUgb3B0aW9uc1twcm9wZXJ0eV07XG5cdFx0fVxuXG5cdFx0aWYgKG90aGVyT3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucy5pZ25vcmUgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuaWdub3JlLCBvcHRpb25zLmlnbm9yZSk7XG5cdFx0XHRvcHRpb25zLmluY2x1ZGUgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuaW5jbHVkZSwgb3B0aW9ucy5pbmNsdWRlKTtcblx0XHRcdG9wdGlvbnMuY29weSA9IG1lcmdlQXJyYXlzKG90aGVyT3B0aW9ucy5jb3B5LCBvcHRpb25zLmNvcHkpO1xuXHRcdH1cblx0XHRvcHRpb25zLmlnbm9yZSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuaWdub3JlLCBkZWZhdWx0T3B0aW9ucy5pZ25vcmUpO1xuXHRcdG9wdGlvbnMuaW5jbHVkZSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuaW5jbHVkZSwgZGVmYXVsdE9wdGlvbnMuaW5jbHVkZSk7XG5cdFx0b3B0aW9ucy5jb3B5ID0gbWVyZ2VBcnJheXMob3B0aW9ucy5jb3B5LCBkZWZhdWx0T3B0aW9ucy5jb3B5KTtcblxuXHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyA9IG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyB8fCB7fTtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlQXJyYXlzKGEsIGIpIHtcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGEpICE9PSBcImFycmF5XCIpIHtcblx0XHRcdGlmIChleHBvcnRzLmdldFR5cGUoYSkgPT09IFwidW5kZWZpbmVkXCIpIGEgPSBbXTtcblx0XHRcdGVsc2UgYSA9IFthXTtcblx0XHR9XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShiKSAhPT0gXCJhcnJheVwiKSB7XG5cdFx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKGIpID09PSBcInVuZGVmaW5lZFwiKSBiID0gW107XG5cdFx0XHRlbHNlIGIgPSBbYl07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXMoYS5jb25jYXQoYikpO1xuXHR9XG5cblx0Ly8gV2hlbiB1c2luZyBhICdjcmVhdGUnIGNhbGxiYWNrLCB3ZSBwcm94eSB0aGUgZGVwZW5kZW50IG9ic2VydmFibGUgc28gdGhhdCBpdCBkb2Vzbid0IGltbWVkaWF0ZWx5IGV2YWx1YXRlIG9uIGNyZWF0aW9uLlxuXHQvLyBUaGUgcmVhc29uIGlzIHRoYXQgdGhlIGRlcGVuZGVudCBvYnNlcnZhYmxlcyBpbiB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBub3QgYmVlbiBtYXBwZWQgeWV0LlxuXHRmdW5jdGlvbiB3aXRoUHJveHlEZXBlbmRlbnRPYnNlcnZhYmxlKGRlcGVuZGVudE9ic2VydmFibGVzLCBjYWxsYmFjaykge1xuXHRcdHZhciBsb2NhbERPID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHJlYWQsIG93bmVyLCBvcHRpb25zKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdFx0aWYgKHJlYWQgJiYgdHlwZW9mIHJlYWQgPT0gXCJvYmplY3RcIikgeyAvLyBtaXJyb3JzIGNvbmRpdGlvbiBpbiBrbm9ja291dCBpbXBsZW1lbnRhdGlvbiBvZiBETydzXG5cdFx0XHRcdG9wdGlvbnMgPSByZWFkO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmVhbERlZmVyRXZhbHVhdGlvbiA9IG9wdGlvbnMuZGVmZXJFdmFsdWF0aW9uO1xuXG5cdFx0XHR2YXIgaXNSZW1vdmVkID0gZmFsc2U7XG5cblx0XHRcdC8vIFdlIHdyYXAgdGhlIG9yaWdpbmFsIGRlcGVuZGVudCBvYnNlcnZhYmxlIHNvIHRoYXQgd2UgY2FuIHJlbW92ZSBpdCBmcm9tIHRoZSAnZGVwZW5kZW50T2JzZXJ2YWJsZXMnIGxpc3Qgd2UgbmVlZCB0byBldmFsdWF0ZSBhZnRlciBtYXBwaW5nIGhhc1xuXHRcdFx0Ly8gY29tcGxldGVkIGlmIHRoZSB1c2VyIGFscmVhZHkgZXZhbHVhdGVkIHRoZSBETyB0aGVtc2VsdmVzIGluIHRoZSBtZWFudGltZS5cblx0XHRcdHZhciB3cmFwID0gZnVuY3Rpb24gKERPKSB7XG5cdFx0XHRcdC8vIFRlbXBvcmFyaWx5IHJldmVydCBrby5kZXBlbmRlbnRPYnNlcnZhYmxlLCBzaW5jZSBpdCBpcyB1c2VkIGluIGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZVxuXHRcdFx0XHR2YXIgdG1wID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHRcdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IHJlYWxLb0RlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0XHRcdHZhciBpc1dyaXRlYWJsZSA9IGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShETyk7XG5cdFx0XHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSB0bXA7XG5cblx0XHRcdFx0dmFyIHdyYXBwZWQgPSByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlKHtcblx0XHRcdFx0XHRyZWFkOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWlzUmVtb3ZlZCkge1xuXHRcdFx0XHRcdFx0XHRrby51dGlscy5hcnJheVJlbW92ZUl0ZW0oZGVwZW5kZW50T2JzZXJ2YWJsZXMsIERPKTtcblx0XHRcdFx0XHRcdFx0aXNSZW1vdmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBETy5hcHBseShETywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHdyaXRlOiBpc1dyaXRlYWJsZSAmJiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gRE8odmFsKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGRlZmVyRXZhbHVhdGlvbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKERFQlVHKSB3cmFwcGVkLl93cmFwcGVyID0gdHJ1ZTtcblx0XHRcdFx0cmV0dXJuIHdyYXBwZWQ7XG5cdFx0XHR9O1xuXHRcdFx0XG5cdFx0XHRvcHRpb25zLmRlZmVyRXZhbHVhdGlvbiA9IHRydWU7IC8vIHdpbGwgZWl0aGVyIHNldCBmb3IganVzdCBvcHRpb25zLCBvciBib3RoIHJlYWQvb3B0aW9ucy5cblx0XHRcdHZhciByZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSA9IG5ldyByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlKHJlYWQsIG93bmVyLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKCFyZWFsRGVmZXJFdmFsdWF0aW9uKSB7XG5cdFx0XHRcdHJlYWxEZXBlbmRlbnRPYnNlcnZhYmxlID0gd3JhcChyZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSk7XG5cdFx0XHRcdGRlcGVuZGVudE9ic2VydmFibGVzLnB1c2gocmVhbERlcGVuZGVudE9ic2VydmFibGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVhbERlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0fVxuXHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUuZm4gPSByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlLmZuO1xuXHRcdGtvLmNvbXB1dGVkID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcblx0XHR2YXIgcmVzdWx0ID0gY2FsbGJhY2soKTtcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gbG9jYWxETztcblx0XHRrby5jb21wdXRlZCA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRSb290T2JqZWN0LCByb290T2JqZWN0LCBvcHRpb25zLCBwYXJlbnROYW1lLCBwYXJlbnQsIHBhcmVudFByb3BlcnR5TmFtZSwgbWFwcGVkUGFyZW50KSB7XG5cdFx0dmFyIGlzQXJyYXkgPSBleHBvcnRzLmdldFR5cGUoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSkgPT09IFwiYXJyYXlcIjtcblxuXHRcdHBhcmVudFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZSB8fCBcIlwiO1xuXG5cdFx0Ly8gSWYgdGhpcyBvYmplY3Qgd2FzIGFscmVhZHkgbWFwcGVkIHByZXZpb3VzbHksIHRha2UgdGhlIG9wdGlvbnMgZnJvbSB0aGVyZSBhbmQgbWVyZ2UgdGhlbSB3aXRoIG91ciBleGlzdGluZyBvbmVzLlxuXHRcdGlmIChleHBvcnRzLmlzTWFwcGVkKG1hcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHR2YXIgcHJldmlvdXNNYXBwaW5nID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KVttYXBwaW5nUHJvcGVydHldO1xuXHRcdFx0b3B0aW9ucyA9IG1lcmdlKHByZXZpb3VzTWFwcGluZywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0dmFyIGNhbGxiYWNrUGFyYW1zID0ge1xuXHRcdFx0ZGF0YTogcm9vdE9iamVjdCxcblx0XHRcdHBhcmVudDogbWFwcGVkUGFyZW50XG5cdFx0fTtcblxuXHRcdHZhciBoYXNDcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlIGluc3RhbmNlb2YgRnVuY3Rpb247XG5cdFx0fTtcblxuXHRcdHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRyZXR1cm4gd2l0aFByb3h5RGVwZW5kZW50T2JzZXJ2YWJsZShkZXBlbmRlbnRPYnNlcnZhYmxlcywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocGFyZW50KSBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlKHtcblx0XHRcdFx0XHRcdGRhdGE6IGRhdGEgfHwgY2FsbGJhY2tQYXJhbXMuZGF0YSxcblx0XHRcdFx0XHRcdHBhcmVudDogY2FsbGJhY2tQYXJhbXMucGFyZW50LFxuXHRcdFx0XHRcdFx0c2tpcDogZW1wdHlSZXR1cm5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXS5jcmVhdGUoe1xuXHRcdFx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxuXHRcdFx0XHRcdFx0cGFyZW50OiBjYWxsYmFja1BhcmFtcy5wYXJlbnRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVx0XHRcdFx0XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGhhc1VwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS51cGRhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcblx0XHR9O1xuXG5cdFx0dmFyIHVwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG9iaiwgZGF0YSkge1xuXHRcdFx0dmFyIHBhcmFtcyA9IHtcblx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxuXHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudCxcblx0XHRcdFx0dGFyZ2V0OiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG9iailcblx0XHRcdH07XG5cblx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUob2JqKSkge1xuXHRcdFx0XHRwYXJhbXMub2JzZXJ2YWJsZSA9IG9iajtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0udXBkYXRlKHBhcmFtcyk7XG5cdFx0fVxuXG5cdFx0dmFyIGFscmVhZHlNYXBwZWQgPSB2aXNpdGVkT2JqZWN0cy5nZXQocm9vdE9iamVjdCk7XG5cdFx0aWYgKGFscmVhZHlNYXBwZWQpIHtcblx0XHRcdHJldHVybiBhbHJlYWR5TWFwcGVkO1xuXHRcdH1cblxuXHRcdHBhcmVudE5hbWUgPSBwYXJlbnROYW1lIHx8IFwiXCI7XG5cblx0XHRpZiAoIWlzQXJyYXkpIHtcblx0XHRcdC8vIEZvciBhdG9taWMgdHlwZXMsIGRvIGEgZGlyZWN0IHVwZGF0ZSBvbiB0aGUgb2JzZXJ2YWJsZVxuXHRcdFx0aWYgKCFjYW5IYXZlUHJvcGVydGllcyhyb290T2JqZWN0KSkge1xuXHRcdFx0XHRzd2l0Y2ggKGV4cG9ydHMuZ2V0VHlwZShyb290T2JqZWN0KSkge1xuXHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShyb290T2JqZWN0KSkge1xuXHRcdFx0XHRcdFx0XHRyb290T2JqZWN0KHVwZGF0ZUNhbGxiYWNrKHJvb3RPYmplY3QpKTtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHJvb3RPYmplY3Q7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0gdXBkYXRlQ2FsbGJhY2socm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSByb290T2JqZWN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmFsdWVUb1dyaXRlID0gdXBkYXRlQ2FsbGJhY2sobWFwcGVkUm9vdE9iamVjdCk7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QodmFsdWVUb1dyaXRlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlVG9Xcml0ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZVRvV3JpdGUgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHZhbHVlVG9Xcml0ZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVRvV3JpdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChoYXNDcmVhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBjcmVhdGVDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBrby5vYnNlcnZhYmxlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCkpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCh1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0aWYgKCFtYXBwZWRSb290T2JqZWN0KSB7XG5cdFx0XHRcdFx0aWYgKGhhc0NyZWF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSBjcmVhdGVDYWxsYmFjaygpO1xuXG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSB1cGRhdGVDYWxsYmFjayhyZXN1bHQpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlQ2FsbGJhY2socmVzdWx0KTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHt9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChoYXNVcGRhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHVwZGF0ZUNhbGxiYWNrKG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmlzaXRlZE9iamVjdHMuc2F2ZShyb290T2JqZWN0LCBtYXBwZWRSb290T2JqZWN0KTtcblx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xuXG5cdFx0XHRcdC8vIEZvciBub24tYXRvbWljIHR5cGVzLCB2aXNpdCBhbGwgcHJvcGVydGllcyBhbmQgdXBkYXRlIHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uIChpbmRleGVyKSB7XG5cdFx0XHRcdFx0dmFyIGZ1bGxQcm9wZXJ0eU5hbWUgPSBwYXJlbnRQcm9wZXJ0eU5hbWUubGVuZ3RoID8gcGFyZW50UHJvcGVydHlOYW1lICsgXCIuXCIgKyBpbmRleGVyIDogaW5kZXhlcjtcblxuXHRcdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pZ25vcmUsIGZ1bGxQcm9wZXJ0eU5hbWUpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmNvcHksIGZ1bGxQcm9wZXJ0eU5hbWUpICE9IC0xKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gcm9vdE9iamVjdFtpbmRleGVyXTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJbiBjYXNlIHdlIGFyZSBhZGRpbmcgYW4gYWxyZWFkeSBtYXBwZWQgcHJvcGVydHksIGZpbGwgaXQgd2l0aCB0aGUgcHJldmlvdXNseSBtYXBwZWQgcHJvcGVydHkgdmFsdWUgdG8gcHJldmVudCByZWN1cnNpb24uXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHByb3BlcnR5IHRoYXQgd2FzIGdlbmVyYXRlZCBieSBmcm9tSlMsIHdlIHNob3VsZCB1c2UgdGhlIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlXG5cdFx0XHRcdFx0dmFyIHByZXZNYXBwZWRQcm9wZXJ0eSA9IHZpc2l0ZWRPYmplY3RzLmdldChyb290T2JqZWN0W2luZGV4ZXJdKTtcblx0XHRcdFx0XHR2YXIgcmV0dmFsID0gdXBkYXRlVmlld01vZGVsKG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0sIHJvb3RPYmplY3RbaW5kZXhlcl0sIG9wdGlvbnMsIGluZGV4ZXIsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIG1hcHBlZFJvb3RPYmplY3QpO1xuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHByZXZNYXBwZWRQcm9wZXJ0eSB8fCByZXR2YWw7XG5cblx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0pKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUodmFsdWUpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllc1tmdWxsUHJvcGVydHlOYW1lXSA9IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7IC8vbWFwcGVkUm9vdE9iamVjdCBpcyBhbiBhcnJheVxuXHRcdFx0dmFyIGNoYW5nZXMgPSBbXTtcblxuXHRcdFx0dmFyIGhhc0tleUNhbGxiYWNrID0gZmFsc2U7XG5cdFx0XHR2YXIga2V5Q2FsbGJhY2sgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRyZXR1cm4geDtcblx0XHRcdH1cblx0XHRcdGlmIChvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0ua2V5KSB7XG5cdFx0XHRcdGtleUNhbGxiYWNrID0gb3B0aW9uc1twYXJlbnROYW1lXS5rZXk7XG5cdFx0XHRcdGhhc0tleUNhbGxiYWNrID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFrby5pc09ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCkpIHtcblx0XHRcdFx0Ly8gV2hlbiBjcmVhdGluZyB0aGUgbmV3IG9ic2VydmFibGUgYXJyYXksIGFsc28gYWRkIGEgYnVuY2ggb2YgdXRpbGl0eSBmdW5jdGlvbnMgdGhhdCB0YWtlIHRoZSAna2V5JyBvZiB0aGUgYXJyYXkgaXRlbXMgaW50byBhY2NvdW50LlxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZFJlbW92ZSA9IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7XG5cdFx0XHRcdFx0dmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBrZXlDYWxsYmFjayh2YWx1ZU9yUHJlZGljYXRlKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QucmVtb3ZlKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZGljYXRlKGtleUNhbGxiYWNrKGl0ZW0pKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkUmVtb3ZlQWxsID0gZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcblx0XHRcdFx0XHR2YXIgYXJyYXlPZktleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KGFycmF5T2ZWYWx1ZXMsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5yZW1vdmUoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXlPZktleXMsIGtleUNhbGxiYWNrKGl0ZW0pKSAhPSAtMTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkRGVzdHJveSA9IGZ1bmN0aW9uICh2YWx1ZU9yUHJlZGljYXRlKSB7XG5cdFx0XHRcdFx0dmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBrZXlDYWxsYmFjayh2YWx1ZU9yUHJlZGljYXRlKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QuZGVzdHJveShmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWRpY2F0ZShrZXlDYWxsYmFjayhpdGVtKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZERlc3Ryb3lBbGwgPSBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykge1xuXHRcdFx0XHRcdHZhciBhcnJheU9mS2V5cyA9IGZpbHRlckFycmF5QnlLZXkoYXJyYXlPZlZhbHVlcywga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LmRlc3Ryb3koZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBrby51dGlscy5hcnJheUluZGV4T2YoYXJyYXlPZktleXMsIGtleUNhbGxiYWNrKGl0ZW0pKSAhPSAtMTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdFx0dmFyIGtleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QoKSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHZhciBrZXkgPSBrZXlDYWxsYmFjayhpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZENyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdGlmIChtYXBwZWRSb290T2JqZWN0Lm1hcHBlZEluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYWxyZWFkeSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUga2V5IHRoYXQgeW91IHNwZWNpZmllZC5cIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBoYXNDcmVhdGVDYWxsYmFjaygpID8gY3JlYXRlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcblx0XHRcdFx0XHRcdHZhciBuZXdWYWx1ZSA9IHVwZGF0ZUNhbGxiYWNrKGl0ZW0sIHZhbHVlKTtcblx0XHRcdFx0XHRcdGlmIChrby5pc1dyaXRlYWJsZU9ic2VydmFibGUoaXRlbSkpIHtcblx0XHRcdFx0XHRcdFx0aXRlbShuZXdWYWx1ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpdGVtID0gbmV3VmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QucHVzaChpdGVtKTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY3VycmVudEFycmF5S2V5cyA9IGZpbHRlckFycmF5QnlLZXkoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KSwga2V5Q2FsbGJhY2spLnNvcnQoKTtcblx0XHRcdHZhciBuZXdBcnJheUtleXMgPSBmaWx0ZXJBcnJheUJ5S2V5KHJvb3RPYmplY3QsIGtleUNhbGxiYWNrKTtcblx0XHRcdGlmIChoYXNLZXlDYWxsYmFjaykgbmV3QXJyYXlLZXlzLnNvcnQoKTtcblx0XHRcdHZhciBlZGl0U2NyaXB0ID0ga28udXRpbHMuY29tcGFyZUFycmF5cyhjdXJyZW50QXJyYXlLZXlzLCBuZXdBcnJheUtleXMpO1xuXG5cdFx0XHR2YXIgaWdub3JlSW5kZXhPZiA9IHt9O1xuXHRcdFx0XG5cdFx0XHR2YXIgaSwgajtcblxuXHRcdFx0dmFyIHVud3JhcHBlZFJvb3RPYmplY3QgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpO1xuXHRcdFx0dmFyIGl0ZW1zQnlLZXkgPSB7fTtcblx0XHRcdHZhciBvcHRpbWl6ZWRLZXlzID0gdHJ1ZTtcblx0XHRcdGZvciAoaSA9IDAsIGogPSB1bndyYXBwZWRSb290T2JqZWN0Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xuXHRcdFx0XHR2YXIga2V5ID0ga2V5Q2FsbGJhY2sodW53cmFwcGVkUm9vdE9iamVjdFtpXSk7XG5cdFx0XHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgaW5zdGFuY2VvZiBPYmplY3QpIHtcblx0XHRcdFx0XHRvcHRpbWl6ZWRLZXlzID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0aXRlbXNCeUtleVtrZXldID0gdW53cmFwcGVkUm9vdE9iamVjdFtpXTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5ld0NvbnRlbnRzID0gW107XG5cdFx0XHR2YXIgcGFzc2VkT3ZlciA9IDA7XG5cdFx0XHRmb3IgKGkgPSAwLCBqID0gZWRpdFNjcmlwdC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdFx0dmFyIGtleSA9IGVkaXRTY3JpcHRbaV07XG5cdFx0XHRcdHZhciBtYXBwZWRJdGVtO1xuXHRcdFx0XHR2YXIgZnVsbFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZSArIFwiW1wiICsgaSArIFwiXVwiO1xuXHRcdFx0XHRzd2l0Y2ggKGtleS5zdGF0dXMpIHtcblx0XHRcdFx0Y2FzZSBcImFkZGVkXCI6XG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBvcHRpbWl6ZWRLZXlzID8gaXRlbXNCeUtleVtrZXkudmFsdWVdIDogZ2V0SXRlbUJ5S2V5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdG1hcHBlZEl0ZW0gPSB1cGRhdGVWaWV3TW9kZWwodW5kZWZpbmVkLCBpdGVtLCBvcHRpb25zLCBwYXJlbnROYW1lLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBwYXJlbnQpO1xuXHRcdFx0XHRcdGlmKCFoYXNDcmVhdGVDYWxsYmFjaygpKSB7XG5cdFx0XHRcdFx0XHRtYXBwZWRJdGVtID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRJdGVtKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgaW5kZXggPSBpZ25vcmFibGVJbmRleE9mKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGl0ZW0sIGlnbm9yZUluZGV4T2YpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChtYXBwZWRJdGVtID09PSBlbXB0eVJldHVybikge1xuXHRcdFx0XHRcdFx0cGFzc2VkT3ZlcisrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRuZXdDb250ZW50c1tpbmRleCAtIHBhc3NlZE92ZXJdID0gbWFwcGVkSXRlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZ25vcmVJbmRleE9mW2luZGV4XSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZXRhaW5lZFwiOlxuXHRcdFx0XHRcdHZhciBpdGVtID0gb3B0aW1pemVkS2V5cyA/IGl0ZW1zQnlLZXlba2V5LnZhbHVlXSA6IGdldEl0ZW1CeUtleShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gZ2V0SXRlbUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QsIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRJdGVtLCBpdGVtLCBvcHRpb25zLCBwYXJlbnROYW1lLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBwYXJlbnQpO1xuXG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gaWdub3JhYmxlSW5kZXhPZihrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBpdGVtLCBpZ25vcmVJbmRleE9mKTtcblx0XHRcdFx0XHRuZXdDb250ZW50c1tpbmRleF0gPSBtYXBwZWRJdGVtO1xuXHRcdFx0XHRcdGlnbm9yZUluZGV4T2ZbaW5kZXhdID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlbGV0ZWRcIjpcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gZ2V0SXRlbUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QsIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtcblx0XHRcdFx0XHRldmVudDoga2V5LnN0YXR1cyxcblx0XHRcdFx0XHRpdGVtOiBtYXBwZWRJdGVtXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRtYXBwZWRSb290T2JqZWN0KG5ld0NvbnRlbnRzKTtcblxuXHRcdFx0aWYgKG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS5hcnJheUNoYW5nZWQpIHtcblx0XHRcdFx0a28udXRpbHMuYXJyYXlGb3JFYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0XHRcdFx0XHRvcHRpb25zW3BhcmVudE5hbWVdLmFycmF5Q2hhbmdlZChjaGFuZ2UuZXZlbnQsIGNoYW5nZS5pdGVtKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XG5cdH1cblxuXHRmdW5jdGlvbiBpZ25vcmFibGVJbmRleE9mKGFycmF5LCBpdGVtLCBpZ25vcmVJbmRpY2VzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdGlmIChpZ25vcmVJbmRpY2VzW2ldID09PSB0cnVlKSBjb250aW51ZTtcblx0XHRcdGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWFwS2V5KGl0ZW0sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG1hcHBlZEl0ZW07XG5cdFx0aWYgKGNhbGxiYWNrKSBtYXBwZWRJdGVtID0gY2FsbGJhY2soaXRlbSk7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShtYXBwZWRJdGVtKSA9PT0gXCJ1bmRlZmluZWRcIikgbWFwcGVkSXRlbSA9IGl0ZW07XG5cblx0XHRyZXR1cm4ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRJdGVtKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEl0ZW1CeUtleShhcnJheSwga2V5LCBjYWxsYmFjaykge1xuXHRcdGFycmF5ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShhcnJheSk7XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYXJyYXlbaV07XG5cdFx0XHRpZiAobWFwS2V5KGl0ZW0sIGNhbGxiYWNrKSA9PT0ga2V5KSByZXR1cm4gaXRlbTtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28udXBkYXRlKiwgdGhlIGtleSAnXCIgKyBrZXkgKyBcIicgd2FzIG5vdCBmb3VuZCFcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBmaWx0ZXJBcnJheUJ5S2V5KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHJldHVybiBrby51dGlscy5hcnJheU1hcChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5KSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHRyZXR1cm4gbWFwS2V5KGl0ZW0sIGNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXMocm9vdE9iamVjdCwgdmlzaXRvckNhbGxiYWNrKSB7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShyb290T2JqZWN0KSA9PT0gXCJhcnJheVwiKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvb3RPYmplY3QubGVuZ3RoOyBpKyspXG5cdFx0XHR2aXNpdG9yQ2FsbGJhY2soaSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiByb290T2JqZWN0KVxuXHRcdFx0dmlzaXRvckNhbGxiYWNrKHByb3BlcnR5TmFtZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGNhbkhhdmVQcm9wZXJ0aWVzKG9iamVjdCkge1xuXHRcdHZhciB0eXBlID0gZXhwb3J0cy5nZXRUeXBlKG9iamVjdCk7XG5cdFx0cmV0dXJuICgodHlwZSA9PT0gXCJvYmplY3RcIikgfHwgKHR5cGUgPT09IFwiYXJyYXlcIikpICYmIChvYmplY3QgIT09IG51bGwpO1xuXHR9XG5cblx0Ly8gQmFzZWQgb24gdGhlIHBhcmVudE5hbWUsIHRoaXMgY3JlYXRlcyBhIGZ1bGx5IGNsYXNzaWZpZWQgbmFtZSBvZiBhIHByb3BlcnR5XG5cblx0ZnVuY3Rpb24gZ2V0UHJvcGVydHlOYW1lKHBhcmVudE5hbWUsIHBhcmVudCwgaW5kZXhlcikge1xuXHRcdHZhciBwcm9wZXJ0eU5hbWUgPSBwYXJlbnROYW1lIHx8IFwiXCI7XG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShwYXJlbnQpID09PSBcImFycmF5XCIpIHtcblx0XHRcdGlmIChwYXJlbnROYW1lKSB7XG5cdFx0XHRcdHByb3BlcnR5TmFtZSArPSBcIltcIiArIGluZGV4ZXIgKyBcIl1cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHBhcmVudE5hbWUpIHtcblx0XHRcdFx0cHJvcGVydHlOYW1lICs9IFwiLlwiO1xuXHRcdFx0fVxuXHRcdFx0cHJvcGVydHlOYW1lICs9IGluZGV4ZXI7XG5cdFx0fVxuXHRcdHJldHVybiBwcm9wZXJ0eU5hbWU7XG5cdH1cblxuXHRleHBvcnRzLnZpc2l0TW9kZWwgPSBmdW5jdGlvbiAocm9vdE9iamVjdCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHRvcHRpb25zLnZpc2l0ZWRPYmplY3RzID0gb3B0aW9ucy52aXNpdGVkT2JqZWN0cyB8fCBuZXcgb2JqZWN0TG9va3VwKCk7XG5cblx0XHR2YXIgbWFwcGVkUm9vdE9iamVjdDtcblx0XHR2YXIgdW53cmFwcGVkUm9vdE9iamVjdCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCk7XG5cblx0XHRpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKHVud3JhcHBlZFJvb3RPYmplY3QpKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2socm9vdE9iamVjdCwgb3B0aW9ucy5wYXJlbnROYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMsIHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSk7XG5cblx0XHRcdC8vIE9ubHkgZG8gYSBjYWxsYmFjaywgYnV0IGlnbm9yZSB0aGUgcmVzdWx0c1xuXHRcdFx0Y2FsbGJhY2socm9vdE9iamVjdCwgb3B0aW9ucy5wYXJlbnROYW1lKTtcblx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBleHBvcnRzLmdldFR5cGUodW53cmFwcGVkUm9vdE9iamVjdCkgPT09IFwiYXJyYXlcIiA/IFtdIDoge307XG5cdFx0fVxuXG5cdFx0b3B0aW9ucy52aXNpdGVkT2JqZWN0cy5zYXZlKHJvb3RPYmplY3QsIG1hcHBlZFJvb3RPYmplY3QpO1xuXG5cdFx0dmFyIHBhcmVudE5hbWUgPSBvcHRpb25zLnBhcmVudE5hbWU7XG5cdFx0dmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXModW53cmFwcGVkUm9vdE9iamVjdCwgZnVuY3Rpb24gKGluZGV4ZXIpIHtcblx0XHRcdGlmIChvcHRpb25zLmlnbm9yZSAmJiBrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pZ25vcmUsIGluZGV4ZXIpICE9IC0xKSByZXR1cm47XG5cblx0XHRcdHZhciBwcm9wZXJ0eVZhbHVlID0gdW53cmFwcGVkUm9vdE9iamVjdFtpbmRleGVyXTtcblx0XHRcdG9wdGlvbnMucGFyZW50TmFtZSA9IGdldFByb3BlcnR5TmFtZShwYXJlbnROYW1lLCB1bndyYXBwZWRSb290T2JqZWN0LCBpbmRleGVyKTtcblxuXHRcdFx0Ly8gSWYgd2UgZG9uJ3Qgd2FudCB0byBleHBsaWNpdGx5IGNvcHkgdGhlIHVubWFwcGVkIHByb3BlcnR5Li4uXG5cdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuY29weSwgaW5kZXhlcikgPT09IC0xKSB7XG5cdFx0XHRcdC8vIC4uLmZpbmQgb3V0IGlmIGl0J3MgYSBwcm9wZXJ0eSB3ZSB3YW50IHRvIGV4cGxpY2l0bHkgaW5jbHVkZVxuXHRcdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuaW5jbHVkZSwgaW5kZXhlcikgPT09IC0xKSB7XG5cdFx0XHRcdFx0Ly8gVGhlIG1hcHBlZCBwcm9wZXJ0aWVzIG9iamVjdCBjb250YWlucyBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCB3ZXJlIHBhcnQgb2YgdGhlIG9yaWdpbmFsIG9iamVjdC5cblx0XHRcdFx0XHQvLyBJZiBhIHByb3BlcnR5IGRvZXMgbm90IGV4aXN0LCBhbmQgaXQgaXMgbm90IGJlY2F1c2UgaXQgaXMgcGFydCBvZiBhbiBhcnJheSAoZS5nLiBcIm15UHJvcFszXVwiKSwgdGhlbiBpdCBzaG91bGQgbm90IGJlIHVubWFwcGVkLlxuXHRcdFx0XHRcdGlmICh1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0gJiYgdW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldLm1hcHBlZFByb3BlcnRpZXMgJiYgIXVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XS5tYXBwZWRQcm9wZXJ0aWVzW2luZGV4ZXJdICYmICEoZXhwb3J0cy5nZXRUeXBlKHVud3JhcHBlZFJvb3RPYmplY3QpID09PSBcImFycmF5XCIpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvdXRwdXRQcm9wZXJ0eTtcblx0XHRcdHN3aXRjaCAoZXhwb3J0cy5nZXRUeXBlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocHJvcGVydHlWYWx1ZSkpKSB7XG5cdFx0XHRjYXNlIFwib2JqZWN0XCI6XG5cdFx0XHRjYXNlIFwiYXJyYXlcIjpcblx0XHRcdGNhc2UgXCJ1bmRlZmluZWRcIjpcblx0XHRcdFx0dmFyIHByZXZpb3VzbHlNYXBwZWRWYWx1ZSA9IG9wdGlvbnMudmlzaXRlZE9iamVjdHMuZ2V0KHByb3BlcnR5VmFsdWUpO1xuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gKGV4cG9ydHMuZ2V0VHlwZShwcmV2aW91c2x5TWFwcGVkVmFsdWUpICE9PSBcInVuZGVmaW5lZFwiKSA/IHByZXZpb3VzbHlNYXBwZWRWYWx1ZSA6IGV4cG9ydHMudmlzaXRNb2RlbChwcm9wZXJ0eVZhbHVlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IGNhbGxiYWNrKHByb3BlcnR5VmFsdWUsIG9wdGlvbnMucGFyZW50TmFtZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNpbXBsZU9iamVjdExvb2t1cCgpIHtcblx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdHZhciB2YWx1ZXMgPSBbXTtcblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0dmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2Yoa2V5cywga2V5KTtcblx0XHRcdGlmIChleGlzdGluZ0luZGV4ID49IDApIHZhbHVlc1tleGlzdGluZ0luZGV4XSA9IHZhbHVlO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR0aGlzLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHZhciBleGlzdGluZ0luZGV4ID0ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XG5cdFx0XHR2YXIgdmFsdWUgPSAoZXhpc3RpbmdJbmRleCA+PSAwKSA/IHZhbHVlc1tleGlzdGluZ0luZGV4XSA6IHVuZGVmaW5lZDtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9O1xuXHR9O1xuXHRcblx0ZnVuY3Rpb24gb2JqZWN0TG9va3VwKCkge1xuXHRcdHZhciBidWNrZXRzID0ge307XG5cdFx0XG5cdFx0dmFyIGZpbmRCdWNrZXQgPSBmdW5jdGlvbihrZXkpIHtcblx0XHRcdHZhciBidWNrZXRLZXk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRidWNrZXRLZXkgPSBrZXk7Ly9KU09OLnN0cmluZ2lmeShrZXkpO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0YnVja2V0S2V5ID0gXCIkJCRcIjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJ1Y2tldCA9IGJ1Y2tldHNbYnVja2V0S2V5XTtcblx0XHRcdGlmIChidWNrZXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRidWNrZXQgPSBuZXcgc2ltcGxlT2JqZWN0TG9va3VwKCk7XG5cdFx0XHRcdGJ1Y2tldHNbYnVja2V0S2V5XSA9IGJ1Y2tldDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWNrZXQ7XG5cdFx0fTtcblx0XHRcblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0ZmluZEJ1Y2tldChrZXkpLnNhdmUoa2V5LCB2YWx1ZSk7XG5cdFx0fTtcblx0XHR0aGlzLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBmaW5kQnVja2V0KGtleSkuZ2V0KGtleSk7XG5cdFx0fTtcblx0fTtcbn0pKTtcbn0pKCkiLCIvLyBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjIuMS4wXG4vLyAoYykgU3RldmVuIFNhbmRlcnNvbiAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbi8vIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG5cbihmdW5jdGlvbih3aW5kb3csZG9jdW1lbnQsbmF2aWdhdG9yLHVuZGVmaW5lZCl7XG5mdW5jdGlvbiBtKHcpe3Rocm93IHc7fXZhciBuPXZvaWQgMCxwPSEwLHM9bnVsbCx0PSExO2Z1bmN0aW9uIEEodyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHd9fTtmdW5jdGlvbiBFKHcpe2Z1bmN0aW9uIEIoYixjLGQpe2QmJmMhPT1hLmsucihiKSYmYS5rLlMoYixjKTtjIT09YS5rLnIoYikmJmEuYS52YShiLFwiY2hhbmdlXCIpfXZhciBhPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygdz93Ont9O2EuYj1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZD1iLnNwbGl0KFwiLlwiKSxmPWEsZz0wO2c8ZC5sZW5ndGgtMTtnKyspZj1mW2RbZ11dO2ZbZFtkLmxlbmd0aC0xXV09Y307YS5CPWZ1bmN0aW9uKGEsYyxkKXthW2NdPWR9O2EudmVyc2lvbj1cIjIuMS4wXCI7YS5iKFwidmVyc2lvblwiLGEudmVyc2lvbik7YS5hPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXtpZihcImlucHV0XCIhPT1hLmEubyhiKXx8IWIudHlwZXx8XCJjbGlja1wiIT1jLnRvTG93ZXJDYXNlKCkpcmV0dXJuIHQ7dmFyIGU9Yi50eXBlO3JldHVyblwiY2hlY2tib3hcIj09ZXx8XCJyYWRpb1wiPT1lfXZhciBjPS9eKFxcc3xcXHUwMEEwKSt8KFxcc3xcXHUwMEEwKSskL2csZD17fSxmPXt9O2RbL0ZpcmVmb3hcXC8yL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KT9cblwiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO2QuTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtmb3IodmFyIGcgaW4gZCl7dmFyIGU9ZFtnXTtpZihlLmxlbmd0aClmb3IodmFyIGg9MCxqPWUubGVuZ3RoO2g8ajtoKyspZltlW2hdXT1nfXZhciBrPXtwcm9wZXJ0eWNoYW5nZTpwfSxpPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7Yi5pbm5lckhUTUw9XCI8XFwhLS1baWYgZ3QgSUUgXCIrICsrYStcIl0+PGk+PC9pPjwhW2VuZGlmXS0tXFw+XCIsY1swXTspO3JldHVybiA0PGE/YTpufSgpO3JldHVybntDYTpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLFxudjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGU9YS5sZW5ndGg7YzxlO2MrKyliKGFbY10pfSxqOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGM9MCxlPWEubGVuZ3RoO2M8ZTtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LGFiOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoO2U8ZjtlKyspaWYoYi5jYWxsKGMsYVtlXSkpcmV0dXJuIGFbZV07cmV0dXJuIHN9LGJhOmZ1bmN0aW9uKGIsYyl7dmFyIGU9YS5hLmooYixjKTswPD1lJiZiLnNwbGljZShlLDEpfSx6YTpmdW5jdGlvbihiKXtmb3IodmFyIGI9Ynx8W10sYz1bXSxlPTAsZj1iLmxlbmd0aDtlPGY7ZSsrKTA+YS5hLmooYyxiW2VdKSYmYy5wdXNoKGJbZV0pO3JldHVybiBjfSxUOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBhPWF8fFtdLGM9W10sXG5lPTAsZj1hLmxlbmd0aDtlPGY7ZSsrKWMucHVzaChiKGFbZV0pKTtyZXR1cm4gY30sYWE6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGE9YXx8W10sYz1bXSxlPTAsZj1hLmxlbmd0aDtlPGY7ZSsrKWIoYVtlXSkmJmMucHVzaChhW2VdKTtyZXR1cm4gY30sTjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGU9Yi5sZW5ndGg7YzxlO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LGV4dGVuZDpmdW5jdGlvbihhLGIpe2lmKGIpZm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmKGFbY109YltjXSk7cmV0dXJuIGF9LGdhOmZ1bmN0aW9uKGIpe2Zvcig7Yi5maXJzdENoaWxkOylhLnJlbW92ZU5vZGUoYi5maXJzdENoaWxkKX0sQWI6ZnVuY3Rpb24oYil7Zm9yKHZhciBiPWEuYS5MKGIpLGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPTAsZj1iLmxlbmd0aDtlPGY7ZSsrKWEuRihiW2VdKSxcbmMuYXBwZW5kQ2hpbGQoYltlXSk7cmV0dXJuIGN9LFg6ZnVuY3Rpb24oYixjKXthLmEuZ2EoYik7aWYoYylmb3IodmFyIGU9MCxmPWMubGVuZ3RoO2U8ZjtlKyspYi5hcHBlbmRDaGlsZChjW2VdKX0sTmE6ZnVuY3Rpb24oYixjKXt2YXIgZT1iLm5vZGVUeXBlP1tiXTpiO2lmKDA8ZS5sZW5ndGgpe2Zvcih2YXIgZj1lWzBdLGQ9Zi5wYXJlbnROb2RlLGc9MCxoPWMubGVuZ3RoO2c8aDtnKyspZC5pbnNlcnRCZWZvcmUoY1tnXSxmKTtnPTA7Zm9yKGg9ZS5sZW5ndGg7ZzxoO2crKylhLnJlbW92ZU5vZGUoZVtnXSl9fSxQYTpmdW5jdGlvbihhLGIpezA8PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNlwiKT9hLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsYik6YS5zZWxlY3RlZD1ifSx3OmZ1bmN0aW9uKGEpe3JldHVybihhfHxcIlwiKS5yZXBsYWNlKGMsXCJcIil9LEliOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBlPVtdLGY9KGJ8fFwiXCIpLnNwbGl0KGMpLGc9MCxkPWYubGVuZ3RoO2c8XG5kO2crKyl7dmFyIGg9YS5hLncoZltnXSk7XCJcIiE9PWgmJmUucHVzaChoKX1yZXR1cm4gZX0sSGI6ZnVuY3Rpb24oYSxiKXthPWF8fFwiXCI7cmV0dXJuIGIubGVuZ3RoPmEubGVuZ3RoP3Q6YS5zdWJzdHJpbmcoMCxiLmxlbmd0aCk9PT1ifSxlYjpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1cInJldHVybiAoXCIrYStcIilcIixlPTA7ZTxiO2UrKyljPVwid2l0aChzY1tcIitlK1wiXSkgeyBcIitjK1wiIH0gXCI7cmV0dXJuIG5ldyBGdW5jdGlvbihcInNjXCIsYyl9LGtiOmZ1bmN0aW9uKGEsYil7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PShiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpJjE2KTtmb3IoO2EhPXM7KXtpZihhPT1iKXJldHVybiBwO2E9YS5wYXJlbnROb2RlfXJldHVybiB0fSxmYTpmdW5jdGlvbihiKXtyZXR1cm4gYS5hLmtiKGIsYi5vd25lckRvY3VtZW50KX0sbzpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS50YWdOYW1lJiZhLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0sXG5uOmZ1bmN0aW9uKGEsYyxlKXt2YXIgZj1pJiZrW2NdO2lmKCFmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5KXtpZihiKGEsYykpdmFyIGc9ZSxlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jaGVja2VkO2ImJih0aGlzLmNoZWNrZWQ9Yi5mYiE9PXApO2cuY2FsbCh0aGlzLGEpO3RoaXMuY2hlY2tlZD1jfTtqUXVlcnkoYSkuYmluZChjLGUpfWVsc2UhZiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihjLGUsdCk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuYXR0YWNoRXZlbnQ/YS5hdHRhY2hFdmVudChcIm9uXCIrYyxmdW5jdGlvbihiKXtlLmNhbGwoYSxiKX0pOm0oRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBhZGRFdmVudExpc3RlbmVyIG9yIGF0dGFjaEV2ZW50XCIpKX0sdmE6ZnVuY3Rpb24oYSxjKXsoIWF8fCFhLm5vZGVUeXBlKSYmbShFcnJvcihcImVsZW1lbnQgbXVzdCBiZSBhIERPTSBub2RlIHdoZW4gY2FsbGluZyB0cmlnZ2VyRXZlbnRcIikpO1xuaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSl7dmFyIGU9W107YihhLGMpJiZlLnB1c2goe2ZiOmEuY2hlY2tlZH0pO2pRdWVyeShhKS50cmlnZ2VyKGMsZSl9ZWxzZVwiZnVuY3Rpb25cIj09dHlwZW9mIGRvY3VtZW50LmNyZWF0ZUV2ZW50P1wiZnVuY3Rpb25cIj09dHlwZW9mIGEuZGlzcGF0Y2hFdmVudD8oZT1kb2N1bWVudC5jcmVhdGVFdmVudChmW2NdfHxcIkhUTUxFdmVudHNcIiksZS5pbml0RXZlbnQoYyxwLHAsd2luZG93LDAsMCwwLDAsMCx0LHQsdCx0LDAsYSksYS5kaXNwYXRjaEV2ZW50KGUpKTptKEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIikpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmZpcmVFdmVudD8oYihhLGMpJiYoYS5jaGVja2VkPWEuY2hlY2tlZCE9PXApLGEuZmlyZUV2ZW50KFwib25cIitjKSk6bShFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRyaWdnZXJpbmcgZXZlbnRzXCIpKX0sZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5sYShiKT9cbmIoKTpifSxVYTpmdW5jdGlvbihiLGMsZSl7dmFyIGY9KGIuY2xhc3NOYW1lfHxcIlwiKS5zcGxpdCgvXFxzKy8pLGc9MDw9YS5hLmooZixjKTtpZihlJiYhZyliLmNsYXNzTmFtZSs9KGZbMF0/XCIgXCI6XCJcIikrYztlbHNlIGlmKGcmJiFlKXtlPVwiXCI7Zm9yKGc9MDtnPGYubGVuZ3RoO2crKylmW2ddIT1jJiYoZSs9ZltnXStcIiBcIik7Yi5jbGFzc05hbWU9YS5hLncoZSl9fSxRYTpmdW5jdGlvbihiLGMpe3ZhciBlPWEuYS5kKGMpO2lmKGU9PT1zfHxlPT09billPVwiXCI7XCJpbm5lclRleHRcImluIGI/Yi5pbm5lclRleHQ9ZTpiLnRleHRDb250ZW50PWU7OTw9aSYmKGIuc3R5bGUuZGlzcGxheT1iLnN0eWxlLmRpc3BsYXkpfSxsYjpmdW5jdGlvbihhKXtpZig5PD1pKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxFYjpmdW5jdGlvbihiLGUpe2Zvcih2YXIgYj1hLmEuZChiKSxlPWEuYS5kKGUpLGM9W10sZj1iO2Y8PWU7ZisrKWMucHVzaChmKTtyZXR1cm4gY30sXG5MOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxlPTAsYz1hLmxlbmd0aDtlPGM7ZSsrKWIucHVzaChhW2VdKTtyZXR1cm4gYn0sdGI6Nj09PWksdWI6Nz09PWksamE6aSxEYTpmdW5jdGlvbihiLGUpe2Zvcih2YXIgYz1hLmEuTChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIikpLmNvbmNhdChhLmEuTChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxmPVwic3RyaW5nXCI9PXR5cGVvZiBlP2Z1bmN0aW9uKGEpe3JldHVybiBhLm5hbWU9PT1lfTpmdW5jdGlvbihhKXtyZXR1cm4gZS50ZXN0KGEubmFtZSl9LGc9W10sZD1jLmxlbmd0aC0xOzA8PWQ7ZC0tKWYoY1tkXSkmJmcucHVzaChjW2RdKTtyZXR1cm4gZ30sQmI6ZnVuY3Rpb24oYil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihiPWEuYS53KGIpKT93aW5kb3cuSlNPTiYmd2luZG93LkpTT04ucGFyc2U/d2luZG93LkpTT04ucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpzfSxzYTpmdW5jdGlvbihiLFxuZSxjKXsoXCJ1bmRlZmluZWRcIj09dHlwZW9mIEpTT058fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBKU09OLnN0cmluZ2lmeSkmJm0oRXJyb3IoXCJDYW5ub3QgZmluZCBKU09OLnN0cmluZ2lmeSgpLiBTb21lIGJyb3dzZXJzIChlLmcuLCBJRSA8IDgpIGRvbid0IHN1cHBvcnQgaXQgbmF0aXZlbHksIGJ1dCB5b3UgY2FuIG92ZXJjb21lIHRoaXMgYnkgYWRkaW5nIGEgc2NyaXB0IHJlZmVyZW5jZSB0byBqc29uMi5qcywgZG93bmxvYWRhYmxlIGZyb20gaHR0cDovL3d3dy5qc29uLm9yZy9qc29uMi5qc1wiKSk7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGEuYS5kKGIpLGUsYyl9LENiOmZ1bmN0aW9uKGIsZSxjKXt2YXIgYz1jfHx7fSxmPWMucGFyYW1zfHx7fSxnPWMuaW5jbHVkZUZpZWxkc3x8dGhpcy5DYSxkPWI7aWYoXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZm9ybVwiPT09YS5hLm8oYikpZm9yKHZhciBkPWIuYWN0aW9uLGg9Zy5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIGs9YS5hLkRhKGIsZ1toXSksXG5qPWsubGVuZ3RoLTE7MDw9ajtqLS0pZltrW2pdLm5hbWVdPWtbal0udmFsdWU7dmFyIGU9YS5hLmQoZSksaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtpLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7aS5hY3Rpb249ZDtpLm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHogaW4gZSliPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiLm5hbWU9eixiLnZhbHVlPWEuYS5zYShhLmEuZChlW3pdKSksaS5hcHBlbmRDaGlsZChiKTtmb3IoeiBpbiBmKWI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGIubmFtZT16LGIudmFsdWU9Zlt6XSxpLmFwcGVuZENoaWxkKGIpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaSk7Yy5zdWJtaXR0ZXI/Yy5zdWJtaXR0ZXIoaSk6aS5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGkpfSwwKX19fTthLmIoXCJ1dGlsc1wiLGEuYSk7YS5iKFwidXRpbHMuYXJyYXlGb3JFYWNoXCIsYS5hLnYpO1xuYS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5hYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEuYWEpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEuemEpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5qKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5UKTthLmIoXCJ1dGlscy5hcnJheVB1c2hBbGxcIixhLmEuTik7YS5iKFwidXRpbHMuYXJyYXlSZW1vdmVJdGVtXCIsYS5hLmJhKTthLmIoXCJ1dGlscy5leHRlbmRcIixhLmEuZXh0ZW5kKTthLmIoXCJ1dGlscy5maWVsZHNJbmNsdWRlZFdpdGhKc29uUG9zdFwiLGEuYS5DYSk7YS5iKFwidXRpbHMuZ2V0Rm9ybUZpZWxkc1wiLGEuYS5EYSk7YS5iKFwidXRpbHMucG9zdEpzb25cIixhLmEuQ2IpO2EuYihcInV0aWxzLnBhcnNlSnNvblwiLGEuYS5CYik7YS5iKFwidXRpbHMucmVnaXN0ZXJFdmVudEhhbmRsZXJcIixhLmEubik7YS5iKFwidXRpbHMuc3RyaW5naWZ5SnNvblwiLGEuYS5zYSk7YS5iKFwidXRpbHMucmFuZ2VcIixhLmEuRWIpO1xuYS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLlVhKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEudmEpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuZCk7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmR8fChGdW5jdGlvbi5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxhPWQuc2hpZnQoKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYy5hcHBseShhLGQuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX19KTthLmEuZj1uZXcgZnVuY3Rpb24oKXt2YXIgYj0wLGM9XCJfX2tvX19cIisobmV3IERhdGUpLmdldFRpbWUoKSxkPXt9O3JldHVybntnZXQ6ZnVuY3Rpb24oYixjKXt2YXIgZT1hLmEuZi5nZXRBbGwoYix0KTtyZXR1cm4gZT09PW4/bjplW2NdfSxzZXQ6ZnVuY3Rpb24oYixjLGUpe2U9PT1uJiZhLmEuZi5nZXRBbGwoYixcbnQpPT09bnx8KGEuYS5mLmdldEFsbChiLHApW2NdPWUpfSxnZXRBbGw6ZnVuY3Rpb24oYSxnKXt2YXIgZT1hW2NdO2lmKCEoZSYmXCJudWxsXCIhPT1lKSl7aWYoIWcpcmV0dXJuO2U9YVtjXT1cImtvXCIrYisrO2RbZV09e319cmV0dXJuIGRbZV19LGNsZWFyOmZ1bmN0aW9uKGEpe3ZhciBiPWFbY107YiYmKGRlbGV0ZSBkW2JdLGFbY109cyl9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5mKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmYuY2xlYXIpO2EuYS5HPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXt2YXIgZj1hLmEuZi5nZXQoYixkKTtmPT09biYmYyYmKGY9W10sYS5hLmYuc2V0KGIsZCxmKSk7cmV0dXJuIGZ9ZnVuY3Rpb24gYyhlKXt2YXIgZj1iKGUsdCk7aWYoZilmb3IodmFyIGY9Zi5zbGljZSgwKSxkPTA7ZDxmLmxlbmd0aDtkKyspZltkXShlKTthLmEuZi5jbGVhcihlKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGpRdWVyeS5jbGVhbkRhdGEmJlxualF1ZXJ5LmNsZWFuRGF0YShbZV0pO2lmKGdbZS5ub2RlVHlwZV0pZm9yKGY9ZS5maXJzdENoaWxkO2U9ZjspZj1lLm5leHRTaWJsaW5nLDg9PT1lLm5vZGVUeXBlJiZjKGUpfXZhciBkPVwiX19rb19kb21Ob2RlRGlzcG9zYWxfX1wiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLGY9ezE6cCw4OnAsOTpwfSxnPXsxOnAsOTpwfTtyZXR1cm57d2E6ZnVuY3Rpb24oYSxjKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBjJiZtKEVycm9yKFwiQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpKTtiKGEscCkucHVzaChjKX0sTWE6ZnVuY3Rpb24oYyxmKXt2YXIgZz1iKGMsdCk7ZyYmKGEuYS5iYShnLGYpLDA9PWcubGVuZ3RoJiZhLmEuZi5zZXQoYyxkLG4pKX0sRjpmdW5jdGlvbihiKXtpZihmW2Iubm9kZVR5cGVdJiYoYyhiKSxnW2Iubm9kZVR5cGVdKSl7dmFyIGQ9W107YS5hLk4oZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk7Zm9yKHZhciBiPTAsaj1kLmxlbmd0aDtiPGo7YisrKWMoZFtiXSl9fSxcbnJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5GKGIpO2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfX19O2EuRj1hLmEuRy5GO2EucmVtb3ZlTm9kZT1hLmEuRy5yZW1vdmVOb2RlO2EuYihcImNsZWFuTm9kZVwiLGEuRik7YS5iKFwicmVtb3ZlTm9kZVwiLGEucmVtb3ZlTm9kZSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsXCIsYS5hLkcpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2tcIixhLmEuRy53YSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFja1wiLGEuYS5HLk1hKTsoZnVuY3Rpb24oKXthLmEucGE9ZnVuY3Rpb24oYil7dmFyIGM7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSl7aWYoKGM9alF1ZXJ5LmNsZWFuKFtiXSkpJiZjWzBdKXtmb3IoYj1jWzBdO2IucGFyZW50Tm9kZSYmMTEhPT1iLnBhcmVudE5vZGUubm9kZVR5cGU7KWI9Yi5wYXJlbnROb2RlO2IucGFyZW50Tm9kZSYmXG5iLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9fWVsc2V7dmFyIGQ9YS5hLncoYikudG9Mb3dlckNhc2UoKTtjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZD1kLm1hdGNoKC9ePCh0aGVhZHx0Ym9keXx0Zm9vdCkvKSYmWzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXXx8IWQuaW5kZXhPZihcIjx0clwiKSYmWzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXXx8KCFkLmluZGV4T2YoXCI8dGRcIil8fCFkLmluZGV4T2YoXCI8dGhcIikpJiZbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdfHxbMCxcIlwiLFwiXCJdO2I9XCJpZ25vcmVkPGRpdj5cIitkWzFdK2IrZFsyXStcIjwvZGl2PlwiO2ZvcihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuaW5uZXJTaGl2P2MuYXBwZW5kQ2hpbGQod2luZG93LmlubmVyU2hpdihiKSk6Yy5pbm5lckhUTUw9YjtkWzBdLS07KWM9Yy5sYXN0Q2hpbGQ7Yz1hLmEuTChjLmxhc3RDaGlsZC5jaGlsZE5vZGVzKX1yZXR1cm4gY307XG5hLmEuWT1mdW5jdGlvbihiLGMpe2EuYS5nYShiKTtpZihjIT09cyYmYyE9PW4paWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMudG9TdHJpbmcoKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGpRdWVyeSlqUXVlcnkoYikuaHRtbChjKTtlbHNlIGZvcih2YXIgZD1hLmEucGEoYyksZj0wO2Y8ZC5sZW5ndGg7ZisrKWIuYXBwZW5kQ2hpbGQoZFtmXSl9fSkoKTthLmIoXCJ1dGlscy5wYXJzZUh0bWxGcmFnbWVudFwiLGEuYS5wYSk7YS5iKFwidXRpbHMuc2V0SHRtbFwiLGEuYS5ZKTthLnM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7cmV0dXJuKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKX1mdW5jdGlvbiBjKGIsZyl7aWYoYilpZig4PT1iLm5vZGVUeXBlKXt2YXIgZT1hLnMuSmEoYi5ub2RlVmFsdWUpO2UhPXMmJmcucHVzaCh7amI6Yix5YjplfSl9ZWxzZSBpZigxPT1iLm5vZGVUeXBlKWZvcih2YXIgZT0wLGQ9Yi5jaGlsZE5vZGVzLGo9ZC5sZW5ndGg7ZTxcbmo7ZSsrKWMoZFtlXSxnKX12YXIgZD17fTtyZXR1cm57bmE6ZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiIT10eXBlb2YgYSYmbShFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpKTt2YXIgYz1iKCkrYigpO2RbY109YTtyZXR1cm5cIjxcXCEtLVtrb19tZW1vOlwiK2MrXCJdLS1cXD5cIn0sVmE6ZnVuY3Rpb24oYSxiKXt2YXIgYz1kW2FdO2M9PT1uJiZtKEVycm9yKFwiQ291bGRuJ3QgZmluZCBhbnkgbWVtbyB3aXRoIElEIFwiK2ErXCIuIFBlcmhhcHMgaXQncyBhbHJlYWR5IGJlZW4gdW5tZW1vaXplZC5cIikpO3RyeXtyZXR1cm4gYy5hcHBseShzLGJ8fFtdKSxwfWZpbmFsbHl7ZGVsZXRlIGRbYV19fSxXYTpmdW5jdGlvbihiLGQpe3ZhciBlPVtdO2MoYixlKTtmb3IodmFyIGg9MCxqPWUubGVuZ3RoO2g8ajtoKyspe3ZhciBrPWVbaF0uamIsaT1ba107ZCYmYS5hLk4oaSxkKTthLnMuVmEoZVtoXS55YixpKTtrLm5vZGVWYWx1ZT1cIlwiO2sucGFyZW50Tm9kZSYmXG5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoayl9fSxKYTpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOnN9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEucyk7YS5iKFwibWVtb2l6YXRpb24ubWVtb2l6ZVwiLGEucy5uYSk7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS5zLlZhKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS5zLkphKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHNcIixhLnMuV2EpO2EuQmE9e3Rocm90dGxlOmZ1bmN0aW9uKGIsYyl7Yi50aHJvdHRsZUV2YWx1YXRpb249Yzt2YXIgZD1zO3JldHVybiBhLmgoe3JlYWQ6Yix3cml0ZTpmdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoZCk7ZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihhKX0sYyl9fSl9LG5vdGlmeTpmdW5jdGlvbihiLGMpe2IuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1jP0EodCk6YS5tLmZuLmVxdWFsaXR5Q29tcGFyZXI7XG5yZXR1cm4gYn19O2EuYihcImV4dGVuZGVyc1wiLGEuQmEpO2EuU2E9ZnVuY3Rpb24oYixjLGQpe3RoaXMudGFyZ2V0PWI7dGhpcy5jYT1jO3RoaXMuaWI9ZDthLkIodGhpcyxcImRpc3Bvc2VcIix0aGlzLkEpfTthLlNhLnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7dGhpcy5zYj1wO3RoaXMuaWIoKX07YS5SPWZ1bmN0aW9uKCl7dGhpcy51PXt9O2EuYS5leHRlbmQodGhpcyxhLlIuZm4pO2EuQih0aGlzLFwic3Vic2NyaWJlXCIsdGhpcy50YSk7YS5CKHRoaXMsXCJleHRlbmRcIix0aGlzLmV4dGVuZCk7YS5CKHRoaXMsXCJnZXRTdWJzY3JpcHRpb25zQ291bnRcIix0aGlzLm9iKX07YS5SLmZuPXt0YTpmdW5jdGlvbihiLGMsZCl7dmFyIGQ9ZHx8XCJjaGFuZ2VcIixiPWM/Yi5iaW5kKGMpOmIsZj1uZXcgYS5TYSh0aGlzLGIsZnVuY3Rpb24oKXthLmEuYmEodGhpcy51W2RdLGYpfS5iaW5kKHRoaXMpKTt0aGlzLnVbZF18fCh0aGlzLnVbZF09W10pO3RoaXMudVtkXS5wdXNoKGYpO3JldHVybiBmfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihiLFxuYyl7Yz1jfHxcImNoYW5nZVwiO3RoaXMudVtjXSYmYS5hLnYodGhpcy51W2NdLnNsaWNlKDApLGZ1bmN0aW9uKGEpe2EmJmEuc2IhPT1wJiZhLmNhKGIpfSl9LG9iOmZ1bmN0aW9uKCl7dmFyIGE9MCxjO2ZvcihjIGluIHRoaXMudSl0aGlzLnUuaGFzT3duUHJvcGVydHkoYykmJihhKz10aGlzLnVbY10ubGVuZ3RoKTtyZXR1cm4gYX0sZXh0ZW5kOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7aWYoYilmb3IodmFyIGQgaW4gYil7dmFyIGY9YS5CYVtkXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoYz1mKGMsYltkXSkpfXJldHVybiBjfX07YS5HYT1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTthLmIoXCJzdWJzY3JpYmFibGVcIixhLlIpO2EuYihcImlzU3Vic2NyaWJhYmxlXCIsYS5HYSk7YS5VPWZ1bmN0aW9uKCl7dmFyIGI9W107cmV0dXJue2JiOmZ1bmN0aW9uKGEpe2IucHVzaCh7Y2E6YSxBYTpbXX0pfSxcbmVuZDpmdW5jdGlvbigpe2IucG9wKCl9LExhOmZ1bmN0aW9uKGMpe2EuR2EoYyl8fG0oRXJyb3IoXCJPbmx5IHN1YnNjcmliYWJsZSB0aGluZ3MgY2FuIGFjdCBhcyBkZXBlbmRlbmNpZXNcIikpO2lmKDA8Yi5sZW5ndGgpe3ZhciBkPWJbYi5sZW5ndGgtMV07MDw9YS5hLmooZC5BYSxjKXx8KGQuQWEucHVzaChjKSxkLmNhKGMpKX19fX0oKTt2YXIgRz17dW5kZWZpbmVkOnAsXCJib29sZWFuXCI6cCxudW1iZXI6cCxzdHJpbmc6cH07YS5tPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKCFjLmVxdWFsaXR5Q29tcGFyZXJ8fCFjLmVxdWFsaXR5Q29tcGFyZXIoZCxhcmd1bWVudHNbMF0pKWMuSSgpLGQ9YXJndW1lbnRzWzBdLGMuSCgpO3JldHVybiB0aGlzfWEuVS5MYShjKTtyZXR1cm4gZH12YXIgZD1iO2EuUi5jYWxsKGMpO2MuSD1mdW5jdGlvbigpe2Mubm90aWZ5U3Vic2NyaWJlcnMoZCl9O2MuST1mdW5jdGlvbigpe2Mubm90aWZ5U3Vic2NyaWJlcnMoZCxcblwiYmVmb3JlQ2hhbmdlXCIpfTthLmEuZXh0ZW5kKGMsYS5tLmZuKTthLkIoYyxcInZhbHVlSGFzTXV0YXRlZFwiLGMuSCk7YS5CKGMsXCJ2YWx1ZVdpbGxNdXRhdGVcIixjLkkpO3JldHVybiBjfTthLm0uZm49e2VxdWFsaXR5Q29tcGFyZXI6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT09PXN8fHR5cGVvZiBhIGluIEc/YT09PWM6dH19O3ZhciB4PWEubS5EYj1cIl9fa29fcHJvdG9fX1wiO2EubS5mblt4XT1hLm07YS5pYT1mdW5jdGlvbihiLGMpe3JldHVybiBiPT09c3x8Yj09PW58fGJbeF09PT1uP3Q6Ylt4XT09PWM/cDphLmlhKGJbeF0sYyl9O2EubGE9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaWEoYixhLm0pfTthLkhhPWZ1bmN0aW9uKGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbeF09PT1hLm18fFwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbeF09PT1hLmgmJmIucGI/cDp0fTthLmIoXCJvYnNlcnZhYmxlXCIsYS5tKTthLmIoXCJpc09ic2VydmFibGVcIixhLmxhKTthLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixcbmEuSGEpO2EuUT1mdW5jdGlvbihiKXswPT1hcmd1bWVudHMubGVuZ3RoJiYoYj1bXSk7YiE9PXMmJihiIT09biYmIShcImxlbmd0aFwiaW4gYikpJiZtKEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIikpO3ZhciBjPWEubShiKTthLmEuZXh0ZW5kKGMsYS5RLmZuKTtyZXR1cm4gY307YS5RLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjPXRoaXMoKSxkPVtdLGY9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hOmZ1bmN0aW9uKGMpe3JldHVybiBjPT09YX0sZz0wO2c8Yy5sZW5ndGg7ZysrKXt2YXIgZT1jW2ddO2YoZSkmJigwPT09ZC5sZW5ndGgmJnRoaXMuSSgpLGQucHVzaChlKSxjLnNwbGljZShnLDEpLGctLSl9ZC5sZW5ndGgmJnRoaXMuSCgpO3JldHVybiBkfSxyZW1vdmVBbGw6ZnVuY3Rpb24oYil7aWYoYj09PW4pe3ZhciBjPXRoaXMoKSxcbmQ9Yy5zbGljZSgwKTt0aGlzLkkoKTtjLnNwbGljZSgwLGMubGVuZ3RoKTt0aGlzLkgoKTtyZXR1cm4gZH1yZXR1cm4hYj9bXTp0aGlzLnJlbW92ZShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLmooYixjKX0pfSxkZXN0cm95OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMoKSxkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTpmdW5jdGlvbihjKXtyZXR1cm4gYz09PWF9O3RoaXMuSSgpO2Zvcih2YXIgZj1jLmxlbmd0aC0xOzA8PWY7Zi0tKWQoY1tmXSkmJihjW2ZdLl9kZXN0cm95PXApO3RoaXMuSCgpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGIpe3JldHVybiBiPT09bj90aGlzLmRlc3Ryb3koQShwKSk6IWI/W106dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEuaihiLGMpfSl9LGluZGV4T2Y6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcygpO3JldHVybiBhLmEuaihjLGIpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy5pbmRleE9mKGEpOzA8PWQmJih0aGlzLkkoKSxcbnRoaXMoKVtkXT1jLHRoaXMuSCgpKX19O2EuYS52KFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2EuUS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTt0aGlzLkkoKTthPWFbYl0uYXBwbHkoYSxhcmd1bWVudHMpO3RoaXMuSCgpO3JldHVybiBhfX0pO2EuYS52KFtcInNsaWNlXCJdLGZ1bmN0aW9uKGIpe2EuUS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fSk7YS5iKFwib2JzZXJ2YWJsZUFycmF5XCIsYS5RKTthLmg9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoKXthLmEudih2LGZ1bmN0aW9uKGEpe2EuQSgpfSk7dj1bXX1mdW5jdGlvbiBnKCl7dmFyIGE9aC50aHJvdHRsZUV2YWx1YXRpb247YSYmMDw9YT8oY2xlYXJUaW1lb3V0KHgpLHg9c2V0VGltZW91dChlLGEpKTplKCl9ZnVuY3Rpb24gZSgpe2lmKCFsKWlmKGkmJncoKSl1KCk7ZWxzZXtsPVxucDt0cnl7dmFyIGI9YS5hLlQodixmdW5jdGlvbihhKXtyZXR1cm4gYS50YXJnZXR9KTthLlUuYmIoZnVuY3Rpb24oYyl7dmFyIGU7MDw9KGU9YS5hLmooYixjKSk/YltlXT1uOnYucHVzaChjLnRhKGcpKX0pO2Zvcih2YXIgZT1xLmNhbGwoYyksZj1iLmxlbmd0aC0xOzA8PWY7Zi0tKWJbZl0mJnYuc3BsaWNlKGYsMSlbMF0uQSgpO2k9cDtoLm5vdGlmeVN1YnNjcmliZXJzKGssXCJiZWZvcmVDaGFuZ2VcIik7az1lfWZpbmFsbHl7YS5VLmVuZCgpfWgubm90aWZ5U3Vic2NyaWJlcnMoayk7bD10fX1mdW5jdGlvbiBoKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKWouYXBwbHkoaCxhcmd1bWVudHMpO2Vsc2UgcmV0dXJuIGl8fGUoKSxhLlUuTGEoaCksa31mdW5jdGlvbiBqKCl7XCJmdW5jdGlvblwiPT09dHlwZW9mIG8/by5hcHBseShjLGFyZ3VtZW50cyk6bShFcnJvcihcIkNhbm5vdCB3cml0ZSBhIHZhbHVlIHRvIGEga28uY29tcHV0ZWQgdW5sZXNzIHlvdSBzcGVjaWZ5IGEgJ3dyaXRlJyBvcHRpb24uIElmIHlvdSB3aXNoIHRvIHJlYWQgdGhlIGN1cnJlbnQgdmFsdWUsIGRvbid0IHBhc3MgYW55IHBhcmFtZXRlcnMuXCIpKX1cbnZhciBrLGk9dCxsPXQscT1iO3EmJlwib2JqZWN0XCI9PXR5cGVvZiBxPyhkPXEscT1kLnJlYWQpOihkPWR8fHt9LHF8fChxPWQucmVhZCkpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIHEmJm0oRXJyb3IoXCJQYXNzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUga28uY29tcHV0ZWRcIikpO3ZhciBvPWQud3JpdGU7Y3x8KGM9ZC5vd25lcik7dmFyIHY9W10sdT1mLHI9XCJvYmplY3RcIj09dHlwZW9mIGQuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkP2QuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOnMsdz1kLmRpc3Bvc2VXaGVufHxBKHQpO2lmKHIpe3U9ZnVuY3Rpb24oKXthLmEuRy5NYShyLGFyZ3VtZW50cy5jYWxsZWUpO2YoKX07YS5hLkcud2Eocix1KTt2YXIgeT13LHc9ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmZhKHIpfHx5KCl9fXZhciB4PXM7aC5uYj1mdW5jdGlvbigpe3JldHVybiB2Lmxlbmd0aH07aC5wYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZC53cml0ZTtoLkE9ZnVuY3Rpb24oKXt1KCl9O1xuYS5SLmNhbGwoaCk7YS5hLmV4dGVuZChoLGEuaC5mbik7ZC5kZWZlckV2YWx1YXRpb24hPT1wJiZlKCk7YS5CKGgsXCJkaXNwb3NlXCIsaC5BKTthLkIoaCxcImdldERlcGVuZGVuY2llc0NvdW50XCIsaC5uYik7cmV0dXJuIGh9O2EucmI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaWEoYixhLmgpfTt3PWEubS5EYjthLmhbd109YS5tO2EuaC5mbj17fTthLmguZm5bd109YS5oO2EuYihcImRlcGVuZGVudE9ic2VydmFibGVcIixhLmgpO2EuYihcImNvbXB1dGVkXCIsYS5oKTthLmIoXCJpc0NvbXB1dGVkXCIsYS5yYik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGcsZSl7ZT1lfHxuZXcgZDthPWcoYSk7aWYoIShcIm9iamVjdFwiPT10eXBlb2YgYSYmYSE9PXMmJmEhPT1uJiYhKGEgaW5zdGFuY2VvZiBEYXRlKSkpcmV0dXJuIGE7dmFyIGg9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2Uuc2F2ZShhLGgpO2MoYSxmdW5jdGlvbihjKXt2YXIgZD1nKGFbY10pO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJmdW5jdGlvblwiOmhbY109XG5kO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpjYXNlIFwidW5kZWZpbmVkXCI6dmFyIGk9ZS5nZXQoZCk7aFtjXT1pIT09bj9pOmIoZCxnLGUpfX0pO3JldHVybiBofWZ1bmN0aW9uIGMoYSxiKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYyk7XCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0pTT04mJmIoXCJ0b0pTT05cIil9ZWxzZSBmb3IoYyBpbiBhKWIoYyl9ZnVuY3Rpb24gZCgpe3ZhciBiPVtdLGM9W107dGhpcy5zYXZlPWZ1bmN0aW9uKGUsZCl7dmFyIGo9YS5hLmooYixlKTswPD1qP2Nbal09ZDooYi5wdXNoKGUpLGMucHVzaChkKSl9O3RoaXMuZ2V0PWZ1bmN0aW9uKGUpe2U9YS5hLmooYixlKTtyZXR1cm4gMDw9ZT9jW2VdOm59fWEuVGE9ZnVuY3Rpb24oYyl7MD09YXJndW1lbnRzLmxlbmd0aCYmbShFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIikpO3JldHVybiBiKGMsZnVuY3Rpb24oYil7Zm9yKHZhciBjPVxuMDthLmxhKGIpJiYxMD5jO2MrKyliPWIoKTtyZXR1cm4gYn0pfTthLnRvSlNPTj1mdW5jdGlvbihiLGMsZSl7Yj1hLlRhKGIpO3JldHVybiBhLmEuc2EoYixjLGUpfX0pKCk7YS5iKFwidG9KU1wiLGEuVGEpO2EuYihcInRvSlNPTlwiLGEudG9KU09OKTsoZnVuY3Rpb24oKXthLms9e3I6ZnVuY3Rpb24oYil7c3dpdGNoKGEuYS5vKGIpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX189PT1wP2EuYS5mLmdldChiLGEuYy5vcHRpb25zLm9hKTpiLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9Yi5zZWxlY3RlZEluZGV4P2Euay5yKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKTpuO2RlZmF1bHQ6cmV0dXJuIGIudmFsdWV9fSxTOmZ1bmN0aW9uKGIsYyl7c3dpdGNoKGEuYS5vKGIpKXtjYXNlIFwib3B0aW9uXCI6c3dpdGNoKHR5cGVvZiBjKXtjYXNlIFwic3RyaW5nXCI6YS5hLmYuc2V0KGIsYS5jLm9wdGlvbnMub2EsXG5uKTtcIl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fXCJpbiBiJiZkZWxldGUgYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXztiLnZhbHVlPWM7YnJlYWs7ZGVmYXVsdDphLmEuZi5zZXQoYixhLmMub3B0aW9ucy5vYSxjKSxiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fPXAsYi52YWx1ZT1cIm51bWJlclwiPT09dHlwZW9mIGM/YzpcIlwifWJyZWFrO2Nhc2UgXCJzZWxlY3RcIjpmb3IodmFyIGQ9Yi5vcHRpb25zLmxlbmd0aC0xOzA8PWQ7ZC0tKWlmKGEuay5yKGIub3B0aW9uc1tkXSk9PWMpe2Iuc2VsZWN0ZWRJbmRleD1kO2JyZWFrfWJyZWFrO2RlZmF1bHQ6aWYoYz09PXN8fGM9PT1uKWM9XCJcIjtiLnZhbHVlPWN9fX19KSgpO2EuYihcInNlbGVjdEV4dGVuc2lvbnNcIixhLmspO2EuYihcInNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlXCIsYS5rLnIpO2EuYihcInNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZVwiLGEuay5TKTthLmc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsYil7Zm9yKHZhciBkPVxuczthIT1kOylkPWEsYT1hLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMpe3JldHVybiBiW2NdfSk7cmV0dXJuIGF9dmFyIGM9L1xcQGtvX3Rva2VuXyhcXGQrKVxcQC9nLGQ9L15bXFxfJGEtel1bXFxfJGEtejAtOV0qKFxcWy4qP1xcXSkqKFxcLltcXF8kYS16XVtcXF8kYS16MC05XSooXFxbLio/XFxdKSopKiQvaSxmPVtcInRydWVcIixcImZhbHNlXCJdO3JldHVybntEOltdLFc6ZnVuY3Rpb24oYyl7dmFyIGU9YS5hLncoYyk7aWYoMz5lLmxlbmd0aClyZXR1cm5bXTtcIntcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cmluZygxLGUubGVuZ3RoLTEpKTtmb3IodmFyIGM9W10sZD1zLGYsaz0wO2s8ZS5sZW5ndGg7aysrKXt2YXIgaT1lLmNoYXJBdChrKTtpZihkPT09cylzd2l0Y2goaSl7Y2FzZSAnXCInOmNhc2UgXCInXCI6Y2FzZSBcIi9cIjpkPWssZj1pfWVsc2UgaWYoaT09ZiYmXCJcXFxcXCIhPT1lLmNoYXJBdChrLTEpKXtpPWUuc3Vic3RyaW5nKGQsaysxKTtjLnB1c2goaSk7dmFyIGw9XCJAa29fdG9rZW5fXCIrKGMubGVuZ3RoLVxuMSkrXCJAXCIsZT1lLnN1YnN0cmluZygwLGQpK2wrZS5zdWJzdHJpbmcoaysxKSxrPWstKGkubGVuZ3RoLWwubGVuZ3RoKSxkPXN9fWY9ZD1zO2Zvcih2YXIgcT0wLG89cyxrPTA7azxlLmxlbmd0aDtrKyspe2k9ZS5jaGFyQXQoayk7aWYoZD09PXMpc3dpdGNoKGkpe2Nhc2UgXCJ7XCI6ZD1rO289aTtmPVwifVwiO2JyZWFrO2Nhc2UgXCIoXCI6ZD1rO289aTtmPVwiKVwiO2JyZWFrO2Nhc2UgXCJbXCI6ZD1rLG89aSxmPVwiXVwifWk9PT1vP3ErKzppPT09ZiYmKHEtLSwwPT09cSYmKGk9ZS5zdWJzdHJpbmcoZCxrKzEpLGMucHVzaChpKSxsPVwiQGtvX3Rva2VuX1wiKyhjLmxlbmd0aC0xKStcIkBcIixlPWUuc3Vic3RyaW5nKDAsZCkrbCtlLnN1YnN0cmluZyhrKzEpLGstPWkubGVuZ3RoLWwubGVuZ3RoLGQ9cykpfWY9W107ZT1lLnNwbGl0KFwiLFwiKTtkPTA7Zm9yKGs9ZS5sZW5ndGg7ZDxrO2QrKylxPWVbZF0sbz1xLmluZGV4T2YoXCI6XCIpLDA8byYmbzxxLmxlbmd0aC0xPyhpPXEuc3Vic3RyaW5nKG8rMSksZi5wdXNoKHtrZXk6YihxLnN1YnN0cmluZygwLFxubyksYyksdmFsdWU6YihpLGMpfSkpOmYucHVzaCh7dW5rbm93bjpiKHEsYyl9KTtyZXR1cm4gZn0sa2E6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYj9hLmcuVyhiKTpiLGg9W10sYj1bXSxqLGs9MDtqPWNba107aysrKWlmKDA8aC5sZW5ndGgmJmgucHVzaChcIixcIiksai5rZXkpe3ZhciBpO2E6e2k9ai5rZXk7dmFyIGw9YS5hLncoaSk7c3dpdGNoKGwubGVuZ3RoJiZsLmNoYXJBdCgwKSl7Y2FzZSBcIidcIjpjYXNlICdcIic6YnJlYWsgYTtkZWZhdWx0Omk9XCInXCIrbCtcIidcIn19aj1qLnZhbHVlO2gucHVzaChpKTtoLnB1c2goXCI6XCIpO2gucHVzaChqKTtsPWEuYS53KGopO2lmKDA8PWEuYS5qKGYsYS5hLncobCkudG9Mb3dlckNhc2UoKSk/MDpsLm1hdGNoKGQpIT09cykwPGIubGVuZ3RoJiZiLnB1c2goXCIsIFwiKSxiLnB1c2goaStcIiA6IGZ1bmN0aW9uKF9fa29fdmFsdWUpIHsgXCIraitcIiA9IF9fa29fdmFsdWU7IH1cIil9ZWxzZSBqLnVua25vd24mJmgucHVzaChqLnVua25vd24pO1xuYz1oLmpvaW4oXCJcIik7MDxiLmxlbmd0aCYmKGM9YytcIiwgJ19rb19wcm9wZXJ0eV93cml0ZXJzJyA6IHsgXCIrYi5qb2luKFwiXCIpK1wiIH0gXCIpO3JldHVybiBjfSx3YjpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKWlmKGEuYS53KGJbZF0ua2V5KT09YylyZXR1cm4gcDtyZXR1cm4gdH0sJDpmdW5jdGlvbihiLGMsZCxmLGspe2lmKCFifHwhYS5IYShiKSl7aWYoKGI9YygpLl9rb19wcm9wZXJ0eV93cml0ZXJzKSYmYltkXSliW2RdKGYpfWVsc2UoIWt8fGIoKSE9PWYpJiZiKGYpfX19KCk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmdcIixhLmcpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1wiLGEuZy5EKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixhLmcuVyk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLFxuYS5nLmthKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiYoZz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGUpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJihnP2EudGV4dDphLm5vZGVWYWx1ZSkubWF0Y2goaCl9ZnVuY3Rpb24gZChhLGUpe2Zvcih2YXIgZD1hLGY9MSxnPVtdO2Q9ZC5uZXh0U2libGluZzspe2lmKGMoZCkmJihmLS0sMD09PWYpKXJldHVybiBnO2cucHVzaChkKTtiKGQpJiZmKyt9ZXx8bShFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK2Eubm9kZVZhbHVlKSk7cmV0dXJuIHN9ZnVuY3Rpb24gZihhLGIpe3ZhciBjPWQoYSxiKTtyZXR1cm4gYz8wPGMubGVuZ3RoP2NbYy5sZW5ndGgtMV0ubmV4dFNpYmxpbmc6YS5uZXh0U2libGluZzpzfXZhciBnPVwiPFxcIS0tdGVzdC0tXFw+XCI9PT1kb2N1bWVudC5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0LGU9Zz8vXjxcXCEtLVxccyprb1xccysoLipcXDouKilcXHMqLS1cXD4kLzpcbi9eXFxzKmtvXFxzKyguKlxcOi4qKVxccyokLyxoPWc/L148XFwhLS1cXHMqXFwva29cXHMqLS1cXD4kLzovXlxccypcXC9rb1xccyokLyxqPXt1bDpwLG9sOnB9O2EuZT17Qzp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpP2QoYSk6YS5jaGlsZE5vZGVzfSxoYTpmdW5jdGlvbihjKXtpZihiKGMpKWZvcih2YXIgYz1hLmUuY2hpbGROb2RlcyhjKSxlPTAsZD1jLmxlbmd0aDtlPGQ7ZSsrKWEucmVtb3ZlTm9kZShjW2VdKTtlbHNlIGEuYS5nYShjKX0sWDpmdW5jdGlvbihjLGUpe2lmKGIoYykpe2EuZS5oYShjKTtmb3IodmFyIGQ9Yy5uZXh0U2libGluZyxmPTAsZz1lLmxlbmd0aDtmPGc7ZisrKWQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZVtmXSxkKX1lbHNlIGEuYS5YKGMsZSl9LEthOmZ1bmN0aW9uKGEsYyl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGMsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGMpfSxcbkZhOmZ1bmN0aW9uKGEsYyxlKXtiKGEpP2EucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYyxlLm5leHRTaWJsaW5nKTplLm5leHRTaWJsaW5nP2EuaW5zZXJ0QmVmb3JlKGMsZS5uZXh0U2libGluZyk6YS5hcHBlbmRDaGlsZChjKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4hYihhKT9hLmZpcnN0Q2hpbGQ6IWEubmV4dFNpYmxpbmd8fGMoYS5uZXh0U2libGluZyk/czphLm5leHRTaWJsaW5nfSxuZXh0U2libGluZzpmdW5jdGlvbihhKXtiKGEpJiYoYT1mKGEpKTtyZXR1cm4gYS5uZXh0U2libGluZyYmYyhhLm5leHRTaWJsaW5nKT9zOmEubmV4dFNpYmxpbmd9LFhhOmZ1bmN0aW9uKGEpe3JldHVybihhPWIoYSkpP2FbMV06c30sSWE6ZnVuY3Rpb24oZSl7aWYoalthLmEubyhlKV0pe3ZhciBkPWUuZmlyc3RDaGlsZDtpZihkKXtkbyBpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGc7Zz1kLmZpcnN0Q2hpbGQ7dmFyIGg9cztpZihnKXtkbyBpZihoKWgucHVzaChnKTtlbHNlIGlmKGIoZykpe3ZhciBvPVxuZihnLHApO28/Zz1vOmg9W2ddfWVsc2UgYyhnKSYmKGg9W2ddKTt3aGlsZShnPWcubmV4dFNpYmxpbmcpfWlmKGc9aCl7aD1kLm5leHRTaWJsaW5nO2ZvcihvPTA7bzxnLmxlbmd0aDtvKyspaD9lLmluc2VydEJlZm9yZShnW29dLGgpOmUuYXBwZW5kQ2hpbGQoZ1tvXSl9fXdoaWxlKGQ9ZC5uZXh0U2libGluZyl9fX19fSkoKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHNcIixhLmUpO2EuYihcInZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NcIixhLmUuQyk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZVwiLGEuZS5oYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyXCIsYS5lLkZhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMucHJlcGVuZFwiLGEuZS5LYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlblwiLGEuZS5YKTsoZnVuY3Rpb24oKXthLko9ZnVuY3Rpb24oKXt0aGlzLmNiPXt9fTthLmEuZXh0ZW5kKGEuSi5wcm90b3R5cGUse25vZGVIYXNCaW5kaW5nczpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKSE9XG5zO2Nhc2UgODpyZXR1cm4gYS5lLlhhKGIpIT1zO2RlZmF1bHQ6cmV0dXJuIHR9fSxnZXRCaW5kaW5nczpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYSxjKTtyZXR1cm4gZD90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoZCxjKTpzfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGEuZS5YYShiKTtkZWZhdWx0OnJldHVybiBzfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiLGMpe3RyeXt2YXIgZD1jLiRkYXRhLGQ9XCJvYmplY3RcIj09dHlwZW9mIGQmJmQhPXM/W2QsY106W2NdLGY9ZC5sZW5ndGgsZz10aGlzLmNiLGU9ZitcIl9cIitiLGg7aWYoIShoPWdbZV0pKXt2YXIgaj1cIiB7IFwiK2EuZy5rYShiKStcIiB9IFwiO2g9Z1tlXT1hLmEuZWIoaixmKX1yZXR1cm4gaChkKX1jYXRjaChrKXttKEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbk1lc3NhZ2U6IFwiK1xuaytcIjtcXG5CaW5kaW5ncyB2YWx1ZTogXCIrYikpfX19KTthLkouaW5zdGFuY2U9bmV3IGEuSn0pKCk7YS5iKFwiYmluZGluZ1Byb3ZpZGVyXCIsYS5KKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxlKXtmb3IodmFyIGg9YS5lLmZpcnN0Q2hpbGQoZCk7ZD1oOyloPWEuZS5uZXh0U2libGluZyhkKSxjKGIsZCxlKX1mdW5jdGlvbiBjKGMsZyxlKXt2YXIgaD1wLGo9MT09PWcubm9kZVR5cGU7aiYmYS5lLklhKGcpO2lmKGomJmV8fGEuSi5pbnN0YW5jZS5ub2RlSGFzQmluZGluZ3MoZykpaD1kKGcscyxjLGUpLkdiO2gmJmIoYyxnLCFqKX1mdW5jdGlvbiBkKGIsYyxlLGQpe2Z1bmN0aW9uIGooYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGxbYV19fWZ1bmN0aW9uIGsoKXtyZXR1cm4gbH12YXIgaT0wLGwscTthLmgoZnVuY3Rpb24oKXt2YXIgbz1lJiZlIGluc3RhbmNlb2YgYS56P2U6bmV3IGEueihhLmEuZChlKSksdj1vLiRkYXRhO2QmJmEuUmEoYixvKTtpZihsPShcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGM/YygpOmMpfHxhLkouaW5zdGFuY2UuZ2V0QmluZGluZ3MoYixvKSl7aWYoMD09PWkpe2k9MTtmb3IodmFyIHUgaW4gbCl7dmFyIHI9YS5jW3VdO3ImJjg9PT1iLm5vZGVUeXBlJiYhYS5lLkNbdV0mJm0oRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrdStcIicgY2Fubm90IGJlIHVzZWQgd2l0aCB2aXJ0dWFsIGVsZW1lbnRzXCIpKTtpZihyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLmluaXQmJihyPSgwLHIuaW5pdCkoYixqKHUpLGssdixvKSkmJnIuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3MpcSE9PW4mJm0oRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrcStcIiBhbmQgXCIrdStcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIikpLHE9dX1pPTJ9aWYoMj09PWkpZm9yKHUgaW4gbCkocj1hLmNbdV0pJiZcImZ1bmN0aW9uXCI9PVxudHlwZW9mIHIudXBkYXRlJiYoMCxyLnVwZGF0ZSkoYixqKHUpLGssdixvKX19LHMse2Rpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDpifSk7cmV0dXJue0diOnE9PT1ufX1hLmM9e307YS56PWZ1bmN0aW9uKGIsYyl7Yz8oYS5hLmV4dGVuZCh0aGlzLGMpLHRoaXMuJHBhcmVudENvbnRleHQ9Yyx0aGlzLiRwYXJlbnQ9Yy4kZGF0YSx0aGlzLiRwYXJlbnRzPShjLiRwYXJlbnRzfHxbXSkuc2xpY2UoMCksdGhpcy4kcGFyZW50cy51bnNoaWZ0KHRoaXMuJHBhcmVudCkpOih0aGlzLiRwYXJlbnRzPVtdLHRoaXMuJHJvb3Q9Yik7dGhpcy4kZGF0YT1ifTthLnoucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGV4dD1mdW5jdGlvbihiKXtyZXR1cm4gbmV3IGEueihiLHRoaXMpfTthLnoucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiKXt2YXIgYz1hLmEuZXh0ZW5kKG5ldyBhLnosdGhpcyk7cmV0dXJuIGEuYS5leHRlbmQoYyxiKX07YS5SYT1mdW5jdGlvbihiLGMpe2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpYS5hLmYuc2V0KGIsXG5cIl9fa29fYmluZGluZ0NvbnRleHRfX1wiLGMpO2Vsc2UgcmV0dXJuIGEuYS5mLmdldChiLFwiX19rb19iaW5kaW5nQ29udGV4dF9fXCIpfTthLnlhPWZ1bmN0aW9uKGIsYyxlKXsxPT09Yi5ub2RlVHlwZSYmYS5lLklhKGIpO3JldHVybiBkKGIsYyxlLHApfTthLllhPWZ1bmN0aW9uKGEsYyl7KDE9PT1jLm5vZGVUeXBlfHw4PT09Yy5ub2RlVHlwZSkmJmIoYSxjLHApfTthLnhhPWZ1bmN0aW9uKGEsYil7YiYmKDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZSkmJm0oRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKSk7Yj1ifHx3aW5kb3cuZG9jdW1lbnQuYm9keTtjKGEsYixwKX07YS5lYT1mdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOmNhc2UgODp2YXIgYz1hLlJhKGIpO2lmKGMpcmV0dXJuIGM7aWYoYi5wYXJlbnROb2RlKXJldHVybiBhLmVhKGIucGFyZW50Tm9kZSl9fTtcbmEuaGI9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5lYShiKSk/Yi4kZGF0YTpufTthLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixhLmMpO2EuYihcImFwcGx5QmluZGluZ3NcIixhLnhhKTthLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGEuWWEpO2EuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixhLnlhKTthLmIoXCJjb250ZXh0Rm9yXCIsYS5lYSk7YS5iKFwiZGF0YUZvclwiLGEuaGIpfSkoKTthLmEudihbXCJjbGlja1wiXSxmdW5jdGlvbihiKXthLmNbYl09e2luaXQ6ZnVuY3Rpb24oYyxkLGYsZyl7cmV0dXJuIGEuYy5ldmVudC5pbml0LmNhbGwodGhpcyxjLGZ1bmN0aW9uKCl7dmFyIGE9e307YVtiXT1kKCk7cmV0dXJuIGF9LGYsZyl9fX0pO2EuYy5ldmVudD17aW5pdDpmdW5jdGlvbihiLGMsZCxmKXt2YXIgZz1jKCl8fHt9LGU7Zm9yKGUgaW4gZykoZnVuY3Rpb24oKXt2YXIgZz1lO1wic3RyaW5nXCI9PXR5cGVvZiBnJiZhLmEubihiLGcsZnVuY3Rpb24oYil7dmFyIGUsaT1jKClbZ107aWYoaSl7dmFyIGw9XG5kKCk7dHJ5e3ZhciBxPWEuYS5MKGFyZ3VtZW50cyk7cS51bnNoaWZ0KGYpO2U9aS5hcHBseShmLHEpfWZpbmFsbHl7ZSE9PXAmJihiLnByZXZlbnREZWZhdWx0P2IucHJldmVudERlZmF1bHQoKTpiLnJldHVyblZhbHVlPXQpfWxbZytcIkJ1YmJsZVwiXT09PXQmJihiLmNhbmNlbEJ1YmJsZT1wLGIuc3RvcFByb3BhZ2F0aW9uJiZiLnN0b3BQcm9wYWdhdGlvbigpKX19KX0pKCl9fTthLmMuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGYpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGMoKSYmbShFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIikpO2EuYS5uKGIsXCJzdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgZSxkPWMoKTt0cnl7ZT1kLmNhbGwoZixiKX1maW5hbGx5e2UhPT1wJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT10KX19KX19O2EuYy52aXNpYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1cbmEuYS5kKGMoKSksZj1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O2QmJiFmP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFkJiZmJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2EuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7ZCYmYi5kaXNhYmxlZD9iLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOiFkJiYhYi5kaXNhYmxlZCYmKGIuZGlzYWJsZWQ9cCl9fTthLmMuZGlzYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5jLmVuYWJsZS51cGRhdGUoYixmdW5jdGlvbigpe3JldHVybiFhLmEuZChjKCkpfSl9fTthLmMudmFsdWU9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGYoKXt2YXIgZT1jKCksZj1hLmsucihiKTthLmcuJChlLGQsXCJ2YWx1ZVwiLGYscCl9dmFyIGc9W1wiY2hhbmdlXCJdLGU9ZCgpLnZhbHVlVXBkYXRlO2UmJihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9W2VdKSxhLmEuTihnLGUpLGc9YS5hLnphKGcpKTtpZihhLmEuamEmJlxuKFwiaW5wdXRcIj09Yi50YWdOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT1iLnR5cGUmJlwib2ZmXCIhPWIuYXV0b2NvbXBsZXRlJiYoIWIuZm9ybXx8XCJvZmZcIiE9Yi5mb3JtLmF1dG9jb21wbGV0ZSkpJiYtMT09YS5hLmooZyxcInByb3BlcnR5Y2hhbmdlXCIpKXt2YXIgaD10O2EuYS5uKGIsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7aD1wfSk7YS5hLm4oYixcImJsdXJcIixmdW5jdGlvbigpe2lmKGgpe2g9dDtmKCl9fSl9YS5hLnYoZyxmdW5jdGlvbihjKXt2YXIgZT1mO2lmKGEuYS5IYihjLFwiYWZ0ZXJcIikpe2U9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGYsMCl9O2M9Yy5zdWJzdHJpbmcoNSl9YS5hLm4oYixjLGUpfSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPVwic2VsZWN0XCI9PT1hLmEubyhiKSxmPWEuYS5kKGMoKSksZz1hLmsucihiKSxlPWYhPWc7MD09PWYmJigwIT09ZyYmXCIwXCIhPT1nKSYmKGU9cCk7ZSYmKGc9ZnVuY3Rpb24oKXthLmsuUyhiLGYpfSxnKCksZCYmc2V0VGltZW91dChnLFxuMCkpO2QmJjA8Yi5sZW5ndGgmJkIoYixmLHQpfX07YS5jLm9wdGlvbnM9e3VwZGF0ZTpmdW5jdGlvbihiLGMsZCl7XCJzZWxlY3RcIiE9PWEuYS5vKGIpJiZtKEVycm9yKFwib3B0aW9ucyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIikpO2Zvcih2YXIgZj0wPT1iLmxlbmd0aCxnPWEuYS5UKGEuYS5hYShiLmNoaWxkTm9kZXMsZnVuY3Rpb24oYil7cmV0dXJuIGIudGFnTmFtZSYmXCJvcHRpb25cIj09PWEuYS5vKGIpJiZiLnNlbGVjdGVkfSksZnVuY3Rpb24oYil7cmV0dXJuIGEuay5yKGIpfHxiLmlubmVyVGV4dHx8Yi50ZXh0Q29udGVudH0pLGU9Yi5zY3JvbGxUb3AsaD1hLmEuZChjKCkpOzA8Yi5sZW5ndGg7KWEuRihiLm9wdGlvbnNbMF0pLGIucmVtb3ZlKDApO2lmKGgpe2Q9ZCgpO1wibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aCYmKGg9W2hdKTtpZihkLm9wdGlvbnNDYXB0aW9uKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2EuYS5ZKGosXG5kLm9wdGlvbnNDYXB0aW9uKTthLmsuUyhqLG4pO2IuYXBwZW5kQ2hpbGQoail9Zm9yKHZhciBjPTAsaz1oLmxlbmd0aDtjPGs7YysrKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpLGk9XCJzdHJpbmdcIj09dHlwZW9mIGQub3B0aW9uc1ZhbHVlP2hbY11bZC5vcHRpb25zVmFsdWVdOmhbY10saT1hLmEuZChpKTthLmsuUyhqLGkpO3ZhciBsPWQub3B0aW9uc1RleHQsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2woaFtjXSk6XCJzdHJpbmdcIj09dHlwZW9mIGw/aFtjXVtsXTppO2lmKGk9PT1zfHxpPT09bilpPVwiXCI7YS5hLlFhKGosaSk7Yi5hcHBlbmRDaGlsZChqKX1oPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIik7Yz1qPTA7Zm9yKGs9aC5sZW5ndGg7YzxrO2MrKykwPD1hLmEuaihnLGEuay5yKGhbY10pKSYmKGEuYS5QYShoW2NdLHApLGorKyk7Yi5zY3JvbGxUb3A9ZTtmJiZcInZhbHVlXCJpbiBkJiZCKGIsYS5hLmQoZC52YWx1ZSkscCk7YS5hLmxiKGIpfX19O1xuYS5jLm9wdGlvbnMub2E9XCJfX2tvLm9wdGlvblZhbHVlRG9tRGF0YV9fXCI7YS5jLnNlbGVjdGVkT3B0aW9ucz17RWE6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPVtdLGI9Yi5jaGlsZE5vZGVzLGQ9MCxmPWIubGVuZ3RoO2Q8ZjtkKyspe3ZhciBnPWJbZF0sZT1hLmEubyhnKTtcIm9wdGlvblwiPT1lJiZnLnNlbGVjdGVkP2MucHVzaChhLmsucihnKSk6XCJvcHRncm91cFwiPT1lJiYoZz1hLmMuc2VsZWN0ZWRPcHRpb25zLkVhKGcpLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYyxbYy5sZW5ndGgsMF0uY29uY2F0KGcpKSl9cmV0dXJuIGN9LGluaXQ6ZnVuY3Rpb24oYixjLGQpe2EuYS5uKGIsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBiPWMoKSxnPWEuYy5zZWxlY3RlZE9wdGlvbnMuRWEodGhpcyk7YS5nLiQoYixkLFwidmFsdWVcIixnKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXtcInNlbGVjdFwiIT1hLmEubyhiKSYmbShFcnJvcihcInZhbHVlcyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIikpO1xudmFyIGQ9YS5hLmQoYygpKTtpZihkJiZcIm51bWJlclwiPT10eXBlb2YgZC5sZW5ndGgpZm9yKHZhciBmPWIuY2hpbGROb2RlcyxnPTAsZT1mLmxlbmd0aDtnPGU7ZysrKXt2YXIgaD1mW2ddO1wib3B0aW9uXCI9PT1hLmEubyhoKSYmYS5hLlBhKGgsMDw9YS5hLmooZCxhLmsucihoKSkpfX19O2EuYy50ZXh0PXt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmEuUWEoYixjKCkpfX07YS5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6cH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7YS5hLlkoYixkKX19O2EuYy5jc3M9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKXx8e30pLGY7Zm9yKGYgaW4gZClpZihcInN0cmluZ1wiPT10eXBlb2YgZil7dmFyIGc9YS5hLmQoZFtmXSk7YS5hLlVhKGIsZixnKX19fTthLmMuc3R5bGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKXx8e30pLGY7XG5mb3IoZiBpbiBkKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXt2YXIgZz1hLmEuZChkW2ZdKTtiLnN0eWxlW2ZdPWd8fFwiXCJ9fX07YS5jLnVuaXF1ZU5hbWU9e2luaXQ6ZnVuY3Rpb24oYixjKXtjKCkmJihiLm5hbWU9XCJrb191bmlxdWVfXCIrICsrYS5jLnVuaXF1ZU5hbWUuZ2IsKGEuYS50Ynx8YS5hLnViKSYmYi5tZXJnZUF0dHJpYnV0ZXMoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIitiLm5hbWUrXCInLz5cIiksdCkpfX07YS5jLnVuaXF1ZU5hbWUuZ2I9MDthLmMuY2hlY2tlZD17aW5pdDpmdW5jdGlvbihiLGMsZCl7YS5hLm4oYixcImNsaWNrXCIsZnVuY3Rpb24oKXt2YXIgZjtpZihcImNoZWNrYm94XCI9PWIudHlwZSlmPWIuY2hlY2tlZDtlbHNlIGlmKFwicmFkaW9cIj09Yi50eXBlJiZiLmNoZWNrZWQpZj1iLnZhbHVlO2Vsc2UgcmV0dXJuO3ZhciBnPWMoKTtcImNoZWNrYm94XCI9PWIudHlwZSYmYS5hLmQoZylpbnN0YW5jZW9mIEFycmF5PyhmPWEuYS5qKGEuYS5kKGcpLGIudmFsdWUpLFxuYi5jaGVja2VkJiYwPmY/Zy5wdXNoKGIudmFsdWUpOiFiLmNoZWNrZWQmJjA8PWYmJmcuc3BsaWNlKGYsMSkpOmEuZy4kKGcsZCxcImNoZWNrZWRcIixmLHApfSk7XCJyYWRpb1wiPT1iLnR5cGUmJiFiLm5hbWUmJmEuYy51bmlxdWVOYW1lLmluaXQoYixBKHApKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKTtcImNoZWNrYm94XCI9PWIudHlwZT9iLmNoZWNrZWQ9ZCBpbnN0YW5jZW9mIEFycmF5PzA8PWEuYS5qKGQsYi52YWx1ZSk6ZDpcInJhZGlvXCI9PWIudHlwZSYmKGIuY2hlY2tlZD1iLnZhbHVlPT1kKX19O3ZhciBGPXtcImNsYXNzXCI6XCJjbGFzc05hbWVcIixcImZvclwiOlwiaHRtbEZvclwifTthLmMuYXR0cj17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmQoYygpKXx8e30sZjtmb3IoZiBpbiBkKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBmKXt2YXIgZz1hLmEuZChkW2ZdKSxlPWc9PT10fHxnPT09c3x8Zz09PW47ZSYmYi5yZW1vdmVBdHRyaWJ1dGUoZik7OD49YS5hLmphJiZcbmYgaW4gRj8oZj1GW2ZdLGU/Yi5yZW1vdmVBdHRyaWJ1dGUoZik6YltmXT1nKTplfHxiLnNldEF0dHJpYnV0ZShmLGcudG9TdHJpbmcoKSl9fX07YS5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBmKGIpe3ZhciBlPWMoKTthLmcuJChlLGQsXCJoYXNmb2N1c1wiLGIscCl9YS5hLm4oYixcImZvY3VzXCIsZnVuY3Rpb24oKXtmKHApfSk7YS5hLm4oYixcImZvY3VzaW5cIixmdW5jdGlvbigpe2YocCl9KTthLmEubihiLFwiYmx1clwiLGZ1bmN0aW9uKCl7Zih0KX0pO2EuYS5uKGIsXCJmb2N1c291dFwiLGZ1bmN0aW9uKCl7Zih0KX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZChjKCkpO2Q/Yi5mb2N1cygpOmIuYmx1cigpO2EuYS52YShiLGQ/XCJmb2N1c2luXCI6XCJmb2N1c291dFwiKX19O2EuY1tcIndpdGhcIl09e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YigpO3JldHVybntcImlmXCI6YyxkYXRhOmMsdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0sXG5pbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jW1wid2l0aFwiXS5wKGMpKX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmNbXCJ3aXRoXCJdLnAoYyksZCxmLGcpfX07YS5nLkRbXCJ3aXRoXCJdPXQ7YS5lLkNbXCJ3aXRoXCJdPXA7YS5jW1wiaWZcIl09e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue1wiaWZcIjpiKCksdGVtcGxhdGVFbmdpbmU6YS5xLkt9fX0saW5pdDpmdW5jdGlvbihiLGMpe3JldHVybiBhLmMudGVtcGxhdGUuaW5pdChiLGEuY1tcImlmXCJdLnAoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuY1tcImlmXCJdLnAoYyksZCxmLGcpfX07YS5nLkRbXCJpZlwiXT10O2EuZS5DW1wiaWZcIl09cDthLmMuaWZub3Q9e3A6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJue2lmbm90OmIoKSx0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxcbmluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmMuaWZub3QucChjKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxmLGcpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jLmlmbm90LnAoYyksZCxmLGcpfX07YS5nLkQuaWZub3Q9dDthLmUuQy5pZm5vdD1wO2EuYy5mb3JlYWNoPXtwOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWEuYS5kKGIoKSk7cmV0dXJuIWN8fFwibnVtYmVyXCI9PXR5cGVvZiBjLmxlbmd0aD97Zm9yZWFjaDpjLHRlbXBsYXRlRW5naW5lOmEucS5LfTp7Zm9yZWFjaDpjLmRhdGEsaW5jbHVkZURlc3Ryb3llZDpjLmluY2x1ZGVEZXN0cm95ZWQsYWZ0ZXJBZGQ6Yy5hZnRlckFkZCxiZWZvcmVSZW1vdmU6Yy5iZWZvcmVSZW1vdmUsYWZ0ZXJSZW5kZXI6Yy5hZnRlclJlbmRlcix0ZW1wbGF0ZUVuZ2luZTphLnEuS319fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jLmZvcmVhY2gucChjKSl9LFxudXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGYsZyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS51cGRhdGUoYixhLmMuZm9yZWFjaC5wKGMpLGQsZixnKX19O2EuZy5ELmZvcmVhY2g9dDthLmUuQy5mb3JlYWNoPXA7YS50PWZ1bmN0aW9uKCl7fTthLnQucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKCl7bShFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpKX07YS50LnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXttKEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpKX07YS50LnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixjKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7dmFyIGM9Y3x8ZG9jdW1lbnQsZD1jLmdldEVsZW1lbnRCeUlkKGIpO2R8fG0oRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiK2IpKTtyZXR1cm4gbmV3IGEubC5pKGQpfWlmKDE9PVxuYi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSlyZXR1cm4gbmV3IGEubC5NKGIpO20oRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2IpKX07YS50LnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCxmKXtyZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZSh0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGYpLGMsZCl9O2EudC5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9PT10fHwhKGMmJmMhPWRvY3VtZW50KSYmdGhpcy5WJiZ0aGlzLlZbYV0/cDp0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGMpLmRhdGEoXCJpc1Jld3JpdHRlblwiKX07YS50LnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZCksYz1jKGYudGV4dCgpKTtmLnRleHQoYyk7Zi5kYXRhKFwiaXNSZXdyaXR0ZW5cIixcbnApOyEoZCYmZCE9ZG9jdW1lbnQpJiZcInN0cmluZ1wiPT10eXBlb2YgYSYmKHRoaXMuVj10aGlzLlZ8fHt9LHRoaXMuVlthXT1wKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLnQpO2EuWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGUpe2Zvcih2YXIgYj1hLmcuVyhiKSxkPWEuZy5ELGo9MDtqPGIubGVuZ3RoO2orKyl7dmFyIGs9YltqXS5rZXk7aWYoZC5oYXNPd25Qcm9wZXJ0eShrKSl7dmFyIGk9ZFtrXTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgaT8oaz1pKGJbal0udmFsdWUpKSYmbShFcnJvcihrKSk6aXx8bShFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIitrK1wiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpKX19Yj1cImtvLnRlbXBsYXRlUmV3cml0aW5nLmFwcGx5TWVtb2l6ZWRCaW5kaW5nc1RvTmV4dFNpYmxpbmcoZnVuY3Rpb24oKSB7ICAgICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24oKSB7IHJldHVybiB7IFwiK2EuZy5rYShiKStcblwiIH0gfSkoKSAgICAgICAgIH0pXCI7cmV0dXJuIGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrKGIpK2N9dmFyIGM9Lyg8W2Etel0rXFxkKihcXHMrKD8hZGF0YS1iaW5kPSlbYS16MC05XFwtXSsoPShcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCcpKT8pKlxccyspZGF0YS1iaW5kPShbXCInXSkoW1xcc1xcU10qPylcXDUvZ2ksZD0vPFxcIS0tXFxzKmtvXFxiXFxzKihbXFxzXFxTXSo/KVxccyotLVxcPi9nO3JldHVybnttYjpmdW5jdGlvbihiLGMsZSl7Yy5pc1RlbXBsYXRlUmV3cml0dGVuKGIsZSl8fGMucmV3cml0ZVRlbXBsYXRlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuWi56YihiLGMpfSxlKX0semI6ZnVuY3Rpb24oYSxnKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZixpLGwscSl7cmV0dXJuIGIocSxjLGcpfSkucmVwbGFjZShkLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGIoYyxcIjxcXCEtLSBrbyAtLVxcPlwiLGcpfSl9LFphOmZ1bmN0aW9uKGIpe3JldHVybiBhLnMubmEoZnVuY3Rpb24oYyxcbmUpe2MubmV4dFNpYmxpbmcmJmEueWEoYy5uZXh0U2libGluZyxiLGUpfSl9fX0oKTthLmIoXCJ0ZW1wbGF0ZVJld3JpdGluZ1wiLGEuWik7YS5iKFwidGVtcGxhdGVSZXdyaXRpbmcuYXBwbHlNZW1vaXplZEJpbmRpbmdzVG9OZXh0U2libGluZ1wiLGEuWi5aYSk7KGZ1bmN0aW9uKCl7YS5sPXt9O2EubC5pPWZ1bmN0aW9uKGEpe3RoaXMuaT1hfTthLmwuaS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPWEuYS5vKHRoaXMuaSksYj1cInNjcmlwdFwiPT09Yj9cInRleHRcIjpcInRleHRhcmVhXCI9PT1iP1widmFsdWVcIjpcImlubmVySFRNTFwiO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuaVtiXTt2YXIgYz1hcmd1bWVudHNbMF07XCJpbm5lckhUTUxcIj09PWI/YS5hLlkodGhpcy5pLGMpOnRoaXMuaVtiXT1jfTthLmwuaS5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbihiKXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYS5hLmYuZ2V0KHRoaXMuaSxcInRlbXBsYXRlU291cmNlRGF0YV9cIitcbmIpO2EuYS5mLnNldCh0aGlzLmksXCJ0ZW1wbGF0ZVNvdXJjZURhdGFfXCIrYixhcmd1bWVudHNbMV0pfTthLmwuTT1mdW5jdGlvbihhKXt0aGlzLmk9YX07YS5sLk0ucHJvdG90eXBlPW5ldyBhLmwuaTthLmwuTS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBiPWEuYS5mLmdldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e307Yi51YT09PW4mJmIuZGEmJihiLnVhPWIuZGEuaW5uZXJIVE1MKTtyZXR1cm4gYi51YX1hLmEuZi5zZXQodGhpcy5pLFwiX19rb19hbm9uX3RlbXBsYXRlX19cIix7dWE6YXJndW1lbnRzWzBdfSl9O2EubC5pLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuKGEuYS5mLmdldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiKXx8e30pLmRhO2EuYS5mLnNldCh0aGlzLmksXCJfX2tvX2Fub25fdGVtcGxhdGVfX1wiLHtkYTphcmd1bWVudHNbMF19KX07XG5hLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLmwpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5sLmkpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEubC5NKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCl7Zm9yKHZhciBmLGM9YS5lLm5leHRTaWJsaW5nKGMpO2ImJihmPWIpIT09YzspYj1hLmUubmV4dFNpYmxpbmcoZiksKDE9PT1mLm5vZGVUeXBlfHw4PT09Zi5ub2RlVHlwZSkmJmQoZil9ZnVuY3Rpb24gYyhjLGQpe2lmKGMubGVuZ3RoKXt2YXIgZj1jWzBdLGc9Y1tjLmxlbmd0aC0xXTtiKGYsZyxmdW5jdGlvbihiKXthLnhhKGQsYil9KTtiKGYsZyxmdW5jdGlvbihiKXthLnMuV2EoYixbZF0pfSl9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGEubm9kZVR5cGU/YTowPGEubGVuZ3RoP2FbMF06c31mdW5jdGlvbiBmKGIsZixqLGssaSl7dmFyIGk9aXx8e30sbD1iJiZkKGIpLGw9bCYmbC5vd25lckRvY3VtZW50LHE9aS50ZW1wbGF0ZUVuZ2luZXx8XG5nO2EuWi5tYihqLHEsbCk7aj1xLnJlbmRlclRlbXBsYXRlKGosayxpLGwpOyhcIm51bWJlclwiIT10eXBlb2Ygai5sZW5ndGh8fDA8ai5sZW5ndGgmJlwibnVtYmVyXCIhPXR5cGVvZiBqWzBdLm5vZGVUeXBlKSYmbShFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIikpO2w9dDtzd2l0Y2goZil7Y2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOmEuZS5YKGIsaik7bD1wO2JyZWFrO2Nhc2UgXCJyZXBsYWNlTm9kZVwiOmEuYS5OYShiLGopO2w9cDticmVhaztjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOmJyZWFrO2RlZmF1bHQ6bShFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrZikpfWwmJihjKGosayksaS5hZnRlclJlbmRlciYmaS5hZnRlclJlbmRlcihqLGsuJGRhdGEpKTtyZXR1cm4gan12YXIgZzthLnJhPWZ1bmN0aW9uKGIpe2IhPW4mJiEoYiBpbnN0YW5jZW9mIGEudCkmJm0oRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKSk7XG5nPWJ9O2EucWE9ZnVuY3Rpb24oYixjLGosayxpKXtqPWp8fHt9OyhqLnRlbXBsYXRlRW5naW5lfHxnKT09biYmbShFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKSk7aT1pfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGspe3ZhciBsPWQoayk7cmV0dXJuIGEuaChmdW5jdGlvbigpe3ZhciBnPWMmJmMgaW5zdGFuY2VvZiBhLno/YzpuZXcgYS56KGEuYS5kKGMpKSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGI/YihnLiRkYXRhKTpiLGc9ZihrLGksbyxnLGopO1wicmVwbGFjZU5vZGVcIj09aSYmKGs9ZyxsPWQoaykpfSxzLHtkaXNwb3NlV2hlbjpmdW5jdGlvbigpe3JldHVybiFsfHwhYS5hLmZhKGwpfSxkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6bCYmXCJyZXBsYWNlTm9kZVwiPT1pP2wucGFyZW50Tm9kZTpsfSl9cmV0dXJuIGEucy5uYShmdW5jdGlvbihkKXthLnFhKGIsYyxqLGQsXCJyZXBsYWNlTm9kZVwiKX0pfTthLkZiPWZ1bmN0aW9uKGIsXG5kLGcsayxpKXtmdW5jdGlvbiBsKGEsYil7YyhiLG8pO2cuYWZ0ZXJSZW5kZXImJmcuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiBxKGMsZCl7dmFyIGg9XCJmdW5jdGlvblwiPT10eXBlb2YgYj9iKGMpOmI7bz1pLmNyZWF0ZUNoaWxkQ29udGV4dChhLmEuZChjKSk7by4kaW5kZXg9ZDtyZXR1cm4gZihzLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGgsbyxnKX12YXIgbztyZXR1cm4gYS5oKGZ1bmN0aW9uKCl7dmFyIGI9YS5hLmQoZCl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBiLmxlbmd0aCYmKGI9W2JdKTtiPWEuYS5hYShiLGZ1bmN0aW9uKGIpe3JldHVybiBnLmluY2x1ZGVEZXN0cm95ZWR8fGI9PT1ufHxiPT09c3x8IWEuYS5kKGIuX2Rlc3Ryb3kpfSk7YS5hLk9hKGssYixxLGcsbCl9LHMse2Rpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZDprfSl9O2EuYy50ZW1wbGF0ZT17aW5pdDpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5kKGMoKSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGQmJiFkLm5hbWUmJlxuKDE9PWIubm9kZVR5cGV8fDg9PWIubm9kZVR5cGUpKWQ9MT09Yi5ub2RlVHlwZT9iLmNoaWxkTm9kZXM6YS5lLmNoaWxkTm9kZXMoYiksZD1hLmEuQWIoZCksKG5ldyBhLmwuTShiKSkubm9kZXMoZCk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOnB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZixnKXtjPWEuYS5kKGMoKSk7Zj1wO1wic3RyaW5nXCI9PXR5cGVvZiBjP2Q9YzooZD1jLm5hbWUsXCJpZlwiaW4gYyYmKGY9ZiYmYS5hLmQoY1tcImlmXCJdKSksXCJpZm5vdFwiaW4gYyYmKGY9ZiYmIWEuYS5kKGMuaWZub3QpKSk7dmFyIGw9cztcIm9iamVjdFwiPT09dHlwZW9mIGMmJlwiZm9yZWFjaFwiaW4gYz9sPWEuRmIoZHx8YixmJiZjLmZvcmVhY2h8fFtdLGMsYixnKTpmPyhnPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZcImRhdGFcImluIGM/Zy5jcmVhdGVDaGlsZENvbnRleHQoYS5hLmQoYy5kYXRhKSk6ZyxsPWEucWEoZHx8YixnLGMsYikpOmEuZS5oYShiKTtnPWw7KGM9YS5hLmYuZ2V0KGIsXCJfX2tvX190ZW1wbGF0ZVN1YnNjcmlwdGlvbkRvbURhdGFLZXlfX1wiKSkmJlxuXCJmdW5jdGlvblwiPT10eXBlb2YgYy5BJiZjLkEoKTthLmEuZi5zZXQoYixcIl9fa29fX3RlbXBsYXRlU3Vic2NyaXB0aW9uRG9tRGF0YUtleV9fXCIsZyl9fTthLmcuRC50ZW1wbGF0ZT1mdW5jdGlvbihiKXtiPWEuZy5XKGIpO3JldHVybiAxPT1iLmxlbmd0aCYmYlswXS51bmtub3dufHxhLmcud2IoYixcIm5hbWVcIik/czpcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgYW5vbnltb3VzIHRlbXBsYXRlcyBuZXN0ZWQgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIn07YS5lLkMudGVtcGxhdGU9cH0pKCk7YS5iKFwic2V0VGVtcGxhdGVFbmdpbmVcIixhLnJhKTthLmIoXCJyZW5kZXJUZW1wbGF0ZVwiLGEucWEpOyhmdW5jdGlvbigpe2EuYS5PPWZ1bmN0aW9uKGIsYyxkKXtpZihkPT09bilyZXR1cm4gYS5hLk8oYixjLDEpfHxhLmEuTyhiLGMsMTApfHxhLmEuTyhiLGMsTnVtYmVyLk1BWF9WQUxVRSk7Zm9yKHZhciBiPWJ8fFtdLGM9Y3x8W10sZj1iLGc9YyxlPVtdLGg9MDtoPD1nLmxlbmd0aDtoKyspZVtoXT1cbltdO2Zvcih2YXIgaD0wLGo9TWF0aC5taW4oZi5sZW5ndGgsZCk7aDw9ajtoKyspZVswXVtoXT1oO2g9MTtmb3Ioaj1NYXRoLm1pbihnLmxlbmd0aCxkKTtoPD1qO2grKyllW2hdWzBdPWg7Zm9yKHZhciBqPWYubGVuZ3RoLGssaT1nLmxlbmd0aCxoPTE7aDw9ajtoKyspe2s9TWF0aC5tYXgoMSxoLWQpO2Zvcih2YXIgbD1NYXRoLm1pbihpLGgrZCk7azw9bDtrKyspZVtrXVtoXT1mW2gtMV09PT1nW2stMV0/ZVtrLTFdW2gtMV06TWF0aC5taW4oZVtrLTFdW2hdPT09bj9OdW1iZXIuTUFYX1ZBTFVFOmVbay0xXVtoXSsxLGVba11baC0xXT09PW4/TnVtYmVyLk1BWF9WQUxVRTplW2tdW2gtMV0rMSl9ZD1iLmxlbmd0aDtmPWMubGVuZ3RoO2c9W107aD1lW2ZdW2RdO2lmKGg9PT1uKWU9cztlbHNle2Zvcig7MDxkfHwwPGY7KXtqPWVbZl1bZF07aT0wPGY/ZVtmLTFdW2RdOmgrMTtsPTA8ZD9lW2ZdW2QtMV06aCsxO2s9MDxmJiYwPGQ/ZVtmLTFdW2QtMV06aCsxO2lmKGk9PT1ufHxpPGotMSlpPVxuaCsxO2lmKGw9PT1ufHxsPGotMSlsPWgrMTtrPGotMSYmKGs9aCsxKTtpPD1sJiZpPGs/KGcucHVzaCh7c3RhdHVzOlwiYWRkZWRcIix2YWx1ZTpjW2YtMV19KSxmLS0pOihsPGkmJmw8az9nLnB1c2goe3N0YXR1czpcImRlbGV0ZWRcIix2YWx1ZTpiW2QtMV19KTooZy5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmJbZC0xXX0pLGYtLSksZC0tKX1lPWcucmV2ZXJzZSgpfXJldHVybiBlfX0pKCk7YS5iKFwidXRpbHMuY29tcGFyZUFycmF5c1wiLGEuYS5PKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe2lmKDI8YS5sZW5ndGgpe2Zvcih2YXIgYj1hWzBdLGM9YVthLmxlbmd0aC0xXSxlPVtiXTtiIT09Yzspe2I9Yi5uZXh0U2libGluZztpZighYilyZXR1cm47ZS5wdXNoKGIpfUFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYSxbMCxhLmxlbmd0aF0uY29uY2F0KGUpKX19ZnVuY3Rpb24gYyhjLGYsZyxlLGgpe3ZhciBqPVtdLGM9YS5oKGZ1bmN0aW9uKCl7dmFyIGM9ZihnLGgpfHxcbltdOzA8ai5sZW5ndGgmJihiKGopLGEuYS5OYShqLGMpLGUmJmUoZyxjKSk7ai5zcGxpY2UoMCxqLmxlbmd0aCk7YS5hLk4oaixjKX0scyx7ZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOmMsZGlzcG9zZVdoZW46ZnVuY3Rpb24oKXtyZXR1cm4gMD09ai5sZW5ndGh8fCFhLmEuZmEoalswXSl9fSk7cmV0dXJue3hiOmosaDpjfX1hLmEuT2E9ZnVuY3Rpb24oZCxmLGcsZSxoKXtmb3IodmFyIGY9Znx8W10sZT1lfHx7fSxqPWEuYS5mLmdldChkLFwic2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ19sYXN0TWFwcGluZ1Jlc3VsdFwiKT09PW4saz1hLmEuZi5nZXQoZCxcInNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdfbGFzdE1hcHBpbmdSZXN1bHRcIil8fFtdLGk9YS5hLlQoayxmdW5jdGlvbihhKXtyZXR1cm4gYS4kYX0pLGw9YS5hLk8oaSxmKSxmPVtdLHE9MCxvPVtdLHY9MCxpPVtdLHU9cyxyPTAsdz1sLmxlbmd0aDtyPHc7cisrKXN3aXRjaChsW3JdLnN0YXR1cyl7Y2FzZSBcInJldGFpbmVkXCI6dmFyIHk9XG5rW3FdO3kucWIodik7dj1mLnB1c2goeSk7MDx5LlAubGVuZ3RoJiYodT15LlBbeS5QLmxlbmd0aC0xXSk7cSsrO2JyZWFrO2Nhc2UgXCJkZWxldGVkXCI6a1txXS5oLkEoKTtiKGtbcV0uUCk7YS5hLnYoa1txXS5QLGZ1bmN0aW9uKGEpe28ucHVzaCh7ZWxlbWVudDphLGluZGV4OnIsdmFsdWU6bFtyXS52YWx1ZX0pO3U9YX0pO3ErKzticmVhaztjYXNlIFwiYWRkZWRcIjpmb3IodmFyIHk9bFtyXS52YWx1ZSx4PWEubSh2KSx2PWMoZCxnLHksaCx4KSxDPXYueGIsdj1mLnB1c2goeyRhOmxbcl0udmFsdWUsUDpDLGg6di5oLHFiOnh9KSx6PTAsQj1DLmxlbmd0aDt6PEI7eisrKXt2YXIgRD1DW3pdO2kucHVzaCh7ZWxlbWVudDpELGluZGV4OnIsdmFsdWU6bFtyXS52YWx1ZX0pO3U9PXM/YS5lLkthKGQsRCk6YS5lLkZhKGQsRCx1KTt1PUR9aCYmaCh5LEMseCl9YS5hLnYobyxmdW5jdGlvbihiKXthLkYoYi5lbGVtZW50KX0pO2c9dDtpZighail7aWYoZS5hZnRlckFkZClmb3Iocj0wO3I8aS5sZW5ndGg7cisrKWUuYWZ0ZXJBZGQoaVtyXS5lbGVtZW50LFxuaVtyXS5pbmRleCxpW3JdLnZhbHVlKTtpZihlLmJlZm9yZVJlbW92ZSl7Zm9yKHI9MDtyPG8ubGVuZ3RoO3IrKyllLmJlZm9yZVJlbW92ZShvW3JdLmVsZW1lbnQsb1tyXS5pbmRleCxvW3JdLnZhbHVlKTtnPXB9fWlmKCFnJiZvLmxlbmd0aClmb3Iocj0wO3I8by5sZW5ndGg7cisrKWU9b1tyXS5lbGVtZW50LGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO2EuYS5mLnNldChkLFwic2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ19sYXN0TWFwcGluZ1Jlc3VsdFwiLGYpfX0pKCk7YS5iKFwidXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ1wiLGEuYS5PYSk7YS5xPWZ1bmN0aW9uKCl7dGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPXR9O2EucS5wcm90b3R5cGU9bmV3IGEudDthLnEucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIpe3ZhciBjPSEoOT5hLmEuamEpJiZiLm5vZGVzP2Iubm9kZXMoKTpzO1xuaWYoYylyZXR1cm4gYS5hLkwoYy5jbG9uZU5vZGUocCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnBhKGIpfTthLnEuSz1uZXcgYS5xO2EucmEoYS5xLkspO2EuYihcIm5hdGl2ZVRlbXBsYXRlRW5naW5lXCIsYS5xKTsoZnVuY3Rpb24oKXthLm1hPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52Yj1mdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBqUXVlcnl8fCFqUXVlcnkudG1wbClyZXR1cm4gMDt0cnl7aWYoMDw9alF1ZXJ5LnRtcGwudGFnLnRtcGwub3Blbi50b1N0cmluZygpLmluZGV4T2YoXCJfX1wiKSlyZXR1cm4gMn1jYXRjaChhKXt9cmV0dXJuIDF9KCk7dGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGYsZyl7Zz1nfHx7fTsyPmEmJm0oRXJyb3IoXCJZb3VyIHZlcnNpb24gb2YgalF1ZXJ5LnRtcGwgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8galF1ZXJ5LnRtcGwgMS4wLjBwcmUgb3IgbGF0ZXIuXCIpKTt2YXIgZT1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtcbmV8fChlPWIudGV4dCgpfHxcIlwiLGU9alF1ZXJ5LnRlbXBsYXRlKHMsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIrZStcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGUpKTtiPVtmLiRkYXRhXTtmPWpRdWVyeS5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6Zn0sZy50ZW1wbGF0ZU9wdGlvbnMpO2Y9alF1ZXJ5LnRtcGwoZSxiLGYpO2YuYXBwZW5kVG8oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7alF1ZXJ5LmZyYWdtZW50cz17fTtyZXR1cm4gZn07dGhpcy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ7e2tvX2NvZGUgKChmdW5jdGlvbigpIHsgcmV0dXJuIFwiK2ErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe2RvY3VtZW50LndyaXRlKFwiPHNjcmlwdCB0eXBlPSd0ZXh0L2h0bWwnIGlkPSdcIithK1wiJz5cIitiK1wiPFxcL3NjcmlwdD5cIil9OzA8YSYmKGpRdWVyeS50bXBsLnRhZy5rb19jb2RlPVxue29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0salF1ZXJ5LnRtcGwudGFnLmtvX3dpdGg9e29wZW46XCJ3aXRoKCQxKSB7XCIsY2xvc2U6XCJ9IFwifSl9O2EubWEucHJvdG90eXBlPW5ldyBhLnQ7dmFyIGI9bmV3IGEubWE7MDxiLnZiJiZhLnJhKGIpO2EuYihcImpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZVwiLGEubWEpfSkoKX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcmVxdWlyZSYmXCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9FKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLEUpOkUod2luZG93LmtvPXt9KTtwO1xufSkod2luZG93LGRvY3VtZW50LG5hdmlnYXRvcik7XG4iXX0=
;