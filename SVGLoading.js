import React from 'react'
import Lottie from 'lottie-react'
import Loading from './loading.jpeg'
import SvgAnimation from './SvgAnimation.json'
const SVGLoading = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
<img  src={Loading} className='h-full w-full scale-125'/>
<div className='absolute top-48 invert scale-75'>
<Lottie animationData={SvgAnimation}/>
</div>
    </div>
  )
}

export default SVGLoading