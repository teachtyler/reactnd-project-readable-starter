export function loadCategories(categories) {

    return {
        type: "LOAD_CATEGORIES",
        categories
    };
}

export function loadPosts(posts) {

    return {
        type: "LOAD_POSTS",
        posts
    };
}

export function loadPost(post) {
    return {
        type: "LOAD_POST",
        post
    }
}

export function setCategory(category) {
    return {
        type: "SET_CATEGORY",
        category
    }
}

export function loadComments(comments, postId) {
    return {
        type: "LOAD_COMMENTS",
        comments,
        postId
    }
}

export function loadComment(comment) {
    return {
        type: "LOAD_COMMENT",
        comment
    }
}

export function setCurrentPost(postId) {
    return {
        type: "SET_CURRENT_POST",
        postId
    }
}

export function setCurrentComment(commentId) {
    return {
        type: "SET_CURRENT_COMMENT",
        commentId
    }
}