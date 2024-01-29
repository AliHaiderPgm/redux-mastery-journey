import React from 'react'
import PreLoader from '../../components/PreLoader'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GSAP = () => {
    useGSAP(() => {
        gsap.from('h1', { y: 70, delay: 1.9, opacity: 0, ease: 'circ' })
    })
    return (
        <>
            <PreLoader />
            <div className='d-flex justify-content-center align-items-center min-vh-100 '>
                <h1 className='display-1'>GSAP</h1>
            </div>
        </>
    )
}

export default GSAP