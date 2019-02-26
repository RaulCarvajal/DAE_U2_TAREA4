var fs = require('fs');

fs.readFile('list.csv','utf8',(err, data) => {
    if (err) throw err;
    var line=data.split("\n");
    var textToSave="";
    line.shift();
    line.forEach((reg)=>{
        var aux=reg.split(",")
        textToSave=textToSave.concat(`#${aux[0]}\nNúmero de control: ${aux[1]}\nNombre: ${aux[2]}\nCalificación: ${aux[3]}\n-----------------------------------------`);
    })
    save(textToSave);
});
function save(content){
    fs.appendFile("Output.txt",content,(err)=>{
        if(err) throw err;
        console.log("File write successfully")
    });
}