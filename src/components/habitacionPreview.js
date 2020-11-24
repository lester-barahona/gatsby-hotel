import React from 'react'
import  Image  from 'gatsby-image';
import  {Link}  from 'gatsby';


const HabitacionPreview = ({habitacion}) => {

    const {contenido,imagen,titulo,slug}=habitacion;

    return (
        <div className="card">
        <Image fluid={imagen.fluid} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{contenido}</p>
            <Link to={slug} className="btn btn-primary btn-block">Ver</Link>
        </div>
        </div>
    )
}

export default HabitacionPreview
