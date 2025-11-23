function ju(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const mo="181",qu=0,Vo=1,Yu=2,hl=1,Ku=2,vn=3,kn=0,It=1,yn=2,Sn=0,wi=1,Ho=2,Wo=3,$o=4,Zu=5,Yn=100,Ju=101,Qu=102,eh=103,th=104,nh=200,ih=201,rh=202,sh=203,_a=204,va=205,ah=206,oh=207,ch=208,lh=209,uh=210,hh=211,fh=212,dh=213,ph=214,ya=0,ba=1,Sa=2,Ii=3,Ma=4,Ta=5,Ea=6,Ca=7,fl=0,mh=1,xh=2,Fn=0,gh=1,_h=2,vh=3,yh=4,bh=5,Sh=6,Mh=7,dl=300,Li=301,Ui=302,Aa=303,Ra=304,Ts=306,wa=1e3,bn=1001,Pa=1002,Ht=1003,Th=1004,Rr=1005,qt=1006,Fs=1007,Zn=1008,hn=1009,pl=1010,ml=1011,hr=1012,xo=1013,ei=1014,ln=1015,Oi=1016,go=1017,_o=1018,fr=1020,xl=35902,gl=35899,_l=1021,vl=1022,sn=1023,dr=1026,pr=1027,vo=1028,yo=1029,bo=1030,So=1031,Mo=1033,Jr=33776,Qr=33777,es=33778,ts=33779,Da=35840,Ia=35841,La=35842,Ua=35843,Fa=36196,Na=37492,ka=37496,Oa=37808,Ba=37809,za=37810,Ga=37811,Va=37812,Ha=37813,Wa=37814,$a=37815,Xa=37816,ja=37817,qa=37818,Ya=37819,Ka=37820,Za=37821,Ja=36492,Qa=36494,eo=36495,to=36283,no=36284,io=36285,ro=36286,Eh=3200,Ch=3201,yl=0,Ah=1,Dn="",Xt="srgb",Fi="srgb-linear",hs="linear",it="srgb",ci=7680,Xo=519,Rh=512,wh=513,Ph=514,bl=515,Dh=516,Ih=517,Lh=518,Uh=519,so=35044,jo="300 es",un=2e3,fs=2001;function Sl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fh(){const i=ds("canvas");return i.style.display="block",i}const qo={};function ps(...i){const e="THREE."+i.shift();console.log(e,...i)}function Be(...i){const e="THREE."+i.shift();console.warn(e,...i)}function mt(...i){const e="THREE."+i.shift();console.error(e,...i)}function mr(...i){const e=i.join(" ");e in qo||(qo[e]=!0,Be(...i))}function Nh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yo=1234567;const or=Math.PI/180,xr=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function To(i,e){return(i%e+e)%e}function kh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Oh(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function Bh(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function zh(i,e=1){return e-Math.abs(To(i,e*2)-e)}function Gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wh(i,e){return i+Math.random()*(e-i)}function $h(i){return i*(.5-Math.random())}function Xh(i){i!==void 0&&(Yo=i);let e=Yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jh(i){return i*or}function qh(i){return i*xr}function Yh(i){return(i&i-1)===0&&i!==0}function Kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*u,o*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ai={DEG2RAD:or,RAD2DEG:xr,generateUUID:Mn,clamp:qe,euclideanModulo:To,mapLinear:kh,inverseLerp:Oh,lerp:cr,damp:Bh,pingpong:zh,smoothstep:Gh,smootherstep:Vh,randInt:Hh,randFloat:Wh,randFloatSpread:$h,seededRandom:Xh,degToRad:jh,radToDeg:qh,isPowerOfTwo:Yh,ceilPowerOfTwo:Kh,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:Jh,normalize:et,denormalize:rn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==m||u!==g){let x=c*f+l*m+u*g+h*v;x<0&&(f=-f,m=-m,g=-g,v=-v,x=-x);let d=1-o;if(x<.9995){const S=Math.acos(x),p=Math.sin(S);d=Math.sin(d*S)/p,o=Math.sin(o*S)/p,c=c*d+f*o,l=l*d+m*o,u=u*d+g*o,h=h*d+v*o}else{c=c*d+f*o,l=l*d+m*o,u=u*d+g*o,h=h*d+v*o;const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-o*m,e[t+2]=l*g+u*m+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new z,Ko=new yr;class He{constructor(e,t,n,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],v=r[0],x=r[3],d=r[6],S=r[1],p=r[4],_=r[7],A=r[2],T=r[5],E=r[8];return s[0]=a*v+o*S+c*A,s[3]=a*x+o*p+c*T,s[6]=a*d+o*_+c*E,s[1]=l*v+u*S+h*A,s[4]=l*x+u*p+h*T,s[7]=l*d+u*_+h*E,s[2]=f*v+m*S+g*A,s[5]=f*x+m*p+g*T,s[8]=f*d+m*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,m=l*s-a*c,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new He,Zo=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const i={enabled:!0,workingColorSpace:Fi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Tn(r.r),r.g=Tn(r.g),r.b=Tn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dn?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fi]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ke=Qh();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class ef{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=ds("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tf=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Os(r[a].image)):s.push(Os(r[a]))}else s=Os(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Os(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let nf=0;const Bs=new z;class Et extends Bi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=bn,r=bn,s=qt,a=Zn,o=sn,c=hn,l=Et.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Mn(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bs).x}get height(){return this.source.getSize(Bs).y}get depth(){return this.source.getSize(Bs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=dl;Et.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],v=c[2],x=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(l+1)/2,_=(m+1)/2,A=(d+1)/2,T=(u+f)/4,E=(h+v)/4,D=(g+x)/4;return p>_&&p>A?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=T/n,s=E/n):_>A?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=E/s,r=D/s),this.set(n,r,s,t),this}let S=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Et(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Eo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ml extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sf extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Pr.subVectors(this.max,Wi),ui.subVectors(e.a,Wi),hi.subVectors(e.b,Wi),fi.subVectors(e.c,Wi),En.subVectors(hi,ui),Cn.subVectors(fi,hi),Vn.subVectors(ui,fi);let t=[0,-En.z,En.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!zs(t,ui,hi,fi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,ui,hi,fi,Pr))?!1:(Dr.crossVectors(En,Cn),t=[Dr.x,Dr.y,Dr.z],zs(t,ui,hi,fi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],Qt=new z,wr=new ii,ui=new z,hi=new z,fi=new z,En=new z,Cn=new z,Vn=new z,Wi=new z,Pr=new z,Dr=new z,Hn=new z;function zs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Hn.fromArray(i,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const af=new ii,$i=new z,Gs=new z;class br{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):af.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Gs)),this.expandByPoint($i.copy(e.center).sub(Gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pn=new z,Vs=new z,Ir=new z,An=new z,Hs=new z,Lr=new z,Ws=new z;class of{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vs.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Vs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=An.dot(this.direction),c=-An.dot(Ir),l=An.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vs).addScaledVector(Ir,f),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){Hs.subVectors(t,e),Lr.subVectors(n,e),Ws.crossVectors(Hs,Lr);let a=this.direction.dot(Ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(Lr.crossVectors(An,Lr));if(c<0)return null;const l=o*this.direction.dot(Hs.cross(An));if(l<0||c+l>a)return null;const u=-o*An.dot(Ws);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,r,s,a,o,c,l,u,h,f,m,g,v,x){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,m,g,v,x)}set(e,t,n,r,s,a,o,c,l,u,h,f,m,g,v,x){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cf,e,lf)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(n,Bt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(n,Bt)),Rn.normalize(),Ur.crossVectors(Bt,Rn),r[0]=Rn.x,r[4]=Ur.x,r[8]=Bt.x,r[1]=Rn.y,r[5]=Ur.y,r[9]=Bt.y,r[2]=Rn.z,r[6]=Ur.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],v=n[6],x=n[10],d=n[14],S=n[3],p=n[7],_=n[11],A=n[15],T=r[0],E=r[4],D=r[8],b=r[12],M=r[1],I=r[5],C=r[9],y=r[13],P=r[2],U=r[6],O=r[10],B=r[14],F=r[3],G=r[7],$=r[11],ee=r[15];return s[0]=a*T+o*M+c*P+l*F,s[4]=a*E+o*I+c*U+l*G,s[8]=a*D+o*C+c*O+l*$,s[12]=a*b+o*y+c*B+l*ee,s[1]=u*T+h*M+f*P+m*F,s[5]=u*E+h*I+f*U+m*G,s[9]=u*D+h*C+f*O+m*$,s[13]=u*b+h*y+f*B+m*ee,s[2]=g*T+v*M+x*P+d*F,s[6]=g*E+v*I+x*U+d*G,s[10]=g*D+v*C+x*O+d*$,s[14]=g*b+v*y+x*B+d*ee,s[3]=S*T+p*M+_*P+A*F,s[7]=S*E+p*I+_*U+A*G,s[11]=S*D+p*C+_*O+A*$,s[15]=S*b+p*y+_*B+A*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],v=e[7],x=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*m-n*c*m)+v*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+x*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],v=e[13],x=e[14],d=e[15],S=h*x*l-v*f*l+v*c*m-o*x*m-h*c*d+o*f*d,p=g*f*l-u*x*l-g*c*m+a*x*m+u*c*d-a*f*d,_=u*v*l-g*h*l+g*o*m-a*v*m-u*o*d+a*h*d,A=g*h*c-u*v*c-g*o*f+a*v*f+u*o*x-a*h*x,T=t*S+n*p+r*_+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=S*E,e[1]=(v*f*s-h*x*s-v*r*m+n*x*m+h*r*d-n*f*d)*E,e[2]=(o*x*s-v*c*s+v*r*l-n*x*l-o*r*d+n*c*d)*E,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*m-n*c*m)*E,e[4]=p*E,e[5]=(u*x*s-g*f*s+g*r*m-t*x*m-u*r*d+t*f*d)*E,e[6]=(g*c*s-a*x*s-g*r*l+t*x*l+a*r*d-t*c*d)*E,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*E,e[8]=_*E,e[9]=(g*h*s-u*v*s-g*n*m+t*v*m+u*n*d-t*h*d)*E,e[10]=(a*v*s-g*o*s+g*n*l-t*v*l-a*n*d+t*o*d)*E,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*E,e[12]=A*E,e[13]=(u*v*r-g*h*r+g*n*f-t*v*f-u*n*x+t*h*x)*E,e[14]=(g*o*r-a*v*r-g*n*c+t*v*c+a*n*x-t*o*x)*E,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,m=s*u,g=s*h,v=a*u,x=a*h,d=o*h,S=c*l,p=c*u,_=c*h,A=n.x,T=n.y,E=n.z;return r[0]=(1-(v+d))*A,r[1]=(m+_)*A,r[2]=(g-p)*A,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(f+d))*T,r[6]=(x+S)*T,r[7]=0,r[8]=(g+p)*E,r[9]=(x-S)*E,r[10]=(1-(f+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const l=1/s,u=1/a,h=1/o;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=un,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===un)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===fs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=un,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===un)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===fs)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new z,en=new lt,cf=new z(0,0,0),lf=new z(1,1,1),Rn=new z,Ur=new z,Bt=new z,Qo=new lt,ec=new yr;class Kt{constructor(e=0,t=0,n=0,r=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const tc=new z,pi=new yr,mn=new lt,Fr=new z,Xi=new z,hf=new z,ff=new yr,nc=new z(1,0,0),ic=new z(0,1,0),rc=new z(0,0,1),sc={type:"added"},df={type:"removed"},mi={type:"childadded",child:null},$s={type:"childremoved",child:null};class bt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new z,t=new Kt,n=new yr,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new He}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.multiply(pi),this}rotateOnWorldAxis(e,t){return pi.setFromAxisAngle(e,t),this.quaternion.premultiply(pi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Xi,Fr,this.up):mn.lookAt(Fr,Xi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),pi.setFromRotationMatrix(mn),this.quaternion.premultiply(pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),mi.child=e,this.dispatchEvent(mi),mi.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(df),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),mi.child=e,this.dispatchEvent(mi),mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new z(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new z,xn=new z,Xs=new z,gn=new z,xi=new z,gi=new z,ac=new z,js=new z,qs=new z,Ys=new z,Ks=new st,Zs=new st,Js=new st;class jt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){tn.subVectors(r,t),xn.subVectors(n,t),Xs.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(xn),c=tn.dot(Xs),l=xn.dot(xn),u=xn.dot(Xs),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ks.setScalar(0),Zs.setScalar(0),Js.setScalar(0),Ks.fromBufferAttribute(e,t),Zs.fromBufferAttribute(e,n),Js.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ks,s.x),a.addScaledVector(Zs,s.y),a.addScaledVector(Js,s.z),a}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;xi.subVectors(r,n),gi.subVectors(s,n),js.subVectors(e,n);const c=xi.dot(js),l=gi.dot(js);if(c<=0&&l<=0)return t.copy(n);qs.subVectors(e,r);const u=xi.dot(qs),h=gi.dot(qs);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(xi,a);Ys.subVectors(e,s);const m=xi.dot(Ys),g=gi.dot(Ys);if(g>=0&&m<=g)return t.copy(s);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gi,o);const x=u*g-m*h;if(x<=0&&h-u>=0&&m-g>=0)return ac.subVectors(s,r),o=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(ac,o);const d=1/(x+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(xi,a).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Qs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=To(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qs(a,s,e+1/3),this.g=Qs(a,s,e),this.b=Qs(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ke.workingToColorSpace(Mt.copy(this),e),Math.round(qe(Mt.r*255,0,255))*65536+Math.round(qe(Mt.g*255,0,255))*256+Math.round(qe(Mt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Xt){Ke.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Nr);const n=cr(wn.h,Nr.h,t),r=cr(wn.s,Nr.s,t),s=cr(wn.l,Nr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=El;let pf=0;class zi extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=wi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sr extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new z,kr=new ze;let mf=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=so,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==so&&(e.usage=this.usage),e}}class Cl extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xf=0;const $t=new lt,ea=new bt,_i=new z,zt=new ii,ji=new ii,yt=new z;class Zt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sl(e)?Al:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(zt.min,ji.min),zt.expandByPoint(yt),yt.addVectors(zt.max,ji.max),zt.expandByPoint(yt)):(zt.expandByPoint(ji.min),zt.expandByPoint(ji.max))}zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)yt.fromBufferAttribute(o,l),c&&(_i.fromBufferAttribute(e,l),yt.add(_i)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new z,c[D]=new z;const l=new z,u=new z,h=new z,f=new ze,m=new ze,g=new ze,v=new z,x=new z;function d(D,b,M){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),m.sub(f),g.sub(f);const I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(I),x.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(I),o[D].add(v),o[b].add(v),o[M].add(v),c[D].add(x),c[b].add(x),c[M].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,b=S.length;D<b;++D){const M=S[D],I=M.start,C=M.count;for(let y=I,P=I+C;y<P;y+=3)d(e.getX(y+0),e.getX(y+1),e.getX(y+2))}const p=new z,_=new z,A=new z,T=new z;function E(D){A.fromBufferAttribute(r,D),T.copy(A);const b=o[D];p.copy(b),p.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(T,b);const I=_.dot(c[D])<0?-1:1;a.setXYZW(D,p.x,p.y,p.z,I)}for(let D=0,b=S.length;D<b;++D){const M=S[D],I=M.start,C=M.count;for(let y=I,P=I+C;y<P;y+=3)E(e.getX(y+0)),E(e.getX(y+1)),E(e.getX(y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,x=c.length;v<x;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new Yt(f,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new lt,Wn=new of,Or=new br,cc=new z,Br=new z,zr=new z,Gr=new z,ta=new z,Vr=new z,lc=new z,Hr=new z;class ct extends bt{constructor(e=new Zt,t=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ta.fromBufferAttribute(h,e),a?Vr.addScaledVector(ta,u):Vr.addScaledVector(ta.sub(t),u))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Wn.copy(e.ray).recast(e.near),!(Or.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Or,cc)===null||Wn.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(oc.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const x=f[g],d=a[x.materialIndex],S=Math.max(x.start,m.start),p=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let _=S,A=p;_<A;_+=3){const T=o.getX(_),E=o.getX(_+1),D=o.getX(_+2);r=Wr(this,d,e,n,l,u,h,T,E,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let x=g,d=v;x<d;x+=3){const S=o.getX(x),p=o.getX(x+1),_=o.getX(x+2);r=Wr(this,a,e,n,l,u,h,S,p,_),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const x=f[g],d=a[x.materialIndex],S=Math.max(x.start,m.start),p=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let _=S,A=p;_<A;_+=3){const T=_,E=_+1,D=_+2;r=Wr(this,d,e,n,l,u,h,T,E,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let x=g,d=v;x<d;x+=3){const S=x,p=x+1,_=x+2;r=Wr(this,a,e,n,l,u,h,S,p,_),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function gf(i,e,t,n,r,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===kn,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:i}}function Wr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Br),i.getVertexPosition(c,zr),i.getVertexPosition(l,Gr);const u=gf(i,e,t,n,Br,zr,Gr,lc);if(u){const h=new z;jt.getBarycoord(lc,Br,zr,Gr,h),r&&(u.uv=jt.getInterpolatedAttribute(r,o,c,l,h,new ze)),s&&(u.uv1=jt.getInterpolatedAttribute(s,o,c,l,h,new ze)),a&&(u.normal=jt.getInterpolatedAttribute(a,o,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new z,materialIndex:0};jt.getNormal(Br,zr,Gr,f.normal),u.face=f,u.barycoord=h}return u}class Bn extends Zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(v,x,d,S,p,_,A,T,E,D,b){const M=_/E,I=A/D,C=_/2,y=A/2,P=T/2,U=E+1,O=D+1;let B=0,F=0;const G=new z;for(let $=0;$<O;$++){const ee=$*I-y;for(let re=0;re<U;re++){const de=re*M-C;G[v]=de*S,G[x]=ee*p,G[d]=P,l.push(G.x,G.y,G.z),G[v]=0,G[x]=0,G[d]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(re/E),h.push(1-$/D),B+=1}}for(let $=0;$<D;$++)for(let ee=0;ee<E;ee++){const re=f+ee+U*$,de=f+ee+U*($+1),Me=f+(ee+1)+U*($+1),ke=f+(ee+1)+U*$;c.push(re,de,ke),c.push(de,Me,ke),F+=6}o.addGroup(m,F,b),m+=F,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ni(i[t]);for(const r in n)e[r]=n[r]}return e}function _f(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const vf={clone:Ni,merge:Dt};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=_f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new z,uc=new ze,hc=new ze;class Gt extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,uc,hc),t.subVectors(hc,uc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,yi=1;class Sf extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(vi,yi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(vi,yi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(vi,yi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(vi,yi,e,t);o.layers=this.layers,this.add(o);const c=new Gt(vi,yi,e,t);c.layers=this.layers,this.add(c);const l=new Gt(vi,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===un)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pl extends Et{constructor(e=[],t=Li,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mf extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bn(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Sn});s.uniforms.tEquirect.value=t;const a=new ct(r,s),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=qt),new Sf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Jn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tf={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n),d=this._getHandJoint(l,v);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tf)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Co{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new Co(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ef extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=so,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new z;class ms{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ps("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ms(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ps("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dl extends zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bi;const qi=new z,Si=new z,Mi=new z,Ti=new ze,Yi=new ze,Il=new lt,$r=new z,Ki=new z,Xr=new z,fc=new ze,ia=new ze,dc=new ze;class Af extends bt{constructor(e=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cf(t,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new ms(n,3,0,!1)),bi.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=bi,this.material=e,this.center=new ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Il.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-Mi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;jr($r.set(-.5,-.5,0),Mi,a,Si,r,s),jr(Ki.set(.5,-.5,0),Mi,a,Si,r,s),jr(Xr.set(.5,.5,0),Mi,a,Si,r,s),fc.set(0,0),ia.set(1,0),dc.set(1,1);let o=e.ray.intersectTriangle($r,Ki,Xr,!1,qi);if(o===null&&(jr(Ki.set(-.5,.5,0),Mi,a,Si,r,s),ia.set(0,1),o=e.ray.intersectTriangle($r,Xr,Ki,!1,qi),o===null))return;const c=e.ray.origin.distanceTo(qi);c<e.near||c>e.far||t.push({distance:c,point:qi.clone(),uv:jt.getInterpolation(qi,$r,Ki,Xr,fc,ia,dc,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(i,e,t,n,r,s){Ti.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Yi.x=s*Ti.x-r*Ti.y,Yi.y=r*Ti.x+s*Ti.y):Yi.copy(Ti),i.copy(e),i.x+=Yi.x,i.y+=Yi.y,i.applyMatrix4(Il)}class Ll extends Et{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ht,u=Ht,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends Yt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ei=new lt,mc=new lt,qr=[],xc=new ii,Rf=new lt,Zi=new ct,Ji=new br;class wf extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),xc.copy(e.boundingBox).applyMatrix4(Ei),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ei),Ji.copy(e.boundingSphere).applyMatrix4(Ei),this.boundingSphere.union(Ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ji.copy(this.boundingSphere),Ji.applyMatrix4(n),e.ray.intersectsSphere(Ji)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ei),mc.multiplyMatrices(n,Ei),Zi.matrixWorld=mc,Zi.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const c=qr[a];c.instanceId=s,c.object=this,t.push(c)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(r*this.count),r,this.count,vo,ln));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ra=new z,Pf=new z,Df=new He;class qn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ra.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ra),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Df.getNormalMatrix(e),r=this.coplanarPoint(ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new br,If=new ze(.5,.5),Yr=new z;class Ao{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=un,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],m=s[7],g=s[8],v=s[9],x=s[10],d=s[11],S=s[12],p=s[13],_=s[14],A=s[15];if(r[0].setComponents(l-a,m-u,d-g,A-S).normalize(),r[1].setComponents(l+a,m+u,d+g,A+S).normalize(),r[2].setComponents(l+o,m+h,d+v,A+p).normalize(),r[3].setComponents(l-o,m-h,d-v,A-p).normalize(),n)r[4].setComponents(c,f,x,_).normalize(),r[5].setComponents(l-c,m-f,d-x,A-_).normalize();else if(r[4].setComponents(l-c,m-f,d-x,A-_).normalize(),t===un)r[5].setComponents(l+c,m+f,d+x,A+_).normalize();else if(t===fs)r[5].setComponents(c,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){$n.center.set(0,0,0);const t=If.distanceTo(e.center);return $n.radius=.7071067811865476+t,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yr.x=r.normal.x>0?e.max.x:e.min.x,Yr.y=r.normal.y>0?e.max.y:e.min.y,Yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lf extends Et{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ul extends Et{constructor(e,t,n=ei,r,s,a,o=Ht,c=Ht,l,u=dr,h=1){if(u!==dr&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fl extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Es extends Zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const v=[],x=n/2;let d=0;S(),a===!1&&(e>0&&p(!0),t>0&&p(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(m,2));function S(){const _=new z,A=new z;let T=0;const E=(t-e)/n;for(let D=0;D<=s;D++){const b=[],M=D/s,I=M*(t-e)+e;for(let C=0;C<=r;C++){const y=C/r,P=y*c+o,U=Math.sin(P),O=Math.cos(P);A.x=I*U,A.y=-M*n+x,A.z=I*O,h.push(A.x,A.y,A.z),_.set(U,E,O).normalize(),f.push(_.x,_.y,_.z),m.push(y,1-M),b.push(g++)}v.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){const M=v[b][D],I=v[b+1][D],C=v[b+1][D+1],y=v[b][D+1];(e>0||b!==0)&&(u.push(M,I,y),T+=3),(t>0||b!==s-1)&&(u.push(I,C,y),T+=3)}l.addGroup(d,T,0),d+=T}function p(_){const A=g,T=new ze,E=new z;let D=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,x*M,0),f.push(0,M,0),m.push(.5,.5),g++;const I=g;for(let C=0;C<=r;C++){const P=C/r*c+o,U=Math.cos(P),O=Math.sin(P);E.x=b*O,E.y=x*M,E.z=b*U,h.push(E.x,E.y,E.z),f.push(0,M,0),T.x=U*.5+.5,T.y=O*.5*M+.5,m.push(T.x,T.y),g++}for(let C=0;C<r;C++){const y=A+C,P=I+C;_===!0?u.push(P,P+1,y):u.push(P+1,P,y),D+=3}l.addGroup(d,D,_===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Es{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ro extends Zt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("normal",new Ct(s.slice(),3)),this.setAttribute("uv",new Ct(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const p=new z,_=new z,A=new z;for(let T=0;T<t.length;T+=3)m(t[T+0],p),m(t[T+1],_),m(t[T+2],A),c(p,_,A,S)}function c(S,p,_,A){const T=A+1,E=[];for(let D=0;D<=T;D++){E[D]=[];const b=S.clone().lerp(_,D/T),M=p.clone().lerp(_,D/T),I=T-D;for(let C=0;C<=I;C++)C===0&&D===T?E[D][C]=b:E[D][C]=b.clone().lerp(M,C/I)}for(let D=0;D<T;D++)for(let b=0;b<2*(T-D)-1;b++){const M=Math.floor(b/2);b%2===0?(f(E[D][M+1]),f(E[D+1][M]),f(E[D][M])):(f(E[D][M+1]),f(E[D+1][M+1]),f(E[D+1][M]))}}function l(S){const p=new z;for(let _=0;_<s.length;_+=3)p.x=s[_+0],p.y=s[_+1],p.z=s[_+2],p.normalize().multiplyScalar(S),s[_+0]=p.x,s[_+1]=p.y,s[_+2]=p.z}function u(){const S=new z;for(let p=0;p<s.length;p+=3){S.x=s[p+0],S.y=s[p+1],S.z=s[p+2];const _=x(S)/2/Math.PI+.5,A=d(S)/Math.PI+.5;a.push(_,1-A)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const p=a[S+0],_=a[S+2],A=a[S+4],T=Math.max(p,_,A),E=Math.min(p,_,A);T>.9&&E<.1&&(p<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function m(S,p){const _=S*3;p.x=e[_+0],p.y=e[_+1],p.z=e[_+2]}function g(){const S=new z,p=new z,_=new z,A=new z,T=new ze,E=new ze,D=new ze;for(let b=0,M=0;b<s.length;b+=9,M+=6){S.set(s[b+0],s[b+1],s[b+2]),p.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),T.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),A.copy(S).add(p).add(_).divideScalar(3);const I=x(A);v(T,M+0,S,I),v(E,M+2,p,I),v(D,M+4,_,I)}}function v(S,p,_,A){A<0&&S.x===1&&(a[p]=S.x-1),_.x===0&&_.z===0&&(a[p]=A/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.vertices,e.indices,e.radius,e.details)}}class Gi extends Ro{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gi(e.radius,e.detail)}}class Cs extends Zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,m=[],g=[],v=[],x=[];for(let d=0;d<u;d++){const S=d*f-a;for(let p=0;p<l;p++){const _=p*h-s;g.push(_,-S,0),v.push(0,0,1),x.push(p/o),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){const p=S+l*d,_=S+l*(d+1),A=S+1+l*(d+1),T=S+1+l*d;m.push(p,_,T),m.push(_,A,T)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ni extends Zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new z,f=new z,m=[],g=[],v=[],x=[];for(let d=0;d<=n;d++){const S=[],p=d/n;let _=0;d===0&&a===0?_=.5/t:d===n&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const T=A/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+p*o),h.y=e*Math.cos(a+p*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+p*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),x.push(T+_,1-p),S.push(l++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<t;S++){const p=u[d][S+1],_=u[d][S],A=u[d+1][S],T=u[d+1][S+1];(d!==0||a>0)&&m.push(p,_,T),(d!==n-1||c<Math.PI)&&m.push(_,A,T)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class an extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uf extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ff extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wo extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sa=new lt,gc=new z,_c=new z;class Nl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(gc),_c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_c),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new lt,Qi=new z,aa=new z;class Nf extends Nl{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),r.makeTranslation(-Qi.x,-Qi.y,-Qi.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc,n.coordinateSystem,n.reversedDepth)}}class As extends wo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Nf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kl extends wl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kf extends Nl{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new kf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bf extends wo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zf extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yc(i,e,t,n){const r=Vf(n);switch(t){case _l:return i*e;case vo:return i*e/r.components*r.byteLength;case yo:return i*e/r.components*r.byteLength;case bo:return i*e*2/r.components*r.byteLength;case So:return i*e*2/r.components*r.byteLength;case vl:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case Mo:return i*e*4/r.components*r.byteLength;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case Da:case La:return Math.max(i,8)*Math.max(e,8)/2;case Fa:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Qa:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*8;case io:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vf(i){switch(i){case hn:case pl:return{byteLength:1,components:1};case hr:case ml:case Oi:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case ei:case xo:case ln:return{byteLength:4,components:1};case xl:case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function Ol(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Hf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,rd=`#ifdef USE_BUMPMAP
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fd=`uniform bool receiveShadow;
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
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gd=`PhysicalMaterial material;
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
#endif`,Vd=`uniform sampler2D dfgLUT;
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
}`,Hd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qd=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,hm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,dm=`#define STANDARD
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
}`,pm=`#define STANDARD
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
}`,mm=`#define TOON
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
}`,xm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Wf,alphahash_pars_fragment:$f,alphamap_fragment:Xf,alphamap_pars_fragment:jf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:rd,clipping_planes_fragment:sd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:cd,color_fragment:ld,color_pars_fragment:ud,color_pars_vertex:hd,color_vertex:fd,common:dd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:xd,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:yd,colorspace_pars_fragment:bd,envmap_fragment:Sd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Td,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Nd,envmap_vertex:Cd,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:wd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Ud,lights_pars_begin:Fd,lights_toon_fragment:kd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:Gd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Hd,lights_fragment_maps:Wd,lights_fragment_end:$d,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:Kd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:np,morphcolor_vertex:ip,morphnormal_vertex:rp,morphtarget_pars_vertex:sp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:cp,normal_pars_fragment:lp,normal_pars_vertex:up,normal_vertex:hp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:dp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:xp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:yp,dithering_fragment:bp,dithering_pars_fragment:Sp,roughnessmap_fragment:Mp,roughnessmap_pars_fragment:Tp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Cp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Rp,skinbase_vertex:wp,skinning_pars_vertex:Pp,skinning_vertex:Dp,skinnormal_vertex:Ip,specularmap_fragment:Lp,specularmap_pars_fragment:Up,tonemapping_fragment:Fp,tonemapping_pars_fragment:Np,transmission_fragment:kp,transmission_pars_fragment:Op,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:Gp,worldpos_vertex:Vp,background_vert:Hp,background_frag:Wp,backgroundCube_vert:$p,backgroundCube_frag:Xp,cube_vert:jp,cube_frag:qp,depth_vert:Yp,depth_frag:Kp,distanceRGBA_vert:Zp,distanceRGBA_frag:Jp,equirect_vert:Qp,equirect_frag:em,linedashed_vert:tm,linedashed_frag:nm,meshbasic_vert:im,meshbasic_frag:rm,meshlambert_vert:sm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:cm,meshnormal_vert:lm,meshnormal_frag:um,meshphong_vert:hm,meshphong_frag:fm,meshphysical_vert:dm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:xm,points_vert:gm,points_frag:_m,shadow_vert:vm,shadow_frag:ym,sprite_vert:bm,sprite_frag:Sm},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},cn={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};cn.physical={uniforms:Dt([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Kr={r:0,b:0,g:0},Xn=new Kt,Mm=new lt;function Tm(i,e,t,n,r,s,a){const o=new Xe(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function g(p){let _=p.isScene===!0?p.background:null;return _&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_}function v(p){let _=!1;const A=g(p);A===null?d(o,c):A&&A.isColor&&(d(A,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(p,_){const A=g(_);A&&(A.isCubeTexture||A.mapping===Ts)?(u===void 0&&(u=new ct(new Bn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ni(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xn.copy(_.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Xn)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,(h!==A||f!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ct(new Cs(2,2),new fn({name:"BackgroundMaterial",uniforms:Ni(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){p.getRGB(Kr,Rl(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,_,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(o,c)},render:v,addToRenderList:x,dispose:S}}function Em(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,I,C,y,P){let U=!1;const O=h(y,C,I);s!==O&&(s=O,l(s.object)),U=m(M,y,C,P),U&&g(M,y,C,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,_(M,I,C,y),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,C){const y=C.wireframe===!0;let P=n[M.id];P===void 0&&(P={},n[M.id]=P);let U=P[I.id];U===void 0&&(U={},P[I.id]=U);let O=U[y];return O===void 0&&(O=f(c()),U[y]=O),O}function f(M){const I=[],C=[],y=[];for(let P=0;P<t;P++)I[P]=0,C[P]=0,y[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:C,attributeDivisors:y,object:M,attributes:{},index:null}}function m(M,I,C,y){const P=s.attributes,U=I.attributes;let O=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){const $=P[F];let ee=U[F];if(ee===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),$===void 0||$.attribute!==ee||ee&&$.data!==ee.data)return!0;O++}return s.attributesNum!==O||s.index!==y}function g(M,I,C,y){const P={},U=I.attributes;let O=0;const B=C.getAttributes();for(const F in B)if(B[F].location>=0){let $=U[F];$===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const ee={};ee.attribute=$,$&&$.data&&(ee.data=$.data),P[F]=ee,O++}s.attributes=P,s.attributesNum=O,s.index=y}function v(){const M=s.newAttributes;for(let I=0,C=M.length;I<C;I++)M[I]=0}function x(M){d(M,0)}function d(M,I){const C=s.newAttributes,y=s.enabledAttributes,P=s.attributeDivisors;C[M]=1,y[M]===0&&(i.enableVertexAttribArray(M),y[M]=1),P[M]!==I&&(i.vertexAttribDivisor(M,I),P[M]=I)}function S(){const M=s.newAttributes,I=s.enabledAttributes;for(let C=0,y=I.length;C<y;C++)I[C]!==M[C]&&(i.disableVertexAttribArray(C),I[C]=0)}function p(M,I,C,y,P,U,O){O===!0?i.vertexAttribIPointer(M,I,C,P,U):i.vertexAttribPointer(M,I,C,y,P,U)}function _(M,I,C,y){v();const P=y.attributes,U=C.getAttributes(),O=I.defaultAttributeValues;for(const B in U){const F=U[B];if(F.location>=0){let G=P[B];if(G===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){const $=G.normalized,ee=G.itemSize,re=e.get(G);if(re===void 0)continue;const de=re.buffer,Me=re.type,ke=re.bytesPerElement,Y=Me===i.INT||Me===i.UNSIGNED_INT||G.gpuType===xo;if(G.isInterleavedBufferAttribute){const J=G.data,ue=J.stride,Ae=G.offset;if(J.isInstancedInterleavedBuffer){for(let ve=0;ve<F.locationSize;ve++)d(F.location+ve,J.meshPerAttribute);M.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<F.locationSize;ve++)x(F.location+ve);i.bindBuffer(i.ARRAY_BUFFER,de);for(let ve=0;ve<F.locationSize;ve++)p(F.location+ve,ee/F.locationSize,Me,$,ue*ke,(Ae+ee/F.locationSize*ve)*ke,Y)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)d(F.location+J,G.meshPerAttribute);M.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<F.locationSize;J++)x(F.location+J);i.bindBuffer(i.ARRAY_BUFFER,de);for(let J=0;J<F.locationSize;J++)p(F.location+J,ee/F.locationSize,Me,$,ee*ke,ee/F.locationSize*J*ke,Y)}}else if(O!==void 0){const $=O[B];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(F.location,$);break;case 3:i.vertexAttrib3fv(F.location,$);break;case 4:i.vertexAttrib4fv(F.location,$);break;default:i.vertexAttrib1fv(F.location,$)}}}}S()}function A(){D();for(const M in n){const I=n[M];for(const C in I){const y=I[C];for(const P in y)u(y[P].object),delete y[P];delete I[C]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const C in I){const y=I[C];for(const P in y)u(y[P].object),delete y[P];delete I[C]}delete n[M.id]}function E(M){for(const I in n){const C=n[I];if(C[M.id]===void 0)continue;const y=C[M.id];for(const P in y)u(y[P].object),delete y[P];delete C[M.id]}}function D(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:x,disableUnusedAttributes:S}}function Cm(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function c(l,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Am(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==sn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==hn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!D)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Be("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:S,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function Rm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!x)s?u(null):l();else{const S=s?0:n,p=S*4;let _=d.clippingState||null;c.value=_,_=u(g,f,p,m);for(let A=0;A!==p;++A)_[A]=t[A];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=c.value,g!==!0||x===null){const d=m+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(x===null||x.length<d)&&(x=new Float32Array(d));for(let p=0,_=m;p!==v;++p,_+=4)a.copy(h[p]).applyMatrix4(S,o),a.normal.toArray(x,_),x[_+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function wm(i){let e=new WeakMap;function t(a,o){return o===Aa?a.mapping=Li:o===Ra&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Aa||o===Ra)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ln=4,bc=[.125,.215,.35,.446,.526,.582],Kn=20,Pm=256,er=new kl,Sc=new Xe;let oa=null,ca=0,la=0,ua=!1;const Dm=new z;class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Dm}=s;oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,ca,la),this._renderer.xr.enabled=ua,e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Oi,format:sn,colorSpace:Fi,depthBuffer:!1},r=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Im(s)),this._blurMaterial=Um(s,e,t),this._ggxMaterial=Lm(s,e,t)}return r}_compileMaterial(e){const t=new ct(new Zt,e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,n,r,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Sc),h.toneMapping=Fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new Bn,new Sr({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let d=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,d=!0):(x.color.copy(Sc),d=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(c.up.set(0,l[p],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[p],s.y,s.z)):_===1?(c.up.set(0,0,l[p]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[p],s.z)):(c.up.set(0,l[p],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[p]));const A=this._cubeSize;Ci(r,_*A,p>2?A:0,A,A),h.setRenderTarget(r),d&&h.render(v,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Li||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ci(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=.05+l*.95,m=h*f,{_lodMax:g}=this,v=this._sizeLods[n],x=3*v*(n>g-Ln?n-g+Ln:0),d=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Ci(s,x,d,3*v,2*v),r.setRenderTarget(s),r.render(o,er),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ci(e,x,d,3*v,2*v),r.setRenderTarget(e),r.render(o,er)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):Kn;x>Kn&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Kn}`);const d=[];let S=0;for(let E=0;E<Kn;++E){const D=E/v,b=Math.exp(-D*D/2);d.push(b),E===0?S+=b:E<x&&(S+=2*b)}for(let E=0;E<d.length;E++)d[E]=d[E]/S;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:p}=this;f.dTheta.value=g,f.mipInt.value=p-n;const _=this._sizeLods[r],A=3*_*(r>p-Ln?r-p+Ln:0),T=4*(this._cubeSize-_);Ci(t,A,T,3*_,2*_),c.setRenderTarget(t),c.render(h,er)}}function Im(i){const e=[],t=[],n=[];let r=i;const s=i-Ln+1+bc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Ln?c=bc[a-i+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,x=2,d=1,S=new Float32Array(v*g*m),p=new Float32Array(x*g*m),_=new Float32Array(d*g*m);for(let T=0;T<m;T++){const E=T%3*2/3-1,D=T>2?0:-1,b=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];S.set(b,v*g*T),p.set(f,x*g*T);const M=[T,T,T,T,T,T];_.set(M,d*g*T)}const A=new Zt;A.setAttribute("position",new Yt(S,v)),A.setAttribute("uv",new Yt(p,x)),A.setAttribute("faceIndex",new Yt(_,d)),n.push(new ct(A,null)),r>Ln&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Tc(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ci(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Lm(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Um(i,e,t){const n=new Float32Array(Kn),r=new z(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ec(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rs(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Cc(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Rs(){return`

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
	`}function Fm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Aa||c===Ra,u=c===Li||c===Ui;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Mc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Mc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function km(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let p=0,_=S.length;p<_;p+=3){const A=S[p+0],T=S[p+1],E=S[p+2];f.push(A,T,T,E,E,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let p=0,_=S.length/3-1;p<_;p+=3){const A=p+0,T=p+1,E=p+2;f.push(A,T,T,E,E,A)}}else return;const x=new(Sl(f)?Al:Cl)(f,1);x.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,x)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Om(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*a,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let x=0;for(let d=0;d<g;d++)x+=m[d];t.update(x,n,1)}function h(f,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<f.length;d++)l(f[d]/a,m[d],v[d]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,v,0,g);let d=0;for(let S=0;S<g;S++)d+=m[S]*v[S];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zm(i,e,t){const n=new WeakMap,r=new st;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],p=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let A=o.attributes.position.count*_,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*T*4*h),D=new Ml(E,A,T,h);D.type=ln,D.needsUpdate=!0;const b=_*4;for(let I=0;I<h;I++){const C=d[I],y=S[I],P=p[I],U=A*T*4*I;for(let O=0;O<C.count;O++){const B=O*b;g===!0&&(r.fromBufferAttribute(C,O),E[U+B+0]=r.x,E[U+B+1]=r.y,E[U+B+2]=r.z,E[U+B+3]=0),v===!0&&(r.fromBufferAttribute(y,O),E[U+B+4]=r.x,E[U+B+5]=r.y,E[U+B+6]=r.z,E[U+B+7]=0),x===!0&&(r.fromBufferAttribute(P,O),E[U+B+8]=r.x,E[U+B+9]=r.y,E[U+B+10]=r.z,E[U+B+11]=P.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new ze(A,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<l.length;x++)g+=l[x];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Gm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Bl=new Et,Ac=new Ul(1,1),zl=new Ml,Gl=new sf,Vl=new Pl,Rc=[],wc=[],Pc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function Vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Rc[r];if(s===void 0&&(s=new Float32Array(r),Rc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ws(i,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),vt(t,n)}}function jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),vt(t,n)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Pc.set(n),i.uniformMatrix4fv(this.addr,!1,Pc),vt(t,n)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function i0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ac.compareFunction=bl,s=Ac):s=Bl,t.setTexture2D(e||s,r)}function r0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gl,r)}function s0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Vl,r)}function a0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zl,r)}function o0(i){switch(i){case 5126:return Vm;case 35664:return Hm;case 35665:return Wm;case 35666:return $m;case 35674:return Xm;case 35675:return jm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Qm;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(i,e){i.uniform1fv(this.addr,e)}function l0(i,e){const t=Vi(e,this.size,2);i.uniform2fv(this.addr,t)}function u0(i,e){const t=Vi(e,this.size,3);i.uniform3fv(this.addr,t)}function h0(i,e){const t=Vi(e,this.size,4);i.uniform4fv(this.addr,t)}function f0(i,e){const t=Vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){const t=Vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p0(i,e){const t=Vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m0(i,e){i.uniform1iv(this.addr,e)}function x0(i,e){i.uniform2iv(this.addr,e)}function g0(i,e){i.uniform3iv(this.addr,e)}function _0(i,e){i.uniform4iv(this.addr,e)}function v0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function b0(i,e){i.uniform3uiv(this.addr,e)}function S0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Bl,s[a])}function T0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gl,s[a])}function E0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vl,s[a])}function C0(i,e,t){const n=this.cache,r=e.length,s=ws(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zl,s[a])}function A0(i){switch(i){case 5126:return c0;case 35664:return l0;case 35665:return u0;case 35666:return h0;case 35674:return f0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return x0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return y0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return C0}}class R0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class w0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Lc(i,e){i.seq.push(e),i.map[e.id]=e}function D0(i,e,t){const n=i.name,r=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),a=ha.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Lc(t,l===void 0?new R0(o,i,e):new w0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new P0(o),Lc(t,h)),t=h}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);D0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I0=37297;let L0=0;function U0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Fc=new He;function F0(i){Ke._getMatrix(Fc,Ke.workingColorSpace,i);const e=`mat3( ${Fc.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case hs:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+U0(i.getShaderSource(e),o)}else return s}function N0(i,e){const t=F0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k0(i,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="Cineon";break;case yh:t="ACESFilmic";break;case Sh:t="AgX";break;case Mh:t="Neutral";break;case bh:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new z;function O0(){Ke.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function z0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function G0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function kc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(i){return i.replace(V0,W0)}const H0=new Map;function W0(i,e){let t=$e[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=$e[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace($0,X0)}function X0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function j0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function K0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fl:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=j0(t),l=q0(t),u=Y0(t),h=K0(t),f=Z0(t),m=B0(t),g=z0(s),v=r.createProgram();let x,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),d.length>0&&(d+=`
`)):(x=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),d=[zc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Fn?k0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=ao(a),a=kc(a,t),a=Oc(a,t),o=ao(o),o=kc(o,t),o=Oc(o,t),a=Bc(a),o=Bc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const p=S+x+a,_=S+d+o,A=Uc(r,r.VERTEX_SHADER,p),T=Uc(r,r.FRAGMENT_SHADER,_);r.attachShader(v,A),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(I){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",y=r.getShaderInfoLog(A)||"",P=r.getShaderInfoLog(T)||"",U=C.trim(),O=y.trim(),B=P.trim();let F=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,T);else{const $=Nc(r,A,"vertex"),ee=Nc(r,T,"fragment");mt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+$+`
`+ee)}else U!==""?Be("WebGLProgram: Program Info Log:",U):(O===""||B==="")&&(G=!1);G&&(I.diagnostics={runnable:F,programLog:U,vertexShader:{log:O,prefix:x},fragmentShader:{log:B,prefix:d}})}r.deleteShader(A),r.deleteShader(T),D=new ns(r,v),b=G0(r,v)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,I0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}let Q0=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tx(e),t.set(e,n)),n}}class tx{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}}function nx(i,e,t,n,r,s,a){const o=new Tl,c=new ex,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,M,I,C,y){const P=C.fog,U=y.geometry,O=b.isMeshStandardMaterial?C.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),F=B&&B.mapping===Ts?B.image.height:null,G=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&Be("WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ee=$!==void 0?$.length:0;let re=0;U.morphAttributes.position!==void 0&&(re=1),U.morphAttributes.normal!==void 0&&(re=2),U.morphAttributes.color!==void 0&&(re=3);let de,Me,ke,Y;if(G){const tt=cn[G];de=tt.vertexShader,Me=tt.fragmentShader}else de=b.vertexShader,Me=b.fragmentShader,c.update(b),ke=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);const J=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Ae=y.isInstancedMesh===!0,ve=y.isBatchedMesh===!0,Re=!!b.map,at=!!b.matcap,Ne=!!B,Je=!!b.aoMap,N=!!b.lightMap,Ge=!!b.bumpMap,Ve=!!b.normalMap,Ze=!!b.displacementMap,me=!!b.emissiveMap,Qe=!!b.metalnessMap,Te=!!b.roughnessMap,Ue=b.anisotropy>0,L=b.clearcoat>0,R=b.dispersion>0,V=b.iridescence>0,K=b.sheen>0,Z=b.transmission>0,X=Ue&&!!b.anisotropyMap,ge=L&&!!b.clearcoatMap,ce=L&&!!b.clearcoatNormalMap,Ee=L&&!!b.clearcoatRoughnessMap,Se=V&&!!b.iridescenceMap,te=V&&!!b.iridescenceThicknessMap,se=K&&!!b.sheenColorMap,Ie=K&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,pe=!!b.specularColorMap,Fe=!!b.specularIntensityMap,k=Z&&!!b.transmissionMap,he=Z&&!!b.thicknessMap,ae=!!b.gradientMap,oe=!!b.alphaMap,ne=b.alphaTest>0,Q=!!b.alphaHash,ye=!!b.extensions;let Oe=Fn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const ut={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:de,fragmentShader:Me,defines:b.defines,customVertexShaderID:ke,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ve,batchingColor:ve&&y._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&y.instanceColor!==null,instancingMorph:Ae&&y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fi,alphaToCoverage:!!b.alphaToCoverage,map:Re,matcap:at,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:F,aoMap:Je,lightMap:N,bumpMap:Ge,normalMap:Ve,displacementMap:f&&Ze,emissiveMap:me,normalMapObjectSpace:Ve&&b.normalMapType===Ah,normalMapTangentSpace:Ve&&b.normalMapType===yl,metalnessMap:Qe,roughnessMap:Te,anisotropy:Ue,anisotropyMap:X,clearcoat:L,clearcoatMap:ge,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ee,dispersion:R,iridescence:V,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Fe,transmission:Z,transmissionMap:k,thicknessMap:he,gradientMap:ae,opaque:b.transparent===!1&&b.blending===wi&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:ne,alphaHash:Q,combine:b.combine,mapUv:Re&&v(b.map.channel),aoMapUv:Je&&v(b.aoMap.channel),lightMapUv:N&&v(b.lightMap.channel),bumpMapUv:Ge&&v(b.bumpMap.channel),normalMapUv:Ve&&v(b.normalMap.channel),displacementMapUv:Ze&&v(b.displacementMap.channel),emissiveMapUv:me&&v(b.emissiveMap.channel),metalnessMapUv:Qe&&v(b.metalnessMap.channel),roughnessMapUv:Te&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:ge&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:pe&&v(b.specularColorMap.channel),specularIntensityMapUv:Fe&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:he&&v(b.thicknessMap.channel),alphaMapUv:oe&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ve||Ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!U.attributes.uv&&(Re||oe),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:y.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Re&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===it,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(b.emissiveMap.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===It,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&b.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(M,b),p(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function p(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const M=g[b.type];let I;if(M){const C=cn[M];I=vf.clone(C.uniforms)}else I=b.uniforms;return I}function A(b,M){let I;for(let C=0,y=u.length;C<y;C++){const P=u[C];if(P.cacheKey===M){I=P,++I.usedTimes;break}}return I===void 0&&(I=new J0(i,M,b,s),u.push(I)),I}function T(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function E(b){c.remove(b)}function D(){c.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:D}}function ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,g,v,x){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=x),e++,d}function o(h,f,m,g,v,x){const d=a(h,f,m,g,v,x);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,g,v,x){const d=a(h,f,m,g,v,x);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||rx),n.length>1&&n.sort(f||Gc),r.length>1&&r.sort(f||Gc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function sx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Vc,i.set(n,[a])):r>=s.length?(a=new Vc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ax(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cx=0;function lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i){const e=new ax,t=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new lt,a=new lt;function o(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,v=0,x=0,d=0,S=0,p=0,_=0,A=0,T=0,E=0;l.sort(lx);for(let b=0,M=l.length;b<M;b++){const I=l[b],C=I.color,y=I.intensity,P=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=C.r*y,h+=C.g*y,f+=C.b*y;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],y);E++}else if(I.isDirectionalLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,F=t.get(I);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.directionalShadow[m]=F,n.directionalShadowMap[m]=U,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=O,m++}else if(I.isSpotLight){const O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(C).multiplyScalar(y),O.distance=P,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[v]=O;const B=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,B.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=B.matrix,I.castShadow){const F=t.get(I);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=U,_++}v++}else if(I.isRectAreaLight){const O=e.get(I);O.color.copy(C).multiplyScalar(y),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[x]=O,x++}else if(I.isPointLight){const O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const B=I.shadow,F=t.get(I);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=I.shadow.matrix,p++}n.point[g]=O,g++}else if(I.isHemisphereLight){const O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(y),O.groundColor.copy(I.groundColor).multiplyScalar(y),n.hemi[d]=O,d++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==x||D.hemiLength!==d||D.numDirectionalShadows!==S||D.numPointShadows!==p||D.numSpotShadows!==_||D.numSpotMaps!==A||D.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=x,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=x,D.hemiLength=d,D.numDirectionalShadows=S,D.numPointShadows=p,D.numSpotShadows=_,D.numSpotMaps=A,D.numLightProbes=E,n.version=cx++)}function c(l,u){let h=0,f=0,m=0,g=0,v=0;const x=u.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const p=l[d];if(p.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),h++}else if(p.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),m++}else if(p.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),a.identity(),s.copy(p.matrixWorld),s.premultiply(x),a.extractRotation(s),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(p.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(x),f++}else if(p.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(x),v++}}}return{setup:o,setupView:c,state:n}}function Hc(i){const e=new ux(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function hx(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Hc(i),e.set(r,[o])):s>=a.length?(o=new Hc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`;function px(i,e,t){let n=new Ao;const r=new ze,s=new ze,a=new st,o=new Uf({depthPacking:Ch}),c=new Ff,l={},u=t.maxTextureSize,h={[kn]:It,[It]:kn,[yn]:yn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:fx,fragmentShader:dx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(T,E,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Sn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const y=d!==vn&&this.type===vn,P=d===vn&&this.type!==vn;for(let U=0,O=T.length;U<O;U++){const B=T[U],F=B.shadow;if(F===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();if(r.multiply(G),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,F.mapSize.y=s.y)),F.map===null||y===!0||P===!0){const ee=this.type!==vn?{minFilter:Ht,magFilter:Ht}:{};F.map!==null&&F.map.dispose(),F.map=new ti(r.x,r.y,ee),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const $=F.getViewportCount();for(let ee=0;ee<$;ee++){const re=F.getViewport(ee);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),C.viewport(a),F.updateMatrices(B,ee),n=F.getFrustum(),_(E,D,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===vn&&S(F,D),F.needsUpdate=!1}d=this.type,x.needsUpdate=!1,i.setRenderTarget(b,M,I)};function S(T,E){const D=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,D,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,D,m,v,null)}function p(T,E,D,b){let M=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const C=M.uuid,y=E.uuid;let P=l[C];P===void 0&&(P={},l[C]=P);let U=P[y];U===void 0&&(U=M.clone(),P[y]=U,E.addEventListener("dispose",A)),M=U}if(M.visible=E.visible,M.wireframe=E.wireframe,b===vn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=i.properties.get(M);C.light=D}return M}function _(T,E,D,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const y=e.update(T),P=T.material;if(Array.isArray(P)){const U=y.groups;for(let O=0,B=U.length;O<B;O++){const F=U[O],G=P[F.materialIndex];if(G&&G.visible){const $=p(T,G,b,M);T.onBeforeShadow(i,T,E,D,y,$,F),i.renderBufferDirect(D,null,y,$,T,F),T.onAfterShadow(i,T,E,D,y,$,F)}}}else if(P.visible){const U=p(T,P,b,M);T.onBeforeShadow(i,T,E,D,y,U,null),i.renderBufferDirect(D,null,y,U,T,null),T.onAfterShadow(i,T,E,D,y,U,null)}}const C=T.children;for(let y=0,P=C.length;y<P;y++)_(C[y],E,D,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(const D in l){const b=l[D],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const mx={[ya]:ba,[Sa]:Ea,[Ma]:Ca,[Ii]:Ta,[ba]:ya,[Ea]:Sa,[Ca]:Ma,[Ta]:Ii};function xx(i,e){function t(){let k=!1;const he=new st;let ae=null;const oe=new st(0,0,0,0);return{setMask:function(ne){ae!==ne&&!k&&(i.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){k=ne},setClear:function(ne,Q,ye,Oe,ut){ut===!0&&(ne*=Oe,Q*=Oe,ye*=Oe),he.set(ne,Q,ye,Oe),oe.equals(he)===!1&&(i.clearColor(ne,Q,ye,Oe),oe.copy(he))},reset:function(){k=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,ae=null,oe=null,ne=null;return{setReversed:function(Q){if(he!==Q){const ye=e.get("EXT_clip_control");Q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const Oe=ne;ne=null,this.setClear(Oe)}},getReversed:function(){return he},setTest:function(Q){Q?J(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!k&&(i.depthMask(Q),ae=Q)},setFunc:function(Q){if(he&&(Q=mx[Q]),oe!==Q){switch(Q){case ya:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Q}},setLocked:function(Q){k=Q},setClear:function(Q){ne!==Q&&(he&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){k=!1,ae=null,oe=null,ne=null,he=!1}}}function r(){let k=!1,he=null,ae=null,oe=null,ne=null,Q=null,ye=null,Oe=null,ut=null;return{setTest:function(tt){k||(tt?J(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(tt){he!==tt&&!k&&(i.stencilMask(tt),he=tt)},setFunc:function(tt,on,Jt){(ae!==tt||oe!==on||ne!==Jt)&&(i.stencilFunc(tt,on,Jt),ae=tt,oe=on,ne=Jt)},setOp:function(tt,on,Jt){(Q!==tt||ye!==on||Oe!==Jt)&&(i.stencilOp(tt,on,Jt),Q=tt,ye=on,Oe=Jt)},setLocked:function(tt){k=tt},setClear:function(tt){ut!==tt&&(i.clearStencil(tt),ut=tt)},reset:function(){k=!1,he=null,ae=null,oe=null,ne=null,Q=null,ye=null,Oe=null,ut=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,v=!1,x=null,d=null,S=null,p=null,_=null,A=null,T=null,E=new Xe(0,0,0),D=0,b=!1,M=null,I=null,C=null,y=null,P=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=B>=2);let G=null,$={};const ee=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),de=new st().fromArray(ee),Me=new st().fromArray(re);function ke(k,he,ae,oe){const ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(k,Q),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ae;ye++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(he+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}const Y={};Y[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Ii),Ge(!1),Ve(Vo),J(i.CULL_FACE),Je(Sn);function J(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ue(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ae(k,he){return h[k]!==he?(i.bindFramebuffer(k,he),h[k]=he,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(k,he){let ae=m,oe=!1;if(k){ae=f.get(he),ae===void 0&&(ae=[],f.set(he,ae));const ne=k.textures;if(ae.length!==ne.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ye=ne.length;Q<ye;Q++)ae[Q]=i.COLOR_ATTACHMENT0+Q;ae.length=ne.length,oe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,oe=!0);oe&&i.drawBuffers(ae)}function Re(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const at={[Yn]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};at[eh]=i.MIN,at[th]=i.MAX;const Ne={[nh]:i.ZERO,[ih]:i.ONE,[rh]:i.SRC_COLOR,[_a]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[ah]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[ph]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(k,he,ae,oe,ne,Q,ye,Oe,ut,tt){if(k===Sn){v===!0&&(ue(i.BLEND),v=!1);return}if(v===!1&&(J(i.BLEND),v=!0),k!==Zu){if(k!==x||tt!==b){if((d!==Yn||_!==Yn)&&(i.blendEquation(i.FUNC_ADD),d=Yn,_=Yn),tt)switch(k){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",k);break}else switch(k){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wo:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",k);break}S=null,p=null,A=null,T=null,E.set(0,0,0),D=0,x=k,b=tt}return}ne=ne||he,Q=Q||ae,ye=ye||oe,(he!==d||ne!==_)&&(i.blendEquationSeparate(at[he],at[ne]),d=he,_=ne),(ae!==S||oe!==p||Q!==A||ye!==T)&&(i.blendFuncSeparate(Ne[ae],Ne[oe],Ne[Q],Ne[ye]),S=ae,p=oe,A=Q,T=ye),(Oe.equals(E)===!1||ut!==D)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ut),E.copy(Oe),D=ut),x=k,b=!1}function N(k,he){k.side===yn?ue(i.CULL_FACE):J(i.CULL_FACE);let ae=k.side===It;he&&(ae=!ae),Ge(ae),k.blending===wi&&k.transparent===!1?Je(Sn):Je(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const oe=k.stencilWrite;o.setTest(oe),oe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),me(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function Ve(k){k!==qu?(J(i.CULL_FACE),k!==I&&(k===Vo?i.cullFace(i.BACK):k===Yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),I=k}function Ze(k){k!==C&&(O&&i.lineWidth(k),C=k)}function me(k,he,ae){k?(J(i.POLYGON_OFFSET_FILL),(y!==he||P!==ae)&&(i.polygonOffset(he,ae),y=he,P=ae)):ue(i.POLYGON_OFFSET_FILL)}function Qe(k){k?J(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Te(k){k===void 0&&(k=i.TEXTURE0+U-1),G!==k&&(i.activeTexture(k),G=k)}function Ue(k,he,ae){ae===void 0&&(G===null?ae=i.TEXTURE0+U-1:ae=G);let oe=$[ae];oe===void 0&&(oe={type:void 0,texture:void 0},$[ae]=oe),(oe.type!==k||oe.texture!==he)&&(G!==ae&&(i.activeTexture(ae),G=ae),i.bindTexture(k,he||Y[k]),oe.type=k,oe.texture=he)}function L(){const k=$[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function K(){try{i.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Z(){try{i.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ce(){try{i.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(){try{i.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Se(){try{i.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function te(){try{i.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function se(k){de.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),de.copy(k))}function Ie(k){Me.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function Pe(k,he){let ae=l.get(he);ae===void 0&&(ae=new WeakMap,l.set(he,ae));let oe=ae.get(k);oe===void 0&&(oe=i.getUniformBlockIndex(he,k.name),ae.set(k,oe))}function pe(k,he){const oe=l.get(he).get(k);c.get(he)!==oe&&(i.uniformBlockBinding(he,oe,k.__bindingPointIndex),c.set(he,oe))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},G=null,$={},h={},f=new WeakMap,m=[],g=null,v=!1,x=null,d=null,S=null,p=null,_=null,A=null,T=null,E=new Xe(0,0,0),D=0,b=!1,M=null,I=null,C=null,y=null,P=null,de.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ue,bindFramebuffer:Ae,drawBuffers:ve,useProgram:Re,setBlending:Je,setMaterial:N,setFlipSided:Ge,setCullFace:Ve,setLineWidth:Ze,setPolygonOffset:me,setScissorTest:Qe,activeTexture:Te,bindTexture:Ue,unbindTexture:L,compressedTexImage2D:R,compressedTexImage3D:V,texImage2D:Se,texImage3D:te,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:se,viewport:Ie,reset:Fe}}function gx(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,R){return m?new OffscreenCanvas(L,R):ds("canvas")}function v(L,R,V){let K=1;const Z=Ue(L);if((Z.width>V||Z.height>V)&&(K=V/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const X=Math.floor(K*Z.width),ge=Math.floor(K*Z.height);h===void 0&&(h=g(X,ge));const ce=R?g(X,ge):h;return ce.width=X,ce.height=ge,ce.getContext("2d").drawImage(L,0,0,X,ge),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ge+")."),ce}else return"data"in L&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function x(L){return L.generateMipmaps}function d(L){i.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(L,R,V,K,Z=!1){if(L!==null){if(i[L]!==void 0)return i[L];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=R;if(R===i.RED&&(V===i.FLOAT&&(X=i.R32F),V===i.HALF_FLOAT&&(X=i.R16F),V===i.UNSIGNED_BYTE&&(X=i.R8)),R===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.R8UI),V===i.UNSIGNED_SHORT&&(X=i.R16UI),V===i.UNSIGNED_INT&&(X=i.R32UI),V===i.BYTE&&(X=i.R8I),V===i.SHORT&&(X=i.R16I),V===i.INT&&(X=i.R32I)),R===i.RG&&(V===i.FLOAT&&(X=i.RG32F),V===i.HALF_FLOAT&&(X=i.RG16F),V===i.UNSIGNED_BYTE&&(X=i.RG8)),R===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RG8UI),V===i.UNSIGNED_SHORT&&(X=i.RG16UI),V===i.UNSIGNED_INT&&(X=i.RG32UI),V===i.BYTE&&(X=i.RG8I),V===i.SHORT&&(X=i.RG16I),V===i.INT&&(X=i.RG32I)),R===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGB8UI),V===i.UNSIGNED_SHORT&&(X=i.RGB16UI),V===i.UNSIGNED_INT&&(X=i.RGB32UI),V===i.BYTE&&(X=i.RGB8I),V===i.SHORT&&(X=i.RGB16I),V===i.INT&&(X=i.RGB32I)),R===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),V===i.UNSIGNED_INT&&(X=i.RGBA32UI),V===i.BYTE&&(X=i.RGBA8I),V===i.SHORT&&(X=i.RGBA16I),V===i.INT&&(X=i.RGBA32I)),R===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),R===i.RGBA){const ge=Z?hs:Ke.getTransfer(K);V===i.FLOAT&&(X=i.RGBA32F),V===i.HALF_FLOAT&&(X=i.RGBA16F),V===i.UNSIGNED_BYTE&&(X=ge===it?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(L,R){let V;return L?R===null||R===ei||R===fr?V=i.DEPTH24_STENCIL8:R===ln?V=i.DEPTH32F_STENCIL8:R===hr&&(V=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ei||R===fr?V=i.DEPTH_COMPONENT24:R===ln?V=i.DEPTH_COMPONENT32F:R===hr&&(V=i.DEPTH_COMPONENT16),V}function A(L,R){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ht&&L.minFilter!==qt?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function T(L){const R=L.target;R.removeEventListener("dispose",T),D(R),R.isVideoTexture&&u.delete(R)}function E(L){const R=L.target;R.removeEventListener("dispose",E),M(R)}function D(L){const R=n.get(L);if(R.__webglInit===void 0)return;const V=L.source,K=f.get(V);if(K){const Z=K[R.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(L),Object.keys(K).length===0&&f.delete(V)}n.remove(L)}function b(L){const R=n.get(L);i.deleteTexture(R.__webglTexture);const V=L.source,K=f.get(V);delete K[R.__cacheKey],a.memory.textures--}function M(L){const R=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(R.__webglFramebuffer[K]))for(let Z=0;Z<R.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(R.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(R.__webglFramebuffer[K]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[K])}else{if(Array.isArray(R.__webglFramebuffer))for(let K=0;K<R.__webglFramebuffer.length;K++)i.deleteFramebuffer(R.__webglFramebuffer[K]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let K=0;K<R.__webglColorRenderbuffer.length;K++)R.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[K]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const V=L.textures;for(let K=0,Z=V.length;K<Z;K++){const X=n.get(V[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(L)}let I=0;function C(){I=0}function y(){const L=I;return L>=r.maxTextures&&Be("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),I+=1,L}function P(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function U(L,R){const V=n.get(L);if(L.isVideoTexture&&Qe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const K=L.image;if(K===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,L,R);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+R)}function O(L,R){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){Y(V,L,R);return}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+R)}function B(L,R){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){Y(V,L,R);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+R)}function F(L,R){const V=n.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+R)}const G={[wa]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},$={[Ht]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Fs]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},ee={[Rh]:i.NEVER,[Uh]:i.ALWAYS,[wh]:i.LESS,[bl]:i.LEQUAL,[Ph]:i.EQUAL,[Lh]:i.GEQUAL,[Dh]:i.GREATER,[Ih]:i.NOTEQUAL};function re(L,R){if(R.type===ln&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===qt||R.magFilter===Fs||R.magFilter===Rr||R.magFilter===Zn||R.minFilter===qt||R.minFilter===Fs||R.minFilter===Rr||R.minFilter===Zn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,G[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,G[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,G[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,$[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,$[R.minFilter]),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ht||R.minFilter!==Rr&&R.minFilter!==Zn||R.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function de(L,R){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",T));const K=R.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const X=P(R);if(X!==L.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[X].usedTimes++;const ge=Z[L.__cacheKey];ge!==void 0&&(Z[L.__cacheKey].usedTimes--,ge.usedTimes===0&&b(R)),L.__cacheKey=X,L.__webglTexture=Z[X].texture}return V}function Me(L,R,V){return Math.floor(Math.floor(L/V)/R)}function ke(L,R,V,K){const X=L.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,V,K,R.data);else{X.sort((te,se)=>te.start-se.start);let ge=0;for(let te=1;te<X.length;te++){const se=X[ge],Ie=X[te],Pe=se.start+se.count,pe=Me(Ie.start,R.width,4),Fe=Me(se.start,R.width,4);Ie.start<=Pe+1&&pe===Fe&&Me(Ie.start+Ie.count-1,R.width,4)===pe?se.count=Math.max(se.count,Ie.start+Ie.count-se.start):(++ge,X[ge]=Ie)}X.length=ge+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let te=0,se=X.length;te<se;te++){const Ie=X[te],Pe=Math.floor(Ie.start/4),pe=Math.ceil(Ie.count/4),Fe=Pe%R.width,k=Math.floor(Pe/R.width),he=pe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,Fe,k,he,ae,V,K,R.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(L,R,V){let K=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(K=i.TEXTURE_3D);const Z=de(L,R),X=R.source;t.bindTexture(K,L.__webglTexture,i.TEXTURE0+V);const ge=n.get(X);if(X.version!==ge.__version||Z===!0){t.activeTexture(i.TEXTURE0+V);const ce=Ke.getPrimaries(Ke.workingColorSpace),Ee=R.colorSpace===Dn?null:Ke.getPrimaries(R.colorSpace),Se=R.colorSpace===Dn||ce===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=v(R.image,!1,r.maxTextureSize);te=Te(R,te);const se=s.convert(R.format,R.colorSpace),Ie=s.convert(R.type);let Pe=p(R.internalFormat,se,Ie,R.colorSpace,R.isVideoTexture);re(K,R);let pe;const Fe=R.mipmaps,k=R.isVideoTexture!==!0,he=ge.__version===void 0||Z===!0,ae=X.dataReady,oe=A(R,te);if(R.isDepthTexture)Pe=_(R.format===pr,R.type),he&&(k?t.texStorage2D(i.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,se,Ie,null));else if(R.isDataTexture)if(Fe.length>0){k&&he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Fe[0].width,Fe[0].height);for(let ne=0,Q=Fe.length;ne<Q;ne++)pe=Fe[ne],k?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,Ie,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Pe,pe.width,pe.height,0,se,Ie,pe.data);R.generateMipmaps=!1}else k?(he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,te.width,te.height),ae&&ke(R,te,se,Ie)):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,se,Ie,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){k&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Fe[0].width,Fe[0].height,te.depth);for(let ne=0,Q=Fe.length;ne<Q;ne++)if(pe=Fe[ne],R.format!==sn)if(se!==null)if(k){if(ae)if(R.layerUpdates.size>0){const ye=yc(pe.width,pe.height,R.format,R.type);for(const Oe of R.layerUpdates){const ut=pe.data.subarray(Oe*ye/pe.data.BYTES_PER_ELEMENT,(Oe+1)*ye/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Oe,pe.width,pe.height,1,se,ut)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Pe,pe.width,pe.height,te.depth,0,pe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,Ie,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Pe,pe.width,pe.height,te.depth,0,se,Ie,pe.data)}else{k&&he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Fe[0].width,Fe[0].height);for(let ne=0,Q=Fe.length;ne<Q;ne++)pe=Fe[ne],R.format!==sn?se!==null?k?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Pe,pe.width,pe.height,0,pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,Ie,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Pe,pe.width,pe.height,0,se,Ie,pe.data)}else if(R.isDataArrayTexture)if(k){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,te.width,te.height,te.depth),ae)if(R.layerUpdates.size>0){const ne=yc(te.width,te.height,R.format,R.type);for(const Q of R.layerUpdates){const ye=te.data.subarray(Q*ne/te.data.BYTES_PER_ELEMENT,(Q+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,se,Ie,ye)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,se,Ie,te.data);else if(R.isData3DTexture)k?(he&&t.texStorage3D(i.TEXTURE_3D,oe,Pe,te.width,te.height,te.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,se,Ie,te.data);else if(R.isFramebufferTexture){if(he)if(k)t.texStorage2D(i.TEXTURE_2D,oe,Pe,te.width,te.height);else{let ne=te.width,Q=te.height;for(let ye=0;ye<oe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Pe,ne,Q,0,se,Ie,null),ne>>=1,Q>>=1}}else if(Fe.length>0){if(k&&he){const ne=Ue(Fe[0]);t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height)}for(let ne=0,Q=Fe.length;ne<Q;ne++)pe=Fe[ne],k?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,se,Ie,pe):t.texImage2D(i.TEXTURE_2D,ne,Pe,se,Ie,pe);R.generateMipmaps=!1}else if(k){if(he){const ne=Ue(te);t.texStorage2D(i.TEXTURE_2D,oe,Pe,ne.width,ne.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,Pe,se,Ie,te);x(R)&&d(K),ge.__version=X.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function J(L,R,V){if(R.image.length!==6)return;const K=de(L,R),Z=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const X=n.get(Z);if(Z.version!==X.__version||K===!0){t.activeTexture(i.TEXTURE0+V);const ge=Ke.getPrimaries(Ke.workingColorSpace),ce=R.colorSpace===Dn?null:Ke.getPrimaries(R.colorSpace),Ee=R.colorSpace===Dn||ge===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Se=R.isCompressedTexture||R.image[0].isCompressedTexture,te=R.image[0]&&R.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!Se&&!te?se[Q]=v(R.image[Q],!0,r.maxCubemapSize):se[Q]=te?R.image[Q].image:R.image[Q],se[Q]=Te(R,se[Q]);const Ie=se[0],Pe=s.convert(R.format,R.colorSpace),pe=s.convert(R.type),Fe=p(R.internalFormat,Pe,pe,R.colorSpace),k=R.isVideoTexture!==!0,he=X.__version===void 0||K===!0,ae=Z.dataReady;let oe=A(R,Ie);re(i.TEXTURE_CUBE_MAP,R);let ne;if(Se){k&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Fe,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){ne=se[Q].mipmaps;for(let ye=0;ye<ne.length;ye++){const Oe=ne[ye];R.format!==sn?Pe!==null?k?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Oe.width,Oe.height,Pe,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Fe,Oe.width,Oe.height,0,Oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,Oe.width,Oe.height,Pe,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,Fe,Oe.width,Oe.height,0,Pe,pe,Oe.data)}}}else{if(ne=R.mipmaps,k&&he){ne.length>0&&oe++;const Q=Ue(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,Pe,pe,se[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,se[Q].width,se[Q].height,0,Pe,pe,se[Q].data);for(let ye=0;ye<ne.length;ye++){const ut=ne[ye].image[Q].image;k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,ut.width,ut.height,Pe,pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Fe,ut.width,ut.height,0,Pe,pe,ut.data)}}else{k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,pe,se[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,Pe,pe,se[Q]);for(let ye=0;ye<ne.length;ye++){const Oe=ne[ye];k?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Pe,pe,Oe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,Fe,Pe,pe,Oe.image[Q])}}}x(R)&&d(i.TEXTURE_CUBE_MAP),X.__version=Z.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function ue(L,R,V,K,Z,X){const ge=s.convert(V.format,V.colorSpace),ce=s.convert(V.type),Ee=p(V.internalFormat,ge,ce,V.colorSpace),Se=n.get(R),te=n.get(V);if(te.__renderTarget=R,!Se.__hasExternalTextures){const se=Math.max(1,R.width>>X),Ie=Math.max(1,R.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Ee,se,Ie,R.depth,0,ge,ce,null):t.texImage2D(Z,X,Ee,se,Ie,0,ge,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,te.__webglTexture,0,Ze(R)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(L,R,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer){const K=R.depthTexture,Z=K&&K.isDepthTexture?K.type:null,X=_(R.stencilBuffer,Z),ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Ze(R);me(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,X,R.width,R.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,X,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,X,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,L)}else{const K=R.textures;for(let Z=0;Z<K.length;Z++){const X=K[Z],ge=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),Ee=p(X.internalFormat,ge,ce,X.colorSpace),Se=Ze(R);V&&me(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ee,R.width,R.height):me(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Ee,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(R.depthTexture);K.__renderTarget=R,(!K.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),U(R.depthTexture,0);const Z=K.__webglTexture,X=Ze(R);if(R.depthTexture.format===dr)me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(R.depthTexture.format===pr)me(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Re(L){const R=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),K){const Z=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),R.__depthDisposeCallback=Z}R.__boundDepthTexture=K}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const K=L.texture.mipmaps;K&&K.length>0?ve(R.__webglFramebuffer[0],L):ve(R.__webglFramebuffer,L)}else if(V){R.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[K]),R.__webglDepthbuffer[K]===void 0)R.__webglDepthbuffer[K]=i.createRenderbuffer(),Ae(R.__webglDepthbuffer[K],L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=R.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),Ae(R.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(L,R,V){const K=n.get(L);R!==void 0&&ue(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Re(L)}function Ne(L){const R=L.texture,V=n.get(L),K=n.get(R);L.addEventListener("dispose",E);const Z=L.textures,X=L.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=R.version,a.memory.textures++),X){V.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[ce]=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)V.__webglFramebuffer[ce][Ee]=i.createFramebuffer()}else V.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let ce=0;ce<R.mipmaps.length;ce++)V.__webglFramebuffer[ce]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ce=0,Ee=Z.length;ce<Ee;ce++){const Se=n.get(Z[ce]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&me(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const Ee=Z[ce];V.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ce]);const Se=s.convert(Ee.format,Ee.colorSpace),te=s.convert(Ee.type),se=p(Ee.internalFormat,Se,te,Ee.colorSpace,L.isXRRenderTarget===!0),Ie=Ze(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,se,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,V.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),re(i.TEXTURE_CUBE_MAP,R);for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)ue(V.__webglFramebuffer[ce][Ee],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee);else ue(V.__webglFramebuffer[ce],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(R)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ce=0,Ee=Z.length;ce<Ee;ce++){const Se=Z[ce],te=n.get(Se);let se=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),re(se,Se),ue(V.__webglFramebuffer,L,Se,i.COLOR_ATTACHMENT0+ce,se,0),x(Se)&&d(se)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ce=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),re(ce,R),R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)ue(V.__webglFramebuffer[Ee],L,R,i.COLOR_ATTACHMENT0,ce,Ee);else ue(V.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,ce,0);x(R)&&d(ce),t.unbindTexture()}L.depthBuffer&&Re(L)}function Je(L){const R=L.textures;for(let V=0,K=R.length;V<K;V++){const Z=R[V];if(x(Z)){const X=S(L),ge=n.get(Z).__webglTexture;t.bindTexture(X,ge),d(X),t.unbindTexture()}}}const N=[],Ge=[];function Ve(L){if(L.samples>0){if(me(L)===!1){const R=L.textures,V=L.width,K=L.height;let Z=i.COLOR_BUFFER_BIT;const X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(L),ce=R.length>1;if(ce)for(let Se=0;Se<R.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Ee=L.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Se=0;Se<R.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const te=n.get(R[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,Z,i.NEAREST),c===!0&&(N.length=0,Ge.length=0,N.push(i.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.resolveDepthBuffer===!1&&(N.push(X),Ge.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Se=0;Se<R.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Se]);const te=n.get(R[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const R=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Ze(L){return Math.min(r.maxSamples,L.samples)}function me(L){const R=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Qe(L){const R=a.render.frame;u.get(L)!==R&&(u.set(L,R),L.update())}function Te(L,R){const V=L.colorSpace,K=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Fi&&V!==Dn&&(Ke.getTransfer(V)===it?(K!==sn||Z!==hn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),R}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=y,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=at,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=me}function _x(i,e){function t(n,r=Dn){let s;const a=Ke.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===_l)return i.ALPHA;if(n===vl)return i.RGB;if(n===sn)return i.RGBA;if(n===dr)return i.DEPTH_COMPONENT;if(n===pr)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===bo)return i.RG;if(n===So)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Jr||n===Qr||n===es||n===ts)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ia||n===La||n===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Na||n===ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fa||n===Na)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ka)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ba||n===za||n===Ga||n===Va||n===Ha||n===Wa||n===$a||n===Xa||n===ja||n===qa||n===Ya||n===Ka||n===Za)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===Qa||n===eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ja)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===no||n===io||n===ro)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===to)return s.COMPRESSED_RED_RGTC1_EXT;if(n===no)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`;class bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:vx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Bi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const v=typeof XRWebGLBinding<"u",x=new bx,d={},S=t.getContextAttributes();let p=null,_=null;const A=[],T=[],E=new ze;let D=null;const b=new Gt;b.viewport=new st;const M=new Gt;M.viewport=new st;const I=[b,M],C=new zf;let y=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=A[Y];return J===void 0&&(J=new na,A[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=A[Y];return J===void 0&&(J=new na,A[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=A[Y];return J===void 0&&(J=new na,A[Y]=J),J.getHandSpace()};function U(Y){const J=T.indexOf(Y.inputSource);if(J===-1)return;const ue=A[J];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",B);for(let Y=0;Y<A.length;Y++){const J=T[Y];J!==null&&(T[Y]=null,A[Y].disconnect(J))}y=null,P=null,x.reset();for(const Y in d)delete d[Y];e.setRenderTarget(p),m=null,f=null,h=null,r=null,_=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ae=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?pr:dr,Ae=S.stencil?fr:ei);const Re={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ti(f.textureWidth,f.textureHeight,{format:sn,type:hn,depthTexture:new Ul(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new ti(m.framebufferWidth,m.framebufferHeight,{format:sn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Y){for(let J=0;J<Y.removed.length;J++){const ue=Y.removed[J],Ae=T.indexOf(ue);Ae>=0&&(T[Ae]=null,A[Ae].disconnect(ue))}for(let J=0;J<Y.added.length;J++){const ue=Y.added[J];let Ae=T.indexOf(ue);if(Ae===-1){for(let Re=0;Re<A.length;Re++)if(Re>=T.length){T.push(ue),Ae=Re;break}else if(T[Re]===null){T[Re]=ue,Ae=Re;break}if(Ae===-1)break}const ve=A[Ae];ve&&ve.connect(ue)}}const F=new z,G=new z;function $(Y,J,ue){F.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const Ae=F.distanceTo(G),ve=J.projectionMatrix.elements,Re=ue.projectionMatrix.elements,at=ve[14]/(ve[10]-1),Ne=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],N=(ve[9]-1)/ve[5],Ge=(ve[8]-1)/ve[0],Ve=(Re[8]+1)/Re[0],Ze=at*Ge,me=at*Ve,Qe=Ae/(-Ge+Ve),Te=Qe*-Ge;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Te),Y.translateZ(Qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ue=at+Qe,L=Ne+Qe,R=Ze-Te,V=me+(Ae-Te),K=Je*Ne/L*Ue,Z=N*Ne/L*Ue;Y.projectionMatrix.makePerspective(R,V,K,Z,Ue,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ue=Y.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),C.near=M.near=b.near=J,C.far=M.far=b.far=ue,(y!==C.near||P!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),y=C.near,P=C.far),C.layers.mask=Y.layers.mask|6,b.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;const Ae=Y.parent,ve=C.cameras;ee(C,Ae);for(let Re=0;Re<ve.length;Re++)ee(ve[Re],Ae);ve.length===2?$(C,b,M):C.projectionMatrix.copy(b.projectionMatrix),re(Y,C,Ae)};function re(Y,J,ue){ue===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(Y){return d[Y]};let de=null;function Me(Y,J){if(u=J.getViewerPose(l||a),g=J,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Ae=!1;ue.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let Ne=0;Ne<ue.length;Ne++){const Je=ue[Ne];let N=null;if(m!==null)N=m.getViewport(Je);else{const Ve=h.getViewSubImage(f,Je);N=Ve.viewport,Ne===0&&(e.setRenderTargetTextures(_,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(_))}let Ge=I[Ne];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(Ne),Ge.viewport=new st,I[Ne]=Ge),Ge.matrix.fromArray(Je.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Je.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(N.x,N.y,N.width,N.height),Ne===0&&(C.matrix.copy(Ge.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(Ge)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Ne=h.getDepthInformation(ue[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(Ne,r.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Ne=0;Ne<ue.length;Ne++){const Je=ue[Ne].camera;if(Je){let N=d[Je];N||(N=new Fl,d[Je]=N);const Ge=h.getCameraImage(Je);N.sourceTexture=Ge}}}}for(let ue=0;ue<A.length;ue++){const Ae=T[ue],ve=A[ue];Ae!==null&&ve!==void 0&&ve.update(Ae,J,l||a)}de&&de(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ke=new Ol;ke.setAnimationLoop(Me),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const jn=new Kt,Mx=new lt;function Tx(i,e){function t(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function n(x,d){d.color.getRGB(x.fogColor.value,Rl(i)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,S,p,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),h(x,d)):d.isMeshPhongMaterial?(s(x,d),u(x,d)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,_)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),v(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?c(x,d,S,p):d.isSpriteMaterial?l(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,t(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===It&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,t(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===It&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,t(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,t(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const S=e.get(d),p=S.envMap,_=S.envMapRotation;p&&(x.envMap.value=p,jn.copy(_),jn.x*=-1,jn.y*=-1,jn.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),x.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(jn)),x.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,S,p){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*S,x.scale.value=p*.5,d.map&&(x.map.value=d.map,t(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function l(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,t(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,t(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function h(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,S){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function v(x,d){const S=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ex(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,p){const _=p.program;n.uniformBlockBinding(S,_)}function l(S,p){let _=r[S.id];_===void 0&&(g(S),_=u(S),r[S.id]=_,S.addEventListener("dispose",x));const A=p.program;n.updateUBOMapping(S,A);const T=e.render.frame;s[S.id]!==T&&(f(S),s[S.id]=T)}function u(S){const p=h();S.__bindingPointIndex=p;const _=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,_),_}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const p=r[S.id],_=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let T=0,E=_.length;T<E;T++){const D=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=D.length;b<M;b++){const I=D[b];if(m(I,T,b,A)===!0){const C=I.__offset,y=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let U=0;U<y.length;U++){const O=y[U],B=v(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,C+P,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,P),P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,p,_,A){const T=S.value,E=p+"_"+_;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const D=A[E];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[E]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(S){const p=S.uniforms;let _=0;const A=16;for(let E=0,D=p.length;E<D;E++){const b=Array.isArray(p[E])?p[E]:[p[E]];for(let M=0,I=b.length;M<I;M++){const C=b[M],y=Array.isArray(C.value)?C.value:[C.value];for(let P=0,U=y.length;P<U;P++){const O=y[P],B=v(O),F=_%A,G=F%B.boundary,$=F+G;_+=G,$!==0&&A-$<B.storage&&(_+=A-$),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=_,_+=B.storage}}}const T=_%A;return T>0&&(_+=A-T),S.__size=_,S.__cache={},this}function v(S){const p={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(p.boundary=4,p.storage=4):S.isVector2?(p.boundary=8,p.storage=8):S.isVector3||S.isColor?(p.boundary=16,p.storage=12):S.isVector4?(p.boundary=16,p.storage=16):S.isMatrix3?(p.boundary=48,p.storage=48):S.isMatrix4?(p.boundary=64,p.storage=64):S.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",S),p}function x(S){const p=S.target;p.removeEventListener("dispose",x);const _=a.indexOf(p.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function d(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}const Cx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let _n=null;function Ax(){return _n===null&&(_n=new Ll(Cx,32,32,bo,Oi),_n.minFilter=qt,_n.magFilter=qt,_n.wrapS=bn,_n.wrapT=bn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class Rx{constructor(e={}){const{canvas:t=Fh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Set([Mo,So,yo]),v=new Set([hn,ei,hr,fr,go,_o]),x=new Uint32Array(4),d=new Int32Array(4);let S=null,p=null;const _=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let E=!1;this._outputColorSpace=Xt;let D=0,b=0,M=null,I=-1,C=null;const y=new st,P=new st;let U=null;const O=new Xe(0);let B=0,F=t.width,G=t.height,$=1,ee=null,re=null;const de=new st(0,0,F,G),Me=new st(0,0,F,G);let ke=!1;const Y=new Ao;let J=!1,ue=!1;const Ae=new lt,ve=new z,Re=new st,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Je(){return M===null?$:1}let N=n;function Ge(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){const H="webgl2";if(N=Ge(H,w),N===null)throw Ge(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Ve,Ze,me,Qe,Te,Ue,L,R,V,K,Z,X,ge,ce,Ee,Se,te,se,Ie,Pe,pe,Fe,k,he;function ae(){Ve=new Nm(N),Ve.init(),Fe=new _x(N,Ve),Ze=new Am(N,Ve,e,Fe),me=new xx(N,Ve),Ze.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),Qe=new Bm(N),Te=new ix,Ue=new gx(N,Ve,me,Te,Ze,Fe,Qe),L=new wm(T),R=new Fm(T),V=new Hf(N),k=new Em(N,V),K=new km(N,V,Qe,k),Z=new Gm(N,K,V,Qe),Ie=new zm(N,Ze,Ue),Se=new Rm(Te),X=new nx(T,L,R,Ve,Ze,k,Se),ge=new Tx(T,Te),ce=new sx,Ee=new hx(Ve),se=new Tm(T,L,R,me,Z,m,c),te=new px(T,Z,Ze),he=new Ex(N,Qe,Ze,me),Pe=new Cm(N,Ve,Qe),pe=new Om(N,Ve,Qe),Qe.programs=X.programs,T.capabilities=Ze,T.extensions=Ve,T.properties=Te,T.renderLists=ce,T.shadowMap=te,T.state=me,T.info=Qe}ae();const oe=new Sx(T,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(F,G,!1))},this.getSize=function(w){return w.set(F,G)},this.setSize=function(w,H,j=!0){if(oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,G=H,t.width=Math.floor(w*$),t.height=Math.floor(H*$),j===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(F*$,G*$).floor()},this.setDrawingBufferSize=function(w,H,j){F=w,G=H,$=j,t.width=Math.floor(w*j),t.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,H,j,q){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,H,j,q),me.viewport(y.copy(de).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,H,j,q){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,H,j,q),me.scissor(P.copy(Me).multiplyScalar($).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){me.setScissorTest(ke=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,j=!0){let q=0;if(w){let W=!1;if(M!==null){const ie=M.texture.format;W=g.has(ie)}if(W){const ie=M.texture.type,fe=v.has(ie),be=se.getClearColor(),xe=se.getClearAlpha(),De=be.r,Le=be.g,Ce=be.b;fe?(x[0]=De,x[1]=Le,x[2]=Ce,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(d[0]=De,d[1]=Le,d[2]=Ce,d[3]=xe,N.clearBufferiv(N.COLOR,0,d))}else q|=N.COLOR_BUFFER_BIT}H&&(q|=N.DEPTH_BUFFER_BIT),j&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),se.dispose(),ce.dispose(),Ee.dispose(),Te.dispose(),L.dispose(),R.dispose(),Z.dispose(),k.dispose(),he.dispose(),X.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Fo),oe.removeEventListener("sessionend",No),zn.stop()};function ne(w){w.preventDefault(),ps("WebGLRenderer: Context Lost."),E=!0}function Q(){ps("WebGLRenderer: Context Restored."),E=!1;const w=Qe.autoReset,H=te.enabled,j=te.autoUpdate,q=te.needsUpdate,W=te.type;ae(),Qe.autoReset=w,te.enabled=H,te.autoUpdate=j,te.needsUpdate=q,te.type=W}function ye(w){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const H=w.target;H.removeEventListener("dispose",Oe),ut(H)}function ut(w){tt(w),Te.remove(w)}function tt(w){const H=Te.get(w).programs;H!==void 0&&(H.forEach(function(j){X.releaseProgram(j)}),w.isShaderMaterial&&X.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,q,W,ie){H===null&&(H=at);const fe=W.isMesh&&W.matrixWorld.determinant()<0,be=Gu(w,H,j,q,W);me.setMaterial(q,fe);let xe=j.index,De=1;if(q.wireframe===!0){if(xe=K.getWireframeAttribute(j),xe===void 0)return;De=2}const Le=j.drawRange,Ce=j.attributes.position;let je=Le.start*De,nt=(Le.start+Le.count)*De;ie!==null&&(je=Math.max(je,ie.start*De),nt=Math.min(nt,(ie.start+ie.count)*De)),xe!==null?(je=Math.max(je,0),nt=Math.min(nt,xe.count)):Ce!=null&&(je=Math.max(je,0),nt=Math.min(nt,Ce.count));const dt=nt-je;if(dt<0||dt===1/0)return;k.setup(W,q,be,j,xe);let pt,ot=Pe;if(xe!==null&&(pt=V.get(xe),ot=pe,ot.setIndex(pt)),W.isMesh)q.wireframe===!0?(me.setLineWidth(q.wireframeLinewidth*Je()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(W.isLine){let we=q.linewidth;we===void 0&&(we=1),me.setLineWidth(we*Je()),W.isLineSegments?ot.setMode(N.LINES):W.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else W.isPoints?ot.setMode(N.POINTS):W.isSprite&&ot.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)mr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const we=W._multiDrawStarts,ht=W._multiDrawCounts,Ye=W._multiDrawCount,kt=xe?V.get(xe).bytesPerElement:1,oi=Te.get(q).currentProgram.getUniforms();for(let Ot=0;Ot<Ye;Ot++)oi.setValue(N,"_gl_DrawID",Ot),ot.render(we[Ot]/kt,ht[Ot])}else if(W.isInstancedMesh)ot.renderInstances(je,dt,W.count);else if(j.isInstancedBufferGeometry){const we=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ht=Math.min(j.instanceCount,we);ot.renderInstances(je,dt,ht)}else ot.render(je,dt)};function on(w,H,j){w.transparent===!0&&w.side===yn&&w.forceSinglePass===!1?(w.side=It,w.needsUpdate=!0,Ar(w,H,j),w.side=kn,w.needsUpdate=!0,Ar(w,H,j),w.side=yn):Ar(w,H,j)}this.compile=function(w,H,j=null){j===null&&(j=w),p=Ee.get(j),p.init(H),A.push(p),j.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==j&&w.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const q=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ie=W.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const be=ie[fe];on(be,j,W),q.add(be)}else on(ie,j,W),q.add(ie)}),p=A.pop(),q},this.compileAsync=function(w,H,j=null){const q=this.compile(w,H,j);return new Promise(W=>{function ie(){if(q.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){W(w);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Jt=null;function zu(w){Jt&&Jt(w)}function Fo(){zn.stop()}function No(){zn.start()}const zn=new Ol;zn.setAnimationLoop(zu),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Jt=w,oe.setAnimationLoop(w),w===null?zn.stop():zn.start()},oe.addEventListener("sessionstart",Fo),oe.addEventListener("sessionend",No),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,H,M),p=Ee.get(w,A.length),p.init(H),A.push(p),Ae.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(Ae,un,H.reversedDepth),ue=this.localClippingEnabled,J=Se.init(this.clippingPlanes,ue),S=ce.get(w,_.length),S.init(),_.push(S),oe.enabled===!0&&oe.isPresenting===!0){const ie=T.xr.getDepthSensingMesh();ie!==null&&Ls(ie,H,-1/0,T.sortObjects)}Ls(w,H,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ee,re),Ne=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ne&&se.addToRenderList(S,w),this.info.render.frame++,J===!0&&Se.beginShadows();const j=p.state.shadowsArray;te.render(j,w,H),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,W=S.transmissive;if(p.setupLights(),H.isArrayCamera){const ie=H.cameras;if(W.length>0)for(let fe=0,be=ie.length;fe<be;fe++){const xe=ie[fe];Oo(q,W,w,xe)}Ne&&se.render(w);for(let fe=0,be=ie.length;fe<be;fe++){const xe=ie[fe];ko(S,w,xe,xe.viewport)}}else W.length>0&&Oo(q,W,w,H),Ne&&se.render(w),ko(S,w,H);M!==null&&b===0&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(T,w,H),k.resetDefaultState(),I=-1,C=null,A.pop(),A.length>0?(p=A[A.length-1],J===!0&&Se.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?S=_[_.length-1]:S=null};function Ls(w,H,j,q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const fe=Z.update(w),be=w.material;be.visible&&S.push(w,fe,be,j,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const fe=Z.update(w),be=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){const xe=fe.groups;for(let De=0,Le=xe.length;De<Le;De++){const Ce=xe[De],je=be[Ce.materialIndex];je&&je.visible&&S.push(w,fe,je,j,Re.z,Ce)}}else be.visible&&S.push(w,fe,be,j,Re.z,null)}}const ie=w.children;for(let fe=0,be=ie.length;fe<be;fe++)Ls(ie[fe],H,j,q)}function ko(w,H,j,q){const{opaque:W,transmissive:ie,transparent:fe}=w;p.setupLightsView(j),J===!0&&Se.setGlobalState(T.clippingPlanes,j),q&&me.viewport(y.copy(q)),W.length>0&&Cr(W,H,j),ie.length>0&&Cr(ie,H,j),fe.length>0&&Cr(fe,H,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Oo(w,H,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ti(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Oi:hn,minFilter:Zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=p.state.transmissionRenderTarget[q.id],fe=q.viewport||y;ie.setSize(fe.z*T.transmissionResolutionScale,fe.w*T.transmissionResolutionScale);const be=T.getRenderTarget(),xe=T.getActiveCubeFace(),De=T.getActiveMipmapLevel();T.setRenderTarget(ie),T.getClearColor(O),B=T.getClearAlpha(),B<1&&T.setClearColor(16777215,.5),T.clear(),Ne&&se.render(j);const Le=T.toneMapping;T.toneMapping=Fn;const Ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&Se.setGlobalState(T.clippingPlanes,q),Cr(w,j,q),Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let nt=0,dt=H.length;nt<dt;nt++){const pt=H[nt],{object:ot,geometry:we,material:ht,group:Ye}=pt;if(ht.side===yn&&ot.layers.test(q.layers)){const kt=ht.side;ht.side=It,ht.needsUpdate=!0,Bo(ot,j,q,we,ht,Ye),ht.side=kt,ht.needsUpdate=!0,je=!0}}je===!0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie))}T.setRenderTarget(be,xe,De),T.setClearColor(O,B),Ce!==void 0&&(q.viewport=Ce),T.toneMapping=Le}function Cr(w,H,j){const q=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ie=w.length;W<ie;W++){const fe=w[W],{object:be,geometry:xe,group:De}=fe;let Le=fe.material;Le.allowOverride===!0&&q!==null&&(Le=q),be.layers.test(j.layers)&&Bo(be,H,j,xe,Le,De)}}function Bo(w,H,j,q,W,ie){w.onBeforeRender(T,H,j,q,W,ie),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(T,H,j,q,w,ie),W.transparent===!0&&W.side===yn&&W.forceSinglePass===!1?(W.side=It,W.needsUpdate=!0,T.renderBufferDirect(j,H,q,W,w,ie),W.side=kn,W.needsUpdate=!0,T.renderBufferDirect(j,H,q,W,w,ie),W.side=yn):T.renderBufferDirect(j,H,q,W,w,ie),w.onAfterRender(T,H,j,q,W,ie)}function Ar(w,H,j){H.isScene!==!0&&(H=at);const q=Te.get(w),W=p.state.lights,ie=p.state.shadowsArray,fe=W.state.version,be=X.getParameters(w,W.state,ie,H,j),xe=X.getProgramCacheKey(be);let De=q.programs;q.environment=w.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(w.isMeshStandardMaterial?R:L).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Oe),De=new Map,q.programs=De);let Le=De.get(xe);if(Le!==void 0){if(q.currentProgram===Le&&q.lightsStateVersion===fe)return Go(w,be),Le}else be.uniforms=X.getUniforms(w),w.onBeforeCompile(be,T),Le=X.acquireProgram(be,xe),De.set(xe,Le),q.uniforms=be.uniforms;const Ce=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),Go(w,be),q.needsLights=Hu(w),q.lightsStateVersion=fe,q.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.directionalShadowMap.value=W.state.directionalShadowMap,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotShadowMap.value=W.state.spotShadowMap,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMap.value=W.state.pointShadowMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),q.currentProgram=Le,q.uniformsList=null,Le}function zo(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=ns.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Go(w,H){const j=Te.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Gu(w,H,j,q,W){H.isScene!==!0&&(H=at),Ue.resetTextureUnits();const ie=H.fog,fe=q.isMeshStandardMaterial?H.environment:null,be=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Fi,xe=(q.isMeshStandardMaterial?R:L).get(q.envMap||fe),De=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!j.morphAttributes.position,je=!!j.morphAttributes.normal,nt=!!j.morphAttributes.color;let dt=Fn;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(dt=T.toneMapping);const pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=pt!==void 0?pt.length:0,we=Te.get(q),ht=p.state.lights;if(J===!0&&(ue===!0||w!==C)){const wt=w===C&&q.id===I;Se.setState(q,w,wt)}let Ye=!1;q.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ht.state.version||we.outputColorSpace!==be||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==xe||q.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Se.numPlanes||we.numIntersection!==Se.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Le||we.morphTargets!==Ce||we.morphNormals!==je||we.morphColors!==nt||we.toneMapping!==dt||we.morphTargetsCount!==ot)&&(Ye=!0):(Ye=!0,we.__version=q.version);let kt=we.currentProgram;Ye===!0&&(kt=Ar(q,H,W));let oi=!1,Ot=!1,Hi=!1;const ft=kt.getUniforms(),Ut=we.uniforms;if(me.useProgram(kt.program)&&(oi=!0,Ot=!0,Hi=!0),q.id!==I&&(I=q.id,Ot=!0),oi||C!==w){me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(N,"projectionMatrix",w.projectionMatrix),ft.setValue(N,"viewMatrix",w.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(N,ve.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Ot=!0,Hi=!0)}if(W.isSkinnedMesh){ft.setOptional(N,W,"bindMatrix"),ft.setOptional(N,W,"bindMatrixInverse");const wt=W.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ft.setValue(N,"boneTexture",wt.boneTexture,Ue))}W.isBatchedMesh&&(ft.setOptional(N,W,"batchingTexture"),ft.setValue(N,"batchingTexture",W._matricesTexture,Ue),ft.setOptional(N,W,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",W._indirectTexture,Ue),ft.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",W._colorsTexture,Ue));const Wt=j.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Ie.update(W,j,kt),(Ot||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,ft.setValue(N,"receiveShadow",W.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ut.envMap.value=xe,Ut.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(Ut.envMapIntensity.value=H.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Ax()),Ot&&(ft.setValue(N,"toneMappingExposure",T.toneMappingExposure),we.needsLights&&Vu(Ut,Hi),ie&&q.fog===!0&&ge.refreshFogUniforms(Ut,ie),ge.refreshMaterialUniforms(Ut,q,$,G,p.state.transmissionRenderTarget[w.id]),ns.upload(N,zo(we),Ut,Ue)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ns.upload(N,zo(we),Ut,Ue),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(N,"center",W.center),ft.setValue(N,"modelViewMatrix",W.modelViewMatrix),ft.setValue(N,"normalMatrix",W.normalMatrix),ft.setValue(N,"modelMatrix",W.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const wt=q.uniformsGroups;for(let Ft=0,Us=wt.length;Ft<Us;Ft++){const Gn=wt[Ft];he.update(Gn,kt),he.bind(Gn,kt)}}return kt}function Vu(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Hu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,H,j){const q=Te.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Te.get(w.texture).__webglTexture=H,Te.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const j=Te.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};const Wu=N.createFramebuffer();this.setRenderTarget=function(w,H=0,j=0){M=w,D=H,b=j;let q=!0,W=null,ie=!1,fe=!1;if(w){const xe=Te.get(w);if(xe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(xe.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(xe.__hasExternalTextures)Ue.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&Te.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Le=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[H])?W=Le[H][j]:W=Le[H],ie=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?W=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[j]:W=Le,y.copy(w.viewport),P.copy(w.scissor),U=w.scissorTest}else y.copy(de).multiplyScalar($).floor(),P.copy(Me).multiplyScalar($).floor(),U=ke;if(j!==0&&(W=Wu),me.bindFramebuffer(N.FRAMEBUFFER,W)&&q&&me.drawBuffers(w,W),me.viewport(y),me.scissor(P),me.setScissorTest(U),ie){const xe=Te.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,xe.__webglTexture,j)}else if(fe){const xe=H;for(let De=0;De<w.textures.length;De++){const Le=Te.get(w.textures[De]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+De,Le.__webglTexture,j,xe)}}else if(w!==null&&j!==0){const xe=Te.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,j)}I=-1},this.readRenderTargetPixels=function(w,H,j,q,W,ie,fe,be=0){if(!(w&&w.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){me.bindFramebuffer(N.FRAMEBUFFER,xe);try{const De=w.textures[be],Le=De.format,Ce=De.type;if(!Ze.textureFormatReadable(Le)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ce)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-q&&j>=0&&j<=w.height-W&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),N.readPixels(H,j,q,W,Fe.convert(Le),Fe.convert(Ce),ie))}finally{const De=M!==null?Te.get(M).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,H,j,q,W,ie,fe,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(H>=0&&H<=w.width-q&&j>=0&&j<=w.height-W){me.bindFramebuffer(N.FRAMEBUFFER,xe);const De=w.textures[be],Le=De.format,Ce=De.type;if(!Ze.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+be),N.readPixels(H,j,q,W,Fe.convert(Le),Fe.convert(Ce),0);const nt=M!==null?Te.get(M).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,nt);const dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nh(N,dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(je),N.deleteSync(dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,j=0){const q=Math.pow(2,-j),W=Math.floor(w.image.width*q),ie=Math.floor(w.image.height*q),fe=H!==null?H.x:0,be=H!==null?H.y:0;Ue.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,fe,be,W,ie),me.unbindTexture()};const $u=N.createFramebuffer(),Xu=N.createFramebuffer();this.copyTextureToTexture=function(w,H,j=null,q=null,W=0,ie=null){ie===null&&(W!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=W,W=0):ie=0);let fe,be,xe,De,Le,Ce,je,nt,dt;const pt=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(j!==null)fe=j.max.x-j.min.x,be=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Le=j.min.y,Ce=j.isBox3?j.min.z:0;else{const Wt=Math.pow(2,-W);fe=Math.floor(pt.width*Wt),be=Math.floor(pt.height*Wt),w.isDataArrayTexture?xe=pt.depth:w.isData3DTexture?xe=Math.floor(pt.depth*Wt):xe=1,De=0,Le=0,Ce=0}q!==null?(je=q.x,nt=q.y,dt=q.z):(je=0,nt=0,dt=0);const ot=Fe.convert(H.format),we=Fe.convert(H.type);let ht;H.isData3DTexture?(Ue.setTexture3D(H,0),ht=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ue.setTexture2DArray(H,0),ht=N.TEXTURE_2D_ARRAY):(Ue.setTexture2D(H,0),ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const Ye=N.getParameter(N.UNPACK_ROW_LENGTH),kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),oi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ot=N.getParameter(N.UNPACK_SKIP_ROWS),Hi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce);const ft=w.isDataArrayTexture||w.isData3DTexture,Ut=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Wt=Te.get(w),wt=Te.get(H),Ft=Te.get(Wt.__renderTarget),Us=Te.get(wt.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,Ft.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Gn=0;Gn<xe;Gn++)ft&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,W,Ce+Gn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(H).__webglTexture,ie,dt+Gn)),N.blitFramebuffer(De,Le,fe,be,je,nt,fe,be,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||Te.has(w)){const Wt=Te.get(w),wt=Te.get(H);me.bindFramebuffer(N.READ_FRAMEBUFFER,$u),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xu);for(let Ft=0;Ft<xe;Ft++)ft?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wt.__webglTexture,W,Ce+Ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wt.__webglTexture,W),Ut?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,ie,dt+Ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wt.__webglTexture,ie),W!==0?N.blitFramebuffer(De,Le,fe,be,je,nt,fe,be,N.COLOR_BUFFER_BIT,N.NEAREST):Ut?N.copyTexSubImage3D(ht,ie,je,nt,dt+Ft,De,Le,fe,be):N.copyTexSubImage2D(ht,ie,je,nt,De,Le,fe,be);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ut?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ht,ie,je,nt,dt,fe,be,xe,ot,we,pt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(ht,ie,je,nt,dt,fe,be,xe,ot,pt.data):N.texSubImage3D(ht,ie,je,nt,dt,fe,be,xe,ot,we,pt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,je,nt,fe,be,ot,we,pt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,je,nt,pt.width,pt.height,ot,pt.data):N.texSubImage2D(N.TEXTURE_2D,ie,je,nt,fe,be,ot,we,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ye),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,oi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hi),ie===0&&H.generateMipmaps&&N.generateMipmap(ht),me.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){D=0,b=0,M=null,me.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Hl=Math.sqrt(3),wx=.5*(Hl-1),tr=(3-Hl)/6,Wc=i=>Math.floor(i)|0,$c=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Px(i=Math.random){const e=Dx(i),t=new Float64Array(e).map(r=>$c[r%12*2]),n=new Float64Array(e).map(r=>$c[r%12*2+1]);return function(s,a){let o=0,c=0,l=0;const u=(s+a)*wx,h=Wc(s+u),f=Wc(a+u),m=(h+f)*tr,g=h-m,v=f-m,x=s-g,d=a-v;let S,p;x>d?(S=1,p=0):(S=0,p=1);const _=x-S+tr,A=d-p+tr,T=x-1+2*tr,E=d-1+2*tr,D=h&255,b=f&255;let M=.5-x*x-d*d;if(M>=0){const y=D+e[b],P=t[y],U=n[y];M*=M,o=M*M*(P*x+U*d)}let I=.5-_*_-A*A;if(I>=0){const y=D+S+e[b+p],P=t[y],U=n[y];I*=I,c=I*I*(P*_+U*A)}let C=.5-T*T-E*E;if(C>=0){const y=D+1+e[b+1],P=t[y],U=n[y];C*=C,l=C*C*(P*T+U*E)}return 70*(o+c+l)}}function Dx(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=t[n];t[n]=t[r],t[r]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}class Ix{constructor(e){this.chunkSize=e.chunkSize||32,this.tileSize=e.tileSize||1,this.chunks=new Map,this.mesh=new Jn,this.noise2D=Px(),this.material=new an({color:16777215,roughness:.8}),this.islandCenters=[{x:-150,z:150,type:"ice"},{x:-150,z:-150,type:"volcanic"}],this.destroyedBlocks=new Set,this.placedBlocks=new Map,this.blockHealth=new Map,this.generateChunk(0,0)}getChunkKey(e,t){return`${e},${t}`}generateChunk(e,t,n=!1){const r=this.getChunkKey(e,t);if(this.chunks.has(r))if(n){const u=this.chunks.get(r);this.mesh.remove(u),u.dispose(),this.chunks.delete(r)}else return;const s=new Bn(this.tileSize,this.tileSize,this.tileSize),a=new wf(s,this.material,this.chunkSize*this.chunkSize*60);a.castShadow=!0,a.receiveShadow=!0;const o=new bt;let c=0;const l=new Xe;for(let u=0;u<this.chunkSize;u++)for(let h=0;h<this.chunkSize;h++){const f=e*this.chunkSize+u,m=t*this.chunkSize+h;let g=1/0,v=null;for(const L of this.islandCenters){const R=f-L.x,V=m-L.z,K=Math.sqrt(R*R+V*V);K<g&&(g=K,v=L)}const x=50,d=f-v.x,S=m-v.z,p=d<-30&&Math.abs(S)<3,_=p&&d<-48&&d>-55;if(g>x&&!_)continue;const A=g/x,T=45,E=this.noise2D(f*.05,m*.05)*4,D=T*(1-Math.pow(A,1.5))+E,b=30;let M=Math.floor(b-Math.max(2,D));_&&(M=-20);let I=!1,C=0;const y=12,P=f-(v.x-30),U=m-v.z,O=Math.sqrt(P*P+U*U);if(O<y){I=!0;const L=O/y;C=Math.floor(4*(1-L*L))}let B=!1;const F=v.x,G=v.z,$=f-F,ee=m-G,re=Math.sqrt($*$+ee*ee),de=4.5,Me=7,Y=Me*4,J=b+Y;re<=de+2&&(B=!0);let ue=b;B&&(ue=J+20),this.getTreeHeight(f,m);const Ae=v.type;let ve=6069830,Re=7032376,at=5921370,Ne=3355443,Je=4473924,N=4915330,Ge=6045747,Ve=16776960,Ze=6045747,me=16753920,Qe=4474111,Te=8947967;Ae==="ice"?(ve=16777215,Re=14540287,at=11193599,Ne=4482696,Je=5601177,N=17544,Ge=3351057,Ve=11206655,Ze=2241348,me=16777215,Qe=8965375,Te=13434879):Ae==="arcane"?(ve=4915330,Re=3025759,at=4734347,Ne=2228292,Je=3342421,N=16766720,Ge=12632256,Ve=65535,Ze=4915330,me=10040012):Ae==="volcanic"&&(ve=2236962,Re=4456448,at=1118481,Ne=2228224,Je=3342336,N=1118481,Ge=1118481,Ve=16729088,Ze=4456448,me=16711680,Qe=13570080,Te=16746496);for(let L=M;L<=ue+8;L++){if(this.destroyedBlocks.has(`${f},${L},${m}`))continue;let R=!1,V=ve;if(L<=b)if(R=!0,I){const Z=b-C;L>Z?V=Qe:V=Re}else if(p){const X=b-2;_?(V=Qe,Math.random()>.8&&(V=Te)):L>X?V=Qe:V=Re}else{const Z=b-L;Z===0?V=ve:Z<4?V=Re:V=at}if(B&&L>b){const Z=L-b;if(Z<=Y){const X=Z%Me===0||Z%Me===Me-1,ge=X?de+.5:de;if(re<=ge&&re>ge-1.5&&(R=!0,V=X?Ze:Math.random()>.5?Ne:Je,Z<5&&ee>0&&Math.abs($)<1.5&&(V=Ge,Z>3?R=!0:R=!1),!X&&Z>7)){const ce=Math.abs($)<1||Math.abs(ee)<1,Ee=Z%Me;ce&&Ee>=2&&Ee<=4&&(V=Ve)}}else{const X=Z-Y;if(X<=2)re<=de+2-X&&(R=!0,V=N);else{const ce=4*(1-(X-2)/15),Ee=Math.sin(X*.2)*2,Se=Math.cos(X*.2)*1;Math.sqrt(($-Ee)**2+(ee-Se)**2)<=Math.max(0,ce)&&(R=!0,V=N,X>=4&&X<=6&&(V=me))}}}if(L>b){const Z=this.getVegetationBlock(f,L,m,b);Z.exists&&(R=!0,V=Z.color)}if(!R)continue;o.position.set(f*this.tileSize,L*this.tileSize,m*this.tileSize),o.updateMatrix(),a.setMatrixAt(c,o.matrix),l.setHex(V);const K=`${f},${L},${m}`;if(this.blockHealth.has(K)){const ge=.3+.7*(this.blockHealth.get(K)/3);l.multiplyScalar(ge)}a.setColorAt(c,l),c++}const Ue=`${f},${m}`;if(this.placedBlocks.has(Ue)){const L=this.placedBlocks.get(Ue);for(const[R,V]of L){if(this.destroyedBlocks.has(`${f},${R},${m}`))continue;o.position.set(f*this.tileSize,R*this.tileSize,m*this.tileSize),o.updateMatrix(),a.setMatrixAt(c,o.matrix),l.setHex(V);const K=`${f},${R},${m}`;if(this.blockHealth.has(K)){const ge=.3+.7*(this.blockHealth.get(K)/3);l.multiplyScalar(ge)}a.setColorAt(c,l),c++}}}a.count=c,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),this.chunks.set(r,a),this.mesh.add(a)}update(e){const t=Math.floor(e.x/this.chunkSize),n=Math.floor(e.z/this.chunkSize),r=4;for(let s=-r;s<=r;s++)for(let a=-r;a<=r;a++){const o=this.getChunkKey(t+s,n+a);this.chunks.has(o)||this.generateChunk(t+s,n+a)}}getHeight(e,t,n=30){if(!this.getIslandData(e,t).isIsland)return-1/0;const s=this.getTreeHeight(e,t);if(s>0)return 30+s;for(const a of this.islandCenters){const o=e-(a.x-30),c=t-a.z,l=Math.sqrt(o*o+c*c),u=12;if(l<u){const d=l/u;return 30-Math.floor(4*(1-d*d))}const h=a.x,f=a.z,m=e-h,g=t-f,v=Math.sqrt(m*m+g*g),x=Math.floor(71-2*v);if(v<=5)return v>3.5?g>0&&Math.abs(m)<1.8?30:Math.max(58,x):30;if(v<=6.5&&x>30)return x}return 30}findSpawnPoint(){return new z(150,32,150)}getIslandData(e,t){for(const r of this.islandCenters){const s=e-r.x,a=t-r.z,o=Math.sqrt(s*s+a*a);if(o<55)return{isIsland:!0,center:r,dist:o}}return{isIsland:!1}}getTreeHeight(e,t){const n=Math.floor(e),r=Math.floor(t),s=this.getIslandData(n,r);if(!s.isIsland)return 0;const a=s.center,o=s.dist,c=a.x,l=a.z,u=n-c,h=r-l,f=Math.sqrt(u*u+h*h),m=f<=7,g=n-(a.x-30),v=r-a.z,d=Math.sqrt(g*g+v*v)<12,S=n-a.x,p=r-a.z,_=S<-30&&Math.abs(p)<3;if(!m&&!d&&!_&&o>10&&f>8&&this.noise2D(n*.3,r*.3)>.6&&n%3===0&&r%3===0){const T=Math.abs(Math.sin(n*12.9898+r*78.233));return 4+Math.floor(T*3)}return 0}getBlock(e,t,n){const r=Math.floor(e),s=Math.floor(t),a=Math.floor(n),o=`${r},${s},${a}`;if(this.destroyedBlocks.has(o))return!1;const c=`${r},${a}`;if(this.placedBlocks.has(c)&&this.placedBlocks.get(c).has(s))return!0;const l=this.getIslandData(r,a);if(!l.isIsland)return!1;const u=l.center,h=30;if(s<=h){const E=r-(u.x-30),D=a-u.z,b=Math.sqrt(E*E+D*D);if(b<12){const M=b/12,I=Math.floor(4*(1-M*M)),C=h-I;return s<=C}return!0}const f=u.x,m=u.z,g=r-f,v=a-m,x=Math.sqrt(g*g+v*v),d=4.5,S=7,_=S*4,A=h+_;if(s>h)if(s<=A){const E=s-h,b=E%S===0||E%S===S-1?d+.5:d;if(x<=b&&x>b-1.5)return E<5&&v>0&&Math.abs(g)<1.5?E>3:!0}else{const E=s-A,D=d+2-E*.5;if(x<=D&&D>=0)return!0}const T=this.getTreeHeight(r,a);return T>0&&s<=30+T}raycast(e,t,n){const r=e.clone();let s=0,a=Math.floor(r.x),o=Math.floor(r.y),c=Math.floor(r.z);const l=Math.sign(t.x),u=Math.sign(t.y),h=Math.sign(t.z),f=l!==0?Math.abs(1/t.x):1/0,m=u!==0?Math.abs(1/t.y):1/0,g=h!==0?Math.abs(1/t.z):1/0,v=l>0?a+1-r.x:r.x-a,x=u>0?o+1-r.y:r.y-o,d=h>0?c+1-r.z:r.z-c;let S=l!==0?v*f:1/0,p=u!==0?x*m:1/0,_=h!==0?d*g:1/0,A=new z;for(;s<n;){if(this.getBlock(a,o,c))return{point:new z(r.x+t.x*s,r.y+t.y*s,r.z+t.z*s),normal:A,block:{x:a,y:o,z:c}};S<p?S<_?(a+=l,s=S,S+=f,A.set(-l,0,0)):(c+=h,s=_,_+=g,A.set(0,0,-h)):p<_?(o+=u,s=p,p+=m,A.set(0,-u,0)):(c+=h,s=_,_+=g,A.set(0,0,-h))}return null}addBlock(e,t,n,r){const s=Math.floor(e),a=Math.floor(t),o=Math.floor(n),c=`${s},${o}`;this.placedBlocks.has(c)||this.placedBlocks.set(c,new Map),this.placedBlocks.get(c).set(a,r);const u=Math.floor(s/this.chunkSize),h=Math.floor(o/this.chunkSize);this.generateChunk(u,h,!0)}removeBlock(e,t,n){const r=Math.floor(e),s=Math.floor(t),a=Math.floor(n),o=`${r},${s},${a}`,c=`${r},${a}`;if(this.placedBlocks.has(c)){const h=this.placedBlocks.get(c);if(h.has(s)){h.delete(s),h.size===0&&this.placedBlocks.delete(c);const f=Math.floor(r/this.chunkSize),m=Math.floor(a/this.chunkSize);this.generateChunk(f,m,!0);return}}if(s<=30||this.destroyedBlocks.has(o))return;this.destroyedBlocks.add(o);const l=Math.floor(r/this.chunkSize),u=Math.floor(a/this.chunkSize);this.generateChunk(l,u,!0)}getMapColor(e,t){const n=this.getIslandData(e,t);if(!n.isIsland)return"#000044";const r=n.center,s=r.x,a=r.z,o=e-s,c=t-a;if(o*o+c*c<=49)return"#555555";const l=e-(r.x-30),u=t-r.z;if(l*l+u*u<144)return"#4444FF";const h=e-r.x,f=t-r.z;return h<-30&&Math.abs(f)<3?"#4444FF":r.type==="ice"?"#FFFFFF":r.type==="arcane"?"#4B0082":r.type==="volcanic"?"#222222":"#5C9E46"}hash(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453123;return n-Math.floor(n)}getVegetationBlock(e,t,n,r){const s=this.getTreeHeight(e,n);if(s>0){const a=t-r;if(a>0){if(a<=s)return{exists:!0,color:6045747};if(a<=s+2)return{exists:!0,color:2263842}}}return{exists:!1}}getTerrainType(e,t,n){const r=Math.floor(e),s=Math.floor(t),a=Math.floor(n),o=this.getIslandData(r,a);if(!o.isIsland)return"void";const c=o.center,l=c.type,u=r-(c.x-30),h=a-c.z;if(Math.sqrt(u*u+h*h)<12&&s>=26&&s<=30)return l==="volcanic"?"lava":"water";const m=r-c.x,g=a-c.z;return m<-30&&Math.abs(g)<3&&s>=28&&s<=30?l==="volcanic"?"lava":"water":l==="ice"?"ice":"ground"}}class Lx{constructor(){this.keys={},this.mouseButtons={},this.mouse={x:0,y:0,movementX:0,movementY:0},this.isLocked=!1,window.addEventListener("keydown",e=>this.keys[e.code]=!0),window.addEventListener("keyup",e=>this.keys[e.code]=!1),document.addEventListener("mousedown",e=>{this.isLocked&&(this.mouseButtons[e.button]=!0)}),document.addEventListener("mouseup",e=>this.mouseButtons[e.button]=!1),document.addEventListener("mousemove",e=>{this.isLocked&&(this.mouse.movementX=e.movementX,this.mouse.movementY=e.movementY)}),document.addEventListener("click",e=>{!this.isLocked&&e.target.tagName==="CANVAS"&&document.body.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===document.body})}isKeyDown(e){return!!this.keys[e]}isMouseButtonDown(e){return!!this.mouseButtons[e]}getMouseMovement(){const e={x:this.mouse.movementX,y:this.mouse.movementY};return this.mouse.movementX=0,this.mouse.movementY=0,e}}class Xc{constructor(e,t,n,r,s,a="normal",o=1){this.scene=e,this.particleSystem=r,this.soundManager=s,this.type=a,this.velocity=n.clone().normalize().multiplyScalar(60),this.isAlive=!0,this.lifeTime=1.5,this.damage=10*o;let c=65535,l=.3;this.type==="fireball"&&(c=16729088,l=.6,this.damage=30*o,this.lifeTime=3);const u=new ni(l,8,8),h=new Sr({color:c});this.mesh=new ct(u,h),this.mesh.position.copy(t),this.light=new As(c,1,10),this.mesh.add(this.light),this.scene.add(this.mesh)}update(e,t,n){if(!this.isAlive)return;if(this.lifeTime-=e,this.lifeTime<=0){this.destroy();return}this.particleSystem.emit(this.mesh.position,this.type==="fireball"?16729088:65535,1,.5,.2);const r=this.velocity.clone().multiplyScalar(e),s=r.length(),a=r.clone().normalize();if(n){for(const[c,l]of n)if(this.mesh.position.distanceTo(l.mesh.position)<(this.type==="fireball"?3:1.5)){this.onHitPlayer(c);return}}const o=t.raycast(this.mesh.position,a,s);if(o){if(this.mesh.position.copy(o.point),this.type==="fireball"){const l=Math.floor(o.point.x),u=Math.floor(o.point.y),h=Math.floor(o.point.z);for(let f=-3;f<=3;f++)for(let m=-3;m<=3;m++)for(let g=-3;g<=3;g++)f*f+m*m+g*g<=9&&(t.removeBlock(l+f,u+m,h+g),t.removeBlock(l+f,u+m,h+g),t.removeBlock(l+f,u+m,h+g))}else o.block&&t.removeBlock(o.block.x,o.block.y,o.block.z);this.onHit();return}this.mesh.position.add(r)}onHitPlayer(e){this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(this.mesh.position,16711680,20),this.onPlayerHitCallback&&this.onPlayerHitCallback(e,this.damage),this.destroy()}onHit(){this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(this.mesh.position,65535,15),this.destroy()}destroy(){this.isAlive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.light.dispose()}}class Ux{constructor(e,t,n,r,s,a,o){this.scene=e,this.camera=t,this.world=n,this.particleSystem=s,this.soundManager=a,this.networkManager=o,this.input=new Lx,this.isDead=!1,this.spawnPoint=r?r.clone():new z(10,20,10),this.networkTimer=0,this.networkInterval=.05,this.mesh=new Jn,this.mesh.position.set(10,20,10);const c=new ki(.5,1.5,8);this.bodyMat=new an({color:2755149});const l=new ct(c,this.bodyMat);l.position.y=.75,this.mesh.add(l);const u=new ni(.3,8,8),h=new an({color:16764074}),f=new ct(u,h);f.position.y=1.6,this.mesh.add(f);const m=new Es(.6,.6,.05,8);this.hatMat=new an({color:1118481});const g=new ct(m,this.hatMat);g.position.y=1.85,this.mesh.add(g);const v=new ki(.3,.8,8),x=new ct(v,this.hatMat);x.position.y=2.2,x.rotation.x=-.2,this.mesh.add(x);const d=new ni(.12,8,8),S=new ct(d,h);S.position.set(-.4,1,.3),this.mesh.add(S);const p=new ct(d,h);p.position.set(.4,1,.3),this.mesh.add(p),this.wand=this.createWand(),this.wand.position.copy(p.position),this.wand.position.y+=.3,this.wand.rotation.z=-25*(Math.PI/180),this.wand.position.x+=.12,this.mesh.add(this.wand),this.broom=this.createBroom(),this.broom.visible=!1,this.mesh.add(this.broom),r?this.mesh.position.copy(r):this.mesh.position.set(10,20,10),this.mesh.traverse(T=>T.castShadow=!0),this.scene.add(this.mesh),this.velocity=new z,this.onGround=!1,this.gravity=-30,this.speed=10,this.flySpeed=25,this.jumpForce=10,this.isFlying=!1,this.flyTogglePressed=!1,this.projectiles=[],this.lastShotTime=0,this.shootCooldown=.3,this.abilityCooldown=5,this.lastAbilityTime=0,this.dashCooldown=3,this.lastDashTime=0,this.team="spectator",this.maxMana=100,this.mana=100,this.manaRegen=5,this.abilityCost=40,this.isBuildMode=!1,this.buildTogglePressed=!1,this.buildCooldown=.2,this.lastBuildTime=0;const _=new Bn(1.01,1.01,1.01),A=new Sr({color:65280,wireframe:!0,transparent:!0,opacity:.5});this.ghostBlock=new ct(_,A),this.scene.add(this.ghostBlock),this.ghostBlock.visible=!1,this.physicsPosition=this.mesh.position.clone(),this.cameraOffset=new z(0,2,5),this.rotation=new Kt(0,0,0,"YXZ"),this.currentBiome="ice",this.checkBiomeTimer=0,this.speedBuffTimer=0,this.damageBuffTimer=0,this.shield=0,this.lavaDamageTimer=0,this.footstepTimer=0}get position(){return this.physicsPosition}update(e,t){if(this.isDead)return;this.speedBuffTimer>0&&(this.speedBuffTimer-=e),this.damageBuffTimer>0&&(this.damageBuffTimer-=e),this.mana<this.maxMana&&(this.mana+=this.manaRegen*e,this.mana>this.maxMana&&(this.mana=this.maxMana),this.updateManaUI()),this.networkTimer+=e,this.networkTimer>=this.networkInterval&&(this.networkTimer=0,this.networkManager&&this.networkManager.sendMove(this.physicsPosition,this.rotation,this.currentBiome));for(let p=this.projectiles.length-1;p>=0;p--){const _=this.projectiles[p];_.update(e,this.world,t),_.isAlive||this.projectiles.splice(p,1)}this.input.isKeyDown("KeyF")?this.flyTogglePressed||(this.isFlying=!this.isFlying,this.flyTogglePressed=!0,this.broom.visible=this.isFlying,this.isFlying?(this.velocity.y=0,this.mesh.rotation.x=.3,this.mesh.position.y+=1):this.mesh.rotation.x=0):this.flyTogglePressed=!1,this.input.isKeyDown("KeyB")?this.buildTogglePressed||(this.isBuildMode=!this.isBuildMode,this.buildTogglePressed=!0,this.ghostBlock.visible=this.isBuildMode):this.buildTogglePressed=!1,this.isBuildMode?this.updateBuildMode(e):(this.ghostBlock.visible=!1,this.lastShotTime+=e,this.input.isMouseButtonDown(0)&&this.lastShotTime>=this.shootCooldown&&(this.shoot(),this.lastShotTime=0));const n=this.input.getMouseMovement();if(this.rotation.y-=n.x*.002,this.rotation.x-=n.y*.002,this.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.rotation.x)),this.input.isKeyDown("ShiftLeft")&&!this.isFlying){const p=performance.now()/1e3;p-this.lastDashTime>this.dashCooldown&&(this.performDash(),this.lastDashTime=p)}const r=new z(0,0,-1).applyAxisAngle(new z(0,1,0),this.rotation.y),s=new z(1,0,0).applyAxisAngle(new z(0,1,0),this.rotation.y),a=new z;this.input.isKeyDown("KeyW")&&a.add(r),this.input.isKeyDown("KeyS")&&a.sub(r),this.input.isKeyDown("KeyD")&&a.add(s),this.input.isKeyDown("KeyA")&&a.sub(s),a.length()>0&&a.normalize();let o=this.isFlying?this.flySpeed:this.speed;this.speedBuffTimer>0&&(o*=2);const c=a.x*o,l=a.z*o,u=this.world.getTerrainType(this.physicsPosition.x,this.physicsPosition.y-.5,this.physicsPosition.z);let h=20;u==="ice"&&!this.isFlying&&this.onGround&&(h=1);const f=1-Math.exp(-h*e);this.velocity.x+=(c-this.velocity.x)*f,this.velocity.z+=(l-this.velocity.z)*f,this.onGround&&!this.isFlying&&(Math.abs(this.velocity.x)>.1||Math.abs(this.velocity.z)>.1)?(this.footstepTimer+=e,this.footstepTimer>.4&&(this.soundManager.playFootstep(),this.footstepTimer=0)):this.footstepTimer=.4,u==="lava"?(this.lavaDamageTimer+=e,this.lavaDamageTimer>.5&&(this.lavaDamageTimer=0,this.networkManager&&this.networkManager.playerId&&(this.networkManager.sendHit(this.networkManager.playerId,5),this.particleSystem.emit(this.position,16729088,10)))):this.lavaDamageTimer=0,this.isFlying?this.input.isKeyDown("Space")?this.velocity.y=o*.5:this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("KeyC")?this.velocity.y=-o*.5:this.velocity.y=0:(this.onGround&&this.input.isKeyDown("Space")&&(this.velocity.y=this.jumpForce,this.onGround=!1),this.velocity.y+=this.gravity*e),this.wandParticles&&(this.wandParticles.rotation.y+=e*2,this.wandParticles.rotation.z+=e*1);const m=this.physicsPosition.clone();this.physicsPosition.x+=this.velocity.x*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.x=m.x,this.velocity.x=0),this.physicsPosition.z+=this.velocity.z*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.z=m.z,this.velocity.z=0),this.physicsPosition.y+=this.velocity.y*e,this.checkCollision(this.physicsPosition)?(this.velocity.y<0?(this.onGround=!0,this.physicsPosition.y=m.y):this.physicsPosition.y=m.y,this.velocity.y=0):this.onGround=!1,this.physicsPosition.y<-50&&this.onDeath(),this.mesh.position.x=this.physicsPosition.x,this.mesh.position.z=this.physicsPosition.z,this.mesh.position.y=Ai.lerp(this.mesh.position.y,this.physicsPosition.y,10*e);const g=this.mesh.position.clone().add(new z(0,1.5,0)),v=new z(1.5,1,5);v.applyEuler(this.rotation);const x=g.clone().add(v);this.camera.position.copy(x);const d=new z(0,0,-1);d.applyEuler(this.rotation);const S=x.clone().add(d.multiplyScalar(20));if(this.camera.lookAt(S),this.mesh.rotation.y=this.rotation.y,this.isFlying){let _=.3,A=0;if(this.input.isKeyDown("KeyW")&&(_=.8),this.input.isKeyDown("KeyS")&&(_=-.2),this.input.isKeyDown("KeyA")&&(A=.5),this.input.isKeyDown("KeyD")&&(A=-.5),this.mesh.rotation.x=Ai.lerp(this.mesh.rotation.x,_,e*5),this.mesh.rotation.z=Ai.lerp(this.mesh.rotation.z,A,e*5),this.particleSystem){const T=new z(0,0,1.4);T.applyMatrix4(this.broom.matrixWorld),this.particleSystem.emit(T,15645525,2)}}else this.mesh.rotation.x=Ai.lerp(this.mesh.rotation.x,0,e*10),this.mesh.rotation.z=Ai.lerp(this.mesh.rotation.z,0,e*10)}setTeam(e){this.team=e}performDash(){const e=new z(0,0,-1).applyAxisAngle(new z(0,1,0),this.rotation.y);if(this.velocity.add(e.multiplyScalar(40)),this.soundManager&&this.soundManager.playJump(),this.particleSystem)for(let t=0;t<10;t++)this.particleSystem.emit(this.mesh.position.clone(),16777215,5)}updateManaUI(){const e=document.getElementById("mana-bar"),t=document.getElementById("mana-text");e&&t&&(e.style.width=`${this.mana/this.maxMana*100}%`,t.textContent=`${Math.floor(this.mana)} / ${this.maxMana}`)}shoot(){const e=this.damageBuffTimer>0?2:1,t=new Xc(this.scene,this.wand.getWorldPosition(new z),this.camera.getWorldDirection(new z),this.particleSystem,this.soundManager,"normal",e);this.projectiles.push(t),this.soundManager.playShoot()}useAbility(){if(this.mana<this.abilityCost)return;const e=this.damageBuffTimer>0?2:1;if(this.team==="red"){const t=new Xc(this.scene,this.wand.getWorldPosition(new z),this.camera.getWorldDirection(new z),this.particleSystem,this.soundManager,"fireball",e);this.projectiles.push(t),this.mana-=this.abilityCost,this.updateManaUI()}else this.team}applyPotion(e){console.log("Applied potion:",e),e==="speed"?this.speedBuffTimer=10:e==="shield"?(this.shield+=50,this.networkManager.onHealthUpdate(this.health+this.shield)):e==="berserk"&&(this.damageBuffTimer=10)}}class Fx{constructor(e,t){this.world=e,this.player=t,this.canvas=document.getElementById("minimap"),this.ctx=this.canvas.getContext("2d"),this.size=200,this.zoom=1.5,this.visited=new Set,this.cellSize=4}update(){const e=this.player.position.x,t=this.player.position.z,n=60;for(let r=e-n;r<=e+n;r+=this.cellSize)for(let s=t-n;s<=t+n;s+=this.cellSize){const a=r-e,o=s-t;if(a*a+o*o<=n*n){const c=Math.floor(r/this.cellSize),l=Math.floor(s/this.cellSize);this.visited.add(`${c},${l}`)}}this.draw()}draw(){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,this.size/2,0,Math.PI*2),this.ctx.clip(),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.size,this.size);const e=this.player.position.x,t=this.player.position.z,n=this.size*this.zoom/2,r=Math.floor((e-n)/this.cellSize)*this.cellSize,s=Math.floor((e+n)/this.cellSize)*this.cellSize,a=Math.floor((t-n)/this.cellSize)*this.cellSize,o=Math.floor((t+n)/this.cellSize)*this.cellSize;for(let u=r;u<=s;u+=this.cellSize)for(let h=a;h<=o;h+=this.cellSize){const f=Math.floor(u/this.cellSize),m=Math.floor(h/this.cellSize);if(this.visited.has(`${f},${m}`)){const g=this.world.getMapColor(u,h),v=this.size/2+(u-e)/this.zoom,x=this.size/2+(h-t)/this.zoom,d=this.cellSize/this.zoom+1;this.ctx.fillStyle=g,this.ctx.fillRect(v,x,d,d)}}this.ctx.fillStyle="white",this.ctx.strokeStyle="black",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,4,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke();const c=Math.sin(this.player.rotation.y),l=Math.cos(this.player.rotation.y);this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2-c*10,this.size/2-l*10),this.ctx.stroke(),this.ctx.restore()}}class Nx{constructor(e){this.scene=e,this.particles=[],this.geometry=new Bn(.2,.2,.2),this.material=new Sr({color:16777215})}emit(e,t,n=5,r=5,s=1){for(let a=0;a<n;a++){const o=new ct(this.geometry,this.material.clone());o.material.color.setHex(t),o.position.copy(e),o.position.x+=(Math.random()-.5)*.5,o.position.y+=(Math.random()-.5)*.5,o.position.z+=(Math.random()-.5)*.5;const c=new z(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(r*Math.random());this.particles.push({mesh:o,velocity:c,life:s,maxLife:s}),this.scene.add(o)}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.life-=e,n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.velocity.y-=10*e;const r=n.life/n.maxLife;n.mesh.scale.setScalar(r),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(t,1))}}}class kx{constructor(e){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination),this.windOsc=null,this.windGain=null,this.initWind()}initWind(){const e=2*this.ctx.sampleRate,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<e;s++){const a=Math.random()*2-1;n[s]=(r+.02*a)/1.02,r=n[s],n[s]*=3.5}var r=0;this.windNode=this.ctx.createBufferSource(),this.windNode.buffer=t,this.windNode.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=200,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windNode.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windNode.start()}updateWind(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=Math.min(e/30,1);this.windGain.gain.setTargetAtTime(t*.5,this.ctx.currentTime,.1),this.windFilter.frequency.setTargetAtTime(200+t*800,this.ctx.currentTime,.1)}playShoot(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(110,this.ctx.currentTime+.1),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}playExplosion(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),t.gain.setValueAtTime(.5,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.3)}playPowerup(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.1),e.frequency.exponentialRampToValueAtTime(1760,this.ctx.currentTime+.3),t.gain.setValueAtTime(.3,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.3)}playFootstep(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.sampleRate*.05,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let o=0;o<e;o++)n[o]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=t;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800;const a=this.ctx.createGain();a.gain.setValueAtTime(.1,this.ctx.currentTime),a.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.05),r.connect(s),s.connect(a),a.connect(this.masterGain),r.start()}playHitMarker(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(2e3,this.ctx.currentTime),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}}class Ox{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Bx(e).buffer}}function Bx(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,n),n+=r.byteLength}return t}function Wl(i){return new zx(i).unpack()}function $l(i){const e=new Gx,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class zx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,r="",s,a;for(;n<e;)s=t[n],s<160?(a=s,n++):(s^192)<32?(a=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(a=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(a=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(n===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Gx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>n(r+1)):n(r+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),r=e/2**n-1,s=Math.floor(r*2**52),a=2**32,o=t<<31|n+1023<<20|s/a&1048575,c=s%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Ox,this._textEncoder=new TextEncoder}}let Xl=!0,jl=!0;function sr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ri(i,e,t){if(!i.RTCPeerConnection)return;const n=i.RTCPeerConnection.prototype,r=n.addEventListener;n.addEventListener=function(a,o){if(a!==e)return r.apply(this,arguments);const c=l=>{const u=t(l);u&&(o.handleEvent?o.handleEvent(u):o(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(o,c),r.apply(this,[a,c])};const s=n.removeEventListener;n.removeEventListener=function(a,o){if(a!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(o))return s.apply(this,arguments);const c=this._eventMap[e].get(o);return this._eventMap[e].delete(o),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[a,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function Vx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Xl=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function Hx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(jl=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function ql(){if(typeof window=="object"){if(Xl)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Po(i,e){jl&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Wx(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(n)return{browser:"chrome",version:parseInt(n.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(sr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(sr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2));else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(sr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=sr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function jc(i){return Object.prototype.toString.call(i)==="[object Object]"}function Yl(i){return jc(i)?Object.keys(i).reduce(function(e,t){const n=jc(i[t]),r=n?Yl(i[t]):i[t],s=n&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):i}function oo(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?oo(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(r=>{oo(i,i.get(r),t)})}))}function qc(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return i.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{i.forEach(o=>{o.type===n&&o.trackId===a.id&&oo(i,o,r)})}),r}const Yc=ql;function Kl(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof o[l]=="object"?o[l]:{ideal:o[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const h=function(f,m){return f?f+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(u.ideal!==void 0){c.optional=c.optional||[];let f={};typeof u.ideal=="number"?(f[h("min",l)]=u.ideal,c.optional.push(f),f={},f[h("max",l)]=u.ideal,c.optional.push(f)):(f[h("",l)]=u.ideal,c.optional.push(f))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[h("",l)]=u.exact):["min","max"].forEach(f=>{u[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[h(f,l)]=u[f])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},r=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(u,h,f){h in u&&!(f in u)&&(u[f]=u[h],delete u[h])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=n(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete o.video.facingMode;let h;if(l.exact==="environment"||l.ideal==="environment"?h=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(h=["front"]),h)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let m=f.find(g=>h.some(v=>g.label.toLowerCase().includes(v)));return!m&&f.length&&h.includes("back")&&(m=f[f.length-1]),m&&(o.video.deviceId=l.exact?{exact:m.deviceId}:{ideal:m.deviceId}),o.video=n(o.video),Yc("chrome: "+JSON.stringify(o)),c(o)})}o.video=n(o.video)}return Yc("chrome: "+JSON.stringify(o)),c(o)},s=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){r(o,u=>{t.webkitGetUserMedia(u,c,h=>{l&&l(s(h))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>o(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(h=>{h.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function Zl(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function Jl(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",r=>{let s;i.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(o=>o.track&&o.track.id===r.track.id):s={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=s,a.transceiver={receiver:s},a.streams=[n.stream],this.dispatchEvent(a)}),n.stream.getTracks().forEach(r=>{let s;i.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(o=>o.track&&o.track.id===r.id):s={track:r};const a=new Event("track");a.track=r,a.receiver=s,a.transceiver={receiver:s},a.streams=[n.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else ri(i,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function Ql(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,c){let l=r.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){s.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function eu(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const t=i.RTCPeerConnection.prototype.getSenders;t&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(a=>a._pc=this),s});const n=i.RTCPeerConnection.prototype.addTrack;n&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=n.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>qc(a,s.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const t=i.RTCPeerConnection.prototype.getReceivers;t&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=t.apply(this,[]);return r.forEach(s=>s._pc=this),r}),ri(i,"track",n=>(n.receiver._pc=n.srcElement,n)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(s=>qc(s,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const e=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const n=arguments[0];let r,s,a;return this.getSenders().forEach(o=>{o.track===n&&(r?a=!0:r=o)}),this.getReceivers().forEach(o=>(o.track===n&&(s?a=!0:s=o),o.track===n)),a||r&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function tu(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(h=>h.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],n.apply(this,arguments)};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),r.apply(this,arguments)}}function nu(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return tu(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(h=>this._reverseStreams[h.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(h=>{if(this.getSenders().find(m=>m.track===h))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const h=new i.MediaStream(u.getTracks());this._streams[u.id]=h,this._reverseStreams[h.id]=u,u=h}n.apply(this,[u])};const r=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},i.RTCPeerConnection.prototype.addTrack=function(u,h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(v=>v===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(v=>v.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[h.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const v=new i.MediaStream([u]);this._streams[h.id]=v,this._reverseStreams[v.id]=h,this.addStream(v)}return this.getSenders().find(v=>v.track===u)};function s(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const m=l._reverseStreams[f],g=l._streams[m.id];h=h.replace(new RegExp(g.id,"g"),m.id)}),new RTCSessionDescription({type:u.type,sdp:h})}function a(l,u){let h=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const m=l._reverseStreams[f],g=l._streams[m.id];h=h.replace(new RegExp(m.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:h})}["createOffer","createAnswer"].forEach(function(l){const u=i.RTCPeerConnection.prototype[l],h={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const v=s(this,g);f[0].apply(null,[v])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>s(this,g))}};i.RTCPeerConnection.prototype[l]=h[l]});const o=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(v=>u.track===v)&&(f=this._streams[m])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function co(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=r[t]})}function iu(i,e){ri(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Kc=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:iu,shimAddTrackRemoveTrack:nu,shimAddTrackRemoveTrackWithNative:tu,shimGetSendersWithDtmf:Ql,shimGetUserMedia:Kl,shimMediaStream:Zl,shimOnTrack:Jl,shimPeerConnection:co,shimSenderReceiverGetStats:eu},Symbol.toStringTag,{value:"Module"}));function ru(i,e){const t=i&&i.navigator,n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){Po("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},n&&n.prototype.getSettings){const a=n.prototype.getSettings;n.prototype.getSettings=function(){const o=a.apply(this,arguments);return r(o,"mozAutoGainControl","autoGainControl"),r(o,"mozNoiseSuppression","noiseSuppression"),o}}if(n&&n.prototype.applyConstraints){const a=n.prototype.applyConstraints;n.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o,"autoGainControl","mozAutoGainControl"),r(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function $x(i,e){i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||i.navigator.mediaDevices&&(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)})}function su(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function lo(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection))return;!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(r){const s=i.RTCPeerConnection.prototype[r],a={[r](){return arguments[0]=new(r==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};i.RTCPeerConnection.prototype[r]=a[r]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[s,a,o]=arguments;return n.apply(this,[s||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,h)=>{c.set(h,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(a,o)}}function au(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function ou(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(r=>r._pc=this),n}),ri(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function cu(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Po("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function lu(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function uu(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.addTransceiver;e&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const r=n.length>0;r&&n.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(r){const{sender:a}=s,o=a.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=n,a.sendEncodings=n,this.setParametersPromises.push(a.setParameters(o).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return s})}function hu(i){if(!(typeof i=="object"&&i.RTCRtpSender))return;const e=i.RTCRtpSender.prototype.getParameters;e&&(i.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function fu(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function du(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Zc=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:uu,shimCreateAnswer:du,shimCreateOffer:fu,shimGetDisplayMedia:$x,shimGetParameters:hu,shimGetUserMedia:ru,shimOnTrack:su,shimPeerConnection:lo,shimRTCDataChannel:lu,shimReceiverGetStats:ou,shimRemoveStream:cu,shimSenderGetStats:au},Symbol.toStringTag,{value:"Module"}));function pu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(r=>e.call(this,r,n)),n.getVideoTracks().forEach(r=>e.call(this,r,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function mu(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,n.dispatchEvent(a)})}),e.apply(n,arguments)}}}function xu(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[h]);return u?(f.then(l,u),Promise.resolve()):f},e.createAnswer=function(l,u){const h=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[h]);return u?(f.then(l,u),Promise.resolve()):f};let o=function(c,l,u){const h=r.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h};e.setLocalDescription=o,o=function(c,l,u){const h=s.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.setRemoteDescription=o,o=function(c,l,u){const h=a.apply(this,[c]);return u?(h.then(l,u),Promise.resolve()):h},e.addIceCandidate=o}function gu(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>n(_u(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,r,s){e.mediaDevices.getUserMedia(n).then(r,s)}).bind(e))}function _u(i){return i&&i.video!==void 0?Object.assign({},i,{video:Yl(i.video)}):i}function vu(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,r){if(n&&n.iceServers){const s=[];for(let a=0;a<n.iceServers.length;a++){let o=n.iceServers[a];o.urls===void 0&&o.url?(Po("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,s.push(o)):s.push(n.iceServers[a])}n.iceServers=s}return new e(n,r)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function yu(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function bu(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Su(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Jc=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Su,shimCallbacksAPI:xu,shimConstraints:_u,shimCreateOfferLegacy:bu,shimGetUserMedia:gu,shimLocalStreamsAPI:pu,shimRTCIceServerUrls:vu,shimRemoteStreamsAPI:mu,shimTrackEventTransceiver:yu},Symbol.toStringTag,{value:"Module"}));function Mu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var fa={exports:{}},Qc;function Xx(){return Qc||(Qc=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(r=>r.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const r={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":r.relatedAddress=n[s+1];break;case"rport":r.relatedPort=parseInt(n[s+1],10);break;case"tcptype":r.tcpType=n[s+1];break;case"ufrag":r.ufrag=n[s+1],r.usernameFragment=n[s+1];break;default:r[n[s]]===void 0&&(r[n[s]]=n[s+1]);break}return r},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const r=t.component;r==="rtp"?n.push(1):r==="rtcp"?n.push(2):n.push(r),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const r={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),r.name=n[0],r.clockRate=parseInt(n[1],10),r.channels=n.length===3?parseInt(n[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<s.length;a++)r=s[a].trim().split("="),n[r[0].trim()]=r[1];return n},e.writeFmtp=function(t){let n="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),n+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(r.attribute=t.substring(n+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(n+1),r},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(r=>parseInt(r,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let r="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const r=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let o=3;o<s.length;o++){const c=s[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const u=e.parseRtpMap(l),h=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(u.parameters=h.length?e.parseFmtp(h[0]):{},u.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(u),u.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(u.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{n.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(u=>u.type===c.type&&u.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let r="";r+="m="+t+" ",r+=n.codecs.length>0?"9":"0",r+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=n.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return n.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const n=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const u=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),r.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let m={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(m.rtx={ssrc:l}),n.push(m),s&&(m=JSON.parse(JSON.stringify(m)),m.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},n.push(m))}}),n.length===0&&c&&n.push({ssrc:c});let h=e.matchPrefix(t,"b=");return h.length&&(h[0].indexOf("b=TIAS:")===0?h=parseInt(h[0].substring(7),10):h[0].indexOf("b=AS:")===0?h=parseInt(h[0].substring(5),10)*1e3*.95-2e3*8:h=void 0,n.forEach(f=>{f.maxBitrate=h})),n},e.parseRtcpParameters=function(t){const n={},r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];r&&(n.cname=r.value,n.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return n.mux=a.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return n=r[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&r.push("a=max-message-size:"+n.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,r){let s;const a=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let r=0;r<n.length;r++)if(n[r].length<2||n[r].charAt(1)!=="=")return!1;return!0},i.exports=e})(fa)),fa.exports}var Tu=Xx();const Di=Mu(Tu),jx=ju({__proto__:null,default:Di},[Tu]);function is(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const r=new e(n),s=Di.parseCandidate(n.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ri(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function uo(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ri(i,"icecandidate",e=>{if(e.candidate){const t=Di.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function rs(i,e){if(!i.RTCPeerConnection)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=Di.splitSections(o.sdp);return c.shift(),c.some(l=>{const u=Di.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},n=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Di.matchPrefix(o.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=r(c),u=s(arguments[0],c);let h;l===0&&u===0?h=Number.POSITIVE_INFINITY:l===0||u===0?h=Math.max(l,u):h=Math.min(l,u);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return h}}),this._sctp=f}return a.apply(this,arguments)}}function ss(i){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype))return;function e(n,r){const s=n.send;n.send=function(){const o=arguments[0],c=o.length||o.size||o.byteLength;if(n.readyState==="open"&&r.sctp&&c>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return s.apply(n,arguments)}}const t=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=t.apply(this,arguments);return e(r,this),r},ri(i,"datachannel",n=>(e(n.channel,n.target),n))}function ho(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function fo(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&r instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function as(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function os(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const qx=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:fo,shimAddIceCandidateNullOrEmpty:as,shimConnectionState:ho,shimMaxMessageSize:rs,shimParameterlessSetLocalDescription:os,shimRTCIceCandidate:is,shimRTCIceCandidateRelayProtocol:uo,shimSendThrowTypeError:ss},Symbol.toStringTag,{value:"Module"}));function Yx({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=ql,n=Wx(i),r={browserDetails:n,commonShim:qx,extractVersion:sr,disableLog:Vx,disableWarnings:Hx,sdp:jx};switch(n.browser){case"chrome":if(!Kc||!co||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=Kc,as(i,n),os(i),Kl(i,n),Zl(i),co(i,n),Jl(i),nu(i,n),Ql(i),eu(i),iu(i,n),is(i),uo(i),ho(i),rs(i,n),ss(i),fo(i,n);break;case"firefox":if(!Zc||!lo||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=Zc,as(i,n),os(i),ru(i,n),lo(i,n),su(i),cu(i),au(i),ou(i),lu(i),uu(i),hu(i),fu(i),du(i),is(i),ho(i),rs(i,n),ss(i);break;case"safari":if(!Jc||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=Jc,as(i,n),os(i),vu(i),bu(i),xu(i),pu(i),mu(i),yu(i),gu(i),Su(i),is(i),uo(i),rs(i,n),ss(i),fo(i,n);break;default:t("Unsupported browser!");break}return r}const el=Yx({window:typeof window>"u"?void 0:window});function si(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Eu{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,r=Math.ceil(n/this.chunkedMTU);let s=0,a=0;for(;a<n;){const o=Math.min(n,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),a=o,s++}return this._dataCount++,t}}}function Kx(i){let e=0;for(const r of i)e+=r.byteLength;const t=new Uint8Array(e);let n=0;for(const r of i)t.set(r,n),n+=r.byteLength;return t}const da=el.default||el,nr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return da.browserDetails.browser}getVersion(){return da.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=da.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Zx=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Cu=()=>Math.random().toString(36).slice(2),tl={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Jx extends Eu{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(r){r.target&&t(r.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=tl,this.browser=nr.getBrowser(),this.browserVersion=nr.getVersion(),this.pack=$l,this.unpack=Wl,this.supports=(function(){const t={browser:nr.isBrowserSupported(),webRTC:nr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(tl),t.audioVideo=!0;let r;try{r=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!nr.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Zx,this.randomToken=Cu}}const Nt=new Jx,Qx="PeerJS: ";class eg{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[Qx,...t];for(const r in n)n[r]instanceof Error&&(n[r]="("+n[r].name+") "+n[r].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var _e=new eg,Do={},tg=Object.prototype.hasOwnProperty,Lt="~";function gr(){}Object.create&&(gr.prototype=Object.create(null),new gr().__proto__||(Lt=!1));function ng(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Au(i,e,t,n,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new ng(t,n||i,r),a=Lt?Lt+e:e;return i._events[a]?i._events[a].fn?i._events[a]=[i._events[a],s]:i._events[a].push(s):(i._events[a]=s,i._eventsCount++),i}function cs(i,e){--i._eventsCount===0?i._events=new gr:delete i._events[e]}function At(){this._events=new gr,this._eventsCount=0}At.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)tg.call(t,n)&&e.push(Lt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};At.prototype.listeners=function(e){var t=Lt?Lt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,a=new Array(s);r<s;r++)a[r]=n[r].fn;return a};At.prototype.listenerCount=function(e){var t=Lt?Lt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};At.prototype.emit=function(e,t,n,r,s,a){var o=Lt?Lt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,u,h;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,s),!0;case 6:return c.fn.call(c.context,t,n,r,s,a),!0}for(h=1,u=new Array(l-1);h<l;h++)u[h-1]=arguments[h];c.fn.apply(c.context,u)}else{var f=c.length,m;for(h=0;h<f;h++)switch(c[h].once&&this.removeListener(e,c[h].fn,void 0,!0),l){case 1:c[h].fn.call(c[h].context);break;case 2:c[h].fn.call(c[h].context,t);break;case 3:c[h].fn.call(c[h].context,t,n);break;case 4:c[h].fn.call(c[h].context,t,n,r);break;default:if(!u)for(m=1,u=new Array(l-1);m<l;m++)u[m-1]=arguments[m];c[h].fn.apply(c[h].context,u)}}return!0};At.prototype.on=function(e,t,n){return Au(this,e,t,n,!1)};At.prototype.once=function(e,t,n){return Au(this,e,t,n,!0)};At.prototype.removeListener=function(e,t,n,r){var s=Lt?Lt+e:e;if(!this._events[s])return this;if(!t)return cs(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!n||a.context===n)&&cs(this,s);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||r&&!a[o].once||n&&a[o].context!==n)&&c.push(a[o]);c.length?this._events[s]=c.length===1?c[0]:c:cs(this,s)}return this};At.prototype.removeAllListeners=function(e){var t;return e?(t=Lt?Lt+e:e,this._events[t]&&cs(this,t)):(this._events=new gr,this._eventsCount=0),this};At.prototype.off=At.prototype.removeListener;At.prototype.addListener=At.prototype.on;At.prefixed=Lt;At.EventEmitter=At;Do=At;var ai={};si(ai,"ConnectionType",()=>Nn);si(ai,"PeerErrorType",()=>gt);si(ai,"BaseConnectionErrorType",()=>po);si(ai,"DataConnectionErrorType",()=>Io);si(ai,"SerializationType",()=>Ps);si(ai,"SocketEventType",()=>Un);si(ai,"ServerMessageType",()=>Tt);var Nn=(function(i){return i.Data="data",i.Media="media",i})({}),gt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),po=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),Io=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),Ps=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Un=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Tt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Ru="1.5.5";class ig extends Do.EventEmitter{constructor(e,t,n,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+n+r+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Ru),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),_e.log("Server message received:",s)}catch{_e.log("Invalid server message",r.data);return}this.emit(Un.Message,s)},this._socket.onclose=r=>{this._disconnected||(_e.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(Un.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),_e.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){_e.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Tt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Un.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class wu{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Nn.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(n.label,r);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){_e.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;_e.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(_e.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:Tt.Candidate,payload:{candidate:a.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":_e.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(po.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":_e.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(po.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":_e.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},_e.log("Listening for data channel"),e.ondatachannel=a=>{_e.log("Received data channel");const o=a.channel;s.getConnection(t,n)._initializeDataChannel(o)},_e.log("Listening for remote stream"),e.ontrack=a=>{_e.log("Received remote stream");const o=a.streams[0],c=s.getConnection(t,n);if(c.type===Nn.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){_e.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const r=this.connection.dataChannel;r&&(n=!!r.readyState&&r.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);_e.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Nn.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Tt.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(gt.WebRTC,r),_e.log("Failed to setLocalDescription, ",r))}}catch(n){t.emitError(gt.WebRTC,n),_e.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();_e.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Tt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(gt.WebRTC,r),_e.log("Failed to setLocalDescription, ",r)}}catch(n){t.emitError(gt.WebRTC,n),_e.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,r=this.connection.provider;_e.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),_e.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(gt.WebRTC,a),_e.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){_e.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),_e.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(gt.WebRTC,t),_e.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(_e.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return _e.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){_e.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Pu extends Do.EventEmitter{emitError(e,t){_e.error("Error:",t),this.emit("error",new rg(`${e}`,t))}}class rg extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Du extends Pu{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class xs extends Du{static#e=this.ID_PREFIX="mc_";get type(){return Nn.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||xs.ID_PREFIX+Nt.randomToken(),this._negotiator=new wu(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){_e.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Tt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Tt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:_e.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){_e.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const r of n)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class sg{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:r,path:s,key:a}=this._options,o=new URL(`${t}://${n}:${r}${s}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Ru),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){_e.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Nt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Nt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw _e.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class gs extends Du{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Nn.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||gs.ID_PREFIX+Cu(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new wu(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{_e.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Io.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Tt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Tt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:_e.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Lo extends gs{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>gs.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return _e.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class pa extends Lo{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Eu,this.serialization=Ps.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Wl(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const r=Kx(n.data);this._handleDataMessage({data:r})}}_send(e,t){const n=$l(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);_e.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class ag extends Lo{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Ps.None}}class og extends Lo{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Nt.chunkedMTU){this.emitError(Io.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=Ps.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class lr extends Pu{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:ag,json:og,binary:pa,"binary-utf8":pa,default:pa},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Nt.CLOUD_HOST,port:Nt.CLOUD_PORT,path:"/",key:lr.DEFAULT_KEY,token:Nt.randomToken(),config:Nt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Nt.CLOUD_HOST?this._options.secure=Nt.isSecure():this._options.host==Nt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&_e.setLogFunction(this._options.logFunction),_e.logLevel=this._options.debug||0,this._api=new sg(t),this._socket=this._createServerConnection(),!Nt.supports.audioVideo&&!Nt.supports.data){this._delayedAbort(gt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Nt.validateId(n)){this._delayedAbort(gt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(gt.ServerError,r))}_createServerConnection(){const e=new ig(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Un.Message,t=>{this._handleMessage(t)}),e.on(Un.Error,t=>{this._abort(gt.SocketError,t)}),e.on(Un.Disconnected,()=>{this.disconnected||(this.emitError(gt.Network,"Lost connection to server."),this.disconnect())}),e.on(Un.Close,()=>{this.disconnected||this._abort(gt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,r=e.src;switch(t){case Tt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Tt.Error:this._abort(gt.ServerError,n.msg);break;case Tt.IdTaken:this._abort(gt.UnavailableID,`ID "${this.id}" is taken`);break;case Tt.InvalidKey:this._abort(gt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Tt.Leave:_e.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Tt.Expire:this.emitError(gt.PeerUnavailable,`Could not connect to peer ${r}`);break;case Tt.Offer:{const s=n.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),_e.warn(`Offer received for existing Connection ID:${s}`)),n.type===Nn.Media){const c=new xs(r,this,{connectionId:s,_payload:n,metadata:n.metadata});a=c,this._addConnection(r,a),this.emit("call",c)}else if(n.type===Nn.Data){const c=new this._serializers[n.serialization](r,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});a=c,this._addConnection(r,a),this.emit("connection",c)}else{_e.warn(`Received malformed connection type:${n.type}`);return}const o=this._getMessages(s);for(const c of o)a.handleMessage(c);break}default:{if(!n){_e.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=n.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):_e.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(gt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(gt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){_e.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new xs(e,this,{...n,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){_e.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const r of n)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){_e.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(_e.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;_e.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)_e.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)_e.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(gt.ServerError,t))}}function cg(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ls={exports:{}};ls.exports;var nl;function lg(){return nl||(nl=1,(function(i){(function(){function e(n,r){return r?cg(n):n.slice?e[s(n)]:function(a,o){n(a={exports:{}}),e[s(o)]=a.exports};function s(a){return a.split("/").slice(-1).toString().replace(".js","")}}var t=i;e(function(n){String.random=function(s,a){var o="";for(s=s||24,a=a||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";s-- >0;)o+=a.charAt(Math.floor(Math.random()*a.length));return o},String.match=function(s,a){var o,c;return typeof s!="string"?!1:(typeof a=="string"&&(a={"=":a}),a=a||{},o=a["="]||a["*"]||a[">"]||a["<"],s===o?!0:c!==a["="]?!1:(o=a["*"]||a[">"],s.slice(0,(o||"").length)===o?!0:c!==a["*"]?!1:c!==a[">"]&&c!==a["<"]?s>=a[">"]&&s<=a["<"]:c!==a[">"]&&s>=a[">"]||c!==a["<"]&&s<=a["<"]))},String.hash=function(s,a){if(typeof s=="string"){if(a=a||0,!s.length)return a;for(var o=0,c=s.length,l;o<c;++o)l=s.charCodeAt(o),a=(a<<5)-a+l,a|=0;return a}};var r=Object.prototype.hasOwnProperty;Object.plain=function(s){return s?s instanceof Object&&s.constructor===Object||Object.prototype.toString.call(s).match(/^\[object (\w+)\]$/)[1]==="Object":!1},Object.empty=function(s,a){for(var o in s)if(r.call(s,o)&&(!a||a.indexOf(o)==-1))return!1;return!0},Object.keys=Object.keys||function(s){var a=[];for(var o in s)r.call(s,o)&&a.push(o);return a},(function(){var s,a=setTimeout,o=0,c=0,l=typeof setImmediate!=""+s&&setImmediate||(function(h,f){return typeof MessageChannel==""+s?a:((h=new MessageChannel).port1.onmessage=function(m){m.data==""&&f()},function(m){f=m,h.port2.postMessage("")})})(),u=a.check=a.check||typeof performance!=""+s&&performance||{now:function(){return+new Date}};a.hold=a.hold||9,a.poll=a.poll||function(h){if(a.hold>=u.now()-o&&c++<3333){h();return}l(function(){o=u.now(),h()},c=0)}})(),(function(){var s=setTimeout,a=s.turn=s.turn||function(f){o.push(f)==1&&c(h)},o=a.s=[],c=s.poll,l=0,u,h=function(){(u=o[l++])&&u(),(l==o.length||l==99)&&(o=a.s=o.slice(l),l=0),o.length&&c(h)}})(),(function(){var s,a=setTimeout,o=a.turn;(a.each=a.each||function(c,l,u,h){h=h||9,(function f(m,g,v){if(g=(m=(c||[]).splice(0,h)).length){for(var x=0;x<g&&s===(v=l(m[x]));x++);if(s===v){o(f);return}}u&&u(v)})()})()})()})(e,"./shim"),e(function(n){n.exports=function r(u,a,o){if(!u)return{to:r};var c,l=typeof a=="function",u=(this.tag||(this.tag={}))[u]||l&&(this.tag[u]={tag:u,to:r._={next:function(f){var m;(m=this.to)&&m.next(f)}}});if(l){var h={off:r.off||(r.off=function(){if(this.next===r._.next)return!0;this===this.the.last&&(this.the.last=this.back),this.to.back=this.back,this.next=r._.next,this.back.to=this.to,this.the.last===this.the&&delete this.on.tag[this.the.tag]}),to:r._,next:a,the:u,on:this,as:o};return(h.back=u.last||u).to=h,u.last=h}return(u=u.to)&&c!==a&&u.next(a),u}})(e,"./onto"),e(function(n){n.exports=function(r){return r===null||typeof r=="string"||typeof r=="boolean"||typeof r=="number"&&r!=1/0&&r!=-1/0&&r===r||!!r&&typeof r["#"]=="string"&&Object.keys(r).length===1&&r["#"]}})(e,"./valid"),e(function(n){e("./shim");function r(){var u=+new Date;return c<u?(a=0,c=u+r.drift):c=u+(a+=1)/o+r.drift}r.drift=0;var s=-1/0,a=0,o=999,c=s,l;r.is=function(u,h,f){var m=h&&u&&u._&&u._[">"]||f;if(m)return typeof(m=m[h])=="number"?m:s},r.ify=function(u,h,f,m,g){(u=u||{})._=u._||{},g&&(u._["#"]=g);var v=u._[">"]||(u._[">"]={});return l!==h&&h!=="_"&&(typeof f=="number"&&(v[h]=f),l!==m&&(u[h]=m)),u},n.exports=r})(e,"./state"),e(function(n){e("./shim");function r(s){var a={s:{}},o=a.s;s=s||{max:999,age:1e3*9},a.check=function(l){return o[l]?c(l):!1};var c=a.track=function(l){var u=o[l]||(o[l]={});return u.was=a.now=+new Date,a.to||(a.to=setTimeout(a.drop,s.age+9)),c.ed&&c.ed(l),u};return a.drop=function(l){a.to=null,a.now=+new Date;var u=Object.keys(o);console.STAT&&console.STAT(a.now,+new Date-a.now,"dup drop keys"),setTimeout.each(u,function(h){var f=o[h];f&&(l||s.age)>a.now-f.was||delete o[h]},0,99)},a}n.exports=r})(e,"./dup"),e(function(n){e("./onto"),n.exports=function(a,o){if(this.on){var c=(this.opt||{}).lack||9e3;if(typeof a!="function"){if(!a)return;var u=a["#"]||a,l=(this.tag||"")[u];return l?(o&&(l=this.on(u,o),clearTimeout(l.err),l.err=setTimeout(function(){l.off()},c)),!0):void 0}var u=o&&o["#"]||r(9);if(!a)return u;var h=this.on(u,a,o);return h.err=h.err||setTimeout(function(){h.off(),h.next({err:"Error: No ACK yet.",lack:!0})},c),u}};var r=String.random||function(){return Math.random().toString(36).slice(2)}})(e,"./ask"),e(function(n){function r(g){return g instanceof r?(this._={$:this}).$:this instanceof r?r.create(this._={$:this,opt:g}):new r(g)}r.is=function(g){return g instanceof r||g&&g._&&g===g._.$||!1},r.version=.202,r.chain=r.prototype,r.chain.toJSON=function(){},e("./shim"),r.valid=e("./valid"),r.state=e("./state"),r.on=e("./onto"),r.dup=e("./dup"),r.ask=e("./ask"),(function(){r.create=function(y){y.root=y.root||y,y.graph=y.graph||{},y.on=y.on||r.on,y.ask=y.ask||r.ask,y.dup=y.dup||r.dup();var P=y.$.opt(y.opt);return y.once||(y.on("in",g,y),y.on("out",g,y),y.on("put",d,y),r.on("create",y),y.on("create",y)),y.once=1,P};function g(y){if(y){if(y.out===g){this.to.next(y);return}var P=this,U=P.as,O=U.at||U,B=O.$,F=O.dup,G,$=y.DBG;if((G=y["#"])||(G=y["#"]=a(9)),!F.check(G)){if(F.track(G),G=y._,y._=typeof G=="function"?G:function(){},y.$&&y.$===(y.$._||"").$||(y.$=B),y["@"]&&!y.put&&p(y),!O.ask(y["@"],y))if($&&($.u=+new Date),y.put){v(y);return}else y.get&&r.on.get(y,B);$&&($.uc=+new Date),P.to.next(y),$&&($.ua=+new Date),!(y.nts||y.NTS)&&(y.out=g,O.on("out",y),$&&($.ue=+new Date))}}}function v(y){if(y){var P=y._||"",U=P.root=((P.$=y.$||"")._||"").root;if(y["@"]&&P.faith&&!P.miss){y.out=g,U.on("out",y);return}P.latch=U.hatch,P.match=U.hatch=[];var O=y.put,B=P.DBG=y.DBG,F=+new Date;if(I=I||F,!(O["#"]&&O["."])){B&&(B.p=F),P["#"]=y["#"],P.msg=y,P.all=0,P.stun=1;var G=Object.keys(O);console.STAT&&console.STAT(F,((B||P).pk=+new Date)-F,"put sort");var $=0,ee,re,de,Me,ke,Y,J;(function ue(Ae){if(ee!=$){if(ee=$,!(de=G[$])){console.STAT&&console.STAT(F,((B||P).pd=+new Date)-F,"put"),S(P);return}(Me=O[de])?(J=Me._)?de!==J["#"]?Y=A+T(de)+"soul not same.":(ke=J[">"])||(Y=A+T(de)+"no state."):Y=A+T(de)+"no meta.":Y=A+T(de)+"no node.",re=Object.keys(Me||{})}if(Y){y.err=P.err=Y,S(P);return}var ve=0,Re;for(Ae=Ae||0;Ae++<9&&(Re=re[ve++]);)if(Re!=="_"){var at=Me[Re],Ne=ke[Re];if(h===Ne){Y=A+T(Re)+"on"+T(de)+"no state.";break}if(!c(at)){Y=A+T(Re)+"on"+T(de)+"bad "+typeof at+T(at);break}x(at,Re,de,Ne,y),++M}if((re=re.slice(ve)).length){o(ue);return}++$,re=null,ue(Ae)})()}}}r.on.put=v;function x(y,P,U,O,B){var F=B._||"",G=F.root,$=G.graph,ee,re=$[U]||f,de=l(re,P,1),Me=re[P],ke=F.DBG;(ee=console.STAT)&&(!$[U]||!Me)&&(ee.has=(ee.has||0)+1);var Y=b();if(O>Y){setTimeout(function(){x(y,P,U,O,B)},(ee=O-Y)>D?D:ee),console.STAT&&console.STAT((ke||F).Hf=+new Date,ee,"future");return}if(!(O<de)&&!(!F.faith&&O===de&&(y===Me||E(y)<=E(Me))&&!F.miss)){F.stun++;var J=B["#"]+F.all++,ue={toString:function(){return J},_:F};ue.toJSON=ue.toString,G.dup.track(ue)["#"]=B["#"],ke&&(ke.ph=ke.ph||+new Date),G.on("put",{"#":ue,"@":B["@"],put:{"#":U,".":P,":":y,">":O},ok:B.ok,_:F})}}function d(y){var P;(P=(y._||"").DBG)&&(P.pa=+new Date,P.pm=P.pm||+new Date);var U=this,O=U.as,B=O.graph,F=y._,G=y.put,$=G["#"],ee=G["."],re=G[":"],de=G[">"];y["#"];var Me;(Me=F.msg)&&(Me=Me.put)&&(Me=Me[$])&&u(Me,ee,de,re,$),B[$]=u(B[$],ee,de,re,$),(Me=(O.next||"")[$])&&Me.on("in",y),S(F),U.to.next(y)}function S(y,P){var U;if(!y.stop&&!(!y.err&&0<--y.stun)&&(y.stop=1,!!(U=y.root))){var O=y.match;O.end=1,O===U.hatch&&(!(O=y.latch)||O.end?delete U.hatch:U.hatch=O),y.hatch&&y.hatch(),setTimeout.each(y.match,function(B){B&&B()}),!(!(P=y.msg)||y.err||P.err)&&(P.out=g,y.root.on("out",P),C())}}function p(y){var P=y["@"]||"",U;if(!(U=P._)){var O=(O=y.$)&&(O=O._)&&(O=O.root)&&(O=O.dup);if(!(O=O.check(P)))return;y["@"]=O["#"]||y["@"];return}U.acks=(U.acks||0)+1,(U.err=y.err)&&(y["@"]=U["#"],S(U)),U.ok=y.ok||U.ok,!U.stop&&!U.crack&&(U.crack=U.match&&U.match.push(function(){_(U)})),_(U)}function _(y){!y||!y.root||y.stun||y.acks!==y.all||y.root.on("in",{"@":y["#"],err:y.err,ok:y.err?h:y.ok||{"":1}})}var A="Error: Invalid graph!",T=function(y){return" '"+(""+y).slice(0,9)+"...' "},E=JSON.stringify,D=2147483647,b=r.state,M=0,I,C=function(){M>999&&M/-(I-(I=+new Date))>1&&(r.window&&console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."),C=function(){M=0})}})(),(function(){r.on.get=function(v,x){var d=x._,S=v.get,p=S["#"],_=d.graph[p],A=S["."],T=d.next||(d.next={}),E=T[p],D=v._||{},b=D.DBG=v.DBG;if(b&&(b.g=+new Date),!_)return d.on("get",v);if(A){if((typeof A!="string"||h===_[A])&&!((E||"").next||"")[A]){d.on("get",v);return}_=u({},A,l(_,A),_[A],p)}_&&g(v,_),d.on("get",v)};function g(v,x){var d=+new Date,S=v._||{},p=S.DBG=v.DBG,_=v["#"],A=a(9),T=Object.keys(x||"").sort(),E=((x||"")._||"")["#"];T.length;var D=v.$._.root,b=x===D.graph[E];console.STAT&&console.STAT(d,((p||S).gk=+new Date)-d,"got keys"),x&&(function M(){d=+new Date;for(var I=0,C,y={},P;I<9&&(C=T[I++]);)u(y,C,l(x,C),x[C],E);T=T.slice(I),(P={})[E]=y,y=P;var U;b&&(U=function(){},U.ram=U.faith=!0),P=T.length,console.STAT&&console.STAT(d,-(d-(d=+new Date)),"got copied some"),p&&(p.ga=+new Date),D.on("in",{"@":_,"#":A,put:y,"%":P?A=a(9):h,$:D.$,_:U,DBG:p,FOO:1}),console.STAT&&console.STAT(d,+new Date-d,"got in"),P&&setTimeout.turn(M)})(),x||D.on("in",{"@":v["#"]})}r.on.get.ack=g})(),(function(){r.chain.opt=function(g){g=g||{};var v=this,x=v._,d=g.peers||g;return Object.plain(g)||(g={}),Object.plain(x.opt)||(x.opt=g),typeof d=="string"&&(d=[d]),Object.plain(x.opt.peers)||(x.opt.peers={}),d instanceof Array&&(g.peers={},d.forEach(function(S){var p={};p.id=p.url=S,g.peers[S]=x.opt.peers[S]=x.opt.peers[S]||p})),s(g,function S(p){var _=this[p];if(this&&this.hasOwnProperty(p)||typeof _=="string"||Object.empty(_)){this[p]=_;return}_&&_.constructor!==Object&&!(_ instanceof Array)||s(_,S)}),x.opt.from=g,r.on("opt",x),x.opt.uuid=x.opt.uuid||function(p){return r.state().toString(36).replace(".","")+String.random(p||12)},v}})();var s=function(g,v){Object.keys(g).forEach(v,g)},a=String.random,o=setTimeout.turn,c=r.valid,l=r.state.is,u=r.state.ify,h,f={},m;r.log=function(){return!r.log.off&&m.log.apply(m,arguments),[].slice.call(arguments).join(" ")},r.log.once=function(g,v,x){return(x=r.log.once)[g]=x[g]||0,x[g]++||r.log(v)},typeof window<"u"&&((window.GUN=window.Gun=r).window=window);try{typeof t<"u"&&(t.exports=r)}catch{}n.exports=r,(r.window||{}).console=(r.window||{}).console||{log:function(){}},(m=console).only=function(g,v){return m.only.i&&g===m.only.i&&m.only.i++&&(m.log.apply(m,arguments)||v)},r.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")})(e,"./root"),e(function(n){var r=e("./root");r.chain.back=function(o,c){var l;if(o=o||1,o===-1||o===1/0)return this._.root.$;if(o===1)return(this._.back||this._).$;var u=this,h=u._;if(typeof o=="string"&&(o=o.split(".")),o instanceof Array){var f=0,m=o.length,l=h;for(f;f<m;f++)l=(l||s)[o[f]];return a!==l?c?u:l:(l=h.back)?l.$.back(o,c):void 0}if(typeof o=="function"){for(var g,l={back:h};(l=l.back)&&a===(g=o(l,c)););return g}return typeof o=="number"?(h.back||h).$.back(o-1):this};var s={},a})(e,"./back"),e(function(n){var r=e("./root");r.chain.chain=function(S){var p=this,_=p._,A=new(S||p).constructor(p),T=A._,E;return T.root=E=_.root,T.id=++E.once,T.back=p._,T.on=r.on,T.on("in",r.on.in,T),T.on("out",r.on.out,T),A};function s(S){var p,_=this.as,A=_.back,T=_.root,E;if(S.$||(S.$=_.$),this.to.next(S),_.err){_.on("in",{put:_.put=h,$:_.$});return}if(p=S.get){if(T.pass&&(T.pass[_.id]=_),_.lex&&Object.keys(_.lex).forEach(function(D){E[D]=_.lex[D]},E=S.get=S.get||{}),p["#"]||_.soul){if(p["#"]=p["#"]||_.soul,S["#"]||(S["#"]=f(9)),A=T.$.get(p["#"])._,p=p["."]){if(g(A.put,p)&&(E=A.ask&&A.ask[p],(A.ask||(A.ask={}))[p]=A.$.get(p)._,A.on("in",{get:p,put:{"#":A.soul,".":p,":":A.put[p],">":x(T.graph[A.soul],p)}}),E))return}else{if(E=A.ask&&A.ask[""],(A.ask||(A.ask={}))[""]=A,h!==A.put&&(A.on("in",A),E))return;S.$=A.$}return T.ask(l,S),T.on("in",S)}if(p["."])return _.get?(S={get:{".":_.get},$:_.$},(A.ask||(A.ask={}))[_.get]=S.$._,A.on("out",S)):(S={get:_.lex?S.get:{},$:_.$},A.on("out",S));if((_.ask||(_.ask={}))[""]=_,_.get)return p["."]=_.get,(A.ask||(A.ask={}))[_.get]=S.$._,A.on("out",S)}return A.on("out",S)}r.on.out=s;function a(S,p){p=p||this.as;var _=p.root,A=S.$||(S.$=p.$),T=(A||"")._||u,E=S.put||"",D=E["#"],b=E["."],M=h!==E["="]?E["="]:E[":"],I=E[">"]||-1/0,C;if(h!==S.put&&(h===E["#"]||h===E["."]||h===E[":"]&&h===E["="]||h===E[">"])){if(!m(E)){if(!(D=((E||"")._||"")["#"])){console.log("chain not yet supported for",E,"...",S,p);return}return A=p.root.$.get(D),setTimeout.each(Object.keys(E).sort(),function(y){y=="_"||h===(I=x(E,y))||p.on("in",{$:A,put:{"#":D,".":y,"=":E[y],">":I},VIA:S})})}p.on("in",{$:T.back.$,put:{"#":D=T.back.soul,".":b=T.has||T.get,"=":E,">":x(T.back.put,b)},via:S});return}(S.seen||"")[p.id]||((S.seen||(S.seen=function(){}))[p.id]=p,p!==T&&(Object.keys(S).forEach(function(y){E[y]=S[y]},E={}),E.get=p.get||E.get,!p.soul&&!p.has?E.$$$=E.$$$||p.$:T.soul&&(E.$=p.$,E.$$=E.$$||T.$),S=E),c(S,p),(p.soul||S.$$)&&I>=x(_.graph[D],b)&&((E=_.$.get(D)._).put=d(E.put,b,I,M,D)),!T.soul&&I>=x(_.graph[D],b)&&(C=(_.$.get(D)._.next||"")[b])&&(C.put=M,typeof(E=m(M))=="string"&&(C.put=_.$.get(E)._.put||M)),this.to&&this.to.next(S),p.any&&setTimeout.each(Object.keys(p.any),function(y){(y=p.any[y])&&y(S)},0,99),p.echo&&setTimeout.each(Object.keys(p.echo),function(y){(y=p.echo[y])&&y.on("in",S)},0,99),((S.$$||"")._||T).soul&&(C=p.next)&&(C=C[b])&&(E={},Object.keys(S).forEach(function(y){E[y]=S[y]}),E.$=(S.$$||S.$).get(E.get=b),delete E.$$,delete E.$$$,C.on("in",E)),o(S,p))}r.on.in=a;function o(S,p){if(p=p||this.as||S.$._,!(S.$$&&this!==r.on)&&!(!S.put||p.soul)){var _=S.put||"",A=_["="]||_[":"],b,T=p.root,E=T.$.get(_["#"]).get(_["."])._;if(typeof(A=m(A))!="string"){this===r.on&&((E.echo||(E.echo={}))[p.id]=p);return}if(!((E.echo||(E.echo={}))[p.id]&&!(T.pass||"")[p.id])){if(b=T.pass){if(b[A+p.id])return;b[A+p.id]=1}(E.echo||(E.echo={}))[p.id]=p,p.has&&(p.link=A);var D=T.$.get(E.link=A)._;(D.echo||(D.echo={}))[E.id]=E;var b=p.ask||"";(b[""]||p.lex)&&D.on("out",{get:{"#":A}}),setTimeout.each(Object.keys(b),function(M,I){!M||!(I=b[M])||I.on("out",{get:{"#":A,".":M}})},0,99)}}}r.on.link=o;function c(S,p){var _=S.put||"",A=h!==_["="]?_["="]:_[":"],T=p.root,E,D;if(h===A){if(p.soul&&h!==p.put||(D=(S.$$||S.$||"")._||"",S["@"]&&(h!==D.put||h!==p.put)))return;(E=p.link||S.linked)&&delete(T.$.get(E)._.echo||"")[p.id],p.has&&(p.link=null),p.put=h,setTimeout.each(Object.keys(p.next||""),function(b,M){(M=p.next[b])&&(E&&delete(T.$.get(E).get(b)._.echo||"")[M.id],M.on("in",{get:b,put:h,$:M.$}))},0,99);return}p.soul||S.$$||(E=m(A),D=S.$._||"",!((E===D.link||p.has&&!D.link)&&!((T.pass||"")[p.id]&&typeof E!="string"))&&(delete(D.echo||"")[p.id],c({get:p.get,put:h,$:S.$,linked:S.linked=S.linked||D.link},p)))}r.on.unlink=c;function l(S,p){var _=this.as,A=_.$._;A.root;var T=_.get||"",E=(S.put||"")[T["#"]]||"";if(!S.put||typeof T["."]=="string"&&h===E[T["."]]){if(h!==A.put||!A.soul&&!A.has)return;A.ack=(A.ack||0)+1,A.on("in",{get:A.get,put:A.put=h,$:A.$,"@":S["@"]});return}(S._||{}).miss=1,r.on.put(S)}var u={},h,f=String.random,m=r.valid,g=function(S,p){return S&&Object.prototype.hasOwnProperty.call(S,p)},v=r.state,x=v.is,d=v.ify})(e,"./chain"),e(function(n){var r=e("./root");r.chain.get=function(h,f,m){var g,v;if(typeof h=="string"){if(h.length==0)return(g=this.chain())._.err={err:r.log("0 length key!",h)},f&&f.call(g,g._.err),g;var x=this,d=x._,S=d.next||c;(g=S[h])||(g=h&&s(h,x)),g=g&&g.$}else if(typeof h=="function"){let b=function(M,I,C){if(!b.stun&&!((F=_.pass)&&!F[A])){var y=M.$._,P=(M.$$||"")._,U=(P||y).put,O=!y.has&&!y.soul,B={},F;if((O||u===U)&&(U=u===((F=M.put)||"")["="]?u===(F||"")[":"]?F:F[":"]:F["="]),typeof(F=r.valid(U))=="string"&&(U=u===(F=_.$.get(F)._.put)?p.not?u:U:F),!(p.not&&u===U)){if(u===p.stun){if((F=_.stun)&&F.on&&(d.$.back(function(G){if(F.on(""+G.id,B={}),(B.run||0)<b.id)return B}),!B.run&&F.on(""+y.id,B={}),!B.run&&P&&F.on(""+P.id,B={}),b.id>B.run&&((!B.stun||B.stun.end)&&(B.stun=F.on("stun"),B.stun=B.stun&&B.stun.last),B.stun&&!B.stun.end))){(B.stun.add||(B.stun.add={}))[A]=function(){b(M,I,1)};return}if(u===U&&(C=0),(F=_.hatch)&&!F.end&&u===p.hatch&&!C){if(T[y.$._.id])return;T[y.$._.id]=1,F.push(function(){b(M,I,1)});return}T={}}if(_.pass){if(_.pass[A+y.id])return;_.pass[A+y.id]=1}if(p.on){p.ok.call(y.$,U,y.get,M,I||b);return}if(p.v2020){p.ok(M,I||b);return}Object.keys(M).forEach(function(G){F[G]=M[G]},F={}),M=F,M.put=U,p.ok.call(p.as,M,I||b)}}};var E=b;if(f===!0)return a(this,h,f,m),this;g=this;var d=g._,p=f||{},_=d.root,A;p.at=d,p.ok=h;var T={};return b.at=d,(d.any||(d.any={}))[A=String.random(7)]=b,b.off=function(){b.stun=1,d.any&&delete d.any[A]},b.rid=o,b.id=p.run||++_.once,v=_.pass,(_.pass={})[A]=1,p.out=p.out||{get:{}},d.on("out",p.out),_.pass=v,g}else{if(typeof h=="number")return this.get(""+h,f,m);if(typeof(v=l(h))=="string")return this.get(v,f,m);(v=this.get.next)&&(g=v(this,h))}return g?(f&&typeof f=="function"&&g.get(f,m),g):((g=this.chain())._.err={err:r.log("Invalid get request!",h)},f&&f.call(g,g._.err),g)};function s(h,f){var m=f._,g=m.next,v=f.chain(),x=v._;return g||(g=m.next={}),g[x.get=h]=x,f===m.root.$?x.soul=h:(m.soul||m.has)&&(x.has=h),x}function a(h,f,m,g){var v=h._,x=0,d;return(d=v.soul||v.link)?f(d,g,v):v.jam?v.jam.push([f,g]):(v.jam=[[f,g]],h.get(function(p,_){if(!(u===p.put&&!v.root.opt.super&&(d=Object.keys(v.root.opt.peers).length)&&++x<=d)){_.rid(p);var A=(A=p.$)&&A._||{},T=0,E;for(d=v.jam,delete v.jam;E=d[T++];){var D=E[0];E=E[1],D&&D(A.link||A.soul||r.valid(p.put)||((p.put||{})._||{})["#"],E,p,_)}}},{out:{get:{".":!0}}}),h)}function o(h){var f=this.at||this.on;if(!h||f.soul||f.has)return this.off();if(h=(h=(h=h.$||h)._||h).id){f.map;var m;if((m=this.seen||(this.seen={}))[h])return!0;m[h]=!0}}var c={},l=r.valid,u})(e,"./get"),e(function(n){var r=e("./root");r.chain.put=function(g,v,x){var d=this,S=d._,p=S.root;x=x||{},x.root=S.root,x.run||(x.run=p.once),s(x,S.id),x.ack=x.ack||v,x.via=x.via||d,x.data=x.data||g,x.soul||(x.soul=S.soul||typeof v=="string"&&v);var _=x.state=x.state||r.state();return typeof g=="function"?(g(function(A){x.data=A,d.put(l,l,x)}),d):x.soul?(x.$=p.$.get(x.soul),x.todo=[{it:x.data,ref:x.$}],x.turn=x.turn||h,x.ran=x.ran||a,(function A(){var T=x.todo,E=T.pop(),D=E.it;E.ref&&E.ref._.id;var b,M,I,C,y;if(s(x,E.ref),(C=E.todo)&&(M=C.pop(),D=D[M],C.length&&T.push(E)),M&&(T.path||(T.path=[])).push(M),!(b=f(D))&&!(y=r.is(D))){if(!Object.plain(D)){a.err(x,"Invalid data: "+c(D)+" at "+(x.via.back(function(F){F.get&&C.push(F.get)},C=[])||C.join("."))+"."+(T.path||[]).join("."));return}for(var P=x.seen||(x.seen=[]),U=P.length;U--;)if(D===(C=P[U]).it){b=D=C.link;break}}if(M&&b)E.node=m(E.node,M,_,D);else{let F=function(G,$){var ee=I.link["#"];$&&($.off(),$.rid(G));var re=ee||G.soul||(C=(G.$$||G.$)._||"").soul||C.link||((C=C.put||"")._||"")["#"]||C["#"]||((C=G.put||"")&&G.$$?C["#"]:(C["="]||C[":"]||"")["#"]);if(!ee&&s(x,G.$),!re&&!E.link["#"]){(E.wait||(E.wait=[])).push(function(){F(G,$)});return}re||(re=[],(G.$$||G.$).back(function(de){if(C=de.soul||de.link)return re.push(C);re.push(de.get)}),re=re.reverse().join("/")),I.link["#"]=re,!y&&(((x.graph||(x.graph={}))[re]=I.node||(I.node={_:{}}))._["#"]=re),delete x.wait[O],I.wait&&setTimeout.each(I.wait,function(de){de&&de()}),x.ran(x)};var B=F;if(!x.seen){a.err(x,"Data at root of graph must be a node (an object).");return}x.seen.push(I={it:D,link:{},todo:y?[]:Object.keys(D).sort().reverse(),path:(T.path||[]).slice(),up:E}),E.node=m(E.node,M,_,I.link),!y&&I.todo.length&&T.push(I);var O=x.seen.length;(x.wait||(x.wait={}))[O]="",C=(I.ref=y?D:M?E.ref.get(M):E.ref)._,(C=D&&(D._||"")["#"]||C.soul||C.link)?F({soul:C}):I.ref.get(F,{run:x.run,v2020:1,out:{get:{".":" "}}})}if(!T.length)return x.ran(x);x.turn(A)})(),d):(o(x),d)};function s(g,v){if(v){v=(v._||"").id||v;var x=g.root.stun||(g.root.stun={on:r.on}),d={},S;g.stun||(g.stun=x.on("stun",function(){})),(S=x.on(""+v))&&S.the.last.next(d),!(d.run>=g.run)&&x.on(""+v,function(p){if(g.stun.end){this.off(),this.to.next(p);return}p.run=p.run||g.run,p.stun=p.stun||g.stun})}}function a(g){if(g.err){a.end(g.stun,g.root);return}if(!(g.todo.length||g.end||!Object.empty(g.wait))){g.end=1;var v=g.$.back(-1)._,x=v.root,d=v.ask(function(A){x.on("ack",A),A.err&&!A.lack&&r.log(A),++S>(g.acks||0)&&this.off(),g.ack&&g.ack(A,this)},g.opt),S=0,p=g.stun,_;(_=function(){p&&(a.end(p,x),setTimeout.each(Object.keys(p=p.add||""),function(A){(A=p[A])&&A()}))}).hatch=_,g.ack&&!g.ok&&(g.ok=g.acks||9),g.via._.on("out",{put:g.out=g.graph,ok:g.ok&&{"@":g.ok+1},opt:g.opt,"#":d,_})}}a.end=function(g,v){g.end=u,g.the.to===g&&g===g.the.last&&delete v.stun,g.off()},a.err=function(g,v){(g.ack||u).call(g,g.out={err:g.err=r.log(v)}),g.ran(g)};function o(g){var v=g.via._,x;g.via=g.via.back(function(d){if(d.soul||!d.get)return d.$;x=g.data,(g.data={})[d.get]=x}),(!g.via||!g.via._.soul)&&(g.via=v.root.$.get(((g.data||"")._||"")["#"]||v.$.back("opt.uuid")())),g.via.put(g.data,g.ack,g)}function c(g,v){return g&&(v=g.constructor)&&v.name||typeof g}var l,u=function(){},h=setTimeout.turn,f=r.valid,m=r.state.ify})(e,"./put"),e(function(n){var r=e("./root");e("./chain"),e("./back"),e("./put"),e("./get"),n.exports=r})(e,"./index"),e(function(n){var r=e("./index");r.chain.on=function(o,c,l,u){var h=this,f=h._;f.root;var m;if(typeof o=="string")return c?(m=f.on(o,c,l||f,u),l&&l.$&&(l.subs||(l.subs=[])).push(m),h):f.on(o);var g=c;return(g=g===!0?{change:!0}:g||{}).not=1,g.on=1,h.get(o,g),h},r.chain.once=function(o,c){if(c=c||{},!o)return s(this);var l=this,u=l._,h=u.root;u.put;var f=String.random(7),m;return l.get(function(g,v,x,d){var S=this,p=S._,_=p.one||(p.one={});if(d.stun||_[f]==="")return;if((m=r.valid(g))===!0){A();return}if(typeof m=="string")return;clearTimeout((u.one||"")[f]),clearTimeout(_[f]),_[f]=setTimeout(A,c.wait||99);function A(T){if(!p.has&&!p.soul&&(p={put:g,get:v}),a===(m=p.put)&&(m=((x.$$||"")._||"").put),typeof r.valid(m)=="string"&&(m=h.$.get(m)._.put,m===a&&!T)){_[f]=setTimeout(function(){A(1)},c.wait||99);return}d.stun||_[f]!==""&&(_[f]="",(u.soul||u.has)&&d.off(),o.call(S,m,p.get),clearTimeout(_[f]))}},{on:1}),l};function s(o,c,l){return r.log.once("valonce","Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),(l=o.chain())._.nix=o.once(function(u,h){l._.on("in",this._)}),l._.lex=o._.lex,l}r.chain.off=function(){var o=this,c=o._,l,u=c.back;if(u)return c.ack=0,(l=u.next)&&l[c.get]&&delete l[c.get],(l=u.any)&&(delete u.any,u.any={}),(l=u.ask)&&delete l[c.get],(l=u.put)&&delete l[c.get],(l=c.soul)&&delete u.root.graph[l],(l=c.map)&&Object.keys(l).forEach(function(h,f){f=l[h],f.link&&u.root.$.get(f.link).off()}),(l=c.next)&&Object.keys(l).forEach(function(h,f){f=l[h],f.$.off()}),c.on("off",{}),o};var a})(e,"./on"),e(function(n){var r=e("./index"),s=r.chain.get.next;r.chain.get.next=function(l,u){var h;return Object.plain(u)?(h=((h=u["#"])||"")["="]||h)?l.get(h):((h=l.chain()._).lex=u,l.on("in",function(f){String.match(f.get||(f.put||"")["."],u["."]||u["#"]||u)&&h.on("in",f),this.to.next(f)}),h.$):(s||o)(l,u)},r.chain.map=function(l,u,h){var f=this,m=f._,g,v;return Object.plain(l)&&(g=l["."]?l:{".":l},l=c),l?(r.log.once("mapfn","Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."),v=f.chain(),f.map().on(function(x,d,S,p){var _=(l||o).call(this,x,d,S,p);if(c!==_){if(x===_)return v._.on("in",S);if(r.is(_))return v._.on("in",_._);var A={};Object.keys(S.put).forEach(function(T){A[T]=S.put[T]},A),A["="]=_,v._.on("in",{get:d,put:A})}}),v):((v=m.each)||((m.each=v=f.chain())._.lex=g||v._.lex||m.lex,v._.nix=f.back("nix"),f.on("in",a,v._)),v)};function a(l){this.to.next(l);var u=this.as,h=l.$,f=h._,m=l.put,g;!f.soul&&!l.$$||(g=u.lex)&&!String.match(l.get||(m||"")["."],g["."]||g["#"]||g)||r.on.link(l,u)}var o=function(){},c})(e,"./map"),e(function(n){var r=e("./index");r.chain.set=function(s,a,o){var c=this,l=c.back(-1),u,h;return a=a||function(){},o=o||{},o.item=o.item||s,(u=((s||"")._||"")["#"])&&((s={})["#"]=u),typeof(h=r.valid(s))=="string"?c.get(u=h).put(s,a,o):r.is(s)?(c.put(function(f){s.get(function(m,g,v){if(!m)return a.call(c,{err:r.log('Only a node can be linked! Not "'+v.put+'"!')});(h={})[m]={"#":m},f(h)},!0)}),s):(Object.plain(s)&&(s=l.get(u=c.back("opt.uuid")()).put(s)),c.get(u||l.back("opt.uuid")(7)).put(s,a,o))}})(e,"./set"),e(function(n){e("./shim");var r=function(){},s=JSON.parseAsync||function(l,u,h){var f,m=+new Date;try{u(f,JSON.parse(l,h),a.sucks(+new Date-m))}catch(g){u(g)}},a=JSON.stringifyAsync||function(l,u,h,f){var m,g=+new Date;try{u(m,JSON.stringify(l,h,f),a.sucks(+new Date-g))}catch(v){u(v)}};a.sucks=function(l){l>99&&(console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."),a.sucks=r)};function o(l){var u=function(){},h=l.opt||{};h.log=h.log||console.log,h.gap=h.gap||h.wait||0,h.max=h.max||(h.memory?h.memory*999*999:3e8)*.3,h.pack=h.pack||h.max*.01*.01,h.puff=h.puff||9;var f=setTimeout.turn||setTimeout,m=l.dup,g=m.check,v=m.track,x=u.hear=function(p,_){if(p){if(h.max<=p.length)return u.say({dam:"!",err:"Message too big!"},_);u===this&&(x.d+=p.length||0,++x.c);var A=_.SH=+new Date,T=p[0],E;if(T==="["){s(p,function(D,b){if(D||!b)return u.say({dam:"!",err:"DAM JSON parse error."},_);console.STAT&&console.STAT(+new Date,b.length,"# on hear batch");var M=h.puff;(function I(){for(var C=+new Date,y=0,P;y<M&&(P=b[y++]);)u.hear(P,_);b=b.slice(y),console.STAT&&console.STAT(C,+new Date-C,"hear loop"),d(_),b.length&&f(I,0)})()}),p="";return}if(T==="{"||(p["#"]||Object.plain(p))&&(E=p)){if(E)return x.one(E,_,A);s(p,function(D,b){if(D||!b)return u.say({dam:"!",err:"DAM JSON parse error."},_);x.one(b,_,A)});return}}};x.one=function(p,_,I){var T,E,D,b,M;if(p.DBG&&(p.DBG=M={DBG:p.DBG}),M&&(M.h=I),M&&(M.hp=+new Date),(T=p["#"])||(T=p["#"]=String.random(9)),!(D=g(T))&&(E=p["##"],!(E&&(D=p["@"]||p.get&&T)&&m.check(b=D+E)))){if((p._=function(){}).via=u.leap=_,(D=p["><"])&&typeof D=="string"&&D.slice(0,99).split(",").forEach(function(C){this[C]=1},p._.yo={}),D=p.dam){(D=u.hear[D])&&D(p,_,l),v(T);return}(D=p.ok)&&(p._.near=D["/"]);var I=+new Date;M&&(M.is=I),_.SI=T,v.ed=function(C){T===C&&(v.ed=0,(C=m.s[T])&&(C.via=_,p.get&&(C.it=p)))},l.on("in",u.last=p),M&&(M.hd=+new Date),console.STAT&&console.STAT(I,+new Date-I,p.get?"msg get":p.put?"msg put":"msg"),v(T),b&&v(b),u.leap=u.last=null}},x.c=x.d=0,(function(){var p=0,_;u.hash=function(E,D){var b,M,I,C=+new Date;a(E.put,function y(P,U){var O=(M||(M=I=U||"")).slice(0,32768);if(b=String.hash(O,b),M=M.slice(32768),M){f(y,0);return}console.STAT&&console.STAT(C,+new Date-C,"say json+hash"),E._.$put=I,E["##"]=b,u.say(E,D),delete E._.$put},A)};function A(E,D){var b;return D instanceof Object?(Object.keys(D).sort().forEach(T,{to:b={},on:D}),b):D}function T(E){this.to[E]=this.on[E]}u.say=function(E,D){var b;if((b=this)&&(b=b.to)&&b.next&&b.next(E),!E)return!1;var M,I,C,y=E["@"],P=E._||(E._=function(){}),U=E.DBG,O=+new Date;if(P.y=P.y||O,D||U&&(U.y=O),(M=E["#"])||(M=E["#"]=String.random(9)),!_&&v(M),!(I=E["##"])&&c!==E.put&&!P.via&&y){u.hash(E,D);return}if(!D&&y&&(D=(b=m.s[y])&&(b.via||(b=b.it)&&(b=b._)&&b.via)||(b=u.last)&&y===b["#"]&&u.leap),!D&&y)return m.s[y]?void 0:(console.STAT&&console.STAT(+new Date,++p,"total no peer to ack to"),!1);if(y&&!E.put&&!I&&((m.s[y]||"").it||"")["##"])return!1;if(!D&&u.way)return u.way(E);if(U&&(U.yh=+new Date),!(C=P.raw)){u.raw(E,D);return}if(U&&(U.yr=+new Date),!D||!D.id){if(!Object.plain(D||h.peers))return!1;var O=+new Date;h.puff;var B=h.peers,F=Object.keys(D||h.peers||{});console.STAT&&console.STAT(O,+new Date-O,"peer keys"),(function ee(){var re=+new Date;_=1;var de=P.raw;P.raw=C;for(var Me=0,ke;Me<9&&(ke=(F||"")[Me++]);)(ke=B[ke]||(D||"")[ke])&&u.say(E,ke);P.raw=de,_=0,F=F.slice(Me),console.STAT&&console.STAT(re,+new Date-re,"say loop"),F.length&&(f(ee,0),y&&v(y))})();return}if(!D.wire&&u.wire&&u.wire(D),M!==D.last){if(D.last=M,D===P.via||(b=P.yo)&&(b[D.url]||b[D.pid]||b[D.id]))return!1;if(console.STAT&&console.STAT(O,((U||P).yp=+new Date)-(P.y||O),"say prep"),!_&&y&&v(y),D.batch){if(D.tail=(b=D.tail||0)+C.length,D.tail<=h.pack){D.batch+=(b?",":"")+C;return}d(D)}D.batch="[";var G=+new Date;setTimeout(function(){console.STAT&&console.STAT(G,+new Date-G,"0ms TO"),d(D)},h.gap),S(C,D),console.STAT&&y===D.SI&&console.STAT(O,+new Date-D.SH,"say ack")}},u.say.c=u.say.d=0,u.raw=function(E,D){if(!E)return"";var b=E._||{},M,I;if(I=b.raw)return I;if(typeof E=="string")return E;var C=E["##"],y=E["@"];if(C&&y){if(!b.via&&g(y+C))return!1;if(I=(m.s[y]||"").it){if(C===I["##"])return!1;I["##"]||(I["##"]=C)}}if(!E.dam&&!E["@"]){var P=0,U=[];I=h.peers;for(var O in I){var B=I[O];if(U.push(B.url||B.pid||B.id),++P>6)break}P>1&&(E["><"]=U.join())}if(E.put&&(I=E.ok)&&(E.ok={"@":(I["@"]||1)-1,"/":I["/"]==E._.near?u.near:I["/"]}),M=b.$put){I={},Object.keys(E).forEach(function(G){I[G]=E[G]}),I.put=":])([:",a(I,function(G,$){if(!G){var ee=+new Date;I=$.indexOf('"put":":])([:"'),F(c,$=$.slice(0,I+6)+M+$.slice(I+14)),console.STAT&&console.STAT(ee,+new Date-ee,"say slice")}});return}a(E,F);function F(G,$){G||(b.raw=$,u.say(E,D))}}})();function d(p){var _=p.batch,A=typeof _=="string";if(A&&(_+="]"),p.batch=p.tail=null,!!_&&!(A?3>_.length:!_.length)){if(!A)try{_=_.length===1?_[0]:JSON.stringify(_)}catch(T){return h.log("DAM JSON stringify error",T)}_&&S(_,p)}}function S(p,_){try{var A=_.wire;_.say?_.say(p):A.send&&A.send(p),u.say.d+=p.length||0,++u.say.c}catch{(_.queue=_.queue||[]).push(p)}}return u.near=0,u.hi=function(p){var _=p.wire,A;if(!_){u.wire(p.length&&{url:p,id:p}||p);return}p.id?h.peers[p.url||p.id]=p:(A=p.id=p.id||p.url||String.random(9),u.say({dam:"?",pid:l.opt.pid},h.peers[A]=p),delete m.s[p.last]),p.met||(u.near++,p.met=+new Date,l.on("hi",p)),A=p.queue,p.queue=[],setTimeout.each(A||[],function(T){S(T,p)},0,9)},u.bye=function(p){p.met&&--u.near,delete p.met,l.on("bye",p);var _=+new Date;_=_-(p.met||_),u.bye.time=((u.bye.time||_)+_)/2},u.hear["!"]=function(p,_){h.log("Error:",p.err)},u.hear["?"]=function(p,_){p.pid&&(_.pid||(_.pid=p.pid),p["@"])||(u.say({dam:"?",pid:h.pid,"@":p["#"]},_),delete m.s[_.last])},u.hear.mob=function(p,_){if(p.peers){var A=Object.keys(p.peers),T=A[Math.random()*A.length>>0];T&&(u.bye(_),u.hi(T))}},l.on("create",function(p){p.opt.pid=p.opt.pid||String.random(9),this.to.next(p),p.on("out",u.say)}),l.on("bye",function(p,_){p=h.peers[p.id||p]||p,this.to.next(p),p.bye?p.bye():(_=p.wire)&&_.close&&_.close(),delete h.peers[p.id],p.wire=null}),l.on("bye",function(p,_){this.to.next(p),(_=console.STAT)&&(_.peers=u.near),(_=p.url)&&setTimeout(function(){},h.lack||9e3)}),l.on("hi",function(p,_){if(this.to.next(p),(_=console.STAT)&&(_.peers=u.near),!h.super){var A=Object.keys(l.next||"");A.length>9999&&!console.SUBS&&console.log(console.SUBS="Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."),setTimeout.each(A,function(T){var E=l.next[T];if(h.super||(E.ask||"")[""]){u.say({get:{"#":T}},p);return}setTimeout.each(Object.keys(E.ask||""),function(D){D&&u.say({"##":String.hash((l.graph[T]||"")[D]),get:{"#":T,".":D}},p)})})}}),u}var c;try{n.exports=o}catch{}})(e,"./mesh"),e(function(n){var r=e("./index");r.Mesh=e("./mesh"),r.on("opt",function(a){if(this.to.next(a),a.once)return;var o=a.opt;if(o.WebSocket===!1)return;var c=r.window||{},l=o.WebSocket||c.WebSocket||c.webkitWebSocket||c.mozWebSocket;if(!l)return;o.WebSocket=l;var u=o.mesh=o.mesh||r.Mesh(a);u.wire||o.wire,u.wire=o.wire=h;function h(v){try{if(!v||!v.url)return d&&d(v);var x=v.url.replace(/^http/,"ws"),d=v.wire=new o.WebSocket(x);return d.onclose=function(){m(v),o.mesh.bye(v)},d.onerror=function(S){m(v)},d.onopen=function(){o.mesh.hi(v)},d.onmessage=function(S){S&&o.mesh.hear(S.data||S,v)},d}catch{o.mesh.bye(v)}}setTimeout(function(){!o.super&&a.on("out",{dam:"hi"})},1);var f=2*999;function m(v){clearTimeout(v.defer),o.peers[v.url]&&(g&&v.retry<=0||(v.retry=(v.retry||o.retry+1||60)-(-v.tried+(v.tried=+new Date)<f*4?1:0),v.defer=setTimeout(function x(){if(g&&g.hidden)return setTimeout(x,f);h(v)},f)))}var g=""+s!=typeof document&&document});var s})(e,"./websocket"),e(function(n){if(!(typeof Gun>"u")){var r=function(){},s;try{s=(Gun.window||r).localStorage}catch{}s||(Gun.log("Warning: No localStorage exists to persist data to!"),s={setItem:function(o,c){this[o]=c},removeItem:function(o){delete this[o]},getItem:function(o){return this[o]}});var a=JSON.stringifyAsync||function(o,c,l,u){var h;try{c(h,JSON.stringify(o,l,u))}catch(f){c(f)}};Gun.on("create",function o(c){this.to.next(c);var l=c.opt;c.graph;var u=[],h,f,m,g;if(l.localStorage===!1)return;l.prefix=l.file||"gun/";try{h=o[l.prefix]=o[l.prefix]||JSON.parse(m=s.getItem(l.prefix))||{}}catch{h=o[l.prefix]={}}m=(m||"").length,c.on("get",function(x){this.to.next(x);var d=x.get,S,p,_,A;!d||!(S=d["#"])||(p=h[S]||A,p&&(_=d["."])&&!Object.plain(_)&&(p=Gun.state.ify({},_,Gun.state.is(p,_),p[_],S)),Gun.on.get.ack(x,p))}),c.on("put",function(x){this.to.next(x);var d=x.put,S=d["#"],p=d["."],_=x["#"],A=x.ok||"";if((c.next||"")[S]){if(h[S]=Gun.state.ify(h[S],p,d[">"],d[":"],S),g&&m>4999880){c.on("in",{"@":_,err:"localStorage max!"});return}!x["@"]&&(!x._.via||Math.random()<A["@"]/A["/"])&&u.push(_),!f&&(f=setTimeout(v,9+m/333))}});function v(){if(!u.length&&((setTimeout.turn||"").s||"").length){setTimeout(v,99);return}var x=u;clearTimeout(f),f=!1,u=[],a(h,function(d,S){try{!d&&s.setItem(l.prefix,S)}catch(p){d=g=p||"localStorage failure"}d&&(Gun.log(d+" Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"),c.on("localStorage:error",{err:d,get:l.prefix,put:h})),m=S.length,setTimeout.each(x,function(p){c.on("in",{"@":p,err:d,ok:0})},0,99)})}})}})(e,"./localStorage")})(),(function(){var I;if(""+I!=typeof Gun){var e=function(C){console.warn("Warning! Deprecated internal utility will break in next version:",C)},t=Gun;t.fn=t.fn||{is:function(C){return e("fn"),!!C&&typeof C=="function"}},t.bi=t.bi||{is:function(C){return e("bi"),C instanceof Boolean||typeof C=="boolean"}},t.num=t.num||{is:function(C){return e("num"),!n(C)&&(C-parseFloat(C)+1>=0||C===1/0||C===-1/0)}},t.text=t.text||{is:function(C){return e("text"),typeof C=="string"}},t.text.ify=t.text.ify||function(C){return e("text.ify"),t.text.is(C)?C:typeof JSON<"u"?JSON.stringify(C):C&&C.toString?C.toString():C},t.text.random=t.text.random||function(C,y){e("text.random");var P="";for(C=C||24,y=y||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz";C>0;)P+=y.charAt(Math.floor(Math.random()*y.length)),C--;return P},t.text.match=t.text.match||function(C,y){var P,U;return e("text.match"),typeof C!="string"?!1:(typeof y=="string"&&(y={"=":y}),y=y||{},P=y["="]||y["*"]||y[">"]||y["<"],C===P?!0:U!==y["="]?!1:(P=y["*"]||y[">"]||y["<"],C.slice(0,(P||"").length)===P?!0:U!==y["*"]?!1:U!==y[">"]&&U!==y["<"]?C>=y[">"]&&C<=y["<"]:U!==y[">"]&&C>=y[">"]||U!==y["<"]&&C<=y["<"]))},t.text.hash=t.text.hash||function(C,y){if(e("text.hash"),typeof C=="string"){if(y=y||0,!C.length)return y;for(var P=0,U=C.length,O;P<U;++P)O=C.charCodeAt(P),y=(y<<5)-y+O,y|=0;return y}},t.list=t.list||{is:function(C){return e("list"),C instanceof Array}},t.list.slit=t.list.slit||Array.prototype.slice,t.list.sort=t.list.sort||function(C){return e("list.sort"),function(y,P){return!y||!P?0:(y=y[C],P=P[C],y<P?-1:y>P?1:0)}},t.list.map=t.list.map||function(C,y,P){return e("list.map"),b(C,y,P)},t.list.index=1,t.obj=t.boj||{is:function(C){return e("obj"),C?C instanceof Object&&C.constructor===Object||Object.prototype.toString.call(C).match(/^\[object (\w+)\]$/)[1]==="Object":!1}},t.obj.put=t.obj.put||function(C,y,P){return e("obj.put"),(C||{})[y]=P,C},t.obj.has=t.obj.has||function(C,y){return e("obj.has"),C&&Object.prototype.hasOwnProperty.call(C,y)},t.obj.del=t.obj.del||function(C,y){if(e("obj.del"),!!C)return C[y]=null,delete C[y],C},t.obj.as=t.obj.as||function(C,y,P,U){return e("obj.as"),C[y]=C[y]||(U===P?{}:P)},t.obj.ify=t.obj.ify||function(C){if(e("obj.ify"),_(C))return C;try{C=JSON.parse(C)}catch{C={}}return C},(function(){var C;function y(P,U){T(this,U)&&C!==this[U]||(this[U]=P)}t.obj.to=t.obj.to||function(P,U){return e("obj.to"),U=U||{},b(P,y,U),U}})(),t.obj.copy=t.obj.copy||function(C){return e("obj.copy"),C&&JSON.parse(JSON.stringify(C))},(function(){function C(y,P){var U=this.n,O;if(!(U&&(P===U||_(U)&&T(U,P)))&&O!==P)return!0}t.obj.empty=t.obj.empty||function(y,P){return e("obj.empty"),y?!b(y,C,{n:P}):!0}})(),(function(){function C(U,O){if(arguments.length===2){C.r=C.r||{},C.r[U]=O;return}C.r=C.r||[],C.r.push(U)}var y=Object.keys,P;Object.keys=Object.keys||function(U){return P(U,function(O,B,F){F(B)})},t.obj.map=P=t.obj.map||function(U,O,B){e("obj.map");var F,G=0,$,ee,re,de,Me=typeof O=="function";if(C.r=F,y&&_(U)&&(re=y(U),de=!0),B=B||{},n(U)||re)for($=(re||U).length;G<$;G++){var ke=G+t.list.index;if(Me){if(ee=de?O.call(B,U[re[G]],re[G],C):O.call(B,U[G],ke,C),ee!==F)return ee}else if(O===U[de?re[G]:G])return re?re[G]:ke}else for(G in U)if(Me){if(T(U,G)&&(ee=B?O.call(B,U[G],G,C):O(U[G],G,C),ee!==F))return ee}else if(O===U[G])return G;return Me?C.r:t.list.index?0:-1}})(),t.time=t.time||{},t.time.is=t.time.is||function(C){return e("time"),C?C instanceof Date:+new Date().getTime()};var S=t.fn.is,n=t.list.is,p=t.obj,_=p.is,T=p.has,b=p.map,r={};r.is=function(C){return e("val.is"),C===I?!1:C===null?!0:C===1/0?!1:o(C)||a(C)||g(C)?!0:r.link.is(C)||!1},r.link=r.rel={_:"#"},(function(){r.link.is=function(y){if(e("val.link.is"),y&&y[s]&&!y._&&_(y)){var P={};if(b(y,C,P),P.id)return P.id}return!1};function C(y,P){var U=this;if(U.id)return U.id=!1;if(P==s&&o(y))U.id=y;else return U.id=!1}})(),r.link.ify=function(C){return e("val.link.ify"),D({},s,C)},t.obj.has._=".";var s=r.link._,I,a=t.bi.is,g=t.num.is,o=t.text.is,p=t.obj,_=p.is,D=p.put,b=p.map;t.val=t.val||r;var c={_:"_"};c.soul=function(C,y){return e("node.soul"),C&&C._&&C._[y||h]},c.soul.ify=function(C,y){return e("node.soul.ify"),y=typeof y=="string"?{soul:y}:y||{},C=C||{},C._=C._||{},C._[h]=y.soul||C._[h]||u(),C},c.soul._=r.link._,(function(){c.is=function(y,P,U){e("node.is");var O;return _(y)&&(O=c.soul(y))?!b(y,C,{as:U,cb:P,s:O,n:y}):!1};function C(y,P){if(P!==c._){if(!r.is(y))return!0;this.cb&&this.cb.call(this.as,y,P,this.n,this.s)}}})(),(function(){c.ify=function(y,P,U){return e("node.ify"),P?typeof P=="string"?P={soul:P}:typeof P=="function"&&(P={map:P}):P={},P.map&&(P.node=P.map.call(U,y,I,P.node||{})),(P.node=c.soul.ify(P.node||{},P))&&b(y,C,{o:P,as:U}),P.node};function C(y,P){var U=this.o,O,B;if(U.map){O=U.map.call(this.as,y,""+P,U.node),B===O?A(U.node,P):U.node&&(U.node[P]=O);return}r.is(y)&&(U.node[P]=y)}})();var p=t.obj,_=p.is,A=p.del,b=p.map,l=t.text,u=l.random,h=c.soul._,I;t.node=t.node||c;var f=t.state;f.lex=function(){return e("state.lex"),f().toString(36).replace(".","")},f.to=function(C,y,P){e("state.to");var U=(C||{})[y];return _(U)&&(U=M(U)),f.ify(P,y,f.is(C,y),U,c.soul(C))},(function(){f.map=function(y,P,U){e("state.map");var O,B=_(B=y||P)?B:null;return y=S(y=y||P)?y:null,B&&!y?(P=g(P)?P:f(),B[x]=B[x]||{},b(B,C,{o:B,s:P}),B):(U=U||_(P)?P:O,P=g(P)?P:f(),function(F,G,$,ee){if(!y)return C.call({o:$,s:P},F,G),F;y.call(U||this||{},F,G,$,ee),!(T($,G)&&O===$[G])&&C.call({o:$,s:P},F,G)})};function C(y,P){x!==P&&f.ify(this.o,P,this.s)}})();var p=t.obj;p.as;var T=p.has,_=p.is,b=p.map,M=p.copy,m=t.num,g=m.is,v=t.fn,S=v.is,x=c._,I,d={};(function(){d.is=function(P,U,O,B){return e("graph.is"),!P||!_(P)||E(P)?!1:!b(P,C,{cb:U,fn:O,as:B})};function C(P,U){if(!P||U!==c.soul(P)||!c.is(P,this.fn,this.as))return!0;this.cb&&(y.n=P,y.as=this.as,this.cb.call(y.as,P,U,y))}function y(P){P&&c.is(y.n,P,y.as)}})(),(function(){d.ify=function(B,F,G){e("graph.ify");var $={path:[],obj:B};return F?typeof F=="string"?F={soul:F}:typeof F=="function"&&(F.map=F):F={},typeof G=="string"&&(F.soul=F.soul||G,G=I),F.soul&&($.link=r.link.ify(F.soul)),F.shell=(G||{}).shell,F.graph=F.graph||{},F.seen=F.seen||[],F.as=F.as||G,C(F,$),F.root=$.node,F.graph};function C(B,F){var G;return(G=O(B,F))?G:(F.env=B,F.soul=P,c.ify(F.obj,y,F)&&(F.link=F.link||r.link.ify(c.soul(F.node)),F.obj!==B.shell&&(B.graph[r.link.is(F.link)]=F.node)),F)}function y(B,F,G){var $=this,ee=$.env,re,de;if(c._===F&&T(B,r.link._))return G._;if(re=U(B,F,G,$,ee)){if(F||($.node=$.node||G||{},T(B,c._)&&c.soul(B)&&($.node._=M(B._)),$.node=c.soul.ify($.node,r.link.is($.link)),$.link=$.link||r.link.ify(c.soul($.node))),(de=ee.map)&&(de.call(ee.as||{},B,F,G,$),T(G,F))){if(B=G[F],I===B){A(G,F);return}if(!(re=U(B,F,G,$,ee)))return}if(!F)return $.node;if(re===!0)return B;if(de=C(ee,{obj:B,path:$.path.concat(F)}),!!de.node)return de.link}}function P(B){var F=this,G=r.link.is(F.link),$=F.env.graph;F.link=F.link||r.link.ify(B),F.link[r.link._]=B,F.node&&F.node[c._]&&(F.node[c._][r.link._]=B),T($,G)&&($[B]=$[G],A($,G))}function U(B,F,G,$,ee){var re;if(r.is(B))return!0;if(_(B))return 1;if(re=ee.invalid)return B=re.call(ee.as||{},B,F,G),U(B,F,G,$,ee);ee.err="Invalid value at '"+$.path.concat(F).join(".")+"'!",t.list.is(B)&&(ee.err+=" Use `.set(item)` instead of an Array.")}function O(B,F){for(var G=B.seen,$=G.length,ee;$--;)if(ee=G[$],F.obj===ee.obj)return ee;G.push(F)}})(),d.node=function(C){e("graph.node");var y=c.soul(C);if(y)return D({},y,C)},(function(){d.to=function(y,P,U){if(e("graph.to"),!!y){var O={};return U=U||{seen:{}},b(y[P],C,{obj:O,graph:y,opt:U}),O}};function C(y,P){var U,O;if(c._===P){if(E(y,r.link._))return;this.obj[P]=M(y);return}if(!(U=r.link.is(y))){this.obj[P]=y;return}if(O=this.opt.seen[U]){this.obj[P]=O;return}this.obj[P]=this.opt.seen[U]=d.to(this.graph,U,this.opt)}})();var S=t.fn.is,p=t.obj,_=p.is,A=p.del,T=p.has,E=p.empty,D=p.put,b=p.map,M=p.copy,I;t.graph=t.graph||d}})()})(ls)),ls.exports}var ma,il;function ug(){return il||(il=1,ma=lg()),ma}var hg=ug();const fg=Mu(hg);class dg{constructor(e){this.networkManager=e,this.players={},this.crystals=[{id:"blue-flag",team:"blue",x:-150,y:60,z:150,originalX:-150,originalY:60,originalZ:150,state:"home",carrierId:null},{id:"red-flag",team:"red",x:-150,y:60,z:-150,originalX:-150,originalY:60,originalZ:-150,state:"home",carrierId:null}],this.scores={red:0,blue:0},this.TEAMS=["red","blue"],this.potions=[{id:"speed-1",type:"speed",x:0,y:50,z:0,active:!0,respawnTime:1e4},{id:"shield-1",type:"shield",x:-60,y:40,z:60,active:!0,respawnTime:15e3},{id:"berserk-1",type:"berserk",x:60,y:40,z:-60,active:!0,respawnTime:2e4}]}init(){this.scores={red:0,blue:0},this.resetCrystals(),this.resetPotions()}resetPotions(){this.potions.forEach(e=>e.active=!0)}resetCrystals(){this.crystals.forEach(e=>{e.x=e.originalX,e.y=e.originalY,e.z=e.originalZ,e.state="home",e.carrierId=null})}addPlayer(e,t="Unknown"){console.log("Host: Player connected:",e,t),this.players[e]={id:e,name:t,x:0,y:0,z:0,rx:0,ry:0,team:"spectator",biome:"forest",health:100,kills:0,deaths:0},this.networkManager.sendTo(e,"init",{id:e,players:this.players,crystals:this.crystals,potions:this.potions,scores:this.scores}),this.broadcastPlayerList()}removePlayer(e){console.log("Host: Player disconnected:",e),delete this.players[e],this.networkManager.broadcast("playerLeft",e),this.broadcastPlayerList()}broadcastPlayerList(){const e=Object.values(this.players).map(t=>({id:t.id,name:t.name,kills:t.kills,deaths:t.deaths,ping:0}));this.networkManager.broadcast("playerListUpdate",e)}startGame(){this.networkManager.broadcast("gameStarted",{})}handleMessage(e,t,n){switch(t){case"joinTeam":this.handleJoinTeam(e,n);break;case"move":this.handleMove(e,n);break;case"collectCrystal":this.handleCollectCrystal(e,n);break;case"hitPlayer":this.handleHitPlayer(e,n);break;case"chat":this.networkManager.broadcast("chat",n);break;case"captureFlag":this.handleCaptureFlag(e);break;case"requestRestart":this.resetGame();break;case"requestRespawn":this.handleRequestRespawn(e);break;case"collectPotion":this.handleCollectPotion(e,n);break}}handleCollectPotion(e,t){const n=this.potions.find(r=>r.id===t);n&&n.active&&(n.active=!1,this.networkManager.broadcast("potionUpdate",{id:t,active:!1}),this.networkManager.sendTo(e,"applyPotion",{type:n.type}),setTimeout(()=>{n.active=!0,this.networkManager.broadcast("potionUpdate",{id:t,active:!0})},n.respawnTime))}handleHitPlayer(e,t){const{targetId:n,damage:r}=t,s=this.players[n];s&&s.health>0&&(s.health-=r,s.health<0&&(s.health=0),this.networkManager.broadcast("playerDamaged",{id:n,health:s.health,shooterId:e}),s.health<=0&&this.handlePlayerDeath(n,e))}handlePlayerDeath(e,t){const n=this.players[e];if(n){n.deaths++,t&&this.players[t]&&t!==e&&this.players[t].kills++;const r=t&&this.players[t]?this.players[t].name:"Environment";this.networkManager.broadcast("killFeed",{killer:r,victim:n.name,method:"blasted"}),this.broadcastPlayerList();const s=this.crystals.find(a=>a.carrierId===e);s&&(s.state="dropped",s.carrierId=null,s.x=n.x,s.y=n.y,s.z=n.z,this.networkManager.broadcast("crystalUpdate",{id:s.id,state:"dropped",x:n.x,y:n.y,z:n.z})),this.networkManager.broadcast("playerDied",{id:e})}}handleRequestRespawn(e){const t=this.players[e];if(t){t.health=100;let n=0,r=0;t.team==="blue"?(n=-150,r=150):t.team==="red"&&(n=-150,r=-150),t.x=n,t.y=32,t.z=r,this.networkManager.sendTo(e,"teamAssigned",t),this.networkManager.broadcast("playerDamaged",{id:e,health:100}),this.networkManager.broadcast("playerJoined",t)}}handleJoinTeam(e,t){if(console.log(`Host: Player ${e} joining team ${t}`),!this.TEAMS.includes(t)){console.error(`Host: Invalid team ${t}`);return}let n=0,r=32,s=0;t==="blue"?(n=-150,s=150):t==="red"&&(n=-150,s=-150);const a=this.players[e];a?(a.team=t,a.x=n,a.y=r,a.z=s,console.log(`Host: Assigning ${e} to ${t}`),this.networkManager.sendTo(e,"teamAssigned",a),this.networkManager.broadcast("playerJoined",a)):console.error(`Host: Player ${e} not found in players list`)}handleMove(e,t){if(this.players[e]){const n=this.players[e];n.x=t.x,n.y=t.y,n.z=t.z,n.rx=t.rx,n.ry=t.ry,n.biome=t.biome,this.networkManager.broadcast("playerMoved",n,e)}}handleCollectCrystal(e,t){const n=this.crystals.find(s=>s.id===t),r=this.players[e];n&&r&&(n.team!==r.team?(n.state==="home"||n.state==="dropped")&&(n.state="carried",n.carrierId=e,this.networkManager.broadcast("crystalUpdate",{id:t,state:"carried",carrierId:e})):n.team===r.team&&n.state==="dropped"&&(n.state="home",n.carrierId=null,n.x=n.originalX,n.y=n.originalY,n.z=n.originalZ,this.networkManager.broadcast("crystalUpdate",{id:t,state:"home",x:n.originalX,y:n.originalY,z:n.originalZ})))}handleCaptureFlag(e){const t=this.players[e];if(!t)return;const n=this.crystals.find(r=>r.carrierId===e);n&&n.team!==t.team&&(this.scores[t.team]++,n.state="home",n.carrierId=null,n.x=n.originalX,n.y=n.originalY,n.z=n.originalZ,this.networkManager.broadcast("crystalCaptured",{id:n.id,team:t.team,scores:this.scores}),this.networkManager.broadcast("crystalUpdate",{id:n.id,state:"home",x:n.originalX,y:n.originalY,z:n.originalZ}),this.checkWinCondition())}checkWinCondition(){if(this.scores.red>=3||this.scores.blue>=3){let e=this.scores.red>=3?"red":"blue";this.networkManager.broadcast("gameOver",{winner:e})}}resetGame(){this.resetCrystals(),this.scores={red:0,blue:0},this.networkManager.broadcast("gameReset",{crystals:this.crystals,scores:this.scores})}}class pg{constructor(){this.peer=null,this.gun=fg({peers:["https://gun-manhattan.herokuapp.com/gun","https://gun-us.herokuapp.com/gun","https://gundb-relay-ml.herokuapp.com/gun"]}),this.lobbies=this.gun.get("voxelwitchwars_v2").get("lobbies"),this.lobbyHeartbeat=null,this.conn=null,this.connections=[],this.isHost=!1,this.gameHost=null,this.playerId=null,this.playerName="Player",this.onLocalPlayerInit=null,this.onPlayerJoinedCallback=null,this.onPlayerLeftCallback=null,this.onPlayerMovedCallback=null,this.onCrystalsInit=null,this.onCrystalCollectedCallback=null,this.onScoreUpdate=null,this.onTeamAssignedCallback=null,this.onPlayerListUpdate=null,this.onGameStarted=null,this.onHealthUpdate=null,this.onPlayerHitCallback=null,this.onPlayerDied=null,this.onKillFeedCallback=null,this.onChatMessage=null,this.onPotionsInit=null,this.onPotionUpdate=null,this.onApplyPotion=null}async hostGame(e=null,t="Host"){this.isHost=!0,this.playerName=t;const n={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};console.log("Initializing Peer...");try{e?this.peer=new lr(e,n):this.peer=new lr(n)}catch(r){throw console.error("PeerJS Init Error:",r),new Error("Failed to initialize network: "+r.message)}return new Promise((r,s)=>{const a=setTimeout(()=>{this.peer&&this.peer.destroy(),s("Connection timed out (10s). Check firewall/network.")},1e4);this.peer.on("open",o=>{clearTimeout(a),console.log("My peer ID is: "+o),this.playerId=o;try{this.gameHost=new dg(this),this.gameHost.init(),this.gameHost.addPlayer(o,t),this.showConnectionStatus(!0,`Hosting: ${o}`),this.publishLobby(o,e||t+"'s Game"),r(o)}catch(c){console.error("GameHost Init Error:",c),s("Failed to start GameHost: "+c.message)}}),this.peer.on("connection",o=>{this.handleConnection(o)}),this.peer.on("error",o=>{clearTimeout(a),console.error("Peer Error:",o);let c=o.type;o.type==="unavailable-id"?c="ID already taken. Try another.":o.type==="browser-incompatible"?c="Browser does not support WebRTC.":o.type==="network"&&(c="Network error. Check connection."),this.showConnectionStatus(!1,c),s(c)})})}async joinGame(e,t="Player"){this.isHost=!1,this.playerName=t;const n={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};return this.peer=new lr(void 0,n),new Promise((r,s)=>{this.peer.on("open",a=>{this.playerId=a,console.log("My peer ID is: "+a),this.conn=this.peer.connect(e,{metadata:{name:t}}),this.conn.on("open",()=>{console.log("Connected to Host"),this.showConnectionStatus(!0,"Connected to Host"),r()}),this.conn.on("data",o=>{this.handleMessage(o)}),this.conn.on("close",()=>{this.showConnectionStatus(!1,"Disconnected")}),this.conn.on("error",o=>{console.error("Connection Error",o),this.showConnectionStatus(!1,"Connection Error"),s(o)})}),this.peer.on("error",a=>{console.error("Peer Error",a),s(a)})})}handleConnection(e){console.log("Client connected:",e.peer),this.connections.push(e),e.on("open",()=>{const t=e.metadata&&e.metadata.name?e.metadata.name:"Unknown";this.gameHost.addPlayer(e.peer,t)}),e.on("data",t=>{this.gameHost&&this.gameHost.handleMessage(e.peer,t.type,t.payload)}),e.on("close",()=>{this.connections=this.connections.filter(t=>t!==e),this.gameHost&&this.gameHost.removePlayer(e.peer)})}send(e,t){this.isHost?this.gameHost&&this.gameHost.handleMessage(this.playerId,e,t):this.conn&&this.conn.open&&this.conn.send({type:e,payload:t})}sendTo(e,t,n){if(e===this.playerId)this.handleMessage({type:t,payload:n});else{const r=this.connections.find(s=>s.peer===e);r&&r.open&&r.send({type:t,payload:n})}}broadcast(e,t,n=null){this.playerId!==n&&this.handleMessage({type:e,payload:t}),this.connections.forEach(r=>{r.peer!==n&&r.open&&r.send({type:e,payload:t})})}handleMessage(e){const{type:t,payload:n}=e;switch(t){case"playerListUpdate":this.onPlayerListUpdate&&this.onPlayerListUpdate(n);break;case"gameStarted":this.onGameStarted&&this.onGameStarted();break;case"init":n.players[this.playerId]&&this.onLocalPlayerInit&&this.onLocalPlayerInit(n.players[this.playerId]),Object.values(n.players).forEach(r=>{r.id!==this.playerId&&this.onPlayerJoined(r)}),this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onPotionsInit&&this.onPotionsInit(n.potions),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"playerJoined":n.id!==this.playerId&&this.onPlayerJoined(n);break;case"playerLeft":this.onPlayerLeftCallback&&this.onPlayerLeftCallback(n);break;case"playerMoved":this.onPlayerMovedCallback&&this.onPlayerMovedCallback(n);break;case"crystalCollected":this.onCrystalCollectedCallback&&this.onCrystalCollectedCallback(n);break;case"gameOver":alert("Game Over! Winner: "+n.winner);break;case"gameReset":this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"teamAssigned":this.onTeamAssignedCallback&&this.onTeamAssignedCallback(n);break;case"playerDamaged":this.onPlayerHitCallback&&this.onPlayerHitCallback(n.id,n.shooterId),n.id===this.playerId&&this.onHealthUpdate&&this.onHealthUpdate(n.health);break;case"playerDied":n.id===this.playerId?this.onPlayerDied&&this.onPlayerDied():console.log(`Player ${n.id} died.`);break;case"chat":this.onChatMessage&&this.onChatMessage(n);break;case"killFeed":this.onKillFeedCallback&&this.onKillFeedCallback(n);break;case"potionUpdate":this.onPotionUpdate&&this.onPotionUpdate(n);break;case"applyPotion":this.onApplyPotion&&this.onApplyPotion(n.type);break}}sendMove(e,t,n){this.send("move",{x:e.x,y:e.y,z:e.z,rx:t.x,ry:t.y,biome:n})}collectCrystal(e){this.send("collectCrystal",e)}collectPotion(e){this.send("collectPotion",e)}sendHit(e,t){this.send("hitPlayer",{targetId:e,damage:t})}joinTeam(e){console.log("NetworkManager: Joining team",e),this.send("joinTeam",e)}onPlayerJoined(e){this.onPlayerJoinedCallback&&this.onPlayerJoinedCallback(e)}showConnectionStatus(e,t=""){let n=document.getElementById("connection-status");n||(n=document.createElement("div"),n.id="connection-status",n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.padding="10px",n.style.borderRadius="5px",n.style.fontFamily="monospace",n.style.fontWeight="bold",n.style.zIndex="1000",n.style.maxWidth="300px",n.style.wordWrap="break-word",document.body.appendChild(n)),e?(n.textContent=t||"🟢 Online",n.style.backgroundColor="rgba(0, 255, 0, 0.8)",n.style.color="white"):(n.innerHTML="🔴 Offline<br><small>"+t+"</small>",n.style.backgroundColor="rgba(255, 0, 0, 0.8)",n.style.color="white")}publishLobby(e,t){console.log("Publishing lobby:",t);const n=()=>{this.lobbies.get(e).put({id:e,name:t,players:this.connections?this.connections.length+1:1,timestamp:Date.now()})};n(),this.lobbyHeartbeat=setInterval(n,3e3),window.addEventListener("beforeunload",()=>{this.stopPublishingLobby(e)})}stopPublishingLobby(e){this.lobbyHeartbeat&&clearInterval(this.lobbyHeartbeat),this.lobbies.get(e).put(null)}subscribeToLobbies(e){console.log("Subscribing to lobbies..."),this.lobbies.map().on((t,n)=>{t&&t.timestamp>Date.now()-3e4?e(n,t):e(n,null)})}sendChat(e){this.send("chat",{id:this.playerId,name:this.playerName,message:e,timestamp:Date.now()})}}class mg{constructor(e,t){this.scene=e,this.id=t.id,this.team=t.team,this.mesh=new Jn,this.mesh.position.set(t.x,t.y,t.z);const n=new ki(.5,1.5,8);let r=2755149;this.team==="red"?r=16711680:this.team==="blue"&&(r=255),this.bodyMat=new an({color:r});const s=new ct(n,this.bodyMat);s.position.y=.75,this.mesh.add(s);const a=new ni(.3,8,8),o=new an({color:16764074}),c=new ct(a,o);c.position.y=1.6,this.mesh.add(c);const l=new ki(.3,.8,8),u=new an({color:1118481}),h=new ct(l,u);h.position.y=2.2,h.rotation.x=-.2,this.mesh.add(h);const f=t.name||"Unknown",m=this.createNameSprite(f);m.position.y=3,this.mesh.add(m),this.scene.add(this.mesh),this.targetPos=new z(t.x,t.y,t.z),this.targetRot=new Kt(t.rx,t.ry,0)}createNameSprite(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=24,s=`bold ${r}px Arial`;n.font=s;const a=n.measureText(e).width;t.width=a+20,t.height=r+10,n.fillStyle="rgba(0, 0, 0, 0.5)",n.fillRect(0,0,t.width,t.height),n.font=s,n.fillStyle="white",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2);const o=new Lf(t),c=new Dl({map:o}),l=new Af(c),u=.05;return l.scale.set(t.width*u,t.height*u,1),l}update(e){this.mesh.position.lerp(this.targetPos,e*10),this.mesh.rotation.y=Ai.lerp(this.mesh.rotation.y,this.targetRot.y,e*10)}updateData(e){this.targetPos.set(e.x,e.y,e.z),this.targetRot.set(e.rx,e.ry,0)}setCarrying(e){if(this.flagMesh&&(this.mesh.remove(this.flagMesh),this.flagMesh=null),e){const t=new Gi(.4,0),n=new an({color:e,emissive:e,emissiveIntensity:1});this.flagMesh=new ct(t,n),this.flagMesh.position.set(0,2.5,-.5),this.mesh.add(this.flagMesh)}}dispose(){this.scene.remove(this.mesh)}}const Rt=new Ef;Rt.background=new Xe(8900331);Rt.fog=new Co(8900331,10,500);const _s=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),Mr=new Rx({antialias:!0});Mr.setSize(window.innerWidth,window.innerHeight);Mr.shadowMap.enabled=!0;document.body.appendChild(Mr.domElement);const Ds=new Nx(Rt),On=new kx,We=new pg,Vt=new Map,nn=new Map,ur=new Map;We.onTeamAssignedCallback=i=>{console.log("Team Assigned Callback received:",i),console.log("Team:",i.team),rt.setTeam(i.team);let e=new z(150,32,150);i.team==="blue"?e.set(-150,32,150):i.team==="red"&&e.set(-150,32,-150),console.log("Spawning at:",e),rt.mesh.position.copy(e),rt.physicsPosition.copy(e),rt.velocity.set(0,0,0),rt.setSpawnPoint(e);const t=document.getElementById("start-menu"),n=document.getElementById("ui"),r=document.getElementById("score-ui"),s=document.getElementById("minimap");console.log("Hiding start menu, showing UI"),t&&t.classList.add("hidden"),n&&(n.style.display="block"),r&&(r.style.display="block"),s&&s.classList.remove("hidden"),ku=!0,document.body.requestPointerLock(),On.initWind()};We.onHealthUpdate=i=>{const e=document.getElementById("health-bar"),t=document.getElementById("health-text");e&&t&&(e.style.width=`${i}%`,t.textContent=`${Math.ceil(i)} / 100`,e.className="",i>50?e.classList.add("high"):i>25?e.classList.add("medium"):e.classList.add("low"))};We.onPlayerHitCallback=(i,e)=>{let t=null;if(i===We.playerId?(t=rt.mesh.position.clone(),t.y+=1):Vt.has(i)&&(t=Vt.get(i).mesh.position.clone(),t.y+=1),t&&(Ds.emit(t,16711680,15,8,.5),On.playExplosion()),e===We.playerId){const n=document.getElementById("hit-marker");n&&(n.classList.remove("hidden"),On.playHitMarker(),setTimeout(()=>{n&&n.classList.add("hidden")},100))}};We.onPlayerDied=()=>{console.log("You Died!"),rt.onDeath();const i=document.getElementById("respawn-menu");i&&(i.classList.remove("hidden"),i.style.display="flex",document.exitPointerLock())};const rl=document.getElementById("respawn-btn");rl&&rl.addEventListener("click",()=>{We.send("requestRespawn",{});const i=document.getElementById("respawn-menu");i&&(i.classList.add("hidden"),i.style.display="none"),rt.isDead=!1,rt.health=100,document.body.requestPointerLock()});document.querySelectorAll(".team-btn").forEach(i=>{i.addEventListener("click",e=>{const t=e.currentTarget.dataset.team;console.log("Team selected:",t),document.getElementById("team-select").style.display="none",document.getElementById("loading-msg").style.display="block",We.joinTeam(t)})});We.onPlayerJoinedCallback=i=>{console.log("Player Joined:",i.id);const e=new mg(Rt,i);Vt.set(i.id,e)};We.onPlayerLeftCallback=i=>{console.log("Player Left:",i),Vt.has(i)&&(Vt.get(i).dispose(),Vt.delete(i))};We.onPlayerMovedCallback=i=>{Vt.has(i.id)&&Vt.get(i.id).updateData(i)};let Uo=[];We.onCrystalsInit=i=>{Uo=i,nn.forEach(t=>Rt.remove(t)),nn.clear();const e=new Gi(1,0);i.forEach(t=>{const n=t.team==="blue"?255:16711680,r=new an({color:n,emissive:n,emissiveIntensity:2});if(t.state==="home"||t.state==="dropped"){const s=new ct(e,r);s.position.set(t.x,t.y,t.z);const a=new As(n,2,20);s.add(a),Rt.add(s),nn.set(t.id,s)}})};We.onCrystalUpdate=i=>{const e=Uo.find(t=>t.id===i.id);if(e){const t=e.carrierId;if(Object.assign(e,i),t&&t!==i.carrierId&&Vt.has(t)&&Vt.get(t).setCarrying(null),i.state==="carried"&&i.carrierId&&Vt.has(i.carrierId)){const n=e.team==="blue"?255:16711680;Vt.get(i.carrierId).setCarrying(n)}if(i.state==="carried"){if(nn.has(i.id)){const n=nn.get(i.id);Rt.remove(n),nn.delete(i.id)}}else if(i.state==="dropped"||i.state==="home")if(nn.has(i.id))nn.get(i.id).position.set(i.x,i.y,i.z);else{const n=e.team==="blue"?255:16711680,r=new Gi(1,0),s=new an({color:n,emissive:n,emissiveIntensity:2}),a=new ct(r,s);a.position.set(i.x,i.y,i.z);const o=new As(n,2,20);a.add(o),Rt.add(a),nn.set(i.id,a)}}};We.onCrystalCaptured=i=>{On.playExplosion(),Is(i.scores);const e=`${i.team.toUpperCase()} Team Captured the Flag!`;Er("System",e,!0)};We.onCrystalCollectedCallback=i=>{i.team,i.scores&&Is(i.scores)};We.onScoreUpdate=i=>{Is(i)};We.onGameOver=i=>{const e=document.getElementById("game-over-screen"),t=document.getElementById("game-over-title"),n=document.getElementById("game-over-msg");if(e&&t&&n){e.classList.remove("hidden"),e.style.display="flex";const r=rt.team,s=i.winner;r===s?(t.textContent="VICTORY",t.style.color="#ffff00",n.textContent=`${s.toUpperCase()} TEAM WINS!`,On.playExplosion()):(t.textContent="DEFEAT",t.style.color="#ff0000",n.textContent=`${s.toUpperCase()} TEAM WINS!`),document.exitPointerLock()}};We.onGameReset=i=>{const e=document.getElementById("game-over-screen");e&&(e.classList.add("hidden"),e.style.display="none"),Is(i.scores),We.onCrystalsInit&&We.onCrystalsInit(i.crystals),rt.health=100,rt.isDead=!1;let t=new z(0,32,0);rt.team==="blue"?t.set(-150,32,150):rt.team==="red"&&t.set(-150,32,-150),rt.mesh.position.copy(t),rt.physicsPosition.copy(t),rt.velocity.set(0,0,0),Er("System","Game has been reset!",!0)};const sl=document.getElementById("play-again-btn");sl&&sl.addEventListener("click",()=>{We.send("requestRestart",{})});function Is(i){const e=document.getElementById("score-ui");e&&(e.innerHTML=`
            <span style="color: #ff4444">Red: ${i.red}</span> | 
            <span style="color: #4444ff">Blue: ${i.blue}</span>
        `)}const xg=new ni(500,32,32),gg=new fn({uniforms:{topColor:{value:new Xe(30719)},bottomColor:{value:new Xe(16777215)},offset:{value:33},exponent:{value:.6}},vertexShader:`
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
    `,side:It}),_g=new ct(xg,gg);Rt.add(_g);const vg=new Bf(13421772,.6);Rt.add(vg);const Tr=new Of(16777215,.8);Tr.position.set(20,50,20);Tr.castShadow=!0;Tr.shadow.mapSize.width=2048;Tr.shadow.mapSize.height=2048;Rt.add(Tr);const _r=new Ix({chunkSize:32,tileSize:1});Rt.add(_r.mesh);const yg=_r.findSpawnPoint(),rt=new Ux(Rt,_s,_r,yg,Ds,On,We),In=document.getElementById("lobby-menu"),Qn=document.getElementById("lobby-status"),al=document.getElementById("btn-host"),vs=document.getElementById("btn-join"),ar=document.getElementById("input-host-id"),bg=document.getElementById("input-custom-host-id"),Iu=document.getElementById("input-player-name"),Lu=document.getElementById("waiting-room"),Uu=document.getElementById("main-menu-buttons"),ol=document.getElementById("player-list"),ys=document.getElementById("start-game-btn"),Fu=document.getElementById("waiting-msg"),Nu=document.getElementById("lobby-name-display"),bs=i=>i&&i.classList.remove("hidden"),Ss=i=>i&&i.classList.add("hidden");We.onPlayerListUpdate=i=>{ol.innerHTML="",i.forEach(e=>{const t=document.createElement("li"),n=e.id===We.playerId,r=document.createElement("span");r.className="name",r.textContent=`${e.name} ${n?" (You)":""}`,t.appendChild(r),ol.appendChild(t)})};We.onGameStarted=()=>{console.log("Game Started!"),In&&In.classList.add("hidden");const i=document.getElementById("start-screen");i&&(i.style.display="none")};al&&al.addEventListener("click",async()=>{const i=bg.value.trim()||null,e=Iu.value.trim()||"Host";Qn.textContent="Initializing Host...";try{const t=await We.hostGame(i,e);Qn.textContent="",Ss(Uu),bs(Lu),bs(ys),Ss(Fu),Nu.textContent=t,Ms&&Ms.classList.remove("hidden"),Er("System","Lobby created. Waiting for players...",!0),navigator.clipboard.writeText(t)}catch(t){Qn.textContent="Error: "+t}});ys&&ys.addEventListener("click",()=>{We.gameHost&&We.gameHost.startGame()});vs&&vs.addEventListener("click",async()=>{const i=ar.value.trim(),e=Iu.value.trim()||"Player";if(!i){Qn.textContent="Please enter a Host ID";return}Qn.textContent="Connecting...";try{await We.joinGame(i,e),Qn.textContent="",Ss(Uu),bs(Lu),Ss(ys),bs(Fu),Nu.textContent=i,Ms&&Ms.classList.remove("hidden"),Er("System","Connected to lobby.",!0)}catch(t){Qn.textContent="Error: "+t}});document.getElementById("ui");let ku=!1;const Ou=document.createElement("div");Ou.id="score-ui";document.body.appendChild(Ou);const us=document.getElementById("start-screen"),cl=document.getElementById("start-btn");console.log("Start Screen Element:",us);console.log("Lobby Menu Element:",In);cl&&us&&(cl.addEventListener("click",()=>{console.log("Start button clicked"),us.style.display="none",In?(In.style.display="flex",In.classList.remove("hidden")):console.error("Lobby menu not found!")}),us.style.display="flex",In&&(In.style.display="none"));const Ri=document.getElementById("lobby-list-container"),ll=document.getElementById("btn-refresh-lobbies"),vr=new Map;function Sg(){if(Ri){if(Ri.innerHTML="",vr.size===0){Ri.innerHTML='<div style="color: #aaa; font-size: 0.8rem; text-align: center; padding: 20px;">No active lobbies found.<br>Be the first to host!</div>';return}vr.forEach((i,e)=>{const t=document.createElement("div");t.style.padding="10px",t.style.borderBottom="1px solid #444",t.style.cursor="pointer",t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center",t.className="lobby-item",t.innerHTML=`
            <div>
                <div style="font-weight: bold; color: #fff;">${i.name||e}</div>
                <div style="font-size: 0.8rem; color: #aaa;">ID: ${e}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 0.8rem; color: #00ffff;">${i.players||"?"} Players</div>
                <button class="join-lobby-btn" style="background: var(--primary-color); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">JOIN</button>
            </div>
        `,t.querySelector(".join-lobby-btn").addEventListener("click",r=>{r.stopPropagation(),ar&&(ar.value=e),vs&&vs.click()}),t.addEventListener("click",()=>{ar&&(ar.value=e),Array.from(Ri.children).forEach(r=>r.style.background="transparent"),t.style.background="rgba(160, 32, 240, 0.3)"}),t.addEventListener("mouseenter",()=>{t.style.background!=="rgba(160, 32, 240, 0.3)"&&(t.style.background="rgba(255, 255, 255, 0.1)")}),t.addEventListener("mouseleave",()=>{t.style.background!=="rgba(160, 32, 240, 0.3)"&&(t.style.background="transparent")}),Ri.appendChild(t)})}}We.subscribeToLobbies((i,e)=>{e?vr.set(i,e):vr.delete(i),Sg()});ll&&ll.addEventListener("click",()=>{vr.clear(),Ri.innerHTML='<div style="color: #aaa; font-size: 0.8rem; text-align: center; padding: 20px;">Refreshing...</div>'});const Ms=document.getElementById("chat-container"),xa=document.getElementById("chat-messages"),ir=document.getElementById("chat-input");function Er(i,e,t=!1){const n=document.createElement("div");if(n.className="chat-msg",t)n.innerHTML=`<span class="system">${e}</span>`;else{const r=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"),s=e.replace(/</g,"&lt;").replace(/>/g,"&gt;");n.innerHTML=`<span class="name">${r}:</span><span class="msg">${s}</span>`}xa.appendChild(n),xa.scrollTop=xa.scrollHeight}We.onChatMessage=i=>{Er(i.name,i.message)};ir&&(ir.addEventListener("keydown",i=>{if(i.key==="Enter"){const e=ir.value.trim();e&&(We.sendChat(e),ir.value="")}i.stopPropagation()}),ir.addEventListener("focus",()=>{}));window.addEventListener("resize",()=>{_s.aspect=window.innerWidth/window.innerHeight,_s.updateProjectionMatrix(),Mr.setSize(window.innerWidth,window.innerHeight)});function Mg(i){let e=16777215;i==="speed"?e=16776960:i==="shield"?e=65535:i==="berserk"&&(e=16711680);const t=new Gi(.5,0),n=new an({color:e,emissive:e,emissiveIntensity:.5,transparent:!0,opacity:.8}),r=new ct(t,n);r.userData={initialY:0,timeOffset:Math.random()*100};const s=new As(e,1,5);return r.add(s),r}We.onPotionsInit=i=>{ur.forEach(e=>Rt.remove(e)),ur.clear(),i.forEach(e=>{const t=Mg(e.type);t.position.set(e.x,e.y,e.z),t.userData.initialY=e.y,t.userData.id=e.id,t.visible=e.active,Rt.add(t),ur.set(e.id,t)})};We.onPotionUpdate=i=>{const e=ur.get(i.id);e&&(e.visible=i.active,i.active||Ds.emit(e.position,e.material.color.getHex(),20))};We.onApplyPotion=i=>{rt.applyPotion(i),On.playPowerup()};const ul=new Gf;let ga;function Bu(){requestAnimationFrame(Bu);const i=ul.getDelta();if(ku){ga||(ga=new Fx(_r,rt)),rt.update(i,Vt),_r.update(rt.position),ga.update(),Ds.update(i);const e=performance.now()/1e3;ur.forEach((r,s)=>{r.visible&&(r.position.y=r.userData.initialY+Math.sin(e*2+r.userData.timeOffset)*.5,r.rotation.y+=i,rt.position.distanceTo(r.position)<1.5&&(We.collectPotion(s),r.visible=!1))}),nn.forEach(r=>{r.rotation.y+=i,r.position.y+=Math.sin(ul.getElapsedTime()*2)*.01}),nn.forEach((r,s)=>{rt.position.distanceTo(r.position)<2&&We.collectCrystal(s)});const t=rt.team;if(t){let r;t==="blue"?r=new z(-150,32,150):t==="red"&&(r=new z(-150,32,-150)),r&&rt.position.distanceTo(r)<5&&Uo.some(a=>a.carrierId===We.playerId&&a.team!==t)&&We.send("captureFlag",{})}const n=rt.velocity.length();On.updateWind(n),rt.input.isMouseButtonDown(2)&&rt.useAbility()}Mr.render(Rt,_s)}Bu();We.onKillFeedCallback=i=>{const e=document.getElementById("kill-feed");if(e){const t=document.createElement("div");t.className="kill-msg",t.innerHTML=`<span style="color: #ff4444">${i.killer}</span> ${i.method} <span style="color: #00ffff">${i.victim}</span>`,e.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},5e3)}};We.onPlayerListUpdate=i=>{const e=document.getElementById("scoreboard-body");e&&(e.innerHTML="",i.sort((t,n)=>(n.kills||0)-(t.kills||0)),i.forEach(t=>{const n=document.createElement("tr");n.innerHTML=`
                <td>${t.name}</td>
                <td>${t.kills||0}</td>
                <td>${t.deaths||0}</td>
                <td>${t.ping||0}ms</td>
            `,e.appendChild(n)}))};document.addEventListener("keydown",i=>{if(i.code==="Tab"){i.preventDefault();const e=document.getElementById("scoreboard");e&&e.classList.remove("hidden")}});document.addEventListener("keyup",i=>{if(i.code==="Tab"){const e=document.getElementById("scoreboard");e&&e.classList.add("hidden")}});
