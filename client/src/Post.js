 import Comments from "./Comments"

const Post = ({ title, comments, id, selectedFile }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <img src={selectedFile} />
    <Comments postId={id} comments={comments} />
  </div>
}

export default Post;
