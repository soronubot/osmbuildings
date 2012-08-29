var OSMBuildings=function(va){function wa(n,o){return n.replace(/\{ *([\w_]+) *\}/g,function(k,b){return o[b]||""})}function xa(n,o){var k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState===4)!k.status||k.status<200||k.status>299||k.responseText&&o(JSON.parse(k.responseText))};k.open("GET",n);k.send(null);return k}function qa(n,o,k){if(k===undefined)k=[];var b,c,e,i=n[0]?n:n.features,f,s,q,m,A=o?1:0,D=o?0:1;if(i){b=0;for(n=i.length;b<n;b++)qa(i[b],o,k);return k}if(n.type==="Feature"){f=
n.geometry;b=n.properties}if(f.type==="Polygon")s=[f.coordinates];if(f.type==="MultiPolygon")s=f.coordinates;if(s){o=b.height;i=E.parse(b.color||b.style.fillColor);b=0;for(n=s.length;b<n;b++){q=s[b][0];f=[];c=m=0;for(e=q.length;c<e;c++){f.push(q[c][A],q[c][D]);m+=o||q[c][2]||0}if(m){c=[];c[I]=~~(m/q.length);q=H;m=void 0;e=void 0;var y=void 0,F=void 0,Q=0,v=void 0,G=void 0;v=0;for(G=f.length-3;v<G;v+=2){m=f[v];e=f[v+1];y=f[v+2];F=f[v+3];Q+=m*F-y*e}if((Q/2>0?"CW":"CCW")==="CW")f=f;else{m=[];for(e=f.length-
2;e>=0;e-=2)m.push(f[e],f[e+1]);f=m}c[q]=f;if(i)c[J]=[i,i.adjustLightness(0.2)];k.push(c)}}}return k}var T=Math.PI,ra=T/2,ya=T/4,za=180/T,Aa=256,fa=14,ga=400,sa=ga-50,U="latitude",V="longitude",I=0,H=1,J=2,$=3,ta=ta||Array,Ba=Math.exp,Ca=Math.log,Da=Math.tan,Ea=Math.atan,ha=Math.min,Fa=Math.max,E=function(){function n(b,c,e){if(e<0)e+=1;if(e>1)e-=1;if(e<1/6)return b+(c-b)*6*e;if(e<0.5)return c;if(e<2/3)return b+(c-b)*(2/3-e)*6;return b}function o(b,c,e,i){this.r=b;this.g=c;this.b=e;this.a=arguments.length<
4?1:i}var k=o.prototype;k.toString=function(){return"rgba("+[this.r,this.g,this.b,this.a].join(",")+")"};k.adjustLightness=function(b){var c=E.toHSLA(this);c.l+=b;c.l=Math.min(1,Math.max(0,c.l));var e,i;if(c.s===0)b=e=i=c.l;else{i=c.l<0.5?c.l*(1+c.s):c.l+c.s-c.l*c.s;var f=2*c.l-i;b=n(f,i,c.h+1/3);e=n(f,i,c.h);i=n(f,i,c.h-1/3)}return new E(~~(b*255),~~(e*255),~~(i*255),c.a)};k.adjustAlpha=function(b){return new E(this.r,this.g,this.b,this.a*b)};o.parse=function(b){if(~b.indexOf("#")){b=b.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);
return new E(parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),b[4]?parseInt(b[4],16)/255:1)}if(b=b.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new E(b[1],b[2],b[3],b[4]?b[5]:1)};o.toHSLA=function(b){var c=b.r/255,e=b.g/255,i=b.b/255,f=Math.max(c,e,i),s=Math.min(c,e,i),q,m=(f+s)/2,A;if(f===s)q=s=0;else{A=f-s;s=m>0.5?A/(2-f-s):A/(f+s);switch(f){case c:q=(e-i)/A+(e<i?6:0);break;case e:q=(i-c)/A+2;break;case i:q=(c-e)/A+4;break}q/=6}return{h:q,s:s,l:m,a:b.a}};return o}();return function(){function n(a){t=
va.document.createElement("canvas");t.style.webkitTransform="translate3d(0,0,0)";t.style.position="absolute";t.style.pointerEvents="none";t.style.left=0;t.style.top=0;t.style.imageRendering="optimizeSpeed";a.appendChild(t);u=t.getContext("2d");u.lineCap="round";u.lineJoin="round";u.lineWidth=1;try{u.mozImageSmoothingEnabled=false}catch(g){}}function o(a,g){var d={};a/=W;g/=W;d[U]=g<=0?90:g>=1?-90:za*(2*Ea(Ba(T*(1-2*g)))-ra);d[V]=(a===1?1:(a%1+1)%1)*360-180;return d}function k(){if(!(!ia||B<fa)){var a=
o(v-F,G-Q),g=o(v+D+F,G+y+Q);aa&&aa.abort();aa=xa(wa(ia,{w:a[V],n:a[U],e:g[V],s:g[U],z:B}),s)}}function b(a,g){var d=[],j,h,l,z,p,K,R,w,C=ja-B;j=0;for(h=a.length;j<h;j++){p=a[j];K=p[H];R=new ta(K.length);l=0;for(z=K.length-1;l<z;l+=2){w=K[l+1];var M=ha(1,Fa(0,0.5-Ca(Da(ya+ra*K[l]/180))/T/2));w={x:~~((w/360+0.5)*W),y:~~(M*W)};R[l]=w.x;R[l+1]=w.y}d[j]=[];d[j][I]=ha(p[I]>>C,sa);d[j][H]=R;d[j][J]=p[J];d[j][$]=g}return d}function c(a,g){D=a;y=g;F=~~(D/2);Q=~~(y/2);N=F;O=y;t.width=D;t.height=y}function e(a,
g){v=a;G=g}function i(a){B=a;W=Aa<<B;S=1-(B-X)*0.3/(ja-X)}function f(){ka=true;m()}function s(a){var g,d,j,h=[],l=0,z=0;X=fa;i(B);aa=null;if(!(!a||a.meta.z!==B)){j=a.meta;d=a.data;if(x&&r&&x.z===j.z){l=x.x-j.x;z=x.y-j.y;a=0;for(g=r.length;a<g;a++)h[a]=r[a][H][0]+l+","+(r[a][H][1]+z)}x=j;r=[];a=0;for(g=d.length;a<g;a++){r[a]=d[a];r[a][I]=ha(r[a][I],sa);j=r[a][H][0]+","+r[a][H][1];r[a][$]=!(h&&~h.indexOf(j))}q()}}function q(){Y=0;clearInterval(la);la=setInterval(function(){Y+=0.1;if(Y>1){clearInterval(la);
Y=1;for(var a=0,g=r.length;a<g;a++)r[a][$]=0}m()},33)}function m(){u.clearRect(0,0,D,y);if(x&&r)if(!(B<X||ka)){var a,g,d,j,h,l,z,p,K=v-x.x,R=G-x.y,w,C,M,ba,ca,P,ma,Ga=da.adjustAlpha(S),Ha=ua.adjustAlpha(S);if(ea)u.strokeStyle=Ia.adjustAlpha(S)+"";a=0;for(g=r.length;a<g;a++){h=r[a];C=false;l=h[H];w=[];d=0;for(j=l.length-1;d<j;d+=2){w[d]=z=l[d]-K;w[d+1]=p=l[d+1]-R;C||(C=z>0&&z<D&&p>0&&p<y)}if(C){u.fillStyle=(h[J]?h[J][0].adjustAlpha(S):Ga)+"";d=h[$]?h[I]*Y:h[I];l=ga/(ga-d);z=[];p=[];d=0;for(j=w.length-
3;d<j;d+=2){C=w[d];M=w[d+1];ba=w[d+2];ca=w[d+3];P={x:~~((C-N)*l+N),y:~~((M-O)*l+O)};ma={x:~~((ba-N)*l+N),y:~~((ca-O)*l+O)};if((ba-C)*(P.y-M)>(P.x-C)*(ca-M)){if(!p.length){p.unshift(M);p.unshift(C);p.push(P.x,P.y)}p.unshift(ca);p.unshift(ba);p.push(ma.x,ma.y)}else{A(p);p=[]}z[d]=P.x;z[d+1]=P.y}A(p);u.fillStyle=(h[J]?h[J][1].adjustAlpha(S):Ha)+"";A(z,ea)}}}}function A(a,g){if(a.length){u.beginPath();u.moveTo(a[0],a[1]);for(var d=2,j=a.length;d<j;d+=2)u.lineTo(a[d],a[d+1]);u.closePath();g&&u.stroke();
u.fill()}}var D=0,y=0,F=0,Q=0,v=0,G=0,B,W,aa,t,u,ia,ea,da=new E(200,190,180),ua=da.adjustLightness(0.2),Ia=new E(145,140,135),Z,x,r,S=1,Y=1,la,X=fa,ja=20,N,O,ka=false;this.VERSION="0.1.5a";this.render=function(){this.map&&m();return this};this.setStyle=function(a){if(this.map){a=(a=a)||{};ea=a.strokeRoofs!==undefined?a.strokeRoofs:ea;if(a.fillColor){da=E.parse(a.fillColor);ua=da.adjustLightness(0.2)}m()}return this};this.setData=function(a,g){if(this.map)if(a){Z=qa(a,g);X=0;i(B);x={n:90,w:-180,s:-90,
e:180,x:0,y:0,z:B};r=b(Z,true);q()}else{Z=null;m()}return this};this.loadData=function(a){if(this.map){ia=a;k()}return this};var na,oa,pa;this.VERSION+="-leaflet";this.addTo=function(a){a.addLayer(this);return this};this.onAdd=function(a){this.map=a;n(a._panes.overlayPane);ja=a._layersMaxZoom;c(a._size.x,a._size.y);var g=a.getPixelOrigin();e(g.x,g.y);i(a._zoom);var d=0,j=0;na=function(){var h=L.DomUtil.getPosition(a._mapPane);N=F-(h.x-d);O=y-(h.y-j);m()};oa=function(){var h=L.DomUtil.getPosition(a._mapPane);
d=h.x;j=h.y;t.style.left=-h.x+"px";t.style.top=-h.y+"px";N=F;O=y;c(a._size.x,a._size.y);var l=a.getPixelOrigin();e(l.x-h.x,l.y-h.y);h=o(v,G);l=o(v+D,G+y);if(x&&(h[U]>x.n||h[V]<x.w||l[U]<x.s||l[V]>x.e))k();m()};pa=function(){var h={zoom:a._zoom};ka=false;i(h.zoom);if(Z){r=b(Z);m()}else k()};a.on({move:na,moveend:oa,zoomstart:f,zoomend:pa});if(a.options.zoomAnimation)t.className="leaflet-zoom-animated";a.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');
m()};this.onRemove=function(a){a.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:na,moveend:oa,zoomstart:f,zoomend:pa});t.parentNode.removeChild(t);this.map=null};arguments.length&&this.addTo(arguments[0])}}(this);
