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
        <Helmet title={`Page not found â ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1>404</h1>
          </div>
          <p>
           Hata Oluştu <span className="tania"></span> 404:
           ilgili sayfa bulunamadı
          </p>
          <div className="list">
            <p>
              <span className="bullet">*</span> Mevcut uygulamayı sonlandırmak için herhangi bir bağlantıya tıklayın.
            </p>
            <p>
          
            </p>
          </div>
          <p className="text-right">
            Devam etmek için herhangi bir bağlantıyı tıklayın<span className="blink">&#9608;</span>
          </p>
        </div>
      </Layout>
    )
  }
}
