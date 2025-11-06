import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type:sring ,
        required:true
    },
    createdAt:{
        type: String,
        required:true
    },
    videos:[
        {
            type:Schema.Types.ObjectId,
            req:"Video"
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        req:"User"
    },

},{
    timestamps:true
});

export const playlist = mongoose.model("Playlist", playlistSchema);