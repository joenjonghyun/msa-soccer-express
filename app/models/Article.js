export default function Article(mongoose) {
    mongoose.model('article', mongoose.Schema({
        task: String
    }, {timestamps: true}))
}
