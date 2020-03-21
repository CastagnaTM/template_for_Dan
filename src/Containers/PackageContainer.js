import React, { useState } from 'react'
import PackageItems from '../Components/PackageItems'
import checklist from '../Assets/Documents/checklist.docx'

function PackageContainer() {

    const [packages, setPackages] = useState([
        {id: 1, name: 'package one', download: `${checklist}`, open: false,
        description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
        {id: 2, name: 'package two', download: `${checklist}`, open: false,
        description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
        {id: 3, name: 'package three', download: `${checklist}`, open: false,
        description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'},
        {id: 3, name: 'package four', download: `${checklist}`, open: false,
        description: 'Hwæt. We Gardena in geardagum, þeodcyninga, þrym gefrunon, hu ða æþelingas ellen fremedon. Oft Scyld Scefing sceaþena þreatum, monegum mægþum, meodosetla ofteah, egsode eorlas. Syððan ærest wearð feasceaft funden, he þæs frofre gebad, weox under wolcnum, weorðmyndum þah, oðþæt him æghwylc þara ymbsittendra ofer hronrade hyran scolde, gomban gyldan. þæt wæs god cyning.'}

    ])
    const togglePackages = index => {
        setPackages(packages.map((item, i) => {
            if(i === index) {
                item.open = !item.open
            } else {
                item.open = false;
            }
            return item;
        }))
    }

    return (
        <div>
            {packages.map((item, i)=> (<PackageItems item={item} index={i} key={i} togglePackages={togglePackages}/>))}
        </div>
    )
}

export default PackageContainer
