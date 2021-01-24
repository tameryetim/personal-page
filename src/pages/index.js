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
import tamer from '../../content/images/siyahb.jpg'


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
        Ben Tamer, Commodore 64 dönemlerinden beri yazılım üretiyor, bilgi ve birikimlerimi paylaşmak adına tüm mecralarda yer almaya çalışıyorum.
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

      <center>
      <a href='https://www.bossbasketballmanager.com' target='_blank'><img className="gifcik" src='https://www.bossbasketballmanager.com/dosyalar/gif.gif'  /></a>
      </center>


          <section className="section">


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
