import mongoose from 'mongoose'

var orderSchema = new mongoose.Schema({
    customer:{
        type:String,
        required:true,
        maxLength:15
    },
    address:{
        type:String,
        required:true,
    },
    total:{
        type:Number,
        required:true,
        maxLength:60
    },
    status:{
        type:Number,
        default:0,
    },
    method:{
       type:Number,
       required:true,
    }
},{timestamps:true});

//Export the model
export default mongoose.models.Order || mongoose.model('Order', orderSchema);