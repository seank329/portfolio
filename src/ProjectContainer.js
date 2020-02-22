import React from 'react'
import './projectContainer.css'

export default function ProjectContainer(props){

    return(
        <article className='ProjectContainer'>
            <div className='projectImage'><img src={props.image} alt={props.imageAlt}/></div>
            <div className='description'>
                <div className='project title'><h2>{props.title}</h2></div>
                <div className='project description'>{props.description}</div>
                <div className='project tech'> Technologies: {props.tech}</div>
                <div className='project linkLive'><a href={props.linkLive} target='_blank' rel="noopener noreferrer">Live</a></div>
                <div className='project linkRepo'><a href={props.linkRepo} target='_blank' rel="noopener noreferrer">Repo</a></div>
            </div>
        </article>
    )

}