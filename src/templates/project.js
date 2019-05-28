import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ProjectTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressWpProject

    return (
      <Layout>
       <div className='hero container-fluid bgc-primary'>
          <div className='row h-50 text-center justify-content-center align-items-center'>
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />          
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 text-center'>
              <p>Kevin's Website been made with WordPress. More details and link to come soon.</p>
              <img className='img-fluid' src="https://i.ibb.co/58FBj4N/kevinsiteimg1.png" />
            </div>
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