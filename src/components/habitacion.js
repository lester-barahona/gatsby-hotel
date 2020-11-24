import React from 'react'
import { graphql } from 'gatsby';
import Layout from './layout';
import  Image  from 'gatsby-image';


export const query=graphql`
query($slug:String!){
    allDatoCmsHabitacion(filter:{slug:{eq:$slug}}){
        nodes{
            titulo
            id
            slug
            contenido
            imagen{
                fluid(maxWidth:1200){
                    ...GatsbyDatoCmsFluid
                }
            }
        }
    }
}
`

const Habitacion = ({data:{allDatoCmsHabitacion:{nodes}}}) => {
    const {contenido,imagen,titulo}=nodes[0];
    return (
        <Layout>
            <main className="container my-5">
              <h1>{titulo}</h1>
              <p className="my-4">{contenido}</p>
              <Image fluid={imagen.fluid}/>
            </main>
        </Layout>
    )
}

export default Habitacion
