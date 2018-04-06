import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import ReactSVG from 'react-svg';

import DynamicOutlines from '../components/DynamicOutlines';

import routes from '../constants/routes';

import './index.scss';

function hexToRgbA(hex, alpha){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
    }
    throw new Error('Bad Hex');
}

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="index-page">
      <div className="front-page-header">
        <h2>Product Management & Engineering</h2>
        <h3>Explore</h3>
        <ReactSVG
          path={ `${routes.ICON}/arrow_down.svg` }
          className="down-arrow" />
      </div>
      <div className="posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }, idx) => {
          const { color, shadow } = post.frontmatter; 
          const postId = `blog-post-preview-${idx}`;
          return (
            <Link to={post.frontmatter.path} key={idx}>
              <div className="blog-post-preview"
                id={ postId }
                style={{
                  background: post.frontmatter.color,
                  boxShadow: `0px 5px 100px 0px ${hexToRgbA(shadow, 0.4)}`
                }}>
                <img className="preview-image"
                  src={ `${routes.LOGO}/${post.frontmatter.image}` } />
                { /*
                <h1>{post.frontmatter.title}</h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p> */ }
                <DynamicOutlines borderColor={ color }/>
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
            color
            shadow
          }
        }
      }
    }
  }
`;
