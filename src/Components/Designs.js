import React from 'react'
import Banner from './Banner'
import Packages from './Packages'
import PackageContainer from '../Containers/PackageContainer';
import Image from './Image'
import One from '../Assets/1.jpg'
import Two from '../Assets/2.jpg'
import Three from '../Assets/3.jpg'
import Four from '../Assets/4.jpg'
import Five from '../Assets/5.jpg'
import Six from '../Assets/6.jpg'
import checklist from '../Assets/Documents/checklist.docx'



export default class Designs extends React.Component {

    state = {
        designImages: [],
        packages: []
    }
    packagesRef = React.createRef();
    scrollButtonRef = React.createRef();
    scrollDivRef = React.createRef();

    componentDidMount = () => {

        this.setImagesAndPackages();
        if (this.props.location.state){
            this.scrollToPackages()
            
        }
           
        window.addEventListener("scroll", this.scrollListener)
        
        // this.packageListener()
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
    
    packageListener = () => {
        //a beautiful function from w3schools
        // could replace this with packages as a component, and then each component has its own onclick rather than needing an eventListener
        let packNames = document.getElementsByClassName('package-name');
        for (let i = 0; i < packNames.length; i++){
            packNames[i].addEventListener('click', function() {
                console.log('click')
                let carrot = this.children[0];
                let description = this.nextElementSibling;
                if (description.style.maxHeight) {
                    description.style.maxHeight = null;
                    carrot.classList.remove('menu-carrot-open');
                } else {
                    description.style.maxHeight = description.scrollHeight + 'px';
                    carrot.classList.add('menu-carrot-open');
                }
            });
        }
    }

    setImagesAndPackages = () => {
        this.setState({
            designImages: 
                [
                    { id: 1, name: One, caption:'Insert a description for your design'}, { id: 2, name: Two, caption:'Insert a description for your design'}, 
                    { id: 3, name: Three, caption:'Insert a description for your design'}, { id: 4, name: Four, caption:'Insert a description for your design'}, 
                    { id: 5, name: Five, caption:'Insert a description for your design'}, { id: 6, name: Six, caption:'Insert a description for your design'}
                ],
            packages: 
                [
                    {id: 1, name: 'package one', download: `${checklist}`, open: false,
                    description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
                    {id: 2, name: 'package two', download: `${checklist}`, open: false,
                    description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
                    {id: 3, name: 'package three', download: `${checklist}`, open: false,
                    description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
                    {id: 3, name: 'package four', download: `${checklist}`, open: false,
                    description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'}
                ]
        })
    }

   

    scrollToPackages = () => {
    //     let scroll = document.getElementById('packages');
    //    if(scroll){
    //        setTimeout(() =>{
    //         scroll.scrollIntoView({behavior: 'smooth'})
    //        }, 500);
    //    } 
        setTimeout(() =>{
            this.packagesRef.scrollIntoView({
                behavior: 'smooth'
            }) 
        }, 500);
    }

    scrollUp = () => {
       document.getElementById('root').scrollIntoView({
           behavior: 'smooth'
       });
    }

    displayImages = () => {
        return this.state.designImages.map((item, i) => <Image key={i} item={item}/>)
    }
    displayPackages = () => {
        return this.state.packages.map((item, i) => <Packages key={i} item={item}/>)
    }
    renderPackages = () => {
        return this.state.packages.map((item, i)=> (<PackageContainer item={item} index={i} />))
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
                 <div className='header-container'>
                    <h1 className='component-header'>Designs</h1>
                </div>
                {this.displayImages()}
                <section className='packages' ref={ref => {this.packagesRef = ref}} >
                        <h1>Available Packages</h1>
                {/* {this.displayPackages()} */}
                {/* {this.renderPackages()} */}
                <PackageContainer />
                </section>               
                <Banner 
                    scrollToPackages={this.scrollToPackages}
                />
            </div>
        )
    }
}

