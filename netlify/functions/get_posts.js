let firebase = require('./firebase')

exports.handler = async function(event) {
  let postsData = []
  
  // Retrieve posts from Firestore; for each post, construct
  // a new Object that contains the post's id, username, imageUrl,
  // and number of likes. Add the newly created Object to the
  // postsData Array.
  
  let db = firebase.firestore()
  let querySnapshot = await db.collection('posts').orderBy('created').get()
  let posts = querySnapshot.docs 
  for (let i=0; i<posts.length; i++){
    let postId = posts[i].id
    let post = posts[i].data()
    postsData.push({
      id: postId,
      username: post.username, 
      imageUrl: post.imageUrl,
      likes: post.likes
    })
  }





  return {
    statusCode: 200,
    body: JSON.stringify(postsData)
  }
}