import React, { useState } from 'react'
import PackageItems from '../Components/PackageItems'
import checklist from '../Assets/Documents/checklist.docx'

function PackageContainer() {

    const [packages, setPackages] = useState([
        {id: 1, name: 'Ultimate Wedding Package', download: `${checklist}`, open: false,
            description: 'This is a space to provide a description of the package'},
        {id: 2, name: 'package two', download: `${checklist}`, open: false,
            description: 'This is a space to provide a description of the package'},
        {id: 3, name: 'package three', download: `${checklist}`, open: false,
            description: 'This is a space to provide a description of the package'},
        {id: 3, name: 'package four', download: `${checklist}`, open: false,
            description: 'This is a space to provide a description of the package'}

    ])
    const togglePackages = index => {
        setPackages(packages.map((item, i) => {
            if(i === index) {
                item.open = !item.open
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
