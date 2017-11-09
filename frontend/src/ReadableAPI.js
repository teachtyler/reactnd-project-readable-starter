const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

const readableApi = {
    /**
     * Categories
     */
    getAllCategories: () =>
        fetch(`${api}/categories`, { headers })
            .then(res => res.json())
            .then(data => data)
    ,
    getAllPostsFromCategory: (category) =>
        fetch(`${api}/${category}/posts`, { headers })
            .then(res => res.json())
            .then(data => data)
    ,
    /**
     * Posts
     */
    getAllPosts: () =>
        fetch(`${api}/posts`, { headers })
            .then(res => res.json())
            .then(data => data)

    ,
    getPost: (postId) =>
        fetch(`${api}/posts/${postId}`, { headers })
            .then(res => res.json())
            .then(data => data)
    ,
    getCommentsForPost: (postId) =>
        fetch(`${api}/posts/${postId}/comments`, { headers })
            .then(res => res.json())
            .then(data => data)
    ,
    /**
     * Comments
     */
    getComment: (postId) =>
        fetch(`${api}/comments/${postId}`, { headers })
            .then(res => res.json())
            .then(data => data)
    ,

}


export const ReadableAPI = readableApi