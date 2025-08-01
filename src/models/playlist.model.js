import mongoose, {Schema} from "mongoose";

const playListSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    },
    vedios: [
        {
            type : Schema.Types.ObjectId,
            ref : "Vedio"
        }
    ],
    owner : {
        type :Schema.TypesObjectId,
        ref : "User"
    }
},{ timestamps: true})



export const Playlist = mongoose.model("Playlist", playListSchema)