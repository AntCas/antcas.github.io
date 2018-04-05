import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import DynamicOutlines from '../components/DynamicOutlines';

import routes from '../constants/routes';

import './index.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="index-page">
      <div className="posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, idx) => {
          const { color, border} = post.frontmatter; 
          const borderColor = border ? border : color;
          const postId = `blog-post-preview-${idx}`;
          return (
            <Link to={post.frontmatter.path} key={idx}>
              <div className="blog-post-preview"
                id={ postId }
                style={{ background: post.frontmatter.color }}>
                <img className="preview-image"
                  src={ `${routes.LOGO}/${post.frontmatter.image}` } />
                { /*
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p> */ }
                <DynamicOutlines
                  parentId={ postId }
                  borderColor={ borderColor }/>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
            border
            color
          }
        }
      }
    }
  }
`;
