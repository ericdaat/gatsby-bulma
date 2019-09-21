import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"

import './style.scss';

const Blog = ( ) => (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }`
      }
      render={data => (
        <div>
          <section className="section">
            <div class="container content">

              <p class="title">Actualités</p>

              {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                      <Link to={node.fields.slug}>
                      <h3>
                          {node.frontmatter.title}{" "}— {node.frontmatter.date}
                      </h3>
                      <p>{node.excerpt}</p>
                      </Link>
                  </div>
              ))}

            </div>

          </section>
        </div>
      )}
    />
);

export default Blog;
