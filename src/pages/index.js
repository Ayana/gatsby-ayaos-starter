import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/Layout'

const IndexPage = () => (
  <Layout>
    <div className="container" style={{ minHeight: '70vh' }}>
      <h1>Hello</h1>
      <p>Welcome to Ayaos starter page</p>
      <Link href="page-2" className="link-ul">
        Go to page 2
      </Link>
    </div>
  </Layout>
)

export default IndexPage
