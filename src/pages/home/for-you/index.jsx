import { FixedSizeList as WList } from "react-window";
import Post from "~/components/post";
import { useState } from "react";
import { posts as postData } from "~/mock/posts";

export default function ForYou() {
  const [posts, setPosts] = useState(postData);

  const loadMorePosts = () => {
    setPosts((prev) => [...prev, ...postData]);
  };

  return (
    <WList
      height={600}
      itemCount={posts.length}
      itemSize={100}
      width={"100%"}
      onScroll={({ scrollOffset, clientHeight, scrollHeight }) => {
        if (scrollOffset + clientHeight >= scrollHeight) {
          loadMorePosts();
        }
      }}
    >
      {({ index, style }) => (
        <div style={style} key={posts[index].id}>
          <Post post={posts[index]} />
        </div>
      )}
    </WList>
  );
}
