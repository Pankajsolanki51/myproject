const mongoos = require('mongoose')
const { schema } = require('../../learningnodejs/models/user.cjs')

const surlSchema = new mongoos.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,

    },
    visitHistory: [
        { timestamp: { type: Number } }
    ],
},
    { timestamps: true }
)

const URL = mongoos.model('url', schema);

module.exports = URL;