import React from 'react'
import "./Home.scss"

function Home() {
  return (
    <main>
      <section className='main_section'>
        <div className='img_div'><img src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp" alt="" /></div>
        <div className='text_div'>
          <p className='flat'>Flat 75%Off</p>
          <p className='season'>IT’S HAPPENING THIS SEASON!</p>
          <button>PURCHASE NOW</button>
        </div>
      </section>

      <section className='image_section'>
        <div className='image_container'>
          <div className='text_div'>
            <p>Shop for Different Categories</p>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="image_div">
            <div className='image_2'>
            <div><img src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp" alt="" /> </div>
            <div> <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp" alt="" /></div>
            </div>
            <div ><img src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp" alt="" /> </div>
            <div ><img src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp" alt="" /> </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home