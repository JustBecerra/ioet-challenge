const fs = require('fs')

function ACMEtable(){
    fs.readFile('employeeTable.txt', 'utf-8', (err, data) => {
      var ASTRID_ANDRES = 0;
      var RENE_ASTRID = 0;
      var ANDRES_RENE = 0;
      var RENE = []
      var ASTRID = []
      var ANDRES = []
      for(let i=0;i < data.length;i++){

        if(data[i] === 'R' && data[i+2] === 'N'){//identify RENE
          let j = i + 5;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//stop traversing RENE's hours
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
          RENE.push(hours)
          hours=[]
        }
        
        
        if(data[i] === 'A' && data[i+1] === 'S'){//identify ASTRID
          let j = i + 7;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//stop traversing ASTRID's hours
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
          ASTRID.push(hours)
          hours=[]
        }
        
        
        if(data[i] === 'A' && data[i+1] === 'N'){//identify ANDRES
          let j = i + 7;
          let dayhour = ''
          let hours = []
          while(data[j] !== '}'){//stop traversing ANDRES's hours
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
          ANDRES.push(hours)
          hours = []
        }  
      }

      for(var m = 0; m < RENE.length; m++){
        for(var n = 0;n < RENE[m].length; n++){
          if(ASTRID[m].includes(RENE[m][n])){
            RENE_ASTRID++;
          }
        }
        console.log('RENE_ASTRID ', RENE_ASTRID)
        RENE_ASTRID = 0;
      }

      for(var p = 0; p < ANDRES.length; p++){
        for(var q = 0; q < ANDRES[p].length; q++){
          if(ASTRID[p].includes(ANDRES[p][q])){
            ASTRID_ANDRES++;
          }
          if(RENE[p].includes(ANDRES[p][q])){
            ANDRES_RENE++;
          }
        }
        console.log('ASTRID_ANDRES ', ASTRID_ANDRES)
        ASTRID_ANDRES = 0
        console.log('ANDRES_RENE ', ANDRES_RENE)
        ANDRES_RENE = 0
      }
  }) 
}

ACMEtable()