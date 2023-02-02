"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
const abstractSerializer = (dict, fields) => {
    const data = Object();
    fields.forEach((key) => {
        const k = key;
        const v = dict[key];
        data[k] = v;
    });
    return data;
};
const userFields = ["_id", "name", "email", "role"];
const blogFields = [
    "_id",
    "title",
    "description",
    "image",
    "tags",
    "author",
    "createdAt",
    "updatedAt",
];
exports.Serializer = {
    userSerializer: (user) => abstractSerializer(user, userFields),
    usersSerializer: (users) => {
        const data = [];
        users.forEach((user) => {
            data.push(exports.Serializer.userSerializer(user));
        });
        return data;
    },
    blogSerializer: (blog) => abstractSerializer(blog, blogFields),
    blogsSerializer: (blogs) => {
        const data = [];
        blogs.forEach((blog) => {
            data.push(exports.Serializer.blogSerializer(blog));
        });
        return data;
    },
};
