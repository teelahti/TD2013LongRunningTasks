﻿// Extend jQuery to understand our new function
interface JQueryStatic {
    Topic(topic: string): any;
}

(function () {
    var topics = {};

    jQuery.Topic = function (id) {
        var callbacks,
            topic = id && topics[id];

        if (!topic) {
            callbacks = jQuery.Callbacks();
            topic = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove
            };
            if (id) {
                topics[id] = topic;
            }
        }
        return topic;
    };
})();