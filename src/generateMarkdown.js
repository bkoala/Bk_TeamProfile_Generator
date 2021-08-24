// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function to generate an index file 
function generateMarkdown(data) {
  //console.log(data);
  var Answerd=JSON.parse(data);
//  console.log(Answerd.length);
 //Put Manager information 
  var text1="<div class='col-sm-4'> <div class='card'><div class='card-header bg-primary headsize'>" + `${Answerd[0].name} `+ "<br><i class='fa fa-coffee'></i> " + `${Answerd[0].role}` +"</div>";
  text1 += "<div class='card-body'><p>ID: "+ ` ${Answerd[0].id}` + "<hr></p><p>Email: " + `${Answerd[0].email} ` + "<hr></p><p>OFfice Number: " + `${Answerd[0].officeNumber}` + "</p></div></div></div>";
  var text2=""; var text3=""; 
  for( let xx=1;xx<Answerd.length; xx++)
  {  var text6=""; var text7="";
      if(Answerd[xx].role==="Engineer"){
          text6="Github: " + Answerd[xx].gitHub;
          text7="<i class='fa fa-eye'></i> " + Answerd[xx].role;
      } else if(Answerd[xx].role==="Intern")
       { text6="School: " + Answerd[xx].school; 
       text7="<i class='fa fa-graduation-cap'></i> " + Answerd[xx].role;
        }
        
    
      if(xx < 3){
     text2 += "<div class='col-sm-4'><div class='card'><div class='card-header bg-primary headsize'>" +`${Answerd[xx].name}` + "<br>" + `${text7}` +"</div><div class='card-body'><p>ID: " + `${Answerd[xx].id}` + "<hr></p><p>Email: " + `${Answerd[xx].email} ` + "<hr></p><p> " + `${text6}` +"</p></div></div></div>";
     }else{
        text4=""; text5="";
        
       if ((xx % 3) === 0){ text4="<div style='padding-top:10px'></div><div class='row'>" ; } 
       if(((xx % 3) === 2) || (xx=== (Answerd.length-1) )) { text5="</div>" ;}
       text3 +=text4+"<div class='col-sm-4'><div class='card'><div class='card-header bg-primary headsize'>" + `${Answerd[xx].name}` +"<br>"+`${text7}` +"</div><div class='card-body'><p>ID: "+ `${Answerd[xx].id}` +"<hr></p><p>Email: "+ `${Answerd[xx].email}`+"<hr></p><p> "+ `${text6}`+"</p></div></div></div>"+text5;
      
      }

    }

   return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
     <style>
     .myJumbo 
     { background-color: #f71c27f3;text-align:center;color:#fff; }
    .headsize
     {font-size:24px;color:white; 
     }
     .footercontent{
      background-color:#f71c27f3;margin-top:30px;  padding:30px 0px; color:#fff;font-size:16px;text-align:center;
     }
   </style>
     <title>Document</title>
   </head>
   <body>
     <div class="jumbotron jumbotron-fluid myJumbo">
       <h1 class="display-4 ">${Answerd[0].name}'s Team   </h1>
   </div>
   <div class="container">
     <div class="row"> 
     ${text1}
     ${text2}
     </div>    
       ${text3}
   </div> 
   <div class="footer">
   <div class="footer-copyright footercontent">© 2021 Copyright:  Ben Koala, 2021 UW BootCamp
  </div>
 </body>
 </html> 

`;
}

module.exports = {generateMarkdown};
