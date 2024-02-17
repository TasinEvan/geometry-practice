// function calculetedTriangleArea(){
//     const baseTriangle = document.getElementById('triangle-base')
//     const inputBase = baseTriangle.value
//     const numberBase = parseFloat(inputBase)
    
    
//     const heightTriangle = document.getElementById('triangle-height')
//     const inputHeight = heightTriangle.value
//     const numberheight = parseFloat(inputHeight)

//     const area = 0.5 * numberBase * numberheight
   
//     const areavalue = document.getElementById('triangle-area')
//     areavalue.innerText = area
     
// }

function calculetedTriangleArea(){
    const base = getInputValue('triangle-base')
    const height = getInputValue('triangle-height')

    const area = 0.5 * base * height
    setElementById('triangle-area',area)
}

function calculatedRectangleArea(){
   const width = getInputValue('rectangle-width')
   const height = getInputValue('rectangle-length')

   const area = width * height
   setElementById('rectangle-area',area)


}