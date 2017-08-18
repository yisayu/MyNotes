(function (g) {
    var serverContextUrl = "";
    var JWT_TOKEN = "123";
    var proxy = {}
    haha = '123'
    g.proxy = proxy
    var env = {
        getServerContextUrl: function () {
            return serverContextUrl;
        },
        setServerContextUrl: function (url) {
            serverContextUrl = url;
        },
        getAuthToken:function () {
          return JWT_TOKEN;
        }
    };
    proxy.env = env;

    //is
    var types = ["Array", "Boolean", "Date", "Number", "Object", "Function", "RegExp", "String", "Window", "HTMLDocument", "Undefined"]
    var is = {};
    for (var i = 0; i < types.length; i++) {
        var t = types[i];
        is[t] = (function (tp) {
            return function (obj) {
                return Object.prototype.toString.call(obj) == "[object " + tp + "]";
            }
        })(t);
    }
    is.Class = function (obj) {
        return is.Function(obj) && obj.$isClass === true;
    }
    //JSON
    $decode = JSON.parse
    $encode = JSON.stringify;
    //use native promise
    if (is.Function(Promise)) {
        Promise.prototype.fail = Promise.prototype["catch"];
        Promise.prototype.success = Promise.prototype.then;
        var Defer = function () {
            var me = this;
            me.promise = new Promise(function (resolve, reject) {
                me.resolve = resolve;
                me.reject = reject;
            });
        }
    }
    else {
        //promise
        var STATES = {pending: void 0, resolved: 1, rejected: 2}
        var thenable = function (o) {
            return o instanceof Promise || is.Object(o) && is.Function(o.then);
        }

        var Promise = function () {
            this.resolves = [];
            this.rejects = [];
            this.state = STATES.pending;
            this.value = void 0;
        }

        Promise.prototype = {
            then: function (resolve, reject) {
                var deferred = new Defer();
                var resolveWrapper = function (value) {
                    try {
                        var ret = is.Function(resolve) ? resolve(value) : value;
                        if (thenable(ret)) {
                            ret.then(function (newValue) {
                                deferred.resolve(newValue);
                            }, function (newReason) {
                                deferred.reject(newReason);
                            });
                        }
                        else {
                            deferred.resolve(ret);
                        }
                    }
                    catch (e) {
                        deferred.reject(e);
                    }
                }
                var rejectWrapper = function (reason) {
                    if (is.Function(reject)) {
                        try {
                            reject(reason);
                        }
                        catch (e) {
                            deferred.reject(e);
                        }
                    }
                    else {
                        deferred.reject(reason);
                    }
                }

                var me = this;
                switch (me.state) {
                    case STATES.pending:
                        me.resolves.push(resolveWrapper);
                        me.rejects.push(rejectWrapper);
                        break;

                    case STATES.resolved:
                        setTimeout(function () {
                            resolveWrapper(me.value)
                        }, 0)
                        break;

                    case STATES.rejected:
                        setTimeout(function () {
                            rejectWrapper(me.value);
                        }, 0);
                }
                return deferred.promise;
            },
            success: function (resolve) {
                return this.then(resolve, null);
            },
            fail: function (reject) {
                return this.then(null, reject);
            }
        }

        var Defer = function (promise) {
            if (promise) {
                this.promise = promise;
            }
            else {
                this.promise = new Promise();
            }
        }

        Defer.prototype = {
            resolve: function (value) {
                var promise = this.promise;
                if (promise.state != STATES.pending) {
                    return;
                }
                promise.state = STATES.resolved;
                promise.value = value;
                setTimeout(function () {
                    var resolves = promise.resolves;
                    for (var i = 0; i < resolves.length; i++) {
                        resolves[i](value)
                    }
                }, 0);

            },
            reject: function (reason) {
                var promise = this.promise;
                if (promise.state != STATES.pending) {
                    return;
                }
                promise.state = STATES.rejected;
                promise.value = reason;
                setTimeout(function () {
                    var rejects = promise.rejects;
                    for (var i = 0; i < rejects.length; i++) {
                        rejects[i](reason)
                    }
                }, 0);

            }
        }
    }//promise

    //ajax
    var APPLICATION_JSON_TYPE = "application/json";
    var CHARSET = "utf-8";
    var TOKEN_HEAD_NAME = "X-Authorization";
    var TOKEN_COOKIE_NAME = "HZWJ_TK";
    var UUID_HEAD_NAME = "X-UUID";
    var guid = "";
    var isJsonContentType = function (type) {
        if (is.String(type)) {
            return type.substring(0, 16).toLowerCase() == APPLICATION_JSON_TYPE;
        }
    }

    var getCookie = function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }

    var createNewTransport = function () {
        var transport = new XMLHttpRequest();
        transport.withCredentials = true;
        return transport;
    };

    var parseResponse = function (con, conf) {
        if (navigator.cookieEnabled) {
            JWT_TOKEN = getCookie(TOKEN_COOKIE_NAME) || JWT_TOKEN;
        } else {
            JWT_TOKEN = con.getResponseHeader(TOKEN_HEAD_NAME) || JWT_TOKEN;
        }
        var result = {code: 200, msg: "Success"};
        var contentType = con.getResponseHeader("Content-Type");
        var status = con.status == 0 ? 404 : con.status;
        var res = {};
        if (isJsonContentType(contentType)) {
            try {
                res = $decode(con.responseText);
            }
            catch (e) {
                res.code = 509;
                res.msg = "ParseResponseError";
            }
        }
        else {
            res.body = con.responseText;
        }
        result.code = res.code || status;
        !res.msg ? status == 401 || status == 403 ? result.msg = "AccessDenied" : status == 500 ? result.msg = "ServerError" : status == 404 ? result.msg = "NOT FOUND" : 1 : result.msg = res.msg;
        !res.body ? 1 : result.body = res.body;
        return result;
    }

    var createAjaxUrl = function (conf) {
        if (!conf.url) {
            return serverContextUrl + "*.jsonRequest";
        }
        var url = conf.url;
        var params = conf.params || {};
        var q = [];
        for (nm in params) {
            if (params.hasOwnProperty(nm)) {
                var v = params[nm];
                if (is.Undefined(v)) {
                    v = "";
                }
                q.push(nm + "=" + v);
            }
        }
        if (q.length) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + q.join("&");
        }
        if (serverContextUrl && url.indexOf(serverContextUrl) < 0) {
            url = serverContextUrl + url;
        }
        return url;
    }

    var ajax = function (conf) {
        var url = createAjaxUrl(conf);
        var method = conf.method || "POST";
        var con = createNewTransport();
        var async = !conf.sync
        var defer = new Defer();
        try {
            con.open(method, url, async);
            if (async) {
                con.onreadystatechange = function () {
                    if (con.readyState == 4) {
                        var result = parseResponse(con, conf)
                        if (result.code < 300) {
                            defer.resolve(result);
                        }
                        else {
                            defer.reject(result)
                        }
                    }
                };
            }

            var jsonData = conf.jsonData;
            if (jsonData) {
                con.setRequestHeader('encoding', CHARSET);
                con.setRequestHeader("content-Type", APPLICATION_JSON_TYPE);
                con.setRequestHeader(UUID_HEAD_NAME, guid);
                if (!navigator.cookieEnabled) {
                    con.setRequestHeader(TOKEN_HEAD_NAME, JWT_TOKEN);
                }
                con.send($encode(jsonData))
            }
            else {
                con.send("");
            }
        }
        catch (e) {
            var result = {code: 400, msg: "UnknownError"};
            if (async) {
                defer.reject(result, e)
            }
            else {
                return result;
            }
        }
        if (async) {
            return defer.promise;
        }
        else {
            var result;
            if (con.readyState == 4) {
                result = parseResponse(con, conf);
            }
            else {
                result = {code: 401, msg: "ConnectFailed", readyState: con.readyState}
            }
            return result;
        }
    }

    //service method bind
    var bindServiceMethod = function (conf) {
        var jsonData = {
            serviceId: conf.beanName,
            method: conf.method
        };
        return (function () {
            var deferred = new Defer();
            var parameters = Array.prototype.slice.call(arguments, 0);
            jsonData.body = parameters;
            ajax({
                jsonData: jsonData
            })
                .then(function (json) {
                    deferred.resolve(json.body)
                }, function (e) {
                    deferred.reject(e)
                })
            return deferred.promise;
        })//function()
    }
    proxy.bindServiceMethod = bindServiceMethod;

    var uuid = function uuid(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    }
    //login
    login = function (data) {
        guid = uuid(32, 16)
        data.uuid = guid;
        data.cookieEnabled = navigator.cookieEnabled;
        return ajax({
            url: "anon/login",
            jsonData: data
        })
    }
    proxy.login = login;
    logout = function () {
        return ajax({
            url: "anon/logout"
        })
    }
    proxy.logout = logout;
}(this));
