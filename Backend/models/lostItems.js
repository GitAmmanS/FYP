const mongoose = require("mongoose");
const lostItems = mongoose.Schema({
    items_ID:{type:mongoose.Schema.Types.ObjectId ,ref :"items",required:true},
    date:{type:String ,required:true},
    users_ID:{type:mongoose.Schema.Types.ObjectId ,ref :"users",required:true},
})

module.exports = mongoose.model("lostItems", lostItems);