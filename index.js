var obj = [{"_id":"62a98f20c91c22e89adf5357","AssetName":"Monitors","BoxNumber":"1","Location":"Store","UpdatedOn":"2022-06-15T07:49:52.035Z","__v":0},{"_id":"62a98f3bc91c22e89adf535b","AssetName":"Ip phones","BoxNumber":"3","Location":"Store","UpdatedOn":"2022-06-15T07:50:19.095Z","__v":0},{"_id":"62a9a200c91c22e89adf5369","AssetName":"Ipads","BoxNumber":"2","Location":"Store","UpdatedOn":"2022-06-15T09:10:24.965Z","__v":0}]

var headers = [];

for(let i = 0 ; i < obj.length ; i++){
    for(let j in obj[i]){
        if(headers.indexOf(j) === -1){
            headers.push(j);
        }
    }
}


var Table = document.createElement("table");

var tr = Table.insertRow(-1); // Inserts row at the last of the the table
// console.log(headers);
for(let i in headers){
  //  console.log(headers[i]);
    var th = document.createElement("th");
    th.innerHTML = headers[i];
    tr.appendChild(th);
}

Table.appendChild(tr);

for(let i=0; i<obj.length ;i++){
    tr = Table.insertRow(-1);
    
    for(let j=0; j < headers.length; j++){
        var td = document.createElement("td");
        td.innerHTML = obj[i][headers[j]];
        console.log(obj[i][headers[j]]);
        tr.appendChild(td);
    }
    Table.appendChild(tr);
}


document.body.appendChild(Table);

