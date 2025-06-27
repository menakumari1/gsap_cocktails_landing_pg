import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
        .from('#c-left-leaf', {x:-100, y:100})
        .from('#c-right-leaf', {x:100, y:100})
})


  return (
    <section id="cocktails" className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf' />

        <div className='list'>
            <div className='popular'>
                <h2>Most popular coacktails:</h2>

                <ul>
                    {cocktailLists.map((cocktail) => (
                        <li key={cocktail.name}>
                        <div className='md:me-28'>
                            <h3>{cocktail.name}</h3>
                            <p>{cocktail.country}|{cocktail.detail}</p>
                        </div>
                        <span>- {cocktail.price}</span>
                        </li>
                    ))}
                </ul>
            </div><div className='loved'>
                <h2>Most popular mocktails:</h2>

                <ul>
                    {mockTailLists.map((mocktail) => (
                        <li key={mocktail.name}>
                        <div className='me-28'>
                            <h3>{mocktail.name}</h3>
                            <p>{mocktail.country}|{mocktail.detail}</p>
                        </div>
                        <span>- {mocktail.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails