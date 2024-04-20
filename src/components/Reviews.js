import React from 'react'

const Reviews = () => {
  return (
    <section class="reviews">
  <div class="container">
    <div class="row justify-between">
      <div class="lg:col-6">
        <h2>Our customers have nice things to say about us</h2>
      </div>
      <div class="lg:col-4">
        <p>
        That's wonderful to hear! Positive feedback from customers is a great indicator of your company's success and the quality of your products or services.
        </p>
      </div>
    </div>
    <div class="row mt-10">
      <div class="col-12">
        <div class="swiper reviews-carousel">
          <div class="swiper-wrapper grid md:grid-cols-3 gap-2">
            <div class="swiper-slide col-span-1">
              <div class="review">
                <div class="review-author-avatar bg-gradient">
                  <img src="https://themewagon.github.io/pinwheel/images/users/user-5.png" alt="" />
                </div>
                <h4 class="mb-2">Courtney Henry</h4>
                <p class="mb-4 text-[#666]">microsoft corp</p>
                <p>
                  Our platform helps build secure onboarding authentica
                  experiences & engage your users. We build .
                </p>
                <div
                  class="review-rating mt-6 flex items-center justify-center space-x-2.5"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-slide col-span-1">
              <div class="review">
                <div class="review-author-avatar bg-gradient">
                  <img src="https://themewagon.github.io/pinwheel/images/users/user-2.png" alt="" />
                </div>
                <h4 class="mb-2">Ronald Richards</h4>
                <p class="mb-4 text-[#666]">meta limited</p>
                <p>
                  Our platform helps build secure onboarding authentica
                  experiences & engage your users. We build .
                </p>
                <div
                  class="review-rating mt-6 flex items-center justify-center space-x-2.5"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star-white.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="swiper-slide col-span-1">
              <div class="review">
                <div class="review-author-avatar bg-gradient">
                  <img src="https://themewagon.github.io/pinwheel/images/users/user-6.png" alt="" />
                </div>
                <h4 class="mb-2">Bessie Cooper</h4>
                <p class="mb-4 text-[#666]">apple inc ltd</p>
                <p>
                  Our platform helps build secure onboarding authentica
                  experiences & engage your users. We build .
                </p>
                <div
                  class="review-rating mt-6 flex items-center justify-center space-x-2.5"
                >
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star.svg" alt="" />
                  <img src="https://themewagon.github.io/pinwheel/images/icons/star-white.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="swiper-pagination reviews-carousel-pagination !bottom-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Reviews