import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {type: String, required: true}, 
    chapter: {type: Integer, required: true}, 
    author: {type: String, required: true},
    genre: {type: String, required: true},
    status: {type: String, required: true},
    lastUpdated: {type: String, required: true},
    readTime: {type: Double, required: true},
    length: {type: String, required: true},
    id: {type: String}
})



export default mongoose.model("Book", bookSchema);