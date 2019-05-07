import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"


class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <div className='hero container-fluid bgc-primary'>
          <div className="row h-50 text-center justify-content-center align-items-center">
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          </div>
        </div>
        <div className='section sceneScroll1'>
          <div className='row align-items-center justify-content-center h-100'>
            <h2>Project Name 2</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`