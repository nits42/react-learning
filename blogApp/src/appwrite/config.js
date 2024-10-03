import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class BlogService {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)       // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            const post = await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
            if (post) {
                return post;
            } else {
                console.error("Post creation failed");
                throw new Error("Post creation failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            const post = await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
            if (post) {
                return post;
            } else {
                console.error("Post update failed");
                throw new Error("Post update failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            const post = await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            if (post) {
                return true;
            } else {
                console.error("Post deletion failed");
                throw new Error("Post deletion failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            const posts = await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            if (posts) {
                return posts;
            } else {
                console.error("Posts not found");
                return [];
            }
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            const post = await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            if (post) {
                return post;
            } else {
                console.error("Post not found");
                return null;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            if (response) {
                return response;
            } else {
                console.error("File upload failed");
                throw new Error("File upload failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            const response = await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            if (response) {
                return true;
            } else {
                console.error("File deletion failed");
                throw new Error("File deletion failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    getFilePreview(fileId) {
        try {
            const preview = this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            if (preview) {
                return preview;
            } else {
                console.error("File preview failed");
                throw new Error("File preview failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

const blogService = new BlogService()

export default blogService
       