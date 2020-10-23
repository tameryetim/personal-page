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
        <Helmet title={`Page not found – ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1>404</h1>
          </div>
          <p>
           Hata Olu�tu <span className="tania"></span> 404:
           ilgili sayfa bulunamad�
          </p>
          <div className="list">
            <p>
              <span className="bullet">*</span> Mevcut uygulamay� sonland�rmak i�in herhangi bir ba�lant�ya t�klay�n.
            </p>
            <p>
          
            </p>
          </div>
          <p className="text-right">
            Devam etmek i�in herhangi bir ba�lant�y� t�klay�n<span className="blink">&#9608;</span>
          </p>
        </div>
      </Layout>
    )
  }
}