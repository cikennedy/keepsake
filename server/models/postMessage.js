import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ 
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// exporting a mongoose model from the postMessage file, from this model we can run CRUD commands
export default PostMessage;