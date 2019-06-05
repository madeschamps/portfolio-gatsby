import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ProjectTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressWpProject

    return (
      <Layout>
       <div className=' container-fluid hero bgc-primary'>
          <div className='row text-center justify-content-center align-items-center project-head'>
            <h1 className='project-head__title' dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />          
          </div>
          <div className='row justify-content-center pb-5'>
            <div className='col-md-12 text-center'>
              <p>Kevin's Website made with WordPress. More details and link to come soon..</p>
            </div>
            <div className='col-md-4 text-center'>
              <img className='img-fluid mb-4' src="https://i.gyazo.com/768efa3442c6886ab15f743609496be4.gif" alt="Kv Tattoo"/>
            </div>
            <div className='col-md-6 text-center'>
              <img className='img-fluid' src="https://i.gyazo.com/17997bd47af0cc123440519e8fa0ca88.gif" alt="Kv Tattoo" />
              <h2>2019</h2>
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