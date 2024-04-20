'use client'


import React, { useState } from 'react'

const Services = () => {

  const [active,setActive] = useState(1);


  return (
    <section class="section services">
  <div class="container">
    <div class="tab row gx-5 items-center" data-tab-group="integration-tab">
      <div class="lg:col-7 lg:order-2">
        <div class="tab-content" data-tab-content>
          <div class="tab-content-panel active" data-tab-panel="0">
            <img
              class="w-full object-contain"
              src="https://themewagon.github.io/pinwheel/images/sells-by-country.png"
            />
          </div>
          <div class="tab-content-panel" data-tab-panel="1">
            <img class="w-full object-contain" src="https://themewagon.github.io/pinwheel/images/collaboration.png" />
          </div>
          <div class="tab-content-panel" data-tab-panel="2">
            <img
              class="w-full object-contain"
              src="https://i.imgur.com/WG5EvBI.jpg"
            />
          </div>
        </div>
      </div>



      <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div class="text-container">
          <h2 class="lg:text-4xl">
            Prevent failure from to impacting reputation
          </h2>
          <p class="mt-4">
            Preventing failures from negatively impacting reputation involves a combination of proactive measures and effective crisis management. Here are some strategies to consider:
          </p>
          <ul class="tab-nav -ml-4 mt-8 border-b-0"  onMouseOver={()=>setActive(0)} onMouseLeave={()=>setActive(1)}>
            <li class={`tab-nav-item ${active?'active':''}`}>
              <img class="mr-3" src="https://themewagon.github.io/pinwheel/images/icons/drop.svg" alt="" />
              Establish Robust Quality Control
            </li>
            <li class="tab-nav-item items-center">
              <img class="mr-3" src="https://themewagon.github.io/pinwheel/images/icons/brain.svg" alt="" />
              Client Feedback and Satisfaction
            </li>
            <li class="tab-nav-item">
              <img class="mr-3" src="https://themewagon.github.io/pinwheel/images/icons/timer.svg" alt="" />
              Transparent Communication
            </li>
          </ul>
        </div>
      </div>


    </div>



    <div class="row gx-5 mt-12 items-center lg:mt-0">
      <div class="lg:col-7">
        <div class="relative md:mb-8">
          <img className=" md:w-full h-72 md:h-96  rounded-2xl" src="assests\images\client.jpg" />
          <img
            class="absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2"
            src="https://themewagon.github.io/pinwheel/images/shape.svg"
            alt=""
          />
        </div>
      </div>
      <div class="mt-6 lg:col-5 lg:mt-0">
        <div class="text-container">
          <h2 class="lg:text-4xl">
          Client-Centric Approach
          </h2>
          <p class="mt-4">
          We prioritize our clients' needs and aspirations, tailoring our services to address unique challenges and opportunities in the ever-evolving technological landscape.
          </p>
          <ul class="mt-6 text-dark lg:-ml-4">
            <li class="mb-2 flex items-center rounded px-4">
              <img
                class="mr-3"
                src="https://themewagon.github.io/pinwheel/images/icons/checkmark-circle.svg"
                alt=""
              />
              Understanding Client Needs
            </li>
            <li class="mb-2 flex items-center rounded px-4">
              <img
                class="mr-3"
                src="https://themewagon.github.io/pinwheel/images/icons/checkmark-circle.svg"
                alt=""
              />
              Timely Responsiveness
            </li>
            <li class="flex items-center rounded px-4">
              <img
                class="mr-3"
                src="https://themewagon.github.io/pinwheel/images/icons/checkmark-circle.svg"
                alt=""
              />
              Building Relationships
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row gx-5 mt-12 items-center lg:mt-0">
      <div class="lg:col-7 lg:order-2">
        <div class="video pb-5 pr-9">
          <div class="video-thumbnail overflow-hidden rounded-2xl">
            <img
              class="w-full object-contain"
              src="https://themewagon.github.io/pinwheel/images/intro-thumbnail.png"
              alt=""
            />
            <button class="video-play-btn">
              <img src="https://themewagon.github.io/pinwheel/images/icons/play-icon.svg" alt="" />
            </button>
          </div>
          <div
            class="video-player absolute left-0 top-0 z-10 hidden h-full w-full"
          >
            <iframe
              class="h-full w-full"
              allowfullscreen=""
              src="https://www.youtube.com/embed/g3-VxLQO7do?autoplay=1"
            ></iframe>
          </div>
          <img
            class="intro-shape absolute bottom-0 right-0 -z-[1]"
            src="https://themewagon.github.io/pinwheel/images/shape.svg"
            alt=""
          />
        </div>
      </div>
      <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div class="text-container">
          <h2 class="lg:text-4xl">Accountability that works for you</h2>
          <p class="mt-4">
          Our commitment to global collaboration ensures that teams worldwide benefit from diverse perspectives and expertise, creating a rich environment for knowledge exchange.
          </p>
          <button class="btn btn-white mt-6">know about us</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services