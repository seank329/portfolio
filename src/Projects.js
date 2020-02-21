import React from 'react'
import './projects.css'
import ProjectContainer from './ProjectContainer'
import INFO from './information'

export default function Projects(){

    console.log(INFO)
    return(
        <div className='ProjectsContainer'>
        <div className='Projects'>
            {INFO.map((data, index) => {
                return(
                <ProjectContainer 
                            key={index} 
                            image={data.imageURL}
                            title={data.title}
                            description={data.description}
                            tech={data.techList}
                            linkLive={data.linkLive}
                            linkRepo={data.linkRepo}>
                </ProjectContainer>
                )
            })}
        </div>
        </div>
    )
}