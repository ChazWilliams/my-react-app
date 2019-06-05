import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome to HummingbirdCRM</h1>
        <p>The simple CRM to get business done.</p>
        <Link to="/page-2/">Arrange Meeting</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
