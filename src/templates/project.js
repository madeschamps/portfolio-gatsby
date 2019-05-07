import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"


class ProjectTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressWpProject

    return (
      <Layout>
       <div className='hero container-fluid bgc-primary'>
          <div className="row h-50 text-center justify-content-center align-items-center">
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
            <span>CPT PROJECT</span>            
          </div>
        </div>
       
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpProject(id: { eq: $id }) {
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