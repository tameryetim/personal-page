import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import Layout from '../layout'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class NotFoundPage extends Component {
  static contextType = ThemeContext

  componentDidMount() {
    const { setNotFound } = this.context

    setNotFound()
  }

  componentWillUnmount() {
    const { setFound } = this.context

    setFound()
  }

  render() {
    return (
      <Layout>
        <Helmet title={`Page not found â€“ ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1>404</h1>
          </div>
          <p>
           Hata Oluþtu <span className="tania"></span> 404:
           ilgili sayfa bulunamadý
          </p>
          <div className="list">
            <p>
              <span className="bullet">*</span> Mevcut uygulamayý sonlandýrmak için herhangi bir baðlantýya týklayýn.
            </p>
            <p>
          
            </p>
          </div>
          <p className="text-right">
            Devam etmek için herhangi bir baðlantýyý týklayýn<span className="blink">&#9608;</span>
          </p>
        </div>
      </Layout>
    )
  }
}