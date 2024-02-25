const express = require('express');

// express setup
const app = express();
app.use(express.json());

//keyCloak related 
//const keycloak = require('./services/keyCloak').initKeycloak();
//app.use(keycloak.middleware());

//import route files
const searchRoutes = require('./routes/searchroutes');
//const editRoutes =require('./routes/editRoutes');
const addRoutes =require('./routes/addRoutes');
const viewRoutes =require('./routes/viewRoutes');
const authenticateRoutes =require('./routes/authenticateRoutes');

// Routes localhost:3000....
app.use('/api/search',searchRoutes);
//app.use('/api/edit',editRoutes);
app.use('/api/add/new',addRoutes);   
app.use('/api/view',viewRoutes);
app.use('/api/auth',authenticateRoutes);

const port = 3000;                                    
app.listen(port, ()=>{
    console.log(`server is now listening to port ${port}`);
})
