// keep track of which post is currently selected
let selectedPost = null;
let postsList = [];
let isLoading = false; // not really using this but might be useful later

// this function runs when the page loads
function main() {
    loadAllPosts();
    setupNewPostForm();
}

// get posts from the server and display them
async function loadAllPosts() {
    try{
        // fetch all posts from api
        const response = await fetch('http://localhost:3000/posts');
        const posts = await response.json();
        postsList = posts;
        
        // get the container where posts will go
        var postsContainer = document.getElementById('post-list');
        
        // clear out any old content
        postsContainer.innerHTML = '';
        
        // loop through each post and create html for it
        for(let i = 0; i < posts.length; i++) {
            let post = posts[i];
            const postElement = document.createElement('div');
            postElement.className = 'blog-post';
            postElement.innerHTML = `
                <div class="post-title">${post.title}</div>
                <div class="post-author">by ${post.author}</div>
            `;
            
            // when someone clicks on this post, show its details
            postElement.addEventListener('click', function() {
                showPostDetails(post.id);
            });
            
            postsContainer.appendChild(postElement);
        }
                
                console.log('loaded', posts.length, 'posts successfully');
            } catch (error) {
                console.error('oops, couldnt load posts:', error);
                document.getElementById('post-list').innerHTML = '<p style="color: red;">Failed to load posts. Is the server running?</p>';
            }
        }

        // show details for a specific post
        async function showPostDetails(postId) {
            try {
                // get the full post data
                const response = await fetch(`http://localhost:3000/posts/${postId}`);
                const post = await response.json();
                selectedPost = post;
                
                // show the post details
                const detailsDiv = document.getElementById('post-detail');
                detailsDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p><strong>Author:</strong> ${post.author}</p>
                    <div style="margin-top: 15px;">
                        <strong>Content:</strong>
                        <p style="margin-top: 10px; line-height: 1.5;">${post.content}</p>
                    </div>
                    <div class="button-group">
                        <button onclick="showEditForm()" class="btn btn-gray">Edit Post</button>
                        <button onclick="deleteThisPost(${post.id})" class="btn btn-red">Delete Post</button>
                    </div>
                `;
                
                // highlight the selected post in the list
                document.querySelectorAll('.blog-post').forEach(item => {
                    item.classList.remove('selected');
                });
                event.target.closest('.blog-post').classList.add('selected');
                
                // make sure edit form is hidden
                document.getElementById('edit-post-form').classList.add('hide');
                
            } catch (error) {
                console.error('error getting post details:', error);
            }
        }

        // setup the form for adding new posts
        function setupNewPostForm() {
            const newPostForm = document.getElementById('new-post-form');
            
            newPostForm.addEventListener('submit', async function(e) {
                e.preventDefault(); // dont refresh the page
                
                // get values from form inputs
                const title = document.getElementById('post-title').value;
                const content = document.getElementById('post-content').value;
                const author = document.getElementById('post-author').value;
                
                // create new post object
                const newPost = {
                    title: title,
                    content: content,
                    author: author
                };
                
                try {
                    // send new post to server
                    const response = await fetch('http://localhost:3000/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newPost)
                    });
                    
                    if (response.ok) {
                        // clear the form
                        newPostForm.reset();
                        
                        // reload all posts to show the new one
                        loadAllPosts();
                        
                        alert('New post created!');
                    } else {
                        alert('Something went wrong adding the post');
                    }
                } catch (error) {
                    console.error('error adding new post:', error);
                    alert('Couldnt add the post, please try again');
                }
            });
        }

        // show the edit form with current post data
        function showEditForm() {
            if (!selectedPost) return;
            
            // fill in the edit form with current data
            document.getElementById('edit-title').value = selectedPost.title;
            document.getElementById('edit-content').value = selectedPost.content;
            
            // show the edit form
            document.getElementById('edit-post-form').classList.remove('hide');
            
            // handle form submission
            const editForm = document.getElementById('edit-post-form');
            editForm.onsubmit = async function(e) {
                e.preventDefault();
                
                const updatedPost = {
                    ...selectedPost,
                    title: document.getElementById('edit-title').value,
                    content: document.getElementById('edit-content').value
                };
                
                try {
                    const response = await fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedPost)
                    });
                    
                    if (response.ok) {
                        // hide the edit form
                        editForm.classList.add('hide');
                        
                        // refresh everything
                        loadAllPosts();
                        showPostDetails(selectedPost.id);
                        
                        alert('Post updated successfully!');
                    }
                } catch (error) {
                    console.error('error updating post:', error);
                    alert('Failed to update post');
                }
            };
        }

        // cancel editing
        document.getElementById('cancel-edit-btn').addEventListener('click', function() {
            document.getElementById('edit-post-form').classList.add('hide');
        });

        // delete a post
        async function deleteThisPost(postId) {
            if (!confirm('Are you sure you want to delete this post? This cannot be undone.')) {
                return;
            }
            
            try {
                const response = await fetch(`http://localhost:3000/posts/${postId}`, {
                    method: 'DELETE'
                });
                
                if (response.ok) {
                    // clear the details view
                    document.getElementById('post-detail').innerHTML = '<p style="color: #666; font-style: italic;">Click on a post to see details here...</p>';
                    selectedPost = null;
                    
                    // refresh the posts list
                    loadAllPosts();
                    
                    alert('Post deleted');
                } else {
                    alert('Failed to delete post');
                }
            } catch (error) {
                console.error('error deleting post:', error);
                alert('Something went wrong while deleting');
            }
        }

        // start everything when page is ready
        document.addEventListener('DOMContentLoaded', main);