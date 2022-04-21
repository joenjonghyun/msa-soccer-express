export default function TodoModel(mongoose){
    mongoose.model('Todo',
        mongoose.Schema(
            { task: String }, { timestamps: true}
        )
    )
}