function Iu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ea="181",Lu=0,Pa=1,Uu=2,nl=1,Fu=2,Mn=3,Gn=0,Ut=1,En=2,An=0,Ai=1,Da=2,Ia=3,La=4,Nu=5,Jn=100,ku=101,Ou=102,Bu=103,zu=104,Gu=200,Vu=201,Hu=202,Wu=203,no=204,io=205,Xu=206,$u=207,ju=208,qu=209,Yu=210,Ku=211,Ju=212,Zu=213,Qu=214,ro=0,so=1,oo=2,Pi=3,ao=4,co=5,lo=6,uo=7,il=0,eh=1,th=2,Bn=0,nh=1,ih=2,rh=3,sh=4,oh=5,ah=6,ch=7,rl=300,Di=301,Ii=302,ho=303,fo=304,us=306,po=1e3,Cn=1001,mo=1002,Wt=1003,lh=1004,vr=1005,Jt=1006,ys=1007,Qn=1008,mn=1009,sl=1010,ol=1011,sr=1012,ta=1013,ei=1014,dn=1015,Ni=1016,na=1017,ia=1018,or=1020,al=35902,cl=35899,ll=1021,ul=1022,ln=1023,ar=1026,cr=1027,ra=1028,sa=1029,oa=1030,aa=1031,ca=1033,Xr=33776,$r=33777,jr=33778,qr=33779,xo=35840,go=35841,_o=35842,vo=35843,yo=36196,bo=37492,So=37496,Mo=37808,To=37809,Eo=37810,Co=37811,Ao=37812,wo=37813,Ro=37814,Po=37815,Do=37816,Io=37817,Lo=37818,Uo=37819,Fo=37820,No=37821,ko=36492,Oo=36494,Bo=36495,zo=36283,Go=36284,Vo=36285,Ho=36286,uh=3200,hh=3201,hl=0,fh=1,Nn="",Yt="srgb",Li="srgb-linear",is="linear",at="srgb",ai=7680,Ua=519,dh=512,ph=513,mh=514,fl=515,xh=516,gh=517,_h=518,vh=519,Wo=35044,Fa="300 es",pn=2e3,rs=2001;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=ss("canvas");return i.style.display="block",i}const Na={};function os(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ve(...i){const e="THREE."+i.shift();console.warn(e,...i)}function xt(...i){const e="THREE."+i.shift();console.error(e,...i)}function lr(...i){const e=i.join(" ");e in Na||(Na[e]=!0,Ve(...i))}function bh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const nr=Math.PI/180,ur=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function la(i,e){return(i%e+e)%e}function Sh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Mh(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function Th(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function Eh(i,e=1){return e-Math.abs(la(i,e*2)-e)}function Ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ah(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rh(i,e){return i+Math.random()*(e-i)}function Ph(i){return i*(.5-Math.random())}function Dh(i){i!==void 0&&(ka=i);let e=ka+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ih(i){return i*nr}function Lh(i){return i*ur}function Uh(i){return(i&i-1)===0&&i!==0}function Fh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:nr,RAD2DEG:ur,generateUUID:wn,clamp:Ke,euclideanModulo:la,mapLinear:Sh,inverseLerp:Mh,lerp:ir,damp:Th,pingpong:Eh,smoothstep:Ch,smootherstep:Ah,randInt:wh,randFloat:Rh,randFloatSpread:Ph,seededRandom:Dh,degToRad:Ih,radToDeg:Lh,isPowerOfTwo:Uh,ceilPowerOfTwo:Fh,floorPowerOfTwo:Nh,setQuaternionFromProperEuler:kh,normalize:tt,denormalize:cn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==m||u!==g){let x=c*f+l*m+u*g+h*v;x<0&&(f=-f,m=-m,g=-g,v=-v,x=-x);let d=1-a;if(x<.9995){const b=Math.acos(x),p=Math.sin(b);d=Math.sin(d*b)/p,a=Math.sin(a*b)/p,c=c*d+f*a,l=l*d+m*a,u=u*d+g*a,h=h*d+v*a}else{c=c*d+f*a,l=l*d+m*a,u=u*d+g*a,h=h*d+v*a;const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-a*m,e[t+2]=l*g+u*m+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new G,Oa=new fr;class $e{constructor(e,t,n,r,s,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],v=r[0],x=r[3],d=r[6],b=r[1],p=r[4],_=r[7],C=r[2],T=r[5],A=r[8];return s[0]=o*v+a*b+c*C,s[3]=o*x+a*p+c*T,s[6]=o*d+a*_+c*A,s[1]=l*v+u*b+h*C,s[4]=l*x+u*p+h*T,s[7]=l*d+u*_+h*A,s[2]=f*v+m*b+g*C,s[5]=f*x+m*p+g*T,s[8]=f*d+m*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ss.makeScale(e,t)),this}rotate(e){return this.premultiply(Ss.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ss.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ss=new $e,Ba=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oh(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Nn?is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:is,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}const Ze=Oh();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class Bh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ci===void 0&&(ci=ss("canvas")),ci.width=e.width,ci.height=e.height;const r=ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Rn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zh=0;class ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Gh=0;const Ts=new G;class wt extends ki{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Cn,r=Cn,s=Jt,o=Qn,a=ln,c=mn,l=wt.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=wn(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ts).x}get height(){return this.source.getSize(Ts).y}get depth(){return this.source.getSize(Ts).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=rl;wt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],v=c[2],x=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(l+1)/2,_=(m+1)/2,C=(d+1)/2,T=(u+f)/4,A=(h+v)/4,I=(g+x)/4;return p>_&&p>C?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=T/n,s=A/n):_>C?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=I/s),this.set(n,r,s,t),this}let b=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(h-v)/b,this.z=(f-u)/b,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vh extends ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new wt(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Vh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pl extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hh extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),br.subVectors(this.max,Gi),li.subVectors(e.a,Gi),ui.subVectors(e.b,Gi),hi.subVectors(e.c,Gi),Pn.subVectors(ui,li),Dn.subVectors(hi,ui),Wn.subVectors(li,hi);let t=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!Es(t,li,ui,hi,br)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,li,ui,hi,br))?!1:(Sr.crossVectors(Pn,Dn),t=[Sr.x,Sr.y,Sr.z],Es(t,li,ui,hi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new G,new G,new G,new G,new G,new G,new G,new G],sn=new G,yr=new ni,li=new G,ui=new G,hi=new G,Pn=new G,Dn=new G,Wn=new G,Gi=new G,br=new G,Sr=new G,Xn=new G;function Es(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xn.fromArray(i,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Wh=new ni,Vi=new G,Cs=new G;class dr{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Cs)),this.expandByPoint(Vi.copy(e.center).sub(Cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _n=new G,As=new G,Mr=new G,In=new G,ws=new G,Tr=new G,Rs=new G;class Xh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){As.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),In.copy(this.origin).sub(As);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=In.dot(this.direction),c=-In.dot(Mr),l=In.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(As).addScaledVector(Mr,f),m}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),r=_n.dot(_n)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,r,s){ws.subVectors(t,e),Tr.subVectors(n,e),Rs.crossVectors(ws,Tr);let o=this.direction.dot(Rs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);const c=a*this.direction.dot(Tr.crossVectors(In,Tr));if(c<0)return null;const l=a*this.direction.dot(ws.cross(In));if(l<0||c+l>o)return null;const u=-a*In.dot(Rs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,s,o,a,c,l,u,h,f,m,g,v,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,m,g,v,x)}set(e,t,n,r,s,o,a,c,l,u,h,f,m,g,v,x){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,jh)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ln.crossVectors(n,Gt),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ln.crossVectors(n,Gt)),Ln.normalize(),Er.crossVectors(Gt,Ln),r[0]=Ln.x,r[4]=Er.x,r[8]=Gt.x,r[1]=Ln.y,r[5]=Er.y,r[9]=Gt.y,r[2]=Ln.z,r[6]=Er.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],v=n[6],x=n[10],d=n[14],b=n[3],p=n[7],_=n[11],C=n[15],T=r[0],A=r[4],I=r[8],S=r[12],M=r[1],D=r[5],E=r[9],y=r[13],R=r[2],L=r[6],N=r[10],O=r[14],U=r[3],z=r[7],W=r[11],Z=r[15];return s[0]=o*T+a*M+c*R+l*U,s[4]=o*A+a*D+c*L+l*z,s[8]=o*I+a*E+c*N+l*W,s[12]=o*S+a*y+c*O+l*Z,s[1]=u*T+h*M+f*R+m*U,s[5]=u*A+h*D+f*L+m*z,s[9]=u*I+h*E+f*N+m*W,s[13]=u*S+h*y+f*O+m*Z,s[2]=g*T+v*M+x*R+d*U,s[6]=g*A+v*D+x*L+d*z,s[10]=g*I+v*E+x*N+d*W,s[14]=g*S+v*y+x*O+d*Z,s[3]=b*T+p*M+_*R+C*U,s[7]=b*A+p*D+_*L+C*z,s[11]=b*I+p*E+_*N+C*W,s[15]=b*S+p*y+_*O+C*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],v=e[7],x=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*m-n*c*m)+v*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+x*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+d*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],v=e[13],x=e[14],d=e[15],b=h*x*l-v*f*l+v*c*m-a*x*m-h*c*d+a*f*d,p=g*f*l-u*x*l-g*c*m+o*x*m+u*c*d-o*f*d,_=u*v*l-g*h*l+g*a*m-o*v*m-u*a*d+o*h*d,C=g*h*c-u*v*c-g*a*f+o*v*f+u*a*x-o*h*x,T=t*b+n*p+r*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=b*A,e[1]=(v*f*s-h*x*s-v*r*m+n*x*m+h*r*d-n*f*d)*A,e[2]=(a*x*s-v*c*s+v*r*l-n*x*l-a*r*d+n*c*d)*A,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*m-n*c*m)*A,e[4]=p*A,e[5]=(u*x*s-g*f*s+g*r*m-t*x*m-u*r*d+t*f*d)*A,e[6]=(g*c*s-o*x*s-g*r*l+t*x*l+o*r*d-t*c*d)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*m+t*c*m)*A,e[8]=_*A,e[9]=(g*h*s-u*v*s-g*n*m+t*v*m+u*n*d-t*h*d)*A,e[10]=(o*v*s-g*a*s+g*n*l-t*v*l-o*n*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=C*A,e[13]=(u*v*r-g*h*r+g*n*f-t*v*f-u*n*x+t*h*x)*A,e[14]=(g*a*r-o*v*r-g*n*c+t*v*c+o*n*x-t*a*x)*A,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,g=s*h,v=o*u,x=o*h,d=a*h,b=c*l,p=c*u,_=c*h,C=n.x,T=n.y,A=n.z;return r[0]=(1-(v+d))*C,r[1]=(m+_)*C,r[2]=(g-p)*C,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(f+d))*T,r[6]=(x+b)*T,r[7]=0,r[8]=(g+p)*A,r[9]=(x-b)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=fi.set(r[0],r[1],r[2]).length();const o=fi.set(r[4],r[5],r[6]).length(),a=fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const l=1/s,u=1/o,h=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=pn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===pn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===rs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=pn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===pn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===rs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new G,on=new ut,$h=new G(0,0,0),jh=new G(1,1,1),Ln=new G,Er=new G,Gt=new G,Ga=new ut,Va=new fr;class tn{constructor(e=0,t=0,n=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qh=0;const Ha=new G,di=new fr,vn=new ut,Cr=new G,Hi=new G,Yh=new G,Kh=new fr,Wa=new G(1,0,0),Xa=new G(0,1,0),$a=new G(0,0,1),ja={type:"added"},Jh={type:"removed"},pi={type:"childadded",child:null},Ps={type:"childremoved",child:null};class Tt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new G,t=new tn,n=new fr,r=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new $e}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Wa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis($a,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis($a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Hi,Cr,this.up):vn.lookAt(Cr,Hi,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(vn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),pi.child=e,this.dispatchEvent(pi),pi.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new G(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new G,yn=new G,Ds=new G,bn=new G,mi=new G,xi=new G,qa=new G,Is=new G,Ls=new G,Us=new G,Fs=new ct,Ns=new ct,ks=new ct;class Kt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),yn.subVectors(n,t),Ds.subVectors(e,t);const o=an.dot(an),a=an.dot(yn),c=an.dot(Ds),l=yn.dot(yn),u=yn.dot(Ds),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,bn.x),c.addScaledVector(o,bn.y),c.addScaledVector(a,bn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Fs.setScalar(0),Ns.setScalar(0),ks.setScalar(0),Fs.fromBufferAttribute(e,t),Ns.fromBufferAttribute(e,n),ks.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fs,s.x),o.addScaledVector(Ns,s.y),o.addScaledVector(ks,s.z),o}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),yn.subVectors(e,t),an.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),an.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;mi.subVectors(r,n),xi.subVectors(s,n),Is.subVectors(e,n);const c=mi.dot(Is),l=xi.dot(Is);if(c<=0&&l<=0)return t.copy(n);Ls.subVectors(e,r);const u=mi.dot(Ls),h=xi.dot(Ls);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(mi,o);Us.subVectors(e,s);const m=mi.dot(Us),g=xi.dot(Us);if(g>=0&&m<=g)return t.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xi,a);const x=u*g-m*h;if(x<=0&&h-u>=0&&m-g>=0)return qa.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(qa,a);const d=1/(x+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(mi,o).addScaledVector(xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Os(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=la(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Os(o,s,e+1/3),this.g=Os(o,s,e),this.b=Os(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.workingToColorSpace(Ct.copy(this),e),Math.round(Ke(Ct.r*255,0,255))*65536+Math.round(Ke(Ct.g*255,0,255))*256+Math.round(Ke(Ct.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Yt){Ze.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Ar);const n=ir(Un.h,Ar.h,t),r=ir(Un.s,Ar.s,t),s=ir(Un.l,Ar.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new qe;qe.NAMES=xl;let Zh=0;class Oi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ai,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pr extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new G,wr=new He;let Qh=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class gl extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ef=0;const qt=new ut,Bs=new Tt,gi=new G,Vt=new ni,Wi=new ni,St=new G;class nn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?_l:gl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Vt.min,Wi.min),Vt.expandByPoint(St),St.addVectors(Vt.max,Wi.max),Vt.expandByPoint(St)):(Vt.expandByPoint(Wi.min),Vt.expandByPoint(Wi.max))}Vt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)St.fromBufferAttribute(a,l),c&&(gi.fromBufferAttribute(e,l),St.add(gi)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new G,c[I]=new G;const l=new G,u=new G,h=new G,f=new He,m=new He,g=new He,v=new G,x=new G;function d(I,S,M){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(D),x.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(v),a[S].add(v),a[M].add(v),c[I].add(x),c[S].add(x),c[M].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,S=b.length;I<S;++I){const M=b[I],D=M.start,E=M.count;for(let y=D,R=D+E;y<R;y+=3)d(e.getX(y+0),e.getX(y+1),e.getX(y+2))}const p=new G,_=new G,C=new G,T=new G;function A(I){C.fromBufferAttribute(r,I),T.copy(C);const S=a[I];p.copy(S),p.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(T,S);const D=_.dot(c[I])<0?-1:1;o.setXYZW(I,p.x,p.y,p.z,D)}for(let I=0,S=b.length;I<S;++I){const M=b[I],D=M.start,E=M.count;for(let y=D,R=D+E;y<R;y+=3)A(e.getX(y+0)),A(e.getX(y+1)),A(e.getX(y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,x=c.length;v<x;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new en(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new ut,$n=new Xh,Rr=new dr,Ka=new G,Pr=new G,Dr=new G,Ir=new G,zs=new G,Lr=new G,Ja=new G,Ur=new G;class ne extends Tt{constructor(e=new nn,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Lr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(zs.fromBufferAttribute(h,e),o?Lr.addScaledVector(zs,u):Lr.addScaledVector(zs.sub(t),u))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Rr.containsPoint($n.origin)===!1&&($n.intersectSphere(Rr,Ka)===null||$n.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&(Ya.copy(s).invert(),$n.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const x=f[g],d=o[x.materialIndex],b=Math.max(x.start,m.start),p=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let _=b,C=p;_<C;_+=3){const T=a.getX(_),A=a.getX(_+1),I=a.getX(_+2);r=Fr(this,d,e,n,l,u,h,T,A,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let x=g,d=v;x<d;x+=3){const b=a.getX(x),p=a.getX(x+1),_=a.getX(x+2);r=Fr(this,o,e,n,l,u,h,b,p,_),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const x=f[g],d=o[x.materialIndex],b=Math.max(x.start,m.start),p=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let _=b,C=p;_<C;_+=3){const T=_,A=_+1,I=_+2;r=Fr(this,d,e,n,l,u,h,T,A,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let x=g,d=v;x<d;x+=3){const b=x,p=x+1,_=x+2;r=Fr(this,o,e,n,l,u,h,b,p,_),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function tf(i,e,t,n,r,s,o,a){let c;if(e.side===Ut?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Gn,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:i}}function Fr(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Pr),i.getVertexPosition(c,Dr),i.getVertexPosition(l,Ir);const u=tf(i,e,t,n,Pr,Dr,Ir,Ja);if(u){const h=new G;Kt.getBarycoord(Ja,Pr,Dr,Ir,h),r&&(u.uv=Kt.getInterpolatedAttribute(r,a,c,l,h,new He)),s&&(u.uv1=Kt.getInterpolatedAttribute(s,a,c,l,h,new He)),o&&(u.normal=Kt.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Kt.getNormal(Pr,Dr,Ir,f.normal),u.face=f,u.barycoord=h}return u}class ge extends nn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(h,2));function g(v,x,d,b,p,_,C,T,A,I,S){const M=_/A,D=C/I,E=_/2,y=C/2,R=T/2,L=A+1,N=I+1;let O=0,U=0;const z=new G;for(let W=0;W<N;W++){const Z=W*D-y;for(let re=0;re<L;re++){const ae=re*M-E;z[v]=ae*b,z[x]=Z*p,z[d]=R,l.push(z.x,z.y,z.z),z[v]=0,z[x]=0,z[d]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(re/A),h.push(1-W/I),O+=1}}for(let W=0;W<I;W++)for(let Z=0;Z<A;Z++){const re=f+Z+L*W,ae=f+Z+L*(W+1),pe=f+(Z+1)+L*(W+1),we=f+(Z+1)+L*W;c.push(re,ae,we),c.push(ae,pe,we),U+=6}a.addGroup(m,U,S),m+=U,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const r in n)e[r]=n[r]}return e}function nf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const rf={clone:Ui,merge:Lt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new G,Za=new He,Qa=new He;class Ht extends yl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Za,Qa),t.subVectors(Qa,Za)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class af extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(_i,vi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(_i,vi,e,t);s.layers=this.layers,this.add(s);const o=new Ht(_i,vi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(_i,vi,e,t);a.layers=this.layers,this.add(a);const c=new Ht(_i,vi,e,t);c.layers=this.layers,this.add(c);const l=new Ht(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bl extends wt{constructor(e=[],t=Di,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cf extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new bl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ge(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:An});s.uniforms.tEquirect.value=t;const o=new ne(r,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Jt),new af(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Mt extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lf={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n),d=this._getHandJoint(l,v);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uf extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new G;class as{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new as(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sl extends Oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yi;const Xi=new G,bi=new G,Si=new G,Mi=new He,$i=new He,Ml=new ut,Nr=new G,ji=new G,kr=new G,ec=new He,Vs=new He,tc=new He;class ff extends Tt{constructor(e=new Sl){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new nn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hf(t,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new as(n,3,0,!1)),yi.setAttribute("uv",new as(n,2,3,!1))}this.geometry=yi,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Ml.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Si.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Or(Nr.set(-.5,-.5,0),Si,o,bi,r,s),Or(ji.set(.5,-.5,0),Si,o,bi,r,s),Or(kr.set(.5,.5,0),Si,o,bi,r,s),ec.set(0,0),Vs.set(1,0),tc.set(1,1);let a=e.ray.intersectTriangle(Nr,ji,kr,!1,Xi);if(a===null&&(Or(ji.set(-.5,.5,0),Si,o,bi,r,s),Vs.set(0,1),a=e.ray.intersectTriangle(Nr,kr,ji,!1,Xi),a===null))return;const c=e.ray.origin.distanceTo(Xi);c<e.near||c>e.far||t.push({distance:c,point:Xi.clone(),uv:Kt.getInterpolation(Xi,Nr,ji,kr,ec,Vs,tc,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Or(i,e,t,n,r,s){Mi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?($i.x=s*Mi.x-r*Mi.y,$i.y=r*Mi.x+s*Mi.y):$i.copy(Mi),i.copy(e),i.x+=$i.x,i.y+=$i.y,i.applyMatrix4(Ml)}class Tl extends wt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Wt,u=Wt,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends en{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new ut,ic=new ut,Br=[],rc=new ni,df=new ut,qi=new ne,Yi=new dr;class pf extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,df)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),rc.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Yi.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(Yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),e.ray.intersectsSphere(Yi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ti),ic.multiplyMatrices(n,Ti),qi.matrixWorld=ic,qi.raycast(e,Br);for(let o=0,a=Br.length;o<a;o++){const c=Br[o];c.instanceId=s,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(r*this.count),r,this.count,ra,dn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Hs=new G,mf=new G,xf=new $e;class Kn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hs.subVectors(n,t).cross(mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xf.getNormalMatrix(e),r=this.coplanarPoint(Hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new dr,gf=new He(.5,.5),zr=new G;class fa{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,s=new Kn,o=new Kn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],m=s[7],g=s[8],v=s[9],x=s[10],d=s[11],b=s[12],p=s[13],_=s[14],C=s[15];if(r[0].setComponents(l-o,m-u,d-g,C-b).normalize(),r[1].setComponents(l+o,m+u,d+g,C+b).normalize(),r[2].setComponents(l+a,m+h,d+v,C+p).normalize(),r[3].setComponents(l-a,m-h,d-v,C-p).normalize(),n)r[4].setComponents(c,f,x,_).normalize(),r[5].setComponents(l-c,m-f,d-x,C-_).normalize();else if(r[4].setComponents(l-c,m-f,d-x,C-_).normalize(),t===pn)r[5].setComponents(l+c,m+f,d+x,C+_).normalize();else if(t===rs)r[5].setComponents(c,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){jn.center.set(0,0,0);const t=gf.distanceTo(e.center);return jn.radius=.7071067811865476+t,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends wt{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends wt{constructor(e,t,n=ei,r,s,o,a=Wt,c=Wt,l,u=ar,h=1){if(u!==ar&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cl extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class da extends nn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const v=[],x=n/2;let d=0;b(),o===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(u),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(m,2));function b(){const _=new G,C=new G;let T=0;const A=(t-e)/n;for(let I=0;I<=s;I++){const S=[],M=I/s,D=M*(t-e)+e;for(let E=0;E<=r;E++){const y=E/r,R=y*c+a,L=Math.sin(R),N=Math.cos(R);C.x=D*L,C.y=-M*n+x,C.z=D*N,h.push(C.x,C.y,C.z),_.set(L,A,N).normalize(),f.push(_.x,_.y,_.z),m.push(y,1-M),S.push(g++)}v.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const M=v[S][I],D=v[S+1][I],E=v[S+1][I+1],y=v[S][I+1];(e>0||S!==0)&&(u.push(M,D,y),T+=3),(t>0||S!==s-1)&&(u.push(D,E,y),T+=3)}l.addGroup(d,T,0),d+=T}function p(_){const C=g,T=new He,A=new G;let I=0;const S=_===!0?e:t,M=_===!0?1:-1;for(let E=1;E<=r;E++)h.push(0,x*M,0),f.push(0,M,0),m.push(.5,.5),g++;const D=g;for(let E=0;E<=r;E++){const R=E/r*c+a,L=Math.cos(R),N=Math.sin(R);A.x=S*N,A.y=x*M,A.z=S*L,h.push(A.x,A.y,A.z),f.push(0,M,0),T.x=L*.5+.5,T.y=N*.5*M+.5,m.push(T.x,T.y),g++}for(let E=0;E<r;E++){const y=C+E,R=D+E;_===!0?u.push(R,R+1,y):u.push(R+1,R,y),I+=3}l.addGroup(d,I,_===!0?1:2),d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hs extends nn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const p=new G,_=new G,C=new G;for(let T=0;T<t.length;T+=3)m(t[T+0],p),m(t[T+1],_),m(t[T+2],C),c(p,_,C,b)}function c(b,p,_,C){const T=C+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const S=b.clone().lerp(_,I/T),M=p.clone().lerp(_,I/T),D=T-I;for(let E=0;E<=D;E++)E===0&&I===T?A[I][E]=S:A[I][E]=S.clone().lerp(M,E/D)}for(let I=0;I<T;I++)for(let S=0;S<2*(T-I)-1;S++){const M=Math.floor(S/2);S%2===0?(f(A[I][M+1]),f(A[I+1][M]),f(A[I][M])):(f(A[I][M+1]),f(A[I+1][M+1]),f(A[I+1][M]))}}function l(b){const p=new G;for(let _=0;_<s.length;_+=3)p.x=s[_+0],p.y=s[_+1],p.z=s[_+2],p.normalize().multiplyScalar(b),s[_+0]=p.x,s[_+1]=p.y,s[_+2]=p.z}function u(){const b=new G;for(let p=0;p<s.length;p+=3){b.x=s[p+0],b.y=s[p+1],b.z=s[p+2];const _=x(b)/2/Math.PI+.5,C=d(b)/Math.PI+.5;o.push(_,1-C)}g(),h()}function h(){for(let b=0;b<o.length;b+=6){const p=o[b+0],_=o[b+2],C=o[b+4],T=Math.max(p,_,C),A=Math.min(p,_,C);T>.9&&A<.1&&(p<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function f(b){s.push(b.x,b.y,b.z)}function m(b,p){const _=b*3;p.x=e[_+0],p.y=e[_+1],p.z=e[_+2]}function g(){const b=new G,p=new G,_=new G,C=new G,T=new He,A=new He,I=new He;for(let S=0,M=0;S<s.length;S+=9,M+=6){b.set(s[S+0],s[S+1],s[S+2]),p.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),C.copy(b).add(p).add(_).divideScalar(3);const D=x(C);v(T,M+0,b,D),v(A,M+2,p,D),v(I,M+4,_,D)}}function v(b,p,_,C){C<0&&b.x===1&&(o[p]=b.x-1),_.x===0&&_.z===0&&(o[p]=C/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.vertices,e.indices,e.radius,e.details)}}class pa extends hs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pa(e.radius,e.detail)}}class mr extends hs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mr(e.radius,e.detail)}}class fs extends nn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,m=[],g=[],v=[],x=[];for(let d=0;d<u;d++){const b=d*f-o;for(let p=0;p<l;p++){const _=p*h-s;g.push(_,-b,0),v.push(0,0,1),x.push(p/a),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const p=b+l*d,_=b+l*(d+1),C=b+1+l*(d+1),T=b+1+l*d;m.push(p,_,T),m.push(_,C,T)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ds extends nn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new G,f=new G,m=[],g=[],v=[],x=[];for(let d=0;d<=n;d++){const b=[],p=d/n;let _=0;d===0&&o===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const T=C/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+p*a),h.y=e*Math.cos(o+p*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+p*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),x.push(T+_,1-p),b.push(l++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const p=u[d][b+1],_=u[d][b],C=u[d+1][b],T=u[d+1][b+1];(d!==0||o>0)&&m.push(p,_,T),(d!==n-1||c<Math.PI)&&m.push(_,C,T)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ge extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vf extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yf extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ma extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ws=new ut,sc=new G,oc=new G;class Al{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),Ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ws,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ac=new ut,Ki=new G,Xs=new G;class bf extends Al{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ki),Xs.copy(n.position),Xs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xs),n.updateMatrixWorld(),r.makeTranslation(-Ki.x,-Ki.y,-Ki.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,n.coordinateSystem,n.reversedDepth)}}class xa extends ma{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new bf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wl extends yl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sf extends Al{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends ma{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Sf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tf extends ma{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ef extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function cc(i,e,t,n){const r=Cf(n);switch(t){case ll:return i*e;case ra:return i*e/r.components*r.byteLength;case sa:return i*e/r.components*r.byteLength;case oa:return i*e*2/r.components*r.byteLength;case aa:return i*e*2/r.components*r.byteLength;case ul:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case ca:return i*e*4/r.components*r.byteLength;case Xr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(e,8)/4;case xo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case yo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ko:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cf(i){switch(i){case mn:case sl:return{byteLength:1,components:1};case sr:case ol:case Ni:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case ei:case ta:case dn:return{byteLength:4,components:1};case al:case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function Rl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Af(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:wf,alphahash_pars_fragment:Rf,alphamap_fragment:Pf,alphamap_pars_fragment:Df,alphatest_fragment:If,alphatest_pars_fragment:Lf,aomap_fragment:Uf,aomap_pars_fragment:Ff,batching_pars_vertex:Nf,batching_vertex:kf,begin_vertex:Of,beginnormal_vertex:Bf,bsdfs:zf,iridescence_fragment:Gf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:$f,color_fragment:jf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:Kf,common:Jf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:Qf,displacementmap_pars_vertex:ed,displacementmap_vertex:td,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:rd,colorspace_pars_fragment:sd,envmap_fragment:od,envmap_common_pars_fragment:ad,envmap_pars_fragment:cd,envmap_pars_vertex:ld,envmap_physical_pars_fragment:yd,envmap_vertex:ud,fog_vertex:hd,fog_pars_vertex:fd,fog_fragment:dd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:xd,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:vd,lights_toon_fragment:bd,lights_toon_pars_fragment:Sd,lights_phong_fragment:Md,lights_phong_pars_fragment:Td,lights_physical_fragment:Ed,lights_physical_pars_fragment:Cd,lights_fragment_begin:Ad,lights_fragment_maps:wd,lights_fragment_end:Rd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Ld,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Nd,map_particle_pars_fragment:kd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:zd,morphcolor_vertex:Gd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:$d,normal_pars_fragment:jd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:rp,dithering_fragment:sp,dithering_pars_fragment:op,roughnessmap_fragment:ap,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:up,shadowmap_vertex:hp,shadowmask_pars_fragment:fp,skinbase_vertex:dp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:xp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:yp,transmission_fragment:bp,transmission_pars_fragment:Sp,uv_pars_fragment:Mp,uv_pars_vertex:Tp,uv_vertex:Ep,worldpos_vertex:Cp,background_vert:Ap,background_frag:wp,backgroundCube_vert:Rp,backgroundCube_frag:Pp,cube_vert:Dp,cube_frag:Ip,depth_vert:Lp,depth_frag:Up,distanceRGBA_vert:Fp,distanceRGBA_frag:Np,equirect_vert:kp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:zp,meshbasic_vert:Gp,meshbasic_frag:Vp,meshlambert_vert:Hp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:$p,meshnormal_vert:jp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Kp,meshphysical_vert:Jp,meshphysical_frag:Zp,meshtoon_vert:Qp,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:r0,sprite_vert:s0,sprite_frag:o0},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fn={basic:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Lt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Lt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Lt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Lt([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Lt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Lt([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Lt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Lt([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Lt([fe.common,fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Lt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};fn.physical={uniforms:Lt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Gr={r:0,b:0,g:0},qn=new tn,a0=new ut;function c0(i,e,t,n,r,s,o){const a=new qe(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function g(p){let _=p.isScene===!0?p.background:null;return _&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_}function v(p){let _=!1;const C=g(p);C===null?d(a,c):C&&C.isColor&&(d(C,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(p,_){const C=g(_);C&&(C.isCubeTexture||C.mapping===us)?(u===void 0&&(u=new ne(new ge(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ui(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qn.copy(_.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(qn)),u.material.toneMapped=Ze.getTransfer(C.colorSpace)!==at,(h!==C||f!==C.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ne(new fs(2,2),new xn({name:"BackgroundMaterial",uniforms:Ui(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=C,f=C.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){p.getRGB(Gr,vl(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,_,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(a,c)},render:v,addToRenderList:x,dispose:b}}function l0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(M,D,E,y,R){let L=!1;const N=h(y,E,D);s!==N&&(s=N,l(s.object)),L=m(M,y,E,R),L&&g(M,y,E,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,_(M,D,E,y),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,E){const y=E.wireframe===!0;let R=n[M.id];R===void 0&&(R={},n[M.id]=R);let L=R[D.id];L===void 0&&(L={},R[D.id]=L);let N=L[y];return N===void 0&&(N=f(c()),L[y]=N),N}function f(M){const D=[],E=[],y=[];for(let R=0;R<t;R++)D[R]=0,E[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:E,attributeDivisors:y,object:M,attributes:{},index:null}}function m(M,D,E,y){const R=s.attributes,L=D.attributes;let N=0;const O=E.getAttributes();for(const U in O)if(O[U].location>=0){const W=R[U];let Z=L[U];if(Z===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;N++}return s.attributesNum!==N||s.index!==y}function g(M,D,E,y){const R={},L=D.attributes;let N=0;const O=E.getAttributes();for(const U in O)if(O[U].location>=0){let W=L[U];W===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(W=M.instanceColor));const Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),R[U]=Z,N++}s.attributes=R,s.attributesNum=N,s.index=y}function v(){const M=s.newAttributes;for(let D=0,E=M.length;D<E;D++)M[D]=0}function x(M){d(M,0)}function d(M,D){const E=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;E[M]=1,y[M]===0&&(i.enableVertexAttribArray(M),y[M]=1),R[M]!==D&&(i.vertexAttribDivisor(M,D),R[M]=D)}function b(){const M=s.newAttributes,D=s.enabledAttributes;for(let E=0,y=D.length;E<y;E++)D[E]!==M[E]&&(i.disableVertexAttribArray(E),D[E]=0)}function p(M,D,E,y,R,L,N){N===!0?i.vertexAttribIPointer(M,D,E,R,L):i.vertexAttribPointer(M,D,E,y,R,L)}function _(M,D,E,y){v();const R=y.attributes,L=E.getAttributes(),N=D.defaultAttributeValues;for(const O in L){const U=L[O];if(U.location>=0){let z=R[O];if(z===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(z=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(z=M.instanceColor)),z!==void 0){const W=z.normalized,Z=z.itemSize,re=e.get(z);if(re===void 0)continue;const ae=re.buffer,pe=re.type,we=re.bytesPerElement,K=pe===i.INT||pe===i.UNSIGNED_INT||z.gpuType===ta;if(z.isInterleavedBufferAttribute){const Q=z.data,ce=Q.stride,Re=z.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)d(U.location+Ce,Q.meshPerAttribute);M.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)x(U.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Ce=0;Ce<U.locationSize;Ce++)p(U.location+Ce,Z/U.locationSize,pe,W,ce*we,(Re+Z/U.locationSize*Ce)*we,K)}else{if(z.isInstancedBufferAttribute){for(let Q=0;Q<U.locationSize;Q++)d(U.location+Q,z.meshPerAttribute);M.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Q=0;Q<U.locationSize;Q++)x(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Q=0;Q<U.locationSize;Q++)p(U.location+Q,Z/U.locationSize,pe,W,Z*we,Z/U.locationSize*Q*we,K)}}else if(N!==void 0){const W=N[O];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(U.location,W);break;case 3:i.vertexAttrib3fv(U.location,W);break;case 4:i.vertexAttrib4fv(U.location,W);break;default:i.vertexAttrib1fv(U.location,W)}}}}b()}function C(){I();for(const M in n){const D=n[M];for(const E in D){const y=D[E];for(const R in y)u(y[R].object),delete y[R];delete D[E]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const E in D){const y=D[E];for(const R in y)u(y[R].object),delete y[R];delete D[E]}delete n[M.id]}function A(M){for(const D in n){const E=n[D];if(E[M.id]===void 0)continue;const y=E[M.id];for(const R in y)u(y[R].object),delete y[R];delete E[M.id]}}function I(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:x,disableUnusedAttributes:b}}function u0(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function c(l,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function h0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:b,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function f0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Kn,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!x)s?u(null):l();else{const b=s?0:n,p=b*4;let _=d.clippingState||null;c.value=_,_=u(g,f,p,m);for(let C=0;C!==p;++C)_[C]=t[C];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=c.value,g!==!0||x===null){const d=m+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(x===null||x.length<d)&&(x=new Float32Array(d));for(let p=0,_=m;p!==v;++p,_+=4)o.copy(h[p]).applyMatrix4(b,a),o.normal.toArray(x,_),x[_+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function d0(i){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=Di:a===fo&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===fo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const kn=4,lc=[.125,.215,.35,.446,.526,.582],Zn=20,p0=256,Ji=new wl,uc=new qe;let $s=null,js=0,qs=0,Ys=!1;const m0=new G;class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=m0}=s;$s=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($s,js,qs),this._renderer.xr.enabled=Ys,e.scissorTest=!1,Ei(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ni,format:ln,colorSpace:Li,depthBuffer:!1},r=fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x0(s)),this._blurMaterial=_0(s,e,t),this._ggxMaterial=g0(s,e,t)}return r}_compileMaterial(e){const t=new ne(new nn,e);this._renderer.compile(t,Ji)}_sceneToCubeUV(e,t,n,r,s){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(uc),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new ge,new pr({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let d=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,d=!0):(x.color.copy(uc),d=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(c.up.set(0,l[p],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[p],s.y,s.z)):_===1?(c.up.set(0,0,l[p]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[p],s.z)):(c.up.set(0,l[p],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[p]));const C=this._cubeSize;Ei(r,_*C,p>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(v,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ei(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ji)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,m=h*f,{_lodMax:g}=this,v=this._sizeLods[n],x=3*v*(n>g-kn?n-g+kn:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Ei(s,x,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Ji),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ei(e,x,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Ji)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):Zn;x>Zn&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zn}`);const d=[];let b=0;for(let A=0;A<Zn;++A){const I=A/v,S=Math.exp(-I*I/2);d.push(S),A===0?b+=S:A<x&&(b+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=g,f.mipInt.value=p-n;const _=this._sizeLods[r],C=3*_*(r>p-kn?r-p+kn:0),T=4*(this._cubeSize-_);Ei(t,C,T,3*_,2*_),c.setRenderTarget(t),c.render(h,Ji)}}function x0(i){const e=[],t=[],n=[];let r=i;const s=i-kn+1+lc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-kn?c=lc[o-i+kn-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,x=2,d=1,b=new Float32Array(v*g*m),p=new Float32Array(x*g*m),_=new Float32Array(d*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,I=T>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(S,v*g*T),p.set(f,x*g*T);const M=[T,T,T,T,T,T];_.set(M,d*g*T)}const C=new nn;C.setAttribute("position",new en(b,v)),C.setAttribute("uv",new en(p,x)),C.setAttribute("faceIndex",new en(_,d)),n.push(new ne(C,null)),r>kn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function fc(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ei(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function g0(i,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ps(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function _0(i,e,t){const n=new Float32Array(Zn),r=new G(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function dc(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function pc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ho||c===fo,u=c===Di||c===Ii;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hc(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new hc(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&lr("WebGLRenderer: "+n+" extension not supported."),r}}}function b0(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const b=m.array;v=m.version;for(let p=0,_=b.length;p<_;p+=3){const C=b[p+0],T=b[p+1],A=b[p+2];f.push(C,T,T,A,A,C)}}else if(g!==void 0){const b=g.array;v=g.version;for(let p=0,_=b.length/3-1;p<_;p+=3){const C=p+0,T=p+1,A=p+2;f.push(C,T,T,A,A,C)}}else return;const x=new(dl(f)?_l:gl)(f,1);x.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,x)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function S0(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let x=0;for(let d=0;d<g;d++)x+=m[d];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],v[d]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,v,0,g);let d=0;for(let b=0;b<g;b++)d+=m[b]*v[b];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function M0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function T0(i,e,t){const n=new WeakMap,r=new ct;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let C=a.attributes.position.count*_,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*h),I=new pl(A,C,T,h);I.type=dn,I.needsUpdate=!0;const S=_*4;for(let D=0;D<h;D++){const E=d[D],y=b[D],R=p[D],L=C*T*4*D;for(let N=0;N<E.count;N++){const O=N*S;g===!0&&(r.fromBufferAttribute(E,N),A[L+O+0]=r.x,A[L+O+1]=r.y,A[L+O+2]=r.z,A[L+O+3]=0),v===!0&&(r.fromBufferAttribute(y,N),A[L+O+4]=r.x,A[L+O+5]=r.y,A[L+O+6]=r.z,A[L+O+7]=0),x===!0&&(r.fromBufferAttribute(R,N),A[L+O+8]=r.x,A[L+O+9]=r.y,A[L+O+10]=r.z,A[L+O+11]=R.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new He(C,T)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<l.length;x++)g+=l[x];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function E0(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Pl=new wt,mc=new El(1,1),Dl=new pl,Il=new Hh,Ll=new bl,xc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),yc=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=xc[r];if(s===void 0&&(s=new Float32Array(r),xc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ms(i,e){let t=gc[e];t===void 0&&(t=new Int32Array(e),gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function w0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),bt(t,n)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),bt(t,n)}}function I0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),bt(t,n)}}function L0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function k0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function G0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=fl,s=mc):s=Pl,t.setTexture2D(e||s,r)}function V0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Il,r)}function H0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ll,r)}function W0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dl,r)}function X0(i){switch(i){case 5126:return C0;case 35664:return A0;case 35665:return w0;case 35666:return R0;case 35674:return P0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return U0;case 35668:case 35672:return F0;case 35669:case 35673:return N0;case 5125:return k0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return W0}}function $0(i,e){i.uniform1fv(this.addr,e)}function j0(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function q0(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Y0(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function K0(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J0(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Z0(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q0(i,e){i.uniform1iv(this.addr,e)}function em(i,e){i.uniform2iv(this.addr,e)}function tm(i,e){i.uniform3iv(this.addr,e)}function nm(i,e){i.uniform4iv(this.addr,e)}function im(i,e){i.uniform1uiv(this.addr,e)}function rm(i,e){i.uniform2uiv(this.addr,e)}function sm(i,e){i.uniform3uiv(this.addr,e)}function om(i,e){i.uniform4uiv(this.addr,e)}function am(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Pl,s[o])}function cm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Il,s[o])}function lm(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ll,s[o])}function um(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);yt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dl,s[o])}function hm(i){switch(i){case 5126:return $0;case 35664:return j0;case 35665:return q0;case 35666:return Y0;case 35674:return K0;case 35675:return J0;case 35676:return Z0;case 5124:case 35670:return Q0;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return rm;case 36295:return sm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return um}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}}class dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}}class pm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function bc(i,e){i.seq.push(e),i.map[e.id]=e}function mm(i,e,t){const n=i.name,r=n.length;for(Ks.lastIndex=0;;){const s=Ks.exec(n),o=Ks.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){bc(t,l===void 0?new fm(a,i,e):new dm(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new pm(a),bc(t,h)),t=h}}}class Yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xm=37297;let gm=0;function _m(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Mc=new $e;function vm(i){Ze._getMatrix(Mc,Ze.workingColorSpace,i);const e=`mat3( ${Mc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case is:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+_m(i.getShaderSource(e),a)}else return s}function ym(i,e){const t=vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(i,e){let t;switch(e){case nh:t="Linear";break;case ih:t="Reinhard";break;case rh:t="Cineon";break;case sh:t="ACESFilmic";break;case ah:t="AgX";break;case ch:t="Neutral";break;case oh:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new G;function Sm(){Ze.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Tm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Em(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function Ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(Cm,wm)}const Am=new Map;function wm(i,e){let t=je[e];if(t===void 0){const n=Am.get(e);if(n!==void 0)t=je[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(Rm,Pm)}function Pm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Um(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case il:e="ENVMAP_BLENDING_MULTIPLY";break;case eh:e="ENVMAP_BLENDING_MIX";break;case th:e="ENVMAP_BLENDING_ADD";break}return e}function Fm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Nm(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Dm(t),l=Im(t),u=Lm(t),h=Um(t),f=Fm(t),m=Mm(t),g=Tm(s),v=r.createProgram();let x,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),d.length>0&&(d+=`
`)):(x=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),d=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ym("linearToOutputTexel",t.outputColorSpace),Sm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Xo(o),o=Ec(o,t),o=Cc(o,t),a=Xo(a),a=Ec(a,t),a=Cc(a,t),o=Ac(o),a=Ac(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const p=b+x+o,_=b+d+a,C=Sc(r,r.VERTEX_SHADER,p),T=Sc(r,r.FRAGMENT_SHADER,_);r.attachShader(v,C),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const E=r.getProgramInfoLog(v)||"",y=r.getShaderInfoLog(C)||"",R=r.getShaderInfoLog(T)||"",L=E.trim(),N=y.trim(),O=R.trim();let U=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,C,T);else{const W=Tc(r,C,"vertex"),Z=Tc(r,T,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+W+`
`+Z)}else L!==""?Ve("WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(z=!1);z&&(D.diagnostics={runnable:U,programLog:L,vertexShader:{log:N,prefix:x},fragmentShader:{log:O,prefix:d}})}r.deleteShader(C),r.deleteShader(T),I=new Yr(r,v),S=Em(r,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,xm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let km=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bm(e),t.set(e,n)),n}}class Bm{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}}function zm(i,e,t,n,r,s,o){const a=new ml,c=new Om,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,M,D,E,y){const R=E.fog,L=y.geometry,N=S.isMeshStandardMaterial?E.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||N),U=O&&O.mapping===us?O.image.height:null,z=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&Ve("WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=W!==void 0?W.length:0;let re=0;L.morphAttributes.position!==void 0&&(re=1),L.morphAttributes.normal!==void 0&&(re=2),L.morphAttributes.color!==void 0&&(re=3);let ae,pe,we,K;if(z){const st=fn[z];ae=st.vertexShader,pe=st.fragmentShader}else ae=S.vertexShader,pe=S.fragmentShader,c.update(S),we=c.getVertexShaderID(S),K=c.getFragmentShaderID(S);const Q=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Re=y.isInstancedMesh===!0,Ce=y.isBatchedMesh===!0,Ne=!!S.map,it=!!S.matcap,ke=!!O,et=!!S.aoMap,k=!!S.lightMap,Xe=!!S.bumpMap,We=!!S.normalMap,Qe=!!S.displacementMap,ve=!!S.emissiveMap,rt=!!S.metalnessMap,Ae=!!S.roughnessMap,Ue=S.anisotropy>0,F=S.clearcoat>0,w=S.dispersion>0,X=S.iridescence>0,Y=S.sheen>0,J=S.transmission>0,$=Ue&&!!S.anisotropyMap,be=F&&!!S.clearcoatMap,ie=F&&!!S.clearcoatNormalMap,Se=F&&!!S.clearcoatRoughnessMap,xe=X&&!!S.iridescenceMap,te=X&&!!S.iridescenceThicknessMap,oe=Y&&!!S.sheenColorMap,Ie=Y&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,_e=!!S.specularColorMap,Be=!!S.specularIntensityMap,B=J&&!!S.transmissionMap,de=J&&!!S.thicknessMap,ue=!!S.gradientMap,he=!!S.alphaMap,se=S.alphaTest>0,ee=!!S.alphaHash,Te=!!S.extensions;let ze=Bn;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ht={shaderID:z,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:pe,defines:S.defines,customVertexShaderID:we,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&y._colorsTexture!==null,instancing:Re,instancingColor:Re&&y.instanceColor!==null,instancingMorph:Re&&y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Li,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:it,envMap:ke,envMapMode:ke&&O.mapping,envMapCubeUVHeight:U,aoMap:et,lightMap:k,bumpMap:Xe,normalMap:We,displacementMap:f&&Qe,emissiveMap:ve,normalMapObjectSpace:We&&S.normalMapType===fh,normalMapTangentSpace:We&&S.normalMapType===hl,metalnessMap:rt,roughnessMap:Ae,anisotropy:Ue,anisotropyMap:$,clearcoat:F,clearcoatMap:be,clearcoatNormalMap:ie,clearcoatRoughnessMap:Se,dispersion:w,iridescence:X,iridescenceMap:xe,iridescenceThicknessMap:te,sheen:Y,sheenColorMap:oe,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:_e,specularIntensityMap:Be,transmission:J,transmissionMap:B,thicknessMap:de,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Ai&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:se,alphaHash:ee,combine:S.combine,mapUv:Ne&&v(S.map.channel),aoMapUv:et&&v(S.aoMap.channel),lightMapUv:k&&v(S.lightMap.channel),bumpMapUv:Xe&&v(S.bumpMap.channel),normalMapUv:We&&v(S.normalMap.channel),displacementMapUv:Qe&&v(S.displacementMap.channel),emissiveMapUv:ve&&v(S.emissiveMap.channel),metalnessMapUv:rt&&v(S.metalnessMap.channel),roughnessMapUv:Ae&&v(S.roughnessMap.channel),anisotropyMapUv:$&&v(S.anisotropyMap.channel),clearcoatMapUv:be&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(S.sheenRoughnessMap.channel),specularMapUv:Pe&&v(S.specularMap.channel),specularColorMapUv:_e&&v(S.specularColorMap.channel),specularIntensityMapUv:Be&&v(S.specularIntensityMap.channel),transmissionMapUv:B&&v(S.transmissionMap.channel),thicknessMapUv:de&&v(S.thicknessMap.channel),alphaMapUv:he&&v(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(We||Ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!L.attributes.uv&&(Ne||he),fog:!!R,useFog:S.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:y.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===Ut,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Te&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(M,S),p(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function p(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let D;if(M){const E=fn[M];D=rf.clone(E.uniforms)}else D=S.uniforms;return D}function C(S,M){let D;for(let E=0,y=u.length;E<y;E++){const R=u[E];if(R.cacheKey===M){D=R,++D.usedTimes;break}}return D===void 0&&(D=new Nm(i,M,S,s),u.push(D)),D}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function I(){c.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:I}}function Gm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,v,x){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=x),e++,d}function a(h,f,m,g,v,x){const d=o(h,f,m,g,v,x);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,g,v,x){const d=o(h,f,m,g,v,x);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Vm),n.length>1&&n.sort(f||Rc),r.length>1&&r.sort(f||Rc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Hm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Pc,i.set(n,[o])):r>=s.length?(o=new Pc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Xm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $m=0;function jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qm(i){const e=new Wm,t=Xm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const r=new G,s=new ut,o=new ut;function a(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,x=0,d=0,b=0,p=0,_=0,C=0,T=0,A=0;l.sort(jm);for(let S=0,M=l.length;S<M;S++){const D=l[S],E=D.color,y=D.intensity,R=D.distance,L=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=E.r*y,h+=E.g*y,f+=E.b*y;else if(D.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(D.sh.coefficients[N],y);A++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=L,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=N,m++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(E).multiplyScalar(y),N.distance=R,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,n.spot[v]=N;const O=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,O.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=O.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=L,_++}v++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(E).multiplyScalar(y),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),n.rectArea[x]=N,x++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity),N.distance=D.distance,N.decay=D.decay,D.castShadow){const O=D.shadow,U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=D.shadow.matrix,p++}n.point[g]=N,g++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(y),N.groundColor.copy(D.groundColor).multiplyScalar(y),n.hemi[d]=N,d++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==x||I.hemiLength!==d||I.numDirectionalShadows!==b||I.numPointShadows!==p||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=x,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=_+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=x,I.hemiLength=d,I.numDirectionalShadows=b,I.numPointShadows=p,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=A,n.version=$m++)}function c(l,u){let h=0,f=0,m=0,g=0,v=0;const x=u.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const p=l[d];if(p.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),h++}else if(p.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),m++}else if(p.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),o.identity(),s.copy(p.matrixWorld),s.premultiply(x),o.extractRotation(s),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(p.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),f++}else if(p.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(x),v++}}}return{setup:a,setupView:c,state:n}}function Dc(i){const e=new qm(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Ym(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dc(i),e.set(r,[a])):s>=o.length?(a=new Dc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zm(i,e,t){let n=new fa;const r=new He,s=new He,o=new ct,a=new vf({depthPacking:hh}),c=new yf,l={},u=t.maxTextureSize,h={[Gn]:Ut,[Ut]:Gn,[En]:En},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Km,fragmentShader:Jm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ne(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let d=this.type;this.render=function(T,A,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),E=i.state;E.setBlending(An),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);const y=d!==Mn&&this.type===Mn,R=d===Mn&&this.type!==Mn;for(let L=0,N=T.length;L<N;L++){const O=T[L],U=O.shadow;if(U===void 0){Ve("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||y===!0||R===!0){const Z=this.type!==Mn?{minFilter:Wt,magFilter:Wt}:{};U.map!==null&&U.map.dispose(),U.map=new ti(r.x,r.y,Z),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const W=U.getViewportCount();for(let Z=0;Z<W;Z++){const re=U.getViewport(Z);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),E.viewport(o),U.updateMatrices(O,Z),n=U.getFrustum(),_(A,I,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Mn&&b(U,I),U.needsUpdate=!1}d=this.type,x.needsUpdate=!1,i.setRenderTarget(S,M,D)};function b(T,A){const I=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,m,v,null)}function p(T,A,I,S){let M=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const E=M.uuid,y=A.uuid;let R=l[E];R===void 0&&(R={},l[E]=R);let L=R[y];L===void 0&&(L=M.clone(),R[y]=L,A.addEventListener("dispose",C)),M=L}if(M.visible=A.visible,M.wireframe=A.wireframe,S===Mn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const E=i.properties.get(M);E.light=I}return M}function _(T,A,I,S,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Mn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const y=e.update(T),R=T.material;if(Array.isArray(R)){const L=y.groups;for(let N=0,O=L.length;N<O;N++){const U=L[N],z=R[U.materialIndex];if(z&&z.visible){const W=p(T,z,S,M);T.onBeforeShadow(i,T,A,I,y,W,U),i.renderBufferDirect(I,null,y,W,T,U),T.onAfterShadow(i,T,A,I,y,W,U)}}}else if(R.visible){const L=p(T,R,S,M);T.onBeforeShadow(i,T,A,I,y,L,null),i.renderBufferDirect(I,null,y,L,T,null),T.onAfterShadow(i,T,A,I,y,L,null)}}const E=T.children;for(let y=0,R=E.length;y<R;y++)_(E[y],A,I,S,M)}function C(T){T.target.removeEventListener("dispose",C);for(const I in l){const S=l[I],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Qm={[ro]:so,[oo]:lo,[ao]:uo,[Pi]:co,[so]:ro,[lo]:oo,[uo]:ao,[co]:Pi};function ex(i,e){function t(){let B=!1;const de=new ct;let ue=null;const he=new ct(0,0,0,0);return{setMask:function(se){ue!==se&&!B&&(i.colorMask(se,se,se,se),ue=se)},setLocked:function(se){B=se},setClear:function(se,ee,Te,ze,ht){ht===!0&&(se*=ze,ee*=ze,Te*=ze),de.set(se,ee,Te,ze),he.equals(de)===!1&&(i.clearColor(se,ee,Te,ze),he.copy(de))},reset:function(){B=!1,ue=null,he.set(-1,0,0,0)}}}function n(){let B=!1,de=!1,ue=null,he=null,se=null;return{setReversed:function(ee){if(de!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),de=ee;const ze=se;se=null,this.setClear(ze)}},getReversed:function(){return de},setTest:function(ee){ee?Q(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!B&&(i.depthMask(ee),ue=ee)},setFunc:function(ee){if(de&&(ee=Qm[ee]),he!==ee){switch(ee){case ro:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case Pi:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=ee}},setLocked:function(ee){B=ee},setClear:function(ee){se!==ee&&(de&&(ee=1-ee),i.clearDepth(ee),se=ee)},reset:function(){B=!1,ue=null,he=null,se=null,de=!1}}}function r(){let B=!1,de=null,ue=null,he=null,se=null,ee=null,Te=null,ze=null,ht=null;return{setTest:function(st){B||(st?Q(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(st){de!==st&&!B&&(i.stencilMask(st),de=st)},setFunc:function(st,hn,rn){(ue!==st||he!==hn||se!==rn)&&(i.stencilFunc(st,hn,rn),ue=st,he=hn,se=rn)},setOp:function(st,hn,rn){(ee!==st||Te!==hn||ze!==rn)&&(i.stencilOp(st,hn,rn),ee=st,Te=hn,ze=rn)},setLocked:function(st){B=st},setClear:function(st){ht!==st&&(i.clearStencil(st),ht=st)},reset:function(){B=!1,de=null,ue=null,he=null,se=null,ee=null,Te=null,ze=null,ht=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,v=!1,x=null,d=null,b=null,p=null,_=null,C=null,T=null,A=new qe(0,0,0),I=0,S=!1,M=null,D=null,E=null,y=null,R=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=O>=2);let z=null,W={};const Z=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),ae=new ct().fromArray(Z),pe=new ct().fromArray(re);function we(B,de,ue,he){const se=new Uint8Array(4),ee=i.createTexture();i.bindTexture(B,ee),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<ue;Te++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(de+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ee}const K={};K[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Pi),Xe(!1),We(Pa),Q(i.CULL_FACE),et(An);function Q(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ce(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Re(B,de){return h[B]!==de?(i.bindFramebuffer(B,de),h[B]=de,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(B,de){let ue=m,he=!1;if(B){ue=f.get(de),ue===void 0&&(ue=[],f.set(de,ue));const se=B.textures;if(ue.length!==se.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=se.length;ee<Te;ee++)ue[ee]=i.COLOR_ATTACHMENT0+ee;ue.length=se.length,he=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,he=!0);he&&i.drawBuffers(ue)}function Ne(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const it={[Jn]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};it[Bu]=i.MIN,it[zu]=i.MAX;const ke={[Gu]:i.ZERO,[Vu]:i.ONE,[Hu]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[ju]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function et(B,de,ue,he,se,ee,Te,ze,ht,st){if(B===An){v===!0&&(ce(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),B!==Nu){if(B!==x||st!==S){if((d!==Jn||_!==Jn)&&(i.blendEquation(i.FUNC_ADD),d=Jn,_=Jn),st)switch(B){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xt("WebGLState: Invalid blending: ",B);break}else switch(B){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ia:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",B);break}b=null,p=null,C=null,T=null,A.set(0,0,0),I=0,x=B,S=st}return}se=se||de,ee=ee||ue,Te=Te||he,(de!==d||se!==_)&&(i.blendEquationSeparate(it[de],it[se]),d=de,_=se),(ue!==b||he!==p||ee!==C||Te!==T)&&(i.blendFuncSeparate(ke[ue],ke[he],ke[ee],ke[Te]),b=ue,p=he,C=ee,T=Te),(ze.equals(A)===!1||ht!==I)&&(i.blendColor(ze.r,ze.g,ze.b,ht),A.copy(ze),I=ht),x=B,S=!1}function k(B,de){B.side===En?ce(i.CULL_FACE):Q(i.CULL_FACE);let ue=B.side===Ut;de&&(ue=!ue),Xe(ue),B.blending===Ai&&B.transparent===!1?et(An):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const he=B.stencilWrite;a.setTest(he),he&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function We(B){B!==Lu?(Q(i.CULL_FACE),B!==D&&(B===Pa?i.cullFace(i.BACK):B===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),D=B}function Qe(B){B!==E&&(N&&i.lineWidth(B),E=B)}function ve(B,de,ue){B?(Q(i.POLYGON_OFFSET_FILL),(y!==de||R!==ue)&&(i.polygonOffset(de,ue),y=de,R=ue)):ce(i.POLYGON_OFFSET_FILL)}function rt(B){B?Q(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Ae(B){B===void 0&&(B=i.TEXTURE0+L-1),z!==B&&(i.activeTexture(B),z=B)}function Ue(B,de,ue){ue===void 0&&(z===null?ue=i.TEXTURE0+L-1:ue=z);let he=W[ue];he===void 0&&(he={type:void 0,texture:void 0},W[ue]=he),(he.type!==B||he.texture!==de)&&(z!==ue&&(i.activeTexture(ue),z=ue),i.bindTexture(B,de||K[B]),he.type=B,he.texture=de)}function F(){const B=W[z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Y(){try{i.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function J(){try{i.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function ie(){try{i.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Se(){try{i.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function xe(){try{i.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function te(){try{i.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function oe(B){ae.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ae.copy(B))}function Ie(B){pe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),pe.copy(B))}function Pe(B,de){let ue=l.get(de);ue===void 0&&(ue=new WeakMap,l.set(de,ue));let he=ue.get(B);he===void 0&&(he=i.getUniformBlockIndex(de,B.name),ue.set(B,he))}function _e(B,de){const he=l.get(de).get(B);c.get(de)!==he&&(i.uniformBlockBinding(de,he,B.__bindingPointIndex),c.set(de,he))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,W={},h={},f=new WeakMap,m=[],g=null,v=!1,x=null,d=null,b=null,p=null,_=null,C=null,T=null,A=new qe(0,0,0),I=0,S=!1,M=null,D=null,E=null,y=null,R=null,ae.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ce,bindFramebuffer:Re,drawBuffers:Ce,useProgram:Ne,setBlending:et,setMaterial:k,setFlipSided:Xe,setCullFace:We,setLineWidth:Qe,setPolygonOffset:ve,setScissorTest:rt,activeTexture:Ae,bindTexture:Ue,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:xe,texImage3D:te,updateUBOMapping:Pe,uniformBlockBinding:_e,texStorage2D:ie,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:be,scissor:oe,viewport:Ie,reset:Be}}function tx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,w){return m?new OffscreenCanvas(F,w):ss("canvas")}function v(F,w,X){let Y=1;const J=Ue(F);if((J.width>X||J.height>X)&&(Y=X/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const $=Math.floor(Y*J.width),be=Math.floor(Y*J.height);h===void 0&&(h=g($,be));const ie=w?g($,be):h;return ie.width=$,ie.height=be,ie.getContext("2d").drawImage(F,0,0,$,be),Ve("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+be+")."),ie}else return"data"in F&&Ve("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),F;return F}function x(F){return F.generateMipmaps}function d(F){i.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(F,w,X,Y,J=!1){if(F!==null){if(i[F]!==void 0)return i[F];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $=w;if(w===i.RED&&(X===i.FLOAT&&($=i.R32F),X===i.HALF_FLOAT&&($=i.R16F),X===i.UNSIGNED_BYTE&&($=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.R8UI),X===i.UNSIGNED_SHORT&&($=i.R16UI),X===i.UNSIGNED_INT&&($=i.R32UI),X===i.BYTE&&($=i.R8I),X===i.SHORT&&($=i.R16I),X===i.INT&&($=i.R32I)),w===i.RG&&(X===i.FLOAT&&($=i.RG32F),X===i.HALF_FLOAT&&($=i.RG16F),X===i.UNSIGNED_BYTE&&($=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RG8UI),X===i.UNSIGNED_SHORT&&($=i.RG16UI),X===i.UNSIGNED_INT&&($=i.RG32UI),X===i.BYTE&&($=i.RG8I),X===i.SHORT&&($=i.RG16I),X===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGB8UI),X===i.UNSIGNED_SHORT&&($=i.RGB16UI),X===i.UNSIGNED_INT&&($=i.RGB32UI),X===i.BYTE&&($=i.RGB8I),X===i.SHORT&&($=i.RGB16I),X===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&($=i.RGBA8UI),X===i.UNSIGNED_SHORT&&($=i.RGBA16UI),X===i.UNSIGNED_INT&&($=i.RGBA32UI),X===i.BYTE&&($=i.RGBA8I),X===i.SHORT&&($=i.RGBA16I),X===i.INT&&($=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),w===i.RGBA){const be=J?is:Ze.getTransfer(Y);X===i.FLOAT&&($=i.RGBA32F),X===i.HALF_FLOAT&&($=i.RGBA16F),X===i.UNSIGNED_BYTE&&($=be===at?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(F,w){let X;return F?w===null||w===ei||w===or?X=i.DEPTH24_STENCIL8:w===dn?X=i.DEPTH32F_STENCIL8:w===sr&&(X=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===or?X=i.DEPTH_COMPONENT24:w===dn?X=i.DEPTH_COMPONENT32F:w===sr&&(X=i.DEPTH_COMPONENT16),X}function C(F,w){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Wt&&F.minFilter!==Jt?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function T(F){const w=F.target;w.removeEventListener("dispose",T),I(w),w.isVideoTexture&&u.delete(w)}function A(F){const w=F.target;w.removeEventListener("dispose",A),M(w)}function I(F){const w=n.get(F);if(w.__webglInit===void 0)return;const X=F.source,Y=f.get(X);if(Y){const J=Y[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(F),Object.keys(Y).length===0&&f.delete(X)}n.remove(F)}function S(F){const w=n.get(F);i.deleteTexture(w.__webglTexture);const X=F.source,Y=f.get(X);delete Y[w.__cacheKey],o.memory.textures--}function M(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let J=0;J<w.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(w.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=F.textures;for(let Y=0,J=X.length;Y<J;Y++){const $=n.get(X[Y]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(X[Y])}n.remove(F)}let D=0;function E(){D=0}function y(){const F=D;return F>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),D+=1,F}function R(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function L(F,w){const X=n.get(F);if(F.isVideoTexture&&rt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&X.__version!==F.version){const Y=F.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,F,w);return}}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function N(F,w){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){K(X,F,w);return}else F.isExternalTexture&&(X.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function O(F,w){const X=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){K(X,F,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function U(F,w){const X=n.get(F);if(F.version>0&&X.__version!==F.version){Q(X,F,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const z={[po]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},W={[Wt]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[ys]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Z={[dh]:i.NEVER,[vh]:i.ALWAYS,[ph]:i.LESS,[fl]:i.LEQUAL,[mh]:i.EQUAL,[_h]:i.GEQUAL,[xh]:i.GREATER,[gh]:i.NOTEQUAL};function re(F,w){if(w.type===dn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jt||w.magFilter===ys||w.magFilter===vr||w.magFilter===Qn||w.minFilter===Jt||w.minFilter===ys||w.minFilter===vr||w.minFilter===Qn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,z[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,z[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,z[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,W[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,W[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wt||w.minFilter!==vr&&w.minFilter!==Qn||w.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ae(F,w){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",T));const Y=w.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const $=R(w);if($!==F.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),J[$].usedTimes++;const be=J[F.__cacheKey];be!==void 0&&(J[F.__cacheKey].usedTimes--,be.usedTimes===0&&S(w)),F.__cacheKey=$,F.__webglTexture=J[$].texture}return X}function pe(F,w,X){return Math.floor(Math.floor(F/X)/w)}function we(F,w,X,Y){const $=F.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,Y,w.data);else{$.sort((te,oe)=>te.start-oe.start);let be=0;for(let te=1;te<$.length;te++){const oe=$[be],Ie=$[te],Pe=oe.start+oe.count,_e=pe(Ie.start,w.width,4),Be=pe(oe.start,w.width,4);Ie.start<=Pe+1&&_e===Be&&pe(Ie.start+Ie.count-1,w.width,4)===_e?oe.count=Math.max(oe.count,Ie.start+Ie.count-oe.start):(++be,$[be]=Ie)}$.length=be+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let te=0,oe=$.length;te<oe;te++){const Ie=$[te],Pe=Math.floor(Ie.start/4),_e=Math.ceil(Ie.count/4),Be=Pe%w.width,B=Math.floor(Pe/w.width),de=_e,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Be,B,de,ue,X,Y,w.data)}F.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function K(F,w,X){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);const J=ae(F,w),$=w.source;t.bindTexture(Y,F.__webglTexture,i.TEXTURE0+X);const be=n.get($);if($.version!==be.__version||J===!0){t.activeTexture(i.TEXTURE0+X);const ie=Ze.getPrimaries(Ze.workingColorSpace),Se=w.colorSpace===Nn?null:Ze.getPrimaries(w.colorSpace),xe=w.colorSpace===Nn||ie===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let te=v(w.image,!1,r.maxTextureSize);te=Ae(w,te);const oe=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type);let Pe=p(w.internalFormat,oe,Ie,w.colorSpace,w.isVideoTexture);re(Y,w);let _e;const Be=w.mipmaps,B=w.isVideoTexture!==!0,de=be.__version===void 0||J===!0,ue=$.dataReady,he=C(w,te);if(w.isDepthTexture)Pe=_(w.format===cr,w.type),de&&(B?t.texStorage2D(i.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,null));else if(w.isDataTexture)if(Be.length>0){B&&de&&t.texStorage2D(i.TEXTURE_2D,he,Pe,Be[0].width,Be[0].height);for(let se=0,ee=Be.length;se<ee;se++)_e=Be[se],B?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,oe,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,oe,Ie,_e.data);w.generateMipmaps=!1}else B?(de&&t.texStorage2D(i.TEXTURE_2D,he,Pe,te.width,te.height),ue&&we(w,te,oe,Ie)):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,oe,Ie,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Pe,Be[0].width,Be[0].height,te.depth);for(let se=0,ee=Be.length;se<ee;se++)if(_e=Be[se],w.format!==ln)if(oe!==null)if(B){if(ue)if(w.layerUpdates.size>0){const Te=cc(_e.width,_e.height,w.format,w.type);for(const ze of w.layerUpdates){const ht=_e.data.subarray(ze*Te/_e.data.BYTES_PER_ELEMENT,(ze+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,ze,_e.width,_e.height,1,oe,ht)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,te.depth,oe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Pe,_e.width,_e.height,te.depth,0,_e.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,te.depth,oe,Ie,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Pe,_e.width,_e.height,te.depth,0,oe,Ie,_e.data)}else{B&&de&&t.texStorage2D(i.TEXTURE_2D,he,Pe,Be[0].width,Be[0].height);for(let se=0,ee=Be.length;se<ee;se++)_e=Be[se],w.format!==ln?oe!==null?B?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,oe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,_e.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,oe,Ie,_e.data):t.texImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,oe,Ie,_e.data)}else if(w.isDataArrayTexture)if(B){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Pe,te.width,te.height,te.depth),ue)if(w.layerUpdates.size>0){const se=cc(te.width,te.height,w.format,w.type);for(const ee of w.layerUpdates){const Te=te.data.subarray(ee*se/te.data.BYTES_PER_ELEMENT,(ee+1)*se/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,te.width,te.height,1,oe,Ie,Te)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(w.isData3DTexture)B?(de&&t.texStorage3D(i.TEXTURE_3D,he,Pe,te.width,te.height,te.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,oe,Ie,te.data);else if(w.isFramebufferTexture){if(de)if(B)t.texStorage2D(i.TEXTURE_2D,he,Pe,te.width,te.height);else{let se=te.width,ee=te.height;for(let Te=0;Te<he;Te++)t.texImage2D(i.TEXTURE_2D,Te,Pe,se,ee,0,oe,Ie,null),se>>=1,ee>>=1}}else if(Be.length>0){if(B&&de){const se=Ue(Be[0]);t.texStorage2D(i.TEXTURE_2D,he,Pe,se.width,se.height)}for(let se=0,ee=Be.length;se<ee;se++)_e=Be[se],B?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,oe,Ie,_e):t.texImage2D(i.TEXTURE_2D,se,Pe,oe,Ie,_e);w.generateMipmaps=!1}else if(B){if(de){const se=Ue(te);t.texStorage2D(i.TEXTURE_2D,he,Pe,se.width,se.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,Pe,oe,Ie,te);x(w)&&d(Y),be.__version=$.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Q(F,w,X){if(w.image.length!==6)return;const Y=ae(F,w),J=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+X);const $=n.get(J);if(J.version!==$.__version||Y===!0){t.activeTexture(i.TEXTURE0+X);const be=Ze.getPrimaries(Ze.workingColorSpace),ie=w.colorSpace===Nn?null:Ze.getPrimaries(w.colorSpace),Se=w.colorSpace===Nn||be===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const xe=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,oe=[];for(let ee=0;ee<6;ee++)!xe&&!te?oe[ee]=v(w.image[ee],!0,r.maxCubemapSize):oe[ee]=te?w.image[ee].image:w.image[ee],oe[ee]=Ae(w,oe[ee]);const Ie=oe[0],Pe=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Be=p(w.internalFormat,Pe,_e,w.colorSpace),B=w.isVideoTexture!==!0,de=$.__version===void 0||Y===!0,ue=J.dataReady;let he=C(w,Ie);re(i.TEXTURE_CUBE_MAP,w);let se;if(xe){B&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Be,Ie.width,Ie.height);for(let ee=0;ee<6;ee++){se=oe[ee].mipmaps;for(let Te=0;Te<se.length;Te++){const ze=se[Te];w.format!==ln?Pe!==null?B?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Be,ze.width,ze.height,0,ze.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,ze.width,ze.height,Pe,_e,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Be,ze.width,ze.height,0,Pe,_e,ze.data)}}}else{if(se=w.mipmaps,B&&de){se.length>0&&he++;const ee=Ue(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(te){B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,oe[ee].width,oe[ee].height,Pe,_e,oe[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,oe[ee].width,oe[ee].height,0,Pe,_e,oe[ee].data);for(let Te=0;Te<se.length;Te++){const ht=se[Te].image[ee].image;B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ht.width,ht.height,Pe,_e,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Be,ht.width,ht.height,0,Pe,_e,ht.data)}}else{B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,_e,oe[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Pe,_e,oe[ee]);for(let Te=0;Te<se.length;Te++){const ze=se[Te];B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Pe,_e,ze.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Be,Pe,_e,ze.image[ee])}}}x(w)&&d(i.TEXTURE_CUBE_MAP),$.__version=J.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ce(F,w,X,Y,J,$){const be=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),Se=p(X.internalFormat,be,ie,X.colorSpace),xe=n.get(w),te=n.get(X);if(te.__renderTarget=w,!xe.__hasExternalTextures){const oe=Math.max(1,w.width>>$),Ie=Math.max(1,w.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Se,oe,Ie,w.depth,0,be,ie,null):t.texImage2D(J,$,Se,oe,Ie,0,be,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ve(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,te.__webglTexture,0,Qe(w)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,te.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(F,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){const Y=w.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,$=_(w.stencilBuffer,J),be=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=Qe(w);ve(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,$,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,$,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,F)}else{const Y=w.textures;for(let J=0;J<Y.length;J++){const $=Y[J],be=s.convert($.format,$.colorSpace),ie=s.convert($.type),Se=p($.internalFormat,be,ie,$.colorSpace),xe=Qe(w);X&&ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Se,w.width,w.height):ve(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Se,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Se,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const J=Y.__webglTexture,$=Qe(w);if(w.depthTexture.format===ar)ve(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(w.depthTexture.format===cr)ve(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(F){const w=n.get(F),X=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const Y=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=Y}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Y=F.texture.mipmaps;Y&&Y.length>0?Ce(w.__webglFramebuffer[0],F):Ce(w.__webglFramebuffer,F)}else if(X){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=i.createRenderbuffer(),Re(w.__webglDepthbuffer[Y],F,!1);else{const J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else{const Y=F.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Re(w.__webglDepthbuffer,F,!1);else{const J=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(F,w,X){const Y=n.get(F);w!==void 0&&ce(Y.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ne(F)}function ke(F){const w=F.texture,X=n.get(F),Y=n.get(w);F.addEventListener("dispose",A);const J=F.textures,$=F.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,o.memory.textures++),$){X.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ie]=[];for(let Se=0;Se<w.mipmaps.length;Se++)X.__webglFramebuffer[ie][Se]=i.createFramebuffer()}else X.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)X.__webglFramebuffer[ie]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(be)for(let ie=0,Se=J.length;ie<Se;ie++){const xe=n.get(J[ie]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&ve(F)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const Se=J[ie];X.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ie]);const xe=s.convert(Se.format,Se.colorSpace),te=s.convert(Se.type),oe=p(Se.internalFormat,xe,te,Se.colorSpace,F.isXRRenderTarget===!0),Ie=Qe(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,oe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,X.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(X.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),re(i.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ce(X.__webglFramebuffer[ie][Se],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se);else ce(X.__webglFramebuffer[ie],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);x(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ie=0,Se=J.length;ie<Se;ie++){const xe=J[ie],te=n.get(xe);let oe=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(oe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),re(oe,xe),ce(X.__webglFramebuffer,F,xe,i.COLOR_ATTACHMENT0+ie,oe,0),x(xe)&&d(oe)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ie=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),re(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)ce(X.__webglFramebuffer[Se],F,w,i.COLOR_ATTACHMENT0,ie,Se);else ce(X.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,ie,0);x(w)&&d(ie),t.unbindTexture()}F.depthBuffer&&Ne(F)}function et(F){const w=F.textures;for(let X=0,Y=w.length;X<Y;X++){const J=w[X];if(x(J)){const $=b(F),be=n.get(J).__webglTexture;t.bindTexture($,be),d($),t.unbindTexture()}}}const k=[],Xe=[];function We(F){if(F.samples>0){if(ve(F)===!1){const w=F.textures,X=F.width,Y=F.height;let J=i.COLOR_BUFFER_BIT;const $=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(F),ie=w.length>1;if(ie)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Se=F.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const te=n.get(w[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,X,Y,0,0,X,Y,J,i.NEAREST),c===!0&&(k.length=0,Xe.length=0,k.push(i.COLOR_ATTACHMENT0+xe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(k.push($),Xe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,be.__webglColorRenderbuffer[xe]);const te=n.get(w[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){const w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Qe(F){return Math.min(r.maxSamples,F.samples)}function ve(F){const w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function rt(F){const w=o.render.frame;u.get(F)!==w&&(u.set(F,w),F.update())}function Ae(F,w){const X=F.colorSpace,Y=F.format,J=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==Li&&X!==Nn&&(Ze.getTransfer(X)===at?(Y!==ln||J!==mn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",X)),w}function Ue(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=y,this.resetTextureUnits=E,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=it,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ve}function nx(i,e){function t(n,r=Nn){let s;const o=Ze.getTransfer(r);if(n===mn)return i.UNSIGNED_BYTE;if(n===na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===ol)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===ul)return i.RGB;if(n===ln)return i.RGBA;if(n===ar)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===oa)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===Xr||n===$r||n===jr||n===qr)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===go||n===_o||n===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===bo||n===So)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yo||n===bo)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===So)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===To||n===Eo||n===Co||n===Ao||n===wo||n===Ro||n===Po||n===Do||n===Io||n===Lo||n===Uo||n===Fo||n===No)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Oo||n===Bo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ko)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===Go||n===Vo||n===Ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:ix,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends ki{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",x=new sx,d={},b=t.getContextAttributes();let p=null,_=null;const C=[],T=[],A=new He;let I=null;const S=new Ht;S.viewport=new ct;const M=new Ht;M.viewport=new ct;const D=[S,M],E=new Ef;let y=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=C[K];return Q===void 0&&(Q=new Gs,C[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=C[K];return Q===void 0&&(Q=new Gs,C[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=C[K];return Q===void 0&&(Q=new Gs,C[K]=Q),Q.getHandSpace()};function L(K){const Q=T.indexOf(K.inputSource);if(Q===-1)return;const ce=C[Q];ce!==void 0&&(ce.update(K.inputSource,K.frame,l||o),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",O);for(let K=0;K<C.length;K++){const Q=T[K];Q!==null&&(T[K]=null,C[K].disconnect(Q))}y=null,R=null,x.reset();for(const K in d)delete d[K];e.setRenderTarget(p),m=null,f=null,h=null,r=null,_=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",N),r.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Re=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=b.stencil?cr:ar,Re=b.stencil?or:ei);const Ne={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ti(f.textureWidth,f.textureHeight,{format:ln,type:mn,depthTexture:new El(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ti(m.framebufferWidth,m.framebufferHeight,{format:ln,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(K){for(let Q=0;Q<K.removed.length;Q++){const ce=K.removed[Q],Re=T.indexOf(ce);Re>=0&&(T[Re]=null,C[Re].disconnect(ce))}for(let Q=0;Q<K.added.length;Q++){const ce=K.added[Q];let Re=T.indexOf(ce);if(Re===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=T.length){T.push(ce),Re=Ne;break}else if(T[Ne]===null){T[Ne]=ce,Re=Ne;break}if(Re===-1)break}const Ce=C[Re];Ce&&Ce.connect(ce)}}const U=new G,z=new G;function W(K,Q,ce){U.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ce.matrixWorld);const Re=U.distanceTo(z),Ce=Q.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,it=Ce[14]/(Ce[10]-1),ke=Ce[14]/(Ce[10]+1),et=(Ce[9]+1)/Ce[5],k=(Ce[9]-1)/Ce[5],Xe=(Ce[8]-1)/Ce[0],We=(Ne[8]+1)/Ne[0],Qe=it*Xe,ve=it*We,rt=Re/(-Xe+We),Ae=rt*-Xe;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ae),K.translateZ(rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ue=it+rt,F=ke+rt,w=Qe-Ae,X=ve+(Re-Ae),Y=et*ke/F*Ue,J=k*ke/F*Ue;K.projectionMatrix.makePerspective(w,X,Y,J,Ue,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Z(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let Q=K.near,ce=K.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),E.near=M.near=S.near=Q,E.far=M.far=S.far=ce,(y!==E.near||R!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),y=E.near,R=E.far),E.layers.mask=K.layers.mask|6,S.layers.mask=E.layers.mask&3,M.layers.mask=E.layers.mask&5;const Re=K.parent,Ce=E.cameras;Z(E,Re);for(let Ne=0;Ne<Ce.length;Ne++)Z(Ce[Ne],Re);Ce.length===2?W(E,S,M):E.projectionMatrix.copy(S.projectionMatrix),re(K,E,Re)};function re(K,Q,ce){ce===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ur*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)},this.getCameraTexture=function(K){return d[K]};let ae=null;function pe(K,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Re=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,Re=!0);for(let ke=0;ke<ce.length;ke++){const et=ce[ke];let k=null;if(m!==null)k=m.getViewport(et);else{const We=h.getViewSubImage(f,et);k=We.viewport,ke===0&&(e.setRenderTargetTextures(_,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(_))}let Xe=D[ke];Xe===void 0&&(Xe=new Ht,Xe.layers.enable(ke),Xe.viewport=new ct,D[ke]=Xe),Xe.matrix.fromArray(et.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(et.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(k.x,k.y,k.width,k.height),ke===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Re===!0&&E.cameras.push(Xe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const ke=h.getDepthInformation(ce[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,r.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let ke=0;ke<ce.length;ke++){const et=ce[ke].camera;if(et){let k=d[et];k||(k=new Cl,d[et]=k);const Xe=h.getCameraImage(et);k.sourceTexture=Xe}}}}for(let ce=0;ce<C.length;ce++){const Re=T[ce],Ce=C[ce];Re!==null&&Ce!==void 0&&Ce.update(Re,Q,l||o)}ae&&ae(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const we=new Rl;we.setAnimationLoop(pe),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const Yn=new tn,ax=new ut;function cx(i,e){function t(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function n(x,d){d.color.getRGB(x.fogColor.value,vl(i)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,b,p,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),h(x,d)):d.isMeshPhongMaterial?(s(x,d),u(x,d)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,_)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),v(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(o(x,d),d.isLineDashedMaterial&&a(x,d)):d.isPointsMaterial?c(x,d,b,p):d.isSpriteMaterial?l(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,t(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Ut&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,t(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Ut&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,t(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,t(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const b=e.get(d),p=b.envMap,_=b.envMapRotation;p&&(x.envMap.value=p,Yn.copy(_),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),x.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Yn)),x.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,x.aoMapTransform))}function o(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform))}function a(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,b,p){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*b,x.scale.value=p*.5,d.map&&(x.map.value=d.map,t(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function l(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function h(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,b){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ut&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function v(x,d){const b=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lx(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,p){const _=p.program;n.uniformBlockBinding(b,_)}function l(b,p){let _=r[b.id];_===void 0&&(g(b),_=u(b),r[b.id]=_,b.addEventListener("dispose",x));const C=p.program;n.updateUBOMapping(b,C);const T=e.render.frame;s[b.id]!==T&&(f(b),s[b.id]=T)}function u(b){const p=h();b.__bindingPointIndex=p;const _=i.createBuffer(),C=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,_),_}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const p=r[b.id],_=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let T=0,A=_.length;T<A;T++){const I=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,M=I.length;S<M;S++){const D=I[S];if(m(D,T,S,C)===!0){const E=D.__offset,y=Array.isArray(D.value)?D.value:[D.value];let R=0;for(let L=0;L<y.length;L++){const N=y[L],O=v(N);typeof N=="number"||typeof N=="boolean"?(D.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,E+R,D.__data)):N.isMatrix3?(D.__data[0]=N.elements[0],D.__data[1]=N.elements[1],D.__data[2]=N.elements[2],D.__data[3]=0,D.__data[4]=N.elements[3],D.__data[5]=N.elements[4],D.__data[6]=N.elements[5],D.__data[7]=0,D.__data[8]=N.elements[6],D.__data[9]=N.elements[7],D.__data[10]=N.elements[8],D.__data[11]=0):(N.toArray(D.__data,R),R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,p,_,C){const T=b.value,A=p+"_"+_;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const I=C[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(b){const p=b.uniforms;let _=0;const C=16;for(let A=0,I=p.length;A<I;A++){const S=Array.isArray(p[A])?p[A]:[p[A]];for(let M=0,D=S.length;M<D;M++){const E=S[M],y=Array.isArray(E.value)?E.value:[E.value];for(let R=0,L=y.length;R<L;R++){const N=y[R],O=v(N),U=_%C,z=U%O.boundary,W=U+z;_+=z,W!==0&&C-W<O.storage&&(_+=C-W),E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,_+=O.storage}}}const T=_%C;return T>0&&(_+=C-T),b.__size=_,b.__cache={},this}function v(b){const p={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(p.boundary=4,p.storage=4):b.isVector2?(p.boundary=8,p.storage=8):b.isVector3||b.isColor?(p.boundary=16,p.storage=12):b.isVector4?(p.boundary=16,p.storage=16):b.isMatrix3?(p.boundary=48,p.storage=48):b.isMatrix4?(p.boundary=64,p.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",b),p}function x(b){const p=b.target;p.removeEventListener("dispose",x);const _=o.indexOf(p.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function d(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}const ux=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Sn=null;function hx(){return Sn===null&&(Sn=new Tl(ux,32,32,oa,Ni),Sn.minFilter=Jt,Sn.magFilter=Jt,Sn.wrapS=Cn,Sn.wrapT=Cn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class fx{constructor(e={}){const{canvas:t=yh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Set([ca,aa,sa]),v=new Set([mn,ei,sr,or,na,ia]),x=new Uint32Array(4),d=new Int32Array(4);let b=null,p=null;const _=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1;this._outputColorSpace=Yt;let I=0,S=0,M=null,D=-1,E=null;const y=new ct,R=new ct;let L=null;const N=new qe(0);let O=0,U=t.width,z=t.height,W=1,Z=null,re=null;const ae=new ct(0,0,U,z),pe=new ct(0,0,U,z);let we=!1;const K=new fa;let Q=!1,ce=!1;const Re=new ut,Ce=new G,Ne=new ct,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function et(){return M===null?W:1}let k=n;function Xe(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),k===null){const V="webgl2";if(k=Xe(V,P),k===null)throw Xe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let We,Qe,ve,rt,Ae,Ue,F,w,X,Y,J,$,be,ie,Se,xe,te,oe,Ie,Pe,_e,Be,B,de;function ue(){We=new y0(k),We.init(),Be=new nx(k,We),Qe=new h0(k,We,e,Be),ve=new ex(k,We),Qe.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),rt=new M0(k),Ae=new Gm,Ue=new tx(k,We,ve,Ae,Qe,Be,rt),F=new d0(T),w=new v0(T),X=new Af(k),B=new l0(k,X),Y=new b0(k,X,rt,B),J=new E0(k,Y,X,rt),Ie=new T0(k,Qe,Ue),xe=new f0(Ae),$=new zm(T,F,w,We,Qe,B,xe),be=new cx(T,Ae),ie=new Hm,Se=new Ym(We),oe=new c0(T,F,w,ve,J,m,c),te=new Zm(T,J,Qe),de=new lx(k,rt,Qe,ve),Pe=new u0(k,We,rt),_e=new S0(k,We,rt),rt.programs=$.programs,T.capabilities=Qe,T.extensions=We,T.properties=Ae,T.renderLists=ie,T.shadowMap=te,T.state=ve,T.info=rt}ue();const he=new ox(T,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=We.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=We.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(U,z,!1))},this.getSize=function(P){return P.set(U,z)},this.setSize=function(P,V,j=!0){if(he.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,z=V,t.width=Math.floor(P*W),t.height=Math.floor(V*W),j===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(U*W,z*W).floor()},this.setDrawingBufferSize=function(P,V,j){U=P,z=V,W=j,t.width=Math.floor(P*j),t.height=Math.floor(V*j),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,V,j,q){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,V,j,q),ve.viewport(y.copy(ae).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(pe)},this.setScissor=function(P,V,j,q){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,V,j,q),ve.scissor(R.copy(pe).multiplyScalar(W).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(P){ve.setScissorTest(we=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(P=!0,V=!0,j=!0){let q=0;if(P){let H=!1;if(M!==null){const le=M.texture.format;H=g.has(le)}if(H){const le=M.texture.type,me=v.has(le),Ee=oe.getClearColor(),ye=oe.getClearAlpha(),Fe=Ee.r,Oe=Ee.g,De=Ee.b;me?(x[0]=Fe,x[1]=Oe,x[2]=De,x[3]=ye,k.clearBufferuiv(k.COLOR,0,x)):(d[0]=Fe,d[1]=Oe,d[2]=De,d[3]=ye,k.clearBufferiv(k.COLOR,0,d))}else q|=k.COLOR_BUFFER_BIT}V&&(q|=k.DEPTH_BUFFER_BIT),j&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),oe.dispose(),ie.dispose(),Se.dispose(),Ae.dispose(),F.dispose(),w.dispose(),J.dispose(),B.dispose(),de.dispose(),$.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ma),he.removeEventListener("sessionend",Ta),Vn.stop()};function se(P){P.preventDefault(),os("WebGLRenderer: Context Lost."),A=!0}function ee(){os("WebGLRenderer: Context Restored."),A=!1;const P=rt.autoReset,V=te.enabled,j=te.autoUpdate,q=te.needsUpdate,H=te.type;ue(),rt.autoReset=P,te.enabled=V,te.autoUpdate=j,te.needsUpdate=q,te.type=H}function Te(P){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ze(P){const V=P.target;V.removeEventListener("dispose",ze),ht(V)}function ht(P){st(P),Ae.remove(P)}function st(P){const V=Ae.get(P).programs;V!==void 0&&(V.forEach(function(j){$.releaseProgram(j)}),P.isShaderMaterial&&$.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,j,q,H,le){V===null&&(V=it);const me=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Cu(P,V,j,q,H);ve.setMaterial(q,me);let ye=j.index,Fe=1;if(q.wireframe===!0){if(ye=Y.getWireframeAttribute(j),ye===void 0)return;Fe=2}const Oe=j.drawRange,De=j.attributes.position;let Ye=Oe.start*Fe,ot=(Oe.start+Oe.count)*Fe;le!==null&&(Ye=Math.max(Ye,le.start*Fe),ot=Math.min(ot,(le.start+le.count)*Fe)),ye!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,ye.count)):De!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,De.count));const pt=ot-Ye;if(pt<0||pt===1/0)return;B.setup(H,q,Ee,j,ye);let mt,lt=Pe;if(ye!==null&&(mt=X.get(ye),lt=_e,lt.setIndex(mt)),H.isMesh)q.wireframe===!0?(ve.setLineWidth(q.wireframeLinewidth*et()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(H.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),ve.setLineWidth(Le*et()),H.isLineSegments?lt.setMode(k.LINES):H.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else H.isPoints?lt.setMode(k.POINTS):H.isSprite&&lt.setMode(k.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)lr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,ft=H._multiDrawCounts,Je=H._multiDrawCount,Bt=ye?X.get(ye).bytesPerElement:1,oi=Ae.get(q).currentProgram.getUniforms();for(let zt=0;zt<Je;zt++)oi.setValue(k,"_gl_DrawID",zt),lt.render(Le[zt]/Bt,ft[zt])}else if(H.isInstancedMesh)lt.renderInstances(Ye,pt,H.count);else if(j.isInstancedBufferGeometry){const Le=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ft=Math.min(j.instanceCount,Le);lt.renderInstances(Ye,pt,ft)}else lt.render(Ye,pt)};function hn(P,V,j){P.transparent===!0&&P.side===En&&P.forceSinglePass===!1?(P.side=Ut,P.needsUpdate=!0,_r(P,V,j),P.side=Gn,P.needsUpdate=!0,_r(P,V,j),P.side=En):_r(P,V,j)}this.compile=function(P,V,j=null){j===null&&(j=P),p=Se.get(j),p.init(V),C.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),P!==j&&P.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const le=H.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Ee=le[me];hn(Ee,j,H),q.add(Ee)}else hn(le,j,H),q.add(le)}),p=C.pop(),q},this.compileAsync=function(P,V,j=null){const q=this.compile(P,V,j);return new Promise(H=>{function le(){if(q.forEach(function(me){Ae.get(me).currentProgram.isReady()&&q.delete(me)}),q.size===0){H(P);return}setTimeout(le,10)}We.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let rn=null;function Eu(P){rn&&rn(P)}function Ma(){Vn.stop()}function Ta(){Vn.start()}const Vn=new Rl;Vn.setAnimationLoop(Eu),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(P){rn=P,he.setAnimationLoop(P),P===null?Vn.stop():Vn.start()},he.addEventListener("sessionstart",Ma),he.addEventListener("sessionend",Ta),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),P.isScene===!0&&P.onBeforeRender(T,P,V,M),p=Se.get(P,C.length),p.init(V),C.push(p),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Re,pn,V.reversedDepth),ce=this.localClippingEnabled,Q=xe.init(this.clippingPlanes,ce),b=ie.get(P,_.length),b.init(),_.push(b),he.enabled===!0&&he.isPresenting===!0){const le=T.xr.getDepthSensingMesh();le!==null&&_s(le,V,-1/0,T.sortObjects)}_s(P,V,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(Z,re),ke=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ke&&oe.addToRenderList(b,P),this.info.render.frame++,Q===!0&&xe.beginShadows();const j=p.state.shadowsArray;te.render(j,P,V),Q===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=b.opaque,H=b.transmissive;if(p.setupLights(),V.isArrayCamera){const le=V.cameras;if(H.length>0)for(let me=0,Ee=le.length;me<Ee;me++){const ye=le[me];Ca(q,H,P,ye)}ke&&oe.render(P);for(let me=0,Ee=le.length;me<Ee;me++){const ye=le[me];Ea(b,P,ye,ye.viewport)}}else H.length>0&&Ca(q,H,P,V),ke&&oe.render(P),Ea(b,P,V);M!==null&&S===0&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(T,P,V),B.resetDefaultState(),D=-1,E=null,C.pop(),C.length>0?(p=C[C.length-1],Q===!0&&xe.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function _s(P,V,j,q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)j=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){q&&Ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Re);const me=J.update(P),Ee=P.material;Ee.visible&&b.push(P,me,Ee,j,Ne.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){const me=J.update(P),Ee=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ne.copy(P.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ne.copy(me.boundingSphere.center)),Ne.applyMatrix4(P.matrixWorld).applyMatrix4(Re)),Array.isArray(Ee)){const ye=me.groups;for(let Fe=0,Oe=ye.length;Fe<Oe;Fe++){const De=ye[Fe],Ye=Ee[De.materialIndex];Ye&&Ye.visible&&b.push(P,me,Ye,j,Ne.z,De)}}else Ee.visible&&b.push(P,me,Ee,j,Ne.z,null)}}const le=P.children;for(let me=0,Ee=le.length;me<Ee;me++)_s(le[me],V,j,q)}function Ea(P,V,j,q){const{opaque:H,transmissive:le,transparent:me}=P;p.setupLightsView(j),Q===!0&&xe.setGlobalState(T.clippingPlanes,j),q&&ve.viewport(y.copy(q)),H.length>0&&gr(H,V,j),le.length>0&&gr(le,V,j),me.length>0&&gr(me,V,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ca(P,V,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ti(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ni:mn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const le=p.state.transmissionRenderTarget[q.id],me=q.viewport||y;le.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const Ee=T.getRenderTarget(),ye=T.getActiveCubeFace(),Fe=T.getActiveMipmapLevel();T.setRenderTarget(le),T.getClearColor(N),O=T.getClearAlpha(),O<1&&T.setClearColor(16777215,.5),T.clear(),ke&&oe.render(j);const Oe=T.toneMapping;T.toneMapping=Bn;const De=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Q===!0&&xe.setGlobalState(T.clippingPlanes,q),gr(P,j,q),Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let ot=0,pt=V.length;ot<pt;ot++){const mt=V[ot],{object:lt,geometry:Le,material:ft,group:Je}=mt;if(ft.side===En&&lt.layers.test(q.layers)){const Bt=ft.side;ft.side=Ut,ft.needsUpdate=!0,Aa(lt,j,q,Le,ft,Je),ft.side=Bt,ft.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le))}T.setRenderTarget(Ee,ye,Fe),T.setClearColor(N,O),De!==void 0&&(q.viewport=De),T.toneMapping=Oe}function gr(P,V,j){const q=V.isScene===!0?V.overrideMaterial:null;for(let H=0,le=P.length;H<le;H++){const me=P[H],{object:Ee,geometry:ye,group:Fe}=me;let Oe=me.material;Oe.allowOverride===!0&&q!==null&&(Oe=q),Ee.layers.test(j.layers)&&Aa(Ee,V,j,ye,Oe,Fe)}}function Aa(P,V,j,q,H,le){P.onBeforeRender(T,V,j,q,H,le),P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(T,V,j,q,P,le),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=Ut,H.needsUpdate=!0,T.renderBufferDirect(j,V,q,H,P,le),H.side=Gn,H.needsUpdate=!0,T.renderBufferDirect(j,V,q,H,P,le),H.side=En):T.renderBufferDirect(j,V,q,H,P,le),P.onAfterRender(T,V,j,q,H,le)}function _r(P,V,j){V.isScene!==!0&&(V=it);const q=Ae.get(P),H=p.state.lights,le=p.state.shadowsArray,me=H.state.version,Ee=$.getParameters(P,H.state,le,V,j),ye=$.getProgramCacheKey(Ee);let Fe=q.programs;q.environment=P.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(P.isMeshStandardMaterial?w:F).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Fe===void 0&&(P.addEventListener("dispose",ze),Fe=new Map,q.programs=Fe);let Oe=Fe.get(ye);if(Oe!==void 0){if(q.currentProgram===Oe&&q.lightsStateVersion===me)return Ra(P,Ee),Oe}else Ee.uniforms=$.getUniforms(P),P.onBeforeCompile(Ee,T),Oe=$.acquireProgram(Ee,ye),Fe.set(ye,Oe),q.uniforms=Ee.uniforms;const De=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=xe.uniform),Ra(P,Ee),q.needsLights=wu(P),q.lightsStateVersion=me,q.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Oe,q.uniformsList=null,Oe}function wa(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Yr.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Ra(P,V){const j=Ae.get(P);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Cu(P,V,j,q,H){V.isScene!==!0&&(V=it),Ue.resetTextureUnits();const le=V.fog,me=q.isMeshStandardMaterial?V.environment:null,Ee=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Li,ye=(q.isMeshStandardMaterial?w:F).get(q.envMap||me),Fe=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Oe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!j.morphAttributes.position,Ye=!!j.morphAttributes.normal,ot=!!j.morphAttributes.color;let pt=Bn;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=T.toneMapping);const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=mt!==void 0?mt.length:0,Le=Ae.get(q),ft=p.state.lights;if(Q===!0&&(ce===!0||P!==E)){const Dt=P===E&&q.id===D;xe.setState(q,P,Dt)}let Je=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==ft.state.version||Le.outputColorSpace!==Ee||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==ye||q.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==xe.numPlanes||Le.numIntersection!==xe.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Oe||Le.morphTargets!==De||Le.morphNormals!==Ye||Le.morphColors!==ot||Le.toneMapping!==pt||Le.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Le.__version=q.version);let Bt=Le.currentProgram;Je===!0&&(Bt=_r(q,V,H));let oi=!1,zt=!1,zi=!1;const dt=Bt.getUniforms(),Nt=Le.uniforms;if(ve.useProgram(Bt.program)&&(oi=!0,zt=!0,zi=!0),q.id!==D&&(D=q.id,zt=!0),oi||E!==P){ve.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),dt.setValue(k,"projectionMatrix",P.projectionMatrix),dt.setValue(k,"viewMatrix",P.matrixWorldInverse);const kt=dt.map.cameraPosition;kt!==void 0&&kt.setValue(k,Ce.setFromMatrixPosition(P.matrixWorld)),Qe.logarithmicDepthBuffer&&dt.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&dt.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,zt=!0,zi=!0)}if(H.isSkinnedMesh){dt.setOptional(k,H,"bindMatrix"),dt.setOptional(k,H,"bindMatrixInverse");const Dt=H.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),dt.setValue(k,"boneTexture",Dt.boneTexture,Ue))}H.isBatchedMesh&&(dt.setOptional(k,H,"batchingTexture"),dt.setValue(k,"batchingTexture",H._matricesTexture,Ue),dt.setOptional(k,H,"batchingIdTexture"),dt.setValue(k,"batchingIdTexture",H._indirectTexture,Ue),dt.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&dt.setValue(k,"batchingColorTexture",H._colorsTexture,Ue));const jt=j.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ie.update(H,j,Bt),(zt||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,dt.setValue(k,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Nt.envMap.value=ye,Nt.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(Nt.envMapIntensity.value=V.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=hx()),zt&&(dt.setValue(k,"toneMappingExposure",T.toneMappingExposure),Le.needsLights&&Au(Nt,zi),le&&q.fog===!0&&be.refreshFogUniforms(Nt,le),be.refreshMaterialUniforms(Nt,q,W,z,p.state.transmissionRenderTarget[P.id]),Yr.upload(k,wa(Le),Nt,Ue)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Yr.upload(k,wa(Le),Nt,Ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&dt.setValue(k,"center",H.center),dt.setValue(k,"modelViewMatrix",H.modelViewMatrix),dt.setValue(k,"normalMatrix",H.normalMatrix),dt.setValue(k,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Dt=q.uniformsGroups;for(let kt=0,vs=Dt.length;kt<vs;kt++){const Hn=Dt[kt];de.update(Hn,Bt),de.bind(Hn,Bt)}}return Bt}function Au(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function wu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,V,j){const q=Ae.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ae.get(P.texture).__webglTexture=V,Ae.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,V){const j=Ae.get(P);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0};const Ru=k.createFramebuffer();this.setRenderTarget=function(P,V=0,j=0){M=P,I=V,S=j;let q=!0,H=null,le=!1,me=!1;if(P){const ye=Ae.get(P);if(ye.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(ye.__webglFramebuffer===void 0)Ue.setupRenderTarget(P);else if(ye.__hasExternalTextures)Ue.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(ye.__boundDepthTexture!==De){if(De!==null&&Ae.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(P)}}const Fe=P.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(me=!0);const Oe=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?H=Oe[V][j]:H=Oe[V],le=!0):P.samples>0&&Ue.useMultisampledRTT(P)===!1?H=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[j]:H=Oe,y.copy(P.viewport),R.copy(P.scissor),L=P.scissorTest}else y.copy(ae).multiplyScalar(W).floor(),R.copy(pe).multiplyScalar(W).floor(),L=we;if(j!==0&&(H=Ru),ve.bindFramebuffer(k.FRAMEBUFFER,H)&&q&&ve.drawBuffers(P,H),ve.viewport(y),ve.scissor(R),ve.setScissorTest(L),le){const ye=Ae.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,ye.__webglTexture,j)}else if(me){const ye=V;for(let Fe=0;Fe<P.textures.length;Fe++){const Oe=Ae.get(P.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,j,ye)}}else if(P!==null&&j!==0){const ye=Ae.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ye.__webglTexture,j)}D=-1},this.readRenderTargetPixels=function(P,V,j,q,H,le,me,Ee=0){if(!(P&&P.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){ve.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Fe=P.textures[Ee],Oe=Fe.format,De=Fe.type;if(!Qe.textureFormatReadable(Oe)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(De)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-q&&j>=0&&j<=P.height-H&&(P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ee),k.readPixels(V,j,q,H,Be.convert(Oe),Be.convert(De),le))}finally{const Fe=M!==null?Ae.get(M).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(P,V,j,q,H,le,me,Ee=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye)if(V>=0&&V<=P.width-q&&j>=0&&j<=P.height-H){ve.bindFramebuffer(k.FRAMEBUFFER,ye);const Fe=P.textures[Ee],Oe=Fe.format,De=Fe.type;if(!Qe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.bufferData(k.PIXEL_PACK_BUFFER,le.byteLength,k.STREAM_READ),P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ee),k.readPixels(V,j,q,H,Be.convert(Oe),Be.convert(De),0);const ot=M!==null?Ae.get(M).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,ot);const pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bh(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,le),k.deleteBuffer(Ye),k.deleteSync(pt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,V=null,j=0){const q=Math.pow(2,-j),H=Math.floor(P.image.width*q),le=Math.floor(P.image.height*q),me=V!==null?V.x:0,Ee=V!==null?V.y:0;Ue.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,me,Ee,H,le),ve.unbindTexture()};const Pu=k.createFramebuffer(),Du=k.createFramebuffer();this.copyTextureToTexture=function(P,V,j=null,q=null,H=0,le=null){le===null&&(H!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let me,Ee,ye,Fe,Oe,De,Ye,ot,pt;const mt=P.isCompressedTexture?P.mipmaps[le]:P.image;if(j!==null)me=j.max.x-j.min.x,Ee=j.max.y-j.min.y,ye=j.isBox3?j.max.z-j.min.z:1,Fe=j.min.x,Oe=j.min.y,De=j.isBox3?j.min.z:0;else{const jt=Math.pow(2,-H);me=Math.floor(mt.width*jt),Ee=Math.floor(mt.height*jt),P.isDataArrayTexture?ye=mt.depth:P.isData3DTexture?ye=Math.floor(mt.depth*jt):ye=1,Fe=0,Oe=0,De=0}q!==null?(Ye=q.x,ot=q.y,pt=q.z):(Ye=0,ot=0,pt=0);const lt=Be.convert(V.format),Le=Be.convert(V.type);let ft;V.isData3DTexture?(Ue.setTexture3D(V,0),ft=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ue.setTexture2DArray(V,0),ft=k.TEXTURE_2D_ARRAY):(Ue.setTexture2D(V,0),ft=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Je=k.getParameter(k.UNPACK_ROW_LENGTH),Bt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),oi=k.getParameter(k.UNPACK_SKIP_PIXELS),zt=k.getParameter(k.UNPACK_SKIP_ROWS),zi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,De);const dt=P.isDataArrayTexture||P.isData3DTexture,Nt=V.isDataArrayTexture||V.isData3DTexture;if(P.isDepthTexture){const jt=Ae.get(P),Dt=Ae.get(V),kt=Ae.get(jt.__renderTarget),vs=Ae.get(Dt.__renderTarget);ve.bindFramebuffer(k.READ_FRAMEBUFFER,kt.__webglFramebuffer),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let Hn=0;Hn<ye;Hn++)dt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ae.get(P).__webglTexture,H,De+Hn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ae.get(V).__webglTexture,le,pt+Hn)),k.blitFramebuffer(Fe,Oe,me,Ee,Ye,ot,me,Ee,k.DEPTH_BUFFER_BIT,k.NEAREST);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Ae.has(P)){const jt=Ae.get(P),Dt=Ae.get(V);ve.bindFramebuffer(k.READ_FRAMEBUFFER,Pu),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Du);for(let kt=0;kt<ye;kt++)dt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,jt.__webglTexture,H,De+kt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,jt.__webglTexture,H),Nt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,le,pt+kt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,le),H!==0?k.blitFramebuffer(Fe,Oe,me,Ee,Ye,ot,me,Ee,k.COLOR_BUFFER_BIT,k.NEAREST):Nt?k.copyTexSubImage3D(ft,le,Ye,ot,pt+kt,Fe,Oe,me,Ee):k.copyTexSubImage2D(ft,le,Ye,ot,Fe,Oe,me,Ee);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Nt?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(ft,le,Ye,ot,pt,me,Ee,ye,lt,Le,mt.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(ft,le,Ye,ot,pt,me,Ee,ye,lt,mt.data):k.texSubImage3D(ft,le,Ye,ot,pt,me,Ee,ye,lt,Le,mt):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,le,Ye,ot,me,Ee,lt,Le,mt.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,le,Ye,ot,mt.width,mt.height,lt,mt.data):k.texSubImage2D(k.TEXTURE_2D,le,Ye,ot,me,Ee,lt,Le,mt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Bt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,oi),k.pixelStorei(k.UNPACK_SKIP_ROWS,zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zi),le===0&&V.generateMipmaps&&k.generateMipmap(ft),ve.unbindTexture()},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&Ue.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ue.setTextureCube(P,0):P.isData3DTexture?Ue.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ue.setTexture2DArray(P,0):Ue.setTexture2D(P,0),ve.unbindTexture()},this.resetState=function(){I=0,S=0,M=null,ve.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const Ul=Math.sqrt(3),dx=.5*(Ul-1),Zi=(3-Ul)/6,Ic=i=>Math.floor(i)|0,Lc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function px(i=Math.random){const e=mx(i),t=new Float64Array(e).map(r=>Lc[r%12*2]),n=new Float64Array(e).map(r=>Lc[r%12*2+1]);return function(s,o){let a=0,c=0,l=0;const u=(s+o)*dx,h=Ic(s+u),f=Ic(o+u),m=(h+f)*Zi,g=h-m,v=f-m,x=s-g,d=o-v;let b,p;x>d?(b=1,p=0):(b=0,p=1);const _=x-b+Zi,C=d-p+Zi,T=x-1+2*Zi,A=d-1+2*Zi,I=h&255,S=f&255;let M=.5-x*x-d*d;if(M>=0){const y=I+e[S],R=t[y],L=n[y];M*=M,a=M*M*(R*x+L*d)}let D=.5-_*_-C*C;if(D>=0){const y=I+b+e[S+p],R=t[y],L=n[y];D*=D,c=D*D*(R*_+L*C)}let E=.5-T*T-A*A;if(E>=0){const y=I+1+e[S+1],R=t[y],L=n[y];E*=E,l=E*E*(R*T+L*A)}return 70*(a+c+l)}}function mx(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=t[n];t[n]=t[r],t[r]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}class xx{constructor(e){this.chunkSize=e.chunkSize||32,this.tileSize=e.tileSize||1,this.chunks=new Map,this.mesh=new Mt,this.noise2D=px(),this.material=new Ge({color:16777215,roughness:.8}),this.islandCenters=[{x:-150,z:150,type:"ice"},{x:-150,z:-150,type:"volcanic"}],this.destroyedBlocks=new Set,this.placedBlocks=new Map,this.blockHealth=new Map,this.generateChunk(0,0)}getChunkKey(e,t){return`${e},${t}`}generateChunk(e,t,n=!1){const r=this.getChunkKey(e,t);if(this.chunks.has(r))if(n){const u=this.chunks.get(r);this.mesh.remove(u),u.dispose(),this.chunks.delete(r)}else return;const s=new ge(this.tileSize,this.tileSize,this.tileSize),o=new pf(s,this.material,this.chunkSize*this.chunkSize*60);o.castShadow=!0,o.receiveShadow=!0;const a=new Tt;let c=0;const l=new qe;for(let u=0;u<this.chunkSize;u++)for(let h=0;h<this.chunkSize;h++){const f=e*this.chunkSize+u,m=t*this.chunkSize+h;let g=1/0,v=null;for(const Y of this.islandCenters){const J=f-Y.x,$=m-Y.z,be=Math.sqrt(J*J+$*$);be<g&&(g=be,v=Y)}const x=50,d=f-v.x,b=m-v.z,p=d<-30&&Math.abs(b)<3,_=p&&d<-48&&d>-55;if(g>x&&!_)continue;const C=55,T=4,I=Math.floor(g/T)*T/x;let S=C*(1-I);const M=this.noise2D(f*.1,m*.1)*6;S+=M;const D=30;let E=Math.floor(D-Math.max(2,S));_&&(E=-30);let y=!1,R=0;const L=12,N=f-(v.x-30),O=m-v.z,U=Math.sqrt(N*N+O*O);if(U<L){y=!0;const Y=U/L;R=Math.floor(4*(1-Y*Y))}let z=!1;const W=v.x,Z=v.z,re=f-W,ae=m-Z;let pe=Math.sqrt(re*re+ae*ae);v.type==="volcanic"&&(pe=Math.max(Math.abs(re),Math.abs(ae)));const we=4.5,K=7,ce=K*4,Re=D+ce;pe<=we+2&&(z=!0);let Ce=D;z&&(Ce=Re+20),this.getTreeHeight(f,m);const Ne=v.type;let it=6069830,ke=7032376,et=5921370,k=3355443,Xe=4473924,We=4915330,Qe=3801198,ve=6045747,rt=2263842,Ae=16776960,Ue=6045747,F=4474111,w=8947967;Ne==="ice"?(it=16777215,ke=14544639,et=8947848,k=7829367,Xe=6710886,We=2121888,Qe=1069200,ve=4469538,rt=2250052,Ae=11206655,Ue=5592405,F=4500223,w=13434879):Ne==="arcane"?(it=4915330,ke=3025759,et=4734347,k=2228292,Xe=3342421,We=16766720,Qe=14329120,ve=12632256,rt=16711935,Ae=65535,Ue=4915330):Ne==="volcanic"&&(it=5583633,ke=2232593,et=1710618,k=11184810,Xe=10066329,We=2236962,Qe=3355443,ve=6045747,rt=16729344,Ae=16729088,Ue=8947848,F=16729344,w=16776960);for(let Y=E;Y<=Ce+8;Y++){if(this.destroyedBlocks.has(`${f},${Y},${m}`))continue;let J=!1,$=it;if(Y<=D)if(J=!0,y){const ie=D-R;Y>ie?$=F:$=ke}else if(p){const Se=D-2;_?($=F,Math.random()>.8&&($=w)):Y>Se?$=F:$=ke}else{const ie=D-Y;ie===0?$=it:ie<4?$=ke:$=et}if(z&&Y>D){const ie=Y-D;if(ie<=ce+2){const Se=ie%K===0&&ie<ce,xe=ie===ce,te=ie===ce+1;let oe=we;if(Se&&(oe=we+.5),xe&&(oe=we+1.5),te&&(oe=we+1.5),pe<=oe&&pe>oe-1.5){if(J=!0,$=Se?Ue:Math.random()>.5?k:Xe,xe&&($=Ue),te){const Pe=Math.atan2(ae,re)*(180/Math.PI);Math.abs(Pe%45)<15?J=!1:$=Ue}if(ie<5&&ae>0&&Math.abs(re)<1.5&&!xe&&!te&&($=ve,ie>3?J=!0:J=!1),!Se&&ie>7&&ie<ce){const Ie=Math.abs(re)<1||Math.abs(ae)<1,Pe=ie%K;Ie&&Pe>=2&&Pe<=4&&($=Ae)}}}else{const Se=ie-(ce+2),xe=12,oe=(we+.5)*(1-Se/xe);pe<=Math.max(0,oe)&&(J=!0,$=Se%2===0?We:Qe),Se>xe&&Se<=xe+2&&pe<.8&&(J=!0,$=We)}}if(Y>D){const ie=this.getVegetationBlock(f,Y,m,D,ve,rt);ie.exists&&(J=!0,$=ie.color)}if(!J)continue;a.position.set(f*this.tileSize,Y*this.tileSize,m*this.tileSize),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHex($);const be=`${f},${Y},${m}`;if(this.blockHealth.has(be)){const xe=.3+.7*(this.blockHealth.get(be)/3);l.multiplyScalar(xe)}o.setColorAt(c,l),c++}const X=`${f},${m}`;if(this.placedBlocks.has(X)){const Y=this.placedBlocks.get(X);for(const[J,$]of Y){if(this.destroyedBlocks.has(`${f},${J},${m}`))continue;a.position.set(f*this.tileSize,J*this.tileSize,m*this.tileSize),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHex($);const be=`${f},${J},${m}`;if(this.blockHealth.has(be)){const xe=.3+.7*(this.blockHealth.get(be)/3);l.multiplyScalar(xe)}o.setColorAt(c,l),c++}}}o.count=c,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),this.chunks.set(r,o),this.mesh.add(o)}update(e){const t=Math.floor(e.x/this.chunkSize),n=Math.floor(e.z/this.chunkSize),r=4;for(let s=-r;s<=r;s++)for(let o=-r;o<=r;o++){const a=this.getChunkKey(t+s,n+o);this.chunks.has(a)||this.generateChunk(t+s,n+o)}}getHeight(e,t,n=30){if(!this.getIslandData(e,t).isIsland)return-1/0;const s=this.getTreeHeight(e,t);if(s>0)return 30+s;for(const o of this.islandCenters){const a=e-(o.x-30),c=t-o.z,l=Math.sqrt(a*a+c*c),u=12;if(l<u){const d=l/u;return 30-Math.floor(4*(1-d*d))}const h=o.x,f=o.z,m=e-h,g=t-f;let v=Math.sqrt(m*m+g*g);o.type==="volcanic"&&(v=Math.max(Math.abs(m),Math.abs(g)));const x=Math.floor(71-2*v);if(v<=5)return v>3.5?g>0&&Math.abs(m)<1.8?30:Math.max(58,x):30;if(v<=6.5&&x>30)return x}return 30}findSpawnPoint(){return new G(150,32,150)}getIslandData(e,t){for(const r of this.islandCenters){const s=e-r.x,o=t-r.z,a=Math.sqrt(s*s+o*o);if(a<55)return{isIsland:!0,center:r,dist:a}}return{isIsland:!1}}getTreeHeight(e,t){const n=Math.floor(e),r=Math.floor(t),s=this.getIslandData(n,r);if(!s.isIsland)return 0;const o=s.center,a=s.dist,c=o.x,l=o.z,u=n-c,h=r-l;let f=Math.sqrt(u*u+h*h);o.type==="volcanic"&&(f=Math.max(Math.abs(u),Math.abs(h)));const m=f<=7,g=n-(o.x-30),v=r-o.z,d=Math.sqrt(g*g+v*v)<12,b=n-o.x,p=r-o.z,_=b<-30&&Math.abs(p)<3;if(!m&&!d&&!_&&a>10&&f>8&&this.noise2D(n*.3,r*.3)>.6&&n%3===0&&r%3===0){const T=Math.abs(Math.sin(n*12.9898+r*78.233));return 4+Math.floor(T*3)}return 0}getBlock(e,t,n){const r=Math.floor(e),s=Math.floor(t),o=Math.floor(n),a=`${r},${s},${o}`;if(this.destroyedBlocks.has(a))return!1;const c=`${r},${o}`;if(this.placedBlocks.has(c)&&this.placedBlocks.get(c).has(s))return!0;const l=this.getIslandData(r,o);if(!l.isIsland)return!1;const u=l.center,h=30;if(s<=h){const A=r-(u.x-30),I=o-u.z,S=Math.sqrt(A*A+I*I);if(S<12){const M=S/12,D=Math.floor(4*(1-M*M)),E=h-D;return s<=E}return!0}const f=u.x,m=u.z,g=r-f,v=o-m;let x=Math.sqrt(g*g+v*v);u.type==="volcanic"&&(x=Math.max(Math.abs(g),Math.abs(v)));const d=4.5,b=7,_=b*4,C=h+_;if(s>h)if(s<=C){const A=s-h,S=A%b===0||A%b===b-1?d+.5:d;if(x<=S&&x>S-1.5)return A<5&&v>0&&Math.abs(g)<1.5?A>3:!0}else{const A=s-C,I=d+2-A*.5;if(x<=I&&I>=0)return!0}const T=this.getTreeHeight(r,o);return T>0&&s<=30+T}raycast(e,t,n){const r=e.clone();let s=0,o=Math.floor(r.x),a=Math.floor(r.y),c=Math.floor(r.z);const l=Math.sign(t.x),u=Math.sign(t.y),h=Math.sign(t.z),f=l!==0?Math.abs(1/t.x):1/0,m=u!==0?Math.abs(1/t.y):1/0,g=h!==0?Math.abs(1/t.z):1/0,v=l>0?o+1-r.x:r.x-o,x=u>0?a+1-r.y:r.y-a,d=h>0?c+1-r.z:r.z-c;let b=l!==0?v*f:1/0,p=u!==0?x*m:1/0,_=h!==0?d*g:1/0,C=new G;for(;s<n;){if(this.getBlock(o,a,c))return{point:new G(r.x+t.x*s,r.y+t.y*s,r.z+t.z*s),normal:C,block:{x:o,y:a,z:c}};b<p?b<_?(o+=l,s=b,b+=f,C.set(-l,0,0)):(c+=h,s=_,_+=g,C.set(0,0,-h)):p<_?(a+=u,s=p,p+=m,C.set(0,-u,0)):(c+=h,s=_,_+=g,C.set(0,0,-h))}return null}addBlock(e,t,n,r){const s=Math.floor(e),o=Math.floor(t),a=Math.floor(n),c=`${s},${a}`;this.placedBlocks.has(c)||this.placedBlocks.set(c,new Map),this.placedBlocks.get(c).set(o,r);const u=Math.floor(s/this.chunkSize),h=Math.floor(a/this.chunkSize);this.generateChunk(u,h,!0)}removeBlock(e,t,n){const r=Math.floor(e),s=Math.floor(t),o=Math.floor(n),a=`${r},${s},${o}`,c=`${r},${o}`;if(this.placedBlocks.has(c)){const h=this.placedBlocks.get(c);if(h.has(s)){h.delete(s),h.size===0&&this.placedBlocks.delete(c);const f=Math.floor(r/this.chunkSize),m=Math.floor(o/this.chunkSize);this.generateChunk(f,m,!0);return}}if(s<=30||this.destroyedBlocks.has(a))return;this.destroyedBlocks.add(a);const l=Math.floor(r/this.chunkSize),u=Math.floor(o/this.chunkSize);this.generateChunk(l,u,!0)}getMapColor(e,t){const n=this.getIslandData(e,t);if(!n.isIsland)return"#000044";const r=n.center,s=r.x,o=r.z,a=e-s,c=t-o;let l=a*a+c*c<=49;if(r.type==="volcanic"&&(l=Math.max(Math.abs(a),Math.abs(c))<=7),l)return"#555555";const u=e-(r.x-30),h=t-r.z;if(u*u+h*h<144)return"#4444FF";const f=e-r.x,m=t-r.z;return f<-30&&Math.abs(m)<3?"#4444FF":r.type==="ice"?"#FFFFFF":r.type==="arcane"?"#4B0082":r.type==="volcanic"?"#222222":"#5C9E46"}hash(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453123;return n-Math.floor(n)}getVegetationBlock(e,t,n,r,s=6045747,o=2263842){const a=this.getTreeHeight(e,n);if(a>0){const c=t-r;if(c>0){if(c<=a)return{exists:!0,color:s};if(c<=a+2)return{exists:!0,color:o}}}return{exists:!1}}getTerrainType(e,t,n){const r=Math.floor(e),s=Math.floor(t),o=Math.floor(n),a=this.getIslandData(r,o);if(!a.isIsland)return"void";const c=a.center,l=c.type,u=r-(c.x-30),h=o-c.z;if(Math.sqrt(u*u+h*h)<12&&s>=26&&s<=30)return l==="volcanic"?"lava":"water";const m=r-c.x,g=o-c.z;return m<-30&&Math.abs(g)<3&&s>=28&&s<=30?l==="volcanic"?"lava":"water":l==="ice"?"ice":"ground"}}class gx{constructor(){this.keys={},this.mouseButtons={},this.mouse={x:0,y:0,movementX:0,movementY:0},this.isLocked=!1,window.addEventListener("keydown",e=>this.keys[e.code]=!0),window.addEventListener("keyup",e=>this.keys[e.code]=!1),document.addEventListener("mousedown",e=>{this.isLocked&&(this.mouseButtons[e.button]=!0)}),document.addEventListener("mouseup",e=>this.mouseButtons[e.button]=!1),document.addEventListener("mousemove",e=>{this.isLocked&&(this.mouse.movementX=e.movementX,this.mouse.movementY=e.movementY)}),document.addEventListener("click",e=>{!this.isLocked&&e.target.tagName==="CANVAS"&&document.body.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===document.body})}isKeyDown(e){return!!this.keys[e]}isMouseButtonDown(e){return!!this.mouseButtons[e]}getMouseMovement(){const e={x:this.mouse.movementX,y:this.mouse.movementY};return this.mouse.movementX=0,this.mouse.movementY=0,e}}class Uc{constructor(e,t,n,r,s,o="normal",a=1){this.scene=e,this.particleSystem=r,this.soundManager=s,this.type=o,this.velocity=n.clone().normalize().multiplyScalar(60),this.isAlive=!0,this.lifeTime=1.5,this.damage=10*a;let c=65535,l=.3;this.type==="fireball"&&(c=16729088,l=.6,this.damage=30*a,this.lifeTime=3);const u=new ds(l,8,8),h=new pr({color:c});this.mesh=new ne(u,h),this.mesh.position.copy(t),this.light=new xa(c,1,10),this.mesh.add(this.light),this.scene.add(this.mesh)}update(e,t,n){if(!this.isAlive)return;if(this.lifeTime-=e,this.lifeTime<=0){this.destroy();return}this.particleSystem.emit(this.mesh.position,this.type==="fireball"?16729088:65535,1,.5,.2);const r=this.velocity.clone().multiplyScalar(e),s=r.length(),o=r.clone().normalize();if(n){for(const[c,l]of n)if(this.mesh.position.distanceTo(l.mesh.position)<(this.type==="fireball"?3:1.5)){this.onHitPlayer(c);return}}const a=t.raycast(this.mesh.position,o,s);if(a){if(this.mesh.position.copy(a.point),this.type==="fireball"){const l=Math.floor(a.point.x),u=Math.floor(a.point.y),h=Math.floor(a.point.z);for(let f=-3;f<=3;f++)for(let m=-3;m<=3;m++)for(let g=-3;g<=3;g++)f*f+m*m+g*g<=9&&(t.removeBlock(l+f,u+m,h+g),t.removeBlock(l+f,u+m,h+g),t.removeBlock(l+f,u+m,h+g))}else a.block&&t.removeBlock(a.block.x,a.block.y,a.block.z);this.onHit();return}this.mesh.position.add(r)}onHitPlayer(e){this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(this.mesh.position,16711680,20),this.onPlayerHitCallback&&this.onPlayerHitCallback(e,this.damage),this.destroy()}onHit(){this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(this.mesh.position,65535,15),this.destroy()}destroy(){this.isAlive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.light.dispose()}}class _x{constructor(e,t,n,r,s,o,a,c="witch"){this.scene=e,this.camera=t,this.world=n,this.particleSystem=s,this.soundManager=o,this.networkManager=a,this.characterClass=c,this.input=new gx,this.isDead=!1,this.spawnPoint=r?r.clone():new G(10,20,10),this.networkTimer=0,this.networkInterval=.05;const l=this.characterClass==="warlock"?this.createWarlockMesh():this.createWitchMesh();this.mesh=l.mesh,this.mesh.position.set(10,20,10),this.wand=this.createWand(),l.leftArm.add(this.wand),this.wand.position.set(0,-.4,.2),this.wand.rotation.x=Math.PI/2,this.broom=this.createBroom(),this.broom.visible=!1,this.mesh.add(this.broom),this.broom.position.set(0,.5,0),r?this.mesh.position.copy(r):this.mesh.position.set(10,20,10),this.mesh.traverse(f=>f.castShadow=!0),this.scene.add(this.mesh),this.velocity=new G,this.onGround=!1,this.gravity=-30,this.speed=10,this.flySpeed=25,this.jumpForce=10,this.isFlying=!1,this.flyTogglePressed=!1,this.projectiles=[],this.lastShotTime=0,this.shootCooldown=.3,this.abilityCooldown=5,this.lastAbilityTime=0,this.dashCooldown=3,this.lastDashTime=0,this.team="spectator",this.maxMana=100,this.mana=100,this.manaRegen=5,this.abilityCost=40,this.isBuildMode=!1,this.buildTogglePressed=!1,this.buildCooldown=.2,this.lastBuildTime=0;const u=new ge(1.01,1.01,1.01),h=new pr({color:65280,wireframe:!0,transparent:!0,opacity:.5});this.ghostBlock=new ne(u,h),this.scene.add(this.ghostBlock),this.ghostBlock.visible=!1,this.physicsPosition=this.mesh.position.clone(),this.cameraOffset=new G(0,2,5),this.rotation=new tn(0,0,0,"YXZ"),this.currentBiome="ice",this.checkBiomeTimer=0,this.speedBuffTimer=0,this.damageBuffTimer=0,this.shield=0,this.lavaDamageTimer=0,this.footstepTimer=0}setSpawnPoint(e){this.spawnPoint.copy(e)}get position(){return this.physicsPosition}setCharacterClass(e){if(this.characterClass===e)return;this.characterClass=e;const t=this.mesh.position.clone(),n=this.mesh.rotation.clone();this.scene.remove(this.mesh);const r=this.characterClass==="warlock"?this.createWarlockMesh():this.createWitchMesh();this.mesh=r.mesh,this.mesh.position.copy(t),this.mesh.rotation.copy(n),this.wand=this.createWand(),r.leftArm.add(this.wand),this.wand.position.set(0,-.4,.2),this.wand.rotation.x=Math.PI/2,this.broom=this.createBroom(),this.broom.visible=!1,this.mesh.add(this.broom),this.broom.position.set(0,.5,0),this.mesh.traverse(s=>s.castShadow=!0),this.scene.add(this.mesh)}update(e,t){if(this.isDead)return;this.speedBuffTimer>0&&(this.speedBuffTimer-=e),this.damageBuffTimer>0&&(this.damageBuffTimer-=e),this.mana<this.maxMana&&(this.mana+=this.manaRegen*e,this.mana>this.maxMana&&(this.mana=this.maxMana),this.updateManaUI()),this.networkTimer+=e,this.networkTimer>=this.networkInterval&&(this.networkTimer=0,this.networkManager&&this.networkManager.sendMove(this.physicsPosition,this.rotation,this.currentBiome));for(let p=this.projectiles.length-1;p>=0;p--){const _=this.projectiles[p];_.update(e,this.world,t),_.isAlive||this.projectiles.splice(p,1)}this.input.isKeyDown("KeyF")?this.flyTogglePressed||(this.isFlying=!this.isFlying,this.flyTogglePressed=!0,this.broom.visible=this.isFlying,this.isFlying?(this.velocity.y=0,this.mesh.rotation.x=.3,this.mesh.position.y+=1):this.mesh.rotation.x=0):this.flyTogglePressed=!1,this.input.isKeyDown("KeyB")?this.buildTogglePressed||(this.isBuildMode=!this.isBuildMode,this.buildTogglePressed=!0,this.ghostBlock.visible=this.isBuildMode):this.buildTogglePressed=!1,this.isBuildMode?this.updateBuildMode(e):(this.ghostBlock.visible=!1,this.lastShotTime+=e,this.input.isMouseButtonDown(0)&&this.lastShotTime>=this.shootCooldown&&(this.shoot(),this.lastShotTime=0));const n=this.input.getMouseMovement();if(this.rotation.y-=n.x*.002,this.rotation.x-=n.y*.002,this.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.rotation.x)),this.input.isKeyDown("ShiftLeft")&&!this.isFlying){const p=performance.now()/1e3;p-this.lastDashTime>this.dashCooldown&&(this.performDash(),this.lastDashTime=p)}const r=new G(0,0,-1).applyAxisAngle(new G(0,1,0),this.rotation.y),s=new G(1,0,0).applyAxisAngle(new G(0,1,0),this.rotation.y),o=new G;this.input.isKeyDown("KeyW")&&o.add(r),this.input.isKeyDown("KeyS")&&o.sub(r),this.input.isKeyDown("KeyD")&&o.add(s),this.input.isKeyDown("KeyA")&&o.sub(s),o.length()>0&&o.normalize();let a=this.isFlying?this.flySpeed:this.speed;this.speedBuffTimer>0&&(a*=2);const c=o.x*a,l=o.z*a,u=this.world.getTerrainType(this.physicsPosition.x,this.physicsPosition.y-.5,this.physicsPosition.z);let h=20;u==="ice"&&!this.isFlying&&this.onGround&&(h=1);const f=1-Math.exp(-h*e);this.velocity.x+=(c-this.velocity.x)*f,this.velocity.z+=(l-this.velocity.z)*f,this.onGround&&!this.isFlying&&(Math.abs(this.velocity.x)>.1||Math.abs(this.velocity.z)>.1)?(this.footstepTimer+=e,this.footstepTimer>.4&&(this.soundManager.playFootstep(),this.footstepTimer=0)):this.footstepTimer=.4,u==="lava"?(this.lavaDamageTimer+=e,this.lavaDamageTimer>.5&&(this.lavaDamageTimer=0,this.networkManager&&this.networkManager.playerId&&(this.networkManager.sendHit(this.networkManager.playerId,5),this.particleSystem.emit(this.position,16729088,10)))):this.lavaDamageTimer=0,this.isFlying?this.input.isKeyDown("Space")?this.velocity.y=a*.5:this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("KeyC")?this.velocity.y=-a*.5:this.velocity.y=0:(this.onGround&&this.input.isKeyDown("Space")&&(this.velocity.y=this.jumpForce,this.onGround=!1),this.velocity.y+=this.gravity*e),this.wandParticles&&(this.wandParticles.rotation.y+=e*2,this.wandParticles.rotation.z+=e*1);const m=this.physicsPosition.clone();this.physicsPosition.x+=this.velocity.x*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.x=m.x,this.velocity.x=0),this.physicsPosition.z+=this.velocity.z*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.z=m.z,this.velocity.z=0),this.physicsPosition.y+=this.velocity.y*e,this.checkCollision(this.physicsPosition)?(this.velocity.y<0?(this.onGround=!0,this.physicsPosition.y=m.y):this.physicsPosition.y=m.y,this.velocity.y=0):this.onGround=!1,this.physicsPosition.y<-50&&this.onDeath(),this.mesh.position.x=this.physicsPosition.x,this.mesh.position.z=this.physicsPosition.z,this.mesh.position.y=Ci.lerp(this.mesh.position.y,this.physicsPosition.y,10*e);const g=this.mesh.position.clone().add(new G(0,1.5,0)),v=new G(1.5,1,5);v.applyEuler(this.rotation);const x=g.clone().add(v);this.camera.position.copy(x);const d=new G(0,0,-1);d.applyEuler(this.rotation);const b=x.clone().add(d.multiplyScalar(20));if(this.camera.lookAt(b),this.mesh.rotation.y=this.rotation.y,this.isFlying){let _=.3,C=0;if(this.input.isKeyDown("KeyW")&&(_=.8),this.input.isKeyDown("KeyS")&&(_=-.2),this.input.isKeyDown("KeyA")&&(C=.5),this.input.isKeyDown("KeyD")&&(C=-.5),this.mesh.rotation.x=Ci.lerp(this.mesh.rotation.x,_,e*5),this.mesh.rotation.z=Ci.lerp(this.mesh.rotation.z,C,e*5),this.particleSystem){const T=new G(0,0,1.4);T.applyMatrix4(this.broom.matrixWorld),this.particleSystem.emit(T,15645525,2)}}else this.mesh.rotation.x=Ci.lerp(this.mesh.rotation.x,0,e*10),this.mesh.rotation.z=Ci.lerp(this.mesh.rotation.z,0,e*10)}setTeam(e){this.team=e}performDash(){const e=new G(0,0,-1).applyAxisAngle(new G(0,1,0),this.rotation.y);if(this.velocity.add(e.multiplyScalar(40)),this.soundManager&&this.soundManager.playJump(),this.particleSystem)for(let t=0;t<10;t++)this.particleSystem.emit(this.mesh.position.clone(),16777215,5)}updateManaUI(){const e=document.getElementById("mana-bar"),t=document.getElementById("mana-text");e&&t&&(e.style.width=`${this.mana/this.maxMana*100}%`,t.textContent=`${Math.floor(this.mana)} / ${this.maxMana}`)}shoot(){const e=this.damageBuffTimer>0?2:1,t=new Uc(this.scene,this.wand.getWorldPosition(new G),this.camera.getWorldDirection(new G),this.particleSystem,this.soundManager,"normal",e);this.projectiles.push(t),this.soundManager.playShoot()}useAbility(){if(this.mana<this.abilityCost)return;const e=this.damageBuffTimer>0?2:1;if(this.team==="red"){const t=new Uc(this.scene,this.wand.getWorldPosition(new G),this.camera.getWorldDirection(new G),this.particleSystem,this.soundManager,"fireball",e);this.projectiles.push(t),this.mana-=this.abilityCost,this.updateManaUI()}else if(this.team==="blue"){const t=new G(0,0,-1).applyQuaternion(this.camera.quaternion),n=this.camera.position.clone().add(t.multiplyScalar(5)),r=Math.floor(n.x),s=Math.floor(n.y),o=Math.floor(n.z);for(let a=-1;a<=1;a++)for(let c=0;c<3;c++)this.world.addBlock(r,s+c,o,8965375),this.networkManager&&this.networkManager.sendBlockUpdate(r,s+c,o,2);this.mana-=this.abilityCost,this.updateManaUI()}}applyPotion(e){console.log("Applied potion:",e),e==="speed"?this.speedBuffTimer=10:e==="shield"?(this.shield+=50,this.networkManager&&this.networkManager.onHealthUpdate(this.health+this.shield)):e==="berserk"&&(this.damageBuffTimer=10)}createWand(){const e=new Mt,t=new da(.02,.03,.8,8),n=new Ge({color:6045747}),r=new ne(t,n);e.add(r);const s=new pa(.06),o=new Ge({color:65535,emissive:35071,emissiveIntensity:.5,transparent:!0,opacity:.9}),a=new ne(s,o);return a.position.y=.4,e.add(a),this.wandParticles=a,e}createBroom(){const e=new Mt,t=new Ge({color:6045747}),n=new Ge({color:4073251}),r=new Ge({color:13934615}),s=new ge(.05,.05,2),o=new ne(s,t);o.position.z=-.5,e.add(o);const a=new ge(.07,.07,.1),c=new ne(a,n);c.position.z=.55,e.add(c);const l=new Mt;l.position.z=.6;const u=new ne(new ge(.15,.15,.4),r);u.position.z=.2,l.add(u);const h=new ne(new ge(.25,.1,.3),r);h.position.z=.2,l.add(h);const f=new ne(new ge(.1,.25,.3),r);return f.position.z=.2,l.add(f),e.add(l),e.position.set(0,.6,0),e}createWitchMesh(){const e=new Mt,t=new Mt;e.add(t),t.rotation.y=Math.PI;const n=16764074,r=4915330,s=3342438,o=16711680,a=16753920,c=1118481,l=new ge(.5,.8,.4),u=new Ge({color:r}),h=new ne(l,u);h.position.y=.9,t.add(h);const f=new ge(.6,.6,.5),m=new ne(f,u);m.position.y=.3,t.add(m);const g=new ge(.35,.35,.35),v=new Ge({color:n}),x=new ne(g,v);x.position.y=1.5,t.add(x);const d=new Ge({color:a}),b=new ne(new ge(.45,.5,.15),d);b.position.set(0,1.5,-.2),t.add(b);const p=new ne(new ge(.1,.4,.4),d);p.position.set(-.2,1.5,0),t.add(p);const _=new ne(new ge(.1,.4,.4),d);_.position.set(.2,1.5,0),t.add(_);const C=new Mt,T=new Ge({color:s}),A=new Ge({color:o}),I=new ne(new ge(.8,.1,.8),T);I.position.y=1.7,C.add(I);const S=new ne(new ge(.5,.3,.5),T);S.position.y=1.9,C.add(S);const M=new ne(new ge(.45,.15,.45),A);M.position.y=2.1,C.add(M);const D=new ne(new ge(.35,.3,.35),T);D.position.y=2.3,C.add(D);const E=new ne(new ge(.2,.3,.2),T);E.position.y=2.6,C.add(E);const y=new ne(new ge(.15,.2,.15),T);y.position.set(.1,2.8,0),y.rotation.z=-.2,C.add(y),t.add(C);const R=new ge(.15,.5,.15),L=new Ge({color:r}),N=new ne(R,L);N.position.set(-.35,1,0),N.rotation.z=0,t.add(N);const O=new ne(R,L);O.position.set(.35,1,0),O.rotation.z=0,t.add(O);const U=new ge(.12,.12,.12),z=new Ge({color:n}),W=new ne(U,z);W.position.set(0,-.3,0),N.add(W);const Z=new ne(U,z);Z.position.set(0,-.3,0),O.add(Z);const re=new ge(.15,.4,.15),ae=new Ge({color:c}),pe=new ne(re,ae);pe.position.set(-.15,.2,0),t.add(pe);const we=new ne(re,ae);we.position.set(.15,.2,0),t.add(we);const K=new ge(.05,.05,.05),Q=new Ge({color:0}),ce=new ne(K,Q);ce.position.set(-.1,1.55,.18),t.add(ce);const Re=new ne(K,Q);return Re.position.set(.1,1.55,.18),t.add(Re),{mesh:e,rightArm:O,leftArm:N,rightHand:Z}}createWarlockMesh(){const e=new Mt,t=new Mt;e.add(t),t.rotation.y=Math.PI;const n=16764074,r=2236962,s=65280,o=1118481,a=0,c=new ge(.5,.8,.4),l=new Ge({color:r}),u=new ne(c,l);u.position.y=.9,t.add(u);const h=new ge(.6,.6,.5),f=new ne(h,l);f.position.y=.3,t.add(f);const m=new ge(.35,.35,.35),g=new Ge({color:n}),v=new ne(m,g);v.position.y=1.5,t.add(v);const x=new Ge({color:o}),d=new ne(new ge(.45,.1,.45),x);d.position.y=1.7,t.add(d);const b=new ne(new ge(.45,.4,.1),x);b.position.set(0,1.5,-.18),t.add(b);const p=new ne(new ge(.1,.4,.45),x);p.position.set(-.18,1.5,0),t.add(p);const _=new ne(new ge(.1,.4,.45),x);_.position.set(.18,1.5,0),t.add(_);const C=new ge(.2,.2,.2),T=new Ge({color:s,emissive:s,emissiveIntensity:.5}),A=new ne(C,T);A.position.set(-.35,1.3,0),t.add(A);const I=new ne(C,T);I.position.set(.35,1.3,0),t.add(I);const S=new ge(.15,.5,.15),M=new Ge({color:r}),D=new ne(S,M);D.position.set(-.35,1,0),D.rotation.z=0,t.add(D);const E=new ne(S,M);E.position.set(.35,1,0),E.rotation.z=0,t.add(E);const y=new ge(.12,.12,.12),R=new Ge({color:n}),L=new ne(y,R);L.position.set(0,-.3,0),D.add(L);const N=new ne(y,R);N.position.set(0,-.3,0),E.add(N);const O=new ge(.15,.4,.15),U=new Ge({color:a}),z=new ne(O,U);z.position.set(-.15,.2,0),t.add(z);const W=new ne(O,U);W.position.set(.15,.2,0),t.add(W);const Z=new ge(.05,.02,.05),re=new Ge({color:16711680,emissive:16711680}),ae=new ne(Z,re);ae.position.set(-.1,1.55,.18),ae.rotation.z=.2,t.add(ae);const pe=new ne(Z,re);return pe.position.set(.1,1.55,.18),pe.rotation.z=-.2,t.add(pe),{mesh:e,rightArm:E,leftArm:D,rightHand:N}}checkCollision(e){return!!(this.world.getBlock(Math.floor(e.x),Math.floor(e.y),Math.floor(e.z))||this.world.getBlock(Math.floor(e.x),Math.floor(e.y+1.5),Math.floor(e.z)))}onDeath(){this.isDead=!0,this.soundManager&&this.soundManager.playDeath&&this.soundManager.playDeath(),setTimeout(()=>{this.isDead=!1,this.mesh.position.copy(this.spawnPoint),this.physicsPosition.copy(this.spawnPoint),this.velocity.set(0,0,0),this.health=100,this.mana=100,this.updateManaUI(),this.networkManager&&this.networkManager.sendRespawn(this.spawnPoint)},3e3)}updateBuildMode(e){const t=new G(0,0,-1).applyQuaternion(this.camera.quaternion),n=this.camera.position.clone().add(t.multiplyScalar(3)),r=Math.floor(n.x),s=Math.floor(n.y),o=Math.floor(n.z);this.ghostBlock.position.set(r+.5,s+.5,o+.5),this.input.isMouseButtonDown(0)?performance.now()-this.lastBuildTime>this.buildCooldown*1e3&&(this.world.addBlock(r,s,o,5592405),this.lastBuildTime=performance.now(),this.networkManager&&this.networkManager.sendBlockUpdate(r,s,o,1)):this.input.isMouseButtonDown(2)&&performance.now()-this.lastBuildTime>this.buildCooldown*1e3&&(this.world.removeBlock(r,s,o),this.lastBuildTime=performance.now(),this.networkManager&&this.networkManager.sendBlockUpdate(r,s,o,0))}}class vx{constructor(e){this.scene=e,this.particles=[],this.geometry=new ge(.2,.2,.2),this.material=new pr({color:16777215})}emit(e,t,n=5,r=5,s=1){for(let o=0;o<n;o++){const a=new ne(this.geometry,this.material.clone());a.material.color.setHex(t),a.position.copy(e),a.position.x+=(Math.random()-.5)*.5,a.position.y+=(Math.random()-.5)*.5,a.position.z+=(Math.random()-.5)*.5;const c=new G(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(r*Math.random());this.particles.push({mesh:a,velocity:c,life:s,maxLife:s}),this.scene.add(a)}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.life-=e,n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.velocity.y-=10*e;const r=n.life/n.maxLife;n.mesh.scale.setScalar(r),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(t,1))}}}class yx{constructor(e){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination),this.windOsc=null,this.windGain=null,this.initWind()}initWind(){const e=2*this.ctx.sampleRate,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++){const o=Math.random()*2-1;n[s]=(r+.02*o)/1.02,r=n[s],n[s]*=3.5}var r=0;this.windNode=this.ctx.createBufferSource(),this.windNode.buffer=t,this.windNode.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=200,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windNode.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windNode.start()}updateWind(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=Math.min(e/30,1);this.windGain.gain.setTargetAtTime(t*.5,this.ctx.currentTime,.1),this.windFilter.frequency.setTargetAtTime(200+t*800,this.ctx.currentTime,.1)}playShoot(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(110,this.ctx.currentTime+.1),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}playExplosion(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),t.gain.setValueAtTime(.5,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.3)}playPowerup(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.1),e.frequency.exponentialRampToValueAtTime(1760,this.ctx.currentTime+.3),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.3)}playFootstep(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.sampleRate*.05,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let a=0;a<e;a++)n[a]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=t;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800;const o=this.ctx.createGain();o.gain.setValueAtTime(.1,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.05),r.connect(s),s.connect(o),o.connect(this.masterGain),r.start()}playHitMarker(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(2e3,this.ctx.currentTime),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}playDeath(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.5),t.gain.setValueAtTime(.5,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.5),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.5)}playJump(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(600,this.ctx.currentTime+.1),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}}class bx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Sx(e).buffer}}function Sx(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,n),n+=r.byteLength}return t}function Fl(i){return new Mx(i).unpack()}function Nl(i){const e=new Tx,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Mx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,r="",s,o;for(;n<e;)s=t[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(o);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Tx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,s=Math.floor(r*2**52),o=2**32,a=t<<31|n+1023<<20|s/o&1048575,c=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new bx,this._textEncoder=new TextEncoder}}let kl=!0,Ol=!0;function tr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ii(i,e,t){if(!i.RTCPeerConnection)return;const n=i.RTCPeerConnection.prototype,r=n.addEventListener;n.addEventListener=function(o,a){if(o!==e)return r.apply(this,arguments);const c=l=>{const u=t(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),r.apply(this,[o,c])};const s=n.removeEventListener;n.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);const c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Ex(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(kl=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Cx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Ol=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Bl(){if(typeof window=="object"){if(kl)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function ga(i,e){Ol&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Ax(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(n)return{browser:"chrome",version:parseInt(n.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(tr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(tr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2));else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(tr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=tr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Fc(i){return Object.prototype.toString.call(i)==="[object Object]"}function zl(i){return Fc(i)?Object.keys(i).reduce(function(e,t){const n=Fc(i[t]),r=n?zl(i[t]):i[t],s=n&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):i}function $o(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?$o(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(r=>{$o(i,i.get(r),t)})}))}function Nc(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&$o(i,a,r)})}),r}const kc=Bl;function Gl(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof a[l]=="object"?a[l]:{ideal:a[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const h=function(f,m){return f?f+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(u.ideal!==void 0){c.optional=c.optional||[];let f={};typeof u.ideal=="number"?(f[h("min",l)]=u.ideal,c.optional.push(f),f={},f[h("max",l)]=u.ideal,c.optional.push(f)):(f[h("",l)]=u.ideal,c.optional.push(f))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[h("",l)]=u.exact):["min","max"].forEach(f=>{u[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[h(f,l)]=u[f])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},r=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(u,h,f){h in u&&!(f in u)&&(u[f]=u[h],delete u[h])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let h;if(l.exact==="environment"||l.ideal==="environment"?h=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let m=f.find(g=>h.some(v=>g.label.toLowerCase().includes(v)));return!m&&f.length&&h.includes("back")&&(m=f[f.length-1]),m&&(a.video.deviceId=l.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),kc("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return kc("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){r(a,u=>{t.webkitGetUserMedia(u,c,h=>{l&&l(s(h))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>a(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function Vl(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Hl(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",r=>{let s;i.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.track.id):s={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o)}),n.stream.getTracks().forEach(r=>{let s;i.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.id):s={track:r};const o=new Event("track");o.track=r,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else ii(i,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function Wl(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=r.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Xl(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const t=i.RTCPeerConnection.prototype.getSenders;t&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(o=>o._pc=this),s});const n=i.RTCPeerConnection.prototype.addTrack;n&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=n.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>Nc(o,s.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const t=i.RTCPeerConnection.prototype.getReceivers;t&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=t.apply(this,[]);return r.forEach(s=>s._pc=this),r}),ii(i,"track",n=>(n.receiver._pc=n.srcElement,n)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(s=>Nc(s,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const e=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const n=arguments[0];let r,s,o;return this.getSenders().forEach(a=>{a.track===n&&(r?o=!0:r=a)}),this.getReceivers().forEach(a=>(a.track===n&&(s?o=!0:s=a),a.track===n)),o||r&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function $l(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(h=>h.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),r.apply(this,arguments)}}function jl(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return $l(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(h=>this._reverseStreams[h.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(h=>{if(this.getSenders().find(m=>m.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const h=new i.MediaStream(u.getTracks());this._streams[u.id]=h,this._reverseStreams[h.id]=u,u=h}n.apply(this,[u])};const r=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},i.RTCPeerConnection.prototype.addTrack=function(u,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(v=>v===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[h.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new i.MediaStream([u]);this._streams[h.id]=v,this._reverseStreams[v.id]=h,this.addStream(v)}return this.getSenders().find(v=>v.track===u)};function s(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const m=l._reverseStreams[f],g=l._streams[m.id];h=h.replace(new RegExp(g.id,"g"),m.id)}),new RTCSessionDescription({type:u.type,sdp:h})}function o(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const m=l._reverseStreams[f],g=l._streams[m.id];h=h.replace(new RegExp(m.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:h})}["createOffer","createAnswer"].forEach(function(l){const u=i.RTCPeerConnection.prototype[l],h={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const v=s(this,g);f[0].apply(null,[v])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>s(this,g))}};i.RTCPeerConnection.prototype[l]=h[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(v=>u.track===v)&&(f=this._streams[m])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function jo(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]})}function ql(i,e){ii(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Oc=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:ql,shimAddTrackRemoveTrack:jl,shimAddTrackRemoveTrackWithNative:$l,shimGetSendersWithDtmf:Wl,shimGetUserMedia:Gl,shimMediaStream:Vl,shimOnTrack:Hl,shimPeerConnection:jo,shimSenderReceiverGetStats:Xl},Symbol.toStringTag,{value:"Module"}));function Yl(i,e){const t=i&&i.navigator,n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){ga("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return r(a,"mozAutoGainControl","autoGainControl"),r(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a,"autoGainControl","mozAutoGainControl"),r(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function wx(i,e){i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||i.navigator.mediaDevices&&(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)})}function Kl(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function qo(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection))return;!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(r){const s=i.RTCPeerConnection.prototype[r],o={[r](){return arguments[0]=new(r==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};i.RTCPeerConnection.prototype[r]=o[r]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return n.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,h)=>{c.set(h,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(o,a)}}function Jl(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Zl(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n}),ii(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ql(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){ga("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function eu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function tu(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.addTransceiver;e&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const r=n.length>0;r&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(r){const{sender:o}=s,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return s})}function nu(i){if(!(typeof i=="object"&&i.RTCRtpSender))return;const e=i.RTCRtpSender.prototype.getParameters;e&&(i.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function iu(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function ru(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Bc=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:tu,shimCreateAnswer:ru,shimCreateOffer:iu,shimGetDisplayMedia:wx,shimGetParameters:nu,shimGetUserMedia:Yl,shimOnTrack:Kl,shimPeerConnection:qo,shimRTCDataChannel:eu,shimReceiverGetStats:Zl,shimRemoveStream:Ql,shimSenderGetStats:Jl},Symbol.toStringTag,{value:"Module"}));function su(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(r=>e.call(this,r,n)),n.getVideoTracks().forEach(r=>e.call(this,r,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function ou(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function au(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[h]);return u?(f.then(l,u),Promise.resolve()):f},e.createAnswer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[h]);return u?(f.then(l,u),Promise.resolve()):f};let a=function(c,l,u){const h=r.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=a,a=function(c,l,u){const h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=a,a=function(c,l,u){const h=o.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=a}function cu(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>n(lu(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,r,s){e.mediaDevices.getUserMedia(n).then(r,s)}).bind(e))}function lu(i){return i&&i.video!==void 0?Object.assign({},i,{video:zl(i.video)}):i}function uu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,r){if(n&&n.iceServers){const s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(ga("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o])}n.iceServers=s}return new e(n,r)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function hu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function fu(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function du(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const zc=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:du,shimCallbacksAPI:au,shimConstraints:lu,shimCreateOfferLegacy:fu,shimGetUserMedia:cu,shimLocalStreamsAPI:su,shimRTCIceServerUrls:uu,shimRemoteStreamsAPI:ou,shimTrackEventTransceiver:hu},Symbol.toStringTag,{value:"Module"}));function pu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Js={exports:{}},Gc;function Rx(){return Gc||(Gc=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(r=>r.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const r={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":r.relatedAddress=n[s+1];break;case"rport":r.relatedPort=parseInt(n[s+1],10);break;case"tcptype":r.tcpType=n[s+1];break;case"ufrag":r.ufrag=n[s+1],r.usernameFragment=n[s+1];break;default:r[n[s]]===void 0&&(r[n[s]]=n[s+1]);break}return r},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const r=t.component;r==="rtp"?n.push(1):r==="rtcp"?n.push(2):n.push(r),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const r={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),r.name=n[0],r.clockRate=parseInt(n[1],10),r.channels=n.length===3?parseInt(n[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)r=s[o].trim().split("="),n[r[0].trim()]=r[1];return n},e.writeFmtp=function(t){let n="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),n+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(r.attribute=t.substring(n+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(n+1),r},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(r=>parseInt(r,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let r="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const r=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let a=3;a<s.length;a++){const c=s[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const u=e.parseRtpMap(l),h=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(u.parameters=h.length?e.parseFmtp(h[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(u=>u.type===c.type&&u.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let r="";r+="m="+t+" ",r+=n.codecs.length>0?"9":"0",r+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});let s=0;return n.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){const n=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),r.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(m.rtx={ssrc:l}),n.push(m),s&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-2e3*8:h=void 0,n.forEach(f=>{f.maxBitrate=h})),n},e.parseRtcpParameters=function(t){const n={},r=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];r&&(n.cname=r.value,n.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return n=r[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&r.push("a=max-message-size:"+n.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,r){let s;const o=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let r=0;r<n.length;r++)if(n[r].length<2||n[r].charAt(1)!=="=")return!1;return!0},i.exports=e})(Js)),Js.exports}var mu=Rx();const Ri=pu(mu),Px=Iu({__proto__:null,default:Ri},[mu]);function Kr(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const r=new e(n),s=Ri.parseCandidate(n.candidate);for(const o in s)o in r||Object.defineProperty(r,o,{value:s[o]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ii(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Yo(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ii(i,"icecandidate",e=>{if(e.candidate){const t=Ri.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Jr(i,e){if(!i.RTCPeerConnection)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Ri.splitSections(a.sdp);return c.shift(),c.some(l=>{const u=Ri.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Ri.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=r(c),u=s(arguments[0],c);let h;l===0&&u===0?h=Number.POSITIVE_INFINITY:l===0||u===0?h=Math.max(l,u):h=Math.min(l,u);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return h}}),this._sctp=f}return o.apply(this,arguments)}}function Zr(i){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype))return;function e(n,r){const s=n.send;n.send=function(){const a=arguments[0],c=a.length||a.size||a.byteLength;if(n.readyState==="open"&&r.sctp&&c>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return s.apply(n,arguments)}}const t=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=t.apply(this,arguments);return e(r,this),r},ii(i,"datachannel",n=>(e(n.channel,n.target),n))}function Ko(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Jo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&r instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Qr(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function es(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const Dx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Jo,shimAddIceCandidateNullOrEmpty:Qr,shimConnectionState:Ko,shimMaxMessageSize:Jr,shimParameterlessSetLocalDescription:es,shimRTCIceCandidate:Kr,shimRTCIceCandidateRelayProtocol:Yo,shimSendThrowTypeError:Zr},Symbol.toStringTag,{value:"Module"}));function Ix({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Bl,n=Ax(i),r={browserDetails:n,commonShim:Dx,extractVersion:tr,disableLog:Ex,disableWarnings:Cx,sdp:Px};switch(n.browser){case"chrome":if(!Oc||!jo||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=Oc,Qr(i,n),es(i),Gl(i,n),Vl(i),jo(i,n),Hl(i),jl(i,n),Wl(i),Xl(i),ql(i,n),Kr(i),Yo(i),Ko(i),Jr(i,n),Zr(i),Jo(i,n);break;case"firefox":if(!Bc||!qo||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=Bc,Qr(i,n),es(i),Yl(i,n),qo(i,n),Kl(i),Ql(i),Jl(i),Zl(i),eu(i),tu(i),nu(i),iu(i),ru(i),Kr(i),Ko(i),Jr(i,n),Zr(i);break;case"safari":if(!zc||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=zc,Qr(i,n),es(i),uu(i),fu(i),au(i),su(i),ou(i),hu(i),cu(i),du(i),Kr(i),Yo(i),Jr(i,n),Zr(i),Jo(i,n);break;default:t("Unsupported browser!");break}return r}const Vc=Ix({window:typeof window>"u"?void 0:window});function ri(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class xu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU);let s=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),o=a,s++}return this._dataCount++,t}}}function Lx(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.byteLength;return t}const Zs=Vc.default||Vc,Qi=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Zs.browserDetails.browser}getVersion(){return Zs.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=Zs.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ux=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),gu=()=>Math.random().toString(36).slice(2),Hc={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Fx extends xu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(r){r.target&&t(r.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Hc,this.browser=Qi.getBrowser(),this.browserVersion=Qi.getVersion(),this.pack=Nl,this.unpack=Fl,this.supports=(function(){const t={browser:Qi.isBrowserSupported(),webRTC:Qi.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Hc),t.audioVideo=!0;let r;try{r=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Qi.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Ux,this.randomToken=gu}}const Ot=new Fx,Nx="PeerJS: ";class kx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Nx,...t];for(const r in n)n[r]instanceof Error&&(n[r]="("+n[r].name+") "+n[r].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Me=new kx,_a={},Ox=Object.prototype.hasOwnProperty,Ft="~";function hr(){}Object.create&&(hr.prototype=Object.create(null),new hr().__proto__||(Ft=!1));function Bx(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function _u(i,e,t,n,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Bx(t,n||i,r),o=Ft?Ft+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],s]:i._events[o].push(s):(i._events[o]=s,i._eventsCount++),i}function ts(i,e){--i._eventsCount===0?i._events=new hr:delete i._events[e]}function Pt(){this._events=new hr,this._eventsCount=0}Pt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Ox.call(t,n)&&e.push(Ft?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Pt.prototype.listeners=function(e){var t=Ft?Ft+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,o=new Array(s);r<s;r++)o[r]=n[r].fn;return o};Pt.prototype.listenerCount=function(e){var t=Ft?Ft+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Pt.prototype.emit=function(e,t,n,r,s,o){var a=Ft?Ft+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,u,h;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,s),!0;case 6:return c.fn.call(c.context,t,n,r,s,o),!0}for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];c.fn.apply(c.context,u)}else{var f=c.length,m;for(h=0;h<f;h++)switch(c[h].once&&this.removeListener(e,c[h].fn,void 0,!0),l){case 1:c[h].fn.call(c[h].context);break;case 2:c[h].fn.call(c[h].context,t);break;case 3:c[h].fn.call(c[h].context,t,n);break;case 4:c[h].fn.call(c[h].context,t,n,r);break;default:if(!u)for(m=1,u=new Array(l-1);m<l;m++)u[m-1]=arguments[m];c[h].fn.apply(c[h].context,u)}}return!0};Pt.prototype.on=function(e,t,n){return _u(this,e,t,n,!1)};Pt.prototype.once=function(e,t,n){return _u(this,e,t,n,!0)};Pt.prototype.removeListener=function(e,t,n,r){var s=Ft?Ft+e:e;if(!this._events[s])return this;if(!t)return ts(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!n||o.context===n)&&ts(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||r&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:ts(this,s)}return this};Pt.prototype.removeAllListeners=function(e){var t;return e?(t=Ft?Ft+e:e,this._events[t]&&ts(this,t)):(this._events=new hr,this._eventsCount=0),this};Pt.prototype.off=Pt.prototype.removeListener;Pt.prototype.addListener=Pt.prototype.on;Pt.prefixed=Ft;Pt.EventEmitter=Pt;_a=Pt;var si={};ri(si,"ConnectionType",()=>zn);ri(si,"PeerErrorType",()=>_t);ri(si,"BaseConnectionErrorType",()=>Zo);ri(si,"DataConnectionErrorType",()=>va);ri(si,"SerializationType",()=>xs);ri(si,"SocketEventType",()=>On);ri(si,"ServerMessageType",()=>At);var zn=(function(i){return i.Data="data",i.Media="media",i})({}),_t=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),Zo=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),va=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),xs=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),On=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),At=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const vu="1.5.5";class zx extends _a.EventEmitter{constructor(e,t,n,r,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+r+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+vu),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Me.log("Server message received:",s)}catch{Me.log("Invalid server message",r.data);return}this.emit(On.Message,s)},this._socket.onclose=r=>{this._disconnected||(Me.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(On.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Me.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Me.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:At.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(On.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class yu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===zn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(n.label,r);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Me.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Me.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Me.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:At.Candidate,payload:{candidate:o.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Me.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Zo.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Me.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Zo.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Me.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Me.log("Listening for data channel"),e.ondatachannel=o=>{Me.log("Received data channel");const a=o.channel;s.getConnection(t,n)._initializeDataChannel(a)},Me.log("Listening for remote stream"),e.ontrack=o=>{Me.log("Received remote stream");const a=o.streams[0],c=s.getConnection(t,n);if(c.type===zn.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){Me.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Me.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Me.log("Set localDescription:",n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===zn.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:At.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(_t.WebRTC,r),Me.log("Failed to setLocalDescription, ",r))}}catch(n){t.emitError(_t.WebRTC,n),Me.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Me.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Me.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:At.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(_t.WebRTC,r),Me.log("Failed to setLocalDescription, ",r)}}catch(n){t.emitError(_t.WebRTC,n),Me.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,r=this.connection.provider;Me.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),Me.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){r.emitError(_t.WebRTC,o),Me.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Me.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Me.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(_t.WebRTC,t),Me.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Me.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Me.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Me.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class bu extends _a.EventEmitter{emitError(e,t){Me.error("Error:",t),this.emit("error",new Gx(`${e}`,t))}}class Gx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Su extends bu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class cs extends Su{static#e=this.ID_PREFIX="mc_";get type(){return zn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||cs.ID_PREFIX+Ot.randomToken(),this._negotiator=new yu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Me.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Me.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case At.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case At.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Me.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Me.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const r of n)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class Vx{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:r,path:s,key:o}=this._options,a=new URL(`${t}://${n}:${r}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",vu),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Me.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Ot.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Ot.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Me.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class ls extends Su{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return zn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||ls.ID_PREFIX+gu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new yu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Me.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Me.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(va.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case At.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case At.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Me.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class ya extends ls{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ls.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Me.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Qs extends ya{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new xu,this.serialization=xs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Fl(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const r=Lx(n.data);this._handleDataMessage({data:r})}}_send(e,t){const n=Nl(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Me.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Hx extends ya{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=xs.None}}class Wx extends ya{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Ot.chunkedMTU){this.emitError(va.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=xs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class rr extends bu{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Hx,json:Wx,binary:Qs,"binary-utf8":Qs,default:Qs},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Ot.CLOUD_HOST,port:Ot.CLOUD_PORT,path:"/",key:rr.DEFAULT_KEY,token:Ot.randomToken(),config:Ot.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Ot.CLOUD_HOST?this._options.secure=Ot.isSecure():this._options.host==Ot.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Me.setLogFunction(this._options.logFunction),Me.logLevel=this._options.debug||0,this._api=new Vx(t),this._socket=this._createServerConnection(),!Ot.supports.audioVideo&&!Ot.supports.data){this._delayedAbort(_t.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Ot.validateId(n)){this._delayedAbort(_t.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(_t.ServerError,r))}_createServerConnection(){const e=new zx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(On.Message,t=>{this._handleMessage(t)}),e.on(On.Error,t=>{this._abort(_t.SocketError,t)}),e.on(On.Disconnected,()=>{this.disconnected||(this.emitError(_t.Network,"Lost connection to server."),this.disconnect())}),e.on(On.Close,()=>{this.disconnected||this._abort(_t.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,r=e.src;switch(t){case At.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case At.Error:this._abort(_t.ServerError,n.msg);break;case At.IdTaken:this._abort(_t.UnavailableID,`ID "${this.id}" is taken`);break;case At.InvalidKey:this._abort(_t.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case At.Leave:Me.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case At.Expire:this.emitError(_t.PeerUnavailable,`Could not connect to peer ${r}`);break;case At.Offer:{const s=n.connectionId;let o=this.getConnection(r,s);if(o&&(o.close(),Me.warn(`Offer received for existing Connection ID:${s}`)),n.type===zn.Media){const c=new cs(r,this,{connectionId:s,_payload:n,metadata:n.metadata});o=c,this._addConnection(r,o),this.emit("call",c)}else if(n.type===zn.Data){const c=new this._serializers[n.serialization](r,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(r,o),this.emit("connection",c)}else{Me.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(s);for(const c of a)o.handleMessage(c);break}default:{if(!n){Me.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=n.connectionId,o=this.getConnection(r,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):Me.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Me.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new cs(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Me.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const r of n)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Me.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Me.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Me.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Me.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Me.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(_t.ServerError,t))}}function Xx(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ns={exports:{}};ns.exports;var Wc;function $x(){return Wc||(Wc=1,(function(i){(function(){function e(n,r){return r?Xx(n):n.slice?e[s(n)]:function(o,a){n(o={exports:{}}),e[s(a)]=o.exports};function s(o){return o.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(s,o){var a="";for(s=s||24,o=o||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";s-- >0;)a+=o.charAt(Math.floor(Math.random()*o.length));return a},String.match=function(s,o){var a,c;return typeof s!="string"?!1:(typeof o=="string"&&(o={"=":o}),o=o||{},a=o["="]||o["*"]||o[">"]||o["<"],s===a?!0:c!==o["="]?!1:(a=o["*"]||o[">"],s.slice(0,(a||"").length)===a?!0:c!==o["*"]?!1:c!==o[">"]&&c!==o["<"]?s>=o[">"]&&s<=o["<"]:c!==o[">"]&&s>=o[">"]||c!==o["<"]&&s<=o["<"]))},String.hash=function(s,o){if(typeof s=="string"){if(o=o||0,!s.length)return o;for(var a=0,c=s.length,l;a<c;++a)l=s.charCodeAt(a),o=(o<<5)-o+l,o|=0;return o}};var r=Object.prototype.hasOwnProperty;Object.plain=function(s){return s?s instanceof Object&&s.constructor===Object||Object.prototype.toString.call(s).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(s,o){for(var a in s)if(r.call(s,a)&&(!o||o.indexOf(a)==-1))return!1;return!0},Object.keys=Object.keys||function(s){var o=[];for(var a in s)r.call(s,a)&&o.push(a);return o},(function(){var s,o=setTimeout,a=0,c=0,l=typeof setImmediate!=""+s&&setImmediate||(function(h,f){return typeof MessageChannel==""+s?o:((h=new MessageChannel).port1.onmessage=function(m){m.data==""&&f()},function(m){f=m,h.port2.postMessage("")})})(),u=o.check=o.check||typeof performance!=""+s&&performance||{now:function(){return+new Date}};o.hold=o.hold||9,o.poll=o.poll||function(h){if(o.hold>=u.now()-a&&c++<3333){h();return}l(function(){a=u.now(),h()},c=0)}})(),(function(){var s=setTimeout,o=s.turn=s.turn||function(f){a.push(f)==1&&c(h)},a=o.s=[],c=s.poll,l=0,u,h=function(){(u=a[l++])&&u(),(l==a.length||l==99)&&(a=o.s=a.slice(l),l=0),a.length&&c(h)}})(),(function(){var s,o=setTimeout,a=o.turn;(o.each=o.each||function(c,l,u,h){h=h||9,(function f(m,g,v){if(g=(m=(c||[]).splice(0,h)).length){for(var x=0;x<g&&s===(v=l(m[x]));x++);if(s===v){a(f);return}}u&&u(v)})()})()})()})(e,"./shim"),e(function(n){n.exports=function r(u,o,a){if(!u)return{to:r};var c,l=typeof o=="function",u=(this.tag||(this.tag={}))[u]||l&&(this.tag[u]={tag:u,to:r._={next:function(f){var m;(m=this.to)&&m.next(f)}}});if(l){var h={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:o,the:u,on:this,as:a};return(h.back=u.last||u).to=h,u.last=h}return(u=u.to)&&c!==o&&u.next(o),u}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var u=+new Date;return c<u?(o=0,c=u+r.drift):c=u+(o+=1)/a+r.drift}r.drift=0;var s=-1/0,o=0,a=999,c=s,l;r.is=function(u,h,f){var m=h&&u&&u._&&u._[">"]||f;if(m)return typeof(m=m[h])=="number"?m:s},r.ify=function(u,h,f,m,g){(u=u||{})._=u._||{},g&&(u._["#"]=g);var v=u._[">"]||(u._[">"]={});return l!==h&&h!=="_"&&(typeof f=="number"&&(v[h]=f),l!==m&&(u[h]=m)),u},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(s){var o={s:{}},a=o.s;s=s||{max:999,age:1e3*9},o.check=function(l){return a[l]?c(l):!1};var c=o.track=function(l){var u=a[l]||(a[l]={});return u.was=o.now=+new Date,o.to||(o.to=setTimeout(o.drop,s.age+9)),c.ed&&c.ed(l),u};return o.drop=function(l){o.to=null,o.now=+new Date;var u=Object.keys(a);console.STAT&&console.STAT(o.now,+new Date-o.now,"dup drop keys"),setTimeout.each(u,function(h){var f=a[h];f&&(l||s.age)>o.now-f.was||delete a[h]},0,99)},o}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(o,a){if(this.on){var c=(this.opt||{}).lack||9e3;if(typeof o!="function"){if(!o)return;var u=o["#"]||o,l=(this.tag||"")[u];return l?(a&&(l=this.on(u,a),clearTimeout(l.err),l.err=setTimeout(function(){l.off()},c)),!0):void 0}var u=a&&a["#"]||r(9);if(!o)return u;var h=this.on(u,o,a);return h.err=h.err||setTimeout(function(){h.off(),h.next({err:"Error: No ACK yet.",lack:!0})},c),u}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(g){return g instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:g}):new r(g)}r.is=function(g){return g instanceof r||g&&g._&&g===g._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),(function(){r.create=function(y){y.root=y.root||y,y.graph=y.graph||{},y.on=y.on||r.on,y.ask=y.ask||r.ask,y.dup=y.dup||r.dup();var R=y.$.opt(y.opt);return y.once||(y.on("in",g,y),y.on("out",g,y),y.on("put",d,y),r.on("create",y),y.on("create",y)),y.once=1,R};function g(y){if(y){if(y.out===g){this.to.next(y);return}var R=this,L=R.as,N=L.at||L,O=N.$,U=N.dup,z,W=y.DBG;if((z=y["#"])||(z=y["#"]=o(9)),!U.check(z)){if(U.track(z),z=y._,y._=typeof z=="function"?z:function(){},y.$&&y.$===(y.$._||"").$||(y.$=O),y["@"]&&!y.put&&p(y),!N.ask(y["@"],y))if(W&&(W.u=+new Date),y.put){v(y);return}else y.get&&r.on.get(y,O);W&&(W.uc=+new Date),R.to.next(y),W&&(W.ua=+new Date),!(y.nts||y.NTS)&&(y.out=g,N.on("out",y),W&&(W.ue=+new Date))}}}function v(y){if(y){var R=y._||"",L=R.root=((R.$=y.$||"")._||"").root;if(y["@"]&&R.faith&&!R.miss){y.out=g,L.on("out",y);return}R.latch=L.hatch,R.match=L.hatch=[];var N=y.put,O=R.DBG=y.DBG,U=+new Date;if(D=D||U,!(N["#"]&&N["."])){O&&(O.p=U),R["#"]=y["#"],R.msg=y,R.all=0,R.stun=1;var z=Object.keys(N);console.STAT&&console.STAT(U,((O||R).pk=+new Date)-U,"put sort");var W=0,Z,re,ae,pe,we,K,Q;(function ce(Re){if(Z!=W){if(Z=W,!(ae=z[W])){console.STAT&&console.STAT(U,((O||R).pd=+new Date)-U,"put"),b(R);return}(pe=N[ae])?(Q=pe._)?ae!==Q["#"]?K=C+T(ae)+"soul not same.":(we=Q[">"])||(K=C+T(ae)+"no state."):K=C+T(ae)+"no meta.":K=C+T(ae)+"no node.",re=Object.keys(pe||{})}if(K){y.err=R.err=K,b(R);return}var Ce=0,Ne;for(Re=Re||0;Re++<9&&(Ne=re[Ce++]);)if(Ne!=="_"){var it=pe[Ne],ke=we[Ne];if(h===ke){K=C+T(Ne)+"on"+T(ae)+"no state.";break}if(!c(it)){K=C+T(Ne)+"on"+T(ae)+"bad "+typeof it+T(it);break}x(it,Ne,ae,ke,y),++M}if((re=re.slice(Ce)).length){a(ce);return}++W,re=null,ce(Re)})()}}}r.on.put=v;function x(y,R,L,N,O){var U=O._||"",z=U.root,W=z.graph,Z,re=W[L]||f,ae=l(re,R,1),pe=re[R],we=U.DBG;(Z=console.STAT)&&(!W[L]||!pe)&&(Z.has=(Z.has||0)+1);var K=S();if(N>K){setTimeout(function(){x(y,R,L,N,O)},(Z=N-K)>I?I:Z),console.STAT&&console.STAT((we||U).Hf=+new Date,Z,"future");return}if(!(N<ae)&&!(!U.faith&&N===ae&&(y===pe||A(y)<=A(pe))&&!U.miss)){U.stun++;var Q=O["#"]+U.all++,ce={toString:function(){return Q},_:U};ce.toJSON=ce.toString,z.dup.track(ce)["#"]=O["#"],we&&(we.ph=we.ph||+new Date),z.on("put",{"#":ce,"@":O["@"],put:{"#":L,".":R,":":y,">":N},ok:O.ok,_:U})}}function d(y){var R;(R=(y._||"").DBG)&&(R.pa=+new Date,R.pm=R.pm||+new Date);var L=this,N=L.as,O=N.graph,U=y._,z=y.put,W=z["#"],Z=z["."],re=z[":"],ae=z[">"];y["#"];var pe;(pe=U.msg)&&(pe=pe.put)&&(pe=pe[W])&&u(pe,Z,ae,re,W),O[W]=u(O[W],Z,ae,re,W),(pe=(N.next||"")[W])&&pe.on("in",y),b(U),L.to.next(y)}function b(y,R){var L;if(!y.stop&&!(!y.err&&0<--y.stun)&&(y.stop=1,!!(L=y.root))){var N=y.match;N.end=1,N===L.hatch&&(!(N=y.latch)||N.end?delete L.hatch:L.hatch=N),y.hatch&&y.hatch(),setTimeout.each(y.match,function(O){O&&O()}),!(!(R=y.msg)||y.err||R.err)&&(R.out=g,y.root.on("out",R),E())}}function p(y){var R=y["@"]||"",L;if(!(L=R._)){var N=(N=y.$)&&(N=N._)&&(N=N.root)&&(N=N.dup);if(!(N=N.check(R)))return;y["@"]=N["#"]||y["@"];return}L.acks=(L.acks||0)+1,(L.err=y.err)&&(y["@"]=L["#"],b(L)),L.ok=y.ok||L.ok,!L.stop&&!L.crack&&(L.crack=L.match&&L.match.push(function(){_(L)})),_(L)}function _(y){!y||!y.root||y.stun||y.acks!==y.all||y.root.on("in",{"@":y["#"],err:y.err,ok:y.err?h:y.ok||{"":1}})}var C="Error: Invalid graph!",T=function(y){return" '"+(""+y).slice(0,9)+"...' "},A=JSON.stringify,I=2147483647,S=r.state,M=0,D,E=function(){M>999&&M/-(D-(D=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),E=function(){M=0})}})(),(function(){r.on.get=function(v,x){var d=x._,b=v.get,p=b["#"],_=d.graph[p],C=b["."],T=d.next||(d.next={}),A=T[p],I=v._||{},S=I.DBG=v.DBG;if(S&&(S.g=+new Date),!_)return d.on("get",v);if(C){if((typeof C!="string"||h===_[C])&&!((A||"").next||"")[C]){d.on("get",v);return}_=u({},C,l(_,C),_[C],p)}_&&g(v,_),d.on("get",v)};function g(v,x){var d=+new Date,b=v._||{},p=b.DBG=v.DBG,_=v["#"],C=o(9),T=Object.keys(x||"").sort(),A=((x||"")._||"")["#"];T.length;var I=v.$._.root,S=x===I.graph[A];console.STAT&&console.STAT(d,((p||b).gk=+new Date)-d,"got keys"),x&&(function M(){d=+new Date;for(var D=0,E,y={},R;D<9&&(E=T[D++]);)u(y,E,l(x,E),x[E],A);T=T.slice(D),(R={})[A]=y,y=R;var L;S&&(L=function(){},L.ram=L.faith=!0),R=T.length,console.STAT&&console.STAT(d,-(d-(d=+new Date)),"got copied some"),p&&(p.ga=+new Date),I.on("in",{"@":_,"#":C,put:y,"%":R?C=o(9):h,$:I.$,_:L,DBG:p,FOO:1}),console.STAT&&console.STAT(d,+new Date-d,"got in"),R&&setTimeout.turn(M)})(),x||I.on("in",{"@":v["#"]})}r.on.get.ack=g})(),(function(){r.chain.opt=function(g){g=g||{};var v=this,x=v._,d=g.peers||g;return Object.plain(g)||(g={}),Object.plain(x.opt)||(x.opt=g),typeof d=="string"&&(d=[d]),Object.plain(x.opt.peers)||(x.opt.peers={}),d instanceof Array&&(g.peers={},d.forEach(function(b){var p={};p.id=p.url=b,g.peers[b]=x.opt.peers[b]=x.opt.peers[b]||p})),s(g,function b(p){var _=this[p];if(this&&this.hasOwnProperty(p)||typeof _=="string"||Object.empty(_)){this[p]=_;return}_&&_.constructor!==Object&&!(_ instanceof Array)||s(_,b)}),x.opt.from=g,r.on("opt",x),x.opt.uuid=x.opt.uuid||function(p){return r.state().toString(36).replace(".","")+String.random(p||12)},v}})();var s=function(g,v){Object.keys(g).forEach(v,g)},o=String.random,a=setTimeout.turn,c=r.valid,l=r.state.is,u=r.state.ify,h,f={},m;r.log=function(){return!r.log.off&&m.log.apply(m,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(g,v,x){return(x=r.log.once)[g]=x[g]||0,x[g]++||r.log(v)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(m=console).only=function(g,v){return m.only.i&&g===m.only.i&&m.only.i++&&(m.log.apply(m,arguments)||v)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(a,c){var l;if(a=a||1,a===-1||a===1/0)return this._.root.$;if(a===1)return(this._.back||this._).$;var u=this,h=u._;if(typeof a=="string"&&(a=a.split(".")),a instanceof Array){var f=0,m=a.length,l=h;for(f;f<m;f++)l=(l||s)[a[f]];return o!==l?c?u:l:(l=h.back)?l.$.back(a,c):void 0}if(typeof a=="function"){for(var g,l={back:h};(l=l.back)&&o===(g=a(l,c)););return g}return typeof a=="number"?(h.back||h).$.back(a-1):this};var s={},o})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(b){var p=this,_=p._,C=new(b||p).constructor(p),T=C._,A;return T.root=A=_.root,T.id=++A.once,T.back=p._,T.on=r.on,T.on("in",r.on.in,T),T.on("out",r.on.out,T),C};function s(b){var p,_=this.as,C=_.back,T=_.root,A;if(b.$||(b.$=_.$),this.to.next(b),_.err){_.on("in",{put:_.put=h,$:_.$});return}if(p=b.get){if(T.pass&&(T.pass[_.id]=_),_.lex&&Object.keys(_.lex).forEach(function(I){A[I]=_.lex[I]},A=b.get=b.get||{}),p["#"]||_.soul){if(p["#"]=p["#"]||_.soul,b["#"]||(b["#"]=f(9)),C=T.$.get(p["#"])._,p=p["."]){if(g(C.put,p)&&(A=C.ask&&C.ask[p],(C.ask||(C.ask={}))[p]=C.$.get(p)._,C.on("in",{get:p,put:{"#":C.soul,".":p,":":C.put[p],">":x(T.graph[C.soul],p)}}),A))return}else{if(A=C.ask&&C.ask[""],(C.ask||(C.ask={}))[""]=C,h!==C.put&&(C.on("in",C),A))return;b.$=C.$}return T.ask(l,b),T.on("in",b)}if(p["."])return _.get?(b={get:{".":_.get},$:_.$},(C.ask||(C.ask={}))[_.get]=b.$._,C.on("out",b)):(b={get:_.lex?b.get:{},$:_.$},C.on("out",b));if((_.ask||(_.ask={}))[""]=_,_.get)return p["."]=_.get,(C.ask||(C.ask={}))[_.get]=b.$._,C.on("out",b)}return C.on("out",b)}r.on.out=s;function o(b,p){p=p||this.as;var _=p.root,C=b.$||(b.$=p.$),T=(C||"")._||u,A=b.put||"",I=A["#"],S=A["."],M=h!==A["="]?A["="]:A[":"],D=A[">"]||-1/0,E;if(h!==b.put&&(h===A["#"]||h===A["."]||h===A[":"]&&h===A["="]||h===A[">"])){if(!m(A)){if(!(I=((A||"")._||"")["#"])){console.log("chain not yet supported for",A,"...",b,p);return}return C=p.root.$.get(I),setTimeout.each(Object.keys(A).sort(),function(y){y=="_"||h===(D=x(A,y))||p.on("in",{$:C,put:{"#":I,".":y,"=":A[y],">":D},VIA:b})})}p.on("in",{$:T.back.$,put:{"#":I=T.back.soul,".":S=T.has||T.get,"=":A,">":x(T.back.put,S)},via:b});return}(b.seen||"")[p.id]||((b.seen||(b.seen=function(){}))[p.id]=p,p!==T&&(Object.keys(b).forEach(function(y){A[y]=b[y]},A={}),A.get=p.get||A.get,!p.soul&&!p.has?A.$$$=A.$$$||p.$:T.soul&&(A.$=p.$,A.$$=A.$$||T.$),b=A),c(b,p),(p.soul||b.$$)&&D>=x(_.graph[I],S)&&((A=_.$.get(I)._).put=d(A.put,S,D,M,I)),!T.soul&&D>=x(_.graph[I],S)&&(E=(_.$.get(I)._.next||"")[S])&&(E.put=M,typeof(A=m(M))=="string"&&(E.put=_.$.get(A)._.put||M)),this.to&&this.to.next(b),p.any&&setTimeout.each(Object.keys(p.any),function(y){(y=p.any[y])&&y(b)},0,99),p.echo&&setTimeout.each(Object.keys(p.echo),function(y){(y=p.echo[y])&&y.on("in",b)},0,99),((b.$$||"")._||T).soul&&(E=p.next)&&(E=E[S])&&(A={},Object.keys(b).forEach(function(y){A[y]=b[y]}),A.$=(b.$$||b.$).get(A.get=S),delete A.$$,delete A.$$$,E.on("in",A)),a(b,p))}r.on.in=o;function a(b,p){if(p=p||this.as||b.$._,!(b.$$&&this!==r.on)&&!(!b.put||p.soul)){var _=b.put||"",C=_["="]||_[":"],S,T=p.root,A=T.$.get(_["#"]).get(_["."])._;if(typeof(C=m(C))!="string"){this===r.on&&((A.echo||(A.echo={}))[p.id]=p);return}if(!((A.echo||(A.echo={}))[p.id]&&!(T.pass||"")[p.id])){if(S=T.pass){if(S[C+p.id])return;S[C+p.id]=1}(A.echo||(A.echo={}))[p.id]=p,p.has&&(p.link=C);var I=T.$.get(A.link=C)._;(I.echo||(I.echo={}))[A.id]=A;var S=p.ask||"";(S[""]||p.lex)&&I.on("out",{get:{"#":C}}),setTimeout.each(Object.keys(S),function(M,D){!M||!(D=S[M])||D.on("out",{get:{"#":C,".":M}})},0,99)}}}r.on.link=a;function c(b,p){var _=b.put||"",C=h!==_["="]?_["="]:_[":"],T=p.root,A,I;if(h===C){if(p.soul&&h!==p.put||(I=(b.$$||b.$||"")._||"",b["@"]&&(h!==I.put||h!==p.put)))return;(A=p.link||b.linked)&&delete(T.$.get(A)._.echo||"")[p.id],p.has&&(p.link=null),p.put=h,setTimeout.each(Object.keys(p.next||""),function(S,M){(M=p.next[S])&&(A&&delete(T.$.get(A).get(S)._.echo||"")[M.id],M.on("in",{get:S,put:h,$:M.$}))},0,99);return}p.soul||b.$$||(A=m(C),I=b.$._||"",!((A===I.link||p.has&&!I.link)&&!((T.pass||"")[p.id]&&typeof A!="string"))&&(delete(I.echo||"")[p.id],c({get:p.get,put:h,$:b.$,linked:b.linked=b.linked||I.link},p)))}r.on.unlink=c;function l(b,p){var _=this.as,C=_.$._;C.root;var T=_.get||"",A=(b.put||"")[T["#"]]||"";if(!b.put||typeof T["."]=="string"&&h===A[T["."]]){if(h!==C.put||!C.soul&&!C.has)return;C.ack=(C.ack||0)+1,C.on("in",{get:C.get,put:C.put=h,$:C.$,"@":b["@"]});return}(b._||{}).miss=1,r.on.put(b)}var u={},h,f=String.random,m=r.valid,g=function(b,p){return b&&Object.prototype.hasOwnProperty.call(b,p)},v=r.state,x=v.is,d=v.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(h,f,m){var g,v;if(typeof h=="string"){if(h.length==0)return(g=this.chain())._.err={err:r.log("0 length key!",h)},f&&f.call(g,g._.err),g;var x=this,d=x._,b=d.next||c;(g=b[h])||(g=h&&s(h,x)),g=g&&g.$}else if(typeof h=="function"){let S=function(M,D,E){if(!S.stun&&!((U=_.pass)&&!U[C])){var y=M.$._,R=(M.$$||"")._,L=(R||y).put,N=!y.has&&!y.soul,O={},U;if((N||u===L)&&(L=u===((U=M.put)||"")["="]?u===(U||"")[":"]?U:U[":"]:U["="]),typeof(U=r.valid(L))=="string"&&(L=u===(U=_.$.get(U)._.put)?p.not?u:L:U),!(p.not&&u===L)){if(u===p.stun){if((U=_.stun)&&U.on&&(d.$.back(function(z){if(U.on(""+z.id,O={}),(O.run||0)<S.id)return O}),!O.run&&U.on(""+y.id,O={}),!O.run&&R&&U.on(""+R.id,O={}),S.id>O.run&&((!O.stun||O.stun.end)&&(O.stun=U.on("stun"),O.stun=O.stun&&O.stun.last),O.stun&&!O.stun.end))){(O.stun.add||(O.stun.add={}))[C]=function(){S(M,D,1)};return}if(u===L&&(E=0),(U=_.hatch)&&!U.end&&u===p.hatch&&!E){if(T[y.$._.id])return;T[y.$._.id]=1,U.push(function(){S(M,D,1)});return}T={}}if(_.pass){if(_.pass[C+y.id])return;_.pass[C+y.id]=1}if(p.on){p.ok.call(y.$,L,y.get,M,D||S);return}if(p.v2020){p.ok(M,D||S);return}Object.keys(M).forEach(function(z){U[z]=M[z]},U={}),M=U,M.put=L,p.ok.call(p.as,M,D||S)}}};var A=S;if(f===!0)return o(this,h,f,m),this;g=this;var d=g._,p=f||{},_=d.root,C;p.at=d,p.ok=h;var T={};return S.at=d,(d.any||(d.any={}))[C=String.random(7)]=S,S.off=function(){S.stun=1,d.any&&delete d.any[C]},S.rid=a,S.id=p.run||++_.once,v=_.pass,(_.pass={})[C]=1,p.out=p.out||{get:{}},d.on("out",p.out),_.pass=v,g}else{if(typeof h=="number")return this.get(""+h,f,m);if(typeof(v=l(h))=="string")return this.get(v,f,m);(v=this.get.next)&&(g=v(this,h))}return g?(f&&typeof f=="function"&&g.get(f,m),g):((g=this.chain())._.err={err:r.log("Invalid get request!",h)},f&&f.call(g,g._.err),g)};function s(h,f){var m=f._,g=m.next,v=f.chain(),x=v._;return g||(g=m.next={}),g[x.get=h]=x,f===m.root.$?x.soul=h:(m.soul||m.has)&&(x.has=h),x}function o(h,f,m,g){var v=h._,x=0,d;return(d=v.soul||v.link)?f(d,g,v):v.jam?v.jam.push([f,g]):(v.jam=[[f,g]],h.get(function(p,_){if(!(u===p.put&&!v.root.opt.super&&(d=Object.keys(v.root.opt.peers).length)&&++x<=d)){_.rid(p);var C=(C=p.$)&&C._||{},T=0,A;for(d=v.jam,delete v.jam;A=d[T++];){var I=A[0];A=A[1],I&&I(C.link||C.soul||r.valid(p.put)||((p.put||{})._||{})["#"],A,p,_)}}},{out:{get:{".":!0}}}),h)}function a(h){var f=this.at||this.on;if(!h||f.soul||f.has)return this.off();if(h=(h=(h=h.$||h)._||h).id){f.map;var m;if((m=this.seen||(this.seen={}))[h])return!0;m[h]=!0}}var c={},l=r.valid,u})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(g,v,x){var d=this,b=d._,p=b.root;x=x||{},x.root=b.root,x.run||(x.run=p.once),s(x,b.id),x.ack=x.ack||v,x.via=x.via||d,x.data=x.data||g,x.soul||(x.soul=b.soul||typeof v=="string"&&v);var _=x.state=x.state||r.state();return typeof g=="function"?(g(function(C){x.data=C,d.put(l,l,x)}),d):x.soul?(x.$=p.$.get(x.soul),x.todo=[{it:x.data,ref:x.$}],x.turn=x.turn||h,x.ran=x.ran||o,(function C(){var T=x.todo,A=T.pop(),I=A.it;A.ref&&A.ref._.id;var S,M,D,E,y;if(s(x,A.ref),(E=A.todo)&&(M=E.pop(),I=I[M],E.length&&T.push(A)),M&&(T.path||(T.path=[])).push(M),!(S=f(I))&&!(y=r.is(I))){if(!Object.plain(I)){o.err(x,"Invalid data: "+c(I)+" at "+(x.via.back(function(U){U.get&&E.push(U.get)},E=[])||E.join("."))+"."+(T.path||[]).join("."));return}for(var R=x.seen||(x.seen=[]),L=R.length;L--;)if(I===(E=R[L]).it){S=I=E.link;break}}if(M&&S)A.node=m(A.node,M,_,I);else{let U=function(z,W){var Z=D.link["#"];W&&(W.off(),W.rid(z));var re=Z||z.soul||(E=(z.$$||z.$)._||"").soul||E.link||((E=E.put||"")._||"")["#"]||E["#"]||((E=z.put||"")&&z.$$?E["#"]:(E["="]||E[":"]||"")["#"]);if(!Z&&s(x,z.$),!re&&!A.link["#"]){(A.wait||(A.wait=[])).push(function(){U(z,W)});return}re||(re=[],(z.$$||z.$).back(function(ae){if(E=ae.soul||ae.link)return re.push(E);re.push(ae.get)}),re=re.reverse().join("/")),D.link["#"]=re,!y&&(((x.graph||(x.graph={}))[re]=D.node||(D.node={_:{}}))._["#"]=re),delete x.wait[N],D.wait&&setTimeout.each(D.wait,function(ae){ae&&ae()}),x.ran(x)};var O=U;if(!x.seen){o.err(x,"Data at root of graph must be a node (an object).");return}x.seen.push(D={it:I,link:{},todo:y?[]:Object.keys(I).sort().reverse(),path:(T.path||[]).slice(),up:A}),A.node=m(A.node,M,_,D.link),!y&&D.todo.length&&T.push(D);var N=x.seen.length;(x.wait||(x.wait={}))[N]="",E=(D.ref=y?I:M?A.ref.get(M):A.ref)._,(E=I&&(I._||"")["#"]||E.soul||E.link)?U({soul:E}):D.ref.get(U,{run:x.run,v2020:1,out:{get:{".":" "}}})}if(!T.length)return x.ran(x);x.turn(C)})(),d):(a(x),d)};function s(g,v){if(v){v=(v._||"").id||v;var x=g.root.stun||(g.root.stun={on:r.on}),d={},b;g.stun||(g.stun=x.on("stun",function(){})),(b=x.on(""+v))&&b.the.last.next(d),!(d.run>=g.run)&&x.on(""+v,function(p){if(g.stun.end){this.off(),this.to.next(p);return}p.run=p.run||g.run,p.stun=p.stun||g.stun})}}function o(g){if(g.err){o.end(g.stun,g.root);return}if(!(g.todo.length||g.end||!Object.empty(g.wait))){g.end=1;var v=g.$.back(-1)._,x=v.root,d=v.ask(function(C){x.on("ack",C),C.err&&!C.lack&&r.log(C),++b>(g.acks||0)&&this.off(),g.ack&&g.ack(C,this)},g.opt),b=0,p=g.stun,_;(_=function(){p&&(o.end(p,x),setTimeout.each(Object.keys(p=p.add||""),function(C){(C=p[C])&&C()}))}).hatch=_,g.ack&&!g.ok&&(g.ok=g.acks||9),g.via._.on("out",{put:g.out=g.graph,ok:g.ok&&{"@":g.ok+1},opt:g.opt,"#":d,_})}}o.end=function(g,v){g.end=u,g.the.to===g&&g===g.the.last&&delete v.stun,g.off()},o.err=function(g,v){(g.ack||u).call(g,g.out={err:g.err=r.log(v)}),g.ran(g)};function a(g){var v=g.via._,x;g.via=g.via.back(function(d){if(d.soul||!d.get)return d.$;x=g.data,(g.data={})[d.get]=x}),(!g.via||!g.via._.soul)&&(g.via=v.root.$.get(((g.data||"")._||"")["#"]||v.$.back("opt.uuid")())),g.via.put(g.data,g.ack,g)}function c(g,v){return g&&(v=g.constructor)&&v.name||typeof g}var l,u=function(){},h=setTimeout.turn,f=r.valid,m=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(a,c,l,u){var h=this,f=h._;f.root;var m;if(typeof a=="string")return c?(m=f.on(a,c,l||f,u),l&&l.$&&(l.subs||(l.subs=[])).push(m),h):f.on(a);var g=c;return(g=g===!0?{change:!0}:g||{}).not=1,g.on=1,h.get(a,g),h},r.chain.once=function(a,c){if(c=c||{},!a)return s(this);var l=this,u=l._,h=u.root;u.put;var f=String.random(7),m;return l.get(function(g,v,x,d){var b=this,p=b._,_=p.one||(p.one={});if(d.stun||_[f]==="")return;if((m=r.valid(g))===!0){C();return}if(typeof m=="string")return;clearTimeout((u.one||"")[f]),clearTimeout(_[f]),_[f]=setTimeout(C,c.wait||99);function C(T){if(!p.has&&!p.soul&&(p={put:g,get:v}),o===(m=p.put)&&(m=((x.$$||"")._||"").put),typeof r.valid(m)=="string"&&(m=h.$.get(m)._.put,m===o&&!T)){_[f]=setTimeout(function(){C(1)},c.wait||99);return}d.stun||_[f]!==""&&(_[f]="",(u.soul||u.has)&&d.off(),a.call(b,m,p.get),clearTimeout(_[f]))}},{on:1}),l};function s(a,c,l){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(l=a.chain())._.nix=a.once(function(u,h){l._.on("in",this._)}),l._.lex=a._.lex,l}r.chain.off=function(){var a=this,c=a._,l,u=c.back;if(u)return c.ack=0,(l=u.next)&&l[c.get]&&delete l[c.get],(l=u.any)&&(delete u.any,u.any={}),(l=u.ask)&&delete l[c.get],(l=u.put)&&delete l[c.get],(l=c.soul)&&delete u.root.graph[l],(l=c.map)&&Object.keys(l).forEach(function(h,f){f=l[h],f.link&&u.root.$.get(f.link).off()}),(l=c.next)&&Object.keys(l).forEach(function(h,f){f=l[h],f.$.off()}),c.on("off",{}),a};var o})(e,"./on"),e(function(n){var r=e("./index"),s=r.chain.get.next;r.chain.get.next=function(l,u){var h;return Object.plain(u)?(h=((h=u["#"])||"")["="]||h)?l.get(h):((h=l.chain()._).lex=u,l.on("in",function(f){String.match(f.get||(f.put||"")["."],u["."]||u["#"]||u)&&h.on("in",f),this.to.next(f)}),h.$):(s||a)(l,u)},r.chain.map=function(l,u,h){var f=this,m=f._,g,v;return Object.plain(l)&&(g=l["."]?l:{".":l},l=c),l?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),v=f.chain(),f.map().on(function(x,d,b,p){var _=(l||a).call(this,x,d,b,p);if(c!==_){if(x===_)return v._.on("in",b);if(r.is(_))return v._.on("in",_._);var C={};Object.keys(b.put).forEach(function(T){C[T]=b.put[T]},C),C["="]=_,v._.on("in",{get:d,put:C})}}),v):((v=m.each)||((m.each=v=f.chain())._.lex=g||v._.lex||m.lex,v._.nix=f.back("nix"),f.on("in",o,v._)),v)};function o(l){this.to.next(l);var u=this.as,h=l.$,f=h._,m=l.put,g;!f.soul&&!l.$$||(g=u.lex)&&!String.match(l.get||(m||"")["."],g["."]||g["#"]||g)||r.on.link(l,u)}var a=function(){},c})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(s,o,a){var c=this,l=c.back(-1),u,h;return o=o||function(){},a=a||{},a.item=a.item||s,(u=((s||"")._||"")["#"])&&((s={})["#"]=u),typeof(h=r.valid(s))=="string"?c.get(u=h).put(s,o,a):r.is(s)?(c.put(function(f){s.get(function(m,g,v){if(!m)return o.call(c,{err:r.log('Only a node can be linked! Not "'+v.put+'"!')});(h={})[m]={"#":m},f(h)},!0)}),s):(Object.plain(s)&&(s=l.get(u=c.back("opt.uuid")()).put(s)),c.get(u||l.back("opt.uuid")(7)).put(s,o,a))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},s=JSON.parseAsync||function(l,u,h){var f,m=+new Date;try{u(f,JSON.parse(l,h),o.sucks(+new Date-m))}catch(g){u(g)}},o=JSON.stringifyAsync||function(l,u,h,f){var m,g=+new Date;try{u(m,JSON.stringify(l,h,f),o.sucks(+new Date-g))}catch(v){u(v)}};o.sucks=function(l){l>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),o.sucks=r)};function a(l){var u=function(){},h=l.opt||{};h.log=h.log||console.log,h.gap=h.gap||h.wait||0,h.max=h.max||(h.memory?h.memory*999*999:3e8)*.3,h.pack=h.pack||h.max*.01*.01,h.puff=h.puff||9;var f=setTimeout.turn||setTimeout,m=l.dup,g=m.check,v=m.track,x=u.hear=function(p,_){if(p){if(h.max<=p.length)return u.say({dam:"!",err:"Message too big!"},_);u===this&&(x.d+=p.length||0,++x.c);var C=_.SH=+new Date,T=p[0],A;if(T==="["){s(p,function(I,S){if(I||!S)return u.say({dam:"!",err:"DAM JSON parse error."},_);console.STAT&&console.STAT(+new Date,S.length,"# on hear batch");var M=h.puff;(function D(){for(var E=+new Date,y=0,R;y<M&&(R=S[y++]);)u.hear(R,_);S=S.slice(y),console.STAT&&console.STAT(E,+new Date-E,"hear loop"),d(_),S.length&&f(D,0)})()}),p="";return}if(T==="{"||(p["#"]||Object.plain(p))&&(A=p)){if(A)return x.one(A,_,C);s(p,function(I,S){if(I||!S)return u.say({dam:"!",err:"DAM JSON parse error."},_);x.one(S,_,C)});return}}};x.one=function(p,_,D){var T,A,I,S,M;if(p.DBG&&(p.DBG=M={DBG:p.DBG}),M&&(M.h=D),M&&(M.hp=+new Date),(T=p["#"])||(T=p["#"]=String.random(9)),!(I=g(T))&&(A=p["##"],!(A&&(I=p["@"]||p.get&&T)&&m.check(S=I+A)))){if((p._=function(){}).via=u.leap=_,(I=p["><"])&&typeof I=="string"&&I.slice(0,99).split(",").forEach(function(E){this[E]=1},p._.yo={}),I=p.dam){(I=u.hear[I])&&I(p,_,l),v(T);return}(I=p.ok)&&(p._.near=I["/"]);var D=+new Date;M&&(M.is=D),_.SI=T,v.ed=function(E){T===E&&(v.ed=0,(E=m.s[T])&&(E.via=_,p.get&&(E.it=p)))},l.on("in",u.last=p),M&&(M.hd=+new Date),console.STAT&&console.STAT(D,+new Date-D,p.get?"msg get":p.put?"msg put":"msg"),v(T),S&&v(S),u.leap=u.last=null}},x.c=x.d=0,(function(){var p=0,_;u.hash=function(A,I){var S,M,D,E=+new Date;o(A.put,function y(R,L){var N=(M||(M=D=L||"")).slice(0,32768);if(S=String.hash(N,S),M=M.slice(32768),M){f(y,0);return}console.STAT&&console.STAT(E,+new Date-E,"say json+hash"),A._.$put=D,A["##"]=S,u.say(A,I),delete A._.$put},C)};function C(A,I){var S;return I instanceof Object?(Object.keys(I).sort().forEach(T,{to:S={},on:I}),S):I}function T(A){this.to[A]=this.on[A]}u.say=function(A,I){var S;if((S=this)&&(S=S.to)&&S.next&&S.next(A),!A)return!1;var M,D,E,y=A["@"],R=A._||(A._=function(){}),L=A.DBG,N=+new Date;if(R.y=R.y||N,I||L&&(L.y=N),(M=A["#"])||(M=A["#"]=String.random(9)),!_&&v(M),!(D=A["##"])&&c!==A.put&&!R.via&&y){u.hash(A,I);return}if(!I&&y&&(I=(S=m.s[y])&&(S.via||(S=S.it)&&(S=S._)&&S.via)||(S=u.last)&&y===S["#"]&&u.leap),!I&&y)return m.s[y]?void 0:(console.STAT&&console.STAT(+new Date,++p,"total no peer to ack to"),!1);if(y&&!A.put&&!D&&((m.s[y]||"").it||"")["##"])return!1;if(!I&&u.way)return u.way(A);if(L&&(L.yh=+new Date),!(E=R.raw)){u.raw(A,I);return}if(L&&(L.yr=+new Date),!I||!I.id){if(!Object.plain(I||h.peers))return!1;var N=+new Date;h.puff;var O=h.peers,U=Object.keys(I||h.peers||{});console.STAT&&console.STAT(N,+new Date-N,"peer keys"),(function Z(){var re=+new Date;_=1;var ae=R.raw;R.raw=E;for(var pe=0,we;pe<9&&(we=(U||"")[pe++]);)(we=O[we]||(I||"")[we])&&u.say(A,we);R.raw=ae,_=0,U=U.slice(pe),console.STAT&&console.STAT(re,+new Date-re,"say loop"),U.length&&(f(Z,0),y&&v(y))})();return}if(!I.wire&&u.wire&&u.wire(I),M!==I.last){if(I.last=M,I===R.via||(S=R.yo)&&(S[I.url]||S[I.pid]||S[I.id]))return!1;if(console.STAT&&console.STAT(N,((L||R).yp=+new Date)-(R.y||N),"say prep"),!_&&y&&v(y),I.batch){if(I.tail=(S=I.tail||0)+E.length,I.tail<=h.pack){I.batch+=(S?",":"")+E;return}d(I)}I.batch="[";var z=+new Date;setTimeout(function(){console.STAT&&console.STAT(z,+new Date-z,"0ms TO"),d(I)},h.gap),b(E,I),console.STAT&&y===I.SI&&console.STAT(N,+new Date-I.SH,"say ack")}},u.say.c=u.say.d=0,u.raw=function(A,I){if(!A)return"";var S=A._||{},M,D;if(D=S.raw)return D;if(typeof A=="string")return A;var E=A["##"],y=A["@"];if(E&&y){if(!S.via&&g(y+E))return!1;if(D=(m.s[y]||"").it){if(E===D["##"])return!1;D["##"]||(D["##"]=E)}}if(!A.dam&&!A["@"]){var R=0,L=[];D=h.peers;for(var N in D){var O=D[N];if(L.push(O.url||O.pid||O.id),++R>6)break}R>1&&(A["><"]=L.join())}if(A.put&&(D=A.ok)&&(A.ok={"@":(D["@"]||1)-1,"/":D["/"]==A._.near?u.near:D["/"]}),M=S.$put){D={},Object.keys(A).forEach(function(z){D[z]=A[z]}),D.put=":])([:",o(D,function(z,W){if(!z){var Z=+new Date;D=W.indexOf('"put":":])([:"'),U(c,W=W.slice(0,D+6)+M+W.slice(D+14)),console.STAT&&console.STAT(Z,+new Date-Z,"say slice")}});return}o(A,U);function U(z,W){z||(S.raw=W,u.say(A,I))}}})();function d(p){var _=p.batch,C=typeof _=="string";if(C&&(_+="]"),p.batch=p.tail=null,!!_&&!(C?3>_.length:!_.length)){if(!C)try{_=_.length===1?_[0]:JSON.stringify(_)}catch(T){return h.log("DAM JSON stringify error",T)}_&&b(_,p)}}function b(p,_){try{var C=_.wire;_.say?_.say(p):C.send&&C.send(p),u.say.d+=p.length||0,++u.say.c}catch{(_.queue=_.queue||[]).push(p)}}return u.near=0,u.hi=function(p){var _=p.wire,C;if(!_){u.wire(p.length&&{url:p,id:p}||p);return}p.id?h.peers[p.url||p.id]=p:(C=p.id=p.id||p.url||String.random(9),u.say({dam:"?",pid:l.opt.pid},h.peers[C]=p),delete m.s[p.last]),p.met||(u.near++,p.met=+new Date,l.on("hi",p)),C=p.queue,p.queue=[],setTimeout.each(C||[],function(T){b(T,p)},0,9)},u.bye=function(p){p.met&&--u.near,delete p.met,l.on("bye",p);var _=+new Date;_=_-(p.met||_),u.bye.time=((u.bye.time||_)+_)/2},u.hear["!"]=function(p,_){h.log("Error:",p.err)},u.hear["?"]=function(p,_){p.pid&&(_.pid||(_.pid=p.pid),p["@"])||(u.say({dam:"?",pid:h.pid,"@":p["#"]},_),delete m.s[_.last])},u.hear.mob=function(p,_){if(p.peers){var C=Object.keys(p.peers),T=C[Math.random()*C.length>>0];T&&(u.bye(_),u.hi(T))}},l.on("create",function(p){p.opt.pid=p.opt.pid||String.random(9),this.to.next(p),p.on("out",u.say)}),l.on("bye",function(p,_){p=h.peers[p.id||p]||p,this.to.next(p),p.bye?p.bye():(_=p.wire)&&_.close&&_.close(),delete h.peers[p.id],p.wire=null}),l.on("bye",function(p,_){this.to.next(p),(_=console.STAT)&&(_.peers=u.near),(_=p.url)&&setTimeout(function(){},h.lack||9e3)}),l.on("hi",function(p,_){if(this.to.next(p),(_=console.STAT)&&(_.peers=u.near),!h.super){var C=Object.keys(l.next||"");C.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(C,function(T){var A=l.next[T];if(h.super||(A.ask||"")[""]){u.say({get:{"#":T}},p);return}setTimeout.each(Object.keys(A.ask||""),function(I){I&&u.say({"##":String.hash((l.graph[T]||"")[I]),get:{"#":T,".":I}},p)})})}}),u}var c;try{n.exports=a}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(o){if(this.to.next(o),o.once)return;var a=o.opt;if(a.WebSocket===!1)return;var c=r.window||{},l=a.WebSocket||c.WebSocket||c.webkitWebSocket||c.mozWebSocket;if(!l)return;a.WebSocket=l;var u=a.mesh=a.mesh||r.Mesh(o);u.wire||a.wire,u.wire=a.wire=h;function h(v){try{if(!v||!v.url)return d&&d(v);var x=v.url.replace(/^http/,"ws"),d=v.wire=new a.WebSocket(x);return d.onclose=function(){m(v),a.mesh.bye(v)},d.onerror=function(b){m(v)},d.onopen=function(){a.mesh.hi(v)},d.onmessage=function(b){b&&a.mesh.hear(b.data||b,v)},d}catch{a.mesh.bye(v)}}setTimeout(function(){!a.super&&o.on("out",{dam:"hi"})},1);var f=2*999;function m(v){clearTimeout(v.defer),a.peers[v.url]&&(g&&v.retry<=0||(v.retry=(v.retry||a.retry+1||60)-(-v.tried+(v.tried=+new Date)<f*4?1:0),v.defer=setTimeout(function x(){if(g&&g.hidden)return setTimeout(x,f);h(v)},f)))}var g=""+s!=typeof document&&document});var s})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},s;try{s=(Gun.window||r).localStorage}catch{}s||(Gun.log("Warning: No localStorage exists to persist data to!"),s={setItem:function(a,c){this[a]=c},removeItem:function(a){delete this[a]},getItem:function(a){return this[a]}});var o=JSON.stringifyAsync||function(a,c,l,u){var h;try{c(h,JSON.stringify(a,l,u))}catch(f){c(f)}};Gun.on("create",function a(c){this.to.next(c);var l=c.opt;c.graph;var u=[],h,f,m,g;if(l.localStorage===!1)return;l.prefix=l.file||"gun/";try{h=a[l.prefix]=a[l.prefix]||JSON.parse(m=s.getItem(l.prefix))||{}}catch{h=a[l.prefix]={}}m=(m||"").length,c.on("get",function(x){this.to.next(x);var d=x.get,b,p,_,C;!d||!(b=d["#"])||(p=h[b]||C,p&&(_=d["."])&&!Object.plain(_)&&(p=Gun.state.ify({},_,Gun.state.is(p,_),p[_],b)),Gun.on.get.ack(x,p))}),c.on("put",function(x){this.to.next(x);var d=x.put,b=d["#"],p=d["."],_=x["#"],C=x.ok||"";if((c.next||"")[b]){if(h[b]=Gun.state.ify(h[b],p,d[">"],d[":"],b),g&&m>4999880){c.on("in",{"@":_,err:"localStorage max!"});return}!x["@"]&&(!x._.via||Math.random()<C["@"]/C["/"])&&u.push(_),!f&&(f=setTimeout(v,9+m/333))}});function v(){if(!u.length&&((setTimeout.turn||"").s||"").length){setTimeout(v,99);return}var x=u;clearTimeout(f),f=!1,u=[],o(h,function(d,b){try{!d&&s.setItem(l.prefix,b)}catch(p){d=g=p||"localStorage failure"}d&&(Gun.log(d+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),c.on("localStorage:error",{err:d,get:l.prefix,put:h})),m=b.length,setTimeout.each(x,function(p){c.on("in",{"@":p,err:d,ok:0})},0,99)})}})}})(e,"./localStorage")})(),(function(){var D;if(""+D!=typeof Gun){var e=function(E){console.warn("Warning! Deprecated internal utility will break in next version:",E)},t=Gun;t.fn=t.fn||{is:function(E){return e("fn"),!!E&&typeof E=="function"}},t.bi=t.bi||{is:function(E){return e("bi"),E instanceof Boolean||typeof E=="boolean"}},t.num=t.num||{is:function(E){return e("num"),!n(E)&&(E-parseFloat(E)+1>=0||E===1/0||E===-1/0)}},t.text=t.text||{is:function(E){return e("text"),typeof E=="string"}},t.text.ify=t.text.ify||function(E){return e("text.ify"),t.text.is(E)?E:typeof JSON<"u"?JSON.stringify(E):E&&E.toString?E.toString():E},t.text.random=t.text.random||function(E,y){e("text.random");var R="";for(E=E||24,y=y||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";E>0;)R+=y.charAt(Math.floor(Math.random()*y.length)),E--;return R},t.text.match=t.text.match||function(E,y){var R,L;return e("text.match"),typeof E!="string"?!1:(typeof y=="string"&&(y={"=":y}),y=y||{},R=y["="]||y["*"]||y[">"]||y["<"],E===R?!0:L!==y["="]?!1:(R=y["*"]||y[">"]||y["<"],E.slice(0,(R||"").length)===R?!0:L!==y["*"]?!1:L!==y[">"]&&L!==y["<"]?E>=y[">"]&&E<=y["<"]:L!==y[">"]&&E>=y[">"]||L!==y["<"]&&E<=y["<"]))},t.text.hash=t.text.hash||function(E,y){if(e("text.hash"),typeof E=="string"){if(y=y||0,!E.length)return y;for(var R=0,L=E.length,N;R<L;++R)N=E.charCodeAt(R),y=(y<<5)-y+N,y|=0;return y}},t.list=t.list||{is:function(E){return e("list"),E instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(E){return e("list.sort"),function(y,R){return!y||!R?0:(y=y[E],R=R[E],y<R?-1:y>R?1:0)}},t.list.map=t.list.map||function(E,y,R){return e("list.map"),S(E,y,R)},t.list.index=1,t.obj=t.boj||{is:function(E){return e("obj"),E?E instanceof Object&&E.constructor===Object||Object.prototype.toString.call(E).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(E,y,R){return e("obj.put"),(E||{})[y]=R,E},t.obj.has=t.obj.has||function(E,y){return e("obj.has"),E&&Object.prototype.hasOwnProperty.call(E,y)},t.obj.del=t.obj.del||function(E,y){if(e("obj.del"),!!E)return E[y]=null,delete E[y],E},t.obj.as=t.obj.as||function(E,y,R,L){return e("obj.as"),E[y]=E[y]||(L===R?{}:R)},t.obj.ify=t.obj.ify||function(E){if(e("obj.ify"),_(E))return E;try{E=JSON.parse(E)}catch{E={}}return E},(function(){var E;function y(R,L){T(this,L)&&E!==this[L]||(this[L]=R)}t.obj.to=t.obj.to||function(R,L){return e("obj.to"),L=L||{},S(R,y,L),L}})(),t.obj.copy=t.obj.copy||function(E){return e("obj.copy"),E&&JSON.parse(JSON.stringify(E))},(function(){function E(y,R){var L=this.n,N;if(!(L&&(R===L||_(L)&&T(L,R)))&&N!==R)return!0}t.obj.empty=t.obj.empty||function(y,R){return e("obj.empty"),y?!S(y,E,{n:R}):!0}})(),(function(){function E(L,N){if(arguments.length===2){E.r=E.r||{},E.r[L]=N;return}E.r=E.r||[],E.r.push(L)}var y=Object.keys,R;Object.keys=Object.keys||function(L){return R(L,function(N,O,U){U(O)})},t.obj.map=R=t.obj.map||function(L,N,O){e("obj.map");var U,z=0,W,Z,re,ae,pe=typeof N=="function";if(E.r=U,y&&_(L)&&(re=y(L),ae=!0),O=O||{},n(L)||re)for(W=(re||L).length;z<W;z++){var we=z+t.list.index;if(pe){if(Z=ae?N.call(O,L[re[z]],re[z],E):N.call(O,L[z],we,E),Z!==U)return Z}else if(N===L[ae?re[z]:z])return re?re[z]:we}else for(z in L)if(pe){if(T(L,z)&&(Z=O?N.call(O,L[z],z,E):N(L[z],z,E),Z!==U))return Z}else if(N===L[z])return z;return pe?E.r:t.list.index?0:-1}})(),t.time=t.time||{},t.time.is=t.time.is||function(E){return e("time"),E?E instanceof Date:+new Date().getTime()};var b=t.fn.is,n=t.list.is,p=t.obj,_=p.is,T=p.has,S=p.map,r={};r.is=function(E){return e("val.is"),E===D?!1:E===null?!0:E===1/0?!1:a(E)||o(E)||g(E)?!0:r.link.is(E)||!1},r.link=r.rel={_:"#"},(function(){r.link.is=function(y){if(e("val.link.is"),y&&y[s]&&!y._&&_(y)){var R={};if(S(y,E,R),R.id)return R.id}return!1};function E(y,R){var L=this;if(L.id)return L.id=!1;if(R==s&&a(y))L.id=y;else return L.id=!1}})(),r.link.ify=function(E){return e("val.link.ify"),I({},s,E)},t.obj.has._=".";var s=r.link._,D,o=t.bi.is,g=t.num.is,a=t.text.is,p=t.obj,_=p.is,I=p.put,S=p.map;t.val=t.val||r;var c={_:"_"};c.soul=function(E,y){return e("node.soul"),E&&E._&&E._[y||h]},c.soul.ify=function(E,y){return e("node.soul.ify"),y=typeof y=="string"?{soul:y}:y||{},E=E||{},E._=E._||{},E._[h]=y.soul||E._[h]||u(),E},c.soul._=r.link._,(function(){c.is=function(y,R,L){e("node.is");var N;return _(y)&&(N=c.soul(y))?!S(y,E,{as:L,cb:R,s:N,n:y}):!1};function E(y,R){if(R!==c._){if(!r.is(y))return!0;this.cb&&this.cb.call(this.as,y,R,this.n,this.s)}}})(),(function(){c.ify=function(y,R,L){return e("node.ify"),R?typeof R=="string"?R={soul:R}:typeof R=="function"&&(R={map:R}):R={},R.map&&(R.node=R.map.call(L,y,D,R.node||{})),(R.node=c.soul.ify(R.node||{},R))&&S(y,E,{o:R,as:L}),R.node};function E(y,R){var L=this.o,N,O;if(L.map){N=L.map.call(this.as,y,""+R,L.node),O===N?C(L.node,R):L.node&&(L.node[R]=N);return}r.is(y)&&(L.node[R]=y)}})();var p=t.obj,_=p.is,C=p.del,S=p.map,l=t.text,u=l.random,h=c.soul._,D;t.node=t.node||c;var f=t.state;f.lex=function(){return e("state.lex"),f().toString(36).replace(".","")},f.to=function(E,y,R){e("state.to");var L=(E||{})[y];return _(L)&&(L=M(L)),f.ify(R,y,f.is(E,y),L,c.soul(E))},(function(){f.map=function(y,R,L){e("state.map");var N,O=_(O=y||R)?O:null;return y=b(y=y||R)?y:null,O&&!y?(R=g(R)?R:f(),O[x]=O[x]||{},S(O,E,{o:O,s:R}),O):(L=L||_(R)?R:N,R=g(R)?R:f(),function(U,z,W,Z){if(!y)return E.call({o:W,s:R},U,z),U;y.call(L||this||{},U,z,W,Z),!(T(W,z)&&N===W[z])&&E.call({o:W,s:R},U,z)})};function E(y,R){x!==R&&f.ify(this.o,R,this.s)}})();var p=t.obj;p.as;var T=p.has,_=p.is,S=p.map,M=p.copy,m=t.num,g=m.is,v=t.fn,b=v.is,x=c._,D,d={};(function(){d.is=function(R,L,N,O){return e("graph.is"),!R||!_(R)||A(R)?!1:!S(R,E,{cb:L,fn:N,as:O})};function E(R,L){if(!R||L!==c.soul(R)||!c.is(R,this.fn,this.as))return!0;this.cb&&(y.n=R,y.as=this.as,this.cb.call(y.as,R,L,y))}function y(R){R&&c.is(y.n,R,y.as)}})(),(function(){d.ify=function(O,U,z){e("graph.ify");var W={path:[],obj:O};return U?typeof U=="string"?U={soul:U}:typeof U=="function"&&(U.map=U):U={},typeof z=="string"&&(U.soul=U.soul||z,z=D),U.soul&&(W.link=r.link.ify(U.soul)),U.shell=(z||{}).shell,U.graph=U.graph||{},U.seen=U.seen||[],U.as=U.as||z,E(U,W),U.root=W.node,U.graph};function E(O,U){var z;return(z=N(O,U))?z:(U.env=O,U.soul=R,c.ify(U.obj,y,U)&&(U.link=U.link||r.link.ify(c.soul(U.node)),U.obj!==O.shell&&(O.graph[r.link.is(U.link)]=U.node)),U)}function y(O,U,z){var W=this,Z=W.env,re,ae;if(c._===U&&T(O,r.link._))return z._;if(re=L(O,U,z,W,Z)){if(U||(W.node=W.node||z||{},T(O,c._)&&c.soul(O)&&(W.node._=M(O._)),W.node=c.soul.ify(W.node,r.link.is(W.link)),W.link=W.link||r.link.ify(c.soul(W.node))),(ae=Z.map)&&(ae.call(Z.as||{},O,U,z,W),T(z,U))){if(O=z[U],D===O){C(z,U);return}if(!(re=L(O,U,z,W,Z)))return}if(!U)return W.node;if(re===!0)return O;if(ae=E(Z,{obj:O,path:W.path.concat(U)}),!!ae.node)return ae.link}}function R(O){var U=this,z=r.link.is(U.link),W=U.env.graph;U.link=U.link||r.link.ify(O),U.link[r.link._]=O,U.node&&U.node[c._]&&(U.node[c._][r.link._]=O),T(W,z)&&(W[O]=W[z],C(W,z))}function L(O,U,z,W,Z){var re;if(r.is(O))return!0;if(_(O))return 1;if(re=Z.invalid)return O=re.call(Z.as||{},O,U,z),L(O,U,z,W,Z);Z.err="Invalid value at '"+W.path.concat(U).join(".")+"'!",t.list.is(O)&&(Z.err+=" Use `.set(item)` instead of an Array.")}function N(O,U){for(var z=O.seen,W=z.length,Z;W--;)if(Z=z[W],U.obj===Z.obj)return Z;z.push(U)}})(),d.node=function(E){e("graph.node");var y=c.soul(E);if(y)return I({},y,E)},(function(){d.to=function(y,R,L){if(e("graph.to"),!!y){var N={};return L=L||{seen:{}},S(y[R],E,{obj:N,graph:y,opt:L}),N}};function E(y,R){var L,N;if(c._===R){if(A(y,r.link._))return;this.obj[R]=M(y);return}if(!(L=r.link.is(y))){this.obj[R]=y;return}if(N=this.opt.seen[L]){this.obj[R]=N;return}this.obj[R]=this.opt.seen[L]=d.to(this.graph,L,this.opt)}})();var b=t.fn.is,p=t.obj,_=p.is,C=p.del,T=p.has,A=p.empty,I=p.put,S=p.map,M=p.copy,D;t.graph=t.graph||d}})()})(ns)),ns.exports}var eo,Xc;function jx(){return Xc||(Xc=1,eo=$x()),eo}var qx=jx();const Yx=pu(qx);class Kx{constructor(e){this.networkManager=e,this.players={},this.crystals=[{id:"blue-flag",team:"blue",x:-150,y:60,z:150,originalX:-150,originalY:60,originalZ:150,state:"home",carrierId:null},{id:"red-flag",team:"red",x:-150,y:60,z:-150,originalX:-150,originalY:60,originalZ:-150,state:"home",carrierId:null}],this.scores={red:0,blue:0},this.TEAMS=["red","blue"],this.potions=[{id:"speed-1",type:"speed",x:0,y:50,z:0,active:!0,respawnTime:1e4},{id:"shield-1",type:"shield",x:-60,y:40,z:60,active:!0,respawnTime:15e3},{id:"berserk-1",type:"berserk",x:60,y:40,z:-60,active:!0,respawnTime:2e4}]}init(){this.scores={red:0,blue:0},this.resetCrystals(),this.resetPotions()}resetPotions(){this.potions.forEach(e=>e.active=!0)}resetCrystals(){this.crystals.forEach(e=>{e.x=e.originalX,e.y=e.originalY,e.z=e.originalZ,e.state="home",e.carrierId=null})}addPlayer(e,t="Unknown",n="witch"){console.log("Host: Player connected:",e,t,n),this.players[e]={id:e,name:t,characterClass:n,x:0,y:0,z:0,rx:0,ry:0,team:"spectator",biome:"forest",health:100,kills:0,deaths:0},this.networkManager.sendTo(e,"init",{id:e,players:this.players,crystals:this.crystals,potions:this.potions,scores:this.scores}),this.broadcastPlayerList()}removePlayer(e){console.log("Host: Player disconnected:",e),delete this.players[e],this.networkManager.broadcast("playerLeft",e),this.broadcastPlayerList()}broadcastPlayerList(){const e=Object.values(this.players).map(t=>({id:t.id,name:t.name,kills:t.kills,deaths:t.deaths,ping:0}));this.networkManager.broadcast("playerListUpdate",e)}startGame(){this.networkManager.broadcast("gameStarted",{})}handleMessage(e,t,n){switch(t){case"joinTeam":this.handleJoinTeam(e,n);break;case"move":this.handleMove(e,n);break;case"collectCrystal":this.handleCollectCrystal(e,n);break;case"hitPlayer":this.handleHitPlayer(e,n);break;case"chat":this.networkManager.broadcast("chat",n);break;case"captureFlag":this.handleCaptureFlag(e);break;case"requestRestart":this.resetGame();break;case"requestRespawn":this.handleRequestRespawn(e);break;case"collectPotion":this.handleCollectPotion(e,n);break}}handleCollectPotion(e,t){const n=this.potions.find(r=>r.id===t);n&&n.active&&(n.active=!1,this.networkManager.broadcast("potionUpdate",{id:t,active:!1}),this.networkManager.sendTo(e,"applyPotion",{type:n.type}),setTimeout(()=>{n.active=!0,this.networkManager.broadcast("potionUpdate",{id:t,active:!0})},n.respawnTime))}handleHitPlayer(e,t){const{targetId:n,damage:r}=t,s=this.players[n];s&&s.health>0&&(s.health-=r,s.health<0&&(s.health=0),this.networkManager.broadcast("playerDamaged",{id:n,health:s.health,shooterId:e}),s.health<=0&&this.handlePlayerDeath(n,e))}handlePlayerDeath(e,t){const n=this.players[e];if(n){n.deaths++,t&&this.players[t]&&t!==e&&this.players[t].kills++;const r=t&&this.players[t]?this.players[t].name:"Environment";this.networkManager.broadcast("killFeed",{killer:r,victim:n.name,method:"blasted"}),this.broadcastPlayerList();const s=this.crystals.find(o=>o.carrierId===e);s&&(s.state="dropped",s.carrierId=null,s.x=n.x,s.y=n.y,s.z=n.z,this.networkManager.broadcast("crystalUpdate",{id:s.id,state:"dropped",x:n.x,y:n.y,z:n.z})),this.networkManager.broadcast("playerDied",{id:e})}}handleRequestRespawn(e){const t=this.players[e];if(t){t.health=100;let n=0,r=0;t.team==="blue"?(n=-150,r=150):t.team==="red"&&(n=-150,r=-150),t.x=n,t.y=32,t.z=r,this.networkManager.sendTo(e,"teamAssigned",t),this.networkManager.broadcast("playerDamaged",{id:e,health:100}),this.networkManager.broadcast("playerJoined",t)}}handleJoinTeam(e,t){if(console.log(`Host: Player ${e} joining team ${t}`),!this.TEAMS.includes(t)){console.error(`Host: Invalid team ${t}`);return}let n=0,r=32,s=0;t==="blue"?(n=-150,s=150):t==="red"&&(n=-150,s=-150);const o=this.players[e];o?(o.team=t,o.x=n,o.y=r,o.z=s,console.log(`Host: Assigning ${e} to ${t}`),this.networkManager.sendTo(e,"teamAssigned",o),this.networkManager.broadcast("playerJoined",o)):console.error(`Host: Player ${e} not found in players list`)}handleMove(e,t){if(this.players[e]){const n=this.players[e];n.x=t.x,n.y=t.y,n.z=t.z,n.rx=t.rx,n.ry=t.ry,n.biome=t.biome,this.networkManager.broadcast("playerMoved",n,e)}}handleCollectCrystal(e,t){const n=this.crystals.find(s=>s.id===t),r=this.players[e];n&&r&&(n.team!==r.team?(n.state==="home"||n.state==="dropped")&&(n.state="carried",n.carrierId=e,this.networkManager.broadcast("crystalUpdate",{id:t,state:"carried",carrierId:e})):n.team===r.team&&n.state==="dropped"&&(n.state="home",n.carrierId=null,n.x=n.originalX,n.y=n.originalY,n.z=n.originalZ,this.networkManager.broadcast("crystalUpdate",{id:t,state:"home",x:n.originalX,y:n.originalY,z:n.originalZ})))}handleCaptureFlag(e){const t=this.players[e];if(!t)return;const n=this.crystals.find(r=>r.carrierId===e);n&&n.team!==t.team&&(this.scores[t.team]++,n.state="home",n.carrierId=null,n.x=n.originalX,n.y=n.originalY,n.z=n.originalZ,this.networkManager.broadcast("crystalCaptured",{id:n.id,team:t.team,scores:this.scores}),this.networkManager.broadcast("crystalUpdate",{id:n.id,state:"home",x:n.originalX,y:n.originalY,z:n.originalZ}),this.checkWinCondition())}checkWinCondition(){if(this.scores.red>=3||this.scores.blue>=3){let e=this.scores.red>=3?"red":"blue";this.networkManager.broadcast("gameOver",{winner:e})}}resetGame(){this.resetCrystals(),this.scores={red:0,blue:0},this.networkManager.broadcast("gameReset",{crystals:this.crystals,scores:this.scores})}}class Jx{constructor(){this.peer=null,this.gun=Yx({peers:["https://gun-manhattan.herokuapp.com/gun","https://gun-us.herokuapp.com/gun","https://gundb-relay-ml.herokuapp.com/gun"]}),this.lobbies=this.gun.get("voxelwitchwars_v2").get("lobbies"),this.lobbyHeartbeat=null,this.conn=null,this.connections=[],this.isHost=!1,this.gameHost=null,this.playerId=null,this.playerName="Player",this.onLocalPlayerInit=null,this.onPlayerJoinedCallback=null,this.onPlayerLeftCallback=null,this.onPlayerMovedCallback=null,this.onCrystalsInit=null,this.onCrystalCollectedCallback=null,this.onScoreUpdate=null,this.onTeamAssignedCallback=null,this.onPlayerListUpdate=null,this.onGameStarted=null,this.onHealthUpdate=null,this.onPlayerHitCallback=null,this.onPlayerDied=null,this.onKillFeedCallback=null,this.onChatMessage=null,this.onPotionsInit=null,this.onPotionUpdate=null,this.onApplyPotion=null}async hostGame(e=null,t="Host",n="witch"){this.isHost=!0,this.playerName=t;const r={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};console.log("Initializing Peer...");try{e?this.peer=new rr(e,r):this.peer=new rr(r)}catch(s){throw console.error("PeerJS Init Error:",s),new Error("Failed to initialize network: "+s.message)}return new Promise((s,o)=>{const a=setTimeout(()=>{this.peer&&this.peer.destroy(),o("Connection timed out (10s). Check firewall/network.")},1e4);this.peer.on("open",c=>{clearTimeout(a),console.log("My peer ID is: "+c),this.playerId=c;try{this.gameHost=new Kx(this),this.gameHost.init(),this.gameHost.addPlayer(c,t,n),this.showConnectionStatus(!0,`Hosting: ${c}`),this.publishLobby(c,e||t+"'s Game"),s(c)}catch(l){console.error("GameHost Init Error:",l),o("Failed to start GameHost: "+l.message)}}),this.peer.on("connection",c=>{this.handleConnection(c)}),this.peer.on("error",c=>{clearTimeout(a),console.error("Peer Error:",c);let l=c.type;c.type==="unavailable-id"?l="ID already taken. Try another.":c.type==="browser-incompatible"?l="Browser does not support WebRTC.":c.type==="network"&&(l="Network error. Check connection."),this.showConnectionStatus(!1,l),o(l)})})}async joinGame(e,t="Player",n="witch"){this.isHost=!1,this.playerName=t;const r={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};return this.peer=new rr(void 0,r),new Promise((s,o)=>{this.peer.on("open",a=>{this.playerId=a,console.log("My peer ID is: "+a),this.conn=this.peer.connect(e,{metadata:{name:t,characterClass:n}}),this.conn.on("open",()=>{console.log("Connected to Host"),this.showConnectionStatus(!0,"Connected to Host"),s()}),this.conn.on("data",c=>{this.handleMessage(c)}),this.conn.on("close",()=>{this.showConnectionStatus(!1,"Disconnected")}),this.conn.on("error",c=>{console.error("Connection Error",c),this.showConnectionStatus(!1,"Connection Error"),o(c)})}),this.peer.on("error",a=>{console.error("Peer Error",a),o(a)})})}handleConnection(e){console.log("Client connected:",e.peer),this.connections.push(e),e.on("open",()=>{const t=e.metadata&&e.metadata.name?e.metadata.name:"Unknown",n=e.metadata&&e.metadata.characterClass?e.metadata.characterClass:"witch";this.gameHost.addPlayer(e.peer,t,n)}),e.on("data",t=>{this.gameHost&&this.gameHost.handleMessage(e.peer,t.type,t.payload)}),e.on("close",()=>{this.connections=this.connections.filter(t=>t!==e),this.gameHost&&this.gameHost.removePlayer(e.peer)})}send(e,t){this.isHost?this.gameHost&&this.gameHost.handleMessage(this.playerId,e,t):this.conn&&this.conn.open&&this.conn.send({type:e,payload:t})}sendTo(e,t,n){if(e===this.playerId)this.handleMessage({type:t,payload:n});else{const r=this.connections.find(s=>s.peer===e);r&&r.open&&r.send({type:t,payload:n})}}broadcast(e,t,n=null){this.playerId!==n&&this.handleMessage({type:e,payload:t}),this.connections.forEach(r=>{r.peer!==n&&r.open&&r.send({type:e,payload:t})})}handleMessage(e){const{type:t,payload:n}=e;switch(t){case"playerListUpdate":this.onPlayerListUpdate&&this.onPlayerListUpdate(n);break;case"gameStarted":this.onGameStarted&&this.onGameStarted();break;case"init":n.players[this.playerId]&&this.onLocalPlayerInit&&this.onLocalPlayerInit(n.players[this.playerId]),Object.values(n.players).forEach(r=>{r.id!==this.playerId&&this.onPlayerJoined(r)}),this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onPotionsInit&&this.onPotionsInit(n.potions),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"playerJoined":n.id!==this.playerId&&this.onPlayerJoined(n);break;case"playerLeft":this.onPlayerLeftCallback&&this.onPlayerLeftCallback(n);break;case"playerMoved":this.onPlayerMovedCallback&&this.onPlayerMovedCallback(n);break;case"crystalCollected":this.onCrystalCollectedCallback&&this.onCrystalCollectedCallback(n);break;case"gameOver":alert("Game Over! Winner: "+n.winner);break;case"gameReset":this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"teamAssigned":this.onTeamAssignedCallback&&this.onTeamAssignedCallback(n);break;case"playerDamaged":this.onPlayerHitCallback&&this.onPlayerHitCallback(n.id,n.shooterId),n.id===this.playerId&&this.onHealthUpdate&&this.onHealthUpdate(n.health);break;case"playerDied":n.id===this.playerId?this.onPlayerDied&&this.onPlayerDied():console.log(`Player ${n.id} died.`);break;case"chat":this.onChatMessage&&this.onChatMessage(n);break;case"killFeed":this.onKillFeedCallback&&this.onKillFeedCallback(n);break;case"potionUpdate":this.onPotionUpdate&&this.onPotionUpdate(n);break;case"applyPotion":this.onApplyPotion&&this.onApplyPotion(n.type);break}}sendMove(e,t,n){this.send("move",{x:e.x,y:e.y,z:e.z,rx:t.x,ry:t.y,biome:n})}collectCrystal(e){this.send("collectCrystal",e)}collectPotion(e){this.send("collectPotion",e)}sendHit(e,t){this.send("hitPlayer",{targetId:e,damage:t})}sendRespawn(e){this.send("requestRespawn",{})}sendBlockUpdate(e,t,n,r){this.send("blockUpdate",{x:e,y:t,z:n,type:r})}joinTeam(e){console.log("NetworkManager: Joining team",e),this.send("joinTeam",e)}onPlayerJoined(e){this.onPlayerJoinedCallback&&this.onPlayerJoinedCallback(e)}showConnectionStatus(e,t=""){let n=document.getElementById("connection-status");n||(n=document.createElement("div"),n.id="connection-status",n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.padding="10px",n.style.borderRadius="5px",n.style.fontFamily="monospace",n.style.fontWeight="bold",n.style.zIndex="1000",n.style.maxWidth="300px",n.style.wordWrap="break-word",document.body.appendChild(n)),e?(n.textContent=t||"🟢 Online",n.style.backgroundColor="rgba(0, 255, 0, 0.8)",n.style.color="white"):(n.innerHTML="🔴 Offline<br><small>"+t+"</small>",n.style.backgroundColor="rgba(255, 0, 0, 0.8)",n.style.color="white")}publishLobby(e,t){console.log("Publishing lobby:",t);const n=()=>{this.lobbies.get(e).put({id:e,name:t,players:this.connections?this.connections.length+1:1,timestamp:Date.now()})};n(),this.lobbyHeartbeat=setInterval(n,3e3),window.addEventListener("beforeunload",()=>{this.stopPublishingLobby(e)})}stopPublishingLobby(e){this.lobbyHeartbeat&&clearInterval(this.lobbyHeartbeat),this.lobbies.get(e).put(null)}subscribeToLobbies(e){console.log("Subscribing to lobbies..."),this.lobbies.map().on((t,n)=>{t&&t.timestamp>Date.now()-3e4?e(n,t):e(n,null)})}sendChat(e){this.send("chat",{id:this.playerId,name:this.playerName,message:e,timestamp:Date.now()})}}class Zx{constructor(e,t){this.scene=e,this.id=t.id,this.team=t.team,this.characterClass=t.characterClass||"witch";const n=this.characterClass==="warlock"?this.createWarlockMesh():this.createWitchMesh();this.mesh=n.mesh,this.mesh.position.set(t.x,t.y,t.z);const r=t.name||"Unknown",s=this.createNameSprite(r);s.position.y=3,this.mesh.add(s),this.scene.add(this.mesh),this.targetPos=new G(t.x,t.y,t.z),this.targetRot=new tn(t.rx,t.ry,0)}createNameSprite(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=24,s=`bold ${r}px Arial`;n.font=s;const o=n.measureText(e).width;t.width=o+20,t.height=r+10,n.fillStyle="rgba(0, 0, 0, 0.5)",n.fillRect(0,0,t.width,t.height),n.font=s,n.fillStyle="white",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2);const a=new _f(t),c=new Sl({map:a}),l=new ff(c),u=.05;return l.scale.set(t.width*u,t.height*u,1),l}update(e){this.mesh.position.lerp(this.targetPos,e*10),this.mesh.rotation.y=Ci.lerp(this.mesh.rotation.y,this.targetRot.y,e*10)}updateData(e){this.targetPos.set(e.x,e.y,e.z),this.targetRot.set(e.rx,e.ry,0)}setCarrying(e){if(this.flagMesh&&(this.mesh.remove(this.flagMesh),this.flagMesh=null),e){const t=new mr(.4,0),n=new Ge({color:e,emissive:e,emissiveIntensity:1});this.flagMesh=new ne(t,n),this.flagMesh.position.set(0,2.5,-.5),this.mesh.add(this.flagMesh)}}dispose(){this.scene.remove(this.mesh)}createWitchMesh(){const e=new Mt,t=new Mt;e.add(t),t.rotation.y=Math.PI;const n=16764074;let r=4915330;this.team==="red"?r=16711680:this.team==="blue"&&(r=255);const s=3342438,o=16711680,a=16753920,c=1118481,l=new ge(.5,.8,.4),u=new Ge({color:r}),h=new ne(l,u);h.position.y=.9,t.add(h);const f=new ge(.6,.6,.5),m=new ne(f,u);m.position.y=.3,t.add(m);const g=new ge(.35,.35,.35),v=new Ge({color:n}),x=new ne(g,v);x.position.y=1.5,t.add(x);const d=new Ge({color:a}),b=new ne(new ge(.45,.5,.15),d);b.position.set(0,1.5,-.2),t.add(b);const p=new ne(new ge(.1,.4,.4),d);p.position.set(-.2,1.5,0),t.add(p);const _=new ne(new ge(.1,.4,.4),d);_.position.set(.2,1.5,0),t.add(_);const C=new Mt,T=new Ge({color:s}),A=new Ge({color:o}),I=new ne(new ge(.8,.1,.8),T);I.position.y=1.7,C.add(I);const S=new ne(new ge(.5,.3,.5),T);S.position.y=1.9,C.add(S);const M=new ne(new ge(.45,.15,.45),A);M.position.y=2.1,C.add(M);const D=new ne(new ge(.35,.3,.35),T);D.position.y=2.3,C.add(D);const E=new ne(new ge(.2,.3,.2),T);E.position.y=2.6,C.add(E);const y=new ne(new ge(.15,.2,.15),T);y.position.set(.1,2.8,0),y.rotation.z=-.2,C.add(y),t.add(C);const R=new ge(.15,.5,.15),L=new Ge({color:r}),N=new ne(R,L);N.position.set(-.35,1,0),N.rotation.z=0,t.add(N);const O=new ne(R,L);O.position.set(.35,1,0),O.rotation.z=0,t.add(O);const U=new ge(.12,.12,.12),z=new Ge({color:n}),W=new ne(U,z);W.position.set(0,-.3,0),N.add(W);const Z=new ne(U,z);Z.position.set(0,-.3,0),O.add(Z);const re=new ge(.15,.4,.15),ae=new Ge({color:c}),pe=new ne(re,ae);pe.position.set(-.15,.2,0),t.add(pe);const we=new ne(re,ae);we.position.set(.15,.2,0),t.add(we);const K=new ge(.05,.05,.05),Q=new Ge({color:0}),ce=new ne(K,Q);ce.position.set(-.1,1.55,.18),t.add(ce);const Re=new ne(K,Q);return Re.position.set(.1,1.55,.18),t.add(Re),{mesh:e,rightArm:O,leftArm:N,rightHand:Z}}createWarlockMesh(){const e=new Mt,t=new Mt;e.add(t),t.rotation.y=Math.PI;const n=16764074;let r=2236962;this.team==="red"?r=8912896:this.team==="blue"&&(r=136);const s=65280,o=1118481,a=0,c=new ge(.5,.8,.4),l=new Ge({color:r}),u=new ne(c,l);u.position.y=.9,t.add(u);const h=new ge(.6,.6,.5),f=new ne(h,l);f.position.y=.3,t.add(f);const m=new ge(.35,.35,.35),g=new Ge({color:n}),v=new ne(m,g);v.position.y=1.5,t.add(v);const x=new Ge({color:o}),d=new ne(new ge(.45,.1,.45),x);d.position.y=1.7,t.add(d);const b=new ne(new ge(.45,.4,.1),x);b.position.set(0,1.5,-.18),t.add(b);const p=new ne(new ge(.1,.4,.45),x);p.position.set(-.18,1.5,0),t.add(p);const _=new ne(new ge(.1,.4,.45),x);_.position.set(.18,1.5,0),t.add(_);const C=new ge(.2,.2,.2),T=new Ge({color:s,emissive:s,emissiveIntensity:.5}),A=new ne(C,T);A.position.set(-.35,1.3,0),t.add(A);const I=new ne(C,T);I.position.set(.35,1.3,0),t.add(I);const S=new ge(.15,.5,.15),M=new Ge({color:r}),D=new ne(S,M);D.position.set(-.35,1,0),D.rotation.z=0,t.add(D);const E=new ne(S,M);E.position.set(.35,1,0),E.rotation.z=0,t.add(E);const y=new ge(.12,.12,.12),R=new Ge({color:n}),L=new ne(y,R);L.position.set(0,-.3,0),D.add(L);const N=new ne(y,R);N.position.set(0,-.3,0),E.add(N);const O=new ge(.15,.4,.15),U=new Ge({color:a}),z=new ne(O,U);z.position.set(-.15,.2,0),t.add(z);const W=new ne(O,U);W.position.set(.15,.2,0),t.add(W);const Z=new ge(.05,.02,.05),re=new Ge({color:16711680,emissive:16711680}),ae=new ne(Z,re);ae.position.set(-.1,1.55,.18),ae.rotation.z=.2,t.add(ae);const pe=new ne(Z,re);return pe.position.set(.1,1.55,.18),pe.rotation.z=-.2,t.add(pe),{mesh:e,rightArm:E,leftArm:D,rightHand:N}}}console.log("Voxel Witch Wars v1.1 Loaded");const $c=document.getElementById("start-screen"),jc=document.getElementById("start-btn"),Zt=document.getElementById("lobby-menu"),Xt=document.getElementById("gamemode-menu"),un=document.getElementById("campaign-menu");jc&&$c&&jc.addEventListener("click",()=>{console.log("Start button clicked"),$c.style.display="none",Xt&&(Xt.classList.remove("hidden"),Xt.style.display="flex")});const qc=document.getElementById("btn-mode-multiplayer"),Yc=document.getElementById("btn-mode-campaign");qc&&qc.addEventListener("click",()=>{if(Xt&&Xt.classList.add("hidden"),Zt){Zt.classList.remove("hidden"),Zt.style.display="flex";const i=Zt.querySelector("h1");i&&(i.textContent="Multiplayer Lobby")}});Yc&&Yc.addEventListener("click",()=>{Xt&&Xt.classList.add("hidden"),un&&(un.classList.remove("hidden"),un.style.display="flex")});const Kc=document.getElementById("btn-campaign-single"),Jc=document.getElementById("btn-campaign-coop"),Zc=document.getElementById("btn-campaign-back");Zc&&Zc.addEventListener("click",()=>{un&&un.classList.add("hidden"),Xt&&(Xt.classList.remove("hidden"),Xt.style.display="flex")});Jc&&Jc.addEventListener("click",()=>{if(un&&un.classList.add("hidden"),Zt){Zt.classList.remove("hidden"),Zt.style.display="flex";const i=Zt.querySelector("h1");i&&(i.textContent="Campaign (Co-op)")}});const Qc=document.getElementById("btn-lobby-back");Qc&&Qc.addEventListener("click",()=>{Zt&&Zt.classList.add("hidden"),Xt&&(Xt.classList.remove("hidden"),Xt.style.display="flex")});const $t=new uf;$t.background=new qe(8900331);$t.fog=new ha(8900331,10,500);const Qx=new Ht(75,window.innerWidth/window.innerHeight,.1,1e3),ba=new fx({antialias:!0});ba.setSize(window.innerWidth,window.innerHeight);ba.shadowMap.enabled=!0;document.body.appendChild(ba.domElement);const Mu=new vx($t),Fi=new yx,nt=new Jx,Qt=new Map,Tn=new Map;nt.onTeamAssignedCallback=i=>{console.log("Team Assigned Callback received:",i),console.log("Team:",i.team),vt.setTeam(i.team);let e=new G(150,32,150);i.team==="blue"?e.set(-150,32,150):i.team==="red"&&e.set(-150,32,-150),console.log("Spawning at:",e),vt.mesh.position.copy(e),vt.physicsPosition.copy(e),vt.velocity.set(0,0,0),vt.setSpawnPoint(e);const t=document.getElementById("start-menu"),n=document.getElementById("ui"),r=document.getElementById("score-ui"),s=document.getElementById("minimap");console.log("Hiding start menu, showing UI"),t&&t.classList.add("hidden"),n&&(n.style.display="block"),r&&(r.style.display="block"),s&&s.classList.remove("hidden"),gameStarted=!0,document.body.requestPointerLock(),Fi.initWind()};nt.onHealthUpdate=i=>{const e=document.getElementById("health-bar"),t=document.getElementById("health-text");e&&t&&(e.style.width=`${i}%`,t.textContent=`${Math.ceil(i)} / 100`,e.className="",i>50?e.classList.add("high"):i>25?e.classList.add("medium"):e.classList.add("low"))};nt.onPlayerHitCallback=(i,e)=>{let t=null;if(i===nt.playerId?(t=vt.mesh.position.clone(),t.y+=1):Qt.has(i)&&(t=Qt.get(i).mesh.position.clone(),t.y+=1),t&&(Mu.emit(t,16711680,15,8,.5),Fi.playExplosion()),e===nt.playerId){const n=document.getElementById("hit-marker");n&&(n.classList.remove("hidden"),Fi.playHitMarker(),setTimeout(()=>{n&&n.classList.add("hidden")},100))}};nt.onPlayerDied=()=>{console.log("You Died!"),vt.onDeath();const i=document.getElementById("respawn-menu");i&&(i.classList.remove("hidden"),i.style.display="flex",document.exitPointerLock())};const el=document.getElementById("respawn-btn");el&&el.addEventListener("click",()=>{nt.send("requestRespawn",{});const i=document.getElementById("respawn-menu");i&&(i.classList.add("hidden"),i.style.display="none"),vt.isDead=!1,vt.health=100,document.body.requestPointerLock()});document.querySelectorAll(".team-btn").forEach(i=>{i.addEventListener("click",e=>{const t=e.currentTarget.dataset.team;console.log("Team selected:",t),document.getElementById("team-select").style.display="none",document.getElementById("loading-msg").style.display="block",nt.joinTeam(t)})});nt.onPlayerJoinedCallback=i=>{console.log("Player Joined:",i.id);const e=new Zx($t,i);Qt.set(i.id,e)};nt.onPlayerLeftCallback=i=>{console.log("Player Left:",i),Qt.has(i)&&(Qt.get(i).dispose(),Qt.delete(i))};nt.onPlayerMovedCallback=i=>{Qt.has(i.id)&&Qt.get(i.id).updateData(i)};let Tu=[];nt.onCrystalsInit=i=>{Tu=i,Tn.forEach(t=>$t.remove(t)),Tn.clear();const e=new mr(1,0);i.forEach(t=>{const n=t.team==="blue"?255:16711680,r=new Ge({color:n,emissive:n,emissiveIntensity:2});if(t.state==="home"||t.state==="dropped"){const s=new ne(e,r);s.position.set(t.x,t.y,t.z);const o=new xa(n,2,20);s.add(o),$t.add(s),Tn.set(t.id,s)}})};nt.onCrystalUpdate=i=>{const e=Tu.find(t=>t.id===i.id);if(e){const t=e.carrierId;if(Object.assign(e,i),t&&t!==i.carrierId&&Qt.has(t)&&Qt.get(t).setCarrying(null),i.state==="carried"&&i.carrierId&&Qt.has(i.carrierId)){const n=e.team==="blue"?255:16711680;Qt.get(i.carrierId).setCarrying(n)}if(i.state==="carried"){if(Tn.has(i.id)){const n=Tn.get(i.id);$t.remove(n),Tn.delete(i.id)}}else if(i.state==="dropped"||i.state==="home")if(Tn.has(i.id))Tn.get(i.id).position.set(i.x,i.y,i.z);else{const n=e.team==="blue"?255:16711680,r=new mr(1,0),s=new Ge({color:n,emissive:n,emissiveIntensity:2}),o=new ne(r,s);o.position.set(i.x,i.y,i.z);const a=new xa(n,2,20);o.add(a),$t.add(o),Tn.set(i.id,o)}}};nt.onCrystalCaptured=i=>{Fi.playExplosion(),gs(i.scores);const e=`${i.team.toUpperCase()} Team Captured the Flag!`;addChatMessage("System",e,!0)};nt.onCrystalCollectedCallback=i=>{i.team,i.scores&&gs(i.scores)};nt.onScoreUpdate=i=>{gs(i)};nt.onGameOver=i=>{const e=document.getElementById("game-over-screen"),t=document.getElementById("game-over-title"),n=document.getElementById("game-over-msg");if(e&&t&&n){e.classList.remove("hidden"),e.style.display="flex";const r=vt.team,s=i.winner;r===s?(t.textContent="VICTORY",t.style.color="#ffff00",n.textContent=`${s.toUpperCase()} TEAM WINS!`,Fi.playExplosion()):(t.textContent="DEFEAT",t.style.color="#ff0000",n.textContent=`${s.toUpperCase()} TEAM WINS!`),document.exitPointerLock()}};nt.onGameReset=i=>{const e=document.getElementById("game-over-screen");e&&(e.classList.add("hidden"),e.style.display="none"),gs(i.scores),nt.onCrystalsInit&&nt.onCrystalsInit(i.crystals),vt.health=100,vt.isDead=!1;let t=new G(0,32,0);vt.team==="blue"?t.set(-150,32,150):vt.team==="red"&&t.set(-150,32,-150),vt.mesh.position.copy(t),vt.physicsPosition.copy(t),vt.velocity.set(0,0,0),addChatMessage("System","Game has been reset!",!0)};const tl=document.getElementById("play-again-btn");tl&&tl.addEventListener("click",()=>{nt.send("requestRestart",{})});function gs(i){const e=document.getElementById("score-ui");e&&(e.innerHTML=`
            <span style="color: #ff4444">Red: ${i.red}</span> | 
            <span style="color: #4444ff">Blue: ${i.blue}</span>
        `)}const eg=new ds(500,32,32),tg=new xn({uniforms:{topColor:{value:new qe(30719)},bottomColor:{value:new qe(16777215)},offset:{value:33},exponent:{value:.6}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize( vWorldPosition + offset ).y;
            gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
        }
    `,side:Ut}),ng=new ne(eg,tg);$t.add(ng);const ig=new Tf(13421772,.6);$t.add(ig);const xr=new Mf(16777215,.8);xr.position.set(20,50,20);xr.castShadow=!0;xr.shadow.mapSize.width=2048;xr.shadow.mapSize.height=2048;$t.add(xr);const Sa=new xx({chunkSize:32,tileSize:1});$t.add(Sa.mesh);const rg=Sa.findSpawnPoint(),vt=new _x($t,Qx,Sa,rg,Mu,Fi,nt);document.getElementById("lobby-status");document.getElementById("btn-host");document.getElementById("btn-join");document.getElementById("input-host-id");document.getElementById("input-custom-host-id");document.getElementById("input-player-name");document.getElementById("waiting-room");document.getElementById("main-menu-buttons");const to=document.getElementById("player-list");document.getElementById("start-game-btn");document.getElementById("waiting-msg");document.getElementById("lobby-name-display");nt.onPlayerListUpdate=i=>{to&&(to.innerHTML="",i.forEach(t=>{const n=document.createElement("li"),r=t.id===nt.playerId,s=document.createElement("span");s.className="name",s.textContent=`${t.name} ${r?" (You)":""}`,n.appendChild(s),to.appendChild(n)}));const e=document.getElementById("scoreboard-body");e&&(e.innerHTML="",[...i].sort((n,r)=>(r.kills||0)-(n.kills||0)).forEach(n=>{const r=document.createElement("tr");r.innerHTML=`
                <td>${n.name}</td>
                <td>${n.kills||0}</td>
                <td>${n.deaths||0}</td>
                <td>${n.ping||0}ms</td>
            `,e.appendChild(r)}))};nt.onGameStarted=()=>{console.log("Game Started!"),Zt&&Zt.classList.add("hidden");const i=document.getElementById("start-screen");i&&(i.style.display="none");const e=document.getElementById("start-menu");e&&(e.classList.remove("hidden"),e.style.display="flex")};let Qo="witch";const Hr=document.getElementById("btn-class-witch"),Wr=document.getElementById("btn-class-warlock");Hr&&Wr&&(Hr.addEventListener("click",()=>{Qo="witch",Hr.classList.add("selected"),Wr.classList.remove("selected"),vt.setCharacterClass("witch")}),Wr.addEventListener("click",()=>{Qo="warlock",Wr.classList.add("selected"),Hr.classList.remove("selected"),vt.setCharacterClass("warlock")}));Kc&&Kc.addEventListener("click",async()=>{un&&un.classList.add("hidden");const i="Player";try{await nt.hostGame(null,i,Qo),nt.gameHost&&(nt.gameHost.startGame(),setTimeout(()=>{nt.send("joinTeam","blue")},100))}catch(e){console.error("Failed to start single player:",e),alert("Failed to start single player: "+e),un&&un.classList.remove("hidden")}});
