// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate an index file 
function generateMarkdown(data) {
  //console.log(data);
  var Answerd=JSON.parse(data);
//  console.log(Answerd.length);
 //Put Manager information 
  var text1="<div class='col-sm-4'> <div class='card'><div class='card-header bg-primary text-white'><span style='font-size:24px'>" + `${Answerd[0].name} `+ "<br><i class='fa fa-coffee'></i>" + `${Answerd[0].role}` +"</span></div>";
  text1 += "<div class='card-body'><p>ID: "+ ` ${Answerd[0].id}` + "<hr></p><p>Email: " + `${Answerd[0].email} ` + "<hr></p><p>OFfice Number: " + `${Answerd[0].officeNumber}` + "</p></div></div></div>";
  var text2=""; var text3=""; 
  for( let xx=1;xx<Answerd.length; xx++)
  {  var text6=""; var text7="";
      if(Answerd[xx].role==="Engineer"){
          text6="Github: " + Answerd[xx].gitHub;
          text7="<i class='fa fa-save'></i>" + Answerd[xx].role;
      } else if(Answerd[xx].role==="Intern")
       { text6="School: " + Answerd[xx].school; 
       text7="<i class='fa fa-save'></i>" + Answerd[xx].role;
        }
        
    
      if(xx < 3){
     text2 += "<div class='col-sm-4'><div class='card'><div class='card-header bg-primary text-white'><span style='font-size:24px'>" +`${Answerd[xx].name}` + "<br>" + `${text7}` +"</span></div><div class='card-body'><p>ID: " + `${Answerd[xx].id}` + "<hr></p><p>Email: " + `${Answerd[xx].email} ` + "<hr></p><p> " + `${text6}` +"</p></div></div></div>";
     }else{
        text4=""; text5="";
        
       if ((xx % 3) === 0){ text4="<div style='padding-top:10px'></div><div class='row'>" ; } 
       if(((xx % 3) === 2) || (xx=== (Answerd.length-1) )) { text5="</div>" ;}
       text3 +=text4+"<div class='col-sm-4'><div class='card'><div class='card-header bg-primary text-white'><span style='font-size:24px'>" + `${Answerd[xx].name}` +"<br>"+`${text7}` +"</span></div><div class='card-body'><p>ID: "+ `${Answerd[xx].id}` +"<hr></p><p>Email: "+ `${Answerd[xx].email}`+"<hr></p><p> "+ `${text6}`+"</p></div></div></div>"+text5;
      
      }

    }

   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
     <title>Document</title>
   </head>
   <body>
     <div class="jumbotron jumbotron-fluid text-center">
       <h1 class="display-4 ">${Answerd[0].name}'s Team   </h1>
   </div>
   <div class="container">
     <div class="row"> 
     ${text1}
     ${text2}
     </div>    
       ${text3}
   </div> 
 </body>
 </html> 

`;
}

module.exports = {generateMarkdown};
