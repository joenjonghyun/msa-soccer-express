module.exports = mongoose => mongoose.model('article',
        mongoose.Schema(
           {title: String,
            name: String,
            teamId: String,
            subject: String
            }, {timestamps: true}
        )
    )