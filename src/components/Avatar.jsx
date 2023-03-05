import React from 'react';

export default function Avatar({image, isNew}) {
    return (
        <div className='avatar'>
            {isNew && <div className='newTag'>new</div>}
            <img className='photo' src={image} alt='profile'/>
        </div>
    )
}