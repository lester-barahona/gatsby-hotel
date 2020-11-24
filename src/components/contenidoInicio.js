import React from 'react'
import { graphql , useStaticQuery} from 'gatsby';
import Image from 'gatsby-image'

const ContenidoInicio = () => {

    const info=useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter:{slug:{eq:"inicio"}}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid{
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    const {titulo,contenido,imagen}=info.allDatoCmsPagina.nodes[0];
    return (
        <>  
            <div className="container mt-5 text-center">
            <h2>{titulo}</h2>
            <div className="inicio-secimg">
            <p>{contenido}</p>
            <Image fluid={imagen.fluid}/>
            </div>
            </div>
        </>
    )
}

export default ContenidoInicio
