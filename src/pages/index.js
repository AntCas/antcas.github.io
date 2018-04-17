import React from "react";
import Link from "gatsby-link";

import DynamicOutlines from '../components/DynamicOutlines';
import PageBreak from '../components/PageBreak';
import About from '../components/About';

import routes from '../constants/routes';

import './index.scss';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, idx) => {
          const { color, shadow } = post.frontmatter; 
          const postId = `blog-post-preview-${idx}`;

          return (
            <Link to={post.frontmatter.path} key={idx}>
              <div className="blog-post-preview"
                id={ postId }
                style={{ background: post.frontmatter.color }}>
                <img className="preview-image"
                  src={ `${routes.LOGO}/${post.frontmatter.image}` } />
                <DynamicOutlines borderColor={ color } />
              </div>
            </Link>
          );
        });

  return (
    <div className="index-page">
      <div className="front-page-header">
        <h1>Anthony Castrio</h1>
        <h2>Product Management & Engineering</h2>
        <a className="email" href="mailto:anthonycastrio+public@gmail.com">
          anthonycastrio<span className="hide">+public</span>@gmail.com
        </a>
        <PageBreak />
      </div>
      <div className="posts">
        { posts }
      </div>
      <PageBreak />
      <About />
      <PageBreak />
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
            color
          }
        }
      }
    }
  }
`;
