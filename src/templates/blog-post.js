import React from "react";
import Helmet from "react-helmet";
import ReactSVG from "react-svg";
import Link from "gatsby-link";

import CTA from '../components/CTA';
import PageBreak from '../components/PageBreak';

import routes from '../constants/routes';

import './index.scss';

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="template">
      <div className="blog-post-container">
       <Helmet title={`Anthony Castrio - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
			<Link to="/" className="home-link">
				<ReactSVG
					path={ `${routes.ICON}/ant.svg` }
					className="root-icon"
					wrapperClassName="root-icon-container" />
				<span>Back to Home</span>
			</Link>
      <div className="cta-wrapper">
        <PageBreak />
        <CTA />
        <PageBreak />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
