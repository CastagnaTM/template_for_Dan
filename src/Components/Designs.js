import React from 'react'
import Banner from './Banner'
import PackageContainer from '../Containers/PackageContainer';
import Image from './Image'
import One from '../Assets/1.jpg'
import Two from '../Assets/2.jpg'
import Three from '../Assets/3.jpg'
import Four from '../Assets/4.jpg'
import Five from '../Assets/5.jpg'
import Six from '../Assets/6.jpg'



export default class Designs extends React.Component {

    state = {
        designImages: [],
        packages: []
    }
    packagesRef = React.createRef();
    scrollButtonRef = React.createRef();
    scrollDivRef = React.createRef();
    headerRef = React.createRef();

    componentDidMount = () => {

        this.setImages();
        
        if (this.props.location.state){
            this.scrollToPackages()
            
        }
           
        window.addEventListener("scroll", this.scrollListener)
        
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrollListener);
    }

    scrollListener = () => {
        let button = this.scrollButtonRef;
        let buttonDiv = this.scrollDivRef;
        if (window.scrollY > 10){
            button.classList.add('scrolling');
            buttonDiv.classList.add('scrolling');
        }
        else {
            button.classList.remove('scrolling');
            buttonDiv.classList.remove('scrolling');
        }
    }

    setImages = () => {
        this.setState({
            designImages: 
                [
                    { id: 1, name: One, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}, 
                    { id: 2, name: Two, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}, 
                    { id: 3, name: Three, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}, 
                    { id: 4, name: Four, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}, 
                    { id: 5, name: Five, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}, 
                    { id: 6, name: Six, caption:'Insert a description for your design',
                        description: 'Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem.'}
                ]
        })
    }

   

    scrollToPackages = () => {
        setTimeout(() =>{
            this.packagesRef.scrollIntoView({
                behavior: 'smooth'
            }) 
        }, 500);
    }

    scrollUp = () => {
        this.headerRef.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    displayImages = () => {
        return this.state.designImages.map((item, i) => <Image key={i} item={item}/>)
    }
    
    render(){
        return (
            <div className='component' id="designs-component" >
                <div id='scroll-up-button-div' ref={ref => {this.scrollButtonRef = ref}}>
                    <div id='scroll-up-button' ref={ref => {this.scrollDivRef = ref}}
                    onClick={this.scrollUp}
                    >
                     <p>&uarr;</p>
                    </div>
                </div>
                 <div className='header-container' ref={ref => {this.headerRef = ref}}>
                    <h1 className='component-header'>Designs</h1>
                </div>
                {this.displayImages()}
                <section className='packages' ref={ref => {this.packagesRef = ref}} >
                        <h1>Available Packages</h1>
                <PackageContainer />
                </section>               
                <Banner 
                    scrollToPackages={this.scrollToPackages}
                />
            </div>
        )
    }
}

