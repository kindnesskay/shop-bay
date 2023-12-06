
function MyPost({posts}) {
  return (
    <>
    {posts.map(post=>{
        return<p>post.title</p>
    })}
    </>
  )
}

export default MyPost