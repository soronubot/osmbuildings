var OSMBuildings=function(){function La(a,c){var b=a[0]-c[0],e=a[1]-c[1];return b*b+e*e}function nb(a){for(var c=0,b=0,e=0,d=a.length-3;e<d;e+=2)c+=a[e],b+=a[e+1];a=(a.length-2)/2;return[c/a<<0,b/a<<0]}function ra(a,c){var b,e,d,f,h=0,g,k;g=0;for(k=a.length-3;g<k;g+=2)b=a[g],e=a[g+1],d=a[g+2],f=a[g+3],h+=b*f-d*e;if((0<h/2?"CW":"CCW")===c)return a;b=[];for(e=a.length-2;0<=e;e-=2)b.push(a[e],a[e+1]);return b}function sa(a,c){var b={};a/=U;c/=U;b[ob]=0>=c?90:1<=c?-90:pb*(2*qb(rb(V*(1-2*c)))-Ma);b[sb]=
360*(1===a?1:(a%1+1)%1)-180;return b}function tb(a,c,b){function e(a){if("XDomainRequest"in window&&a!==d.readyState&&(d.readyState=a,d.onreadystatechange))d.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return c[b]||a});var d="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;d.onerror=function(){d.status=500;d.statusText="Error";e(4)};d.ontimeout=function(){d.status=408;d.statusText="Timeout";e(4)};d.onprogress=function(){e(3)};d.onload=function(){d.status=200;
d.statusText="Ok";e(4)};d.onreadystatechange=function(){4===d.readyState&&d.status&&!(200>d.status||299<d.status)&&b&&d.responseText&&b(JSON.parse(d.responseText))};e(0);d.open("GET",a);e(1);d.send(null);e(2);return d}function N(){W.render();ca.render();Na()}function Na(){q.clearRect(0,0,z,u);if(!(G<da||X)){var a,c,b,e,d,f,h,g=ca.MAX_HEIGHT,k=[O+w,P+x],n=w,j=w+z,l=x,r=x+u,p,I,t,v;s.renderItems.sort(function(a,b){return La(b.center,k)/b.height-La(a.center,k)/a.height});a=0;for(c=s.renderItems.length;a<
c;a++)if(d=s.renderItems[a],!(d.height<=g)){f=!1;p=d.footprint;b=0;for(e=p.length-1;b<e;b+=2)f||(f=p[b]>n&&p[b]<j&&p[b+1]>l&&p[b+1]<r);if(f){b=1>d.scale?d.height*d.scale:d.height;f=Q/(Q-b);h=0;d.minHeight&&(b=1>d.scale?d.minHeight*d.scale:d.minHeight,h=Q/(Q-b));t=d.wallColor||ta;v=d.altColor||ea;p=Oa(p,f,h,t,v);I=[];if(d.holes){b=0;for(e=d.holes.length;b<e;b++)I[b]=Oa(d.holes[b],f,h,t,v)}q.fillStyle=d.roofColor||Y;q.strokeStyle=v;Pa(p,!0,I)}}}}function Oa(a,c,b,e,d){for(var f={x:0,y:0},h={x:0,y:0},
g,k,n=[],j=0,l=a.length-3;j<l;j+=2)f.x=a[j]-w,f.y=a[j+1]-x,h.x=a[j+2]-w,h.y=a[j+3]-x,g=fa(f.x,f.y,c),k=fa(h.x,h.y,c),b&&(f=fa(f.x,f.y,b),h=fa(h.x,h.y,b)),(h.x-f.x)*(g.y-f.y)>(g.x-f.x)*(h.y-f.y)&&(q.fillStyle=f.x<h.x&&f.y<h.y||f.x>h.x&&f.y>h.y?d:e,Pa([h.x,h.y,f.x,f.y,g.x,g.y,k.x,k.y])),n[j]=g.x,n[j+1]=g.y;return n}function Pa(a,c,b){if(a.length){var e,d,f,h;q.beginPath();q.moveTo(a[0],a[1]);e=2;for(d=a.length;e<d;e+=2)q.lineTo(a[e],a[e+1]);if(b){e=0;for(d=b.length;e<d;e++){a=b[e];q.moveTo(a[0],a[1]);
f=2;for(h=a.length;f<h;f+=2)q.lineTo(a[f],a[f+1])}}q.closePath();c&&q.stroke();q.fill()}}function fa(a,c,b){return{x:(a-O)*b+O<<0,y:(c-P)*b+P<<0}}function Qa(a,c){z=a;u=c;Z=z/2<<0;Ra=u/2<<0;O=Z;P=u;Q=z/(1.5/(window.devicePixelRatio||1))/ua(45)<<0;va.setSize(z,u);wa=Q-50}function Sa(a){G=a;U=ub<<G;a=G;var c=da,b=xa;a=ga(ya(a,c),b);A=1-ga(ya(0+0.3*((a-c)/(b-c)),0),0.3);ta=H.setAlpha(A)+"";ea=ha.setAlpha(A)+"";Y=R.setAlpha(A)+""}var Ta=Ta||Array,Ua=Ua||Array,B=Math,rb=B.exp,vb=B.log,wb=B.sin,xb=B.cos,
ua=B.tan,qb=B.atan,ga=B.min,ya=B.max,Va=B.ceil,Wa=B.floor,Xa=document,J,Ya=function(a){var c,b,e;if(0===a.s)c=b=e=a.l;else{e=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var d=2*a.l-e;a.h/=360;c=za(d,e,a.h+1/3);b=za(d,e,a.h);e=za(d,e,a.h-1/3)}return new E(255*c<<0,255*b<<0,255*e<<0,a.a)},za=function(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},E=function(a,c,b,e){this.r=a;this.g=c;this.b=b;this.a=4>arguments.length?1:e},Aa=E.prototype;Aa.toString=function(){return"rgba("+
[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};Aa.setLightness=function(a){var c=E.toHSLA(this);c.l*=a;c.l=Math.min(1,Math.max(0,c.l));return Ya(c)};Aa.setAlpha=function(a){return new E(this.r,this.g,this.b,this.a*a)};E.parse=function(a){var c;a+="";if(~a.indexOf("#")&&(c=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new E(parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),c[4]?parseInt(c[4],16)/255:1);if(c=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new E(parseInt(c[1],
10),parseInt(c[2],10),parseInt(c[3],10),c[4]?parseFloat(c[5]):1);if(c=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return Ya({h:parseInt(c[1],10),s:parseFloat(c[2]),l:parseFloat(c[3]),a:c[4]?parseFloat(c[5]):1})};E.toHSLA=function(a){var c=a.r/255,b=a.g/255,e=a.b/255,d=Math.max(c,b,e),f=Math.min(c,b,e),h,g=(d+f)/2,k;if(d===f)h=f=0;else{k=d-f;f=0.5<g?k/(2-d-f):k/(d+f);switch(d){case c:h=(b-e)/k+(b<e?6:0);break;case b:h=(e-c)/k+2;break;case e:h=(c-b)/k+4}h/=6}return{h:360*h,s:f,
l:g,a:a.a}};J=E;var Za,S=Math,Ba=S.PI,y=S.sin,F=S.cos,$a=S.tan,ab=S.asin,bb=S.atan2,K=Ba/180,ia=23.4397*K;Za=function(a,c,b){b=K*-b;c*=K;a=a.valueOf()/864E5-0.5+2440588-2451545;var e=K*(357.5291+0.98560028*a),d=K*(1.9148*y(e)+0.02*y(2*e)+3E-4*y(3*e)),d=e+d+102.9372*K+Ba,e=ab(y(0)*F(ia)+F(0)*y(ia)*y(d)),d=bb(y(d)*F(ia)-$a(0)*y(ia),F(d));b=K*(280.16+360.9856235*a)-b-d;return{altitude:ab(y(c)*y(e)+F(c)*F(e)*F(b)),azimuth:bb(y(b),F(b)*y(c)-$a(e)*F(c))-Ba/2}};var cb,ja=function(a){var c=parseFloat(a);
return~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*yb<<0:~a.indexOf("ft")?c*db<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*db+a[1]*zb<<0):c<<0},$=function(a){a=a.toLowerCase();return"#"===a[0]?a:Ab[Bb[a]||a]||null},eb=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},Da=function(a){if(a){for(var c=[],b,e=0,d=a.length;e<d;e++)b=Ca[a[e]],c.push(b[0],b[1]);c[c.length-2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},Ea=function(a){var c=
0,b=0;a.height&&(c=ja(a.height));!c&&a["building:height"]&&(c=ja(a["building:height"]));!c&&a.levels&&(c=a.levels*ka<<0);!c&&a["building:levels"]&&(c=a["building:levels"]*ka<<0);a.min_height&&(b=ja(a.min_height));!b&&a["building:min_height"]&&(b=ja(a["building:min_height"]));!b&&a.min_level&&(b=a.min_level*ka<<0);!b&&a["building:min_level"]&&(b=a["building:min_level"]*ka<<0);var e,d;a["building:material"]&&(e=$(a["building:material"]));a["building:facade:material"]&&(e=$(a["building:facade:material"]));
a["building:cladding"]&&(e=$(a["building:cladding"]));a["building:color"]&&(e=a["building:color"]);a["building:colour"]&&(e=a["building:colour"]);a["roof:material"]&&(d=$(a["roof:material"]));a["building:roof:material"]&&(d=$(a["building:roof:material"]));a["roof:color"]&&(d=a["roof:color"]);a["roof:colour"]&&(d=a["roof:colour"]);a["building:roof:color"]&&(d=a["building:roof:color"]);a["building:roof:colour"]&&(d=a["building:roof:colour"]);return{height:c,minHeight:b,wallColor:e,roofColor:d}},fb=
function(a,c,b,e){a={id:a,footprint:ra(b,"CW"),holes:e};c.height&&(a.height=c.height);c.minHeight&&(a.minHeight=c.minHeight);c.wallColor&&(a.wallColor=c.wallColor);c.roofColor&&(a.roofColor=c.roofColor);e&&(a.holes=e);Fa.push(a)},yb=0.9144,db=0.3048,zb=0.0254,ka=3,Bb={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",
sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},Ab={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Ca,aa,
Fa;cb=function(a){Ca={};aa={};Fa=[];for(var c,b=0,e=a.length;b<e;b++)switch(c=a[b],c.type){case "node":Ca[c.id]=[c.lat,c.lon];break;case "way":var d=void 0,f=void 0;if(eb(c))d=Ea(c.tags),(f=Da(c.nodes))&&fb(c.id,d,f);else if(d=c.tags,!d||!d.highway&&!d.railway&&!d.landuse)aa[c.id]=c;break;case "relation":var f=c,h=void 0,g=void 0;c=[];var k=void 0,n=void 0,d=void 0;if(eb(f)&&("multipolygon"===f.tags.type||"building"===f.tags.type)){for(var h=f.members,n=g=void 0,k=[],j=0,l=h.length;j<l;j++)g=h[j],
"way"===g.type&&aa[g.ref]&&(!g.role||"outer"===g.role?n=aa[g.ref]:("inner"===g.role||"enclave"===g.role)&&k.push(aa[g.ref]));h=n&&n.tags?{outer:n,inner:k}:void 0;if(h&&(j=Ea(f.tags),g=h.outer))if(k=Ea(g.tags),n=Da(g.nodes)){f=k;k=j;j=void 0;for(j in k)f[j]||(f[j]=k[j]);k=f;f=0;for(j=h.inner.length;f<j;f++)(d=Da(h.inner[f].nodes))&&c.push(ra(d,"CCW"));fb(g.id,k,n,c.length?c:null)}}}return Fa};var V=Math.PI,Ma=V/2,Cb=V/4,pb=180/V,ub=256,ob="latitude",sb="longitude",z=0,u=0,Z=0,Ra=0,w=0,x=0,G,U,q,H=
new J(200,190,180),ha=H.setLightness(0.8),R=H.setLightness(1.2),ta=H+"",ea=ha+"",Y=R+"",la,A=1,da=15,xa=20,wa,O,P,Q,X,Ga=new Date,T={},Ha={add:function(a,c){T[a]={data:c,time:Date.now()}},get:function(a){return T[a]&&T[a].data},purge:function(){Ga.setMinutes(Ga.getMinutes()-5);for(var a in T)T[a].time<Ga&&delete T[a]}},s,Db=function(a){return function(c){gb(c,a)}},gb=function(a,c){if(a){var b;if("FeatureCollection"===a.type){b=a.features;var e,d,f,h,g,k,n=[],j,l,r,p,I,t,v,m;e=0;for(d=b.length;e<d;e++)if(j=
b[e],"Feature"===j.type&&(l=j.geometry,j=j.properties,"LineString"===l.type&&(t=r.length-1,r[0][0]===r[t][0]&&r[0][1]===r[t][1]&&(r=l.coordinates)),"Polygon"===l.type&&(r=l.coordinates),"MultiPolygon"===l.type&&(r=l.coordinates[0]),r)){if(j.color||j.wallColor)p=j.color||j.wallColor;j.roofColor&&(I=j.roofColor);l=r[0];m=[];v=j.height;f=t=0;for(h=l.length;f<h;f++)m.push(l[f][1],l[f][0]),t+=v||l[f][2]||0;v=[];f=1;for(h=r.length;f<h;f++){l=r[e];v[f-1]=[];g=0;for(k=l.length;g<k;g++)v[f-1].push(l[g][1],
l[g][0])}f={id:j.id||m[0]+","+m[1],footprint:ra(m,"CW")};t&&(f.height=t/l.length<<0);j.minHeight&&(f.minHeight=j.minHeight);p&&(f.wallColor=p);I&&(f.roofColor=I);v.length&&(f.holes=v);n.push(f)}b=n}else a.osm3s&&(b=cb(a.elements));c&&Ha.add(c,b);hb(b,!0)}},ib=function(a){for(var c,b,e=new Ta(a.length),d=0,f=a.length-1;d<f;d+=2)c=a[d+1],b=ga(1,ya(0,0.5-vb(ua(Cb+Ma*a[d]/180))/V/2)),c=(c/360+0.5)*U<<0,b=b*U<<0,e[d]=c,e[d+1]=b;a=e;e=a.length/2;d=new Ua(e);f=0;c=e-1;var h,g,k,n=[],j=[],l=[];for(d[f]=d[c]=
1;c;){h=0;for(b=f+1;b<c;b++){g=a[2*b];var r=a[2*b+1],p=a[2*f],m=a[2*f+1],t=a[2*c],v=a[2*c+1],s=t-p,q=v-m,u=void 0;if(0!==s||0!==q)u=((g-p)*s+(r-m)*q)/(s*s+q*q),1<u?(p=t,m=v):0<u&&(p+=s*u,m+=q*u);s=g-p;q=r-m;g=s*s+q*q;g>h&&(k=b,h=g)}2<h&&(d[k]=1,n.push(f),j.push(k),n.push(k),j.push(c));f=n.pop();c=j.pop()}for(b=0;b<e;b++)d[b]&&l.push(a[2*b],a[2*b+1]);e=l;if(!(8>e.length))return e},hb=function(a,c){var b,e,d,f,h=[],g,k,n,j,l,m,p,q,t=xa-G;b=0;for(e=a.length;b<e;b++)if(g=a[b],k=3*(g.height||15)>>t)if(n=
3*g.minHeight>>t,!(n>wa)&&(j=ib(g.footprint))){p=[];if(g.holes){d=0;for(f=g.holes.length;d<f;d++)(q=ib(g.holes[d]))&&p.push(q)}f=d=null;if(g.wallColor&&(l=J.parse(g.wallColor)))d=l.setAlpha(A),f=""+d.setLightness(0.8),d=""+d;m=null;if(g.roofColor&&(l=J.parse(g.roofColor)))m=""+l.setAlpha(A);h.push({id:g.id,footprint:j,height:ga(k,wa),minHeight:n,wallColor:d,altColor:f,roofColor:m,center:nb(j),holes:p.length?p:null})}e=0;for(g=h.length;e<g;e++)b=h[e],ma[b.id]||(b.scale=c?0:1,ba.renderItems.push(h[e]),
ma[b.id]=1);la||(la=setInterval(function(){for(var a,b=!1,c=0,d=s.renderItems.length;c<d;c++)a=s.renderItems[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);N();b||(clearInterval(la),la=null)},33))},Ia,ma={},ba={renderItems:[],load:function(a){Ia=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";ba.update()},update:function(){if(Ia&&
!(15>G)){var a=sa(w,x),c=sa(w+z,x+u),b=0.0075*Va(a.latitude/0.0075),e=0.015*Va(c.longitude/0.015),c=0.0075*Wa(c.latitude/0.0075),a=0.015*Wa(a.longitude/0.015);Ha.purge();ba.renderItems=[];ma={};for(var d,f,h;c<=b;c+=0.0075)for(d=a;d<=e;d+=0.015)h=c+","+d,(f=Ha.get(h))?hb(f):tb(Ia,{n:(1E4*(c+0.0075)<<0)/1E4,e:(1E4*(d+0.015)<<0)/1E4,s:(1E4*c<<0)/1E4,w:(1E4*d<<0)/1E4},Db(h))}},set:function(a){ba.renderItems=[];ma={};gb(a)}};s=ba;var W,oa=function(a,c,b){return{x:a+na.x*b,y:c+na.y*b}},m,jb=!0,kb=new J(0,
0,0),lb=null,na={x:0,y:0},Ja={setContext:function(a){m=a;Ja.setDate((new Date).setHours(10))},enable:function(a){jb=!!a},render:function(){var a,c,b,e;m.clearRect(0,0,z,u);if(jb&&!(G<da||X))if(a=sa(w+Z,x+Ra),a=Za(lb,a.latitude,a.longitude),!(0>=a.altitude)){c=1/ua(a.altitude);b=0.4/c;na.x=xb(a.azimuth)*c;na.y=wb(a.azimuth)*c;kb.a=b;e=kb+"";var d,f,h,g,k,n,j,l,r,p,q,t,v=[];m.beginPath();a=0;for(c=s.renderItems.length;a<c;a++){f=s.renderItems[a];l=!1;h=f.footprint;j=[];b=0;for(d=h.length-1;b<d;b+=2)j[b]=
k=h[b]-w,j[b+1]=n=h[b+1]-x,l||(l=0<k&&k<z&&0<n&&n<u);if(l){h=1>f.scale?f.height*f.scale:f.height;f.minHeight&&(g=1>f.scale?f.minHeight*f.scale:f.minHeight);k=null;b=0;for(d=j.length-3;b<d;b+=2)n=j[b],r=j[b+1],l=j[b+2],p=j[b+3],q=oa(n,r,h),t=oa(l,p,h),f.minHeight&&(r=oa(n,r,g),p=oa(l,p,g),n=r.x,r=r.y,l=p.x,p=p.y),(l-n)*(q.y-r)>(q.x-n)*(p-r)?(1===k&&m.lineTo(n,r),k=0,b||m.moveTo(n,r),m.lineTo(l,p)):(0===k&&m.lineTo(q.x,q.y),k=1,b||m.moveTo(q.x,q.y),m.lineTo(t.x,t.y));m.closePath();v.push(j)}}m.fillStyle=
e;m.fill();m.globalCompositeOperation="destination-out";m.beginPath();a=0;for(c=v.length;a<c;a++){g=v[a];m.moveTo(g[0],g[1]);b=2;for(d=g.length;b<d;b+=2)m.lineTo(g[b],g[b+1]);m.lineTo(g[0],g[1]);m.closePath()}m.fillStyle="#00ff00";m.fill();m.globalCompositeOperation="source-over"}},setDate:function(a){lb=a;Ja.render()}};W=Ja;var ca,C,mb={MAX_HEIGHT:8,setContext:function(a){C=a},render:function(){C.clearRect(0,0,z,u);if(!(G<da||X)){var a,c,b,e,d,f,h,g,k;C.beginPath();a=0;for(c=s.renderItems.length;a<
c;a++)if(b=s.renderItems[a],!(b.height>mb.MAX_HEIGHT)){k=!1;d=b.footprint;g=[];b=0;for(e=d.length-1;b<e;b+=2)g[b]=f=d[b]-w,g[b+1]=h=d[b+1]-x,k||(k=0<f&&f<z&&0<h&&h<u);if(k){b=0;for(e=g.length-3;b<e;b+=2)k=g[b],d=g[b+1],b?C.lineTo(k,d):C.moveTo(k,d);C.closePath()}}C.fillStyle=Y;C.strokeStyle=ea;C.stroke();C.fill()}}};ca=mb;var va,Ka=function(){var a=Xa.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=
0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;pa.push(a);M.appendChild(a);return c},M=Xa.createElement("DIV");M.style.pointerEvents="none";M.style.position="absolute";M.style.left=0;M.style.top=0;var pa=[];W.setContext(Ka());ca.setContext(Ka());q=Ka();va={appendTo:function(a){a.appendChild(M);return M},setSize:function(a,c){for(var b=0,e=pa.length;b<e;b++)pa[b].width=a,pa[b].height=c}};var qa=
function(a){this.lastY=this.lastX=0;a.addLayer(this)},D=qa.prototype;D.onMove=function(){var a=L.DomUtil.getPosition(this.map._mapPane),c=this.lastY-a.y;O=Z+(this.lastX-a.x);P=u+c;Na()};D.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=L.DomUtil.getPosition(this.map._mapPane),c=this.map.getPixelOrigin();this.lastX=a.x;this.lastY=a.y;this.container.style.left=-a.x+"px";this.container.style.top=-a.y+"px";O=Z+0;P=u+0;Qa(this.map._size.x,this.map._size.y);var b=c.y-a.y;w=c.x-a.x;
x=b;N();s.update()}};D.onZoomStart=function(){X=!0;N()};D.onZoomEnd=function(){var a=L.DomUtil.getPosition(this.map._mapPane),c=this.map.getPixelOrigin(),b=c.y-a.y;w=c.x-a.x;x=b;a=this.map._zoom;X=!1;Sa(a);s.update();N();this.skipMoveEnd=!0};D.onAdd=function(a){this.map=a;a=this.map._panes.overlayPane;this.container=va.appendTo(a);a.appendChild(this.container);xa=this.map._layersMaxZoom;a=L.DomUtil.getPosition(this.map._mapPane);var c=this.map.getPixelOrigin();Qa(this.map._size.x,this.map._size.y);
var b=c.y-a.y;w=c.x-a.x;x=b;Sa(this.map._zoom);this.container.style.left=-a.x+"px";this.container.style.top=-a.y+"px";this.map.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.map.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');N()};D.onRemove=function(a){a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,
zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.container.parentNode.removeChild(this.container)};D.setStyle=function(a){a=a||{};if(a.color||a.wallColor)H=J.parse(a.color||a.wallColor),ta=H.setAlpha(A)+"",ha=H.setLightness(0.8),ea=ha.setAlpha(A)+"",R=H.setLightness(1.2),Y=R.setAlpha(A)+"";a.roofColor&&(R=J.parse(a.roofColor),Y=R.setAlpha(A)+"");void 0!==a.shadows&&W.enable(a.shadows);N();return this};D.setDate=function(a){W.setDate(a);return this};D.loadData=function(a){s.load(a);return this};
D.setData=function(a){s.set(a);return this};qa.VERSION="0.1.8a";qa.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return qa}();
