import mongoose from 'mongoose';

interface UserAttrs {
    googleId: string;
}

export interface UserDoc extends mongoose.Document {
    googleId: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

const schema = new mongoose.Schema<UserDoc, UserModel>(
    {
        googleId: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);

schema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', schema);

export { User };
