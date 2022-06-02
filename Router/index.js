const express = require('express'); 
const app = express(); 
const courseRoutes = require('./routes/courses'); 
const seminarRoutes = require('./routes/seminars');
const adminRoutes = require('./routes/admin'); 

app.use('/', courseRoutes); 
app.use('/seminars', seminarRoutes); 
app.use('/admin', adminRoutes) ; 

app.listen(3000, () => {
    console.log("App Listening on 3000");
})
