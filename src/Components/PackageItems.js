import React from 'react'

function PackageItems({item, index, togglePackages}) {
    return (
        <div className={'package' + (item.open ? 'open' : '')}
        key={index}
        >
            <button className='package-button' 
            onClick={() => togglePackages(index)}>
                <div className='package-name'>
                    <div className="menu-carrot" >&#9658; </div>  
                    <p>{item.name}</p>
                    <a id='download-link' href={item.download} download='Package Checklist'>Download</a>
                </div>
                <div className='package-description'>
                    <p>{item.description}</p>
                </div>
            </button>
        </div>
    )
}
export default PackageItems
