const mongoose = require("mongoose")
const Schema =mongoose.Schema;

const eventdashboardSchema =new Schema({
    eventname : 'string',
    localsName:'string',
    attendess : 'string',
    date : 'string',
    
});

const eventdashboard =mongoose.model("eventdashboard",eventdashboardSchema)

module.exports =eventdashboard; 