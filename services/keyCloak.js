const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');

const app = express();

// Session configuration
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Keycloak configuration
const keycloak = new Keycloak({
  store: memoryStore(), // You can use a different store based on your setup
  scope: 'openid',
  clientId: 'medClient',
  bearerOnly: true,
  serverUrl: 'https://localhost/8080/',
  realm: 'medinventRealm',
});

app.use(keycloak.middleware());

function memoryStore() {
  let users = {};
  return {
    get: (key, callback) => callback(null, users[key]),
    set: (key, value, callback) => {
      users[key] = value;
      callback(null, value);
    },
    destroy: (key, callback) => {
      delete users[key];
      callback();
    },
  };
}

/*
const Keycloak = require('keycloak-connect')
const session = require('express-session')

const initKeycloak = (app) => {
  const memoryStore = new session.MemoryStore()
  const keycloak = new Keycloak({ store: memoryStore })
  // session
  app.use(session({
    secret: 'BeALongSecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }))

  app.use(keycloak.middleware())

  return keycloak
}

module.exports = initKeycloak
*/