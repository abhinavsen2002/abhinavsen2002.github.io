import { useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './BlogPost.module.css';
import { blogPosts } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const contentRef = useRef(null);

  // Find the blog post by slug
  const post = blogPosts.find(post => post.slug === slug);

  // Convert inline $math$ to \(math\) while protecting currency like $25 or $100
  const processedContent = useMemo(() => {
    if (!post?.content) return '';
    return post.content.replace(/(?<!\$)\$(?!\$)(?!\d)([^$\n]+?)(?<!\$)\$(?!\$)/g, '\\($1\\)');
  }, [post?.content]);

  // Render KaTeX math when post is loaded
  useEffect(() => {
    const tryRenderMath = () => {
      if (window.renderMathInElement && contentRef.current) {
        window.renderMathInElement(contentRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          throwOnError: false
        });
        return true;
      }
      return false;
    };

    if (!tryRenderMath()) {
      const interval = setInterval(() => {
        if (tryRenderMath()) {
          clearInterval(interval);
        }
      }, 100);
      const timeout = setTimeout(() => clearInterval(interval), 5000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [processedContent]);

  if (!post) {
    return (
      <div className={styles.blogPost}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const markdownComponents = {
    img: ({ src, alt, ...props }) => {
      const isVideo = src && (src.endsWith('.mp4') || src.endsWith('.webm'));
      if (isVideo) {
        return (
          <figure className={styles.mediaFigure}>
            <video
              src={src}
              controls
              autoPlay
              muted
              loop
              playsInline
              className={styles.videoSnippet}
            />
            {alt && <figcaption className={styles.caption}>{alt}</figcaption>}
          </figure>
        );
      }
      return (
        <figure className={styles.mediaFigure}>
          <img src={src} alt={alt} className={styles.image} {...props} />
          {alt && <figcaption className={styles.caption}>{alt}</figcaption>}
        </figure>
      );
    },
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    }
  };

  return (
    <div className={styles.blogPost}>
      <article className={styles.article}>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
        
        <header className={styles.header}>
          <div className={styles.date}>{post.date}</div>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        {post.videoSrc && (
          <div className={styles.videoPlayer}>
            <video
              src={post.videoSrc}
              controls
              playsInline
              preload="metadata"
              className={styles.fullVideo}
            />
          </div>
        )}

        {post.youtubeId && (
          <div className={styles.youtubeContainer}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${post.youtubeId}`}
              title={post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.youtubeIframe}
            />
          </div>
        )}

        <div className={styles.content} ref={contentRef}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {processedContent}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
