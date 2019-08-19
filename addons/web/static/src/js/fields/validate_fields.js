/**
 * Created by zmt
 */
odoo.define('web.validate_fields', function (require) {
    "use strict";

    var field_registry = require('web.field_registry');
    var AbstractField = require('web.AbstractField');

    var validator = AbstractField.extend({
        /**
         * @constructor
         * @override
         */
        init: function(parent, name, record, options) {
            this._super(parent, name, record, options);
            var tx_id = record.data.tx_id
            if(tx_id && tx_id === 'False'){
                this.do_warn('区块链验证错误！');
            }
            this.do_warn(tx_id);
        }
    })


    field_registry.add('validator_tx_id', validator)
});
