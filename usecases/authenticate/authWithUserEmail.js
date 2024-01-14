//const pool = require("../../db");
//const querys = require("../../query/authenticateQueries");
//const { read } = require('fs');
const http = require('http');
const querystring = require('querystring');

const keycloakConfig = {
  grantType: 'password',
  clientId: 'med-client',
  clientSecret: 'XqKCPCiAn9T1QrCa5ya358bFEb45kNOa',
  realm: 'medinventRealm',
};

class AuthWithEmailCredentials {
    static async authWithEmailPassword(getBody) {
      try {
        const { email, user_password } = getBody;
    
        // Construct the request payload
        const requestBody = querystring.stringify({
          grant_type: keycloakConfig.grantType,
          client_id: keycloakConfig.clientId,
          client_secret: keycloakConfig.clientSecret,
          username: email,
          password: user_password,
        });
        
        // Set the headers
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        };
    
        // Configure the HTTP request options
        const options = {
          hostname: 'localhost',
          port: 8080,
          path: `/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
          method: 'POST',
          headers,
        };
    
        // Make the HTTP request
        const keycloakResponse = await this.httpRequest(options, requestBody);
    
        const { access_token, refresh_token, expires_in } = JSON.parse(keycloakResponse);
        if(access_token==undefined || refresh_token==undefined|| expires_in==undefined)
        {
          throw new Error('undefined');
        }
        return {
          message:'Login successful',
          access_token, 
          refresh_token, 
          expires_in,
        }
      }catch (error) {
        console.error('Error authenticating:', error.message);
        throw new Error('invalid credentials');
      }  
    }
    static async httpRequest(options, requestBody) {
      return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
          let data = '';
    
          res.on('data', (chunk) => {
            data += chunk;
          });
    
          res.on('end', () => {
            resolve(data);
          });
        });
    
        req.on('error', (error) => {
          reject(error);
        });
    
        req.write(requestBody);
        req.end();
      });
    }
}
module.exports=AuthWithEmailCredentials;  