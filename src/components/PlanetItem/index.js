import './index.css'

const PlanetItem = props => {
  const {planetData} = props

  const {name, imageUrl, description} = planetData
  return (
    <div>
      <div className="container">
        <img className="image" src={imageUrl} alt={`planet ${name}`} />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
