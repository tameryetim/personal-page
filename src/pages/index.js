import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import podcasts from '../../data/podcasts'
import tamer from '../../content/images/tamers.jpg'


export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Kişisel İnternet Sitesi`} />
        <SEO />
         <section className="blurb">
        <div className="container">
          <div className="lead">
            <div className="elevators">
     
        <h3>Merhabalar</h3>
              <p>
        Ben Tamer, evli ve bir çocuk babası olarak Eskişehir'de yaşıyorum. Commodore 64 dönemlerinden beri yazılım üretiyor, bilgi ve birikimlerimi paylaşmak adına tüm mecralarda yer almaya çalışıyorum.
        </p>
     <p className="stack-mobile">

          <a
            className="button"
            href="https://www.superpeer.com/tamer"
            target="_blank"
            rel="noreferrer"
          >
            Superpeer üzerinde görüşme
          </a>
      
        </p>
     

            </div>
            <div className="newsletter-section">
              <center>
                    <img src={tamer} alt="tamer" className="avatar" />
        
              </center>
          
            </div>
          </div>
        </div>
      </section>
        <div className="container front-page">



          <section className="section">

      <div style="margin : 0 auto">
          <!-- Begin Mailchimp Signup Form -->
          <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
          <style type="text/css">
              #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
              /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                 We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          </style>
          <div id="mc_embed_signup">
              <form action="https://tameryetim.us2.list-manage.com/subscribe/post?u=51aac1edce58c2fbd21e62975&amp;id=4d36626e0b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                      <h2>E-Mail Listesi</h2>
                      <div class="mc-field-group">
                          <label for="mce-EMAIL">Email Adresiniz </label>
                          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                      </div>
                      <div id="mce-responses" class="clear">
                          <div class="response" id="mce-error-response" style="display:none"></div>
                          <div class="response" id="mce-success-response" style="display:none"></div>
                      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_51aac1edce58c2fbd21e62975_4d36626e0b" tabindex="-1" value=""></div>
                      <div class="clear"><input type="submit" value="KAYDOL" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
              </form>
          </div>

          <!--End mc_embed_signup-->

          <!--End mc_embed_signup-->
      </div>


<br />

            <h2>
              Son İçerikler
              <Link to="/blog" className="view-all">
                Tümünü Gör
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>



         

          {/* 
          
           <section className="section">
            <h2>
              Most Popular
              <Link to="/categories/popular" className="view-all">
                View all
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>My Projects</h2>
            <ProjectListing projects={projects} />
          </section>
          
          <section className="section">
            <h2>Brodcasts</h2>
            <SimpleListing data={podcasts} />
          </section> */}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }

            date
            template
          }
        }
      }
    }
  }
`
