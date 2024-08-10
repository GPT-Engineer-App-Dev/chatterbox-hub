import React from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';

const dummyPosts = [
  { title: "First post on Reddit Clone", content: "This is the content of the first post.", votes: 10, comments: 5 },
  { title: "Another interesting post", content: "Here's some more content for you to read.", votes: 7, comments: 3 },
  { title: "What do you think about this?", content: "Share your thoughts in the comments!", votes: 15, comments: 8 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <PostList posts={dummyPosts} />
      </main>
    </div>
  );
};

export default Index;