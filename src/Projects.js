import React from 'react'
import './projects.css'
import ProjectContainer from './ProjectContainer'
import INFO from './information'

export default function Projects(){

    return(
        <section className='ProjectsContainer'>
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
                                linkRepo1={data.linkRepo1}
                                linkRepo2={data.linkRepo2}>
                    </ProjectContainer>
                    )
                })}
            </div>
        </section>
    )
}