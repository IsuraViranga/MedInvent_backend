var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'med-client',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'medinventRealm',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs3VM0SMtKggJxYPXBj/gjrJpzUYJwDM9/J1bqlN7zJ/wNT/RgdSi9uqMc9sjGaJlGPh1JG4d4vFf/QGREQlYygG28w7AxEwLSTWdZgzJx4a7sNhaiWXQ/QfWK/yHol0J5UZ8BhggZUe5orobrg/EB7+6UttrRBZ3SQlOsvR36VE/DPFbiqlrw44RyrMuimD57DizrI5z71053MOX9C5vhYFSgnN8Lwb4ZJTP72sQr/bgQjQ/c39J9ysRI22KsZWyA91+Q6N/vKkNY8RPvxpqtVKyTqFkosAPOOyOzXflFuQy0cfQslerYLeMln56dhyC2zJ42mVNG3twFg33VQoNAwIDAQAB'
    /*credentials: {
        secret: 'XqKCPCiAn9T1QrCa5ya358bFEb45kNOa'
    }*/
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak,
};