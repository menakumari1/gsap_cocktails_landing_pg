import React from 'react'
import { featureLists, goodLists } from '../../constants'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {
    const isMobile= useMediaQuery({ maxWidth: 768 });
    useGSAP(()=>{

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: isMobile ? 'top 5%' : 'top top',
                end: 'bottom center',
                scrub: 1.5,
                pin: true,
            }
        });

        maskTimeline
            .to('.will-fade', {
                opacity: 0, stagger: 0.2, ease: 'power1.inOut'})
            .to('.masked-img', {
                scale: 1.1, ease: 'power1.inOut', duration: 1, maskPosition:'center', maskSize:'400%'})
            .to('#masked-content', {opacity: 1, ease: 'power1.inOut', duration: 1})           
    })
  return (
    <div id="art">
        <div className='container mx-auto ht-full pt-20'>
            <h2 className='will-fade'>The Art</h2>
            <div className='content '>
               <ul className='space-y-2 will-fade '>
                {goodLists.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2 '>
                        <img src="/images/check.png" alt="check icon" />
                        <p>{feature}</p>
                  </li>
                ))}
                </ul> 
                <div className='cocktail-img scale-75 '>
                    <img src='/images/under-img.jpg' alt='cocktail' className='abs-center masked-img  size-full object-contain'/>
                </div>
                <ul className='space-y-4 will-fade'>
                {featureLists.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2'>
                        <img src="/images/check.png" alt="check icon" />
                        <p className='md:w-fit w-60'>{feature}</p>
                  </li>
                ))}
                </ul> 
            </div>
            <div className='masked-container scale-65 '>
                <h2 className='will-fade mt-0'>Sip-Worthy Perfection</h2>
                <div id="masked-content" >
                    <h3>Made with Craft, Poured with Passion</h3>
                    <p>This isn't just a drink. It's a carefully crafted moment made just for you</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Art