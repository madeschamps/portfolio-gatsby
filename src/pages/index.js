import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { FaRegClock } from "react-icons/fa"
import {TweenMax, TweenLite, TimelineLite} from "gsap/TweenMax";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import $ from 'jquery';
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import niceScroll from 'jquery.nicescroll';


import Layout from "../layouts"

class Home extends Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.myElement = null;
    this.bonjour = null;
    this.welcome = null;
    this.iAM = null;
    this.letterA = null;
    this.lettersA = null;
    this.letterM = null;
    this.lettersM = null;
    this.letterStrike = null;
    this.lastName = null;
    // reference to the animation
    this.myTween = null;


  }

  componentDidMount(){

    //Eases: https://easings.net/
   
    // $(document).ready(function() { 
      // $("html").niceScroll();
    // });

    //instantiate a TimelineLite    
    var tl = new TimelineLite(); 
    tl.to(this.welcome, 2, { 
      opacity: 1,
      top: '34vh',
      ease: "easeOutBack", 
    },);
    tl.to(this.bonjour, 0.75, { 
      opacity: 1,
      top: 0
    },'-=1.75');
    tl.to(this.iAM, 1, {
      ease: "Bounce.easeOut", 
      scale: 1,
      opacity: 1
    },0.5);
    tl.to(this.letterM, 0.25, { opacity:1, left: 0},); //show letter M
    tl.to(this.letterA, 0.25, { opacity:1, }, '-=0.25'); //show letter A
    tl.to(this.letterA, 0.5, { left:0 }); //move letter A its original position
    tl.to(this.letterStrike, 0.5, { opacity:1 }); //show strike
    tl.to(this.letterStrike, 0.15, { top:-30 , ease: "Bounce.easeOut"},'-=0.5'); //move strike to Top
    tl.to(this.letterStrike, 0.25, { //rotate strike
      ease: "Bounce.easeOut",
      rotation:0 ,
      top: 0
    },); 
   
    tl.to(this.lettersM, 0.5, { //show letters Arc
      opacity:1, 
      left: 0,
    }, '-=0.5' );
    
    tl.to(this.lettersA, 0.5, { //show letters André
    opacity:1, 
    left: 0,
    },'-=0.5' );
    
    //then : Lastname : Deschamps
    tl.to(this.lastName, 1, { 
      opacity:1, 
      top: -30,
      ease: "easeOutBack"
    });

    // use the node ref to create the animation
    // this.myTween = TweenLite.to(this.myElement, 1, { y: 20,});
    //this.myTween = TweenLite.to(this.letterA, 1, { visibility:'visible', left: 0,});

    //this.myTween = TweenLite.to(this.lettersM, 2, { visibility:'visible', left: 0,});
    // this.myTween = TweenLite.to(this.lettersA, 1, { visibility:'visible', x: 20,});
  }

  render() {

    const data = this.props.data
    var imgUrl = 'https://images.fineartamerica.com/images-medium-large/crashing-waves-black-and-white-hideaki-sakurai.jpg';
    var imgUrl2 = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Hemisphere_land.png';
    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };

    var divStyleEarth = {
      color: 'white',
      backgroundImage: 'url(' + imgUrl2 + ')',
      backgroundSize: 'cover',
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };

    
    
    return (
      <Layout>
        {/* SECTION 1 */}
        <div className='hero  container-fluid  bgc-neutral'>
          <div className='row h-100 text-center justify-content-center align-items-center'>
            <div className="col-md-12 offset-sm-3  offset-md-6 text-left hero__letters">
              {/* <div className='intro-letters'> find way to use as Aux maybe? */}
              <div ref={div => this.myElement = div} className='font-dots'>
                <span ref={span => this.bonjour = span} className='intro__letters  intro__bonjour'>Bonjour, </span>
                <span ref={span => this.iAM = span} className='intro__letters  intro__iam'>I am </span>
              </div>
              <span ref={span => this.letterM = span} className='bo intro__letters intro__fullname' >M</span>
              <span ref={span => this.lettersM = span} className='bo intro__letters  intro__arc intro__fullname'>arc</span>
              <span ref={span => this.letterStrike = span} className='bo intro__letters  intro__strike intro__fullname'>-</span>
              <span ref={span => this.letterA = span} className='bo intro__letters  a-big intro__fullname'>A</span>
              <span ref={span => this.lettersA = span} className='bo intro__letters intro__ndre intro__fullname'>ndré</span>
              <span ref={span => this.lastName = span} className='bo intro__letters intro__ln intro__fullname'>Deschamps</span>
            </div>  
            <span ref={span => this.welcome = span} className='intro__welcome font-dots'>WELCOME</span>
          </div>
        </div>
        {/* SECTION2 */}
        <div className='section sceneScroll1'>
         
          <div className='row align-items-center justify-content-center h-100'>
            <div className='col-lg-12  bgc-neutral-light'> 
             
            </div>
            <div id="triggerS1HorizontalText" />
            <div className='col-lg-12 h-100 d-flex align-items-center bgc-neutral-light overflow-hidden'> 
              <Controller>
                <Scene //Scene 1 Move Plane
                  triggerElement="#triggerS1HorizontalText" duration={1000} 
                >
                {(progress) => (
                     
                     <Tween            
                      to={{ 
                        scale: '1.5',
                        backgroundPosition: '-150% center',
                        x: '-800px'
                      }}    
                      ease="Strong.easeOut"
                      totalProgress={progress}
                      paused
                    > 
                      <p className='scene1__fromMtl'>FROM MONTRÉAL TO LONDON</p>
                    </Tween>
 
                  )}
                </Scene> 
                <Scene //Scene 1 Move Plane
                  triggerElement="#triggerS1HorizontalText" duration={1500} >
                {(progress) => (
                    <Tween            
                      to={{
                        left: '90%',
                        bottom: '70%',
                        scale:1,
                        opacity:1,
                      }}    
                      ease="Strong.easeOut"
                      totalProgress={progress}
                      paused
                    > 
                      <img src='https://www.svgimages.com/svg-image/s5/plane-icon1.svg' className="scene1__plane" />
                    </Tween> 
                  )}
                </Scene> 
              </Controller> 
              {/* <img className="bg-sky" src="https://svgur.com/i/C0K.svg" />  IMG LONDON */}
            </div>
          </div>
        </div>   
        <div className='container-fluid section  bgc-neutral-light '>
          <div className='row h-50 justify-content-center'>
            <div id="triggerS1FrontTxt" />
            <div className='col-lg-4 offset-lg-1'>
            <Controller>
              <Scene  triggerElement="#triggerS1HorizontalText" duration={1500} >
                  {(progress) => (
                    <Tween 
                      to={{
                        top: 0,
                        scale:1,
                        opacity:1,
                      }}    
                      ease="Strong.easeOut"
                      totalProgress={progress}
                      paused>    
                    <h2 className='scene1__webDev font-normal'>I am a web developper from Montreal, that just recently moved to London  I am looking for a new opportuniy to work on driven projects with dynamic team</h2>
                  </Tween> 
                  )} 
                </Scene>
            </Controller> 
            </div>
            <div className='col-lg-5 p-lg-0 text-sm-right'>
              <Controller>
                <Scene triggerElement="#triggerS1FrontTxt"  classToggle="scene1__frontdev--animation">
                  {(progress, event) => (   
                      
                      <span className='font-dots scene1__frontdev'>FRONT-END DEVELOPPER</span>
                    
                    )}
                  </Scene> 
                </Controller>
            </div>
          </div>
        </div>  
        <div id="triggerS2" />
        <Controller>
          <Scene triggerElement="#triggerS2"  classToggle="scene2--animation">
            {(progress, event) => (   
                  <div className='scene2 container-fluid h-100vh '>
                    <div className='row h-100 align-items-center justify-content-center'>
                      <div className='col-md-12 text-center'>
                        <AniLink paintDrip  hex="#3b3a36" to="/projects" className="scene2__link d-inline-block mb-3">SEE MY RECENT WORK</AniLink>
                        <span className="d-block">Need a developer? Contact here marc.andre.deschamps@gmail.com</span>
                      </div>
                  </div>
                </div>
              )}
            </Scene> 
        </Controller>
        <div id="triggerS3" />
        <Controller>
          <Scene triggerElement="#triggerS3"  classToggle="scene3--animation">
            <div className='scene3 container-fluid section container-fluid'>
              <div className='row h-100'>
                <div className='col-lg-12 d-flex justify-content-center align-items-center text-center textc-primary' >
                  <div>
                    <div className='d-block mb-4'>
                      <h2 className='d-block mb-4 textc-primary'>Find me here also</h2>
                      <Link to='/' className='scene3__link textc-primary'><i className="tempBigIcon fab fa-linkedin mr-3"></i></Link>
                      <Link to='/' className='scene3__link textc-primary'><i className="tempBigIcon fab fa-github mr-3"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scene>
        </Controller>
        <hr></hr>      
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <span>
                <FaRegClock
                  size={14}
                  css={{ position: `relative`, bottom: 1 }}
                />
                {` `}
                {node.date}
              </span>
            </div>
          ))}
        </div>
        <hr />
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div css={{ marginBottom: 20 }} key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
  }
`