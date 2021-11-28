let myArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let myArray2 = new Proxy(myArray, {
  get(target,prop){
    if(!isNaN(prop)){
      prop = parseInt(prop, 10)
      if (prop < 0) {
        prop += target.length
      }
    }
    return target[prop]
  }
})

verschluesseln = () => {
  let x = ""
  let input = document.getElementById("inputText")
  let input1 = input.value.toUpperCase().split("")
  let ergebnis = document.getElementById("ergebnis")
  let decode = document.getElementById("decodeNumber").value
  for(i=0;i<input1.length;i++){
    for(j=0;j<myArray.length;j++){
      if(input1[i] == myArray[j]){
        if(j+Number(decode) > 25){
          x+= myArray[j+Number(decode)-26]
          ergebnis.innerHTML = x
        } else if(j+Number(decode) < -25){
          x += myArray2[j+Number(decode)+26]
          ergebnis.innerHTML = x
        } else{
          x += myArray2[j+Number(decode)]
          ergebnis.innerHTML = x
        }
      }
    }
  }
}

