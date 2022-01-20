import mongoose from 'mongoose'

var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:15
    },
    prices:{
        type:[Number],
        required:true,
    },
    description:{
        type:String,
        required:true,
        maxLength:60
    },
    image:{
        type:String,
        required:true,
    },
    extraOption:{
        type:[{
            text:{type:String,required:true},
            price:{type:Number,required:true}
        }]
    }
},{timestamps:true});

//Export the model
export default mongoose.models.Product || mongoose.model('Product', productSchema);