import React, { useState } from 'react'
import SmallWork from '../SmallWork'

export default function Edit(props) {
    const addWork = {
        image: 'https://firebasestorage.googleapis.com/v0/b/sieapi.appspot.com/o/plus.svg?alt=media&token=44286de7-82a3-400a-ab9d-be7de5439ff6'
    }
    
    return (
        <div className="d-flex flex-wrap">
            <SmallWork work={addWork} mode={'add'} />
            {props.works.map((work, key) => {
                return <SmallWork work={work} reload={props.getWorks} />
            })}
        </div>
    )
}
