/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi-heroku\.wizzi\src\features\blog\api\post.ts.ittf
*/
import path from 'path';
import {GetPostModel} from '../models/post';
import {IPostModel} from '../types';
import {ValidateResult, CRUDResult} from '../../../common/types';

const myname = 'features.blog.api.post';

export async function validatePost(owner: string, name: string) {

    const Post = GetPostModel();
    return new Promise((resolve, reject) => {
        
            let query = { owner: owner, name: name };
            Post.find(query, (err: any, result: any) => {
            
                if (err) {
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            isValid: false, 
                            message: 'blog post already exists'
                         });
                }
                resolve({
                    isValid: true
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getPostList'
        // 'options'
        // options
*/
async function getPostList(options?: any):  Promise<CRUDResult> {

    options = options || {};
    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            const query = Post.find(options.query);
            if (options.limit) {
                query.limit(options.limit);
            }
            if (options.sort) {
                query.sort(options.sort);
            }
            query.find((err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getPostList', 'Post.find', 'error', err);
                    return reject(err);
                }
                const resultItem = [];
                var i, i_items=result, i_len=result.length, item;
                for (i=0; i<i_len; i++) {
                    item = result[i];
                    const item_obj = {
                        _id: item._id, 
                        id: item.id, 
                        owner: item.owner, 
                        name: item.name, 
                        title: item.title, 
                        content: item.content, 
                        state: item.state, 
                        pubblished_at: item.pubblished_at
                     };
                    resultItem.push(item_obj)
                }
                resolve({
                    oper: 'getPostList', 
                    ok: true, 
                    item: resultItem
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getPost'
        // owner
        // name
*/
async function getPost(owner: string, name: string):  Promise<CRUDResult> {

    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            Post.find(query, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getPost', 'Post.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'get', 
                    ok: false, 
                    message: 'Blog post not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'getPostById'
        // id
*/
async function getPostById(id: string):  Promise<CRUDResult> {

    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            Post.find({
                _id: id
             }, (err: any, result: IPostModel[]) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getPost', 'Post.find', 'error', err);
                    return reject(err);
                }
                if (result.length == 1) {
                    return resolve({
                            oper: 'get', 
                            ok: true, 
                            item: result[0]
                         });
                }
                resolve({
                    oper: 'getPost', 
                    ok: false, 
                    message: 'Blog post not found'
                 })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'createPost'
        // owner
        // name
        // title
        // content
        // state
        // pubblished_at
*/
async function createPost(owner?: string, name?: string, title?: string, content?: string, state?: string, pubblished_at?: Date):  Promise<CRUDResult> {

    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            let query = {
                owner: owner, 
                name: name
             };
            
            Post.find(query, 
            // loog myname, 'getPost', 'Post.find', 'result', result
            (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'getPost', 'Post.find', 'error', err);
                    return reject(err);
                }
                if (result.length > 0) {
                    return resolve({
                            oper: 'create', 
                            ok: false, 
                            message: 'Blog post already exists'
                         });
                }
                const newPost = new Post({
                    owner: owner, 
                    name: name, 
                    title: title, 
                    content: content, 
                    state: state, 
                    pubblished_at: pubblished_at, 
                    created_at: new Date(), 
                    updated_at: new Date()
                 });
                newPost.save(function(err: any, doc: any) {
                
                    if (err) {
                        console.log("[31m%s[0m", myname, 'createPost', 'newPost.save', 'error', err);
                        return reject(err);
                    }
                    return resolve({
                            oper: 'createPost', 
                            ok: true, 
                            item: doc._doc, 
                            message: 'Blog post created'
                         });
                })
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'updatePost'
        // owner
        // name
        // title
        // content
        // state
        // pubblished_at
*/
async function updatePost(id?: string, owner?: string, name?: string, title?: string, content?: string, state?: string, pubblished_at?: Date):  Promise<CRUDResult> {

    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
            const update: any = {};
            if (typeof owner !== 'undefined') {
                update['owner'] = owner;
            }
            if (typeof name !== 'undefined') {
                update['name'] = name;
            }
            if (typeof title !== 'undefined') {
                update['title'] = title;
            }
            if (typeof content !== 'undefined') {
                update['content'] = content;
            }
            if (typeof state !== 'undefined') {
                update['state'] = state;
            }
            if (typeof pubblished_at !== 'undefined') {
                update['pubblished_at'] = pubblished_at;
            }
            update['updated_at'] = new Date();
            
            Post.findOneAndUpdate(query, update, {}, (err: any, result: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'updatePost', 'Post.findOneAndUpdate', 'error', err);
                    return reject(err);
                }
                if (!result) {
                    console.log("[31m%s[0m", myname, 'updatePost', 'Post.findOneAndUpdate', 'error', 'document not found');
                    return reject({
                            oper: 'updatePost', 
                            ok: false, 
                            message: 'Blog post document not found: ' + id
                         });
                }
                
                return resolve({
                        oper: 'updatePost', 
                        ok: true, 
                        message: 'Blog post updated'
                     });
            }
            )
        }
        );
}

export /**
    // console.log
        // myname
        // 'deletePost'
        // owner
        // name
*/
async function deletePost(id: string, owner?: string, name?: string, title?: string, content?: string, state?: string, pubblished_at?: Date):  Promise<CRUDResult> {

    
    
    const Post = GetPostModel();
    
    return new Promise((resolve, reject) => {
        
            
            var query;
            if (id && id.length > 0) {
                query = {
                    _id: id
                 };
            }
            else {
                query = {
                    owner: owner, 
                    name: name
                 };
            }
            
            Post.deleteOne(query, (err: any) => {
            
                if (err) {
                    console.log("[31m%s[0m", myname, 'deletePost', 'Post.deleteOne', 'error', err);
                    return reject(err);
                }
                resolve({
                    oper: 'deletePost', 
                    ok: true, 
                    message: 'Blog post'
                 })
            }
            )
        }
        );
}
