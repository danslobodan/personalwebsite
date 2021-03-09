import mongoose from 'mongoose';

interface BlogAttrs {
    title: string;
    description: string;
    link: string;
    date: Date;
}

interface BlogDoc extends mongoose.Document {
    title: string;
    description: string;
    link: string;
    date: Date;
}

interface BlogModel extends mongoose.Model<BlogDoc> {
    build(attrs: BlogAttrs): BlogDoc;
}

const schema = new mongoose.Schema<BlogDoc, BlogModel>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    }
);

schema.statics.build = (attrs: BlogAttrs) => {
    return new Blog(attrs);
};

const Blog = mongoose.model<BlogDoc, BlogModel>('Blog', schema);

export { Blog };
