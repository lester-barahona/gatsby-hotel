import React from "react"
import Layout from './../components/layout';
import ImagenHotel from './../components/imagenHotel';
import ContenidoInicio from './../components/contenidoInicio';
import useHabitaciones from './../hooks/useHabitaciones';
import HabitacionPreview from './../components/habitacionPreview';


const IndexPage = () => {
  
  const habitaciones=useHabitaciones();
  
return (
  <Layout>
    <ImagenHotel/>

    <ContenidoInicio/>

    <h2 className="text-center my-4">Nuestras Habitaciones</h2>

    <div className="habs-container">
    {
      habitaciones.map(hab=>(
        <HabitacionPreview key={hab.id} habitacion={hab} />
      ))
    }
   </div>
  </Layout>
  )
}

export default IndexPage
