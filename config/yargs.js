const argv = require('yargs')
     .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicaf'

      }) 
      .check((argv, options ) => {
      if(isNaN(argv.b)){
        throw 'La base debe ser un Numero'
        }
          return true;
      }) 
      .option('l', {
         alias: 'listar',
         type: 'boolean',
         default: false,
         describe: 'Muestra la tabla en consola'

        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Indicador del alcance del Multiplicador'
          })
          .check((argv, options)=> {
            if(isNaN(argv.h)){
              throw 'El multiplicador debe ser un Numero'
              }
              
              return true;
          }) 
  
                  
    .argv;
module.exports = argv;
