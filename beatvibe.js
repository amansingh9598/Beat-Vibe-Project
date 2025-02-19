function upload(p1,t1,a){
    let alb = document.getElementById('album');
    document.getElementById('text').innerHTML= t1;
    alb.innerHTML = '<img class="chotaimg" src=" '+p1+'" />';
    let amm = document.getElementById('player');
    amm.innerHTML = '<audio src="'+a+'" type="audio/jpg" controls class="musicsong"></audio>';
    console.log("m kam kr rha hu");
    
  }