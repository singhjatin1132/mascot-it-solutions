import React from 'react'

const Banner = () => {
  return (
    <div>

<section class="section banner relative">
  <div class="container">
    <div class="row items-center">
      <div class="lg:col-6">
        <h1 class="banner-title">
          Scale design & dev operations with Mascot It Solutions
        </h1>
        <p class="mt-6">
        MIS a highly innovative software & technology solutions provider, established in the form of a hardware solution provider in 2002.
        </p>
        <a class="btn btn-white mt-8 mb-6 md:mb-0 animation-btn" target="_blank" href="https://web.whatsapp.com/send?phone=919810073129&text=Welcome%20to%20Mascot%20IT%20Solutions.">Request for Demo</a>
      </div>
      <div class="lg:col-6">
        <img
          class="w-full object-contain rounded-2xl"
          src="assests\images\team.jpg"
          width="603"
          height="396"
          alt=""
        />
      </div>
    </div>
  </div>
  <img
    class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
    src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
    alt=""
  />
</section>
    </div>
  )
}

export default Banner