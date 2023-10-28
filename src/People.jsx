/* eslint-disable react/prop-types */


const People = ({name,age,image}) => {
  return <article className="person">
    <img src={image} alt={name} className="img"/>
    <div>
    <h4>Name:{name}</h4>
    <p>Age:{age}</p>
    </div>
  </article>
}

export default People