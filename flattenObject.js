const nestedObject = {
    id: 1,
    name: 'Parent',
    address: {
        address1: 'name',
        address2: 'name',
        location: {
            zipcode: 'name'
        }
    }
};


// output:
// {
//   id: 1,
//   name: 'Parent',
//   'address.address1': 'name',
//   'address.address2': 'name',
//   'address.location.zipcode': 'name'
// }

function flattenObject (obj, parentkey='', res= {}){

    for(let key in obj){
      const newKey = parentkey ? parentkey+'.'+key : key
      const value = obj[key]
      const propType = typeof value
      if(propType === 'object' && value !== 'null' && !Array.isArray(value)){
        flattenObject(value, newKey, res)
      } else {
        res[newKey] = value
      }

    }

    return res

}


console.log(flattenObject(nestedObject))