import React from 'react'
import { graphql , useStaticQuery} from 'gatsby';
import Image from 'gatsby-image'
const ContenidoNosotros = () => {

    const info=useStaticQuery(graphql`
        query{
            allDatoCmsPagina(filter:{slug:{eq:"nosotros"}}){
                nodes{
                    titulo
                    contenido
                    imagen{
                        fluid(maxWidth:1200){
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
             <h2 className="text-center mt-5">{titulo}</h2>
            <div className="container my-5 inicio-secimg"> 
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </div>
        </>
    )
}

export default ContenidoNosotros
