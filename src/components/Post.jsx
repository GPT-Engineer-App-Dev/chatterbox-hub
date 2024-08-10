import React from 'react';
import { ArrowUp, ArrowDown, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Post = ({ title, content, votes, comments }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="flex flex-col items-center mr-4">
          <Button variant="ghost" size="sm"><ArrowUp className="h-4 w-4" /></Button>
          <span className="font-bold">{votes}</span>
          <Button variant="ghost" size="sm"><ArrowDown className="h-4 w-4" /></Button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
      <div className="flex items-center text-gray-500">
        <MessageSquare className="h-4 w-4 mr-1" />
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

export default Post;