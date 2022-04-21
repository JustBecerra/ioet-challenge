const fs = require('fs')

function ACMEtable(){
    fs.readFile('employeeTable.txt', 'utf-8', (err, data) => {
      var ASTRID_ANDRES = 0;
      var RENE_ASTRID = 0;
      var ANDRES_RENE = 0;
      for(let i=0;i < data.length;i++){

        let RENE = ''
        if(data[i] === 'R'){//identifico que es RENE
          let j = i + 5;
          
          while(data[j] !== '}'){//paro de recorrer su horario
           RENE += data[j]
           j++;
          }
        }
        
        let ASTRID = ''
        if(data[i] === 'A'){//identifico que es ASTRID
          let j = i + 7;
          while(data[j] !== '}'){//paro de recorrer su horario
           ASTRID += data[j]
           j++;
          }
        }
        
        let ANDRES = ''
        if(data[i] === 'A' && data[i+1] === 'N'){//identifico que es ANDRES
          let j = i + 7;
           while(data[j] !== '}'){//paro de recorrer su horario
            ANDRES += data[j]
            j++;
           }
        }


        // console.log(RENE)
        // console.log(ASTRID)
        // console.log(ANDRES ? ANDRES : 'Andres didnt come to work')
        
        for(var m = 0; m < RENE.length; m++){
          let dayhour = ''

          while(RENE[m] !== ','){
            dayhour += RENE[m]
            console.log(dayhour)
          }
          if(ASTRID.contains(dayhour)){
            RENE_ASTRID++;
          }
          if(ANDRES.contains(dayhour)){
            ANDRES_RENE++;
          }
          if(RENE[m] === ','){
            dayhour=''
          }
        }

        for(var n = 0; n < ASTRID.length; n++){
            let dayhour = '';
            
            while(ASTRID[n] !== ','){
              dayhour += ASTRID[n]
              console.log(dayhour)
            }
            if(ANDRES.contains(dayhour)){
              ASTRID_ANDRES++;
            }
            if(ASTRID[n] === ','){
              dayhour=''
            }
        }

        // if(data[i] === 'x'){
        //     RENE = ''
        //     ASTRID = ''
        //     ANDRES = ''
        // }   
    }
    console.log(RENE_ASTRID)
    console.log(ASTRID_ANDRES)
    console.log(ANDRES_RENE)
  }) 
}

ACMEtable()