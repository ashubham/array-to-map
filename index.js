
'use strict';

module.exports =

    /**
     * Takes in a primitive [keys] and returns a {key:key}
     *  
     * @param array [key1, key2 ... keyn]
     */
    function(arr) {
        return arr.reduce(function (keymirror, key) {
            if(typeof key != 'object' && typeof key != 'function')
                keymirror[key] = key;
            return keymirror;
        }, {});
    };
