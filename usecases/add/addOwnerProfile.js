const http = require('http');
const querystring = require('querystring');
const { promisify } = require('util');
const pool = require("../../db");
const querys = require("../../query/addQueries");

const keycloakConfig1 ={
  baseUrl: 'http://localhost:8080',
  realm: 'medinventRealm',
  clientId: 'med-client',
  clientSecret: 'XqKCPCiAn9T1QrCa5ya358bFEb45kNOa',
};

const keycloakConfig2 ={
  baseUrl: 'http://localhost:8080',
  realm: 'master',
  clientId: 'admin-cli',
  clientSecret: 'b9A1fxdxvtxZPjb0TyYVl6ahyjCP9zg8',
};

class AddOwnerProfile {
  static async addNewOwner(newUser) {
    try {
      const { user_password, email, first_name, last_name, nic, gender, weight, birth_date, height, mnumber } = newUser;

      // check mail exist
      const checkMailExist = await pool.query(querys.checkMailExist, [email]);
      if (checkMailExist.rows[0].exists) {
        return "email already exists";
      }

      // Perform a query to add new user details to PostgreSQL
      const result = await pool.query(querys.addOwner, [user_password, email, first_name, last_name, nic, gender, weight, birth_date, height, mnumber]);

      // perform method to add username and password to Keycloak
      const keycloakresult = await this.createUser(email, user_password,first_name);

      if (keycloakresult.createStatusMessage === "done") {
        return "created account successfully";
      }
    } catch (error) {
      console.error('Error executing query:', error.message);
      throw new Error('Error occurred when creating a new user');
    }
  }

  static async requestAsync(options, data) {
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
          responseData += chunk;
        });

        res.on('end', () => {
          resolve(responseData);
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (data) {
        req.write(data);
      }

      req.end();
    });
  }

  static async createTokenRequest() {
    const getTokenOptions = {
      hostname: 'localhost',
      port: 8080,
      path: `/realms/${keycloakConfig2.realm}/protocol/openid-connect/token`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const getTokenData = querystring.stringify({
      client_id: keycloakConfig2.clientId,
      client_secret: keycloakConfig2.clientSecret,
      grant_type: 'client_credentials',
    });

    try {
      const responseData = await this.requestAsync(getTokenOptions, getTokenData);
      const adminToken = JSON.parse(responseData).access_token;
      console.log('admin token', adminToken);

      return adminToken;
    } catch (error) {
      console.error('Error obtaining admin token:', error.message);
      throw error;
    }
  }

  static async createUser(get_email, user_password,first_name) {
    try {
      const adminToken = await this.createTokenRequest();

      const createUserOptions = {
        hostname: 'localhost', // Change this to your Keycloak hostname
        port: 8080,
        path: `/admin/realms/${keycloakConfig1.realm}/users`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminToken}`,
        },
      };

      const createUserData = JSON.stringify({
        username: first_name,
        email:get_email,
        enabled: true,
        credentials: [
          {
            type: 'password',
            value: user_password,
            temporary: false,
          },
        ],
      });

      const createUserResponse = await this.requestAsync(createUserOptions, createUserData);
      

      // if (createUserResponse.statusCode !== 201) {
      //   throw new Error(`Failed to create user. Status code: ${createUserResponse.statusCode}`);
      // }

      // const createdUser = JSON.parse(createUserResponse);
      // console.log('Created User:', createdUser);

      return {
        createStatusMessage: "done",
      };
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw error;
    }
  }
}

module.exports = AddOwnerProfile;
