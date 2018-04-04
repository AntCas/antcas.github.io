import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import routes from '../constants/routes';

import './index.scss';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="index-page">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Link to={post.frontmatter.path} key={post.id}>
              <div className="blog-post-preview"
                style={{ background: post.frontmatter.color }}>
                <img className="preview-image"
                  src={ `${routes.LOGO}/${post.frontmatter.image}` } />
                { /*
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p> */ }
              </div>
            </Link>
          );
        })}
    </div>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
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
