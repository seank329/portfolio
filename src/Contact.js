import React from 'react'
import './contact.css'

export default function Contact(){

    return(
        <div className='Contact'>
            <div className='Email area'><h4><a href="mailto:seankamran@gmail.com">Email</a></h4></div>
            <div className='LinkedIn area'><h4><a href='https://www.linkedin.com/in/sean-cooper-20799a185/' target='_blank' rel="noopener noreferrer">LinkedIn</a></h4></div>
            <div className='Github area'><h4><a href='https://github.com/seank329/' target='_blank' rel="noopener noreferrer">Github</a></h4></div>
        </div>
    )
}