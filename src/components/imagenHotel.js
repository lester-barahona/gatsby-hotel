import React from 'react'
import { graphql,useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';






const ImagenHotel = () => {

    const {image}=useStaticQuery(
        graphql`
        query{
            image:file(relativePath:{eq:"8.jpg"}){
             sharp:childImageSharp{
               fluid{
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
           }
        `
    )

    return (
        <BackgroundImage  Tag="section" className="img-principal" fluid={image.sharp.fluid} fadeIn="soft">
              <div>
                  <div>
                  <h1 className="text-white">Bienvenido a Hotelcito</h1>
                  <h5 className="text-white">El mejor hotel para una vacaciones</h5>
                  </div>
              </div>  
        </BackgroundImage>
        
    )
}

export default ImagenHotel
