const express = require('express');

// express setup
const app = express();
app.use(express.json());

//import route files
const searchRoutes = require('./routes/searchroutes');
const editRoutes =require('./routes/editRoutes');
const newCreateRoutes =require('./routes/newCreateRoutes');
const viewRoutes =require('./routes/viewRoutes');
const authenticateRoutes =require('./routes/authenticateRoutes');

// Routes localhost:3000....
app.use('/api/search',searchRoutes);
app.use('/api/edit',editRoutes);
app.use('/api/new',newCreateRoutes);
app.use('/api/view',viewRoutes);
app.use('/api/auth',authenticateRoutes);

const port = 3000;
app.listen(port, ()=>{
    console.log(`server is now listening to port ${port}`);
})
