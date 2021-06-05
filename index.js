
function findMatching(arr, str){
   const filteredArray = arr.filter(function(element){
      return element.toLowerCase() === str.toLowerCase()
   })
   return filteredArray
}

function fuzzyMatch(arr, str){
    const length = str.length
    const filteredArray = arr.filter(function(element){
       return element.toLowerCase().slice(0, length) === str.toLowerCase().slice(0, length)
    })
    return filteredArray
 }

function matchName(arr, str){
    const filteredArray = arr.filter(function(element){
        return element.name.toLowerCase() === str.toLowerCase()
     })
     return filteredArray
}

