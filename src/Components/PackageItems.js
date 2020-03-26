import React from 'react'

function PackageItems({item, index, togglePackages}) {
    return (
        <div className={'package' + (item.open ? 'open' : '')}
        key={index}
        >
            <button className='package-button' 
            onClick={() => togglePackages(index)}>
                <div className='package-name-container'>
                    <div className="menu-carrot" >&#9658; </div>  
                    <p className='package-name'>{item.name}</p>
                    <a id='download-link' href={item.download} download='Package Checklist'>Download</a>
                </div>
            </button>
                <div className='package-description'>
                    <p>{item.description}</p>
                </div>
        </div>
    )
}
export default PackageItems
