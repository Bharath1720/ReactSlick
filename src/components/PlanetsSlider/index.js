import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const styles = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-container slider-container" testid="planets">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...styles}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetData={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
