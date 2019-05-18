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
            <span>CPT PROJECT</span>            
          </div>
          <div className='row'>
            <div className='col-md-4'>Aliquam ut ex eget lectus auctor sagittis. Etiam ac semper orci. Integer felis erat, accumsan ac euismod vel, fermentum sed mi. Vestibulum elit diam, bibendum et venenatis eu, feugiat sit amet tellus. Morbi orci risus, vestibulum a placerat ut, congue id metus. Pellentesque orci mi, ultrices efficitur velit quis, venenatis feugiat felis. Nullam sed maximus purus. Suspendisse porta ipsum nec leo fermentum, in finibus lorem iaculis. Morbi eget nulla id ligula dictum blandit sit amet laoreet nisl. Sed ac sem ante. Morbi faucibus et mauris quis dapibus. Fusce fermentum arcu non ex commodo faucibus. Proin nec urna tincidunt, facilisis neque ac, rutrum mauris.</div>
            <div className='col-md-8'>Img</div>
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