/* Ubah bagian ini dengan data Anda */
var NAME="Kevin I`rwansyah", SIGN="Nama Anda", EMAIL="kevinirwansyah398@gmail.com";
document.getElementById("nm").textContent=NAME;document.getElementById("sg").textContent=SIGN;document.title=NAME;

/* Angka naik */
document.querySelectorAll(".num").forEach(function(el){
  var to=+el.dataset.to,t0=null;
  function f(t){t0=t0||t;var p=Math.min((t-t0)/1200,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+"+";if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
});

/* Ikon fisika */
var M=Matter,E=M.Engine.create(),panel=document.getElementById("pl"),still=matchMedia("(prefers-reduced-motion:reduce)").matches;
E.gravity.y=0;var W=panel.clientWidth,H=panel.clientHeight,walls=[];
function mk(){
  if(!panel.clientWidth)return;
  M.Composite.remove(E.world,walls);W=panel.clientWidth;H=panel.clientHeight;
  var o={isStatic:true};
  walls=[M.Bodies.rectangle(W/2,H+30,W+400,60,o),M.Bodies.rectangle(W/2,-30,W+400,60,o),M.Bodies.rectangle(-30,H/2,60,H+400,o),M.Bodies.rectangle(W+30,H/2,60,H+400,o)];
  M.Composite.add(E.world,walls);
  items.forEach(function(it){var p=it.b.position,h=it.s/2+4;
    M.Body.setPosition(it.b,{x:Math.min(Math.max(p.x,h),W-h),y:Math.min(Math.max(p.y,h),H-h)})});
}
var items=[];
var N=T.length,cols=Math.max(2,Math.round(Math.sqrt(N*W/Math.max(H,1)))),rows=Math.ceil(N/cols),ord=[];
for(var q=0;q<N;q++)ord.push(q);ord.sort(function(){return Math.random()-.5});
T.forEach(function(t,i){
  var k=panel.clientWidth<520?.8:1,big=i%4===0,s=Math.round((big?112:90)*k),el=document.createElement("div");
  el.className="tile"+(big?" lg":"");el.style.width=el.style.height=s+"px";
  el.innerHTML='<svg viewBox="0 0 24 24" width="'+(big?60:46)+'" height="'+(big?60:46)+'" fill="'+t[1]+'" aria-hidden="true"><path d="'+t[2]+'"/></svg><span>'+t[0]+'</span>';
  panel.appendChild(el);
  var cw=W/cols,ch=(H-40)/rows,x=cw*(ord[i]%cols+.5)+(Math.random()-.5)*Math.max(cw-s,0)*.6,y=40+ch*(Math.floor(ord[i]/cols)+.5)+(Math.random()-.5)*Math.max(ch-s,0)*.6;
  x=Math.min(Math.max(x,s/2+4),W-s/2-4);y=Math.min(Math.max(y,s/2+4),H-s/2-4);
  var b=M.Bodies.rectangle(x,y,s,s,{restitution:.6,friction:0,frictionStatic:0,frictionAir:.01,inertia:Infinity});
  items.push({b:b,el:el,s:s,ph:Math.random()*6.28,sp:.8+Math.random()*.5});M.Composite.add(E.world,b);
});
mk();
var mouse=M.Mouse.create(panel);
mouse.element.removeEventListener("mousewheel",mouse.mousewheel);mouse.element.removeEventListener("DOMMouseScroll",mouse.mousewheel);
var mc=M.MouseConstraint.create(E,{mouse:mouse,constraint:{stiffness:.2,render:{visible:false}}});M.Composite.add(E.world,mc);
var ptr=null;
panel.addEventListener("pointermove",function(e){if(e.pointerType!=="mouse")return;var r=panel.getBoundingClientRect();ptr={x:e.clientX-r.left,y:e.clientY-r.top}});
panel.addEventListener("pointerleave",function(){ptr=null});
M.Events.on(E,"beforeUpdate",function(){
  if(still)return;
  var t=performance.now()/1000;
  items.forEach(function(it){
    if(mc.body===it.b)return;
    var v=it.b.velocity,ty=Math.cos(t*it.sp*1.7+it.ph)*.32,nx=v.x*.96,ny=v.y+(ty-v.y)*.06;
    if(ptr){var dx=it.b.position.x-ptr.x,dy=it.b.position.y-ptr.y,d=Math.hypot(dx,dy),R=it.s/2+110;
      if(d<R){var f=Math.pow(1-d/R,1.5)*1.1,u=d||1;nx+=dx/u*f;ny+=dy/u*f}}
    var sp=Math.hypot(nx,ny);if(sp>9){nx*=9/sp;ny*=9/sp}
    M.Body.setVelocity(it.b,{x:nx,y:ny});
  });
});
M.Events.on(E,"afterUpdate",function(){
  items.forEach(function(it){var p=it.b.position;
    it.el.style.transform="translate("+(p.x-it.s/2)+"px,"+(p.y-it.s/2)+"px) rotate("+it.b.angle+"rad)"});
});
M.Runner.run(M.Runner.create(),E);
addEventListener("resize",mk);
/* Bagian lain */
var P=NAME.split(" ");document.getElementById("n1").textContent=P[0];document.getElementById("n2").textContent=P.slice(1).join(" ")||P[0];document.getElementById("fn2").textContent=NAME;
var calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var AB="Halo, saya "+NAME.split(" ").map(function(w){return"*"+w+"*"}).join(" ")+", seorang *web* *developer* yang suka membangun tampilan yang rapi, sistem yang kuat, dan mengubah ide menjadi *produk* *digital* yang berguna. Tujuan saya adalah membuat pengalaman web yang modern dan cepat, yang membantu bisnis berkembang dan meninggalkan kesan yang kuat.";
var ae=document.getElementById("ab");
ae.innerHTML=AB.split(" ").map(function(w){return"<span"+(w.charAt(0)==="*"?' class="a"':"")+">"+w.replace(/\*/g,"")+"</span>"}).join(" ");
var ws=ae.querySelectorAll("span"),ph=document.getElementById("ph");
function sc(){
  var r=ae.getBoundingClientRect(),vh=innerHeight,p=Math.min(Math.max((vh*.85-r.top)/(r.height+vh*.25),0),1),n=calm?ws.length:Math.round(p*ws.length);
  ws.forEach(function(w,i){w.classList.toggle("on",i<n)});
  if(!calm)ph.style.transform="translate(-50%,"+Math.min(scrollY*.12,120)+"px)";
}
addEventListener("scroll",sc,{passive:true});sc();

/* Foto: taruh file di img/foto.jpg, otomatis tampil di hero */
(function(){var im=new Image();im.onload=function(){ph.style.backgroundImage="url(img/foto.jpg)";ph.style.backgroundSize="cover";ph.style.backgroundPosition="center top";ph.textContent=""};im.src="img/foto.jpg"})();

/* Keahlian */
var CP=[["Arsitektur full stack","Membangun aplikasi web dari tampilan sampai server dan database.",["HTML","CSS","JavaScript","React","Node.js","PHP","MySQL"],["Tampilan responsif di semua layar","Desain database yang rapi","Login dan keamanan dasar","Data yang selalu tersinkron"]],
["Antarmuka dan animasi","Membuat halaman yang hidup, interaktif, dan tetap ringan.",["CSS","GSAP","Matter.js","Canvas"],["Animasi saat di-scroll","Elemen yang bisa diseret","Transisi halus antarhalaman","Tetap lancar di HP"]],
["Hosting dan deploy","Menerbitkan website supaya cepat dan mudah diperbarui.",["Git","Docker","Vercel","CI/CD"],["Alur kerja dengan Git","Deploy otomatis","Domain dan HTTPS","Pemantauan sederhana"]],
["Jaringan dan sistem","Memahami infrastruktur di balik website.",["Linux","Jaringan","Server"],["Konfigurasi server dasar","Pengaturan jaringan","Keamanan sistem","Pemecahan masalah"]]];
var cl=document.getElementById("cl"),pn=document.getElementById("pn");
function setC(i){var c=CP[i];
  Array.prototype.forEach.call(cl.children,function(b,j){b.classList.toggle("on",j===i)});
  document.getElementById("pnn").textContent="0"+(i+1);document.getElementById("pt").textContent=c[0];document.getElementById("pd").textContent=c[1];
  document.getElementById("pg").innerHTML=c[2].map(function(t){return"<span>"+t+"</span>"}).join("");
  document.getElementById("pu").innerHTML=c[3].map(function(t){return"<li>"+t+"</li>"}).join("");
  pn.classList.remove("f");void pn.offsetWidth;pn.classList.add("f");
}
CP.forEach(function(c,i){var b=document.createElement("button");b.className="cp";b.innerHTML="<em>0"+(i+1)+"</em><span>"+c[0]+"</span>";
  b.onmouseenter=b.onclick=b.onfocus=function(){setC(i)};cl.appendChild(b)});
setC(0);

/* Karya: geser dengan mouse */
var rl=document.getElementById("rl"),dn=false,sx=0,sl=0,mv=0;
rl.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse")return;dn=true;mv=0;sx=e.clientX;sl=rl.scrollLeft});
addEventListener("pointerup",function(){dn=false});
rl.addEventListener("pointermove",function(e){if(dn){mv=Math.max(mv,Math.abs(e.clientX-sx));rl.scrollLeft=sl-(e.clientX-sx)}});

/* Kontak */
document.getElementById("fm").onsubmit=function(e){e.preventDefault();var f=e.target;
  location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Pesan dari "+f.nama.value)+"&body="+encodeURIComponent(f.pesan.value+"\n\n"+f.email.value)};

document.getElementById("em").textContent=EMAIL;
document.getElementById("cp").onclick=function(){var b=this;
  function ok(){b.textContent="TERSALIN";setTimeout(function(){b.textContent="SALIN"},1500)}
  function fb(){var t=document.createElement("textarea");t.value=EMAIL;document.body.appendChild(t);t.select();try{document.execCommand("copy")}catch(e){}t.remove();ok()}
  if(navigator.clipboard)navigator.clipboard.writeText(EMAIL).then(ok,fb);else fb()};

/* Teks berjalan: makin miring saat scroll cepat */
var mt=document.getElementById("mt");mt.innerHTML=new Array(9).join("<span>WEB_DEVELOPER ✦</span>");
var mx=0,ls=scrollY,vl=0;
(function m(){var d=scrollY-ls;ls=scrollY;vl=vl*.9+d*.1;var w=mt.firstChild.offsetWidth||400;
  mx-=(calm?.3:1.2)+Math.abs(vl)*.5;if(mx<-w)mx+=w;
  mt.style.transform="translateX("+mx+"px) skewX("+(calm?0:Math.max(-10,Math.min(10,-vl*.6)))+"deg)";requestAnimationFrame(m)})();


/* Proyek: data, kartu, dan halaman detail */
var PJ=[
["Proyek satu","Ringkasan satu kalimat tentang proyek ini.","Klien atau konteks","Peran Anda","2026",["React","Node.js","MySQL"],"Tulis gambaran proyek di sini: masalah yang dipecahkan, cara Anda membangunnya, dan hasilnya.","#1c3a6b,#0f1a2e"],
["Proyek dua","Ringkasan satu kalimat tentang proyek ini.","Klien atau konteks","Peran Anda","2026",["HTML","CSS","JavaScript"],"Tulis gambaran proyek di sini: masalah yang dipecahkan, cara Anda membangunnya, dan hasilnya.","#2b2a63,#12122b"],
["Proyek tiga","Ringkasan satu kalimat tentang proyek ini.","Klien atau konteks","Peran Anda","2025",["PHP","Laravel","MySQL"],"Tulis gambaran proyek di sini: masalah yang dipecahkan, cara Anda membangunnya, dan hasilnya.","#0f4a5c,#0b1e28"],
["Proyek empat","Ringkasan satu kalimat tentang proyek ini.","Klien atau konteks","Peran Anda","2025",["Next.js","Tailwind","PostgreSQL"],"Tulis gambaran proyek di sini: masalah yang dipecahkan, cara Anda membangunnya, dan hasilnya.","#3a2d6b,#17122e"],
["Proyek lima","Ringkasan satu kalimat tentang proyek ini.","Klien atau konteks","Peran Anda","2024",["Git","Docker","Node.js"],"Tulis gambaran proyek di sini: masalah yang dipecahkan, cara Anda membangunnya, dan hasilnya.","#124a7a,#0b2036"]];
rl.innerHTML=PJ.map(function(p,i){return'<a class="pj" href="#proyek-'+(i+1)+'"><div class="pc" style="background:linear-gradient(160deg,'+p[7]+')"><i></i><span>Tangkapan layar proyek</span></div><h3>'+p[0]+"</h3><p>"+p[5].join(", ")+"</p></a>"}).join("");
rl.addEventListener("click",function(e){if(mv>6)e.preventDefault()},true);
function $(id){return document.getElementById(id)}
function route(){
  var m=location.hash.match(/^#proyek-(\d+)$/),d=$("dt"),home=document.querySelectorAll(".hero,main,.sec:not(#dt),.mq");
  if(m&&PJ[m[1]-1]){
    var i=m[1]-1,p=PJ[i],k=PJ.length,pr=(i+k-1)%k,nx=(i+1)%k;
    home.forEach(function(e){e.hidden=true});d.hidden=false;
    $("dtt").textContent=p[0];$("dts").textContent=p[1];$("dc").textContent=p[2];$("dr").textContent=p[3];$("dy").textContent=p[4];$("dd").textContent=p[6];
    $("shot").style.background="linear-gradient(160deg,"+p[7]+")";
    $("dg").innerHTML=p[5].map(function(t){return"<span>"+t+"</span>"}).join("");
    $("pv").href="#proyek-"+(pr+1);$("pv").innerHTML="<small>← Proyek sebelumnya</small><b>"+PJ[pr][0]+"</b>";
    $("nx").href="#proyek-"+(nx+1);$("nx").innerHTML="<small>Proyek berikutnya →</small><b>"+PJ[nx][0]+"</b>";
    document.title=p[0]+" | "+NAME;scrollTo({top:0,behavior:"instant"});
  }else{
    var was=!d.hidden;d.hidden=true;home.forEach(function(e){e.hidden=false});document.title=NAME;
    if(was){var t=$(location.hash.slice(1));if(t)t.scrollIntoView();else scrollTo({top:0,behavior:"instant"})}
  }
}
addEventListener("hashchange",route);route();

/* Muncul saat di-scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".ttl,#rl,.cl,.pn,.fm,.sc").forEach(function(e){e.classList.add("rv");io.observe(e)});
