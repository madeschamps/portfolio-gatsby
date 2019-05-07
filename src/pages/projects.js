import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../layouts"
import {TweenMax, TweenLite, TimelineLite} from "gsap/TweenMax";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import $ from 'jquery';
import AniLink from "gatsby-plugin-transition-link/AniLink"

class ProjectsTemplate extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.lettersPro = null;
        this.letterJ = null;
        this.lettersEcts = null;
        this.projectsList = null;
    
        // reference to the animation
        this.myTween = null;
    
      }
    componentDidMount(){
        //instantiate a TimelineLite    
        var tl = new TimelineLite(); 
        tl.to(this.lettersPro, 1.5, { opacity:1,scale: 1, left: 0},); //show letters Pro
        tl.to(this.letterJ, 1.5, { opacity:1, scaleX: 1}, '-=1.5'); //show letters J
        tl.to(this.lettersEcts, 1.5, { opacity:1,scale: 1, right: 0}, '-=1.5'); //show letters Ects
        tl.to(this.projectsList, 1.5, { opacity:1,scale: 1, top: 0,  ease: "Bounce.easeOut"}, '-=1.5'); //show letters Ects

        $(document).ready(function() { 
            // $("html").niceScroll();
            $('.header__logo-link').click(function(){
              
              $('.tl-edges').addClass('tl-edges-child--relative');
              setTimeout(function(){
                $('.tl-edges').removeClass('tl-edges-child--relative');
              }, 1000);
      
            })
          });
    }
    render() {
        const data = this.props.data

        return(
            <Layout>
                <div className='projects-head container-fluid bgc-primary'>
                    <h1 className='projects-head__title'>
                        <span ref={span => this.lettersPro = span} className='projects-head__title--pro'>Pro</span>
                        <span ref={span => this.letterJ = span} className='projects-head__title--j'>j</span>
                        <span ref={span => this.lettersEcts = span} className='projects-head__title--ects'>ects</span>
                    </h1>
                </div>
                <div className='projects-list' ref={div => this.projectsList = div}>
                    {data.allWordpressWpProject.edges.map(({node}) => (
                        <div key={node.slug} className={"project-item container-fluid"} style={{  }}>
                            <AniLink className='project-item__link' to={'project/' + node.slug} swipe top="entry"  entryOffset={80}>
                                <h3 className='project-item__title'>{node.title}</h3>
                            </AniLink>
                            <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                        </div>
                    ))}
                </div>
            </Layout>
        )
    }
}

ProjectsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default ProjectsTemplate

export const pageQuery = graphql`
    query postsQuery{
      allWordpressWpProject{
            edges{
                node{
                    id
                    title
                    slug
                }
            }
        }
    }
`