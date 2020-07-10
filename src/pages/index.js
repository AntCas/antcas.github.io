import React from "react";
import Link from "gatsby-link";
import DynamicOutlines from 'dynamic-outlines';
import { graphql } from 'gatsby';

import Layout from '../layouts';

import About from '../components/About';
import Email from '../components/Email';
import PageBreak from '../components/PageBreak';

import routes from '../constants/routes';

import './index.scss';

export default function Index({ data }) {
  const { edges } = data.allMarkdownRemark;

  const createCard = (post, isProject, idx) => {
    const { color } = post.frontmatter; 
    const postId = `blog-post-preview-${idx}`;

    const topics = post.frontmatter.topics.map(topic => (
      `#${topic}`    
    )).join(' ')

    return (
      <div className="PostWrapper" key={idx}>
        { isProject && <h3 className="PostTitle">{`${post.frontmatter.title}`}</h3> }
        <Link to={post.frontmatter.path}>
          <div className="blog-post-preview"
            id={ postId }
            style={{ background: post.frontmatter.color }}>
            {post.frontmatter.image &&
              <img className={ `${isProject ? "project-logo" : "blog-image"}` }
                alt={ `${post.frontmatter.title}` }
                src={ `${isProject ? routes.LOGO : routes.BLOG_IMAGE }/${post.frontmatter.image}` } />
            }
            { isProject ? '' :
                <div>
                  <div className="shade" style={{ background: post.frontmatter.color }} />
                  <div className="blog-title">
                    <h3>{ `${post.frontmatter.title}` }</h3>
                  </div>
                </div>
            }
            <DynamicOutlines
              parentId={ postId }
              borderColor={ color }
              borderGap={ 6 }
              borderWidth={ 4 }
              transitionTime="150ms" />
          </div>
        </Link>
        { isProject && <p className="PostInfo">{`${post.frontmatter.date} - ${topics}`}</p> }
      </div>
    );
  };

  const cardTypeFilter = (post, pathString) => {
    const { title, path } = post.node.frontmatter;
    return (
      title.length > 0 && path.includes(pathString)
    );
  };

  const projectPosts = edges.filter(post => cardTypeFilter(post, '/projects/'))
                            .map( ({ node: post }, idx) => createCard(post, true, idx));

  const blogPosts = edges.filter(post => cardTypeFilter(post, '/blog/'))
                         .map( ({ node: post }, idx) => createCard(post, false, idx));

  return (
    <Layout>
      <div className="index-page">
        <div className="front-page-header">
          <h1>Anthony Castrio</h1>
          <h2>Product Management & Engineering</h2>
          <Email />
        </div>
        <h2>Latest Blog Posts</h2>
        <div className="posts">
          { blogPosts }
        </div>
        <h2>Projects + Teams</h2>
        <div className="posts">
          { projectPosts }
        </div>
        <About />
        <PageBreak />
      </div>
    </Layout>
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
            date(formatString: "YYYY")
            path
            image
            color
            topics
          }
        }
      }
    }
  }
`;
