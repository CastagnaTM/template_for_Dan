import React from 'react'
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
        designImages: []
    }

    componentDidMount = () => {

        this.setImages();
        if (this.props.location.state){
            this.getPackages()
            
        }
        
       window.addEventListener("scroll", this.scrollListener)
       
       this.packageListener()
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrollListener);
    }

    scrollListener = () => {
        let button = document.getElementById('scroll-up-button')
        let buttonDiv = document.getElementById('scroll-up-button-div')
        if (window.scrollY > 100){
            // button.classList.remove('not-scrolling');
            button.classList.add('scrolling');
            buttonDiv.classList.add('scrolling');
        }
        else {
            button.classList.remove('scrolling');
            buttonDiv.classList.remove('scrolling');
            // button.classList.add('not-scrolling');
        }
    }

    packageListener = () => {
        //a beautiful function from w3schools
        let packNames = document.getElementsByClassName('package-name');
        for (let i = 0; i < packNames.length; i++){
            packNames[i].addEventListener('click', function() {
                console.log(this.children[0]) // Working here
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

    setImages = () => {
        this.setState({
            designImages: 
            [{ id: 1, name: One, caption:'Insert a description for your design'}, { id: 2, name: Two, caption:'Insert a description for your design'}, 
            { id: 3, name: Three, caption:'Insert a description for your design'}, { id: 4, name: Four, caption:'Insert a description for your design'}, 
            { id: 5, name: Five, caption:'Insert a description for your design'}, { id: 6, name: Six, caption:'Insert a description for your design'}]
        })
    }

    getPackages = () => {
        let scroll = document.getElementById('packages');
       if(scroll){
           setTimeout(() =>{
            scroll.scrollIntoView({behavior: 'smooth'})
           }, 500);
       } 
    }

    scrollUp = () => {
       document.getElementById('root').scrollIntoView();
    }

    displayImages = () => {
        return this.state.designImages.map((item, i) => <Image key={i} item={item}/>)
    }
    
    render(){
        return (
            <div className='component' id="designs-component">
                <div id='scroll-up-button-div' >
                    <div id='scroll-up-button'
                    onClick={this.scrollUp}
                    >
                     <p>&uarr;</p>
                    </div>
                </div>
                 <div className='header-container'>
                    <h1 className='component-header'>Designs</h1>
                </div>
                {this.displayImages()}
                {/* I might move this whole packages section into its own component that gets displayed here */}
                <section id='packages' >
                        <h1>Available Packages</h1>
                        <div className='package-name'> 
                            <div id="menu-carrot">&#9658; </div>  
                            <p>Package 1 &nbsp;</p>
                            <a href={checklist} download='Package Checklist'>Download</a>
                        </div>
                        <div id ='package-description'>
                            <p>Hwæt. We Gardena in geardagum,
                                þeodcyninga, þrym gefrunon,
                                hu ða æþelingas ellen fremedon.
                                Oft Scyld Scefing sceaþena þreatum,
                                monegum mægþum, meodosetla ofteah,
                                egsode eorlas. Syððan ærest wearð
                                feasceaft funden, he þæs frofre gebad,
                                weox under wolcnum, weorðmyndum þah,
                                oðþæt him æghwylc þara ymbsittendra
                                ofer hronrade hyran scolde,
                                gomban gyldan. þæt wæs god cyning.
                            </p>
                        </div>
                        <div className='package-name'> 
                            <div id="menu-carrot">&#9658; </div>  
                            <p>Package 2 &nbsp;</p>
                            <a href={checklist} download='Package Checklist'>Download</a>
                        </div>
                        <div id ='package-description'>
                            <p>ðæm eafera wæs æfter cenned,
                                geong in geardum, þone god sende
                                folce to frofre; fyrenðearfe ongeat
                                þe hie ær drugon aldorlease
                                lange hwile. Him þæs liffrea,
                                wuldres wealdend, woroldare forgeaf;
                                Beowulf wæs breme blæd wide sprang,
                                Scyldes eafera Scedelandum in.
                            </p>
                        </div>
                        <div className='package-name'> 
                            <div id="menu-carrot">&#9658; </div>  
                            <p>Package 3 &nbsp;</p>
                            <a href={checklist} download='Package Checklist'>Download</a>
                        </div>
                        <div id ='package-description'>
                            <p>Swa sceal geong guma gode gewyrcean,
                                fromum feohgiftum on fæder bearme,
                                þæt hine on ylde eft gewunigen
                                wilgesiþas, þonne wig cume,
                                leode gelæsten; lofdædum sceal
                                in mægþa gehwære man geþeon.
                                Him ða Scyld gewat to gescæphwile
                                felahror feran on frean wære.
                                Hi hyne þa ætbæron to brimes faroðe,
                                swæse gesiþas, swa he selfa bæd,
                                þenden wordum weold wine Scyldinga;
                                leof landfruma lange ahte.
                            </p>
                        </div>
                        <div className='package-name'> 
                            <div id="menu-carrot">&#9658; </div>  
                            <p>Package 4 &nbsp;</p>
                            <a href={checklist} download='Package Checklist'>Download</a>
                        </div>
                        <div id ='package-description'>
                            <p>þær æt hyðe stod hringedstefna,
                                isig ond utfus, æþelinges fær.
                                Aledon þa leofne þeoden,
                                beaga bryttan, on bearm scipes,
                                mærne be mæste. þær wæs madma fela
                                of feorwegum, frætwa, gelæded;
                                ne hyrde ic cymlicor ceol gegyrwan
                                hildewæpnum ond heaðowædum,
                                billum ond byrnum; him on bearme læg
                                madma mænigo, þa him mid scoldon
                                on flodes æht feor gewitan.
                            </p>
                        </div>
                </section>
            </div>
        )
    }
}

