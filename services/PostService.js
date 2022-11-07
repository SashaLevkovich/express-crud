import Post from '../models/PostModel.js';
import FileService from './FileService.js';

class PostService {
    async create( post, pic ) {
        const fileName = FileService.saveFile( pic );
        const createdPost = await Post.create( [ ...post, fileName ] );
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne( id ) {
        if ( !id ) {
            throw new Error( 'No Id' );
        }
        const post = await Post.findById( id );
        return post;

    }

    async update( post, pic ) {
        if ( !post._id ) {
            throw new Error( 'No Id' );
        }
        const updatedPost = await Post.findByIdAndUpdate( post._id, post, { new: true } );
        return updatedPost;
    }

    async delete( id ) {
        if ( !id ) {
            throw new Error( 'No Id' );
        }

        const post = await Post.findByIdAndDelete( id );
        return post;
    }
}

export default new PostService();