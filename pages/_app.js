import React from 'react'
import App, { Container } from 'next/app'
import { CSSReset } from '@chasemccoy/kit'
import Head from 'next/head'
import Layout from '../components/Layout'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Comet</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <CSSReset />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}