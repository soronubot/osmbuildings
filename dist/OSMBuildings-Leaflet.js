(function(ca){function S(b,a){var c=b.x-a.x,d=b.y-a.y;return c*c+d*d}function va(b){var a=b.length;if(16>a)return!1;var c,d=Infinity,f=-Infinity,g=Infinity,k=-Infinity;for(c=0;c<a-1;c+=2)d=Math.min(d,b[c]),f=Math.max(f,b[c]),g=Math.min(g,b[c+1]),k=Math.max(k,b[c+1]);c=f-d;k-=g;f=c/k;if(0.85>f||1.15<f)return!1;d={x:d+c/2,y:g+k/2};c=(c+k)/4;g=c*c;for(c=0;c<a-1;c+=2)if(k=S({x:b[c],y:b[c+1]},d),0.8>k/g||1.2<k/g)return!1;return!0}function ja(b,a){var c={};b/=T;a/=T;var d=wa,f;f=0>=a?90:1<=a?-90:(2*xa(ya(E*
(1-2*a)))-J)/E*180;c[d]=f;c[za]=360*(1===b?1:(b%1+1)%1)-180;return c}function da(b,a){var c=U(1,K(0,0.5-Aa(ka(Ba+J*b/180))/E/2));return{x:(a/360+0.5)*T<<0,y:c*T<<0}}function V(b){for(var a=F+q,c=B+n,d=0,f=b.length-3;d<f;d+=2)if(b[d]>q&&b[d]<a&&b[d+1]>n&&b[d+1]<c)return!0;return!1}function Ca(){$||($=setInterval(function(){for(var b=C.items,a=!1,c=0,d=b.length;c<d;c++)1>b[c].scale&&(b[c].scale+=0.1,1<b[c].scale&&(b[c].scale=1),a=!0);A.render();a||(clearInterval($),$=null)},33))}function ea(b){M=W+
b.x;N=B+b.y;A.render(!0)}function la(b){F=b.width;B=b.height;W=F/2<<0;fa=B/2<<0;M=W;N=B;A.setSize(F,B);ga=s-50}function ma(b){x=b;T=Da<<x;b=ja(q+W,n+fa);var a=da(b.latitude,0);na=da(b.latitude,1).x-a.x;D=oa(0.95,x-G);ha=""+H.alpha(D);aa=""+ba.alpha(D);X=""+O.alpha(D)}var v=Math,ya=v.exp,Aa=v.log,Ea=v.sin,Fa=v.cos,ka=v.tan,xa=v.atan,P=v.atan2,U=v.min,K=v.max,pa=v.sqrt,qa=v.ceil,oa=v.pow,ra=ra||Array,sa=sa||Array,v=/iP(ad|hone|od)/g.test(navigator.userAgent),p=!!~navigator.userAgent.indexOf("Trident"),
Ga=!ca.requestAnimationFrame||v||p?function(b){b()}:ca.requestAnimationFrame,I=function(b){function a(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var c={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00"},d=function(a,b,
c,d){this.H=a;this.S=b;this.L=c;this.A=d};d.parse=function(a){var b=0,d=0,e=0,h=1,l;a=(""+a).toLowerCase();a=c[a]||a;if(l=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(l[1],16),d=parseInt(l[2],16),e=parseInt(l[3],16);else if(l=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(l[1],10),d=parseInt(l[2],10),e=parseInt(l[3],10),h=l[4]?parseFloat(l[5]):1;else return;return this.fromRGBA(b,d,e,h)};d.fromRGBA=function(a,b,c,e){"object"===typeof a?(b=a.g/255,c=a.b/255,e=a.a,a=a.r/255):(a/=
255,b/=255,c/=255);var h=Math.max(a,b,c),l=Math.min(a,b,c),m,u=(h+l)/2,y=h-l;if(y){l=0.5<u?y/(2-h-l):y/(h+l);switch(h){case a:m=(b-c)/y+(b<c?6:0);break;case b:m=(c-a)/y+2;break;case c:m=(a-b)/y+4}m*=60}else m=l=0;return new d(m,l,u,e)};d.prototype={toRGBA:function(){var b=Math.min(360,Math.max(0,this.H)),c=Math.min(1,Math.max(0,this.S)),d=Math.min(1,Math.max(0,this.L)),e=Math.min(1,Math.max(0,this.A)),h;if(0===c)b=h=c=d;else{var l=0.5>d?d*(1+c):d+c-d*c,d=2*d-l,b=b/360,c=a(d,l,b+1/3);h=a(d,l,b);b=
a(d,l,b-1/3)}return{r:Math.round(255*c),g:Math.round(255*h),b:Math.round(255*b),a:e}},toString:function(){var a=this.toRGBA();return 1===a.a?"#"+(16777216+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1,7):"rgba("+[a.r,a.g,a.b,a.a.toFixed(2)].join()+")"},hue:function(a){return new d(this.H*a,this.S,this.L,this.A)},saturation:function(a){return new d(this.H,this.S*a,this.L,this.A)},lightness:function(a){return new d(this.H,this.S,this.L*a,this.A)},alpha:function(a){return new d(this.H,this.S,this.L,this.A*
a)}};return d}(this),Ha=function(){var b=Math,a=b.PI,c=b.sin,d=b.cos,f=b.tan,g=b.asin,k=b.atan2,e=a/180,h=23.4397*e;return function(b,m,u){u=e*-u;m*=e;b=b.valueOf()/864E5-0.5+2440588-2451545;var y=e*(357.5291+0.98560028*b),w;w=e*(1.9148*c(y)+0.02*c(2*y)+3E-4*c(3*y));w=y+w+102.9372*e+a;y=g(c(0)*d(h)+d(0)*c(h)*c(w));w=k(c(w)*d(h)-f(0)*c(h),d(w));b=e*(280.16+360.9856235*b)-u-w;u=g(c(m)*c(y)+d(m)*d(y)*d(b));m=k(c(b),d(b)*c(m)-f(y)*d(m));return{altitude:u,azimuth:m-a/2}}}(),Ja=function(){function b(a){a=
a.toLowerCase();return"#"===a[0]?a:c[d[a]||a]||null}function a(b){var c,d,e=[],h;switch(b.type){case "GeometryCollection":e=[];c=0;for(d=b.geometries.length;c<d;c++)(h=a(b.geometries[c]))&&e.push.apply(e,h);return e;case "MultiPolygon":e=[];c=0;for(d=b.coordinates.length;c<d;c++)(h=a({type:"Polygon",coordinates:b.coordinates[c]}))&&e.push.apply(e,h);return e;case "Polygon":b=b.coordinates;break;default:return[]}var l,m=[],u=[];l=b[0];c=0;for(d=l.length;c<d;c++)m.push(l[c][1],l[c][0]);c=0;for(d=b.length-
1;c<d;c++)for(l=b[c+1],u[c]=[],e=0,h=l.length;e<h;e++)u[c].push(l[e][1],l[e][0]);return[{outer:m,inner:u.length?u:null}]}var c={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},d={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",
glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};return{read:function(c){if(!c||"FeatureCollection"!==c.type)return[];c=c.features;var d,k,e,h,l=[],m,u,y,w;d=0;for(k=c.length;d<
k;d++)if(m=c[d],"Feature"===m.type&&!1!==ta(m)){e=m.properties;h={};e=e||{};h.height=e.height||(e.levels?3*e.levels:Ia);h.minHeight=e.minHeight||(e.minLevel?3*e.minLevel:0);if(u=e.material?b(e.material):e.wallColor||e.color)h.wallColor=u;if(u=e.roofMaterial?b(e.roofMaterial):e.roofColor)h.roofColor=u;switch(e.shape){case "cylinder":case "cone":case "dome":case "sphere":h.shape=e.shape;h.isRotational=!0;break;case "pyramid":h.shape=e.shape}switch(e.roofShape){case "cone":case "dome":h.roofShape=e.roofShape;
h.isRotational=!0;break;case "pyramid":h.roofShape=e.roofShape}h.roofShape&&e.roofHeight?(h.roofHeight=e.roofHeight,h.height=K(0,h.height-h.roofHeight)):h.roofHeight=0;y=h;u=a(m.geometry);e=0;for(h=u.length;e<h;e++){w=y;var q={},n=void 0;for(n in w)w.hasOwnProperty(n)&&(q[n]=w[n]);w=q;w.footprint=u[e].outer;if(w.isRotational){for(var q=w,n=w.footprint,s=180,p=-180,t=0,r=n.length;t<r;t+=2)s=U(s,n[t+1]),p=K(p,n[t+1]);q.radius=(p-s)/2}u[e].inner&&(w.holes=u[e].inner);if(m.id||m.properties.id)w.id=m.id||
m.properties.id;m.properties.relationId&&(w.relationId=m.properties.relationId);l.push(w)}}return l}}}(),E=Math.PI,J=E/2,Ba=E/4,Da=256,x,T,G=15,wa="latitude",za="longitude",F=0,B=0,W=0,fa=0,q=0,n=0,H=I.parse("rgba(200, 190, 180)"),ba=H.lightness(0.8),O=H.lightness(1.2),ha=""+H,aa=""+ba,X=""+O,na=0,D=1,ga,Ia=5,M,N,s=450,Q,Ka=function(){function b(a,b){if(f[a])b&&b(f[a]);else{var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4===c.readyState&&c.status&&!(200>c.status||299<c.status)&&b&&c.responseText){var d;
try{d=JSON.parse(c.responseText)}catch(h){}f[a]=d;g.push({url:a,size:c.responseText.length});for(k+=c.responseText.length;k>e;){var n=g.shift();k-=n.size;delete f[n.url]}b(d)}};c.open("GET",a);c.send(null);return c}}function a(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function c(a){a=a||{};d+=a.key||"anonymous";e=a.cacheSize||1048576}var d="http://data.osmbuildings.org/0.2/",f={},g=[],k=0,e=0;c.TILE_SIZE=256;c.ATTRIBUTION='Data Service &copy; <a href="http://bld.gs">BLD.GS</a>';var h=c.prototype;
h.getTile=function(a,c,e,f){return b(d+"/tile/"+e+"/"+a+"/"+c+".json",f)};h.getFeature=function(a,c){return b(d+"/feature/"+a+".json",c)};h.getBBox=function(a,c){var e=d+"/bbox.json?bbox="+[a.n.toFixed(5),a.e.toFixed(5),a.s.toFixed(5),a.w.toFixed(5)].join();return b(e,c)};h.getAllTiles=function(b,d,e,f,g,k){var h=c.TILE_SIZE,n=16<g?h<<g-16:h>>16-g;g=b/n<<0;var q=d/n<<0,s=Math.ceil((b+e)/n),n=Math.ceil((d+f)/n),t,p=[];for(t=q;t<=n;t++)for(q=g;q<=s;q++)p.push({x:q,y:t,z:16});var r={x:b+(e-h)/2,y:d+
(f-h)/2};p.sort(function(b,c){return a(b,r)-a(c,r)});b=0;for(d=p.length;b<d;b++)this.getTile(p[b].x,p[b].y,p[b].z,k);return{abort:function(){for(var a=0;a<p.length;a++)p[a].abort()}}};return c}(),C={loadedItems:{},items:[],getPixelFootprint:function(b){for(var a=new ra(b.length),c,d=0,f=b.length-1;d<f;d+=2)c=da(b[d],b[d+1]),a[d]=c.x,a[d+1]=c.y;b=a;a=b.length/2;c=new sa(a);var d=0,f=a-1,g,k,e,h,l=[],m=[],u=[];for(c[d]=c[f]=1;f;){k=0;for(g=d+1;g<f;g++){e=b[2*g];var n=b[2*g+1],q=b[2*d],p=b[2*d+1],s=
b[2*f],t=b[2*f+1],r=s-q,v=t-p,x=void 0;if(0!==r||0!==v)x=((e-q)*r+(n-p)*v)/(r*r+v*v),1<x?(q=s,p=t):0<x&&(q+=r*x,p+=v*x);r=e-q;v=n-p;e=r*r+v*v;e>k&&(h=g,k=e)}2<k&&(c[h]=1,l.push(d),m.push(h),l.push(h),m.push(f));d=l.pop();f=m.pop()}for(g=0;g<a;g++)c[g]&&u.push(b[2*g],b[2*g+1]);a=u;if(!(8>a.length))return a},resetItems:function(){this.items=[];this.loadedItems={};Y.reset()},addRenderItems:function(b,a){for(var c,d,f,g=Ja.read(b),k=0,e=g.length;k<e;k++)c=g[k],f=c.id||[c.footprint[0],c.footprint[1],c.height,
c.minHeight].join(),!this.loadedItems[f]&&(d=this.scale(c))&&(d.scale=a?0:1,this.items.push(d),this.loadedItems[f]=1);Ca()},scale:function(b){var a={},c=6/oa(2,x-G);b.id&&(a.id=b.id);a.height=U(b.height/c,ga);a.minHeight=isNaN(b.minHeight)?0:b.minHeight/c;if(!(a.minHeight>ga)&&(a.footprint=this.getPixelFootprint(b.footprint),a.footprint)){for(var d=a.footprint,f=Infinity,g=-Infinity,k=Infinity,e=-Infinity,h=0,l=d.length-3;h<l;h+=2)f=U(f,d[h]),g=K(g,d[h]),k=U(k,d[h+1]),e=K(e,d[h+1]);a.center={x:f+
(g-f)/2<<0,y:k+(e-k)/2<<0};b.radius&&(a.radius=b.radius*na);b.shape&&(a.shape=b.shape);b.roofShape&&(a.roofShape=b.roofShape);"cone"!==a.roofShape&&"dome"!==a.roofShape||a.shape||!va(a.footprint)||(a.shape="cylinder");if(b.holes){a.holes=[];for(var m,d=0,f=b.holes.length;d<f;d++)(m=this.getPixelFootprint(b.holes[d]))&&a.holes.push(m)}var n;b.wallColor&&(n=I.parse(b.wallColor))&&(n=n.alpha(D),a.altColor=""+n.lightness(0.8),a.wallColor=""+n);b.roofColor&&(n=I.parse(b.roofColor))&&(a.roofColor=""+n.alpha(D));
b.relationId&&(a.relationId=b.relationId);a.hitColor=Y.idToColor(b.relationId||b.id);a.roofHeight=isNaN(b.roofHeight)?0:b.roofHeight/c;if(!(a.height+a.roofHeight<=a.minHeight))return a}},set:function(b){this.isStatic=!0;this.resetItems();this._staticData=b;this.addRenderItems(this._staticData,!0)},load:function(b){this.provider=b||new Ka({key:"rkc8ywdl"});this.update()},update:function(){function b(a){k.addRenderItems(a)}this.resetItems();if(!(x<G))if(this.isStatic&&this._staticData)this.addRenderItems(this._staticData);
else if(this.provider){var a=16<x?256<<x-16:256>>16-x,c=q/a<<0,d=n/a<<0,f=qa((q+F)/a),a=qa((n+B)/a),g,k=this;for(g=d;g<=a;g++)for(d=c;d<=f;d++)this.provider.getTile(d,g,16,b)}}},Z={draw:function(b,a,c,d,f,g,k,e){var h,l=this._extrude(b,a,d,f,g,k),m=[];if(c)for(a=0,h=c.length;a<h;a++)m[a]=this._extrude(b,c[a],d,f,g,k);b.fillStyle=e;b.beginPath();this._ring(b,l);if(c)for(a=0,h=m.length;a<h;a++)this._ring(b,m[a]);b.closePath();b.stroke();b.fill()},_extrude:function(b,a,c,d,f,g){c=s/(s-c);for(var k=s/
(s-d),e={x:0,y:0},h={x:0,y:0},l,m,u=[],p=0,r=a.length-3;p<r;p+=2)e.x=a[p]-q,e.y=a[p+1]-n,h.x=a[p+2]-q,h.y=a[p+3]-n,l=t.project(e,c),m=t.project(h,c),d&&(e=t.project(e,k),h=t.project(h,k)),(h.x-e.x)*(l.y-e.y)>(l.x-e.x)*(h.y-e.y)&&(b.fillStyle=e.x<h.x&&e.y<h.y||e.x>h.x&&e.y>h.y?g:f,b.beginPath(),this._ring(b,[h.x,h.y,e.x,e.y,l.x,l.y,m.x,m.y]),b.closePath(),b.fill()),u[p]=l.x,u[p+1]=l.y;return u},_ring:function(b,a){b.moveTo(a[0],a[1]);for(var c=2,d=a.length-1;c<d;c+=2)b.lineTo(a[c],a[c+1])},simplified:function(b,
a,c){b.beginPath();this._ringAbs(b,a);if(c){a=0;for(var d=c.length;a<d;a++)this._ringAbs(b,c[a])}b.closePath();b.stroke();b.fill()},_ringAbs:function(b,a){b.moveTo(a[0]-q,a[1]-n);for(var c=2,d=a.length-1;c<d;c+=2)b.lineTo(a[c]-q,a[c+1]-n)},shadow:function(b,a,c,d,f){for(var g=null,k={x:0,y:0},e={x:0,y:0},h,l,m=0,p=a.length-3;m<p;m+=2)k.x=a[m]-q,k.y=a[m+1]-n,e.x=a[m+2]-q,e.y=a[m+3]-n,h=z.project(k,d),l=z.project(e,d),f&&(k=z.project(k,f),e=z.project(e,f)),(e.x-k.x)*(h.y-k.y)>(h.x-k.x)*(e.y-k.y)?(1===
g&&b.lineTo(k.x,k.y),g=0,m||b.moveTo(k.x,k.y),b.lineTo(e.x,e.y)):(0===g&&b.lineTo(h.x,h.y),g=1,m||b.moveTo(h.x,h.y),b.lineTo(l.x,l.y));if(c)for(m=0,p=c.length;m<p;m++)this._ringAbs(b,c[m])},shadowMask:function(b,a,c){this._ringAbs(b,a);if(c){a=0;for(var d=c.length;a<d;a++)this._ringAbs(b,c[a])}},hitArea:function(b,a,c,d,f,g){c=null;var k={x:0,y:0},e={x:0,y:0};d=s/(s-d);var h=s/(s-f),l;b.fillStyle=g;b.beginPath();for(var m=0,p=a.length-3;m<p;m+=2)k.x=a[m]-q,k.y=a[m+1]-n,e.x=a[m+2]-q,e.y=a[m+3]-n,g=
t.project(k,d),l=t.project(e,d),f&&(k=t.project(k,h),e=t.project(e,h)),(e.x-k.x)*(g.y-k.y)>(g.x-k.x)*(e.y-k.y)?(1===c&&b.lineTo(k.x,k.y),c=0,m||b.moveTo(k.x,k.y),b.lineTo(e.x,e.y)):(0===c&&b.lineTo(g.x,g.y),c=1,m||b.moveTo(g.x,g.y),b.lineTo(l.x,l.y));b.closePath();b.fill()}},r={draw:function(b,a,c,d,f,g,k,e,h){a={x:a.x-q,y:a.y-n};var l=s/(s-f),m=s/(s-g);f=t.project(a,l);d*=l;g&&(a=t.project(a,m),c*=m);(l=this._tangents(a,c,f,d))?(g=P(l[0].y1-a.y,l[0].x1-a.x),l=P(l[1].y1-a.y,l[1].x1-a.x)):(g=1.5*E,
l=1.5*E);b.fillStyle=k;b.beginPath();b.arc(f.x,f.y,d,J,g,!0);b.arc(a.x,a.y,c,g,J);b.closePath();b.fill();b.fillStyle=e;b.beginPath();b.arc(f.x,f.y,d,l,J,!0);b.arc(a.x,a.y,c,J,l);b.closePath();b.fill();b.fillStyle=h;this._circle(b,f,d)},simplified:function(b,a,c){this._circle(b,{x:a.x-q,y:a.y-n},c)},shadow:function(b,a,c,d,f,g){a={x:a.x-q,y:a.y-n};f=z.project(a,f);var k;g&&(a=z.project(a,g));var e=this._tangents(a,c,f,d);e?(g=P(e[0].y1-a.y,e[0].x1-a.x),k=P(e[1].y1-a.y,e[1].x1-a.x),b.moveTo(e[1].x2,
e[1].y2),b.arc(f.x,f.y,d,k,g),b.arc(a.x,a.y,c,g,k)):(b.moveTo(a.x+c,a.y),b.arc(a.x,a.y,c,0,2*E))},shadowMask:function(b,a,c){var d=a.x-q;a=a.y-n;b.moveTo(d+c,a);b.arc(d,a,c,0,2*E)},hitArea:function(b,a,c,d,f,g,k){a={x:a.x-q,y:a.y-n};var e=s/(s-f),h=s/(s-g);f=t.project(a,e);d*=e;g&&(a=t.project(a,h),c*=h);g=this._tangents(a,c,f,d);b.fillStyle=k;b.beginPath();g?(k=P(g[0].y1-a.y,g[0].x1-a.x),e=P(g[1].y1-a.y,g[1].x1-a.x),b.moveTo(g[1].x2,g[1].y2),b.arc(f.x,f.y,d,e,k),b.arc(a.x,a.y,c,k,e)):(b.moveTo(a.x+
c,a.y),b.arc(a.x,a.y,c,0,2*E));b.closePath();b.fill()},_circle:function(b,a,c){b.beginPath();b.arc(a.x,a.y,c,0,2*E);b.stroke();b.fill()},_tangents:function(b,a,c,d){var f=b.x-c.x,g=b.y-c.y,k=a-d,e=f*f+g*g;if(!(e<=k*k)){var e=pa(e),f=-f/e,g=-g/e,k=k/e,e=[],h,l,m;h=pa(K(0,1-k*k));for(var n=1;-1<=n;n-=2)l=f*k-n*h*g,m=g*k+n*h*f,e.push({x1:b.x+a*l<<0,y1:b.y+a*m<<0,x2:c.x+d*l<<0,y2:c.y+d*m<<0});return e}}},R={draw:function(b,a,c,d,f,g,k){var e=s/(s-f);c=t.project({x:c.x-q,y:c.y-n},s/(s-d));d={x:0,y:0};
for(var h={x:0,y:0},l=0,m=a.length-3;l<m;l+=2)d.x=a[l]-q,d.y=a[l+1]-n,h.x=a[l+2]-q,h.y=a[l+3]-n,f&&(d=t.project(d,e),h=t.project(h,e)),(h.x-d.x)*(c.y-d.y)>(c.x-d.x)*(h.y-d.y)&&(b.fillStyle=d.x<h.x&&d.y<h.y||d.x>h.x&&d.y>h.y?k:g,b.beginPath(),this._triangle(b,d,h,c),b.closePath(),b.fill())},_triangle:function(b,a,c,d){b.moveTo(a.x,a.y);b.lineTo(c.x,c.y);b.lineTo(d.x,d.y)},_ring:function(b,a){b.moveTo(a[0]-q,a[1]-n);for(var c=2,d=a.length-1;c<d;c+=2)b.lineTo(a[c]-q,a[c+1]-n)},shadow:function(b,a,c,
d,f){var g={x:0,y:0},k={x:0,y:0};c=z.project({x:c.x-q,y:c.y-n},d);d=0;for(var e=a.length-3;d<e;d+=2)g.x=a[d]-q,g.y=a[d+1]-n,k.x=a[d+2]-q,k.y=a[d+3]-n,f&&(g=z.project(g,f),k=z.project(k,f)),(k.x-g.x)*(c.y-g.y)>(c.x-g.x)*(k.y-g.y)&&this._triangle(b,g,k,c)},shadowMask:function(b,a){this._ring(b,a)},hitArea:function(b,a,c,d,f,g){var k=s/(s-f);c=t.project({x:c.x-q,y:c.y-n},s/(s-d));d={x:0,y:0};var e={x:0,y:0};b.fillStyle=g;b.beginPath();g=0;for(var h=a.length-3;g<h;g+=2)d.x=a[g]-q,d.y=a[g+1]-n,e.x=a[g+
2]-q,e.y=a[g+3]-n,f&&(d=t.project(d,k),e=t.project(e,k)),(e.x-d.x)*(c.y-d.y)>(c.x-d.x)*(e.y-d.y)&&this._triangle(b,d,e,c);b.closePath();b.fill()}},t={project:function(b,a){return{x:(b.x-M)*a+M<<0,y:(b.y-N)*a+N<<0}},render:function(){var b=this.context;b.clearRect(0,0,F,B);if(!(x<G||Q)){var a,c,d,f={x:M+q,y:N+n},g,k,e,h,l=C.items;l.sort(function(a,b){return a.minHeight-b.minHeight||S(b.center,f)-S(a.center,f)||b.height-a.height});for(var m=0,p=l.length;m<p;m++)if(a=l[m],!ia.isSimple(a)&&(g=a.footprint,
V(g))){c=1>a.scale?a.height*a.scale:a.height;d=0;a.minHeight&&(d=1>a.scale?a.minHeight*a.scale:a.minHeight);k=a.wallColor||ha;e=a.altColor||aa;h=a.roofColor||X;b.strokeStyle=e;switch(a.shape){case "cylinder":r.draw(b,a.center,a.radius,a.radius,c,d,k,e,h);break;case "cone":r.draw(b,a.center,a.radius,0,c,d,k,e);break;case "dome":r.draw(b,a.center,a.radius,a.radius/2,c,d,k,e);break;case "sphere":r.draw(b,a.center,a.radius,a.radius,c,d,k,e,h);break;case "pyramid":R.draw(b,g,a.center,c,d,k,e);break;default:Z.draw(b,
g,a.holes,c,d,k,e,h)}switch(a.roofShape){case "cone":r.draw(b,a.center,a.radius,0,c+a.roofHeight,c,h,""+I.parse(h).lightness(0.9));break;case "dome":r.draw(b,a.center,a.radius,a.radius/2,c+a.roofHeight,c,h,""+I.parse(h).lightness(0.9));break;case "pyramid":R.draw(b,g,a.center,c+a.roofHeight,c,h,I.parse(h).lightness(0.9))}}}}},ia={maxZoom:G+2,maxHeight:5,isSimple:function(b){return x<=this.maxZoom&&b.height+b.roofHeight<this.maxHeight},render:function(){var b=this.context;b.clearRect(0,0,F,B);if(!(x<
G||Q||x>this.maxZoom))for(var a,c,d=C.items,f=0,g=d.length;f<g;f++)if(a=d[f],!(a.height>=this.maxHeight)&&(c=a.footprint,V(c)))switch(b.strokeStyle=a.altColor||aa,b.fillStyle=a.roofColor||X,a.shape){case "cylinder":case "cone":case "dome":case "sphere":r.simplified(b,a.center,a.radius);break;default:Z.simplified(b,c,a.holes)}}},z={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(b,a){return{x:b.x+this.direction.x*a,y:b.y+this.direction.y*
a}},render:function(){var b=this.context,a,c,d;b.clearRect(0,0,F,B);if(!(!this.enabled||x<G||Q||(a=ja(W+q,fa+n),a=Ha(this.date,a.latitude,a.longitude),0>=a.altitude))){c=1/ka(a.altitude);d=5>c?0.75:1/c*5;this.direction.x=Fa(a.azimuth)*c;this.direction.y=Ea(a.azimuth)*c;var f,g,k,e;a=C.items;b.canvas.style.opacity=d/(2*D);b.shadowColor=this.blurColor;b.shadowBlur=D/2*this.blurSize;b.fillStyle=this.color;b.beginPath();d=0;for(c=a.length;d<c;d++)if(f=a[d],e=f.footprint,V(e)){g=1>f.scale?f.height*f.scale:
f.height;k=0;f.minHeight&&(k=1>f.scale?f.minHeight*f.scale:f.minHeight);switch(f.shape){case "cylinder":r.shadow(b,f.center,f.radius,f.radius,g,k);break;case "cone":r.shadow(b,f.center,f.radius,0,g,k);break;case "dome":r.shadow(b,f.center,f.radius,f.radius/2,g,k);break;case "sphere":r.shadow(b,f.center,f.radius,f.radius,g,k);break;case "pyramid":R.shadow(b,e,f.center,g,k);break;default:Z.shadow(b,e,f.holes,g,k)}switch(f.roofShape){case "cone":r.shadow(b,f.center,f.radius,0,g+f.roofHeight,g);break;
case "dome":r.shadow(b,f.center,f.radius,f.radius/2,g+f.roofHeight,g);break;case "pyramid":R.shadow(b,e,f.center,g+f.roofHeight,g)}}b.closePath();b.fill();b.shadowBlur=null;b.globalCompositeOperation="destination-out";b.beginPath();d=0;for(c=a.length;d<c;d++)if(f=a[d],e=f.footprint,V(e)&&!f.minHeight)switch(f.shape){case "cylinder":case "cone":case "dome":r.shadowMask(b,f.center,f.radius);break;default:Z.shadowMask(b,e,f.holes)}b.fillStyle="#00ff00";b.fill();b.globalCompositeOperation="source-over"}}},
Y={_idMapping:[null],reset:function(){this._idMapping=[null]},render:function(){if(!this._timer){var b=this;this._timer=setTimeout(function(){b._timer=null;b._render()},500)}},_render:function(){var b=this.context;b.clearRect(0,0,F,B);if(!(x<G||Q)){var a,c,d,f={x:M+q,y:N+n},g,k,e=C.items;e.sort(function(a,b){return a.minHeight-b.minHeight||S(b.center,f)-S(a.center,f)||b.height-a.height});for(var h=0,l=e.length;h<l;h++)if(a=e[h],k=a.hitColor)if(g=a.footprint,V(g)){c=a.height;d=0;a.minHeight&&(d=a.minHeight);
switch(a.shape){case "cylinder":r.hitArea(b,a.center,a.radius,a.radius,c,d,k);break;case "cone":r.hitArea(b,a.center,a.radius,0,c,d,k);break;case "dome":r.hitArea(b,a.center,a.radius,a.radius/2,c,d,k);break;case "sphere":r.hitArea(b,a.center,a.radius,a.radius,c,d,k);break;case "pyramid":R.hitArea(b,g,a.center,c,d,k);break;default:Z.hitArea(b,g,a.holes,c,d,k)}switch(a.roofShape){case "cone":r.hitArea(b,a.center,a.radius,0,c+a.roofHeight,c,k);break;case "dome":r.hitArea(b,a.center,a.radius,a.radius/
2,c+a.roofHeight,c,k);break;case "pyramid":R.hitArea(b,g,a.center,c+a.roofHeight,c,k)}}this._imageData=this.context.getImageData(0,0,F,B).data}},getIdFromXY:function(b,a){var c=this._imageData;if(c){var d=4*((a|0)*F+(b|0));return this._idMapping[c[d]|c[d+1]<<8|c[d+2]<<16]}},idToColor:function(b){var a=this._idMapping.indexOf(b);-1===a&&(this._idMapping.push(b),a=this._idMapping.length-1);return"rgb("+[a&255,a>>8&255,a>>16&255].join()+")"}},$,A={container:document.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents=
"none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;z.context=this.createContext(this.container);ia.context=this.createContext(this.container);t.context=this.createContext(this.container);Y.context=this.createContext()},render:function(b){Ga(function(){b||(z.render(),ia.render(),Y.render());t.render()})},createContext:function(b){var a=document.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";
a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;this.items.push(a);b&&b.appendChild(a);return c},appendTo:function(b){b.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(b,a){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=b,this.items[c].height=a},setPosition:function(b,
a){this.container.style.left=b+"px";this.container.style.top=a+"px"}};A.init();v=function(b){this.offset={x:0,y:0};b.addLayer(this)};p=v.prototype=L.Layer?new L.Layer:{};p.onAdd=function(b){this.map=b;A.appendTo(b._panes.overlayPane);var a=this.getOffset(),c=b.getPixelOrigin();la({width:b._size.x,height:b._size.y});var d=c.y-a.y;q=c.x-a.x;n=d;ma(b._zoom);A.setPosition(-a.x,-a.y);b.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,
click:this.onClick},this);if(b.options.zoomAnimation)b.on("zoomanim",this.onZoom,this);b.attributionControl&&b.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');C.update()};p.onRemove=function(){var b=this.map;b.attributionControl&&b.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');b.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset,
click:this.onClick},this);b.options.zoomAnimation&&b.off("zoomanim",this.onZoom,this);A.remove()};p.onMove=function(b){b=this.getOffset();ea({x:this.offset.x-b.x,y:this.offset.y-b.y})};p.onMoveEnd=function(b){if(this.noMoveEnd)this.noMoveEnd=!1;else{var a=this.map;b=this.getOffset();var c=a.getPixelOrigin();this.offset=b;A.setPosition(-b.x,-b.y);ea({x:0,y:0});la({width:a._size.x,height:a._size.y});a=c.y-b.y;q=c.x-b.x;n=a;A.render();C.update()}};p.onZoomStart=function(b){Q=!0;A.render()};p.onZoom=
function(b){};p.onZoomEnd=function(b){b=this.map;var a=this.getOffset(),c=b.getPixelOrigin(),d=c.y-a.y;q=c.x-a.x;n=d;b=b._zoom;Q=!1;ma(b);C.update();A.render();this.noMoveEnd=!0};p.onResize=function(){};p.onViewReset=function(){var b=this.getOffset();this.offset=b;A.setPosition(-b.x,-b.y);ea({x:0,y:0})};p.onClick=function(b){var a=Y.getIdFromXY(b.containerPoint.x,b.containerPoint.y);a&&ua({feature:a,lat:b.latlng.lat,lon:b.latlng.lng})};p.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};
p.style=function(b){b=b||{};var a;if(a=b.color||b.wallColor)H=I.parse(a),ha=""+H.alpha(D),ba=H.lightness(0.8),aa=""+ba.alpha(D),O=H.lightness(1.2),X=""+O.alpha(D);b.roofColor&&(O=I.parse(b.roofColor),X=""+O.alpha(D));void 0!==b.shadows&&(z.enabled=!!b.shadows);A.render();return this};p.date=function(b){z.date=b;z.render();return this};p.load=function(b){C.load(b);return this};p.set=function(b){C.set(b);return this};var ta=function(){};p.each=function(b){ta=function(a){return b(a)};return this};var ua=
function(){};p.click=function(b){ua=function(a){return b(a)};return this};p.getDetails=function(b,a){C.provider&&C.provider.getFeature(b,a);return this};v.VERSION="0.2.2b";v.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';ca.OSMBuildings=v})(this);
