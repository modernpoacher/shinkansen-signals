'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boiler = undefined;

var _get = require('babel-runtime/core-js/reflect/get');

var _get2 = _interopRequireDefault(_get);

var _has = require('babel-runtime/core-js/reflect/has');

var _has2 = _interopRequireDefault(_has);

var _ownKeys = require('babel-runtime/core-js/reflect/own-keys');

var _ownKeys2 = _interopRequireDefault(_ownKeys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _boiler = require('./boiler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Boiler = exports.Boiler = function () {
  function Boiler() {
    (0, _classCallCheck3.default)(this, Boiler);
  }

  (0, _createClass3.default)(Boiler, null, [{
    key: 'stoke',
    value: function stoke(values) {
      (0, _ownKeys2.default)(values).forEach(function (key) {
        if ((0, _has2.default)(_boiler.BOILER, key)) {
          _boiler.boiler.set(key, (0, _get2.default)(values, key));
        }
      });
    }
  }, {
    key: 'ALPHA',
    get: function get() {
      return _boiler.boiler.get('ALPHA');
    }
  }, {
    key: 'OMEGA',
    get: function get() {
      return _boiler.boiler.get('OMEGA');
    }
  }, {
    key: 'EMBARK',
    get: function get() {
      return _boiler.boiler.get('EMBARK');
    }
  }, {
    key: 'DEBARK',
    get: function get() {
      return _boiler.boiler.get('DEBARK');
    }
  }, {
    key: 'INDEX',
    get: function get() {
      return _boiler.boiler.get('INDEX');
    }
  }, {
    key: 'ENTER_ALPHA',
    get: function get() {
      return _boiler.boiler.get('ENTER_ALPHA');
    }
  }, {
    key: 'LEAVE_ALPHA',
    get: function get() {
      return _boiler.boiler.get('LEAVE_ALPHA');
    }
  }, {
    key: 'CHANGE_ALPHA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_ALPHA');
    }
  }, {
    key: 'REMAIN_ALPHA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_ALPHA');
    }
  }, {
    key: 'ENTER_OMEGA',
    get: function get() {
      return _boiler.boiler.get('ENTER_OMEGA');
    }
  }, {
    key: 'LEAVE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('LEAVE_OMEGA');
    }
  }, {
    key: 'CHANGE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_OMEGA');
    }
  }, {
    key: 'REMAIN_OMEGA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_OMEGA');
    }
  }, {
    key: 'ALPHA_PATTERN',
    get: function get() {
      return _boiler.boiler.get('ALPHA_PATTERN');
    }
  }, {
    key: 'OMEGA_PATTERN',
    get: function get() {
      return _boiler.boiler.get('OMEGA_PATTERN');
    }
  }, {
    key: 'EMBARK_STAGE',
    get: function get() {
      return _boiler.boiler.get('EMBARK_STAGE');
    }
  }, {
    key: 'DEBARK_STAGE',
    get: function get() {
      return _boiler.boiler.get('DEBARK_STAGE');
    }
  }, {
    key: 'EMBARK_PATTERN',
    get: function get() {
      return _boiler.boiler.get('EMBARK_PATTERN');
    }
  }, {
    key: 'DEBARK_PATTERN',
    get: function get() {
      return _boiler.boiler.get('DEBARK_PATTERN');
    }
  }, {
    key: 'ENTER_ALPHA_ENTER_OMEGA',
    get: function get() {
      return _boiler.boiler.get('ENTER_ALPHA_ENTER_OMEGA');
    }
  }, {
    key: 'LEAVE_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('LEAVE_ALPHA_LEAVE_OMEGA');
    }
  }, {
    key: 'CHANGE_ALPHA_ENTER_OMEGA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_ALPHA_ENTER_OMEGA');
    }
  }, {
    key: 'CHANGE_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_ALPHA_LEAVE_OMEGA');
    }
  }, {
    key: 'REMAIN_ALPHA_ENTER_OMEGA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_ALPHA_ENTER_OMEGA');
    }
  }, {
    key: 'REMAIN_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_ALPHA_LEAVE_OMEGA');
    }
  }, {
    key: 'CHANGE_ALPHA_CHANGE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_ALPHA_CHANGE_OMEGA');
    }
  }, {
    key: 'CHANGE_ALPHA_REMAIN_OMEGA',
    get: function get() {
      return _boiler.boiler.get('CHANGE_ALPHA_REMAIN_OMEGA');
    }
  }, {
    key: 'REMAIN_ALPHA_CHANGE_OMEGA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_ALPHA_CHANGE_OMEGA');
    }
  }, {
    key: 'REMAIN_ALPHA_REMAIN_OMEGA',
    get: function get() {
      return _boiler.boiler.get('REMAIN_ALPHA_REMAIN_OMEGA');
    }
  }, {
    key: 'EXCEPTION',
    get: function get() {
      return _boiler.boiler.get('EXCEPTION');
    }
  }, {
    key: 'FAILURE',
    get: function get() {
      return _boiler.boiler.get('FAILURE');
    }
  }, {
    key: 'SUCCESS',
    get: function get() {
      return _boiler.boiler.get('SUCCESS');
    }
  }, {
    key: 'IN_PROGRESS',
    get: function get() {
      return _boiler.boiler.get('IN_PROGRESS');
    }
  }, {
    key: 'NO_DECISION',
    get: function get() {
      return _boiler.boiler.get('NO_DECISION');
    }
  }, {
    key: 'COMPLETE',
    get: function get() {
      return _boiler.boiler.get('COMPLETE');
    }
  }, {
    key: 'PENDING',
    get: function get() {
      return _boiler.boiler.get('PENDING');
    }
  }]);
  return Boiler;
}();