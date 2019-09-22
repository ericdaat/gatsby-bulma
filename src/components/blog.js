import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import karateKobudoLogo from '../images/oshukai-karate-kobudo.png';

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
                html
                frontmatter {
                  title
                  date(formatString: "DD/MM/YY")
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
            <div class="container">

              <p class="title">Actualités</p>

              {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                      <article class="media">
                      <figure class="media-left">
                        <p class="image is-64x64">
                          <img src={karateKobudoLogo} alt=""/>
                        </p>
                      </figure>
                        <div class="media-content">
                          <div class="content">
                          <strong>{node.frontmatter.title}{" "}</strong>
                          <small>{node.frontmatter.date}</small>

                            <div dangerouslySetInnerHTML={{ __html: node.html }} />
                          </div>
                        </div>
                      </article>
                  </div>
              ))}

            </div>

          </section>
        </div>
      )}
    />
);

export default Blog;
