module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            telephone: String,
            pass: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Admin = mongoose.model("admin", schema);
    return Admin;
};