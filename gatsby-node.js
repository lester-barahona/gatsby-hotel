
exports.createPages= async({actions,graphql,reporter})=>{

  const res=await graphql(`
      query{
        allDatoCmsHabitacion{
          nodes{
            slug
          }
        }
      }
  `)

  if(res.erros){
    reporter.panic('Sin resultados',res.errors);
  }

  const habitaciones=res.data.allDatoCmsHabitacion.nodes;
  habitaciones.forEach(hab => {
      actions.createPage(
        {
          path:hab.slug,
          component:require.resolve('./src/components/habitacion.js'),
          context:{
            slug:hab.slug
          }
        }
      )
  });

}



exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("develop")) {
      actions.setWebpackConfig({
        resolve: {
          alias: {
            "react-dom": "@hot-loader/react-dom",
          },
        },
      })
    }
  }