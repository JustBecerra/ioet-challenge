const fs = require('fs')

function ACMEtable(){
    fs.readFile('employeeTable.txt', 'utf-8', (err, data) => {
      var ASTRID_ANDRES = 0;
      var RENE_ASTRID = 0;
      var ANDRES_RENE = 0;
      var dayhourA = '';
      var dayhourB = '';
      var RENE = []
      var ASTRID = []
      var ANDRES = []
      for(let i=0;i < data.length;i++){

        if(data[i] === 'R' && data[i+2] === 'N'){//identifico que es RENE
          let j = i + 5;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//paro de recorrer su horario
           if(data[j] === ','){
            hours.push(dayhour)
            dayhour = ''
            j++
           }
           dayhour += data[j]
           if(data[j+1] === '}'){
            hours.push(dayhour)
            dayhour = ''
           }
           j++;
          }
          console.log('rene ',hours)
          RENE.push(hours)
          hours=[]
        }
        
        
        if(data[i] === 'A' && data[i+1] === 'S'){//identifico que es ASTRID
          let j = i + 7;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//paro de recorrer su horario
           if(data[j] === ','){
            hours.push(dayhour)
            dayhour = ''
            j++
           }
           dayhour += data[j]
           if(data[j+1] === '}'){
            hours.push(dayhour)
            dayhour = ''
           }
           j++
          }
          console.log('astrid ', hours)
          ASTRID.push(hours)
          hours=[]
        }
        
        
        if(data[i] === 'A' && data[i+1] === 'N'){//identifico que es ANDRES
          let j = i + 7;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//paro de recorrer su horario
            if(data[j] === ','){
              hours.push(dayhour)
              dayhour = ''
              j++
            }
            dayhour += data[j]
            if(data[j+1] === '}'){
              hours.push(dayhour)
              dayhour = ''
            }
            j++;
          }
          console.log('andres ', hours)
          ANDRES.push(hours)
          hours = []
        }
  
        // for(var m = 0; m < RENE.length; m++){
        //   if(RENE[m] !== ','){
        //     dayhourB += RENE[m]
        //   }else{
        //     if(ASTRID.includes(dayhourB)){
        //       RENE_ASTRID++;
        //     }
        //     if(ANDRES.includes(dayhourB)){
        //       ANDRES_RENE++;
        //     }
        //     dayhourB=''
        //   }
        // }

        // for(var n = 0; n < ASTRID.length; n++){
            
        //   if(ASTRID[n] !== ','){
        //     dayhourA += ASTRID[n]
        //   }else{
        //     console.log('dayhourA ', dayhourA)
        //     if(ANDRES.includes(dayhourA)){
        //       ASTRID_ANDRES++;
        //     }
        //     dayhourA=''   
        //   }
        // }

        // if(data[i] === 'x'){
        //   RENE = ''
        //   ASTRID = ''
        //   ANDRES = ''
        // }   
    }
    console.log(RENE_ASTRID)
    console.log(ASTRID_ANDRES)
    console.log(ANDRES_RENE)
  }) 
}

ACMEtable()