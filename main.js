function examgrid(){
    var grid=parseFloat(document.getElementById('grid').value)
    var examgrid = document.getElementById('examgrid')
    var massage = ''
    if(grid>=90){
        massage = 'grid A'
    }else if(grid >=80){
        massage = 'gridB'
    }
    else if (grid>=70){
        massage = 'grid C'
    }else if (grid>50 ){
        massage = 'grid D'
    }else{
        massage = 'failed'
    }
    examgrid.innerText = `your gried is ${massage}`
}