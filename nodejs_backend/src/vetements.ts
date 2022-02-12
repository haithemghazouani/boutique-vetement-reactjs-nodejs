import mongoose, {Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate";
let vetementSchema=new mongoose.Schema({
type:{type:String,required:true },
quantite:{type: String, required: true},
agent:{type:String,required:true}
});
vetementSchema.plugin(mongoosePaginate);
const Vetement=mongoose.model("Vetement",vetementSchema);
export default Vetement;
