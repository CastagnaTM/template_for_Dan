import React from 'react'

function PackageItems({item, index, togglePackages}) {
    return (
        <div className={'package' + (item.open ? 'open' : '')} key={index} >
            <button className='package-button' 
            aria-expanded={item.open ? 'true' : 'false'}
            aria-controls='package-container'
            onClick={() => togglePackages(index)}>
                <div className='package-name-container' id='package-container'>
                    <div className="menu-carrot">&#9658; </div>  
                    <p className='package-name'>{item.name}</p>

                </div>
            </button>
            <div className='package-description'>
                <p>{item.description}</p>
                <a id='download-link' href={item.download} download='Package Checklist'>Download</a>
            </div>
        </div>
    )
}
export default PackageItems
