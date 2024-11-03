declare module 'vue-slick-carousel' {
  import { DefineComponent } from 'vue'

  const VueSlickCarousel: DefineComponent<{
    arrows?: boolean
    dots?: boolean
    infinite?: boolean
    speed?: number
    slidesToShow?: number
    slidesToScroll?: number
  }>

  export default VueSlickCarousel
}
