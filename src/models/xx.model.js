import mongoose, { Schema } from 'mongoose';

const schema = Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

export default new mongoose.model("Xx", schema);;
