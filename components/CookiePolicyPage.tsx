import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const CookiePolicyPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/cookie-policy.md')
      .then(response => response.text())
      .then(text => setMarkdownContent(text))
      .catch(error => console.error('Error fetching cookie policy:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </article>
    </div>
  );
};
