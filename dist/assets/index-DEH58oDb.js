function _h(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Go="181",vh=0,ga=1,yh=2,kc=1,Sh=2,gn=3,Fn=0,Rt=1,_n=2,Sn=0,Mi=1,_a=2,va=3,ya=4,Mh=5,Xn=100,bh=101,Th=102,Eh=103,Ch=104,Ah=200,Rh=201,wh=202,Ph=203,Hr=204,Wr=205,Dh=206,Ih=207,Lh=208,Uh=209,Fh=210,Nh=211,Oh=212,Bh=213,kh=214,Xr=0,$r=1,qr=2,Ci=3,Yr=4,jr=5,Kr=6,Zr=7,zc=0,zh=1,Gh=2,In=0,Vh=1,Hh=2,Wh=3,Xh=4,$h=5,qh=6,Yh=7,Gc=300,Ai=301,Ri=302,Jr=303,Qr=304,er=306,eo=1e3,vn=1001,to=1002,zt=1003,jh=1004,ds=1005,$t=1006,lr=1007,qn=1008,ln=1009,Vc=1010,Hc=1011,Qi=1012,Vo=1013,Zn=1014,on=1015,Di=1016,Ho=1017,Wo=1018,es=1020,Wc=35902,Xc=35899,$c=1021,qc=1022,Qt=1023,ts=1026,ns=1027,Xo=1028,$o=1029,qo=1030,Yo=1031,jo=1033,Ns=33776,Os=33777,Bs=33778,ks=33779,no=35840,io=35841,so=35842,ro=35843,oo=36196,ao=37492,co=37496,lo=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,xo=37814,go=37815,_o=37816,vo=37817,yo=37818,So=37819,Mo=37820,bo=37821,To=36492,Eo=36494,Co=36495,Ao=36283,Ro=36284,wo=36285,Po=36286,Kh=3200,Zh=3201,Yc=0,Jh=1,wn="",Xt="srgb",wi="srgb-linear",qs="linear",et="srgb",ri=7680,Sa=519,Qh=512,eu=513,tu=514,jc=515,nu=516,iu=517,su=518,ru=519,Ma=35044,ba="300 es",an=2e3,Ys=2001;function Kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=js("canvas");return i.style.display="block",i}const Ta={};function Ea(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ue(...i){const e="THREE."+i.shift();console.warn(e,...i)}function ft(...i){const e="THREE."+i.shift();console.error(e,...i)}function is(...i){const e=i.join(" ");e in Ta||(Ta[e]=!0,Ue(...i))}function au(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Ki=Math.PI/180,ss=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ko(i,e){return(i%e+e)%e}function cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lu(i,e,t){return i!==e?(t-i)/(e-i):0}function Zi(i,e,t){return(1-t)*i+t*e}function hu(i,e,t,n){return Zi(i,e,1-Math.exp(-t*n))}function uu(i,e=1){return e-Math.abs(Ko(i,e*2)-e)}function fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mu(i,e){return i+Math.random()*(e-i)}function xu(i){return i*(.5-Math.random())}function gu(i){i!==void 0&&(Ca=i);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(i){return i*Ki}function vu(i){return i*ss}function yu(i){return(i&i-1)===0&&i!==0}function Su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bu(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*p,a*h,a*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:Ki,RAD2DEG:ss,generateUUID:Li,clamp:We,euclideanModulo:Ko,mapLinear:cu,inverseLerp:lu,lerp:Zi,damp:hu,pingpong:uu,smoothstep:fu,smootherstep:du,randInt:pu,randFloat:mu,randFloatSpread:xu,seededRandom:gu,degToRad:_u,radToDeg:vu,isPowerOfTwo:yu,ceilPowerOfTwo:Su,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:bu,normalize:Ct,denormalize:yi};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],p=r[o+1],x=r[o+2],_=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==x){let m=c*f+l*p+h*x+u*_;m<0&&(f=-f,p=-p,x=-x,_=-_,m=-m);let d=1-a;if(m<.9995){const b=Math.acos(m),M=Math.sin(b);d=Math.sin(d*b)/M,a=Math.sin(a*b)/M,c=c*d+f*a,l=l*d+p*a,h=h*d+x*a,u=u*d+_*a}else{c=c*d+f*a,l=l*d+p*a,h=h*d+x*a,u=u*d+_*a;const b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*u+c*p-l*f,e[t+1]=c*x+h*f+l*u-a*p,e[t+2]=l*x+h*p+a*f-c*u,e[t+3]=h*x-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u+f*p*x;break;case"YZX":this._x=f*h*u+l*p*x,this._y=l*p*u+f*h*x,this._z=l*h*x-f*p*u,this._w=l*h*u-f*p*x;break;case"XZY":this._x=f*h*u-l*p*x,this._y=l*p*u-f*h*x,this._z=l*h*x+f*p*u,this._w=l*h*u+f*p*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new I,Aa=new as;class Be{constructor(e,t,n,s,r,o,a,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],_=s[0],m=s[3],d=s[6],b=s[1],M=s[4],C=s[7],A=s[2],E=s[5],w=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*m+a*M+c*E,r[6]=o*d+a*C+c*w,r[1]=l*_+h*b+u*A,r[4]=l*m+h*M+u*E,r[7]=l*d+h*C+u*w,r[2]=f*_+p*b+x*A,r[5]=f*m+p*M+x*E,r[8]=f*d+p*C+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,x=t*u+n*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Be,Ra=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wa=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tu(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===et&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:qs,toXYZ:Ra,fromXYZ:wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Ra,fromXYZ:wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ye=Tu();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class Eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=js("canvas")),oi.width=e.width,oi.height=e.height;const s=oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cu=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fr(s[o].image)):r.push(fr(s[o]))}else r=fr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Au=0;const dr=new I;class wt extends Ii{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=vn,s=vn,r=$t,o=qn,a=Qt,c=ln,l=wt.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Li(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dr).x}get height(){return this.source.getSize(dr).y}get depth(){return this.source.getSize(dr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Gc;wt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],x=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,C=(p+1)/2,A=(d+1)/2,E=(h+f)/4,w=(u+_)/4,L=(x+m)/4;return M>C&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):C>A?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=E/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=w/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-x)*(m-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new wt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wu extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jt):jt.fromBufferAttribute(r,o),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ms.subVectors(this.max,Bi),ai.subVectors(e.a,Bi),ci.subVectors(e.b,Bi),li.subVectors(e.c,Bi),bn.subVectors(ci,ai),Tn.subVectors(li,ci),Bn.subVectors(ai,li);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Bn.y,Bn.x,0];return!pr(t,ai,ci,li,ms)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,ai,ci,li,ms))?!1:(xs.crossVectors(bn,Tn),t=[xs.x,xs.y,xs.z],pr(t,ai,ci,li,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const un=[new I,new I,new I,new I,new I,new I,new I,new I],jt=new I,ps=new ei,ai=new I,ci=new I,li=new I,bn=new I,Tn=new I,Bn=new I,Bi=new I,ms=new I,xs=new I,kn=new I;function pr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){kn.fromArray(i,r);const a=s.x*Math.abs(kn.x)+s.y*Math.abs(kn.y)+s.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pu=new ei,ki=new I,mr=new I;class Ui{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(mr)),this.expandByPoint(ki.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fn=new I,xr=new I,gs=new I,En=new I,gr=new I,_s=new I,_r=new I;class Jo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xr.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),En.copy(this.origin).sub(xr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=En.dot(this.direction),c=-En.dot(gs),l=En.lengthSq(),h=Math.abs(1-o*o);let u,f,p,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xr).addScaledVector(gs,f),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){gr.subVectors(t,e),_s.subVectors(n,e),_r.crossVectors(gr,_s);let o=this.direction.dot(_r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,e);const c=a*this.direction.dot(_s.crossVectors(En,_s));if(c<0)return null;const l=a*this.direction.dot(gr.cross(En));if(l<0||c+l>o)return null;const h=-a*En.dot(_r);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,x,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+x*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=x+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,x=l*h,_=l*u;t[0]=f+_*a,t[4]=x*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,x=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*u,x=a*h,_=a*u;t[0]=c*h,t[4]=x*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+x,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,p=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Iu)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Cn.crossVectors(n,Ot),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Cn.crossVectors(n,Ot)),Cn.normalize(),vs.crossVectors(Ot,Cn),s[0]=Cn.x,s[4]=vs.x,s[8]=Ot.x,s[1]=Cn.y,s[5]=vs.y,s[9]=Ot.y,s[2]=Cn.z,s[6]=vs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],_=n[6],m=n[10],d=n[14],b=n[3],M=n[7],C=n[11],A=n[15],E=s[0],w=s[4],L=s[8],S=s[12],v=s[1],P=s[5],F=s[9],B=s[13],H=s[2],V=s[6],Y=s[10],J=s[14],W=s[3],ne=s[7],ee=s[11],Me=s[15];return r[0]=o*E+a*v+c*H+l*W,r[4]=o*w+a*P+c*V+l*ne,r[8]=o*L+a*F+c*Y+l*ee,r[12]=o*S+a*B+c*J+l*Me,r[1]=h*E+u*v+f*H+p*W,r[5]=h*w+u*P+f*V+p*ne,r[9]=h*L+u*F+f*Y+p*ee,r[13]=h*S+u*B+f*J+p*Me,r[2]=x*E+_*v+m*H+d*W,r[6]=x*w+_*P+m*V+d*ne,r[10]=x*L+_*F+m*Y+d*ee,r[14]=x*S+_*B+m*J+d*Me,r[3]=b*E+M*v+C*H+A*W,r[7]=b*w+M*P+C*V+A*ne,r[11]=b*L+M*F+C*Y+A*ee,r[15]=b*S+M*B+C*J+A*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],b=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,M=x*f*l-h*m*l-x*c*p+o*m*p+h*c*d-o*f*d,C=h*_*l-x*u*l+x*a*p-o*_*p-h*a*d+o*u*d,A=x*u*c-h*_*c-x*a*f+o*_*f+h*a*m-o*u*m,E=t*b+n*M+s*C+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=b*w,e[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*w,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*w,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*w,e[4]=M*w,e[5]=(h*m*r-x*f*r+x*s*p-t*m*p-h*s*d+t*f*d)*w,e[6]=(x*c*r-o*m*r-x*s*l+t*m*l+o*s*d-t*c*d)*w,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*w,e[8]=C*w,e[9]=(x*u*r-h*_*r-x*n*p+t*_*p+h*n*d-t*u*d)*w,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*d+t*a*d)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*w,e[12]=A*w,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*m+t*u*m)*w,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,x=r*u,_=o*h,m=o*u,d=a*u,b=c*l,M=c*h,C=c*u,A=n.x,E=n.y,w=n.z;return s[0]=(1-(_+d))*A,s[1]=(p+C)*A,s[2]=(x-M)*A,s[3]=0,s[4]=(p-C)*E,s[5]=(1-(f+d))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(x+M)*w,s[9]=(m-b)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),a=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const l=1/r,h=1/o,u=1/a;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=an,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let x,_;if(c)x=r/(o-r),_=o*r/(o-r);else if(a===an)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ys)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=an,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let x,_;if(c)x=1/(o-r),_=o/(o-r);else if(a===an)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ys)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new I,Kt=new st,Du=new I(0,0,0),Iu=new I(1,1,1),Cn=new I,vs=new I,Ot=new I,Pa=new st,Da=new as;class qt{constructor(e=0,t=0,n=0,s=qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Da.setFromEuler(this),this.setFromQuaternion(Da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qt.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lu=0;const Ia=new I,ui=new as,dn=new st,ys=new I,zi=new I,Uu=new I,Fu=new as,La=new I(1,0,0),Ua=new I(0,1,0),Fa=new I(0,0,1),Na={type:"added"},Nu={type:"removed"},fi={type:"childadded",child:null},vr={type:"childremoved",child:null};class mt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new I,t=new qt,n=new as,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new Be}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(zi,ys,this.up):dn.lookAt(ys,zi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(dn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Na),fi.child=e,this.dispatchEvent(fi),fi.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),vr.child=e,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Na),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,Uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new I,pn=new I,yr=new I,mn=new I,di=new I,pi=new I,Oa=new I,Sr=new I,Mr=new I,br=new I,Tr=new tt,Er=new tt,Cr=new tt;class Jt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zt.subVectors(e,t),s.cross(Zt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zt.subVectors(s,t),pn.subVectors(n,t),yr.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(pn),c=Zt.dot(yr),l=pn.dot(pn),h=pn.dot(yr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Tr.setScalar(0),Er.setScalar(0),Cr.setScalar(0),Tr.fromBufferAttribute(e,t),Er.fromBufferAttribute(e,n),Cr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tr,r.x),o.addScaledVector(Er,r.y),o.addScaledVector(Cr,r.z),o}static isFrontFacing(e,t,n,s){return Zt.subVectors(n,t),pn.subVectors(e,t),Zt.cross(pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Zt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;di.subVectors(s,n),pi.subVectors(r,n),Sr.subVectors(e,n);const c=di.dot(Sr),l=pi.dot(Sr);if(c<=0&&l<=0)return t.copy(n);Mr.subVectors(e,s);const h=di.dot(Mr),u=pi.dot(Mr);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(di,o);br.subVectors(e,r);const p=di.dot(br),x=pi.dot(br);if(x>=0&&p<=x)return t.copy(r);const _=p*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(pi,a);const m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Oa.subVectors(r,s),a=(u-h)/(u-h+(p-x)),t.copy(s).addScaledVector(Oa,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(di,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Ko(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ye.workingToColorSpace(Mt.copy(this),e),Math.round(We(Mt.r*255,0,255))*65536+Math.round(We(Mt.g*255,0,255))*256+Math.round(We(Mt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Mt.copy(this),t);const n=Mt.r,s=Mt.g,r=Mt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Xt){Ye.workingToColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,s=Mt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Ss);const n=Zi(An.h,Ss.h,t),s=Zi(An.s,Ss.s,t),r=Zi(An.l,Ss.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ve;Ve.NAMES=Jc;let Ou=0;class Fi extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Mi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Wr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cs extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new I,Ms=new Ge;let Bu=0;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),e}}class Qc extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class el extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ku=0;const Wt=new st,Rr=new mt,mi=new I,Bt=new ei,Gi=new ei,_t=new I;class Vt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?el:Qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Bt.min,Gi.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,Gi.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(Gi.min),Bt.expandByPoint(Gi.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_t.fromBufferAttribute(a,l),c&&(mi.fromBufferAttribute(e,l),_t.add(mi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,h=new I,u=new I,f=new Ge,p=new Ge,x=new Ge,_=new I,m=new I;function d(L,S,v){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(f),x.sub(f);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-x.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[v].add(_),c[L].add(m),c[S].add(m),c[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,S=b.length;L<S;++L){const v=b[L],P=v.start,F=v.count;for(let B=P,H=P+F;B<H;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new I,C=new I,A=new I,E=new I;function w(L){A.fromBufferAttribute(s,L),E.copy(A);const S=a[L];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),C.crossVectors(E,S);const P=C.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,S=b.length;L<S;++L){const v=b[L],P=v.start,F=v.count;for(let B=P,H=P+F;B<H;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const x=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,x=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[x++]=l[p++]}return new en(f,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new st,zn=new Jo,bs=new Ui,ka=new I,Ts=new I,Es=new I,Cs=new I,wr=new I,As=new I,za=new I,Rs=new I;class Ke extends mt{constructor(e=new Vt,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(wr.fromBufferAttribute(u,e),o?As.addScaledVector(wr,h):As.addScaledVector(wr.sub(t),h))}t.add(As)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(bs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(bs,ka)===null||zn.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Ba.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Ba),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let C=b,A=M;C<A;C+=3){const E=a.getX(C),w=a.getX(C+1),L=a.getX(C+2);s=ws(this,d,e,n,l,h,u,E,w,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const b=a.getX(m),M=a.getX(m+1),C=a.getX(m+2);s=ws(this,o,e,n,l,h,u,b,M,C),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){const m=f[x],d=o[m.materialIndex],b=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let C=b,A=M;C<A;C+=3){const E=C,w=C+1,L=C+2;s=ws(this,d,e,n,l,h,u,E,w,L),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const b=m,M=m+1,C=m+2;s=ws(this,o,e,n,l,h,u,b,M,C),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zu(i,e,t,n,s,r,o,a){let c;if(e.side===Rt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fn,a),c===null)return null;Rs.copy(a),Rs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:i}}function ws(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ts),i.getVertexPosition(c,Es),i.getVertexPosition(l,Cs);const h=zu(i,e,t,n,Ts,Es,Cs,za);if(h){const u=new I;Jt.getBarycoord(za,Ts,Es,Cs,u),s&&(h.uv=Jt.getInterpolatedAttribute(s,a,c,l,u,new Ge)),r&&(h.uv1=Jt.getInterpolatedAttribute(r,a,c,l,u,new Ge)),o&&(h.normal=Jt.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Jt.getNormal(Ts,Es,Cs,f.normal),h.face=f,h.barycoord=u}return h}class cn extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function x(_,m,d,b,M,C,A,E,w,L,S){const v=C/w,P=A/L,F=C/2,B=A/2,H=E/2,V=w+1,Y=L+1;let J=0,W=0;const ne=new I;for(let ee=0;ee<Y;ee++){const Me=ee*P-B;for(let ze=0;ze<V;ze++){const Xe=ze*v-F;ne[_]=Xe*b,ne[m]=Me*M,ne[d]=H,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[d]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(ze/w),u.push(1-ee/L),J+=1}}for(let ee=0;ee<L;ee++)for(let Me=0;Me<w;Me++){const ze=f+Me+V*ee,Xe=f+Me+V*(ee+1),$e=f+(Me+1)+V*(ee+1),nt=f+(Me+1)+V*ee;c.push(ze,Xe,nt),c.push(Xe,$e,nt),W+=6}a.addGroup(p,W,S),p+=W,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Pi(i[t]);for(const s in n)e[s]=n[s]}return e}function Gu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Vu={clone:Pi,merge:At};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new I,Ga=new Ge,Va=new Ge;class kt extends nl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Ga,Va),t.subVectors(Va,Ga)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xi=-90,gi=1;class Xu extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kt(xi,gi,e,t);s.layers=this.layers,this.add(s);const r=new kt(xi,gi,e,t);r.layers=this.layers,this.add(r);const o=new kt(xi,gi,e,t);o.layers=this.layers,this.add(o);const a=new kt(xi,gi,e,t);a.layers=this.layers,this.add(a);const c=new kt(xi,gi,e,t);c.layers=this.layers,this.add(c);const l=new kt(xi,gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class il extends wt{constructor(e=[],t=Ai,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $u extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new il(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Sn});r.uniforms.tEquirect.value=t;const o=new Ke(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=$t),new Xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class yn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qu={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;l.inputState.pinching&&f>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ea{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yu extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sl extends wt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _i=new st,Wa=new st,Ps=[],Xa=new ei,ju=new st,Vi=new Ke,Hi=new Ui;class Ku extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ju)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Xa.copy(e.boundingBox).applyMatrix4(_i),this.boundingBox.union(Xa)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_i),Hi.copy(e.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),e.ray.intersectsSphere(Hi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_i),Wa.multiplyMatrices(n,_i),Vi.matrixWorld=Wa,Vi.raycast(e,Ps);for(let o=0,a=Ps.length;o<a;o++){const c=Ps[o];c.instanceId=r,c.object=this,t.push(c)}Ps.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sl(new Float32Array(s*this.count),s,this.count,Xo,on));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new I,Zu=new I,Ju=new Be;class Wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Dr.subVectors(n,t).cross(Zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ju.getNormalMatrix(e),s=this.coplanarPoint(Dr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Ui,Qu=new Ge(.5,.5),Ds=new I;class ta{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],x=r[8],_=r[9],m=r[10],d=r[11],b=r[12],M=r[13],C=r[14],A=r[15];if(s[0].setComponents(l-o,p-h,d-x,A-b).normalize(),s[1].setComponents(l+o,p+h,d+x,A+b).normalize(),s[2].setComponents(l+a,p+u,d+_,A+M).normalize(),s[3].setComponents(l-a,p-u,d-_,A-M).normalize(),n)s[4].setComponents(c,f,m,C).normalize(),s[5].setComponents(l-c,p-f,d-m,A-C).normalize();else if(s[4].setComponents(l-c,p-f,d-m,A-C).normalize(),t===an)s[5].setComponents(l+c,p+f,d+m,A+C).normalize();else if(t===Ys)s[5].setComponents(c,f,m,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Qu.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ds.x=s.normal.x>0?e.max.x:e.min.x,Ds.y=s.normal.y>0?e.max.y:e.min.y,Ds.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $a=new st,Do=new Jo,Is=new Ui,Ls=new I;class ef extends mt{constructor(e=new Vt,t=new rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Is.radius+=r,e.ray.intersectsSphere(Is)===!1)return;$a.copy(s).invert(),Do.copy(e.ray).applyMatrix4($a);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let x=f,_=p;x<_;x++){const m=l.getX(x);Ls.fromBufferAttribute(u,m),qa(Ls,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,_=p;x<_;x++)Ls.fromBufferAttribute(u,x),qa(Ls,x,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qa(i,e,t,n,s,r,o){const a=Do.distanceSqToPoint(i);if(a<t){const c=new I;Do.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ol extends wt{constructor(e,t,n=Zn,s,r,o,a=zt,c=zt,l,h=ts,u=1){if(h!==ts&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class al extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ti extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let x=0;const _=[],m=n/2;let d=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new yt(u,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(p,2));function b(){const C=new I,A=new I;let E=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const S=[],v=L/r,P=v*(t-e)+e;for(let F=0;F<=s;F++){const B=F/s,H=B*c+a,V=Math.sin(H),Y=Math.cos(H);A.x=P*V,A.y=-v*n+m,A.z=P*Y,u.push(A.x,A.y,A.z),C.set(V,w,Y).normalize(),f.push(C.x,C.y,C.z),p.push(B,1-v),S.push(x++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const v=_[S][L],P=_[S+1][L],F=_[S+1][L+1],B=_[S][L+1];(e>0||S!==0)&&(h.push(v,P,B),E+=3),(t>0||S!==r-1)&&(h.push(P,F,B),E+=3)}l.addGroup(d,E,0),d+=E}function M(C){const A=x,E=new Ge,w=new I;let L=0;const S=C===!0?e:t,v=C===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),x++;const P=x;for(let F=0;F<=s;F++){const H=F/s*c+a,V=Math.cos(H),Y=Math.sin(H);w.x=S*Y,w.y=m*v,w.z=S*V,u.push(w.x,w.y,w.z),f.push(0,v,0),E.x=V*.5+.5,E.y=Y*.5*v+.5,p.push(E.x,E.y),x++}for(let F=0;F<s;F++){const B=A+F,H=P+F;C===!0?h.push(H,H+1,B):h.push(H+1,H,B),L+=3}l.addGroup(d,L,C===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends Ti{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr extends Vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const M=new I,C=new I,A=new I;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],C),p(t[E+2],A),c(M,C,A,b)}function c(b,M,C,A){const E=A+1,w=[];for(let L=0;L<=E;L++){w[L]=[];const S=b.clone().lerp(C,L/E),v=M.clone().lerp(C,L/E),P=E-L;for(let F=0;F<=P;F++)F===0&&L===E?w[L][F]=S:w[L][F]=S.clone().lerp(v,F/P)}for(let L=0;L<E;L++)for(let S=0;S<2*(E-L)-1;S++){const v=Math.floor(S/2);S%2===0?(f(w[L][v+1]),f(w[L+1][v]),f(w[L][v])):(f(w[L][v+1]),f(w[L+1][v+1]),f(w[L+1][v]))}}function l(b){const M=new I;for(let C=0;C<r.length;C+=3)M.x=r[C+0],M.y=r[C+1],M.z=r[C+2],M.normalize().multiplyScalar(b),r[C+0]=M.x,r[C+1]=M.y,r[C+2]=M.z}function h(){const b=new I;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const C=m(b)/2/Math.PI+.5,A=d(b)/Math.PI+.5;o.push(C,1-A)}x(),u()}function u(){for(let b=0;b<o.length;b+=6){const M=o[b+0],C=o[b+2],A=o[b+4],E=Math.max(M,C,A),w=Math.min(M,C,A);E>.9&&w<.1&&(M<.2&&(o[b+0]+=1),C<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,M){const C=b*3;M.x=e[C+0],M.y=e[C+1],M.z=e[C+2]}function x(){const b=new I,M=new I,C=new I,A=new I,E=new Ge,w=new Ge,L=new Ge;for(let S=0,v=0;S<r.length;S+=9,v+=6){b.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),C.set(r[S+6],r[S+7],r[S+8]),E.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),A.copy(b).add(M).add(C).divideScalar(3);const P=m(A);_(E,v+0,b,P),_(w,v+2,M,P),_(L,v+4,C,P)}}function _(b,M,C,A){A<0&&b.x===1&&(o[M]=b.x-1),C.x===0&&C.z===0&&(o[M]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.vertices,e.indices,e.radius,e.details)}}class na extends tr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}}class ia extends tr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ia(e.radius,e.detail)}}class nr extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],x=[],_=[],m=[];for(let d=0;d<h;d++){const b=d*f-o;for(let M=0;M<l;M++){const C=M*u-r;x.push(C,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const M=b+l*d,C=b+l*(d+1),A=b+1+l*(d+1),E=b+1+l*d;p.push(M,C,E),p.push(C,A,E)}this.setIndex(p),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,p=[],x=[],_=[],m=[];for(let d=0;d<=n;d++){const b=[],M=d/n;let C=0;d===0&&o===0?C=.5/t:d===n&&c===Math.PI&&(C=-.5/t);for(let A=0;A<=t;A++){const E=A/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+M*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+C,1-M),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){const M=h[d][b+1],C=h[d][b],A=h[d+1][b],E=h[d+1][b+1];(d!==0||o>0)&&p.push(M,C,E),(d!==n-1||c<Math.PI)&&p.push(C,A,E)}this.setIndex(p),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ut extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nf extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sa extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ir=new st,Ya=new I,ja=new I;class cl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ka=new st,Wi=new I,Lr=new I;class sf extends cl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wi),Lr.copy(n.position),Lr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lr),n.updateMatrixWorld(),s.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ka.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka,n.coordinateSystem,n.reversedDepth)}}class ll extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hl extends nl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rf extends cl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new rf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class af extends sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cf extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Za=new st;class Ja{constructor(e,t,n=0,s=1/0){this.ray=new Jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Za.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Za),this}intersectObject(e,t=!0,n=[]){return Io(e,this,n,t),n.sort(Qa),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Io(e[s],this,n,t);return n.sort(Qa),n}}function Qa(i,e){return i.distance-e.distance}function Io(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Io(r[o],e,t,!0)}}function ec(i,e,t,n){const s=hf(n);switch(t){case $c:return i*e;case Xo:return i*e/s.components*s.byteLength;case $o:return i*e/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case qc:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case Ns:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bs:case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case ro:return Math.max(i,16)*Math.max(e,8)/4;case no:case so:return Math.max(i,8)*Math.max(e,8)/2;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case To:case Eo:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hf(i){switch(i){case ln:case Vc:return{byteLength:1,components:1};case Qi:case Hc:case Di:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case Zn:case Vo:case on:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function ul(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uf(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<u.length;p++){const x=u[f],_=u[p];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,x=u.length;p<x;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#endif`,hd=`uniform sampler2D dfgLUT;
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
}`,ud=`
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ud=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,Bp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:ff,alphahash_pars_fragment:df,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:xf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:yf,batching_vertex:Sf,begin_vertex:Mf,beginnormal_vertex:bf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:If,color_pars_vertex:Lf,color_vertex:Uf,common:Ff,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:kf,emissivemap_fragment:zf,emissivemap_pars_fragment:Gf,colorspace_fragment:Vf,colorspace_pars_fragment:Hf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:$f,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sd,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:ed,lights_lambert_fragment:td,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:rd,lights_toon_pars_fragment:od,lights_phong_fragment:ad,lights_phong_pars_fragment:cd,lights_physical_fragment:ld,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:yd,map_particle_pars_fragment:Sd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:bd,morphinstance_vertex:Td,morphcolor_vertex:Ed,morphnormal_vertex:Cd,morphtarget_pars_vertex:Ad,morphtarget_vertex:Rd,normal_fragment_begin:wd,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Id,normal_vertex:Ld,normalmap_pars_fragment:Ud,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:kd,packing:zd,premultiplied_alpha_fragment:Gd,project_vertex:Vd,dithering_fragment:Hd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:Kd,skinbase_vertex:Zd,skinning_pars_vertex:Jd,skinning_vertex:Qd,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:cp,uv_vertex:lp,worldpos_vertex:hp,background_vert:up,background_frag:fp,backgroundCube_vert:dp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:xp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:yp,equirect_vert:Sp,equirect_frag:Mp,linedashed_vert:bp,linedashed_frag:Tp,meshbasic_vert:Ep,meshbasic_frag:Cp,meshlambert_vert:Ap,meshlambert_frag:Rp,meshmatcap_vert:wp,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Ip,meshphong_vert:Lp,meshphong_frag:Up,meshphysical_vert:Fp,meshphysical_frag:Np,meshtoon_vert:Op,meshtoon_frag:Bp,points_vert:kp,points_frag:zp,shadow_vert:Gp,shadow_frag:Vp,sprite_vert:Hp,sprite_frag:Wp},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},sn={basic:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:At([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:At([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:At([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:At([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:At([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:At([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:At([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:At([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};sn.physical={uniforms:At([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Us={r:0,b:0,g:0},Vn=new qt,Xp=new st;function $p(i,e,t,n,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function x(M){let C=M.isScene===!0?M.background:null;return C&&C.isTexture&&(C=(M.backgroundBlurriness>0?t:e).get(C)),C}function _(M){let C=!1;const A=x(M);A===null?d(a,c):A&&A.isColor&&(d(A,1),C=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,C){const A=x(C);A&&(A.isCubeTexture||A.mapping===er)?(h===void 0&&(h=new Ke(new cn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Pi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(C.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Vn)),h.material.toneMapped=Ye.getTransfer(A.colorSpace)!==et,(u!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ke(new nr(2,2),new hn({name:"BackgroundMaterial",uniforms:Pi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,C){M.getRGB(Us,tl(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,C,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,C=1){a.set(M),c=C,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:_,addToRenderList:m,dispose:b}}function qp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,P,F,B,H){let V=!1;const Y=u(B,F,P);r!==Y&&(r=Y,l(r.object)),V=p(v,B,F,H),V&&x(v,B,F,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,C(v,P,F,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,F){const B=F.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let V=H[P.id];V===void 0&&(V={},H[P.id]=V);let Y=V[B];return Y===void 0&&(Y=f(c()),V[B]=Y),Y}function f(v){const P=[],F=[],B=[];for(let H=0;H<t;H++)P[H]=0,F[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,P,F,B){const H=r.attributes,V=P.attributes;let Y=0;const J=F.getAttributes();for(const W in J)if(J[W].location>=0){const ee=H[W];let Me=V[W];if(Me===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Me=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Me=v.instanceColor)),ee===void 0||ee.attribute!==Me||Me&&ee.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function x(v,P,F,B){const H={},V=P.attributes;let Y=0;const J=F.getAttributes();for(const W in J)if(J[W].location>=0){let ee=V[W];ee===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor));const Me={};Me.attribute=ee,ee&&ee.data&&(Me.data=ee.data),H[W]=Me,Y++}r.attributes=H,r.attributesNum=Y,r.index=B}function _(){const v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){d(v,0)}function d(v,P){const F=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;F[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),H[v]!==P&&(i.vertexAttribDivisor(v,P),H[v]=P)}function b(){const v=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==v[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function M(v,P,F,B,H,V,Y){Y===!0?i.vertexAttribIPointer(v,P,F,H,V):i.vertexAttribPointer(v,P,F,B,H,V)}function C(v,P,F,B){_();const H=B.attributes,V=F.getAttributes(),Y=P.defaultAttributeValues;for(const J in V){const W=V[J];if(W.location>=0){let ne=H[J];if(ne===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){const ee=ne.normalized,Me=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;const Xe=ze.buffer,$e=ze.type,nt=ze.bytesPerElement,$=$e===i.INT||$e===i.UNSIGNED_INT||ne.gpuType===Vo;if(ne.isInterleavedBufferAttribute){const K=ne.data,fe=K.stride,Pe=ne.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)d(W.location+_e,K.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let _e=0;_e<W.locationSize;_e++)M(W.location+_e,Me/W.locationSize,$e,ee,fe*nt,(Pe+Me/W.locationSize*_e)*nt,$)}else{if(ne.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)d(W.location+K,ne.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let K=0;K<W.locationSize;K++)M(W.location+K,Me/W.locationSize,$e,ee,Me*nt,Me/W.locationSize*K*nt,$)}}else if(Y!==void 0){const ee=Y[J];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}b()}function A(){L();for(const v in n){const P=n[v];for(const F in P){const B=P[F];for(const H in B)h(B[H].object),delete B[H];delete P[F]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const F in P){const B=P[F];for(const H in B)h(B[H].object),delete B[H];delete P[F]}delete n[v.id]}function w(v){for(const P in n){const F=n[P];if(F[v.id]===void 0)continue;const B=F[v.id];for(const H in B)h(B[H].object),delete B[H];delete F[v.id]}}function L(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Yp(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Qt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==on&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:C,vertexTextures:A,maxSamples:E}}function Kp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Wn,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const x=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,M=b*4;let C=d.clippingState||null;c.value=C,C=h(x,f,M,p);for(let A=0;A!==M;++A)C[A]=t[A];d.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,x!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,C=p;M!==_;++M,C+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,C),m[C+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zp(i){let e=new WeakMap;function t(o,a){return a===Jr?o.mapping=Ai:a===Qr&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jr||a===Qr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $u(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Pn=4,tc=[.125,.215,.35,.446,.526,.582],$n=20,Jp=256,Xi=new hl,nc=new Ve;let Ur=null,Fr=0,Nr=0,Or=!1;const Qp=new I;class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Qp}=r;Ur=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur,Fr,Nr),this._renderer.xr.enabled=Or,e.scissorTest=!1,vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Di,format:Qt,colorSpace:wi,depthBuffer:!1},s=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e0(r)),this._blurMaterial=n0(r,e,t),this._ggxMaterial=t0(r,e,t)}return s}_compileMaterial(e){const t=new Ke(new Vt,e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,s,r){const c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(nc),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ke(new cn,new cs({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(nc),d=!0);for(let M=0;M<6;M++){const C=M%3;C===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):C===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const A=this._cubeSize;vi(s,C*A,M>2?A:0,A,A),u.setRenderTarget(s),d&&u.render(_,c),u.render(e,c)}u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ai||e.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;vi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=.05+l*.95,p=u*f,{_lodMax:x}=this,_=this._sizeLods[n],m=3*_*(n>x-Pn?n-x+Pn:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=x-t,vi(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(a,Xi),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,vi(e,m,d,3*_,2*_),s.setRenderTarget(e),s.render(a,Xi)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const f=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=r/x,m=isFinite(r)?1+Math.floor(h*_):$n;m>$n&&Ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const d=[];let b=0;for(let w=0;w<$n;++w){const L=w/_,S=Math.exp(-L*L/2);d.push(S),w===0?b+=S:w<m&&(b+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=x,f.mipInt.value=M-n;const C=this._sizeLods[s],A=3*C*(s>M-Pn?s-M+Pn:0),E=4*(this._cubeSize-C);vi(t,A,E,3*C,2*C),c.setRenderTarget(t),c.render(u,Xi)}}function e0(i){const e=[],t=[],n=[];let s=i;const r=i-Pn+1+tc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Pn?c=tc[o-i+Pn-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,_=3,m=2,d=1,b=new Float32Array(_*x*p),M=new Float32Array(m*x*p),C=new Float32Array(d*x*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,L=E>2?0:-1,S=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];b.set(S,_*x*E),M.set(f,m*x*E);const v=[E,E,E,E,E,E];C.set(v,d*x*E)}const A=new Vt;A.setAttribute("position",new en(b,_)),A.setAttribute("uv",new en(M,m)),A.setAttribute("faceIndex",new en(C,d)),n.push(new Ke(A,null)),s>Pn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sc(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function t0(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function n0(i,e,t){const n=new Float32Array($n),s=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function rc(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ir(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function oc(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function ir(){return`

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
	`}function i0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jr||c===Qr,h=c===Ai||c===Ri;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ic(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ic(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&is("WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,x=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let M=0,C=b.length;M<C;M+=3){const A=b[M+0],E=b[M+1],w=b[M+2];f.push(A,E,E,w,w,A)}}else if(x!==void 0){const b=x.array;_=x.version;for(let M=0,C=b.length/3-1;M<C;M+=3){const A=M+0,E=M+1,w=M+2;f.push(A,E,E,w,w,A)}}else return;const m=new(Kc(f)?el:Qc)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function o0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,x){x!==0&&(i.drawElementsInstanced(n,p,r,f*o,x),t.update(p,n,x))}function h(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,n,1)}function u(f,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,x);let d=0;for(let b=0;b<x;b++)d+=p[b]*_[b];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c0(i,e,t){const n=new WeakMap,s=new tt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let C=0;x===!0&&(C=1),_===!0&&(C=2),m===!0&&(C=3);let A=a.attributes.position.count*C,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*E*4*u),L=new Zc(w,A,E,u);L.type=on,L.needsUpdate=!0;const S=C*4;for(let P=0;P<u;P++){const F=d[P],B=b[P],H=M[P],V=A*E*4*P;for(let Y=0;Y<F.count;Y++){const J=Y*S;x===!0&&(s.fromBufferAttribute(F,Y),w[V+J+0]=s.x,w[V+J+1]=s.y,w[V+J+2]=s.z,w[V+J+3]=0),_===!0&&(s.fromBufferAttribute(B,Y),w[V+J+4]=s.x,w[V+J+5]=s.y,w[V+J+6]=s.z,w[V+J+7]=0),m===!0&&(s.fromBufferAttribute(H,Y),w[V+J+8]=s.x,w[V+J+9]=s.y,w[V+J+10]=s.z,w[V+J+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new Ge(A,E)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const _=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function l0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const fl=new wt,ac=new ol(1,1),dl=new Zc,pl=new wu,ml=new il,cc=[],lc=[],hc=new Float32Array(16),uc=new Float32Array(9),fc=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sr(i,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function p0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;fc.set(n),i.uniformMatrix2fv(this.addr,!1,fc),gt(t,n)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),gt(t,n)}}function x0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),gt(t,n)}}function g0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function v0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function S0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function E0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=jc,r=ac):r=fl,t.setTexture2D(e||r,s)}function C0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pl,s)}function A0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ml,s)}function R0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dl,s)}function w0(i){switch(i){case 5126:return h0;case 35664:return u0;case 35665:return f0;case 35666:return d0;case 35674:return p0;case 35675:return m0;case 35676:return x0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return y0;case 5125:return S0;case 36294:return M0;case 36295:return b0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function P0(i,e){i.uniform1fv(this.addr,e)}function D0(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function I0(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function L0(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function U0(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F0(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N0(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O0(i,e){i.uniform1iv(this.addr,e)}function B0(i,e){i.uniform2iv(this.addr,e)}function k0(i,e){i.uniform3iv(this.addr,e)}function z0(i,e){i.uniform4iv(this.addr,e)}function G0(i,e){i.uniform1uiv(this.addr,e)}function V0(i,e){i.uniform2uiv(this.addr,e)}function H0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||fl,r[o])}function $0(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pl,r[o])}function q0(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ml,r[o])}function Y0(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dl,r[o])}function j0(i){switch(i){case 5126:return P0;case 35664:return D0;case 35665:return I0;case 35666:return L0;case 35674:return U0;case 35675:return F0;case 35676:return N0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return k0;case 35669:case 35673:return z0;case 5125:return G0;case 36294:return V0;case 36295:return H0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w0(t.type)}}class Z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function dc(i,e){i.seq.push(e),i.map[e.id]=e}function Q0(i,e,t){const n=i.name,s=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),o=Br.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){dc(t,l===void 0?new K0(a,i,e):new Z0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new J0(a),dc(t,u)),t=u}}}class zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Q0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const em=37297;let tm=0;function nm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const mc=new Be;function im(i){Ye._getMatrix(mc,Ye.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case qs:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nm(i.getShaderSource(e),a)}else return r}function sm(i,e){const t=im(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rm(i,e){let t;switch(e){case Vh:t="Linear";break;case Hh:t="Reinhard";break;case Wh:t="Cineon";break;case Xh:t="ACESFilmic";break;case qh:t="AgX";break;case Yh:t="Neutral";break;case $h:t="Custom";break;default:Ue("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new I;function om(){Ye.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function cm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Yi(i){return i!==""}function gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(hm,fm)}const um=new Map;function fm(i,e){let t=ke[e];if(t===void 0){const n=um.get(e);if(n!==void 0)t=ke[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(dm,pm)}function pm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function xm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ri:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case zh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function vm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ym(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=mm(t),l=xm(t),h=gm(t),u=_m(t),f=vm(t),p=am(t),x=cm(r),_=s.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yi).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Yi).join(`
`),d.length>0&&(d+=`
`)):(m=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),d=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?ke.tonemapping_pars_fragment:"",t.toneMapping!==In?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=Lo(o),o=gc(o,t),o=_c(o,t),a=Lo(a),a=gc(a,t),a=_c(a,t),o=vc(o),a=vc(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=b+m+o,C=b+d+a,A=pc(s,s.VERTEX_SHADER,M),E=pc(s,s.FRAGMENT_SHADER,C);s.attachShader(_,A),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(A)||"",H=s.getShaderInfoLog(E)||"",V=F.trim(),Y=B.trim(),J=H.trim();let W=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{const ee=xc(s,A,"vertex"),Me=xc(s,E,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+ee+`
`+Me)}else V!==""?Ue("WebGLProgram: Program Info Log:",V):(Y===""||J==="")&&(ne=!1);ne&&(P.diagnostics={runnable:W,programLog:V,vertexShader:{log:Y,prefix:m},fragmentShader:{log:J,prefix:d}})}s.deleteShader(A),s.deleteShader(E),L=new zs(s,_),S=lm(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,em)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Sm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bm(e),t.set(e,n)),n}}class bm{constructor(e){this.id=Sm++,this.code=e,this.usedTimes=0}}function Tm(i,e,t,n,s,r,o){const a=new Qo,c=new Mm,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,F,B){const H=F.fog,V=B.geometry,Y=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),W=J&&J.mapping===er?J.image.height:null,ne=x[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&Ue("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Me=ee!==void 0?ee.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let Xe,$e,nt,$;if(ne){const Je=sn[ne];Xe=Je.vertexShader,$e=Je.fragmentShader}else Xe=S.vertexShader,$e=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);const K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,_e=B.isBatchedMesh===!0,Le=!!S.map,lt=!!S.matcap,Fe=!!J,Ze=!!S.aoMap,R=!!S.lightMap,Ne=!!S.bumpMap,Oe=!!S.normalMap,je=!!S.displacementMap,de=!!S.emissiveMap,rt=!!S.metalnessMap,ae=!!S.roughnessMap,Se=S.anisotropy>0,T=S.clearcoat>0,g=S.dispersion>0,O=S.iridescence>0,q=S.sheen>0,X=S.transmission>0,k=Se&&!!S.anisotropyMap,ve=T&&!!S.clearcoatMap,oe=T&&!!S.clearcoatNormalMap,be=T&&!!S.clearcoatRoughnessMap,ye=O&&!!S.iridescenceMap,Z=O&&!!S.iridescenceThicknessMap,ie=q&&!!S.sheenColorMap,Re=q&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ue=!!S.specularColorMap,De=!!S.specularIntensityMap,D=X&&!!S.transmissionMap,le=X&&!!S.thicknessMap,se=!!S.gradientMap,re=!!S.alphaMap,Q=S.alphaTest>0,j=!!S.alphaHash,xe=!!S.extensions;let Ie=In;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const ot={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:$e,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:_e,batchingColor:_e&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:wi,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:lt,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:W,aoMap:Ze,lightMap:R,bumpMap:Ne,normalMap:Oe,displacementMap:f&&je,emissiveMap:de,normalMapObjectSpace:Oe&&S.normalMapType===Jh,normalMapTangentSpace:Oe&&S.normalMapType===Yc,metalnessMap:rt,roughnessMap:ae,anisotropy:Se,anisotropyMap:k,clearcoat:T,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:be,dispersion:g,iridescence:O,iridescenceMap:ye,iridescenceThicknessMap:Z,sheen:q,sheenColorMap:ie,sheenRoughnessMap:Re,specularMap:Ce,specularColorMap:ue,specularIntensityMap:De,transmission:X,transmissionMap:D,thicknessMap:le,gradientMap:se,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:Q,alphaHash:j,combine:S.combine,mapUv:Le&&_(S.map.channel),aoMapUv:Ze&&_(S.aoMap.channel),lightMapUv:R&&_(S.lightMap.channel),bumpMapUv:Ne&&_(S.bumpMap.channel),normalMapUv:Oe&&_(S.normalMap.channel),displacementMapUv:je&&_(S.displacementMap.channel),emissiveMapUv:de&&_(S.emissiveMap.channel),metalnessMapUv:rt&&_(S.metalnessMap.channel),roughnessMapUv:ae&&_(S.roughnessMap.channel),anisotropyMapUv:k&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:De&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Oe||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Le||re),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ze,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:de&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_n,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function d(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(v,S),M(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function M(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function C(S){const v=x[S.type];let P;if(v){const F=sn[v];P=Vu.clone(F.uniforms)}else P=S.uniforms;return P}function A(S,v){let P;for(let F=0,B=h.length;F<B;F++){const H=h[F];if(H.cacheKey===v){P=H,++P.usedTimes;break}}return P===void 0&&(P=new ym(i,v,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:C,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:L}}function Em(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,x,_,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:_,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,x,_,m){const d=o(u,f,p,x,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function c(u,f,p,x,_,m){const d=o(u,f,p,x,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Cm),n.length>1&&n.sort(f||Sc),s.length>1&&s.sort(f||Sc)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Am(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Mc,i.set(n,[o])):s>=r.length?(o=new Mc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ve};break;case"SpotLight":t={position:new I,direction:new I,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function wm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pm=0;function Dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Im(i){const e=new Rm,t=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new st,o=new st;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,x=0,_=0,m=0,d=0,b=0,M=0,C=0,A=0,E=0,w=0;l.sort(Dm);for(let S=0,v=l.length;S<v;S++){const P=l[S],F=P.color,B=P.intensity,H=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],B);w++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(F).multiplyScalar(B),Y.distance=H,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[_]=Y;const J=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,C++}_++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(F).multiplyScalar(B),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const J=P.shadow,W=t.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=V,n.pointShadowMatrix[x]=P.shadow.matrix,M++}n.point[x]=Y,x++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(B),Y.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[d]=Y,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==A||L.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,L.directionalLength=p,L.pointLength=x,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=A,L.numLightProbes=w,n.version=Pm++)}function c(l,h){let u=0,f=0,p=0,x=0,_=0;const m=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const M=l[d];if(M.isDirectionalLight){const C=n.directional[u];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),u++}else if(M.isSpotLight){const C=n.spot[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const C=n.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const C=n.hemi[_];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function bc(i){const e=new Im(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Lm(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new bc(i),e.set(s,[a])):r>=o.length?(a=new bc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fm=`uniform sampler2D shadow_pass;
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
}`;function Nm(i,e,t){let n=new ta;const s=new Ge,r=new Ge,o=new tt,a=new tf({depthPacking:Zh}),c=new nf,l={},h=t.maxTextureSize,u={[Fn]:Rt,[Rt]:Fn,[_n]:_n},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Um,fragmentShader:Fm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Vt;x.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let d=this.type;this.render=function(E,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Sn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==gn&&this.type===gn,H=d===gn&&this.type!==gn;for(let V=0,Y=E.length;V<Y;V++){const J=E[V],W=J.shadow;if(W===void 0){Ue("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ne=W.getFrameExtents();if(s.multiply(ne),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,W.mapSize.y=r.y)),W.map===null||B===!0||H===!0){const Me=this.type!==gn?{minFilter:zt,magFilter:zt}:{};W.map!==null&&W.map.dispose(),W.map=new Jn(s.x,s.y,Me),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ee=W.getViewportCount();for(let Me=0;Me<ee;Me++){const ze=W.getViewport(Me);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),F.viewport(o),W.updateMatrices(J,Me),n=W.getFrustum(),C(w,L,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&b(W,L),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,P)};function b(E,w){const L=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,L,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,L,p,_,null)}function M(E,w,L,S){let v=null;const P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=v.uuid,B=w.uuid;let H=l[F];H===void 0&&(H={},l[F]=H);let V=H[B];V===void 0&&(V=v.clone(),H[B]=V,w.addEventListener("dispose",A)),v=V}if(v.visible=w.visible,v.wireframe=w.wireframe,S===gn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=i.properties.get(v);F.light=L}return v}function C(E,w,L,S,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const B=e.update(E),H=E.material;if(Array.isArray(H)){const V=B.groups;for(let Y=0,J=V.length;Y<J;Y++){const W=V[Y],ne=H[W.materialIndex];if(ne&&ne.visible){const ee=M(E,ne,S,v);E.onBeforeShadow(i,E,w,L,B,ee,W),i.renderBufferDirect(L,null,B,ee,E,W),E.onAfterShadow(i,E,w,L,B,ee,W)}}}else if(H.visible){const V=M(E,H,S,v);E.onBeforeShadow(i,E,w,L,B,V,null),i.renderBufferDirect(L,null,B,V,E,null),E.onAfterShadow(i,E,w,L,B,V,null)}}const F=E.children;for(let B=0,H=F.length;B<H;B++)C(F[B],w,L,S,v)}function A(E){E.target.removeEventListener("dispose",A);for(const L in l){const S=l[L],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Om={[Xr]:$r,[qr]:Kr,[Yr]:Zr,[Ci]:jr,[$r]:Xr,[Kr]:qr,[Zr]:Yr,[jr]:Ci};function Bm(i,e){function t(){let D=!1;const le=new tt;let se=null;const re=new tt(0,0,0,0);return{setMask:function(Q){se!==Q&&!D&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){D=Q},setClear:function(Q,j,xe,Ie,ot){ot===!0&&(Q*=Ie,j*=Ie,xe*=Ie),le.set(Q,j,xe,Ie),re.equals(le)===!1&&(i.clearColor(Q,j,xe,Ie),re.copy(le))},reset:function(){D=!1,se=null,re.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,se=null,re=null,Q=null;return{setReversed:function(j){if(le!==j){const xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),le=j;const Ie=Q;Q=null,this.setClear(Ie)}},getReversed:function(){return le},setTest:function(j){j?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){se!==j&&!D&&(i.depthMask(j),se=j)},setFunc:function(j){if(le&&(j=Om[j]),re!==j){switch(j){case Xr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Yr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=j}},setLocked:function(j){D=j},setClear:function(j){Q!==j&&(le&&(j=1-j),i.clearDepth(j),Q=j)},reset:function(){D=!1,se=null,re=null,Q=null,le=!1}}}function s(){let D=!1,le=null,se=null,re=null,Q=null,j=null,xe=null,Ie=null,ot=null;return{setTest:function(Je){D||(Je?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Je){le!==Je&&!D&&(i.stencilMask(Je),le=Je)},setFunc:function(Je,nn,Yt){(se!==Je||re!==nn||Q!==Yt)&&(i.stencilFunc(Je,nn,Yt),se=Je,re=nn,Q=Yt)},setOp:function(Je,nn,Yt){(j!==Je||xe!==nn||Ie!==Yt)&&(i.stencilOp(Je,nn,Yt),j=Je,xe=nn,Ie=Yt)},setLocked:function(Je){D=Je},setClear:function(Je){ot!==Je&&(i.clearStencil(Je),ot=Je)},reset:function(){D=!1,le=null,se=null,re=null,Q=null,j=null,xe=null,Ie=null,ot=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,b=null,M=null,C=null,A=null,E=null,w=new Ve(0,0,0),L=0,S=!1,v=null,P=null,F=null,B=null,H=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=J>=2);let ne=null,ee={};const Me=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Xe=new tt().fromArray(Me),$e=new tt().fromArray(ze);function nt(D,le,se,re){const Q=new Uint8Array(4),j=i.createTexture();i.bindTexture(D,j),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<se;xe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(le+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return j}const $={};$[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Ci),Ne(!1),Oe(ga),K(i.CULL_FACE),Ze(Sn);function K(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function fe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Pe(D,le){return u[D]!==le?(i.bindFramebuffer(D,le),u[D]=le,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(D,le){let se=p,re=!1;if(D){se=f.get(le),se===void 0&&(se=[],f.set(le,se));const Q=D.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let j=0,xe=Q.length;j<xe;j++)se[j]=i.COLOR_ATTACHMENT0+j;se.length=Q.length,re=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,re=!0);re&&i.drawBuffers(se)}function Le(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const lt={[Xn]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};lt[Eh]=i.MIN,lt[Ch]=i.MAX;const Fe={[Ah]:i.ZERO,[Rh]:i.ONE,[wh]:i.SRC_COLOR,[Hr]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Wr]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,le,se,re,Q,j,xe,Ie,ot,Je){if(D===Sn){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),D!==Mh){if(D!==m||Je!==S){if((d!==Xn||C!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,C=Xn),Je)switch(D){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ya:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",D);break}else switch(D){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case va:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ya:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",D);break}b=null,M=null,A=null,E=null,w.set(0,0,0),L=0,m=D,S=Je}return}Q=Q||le,j=j||se,xe=xe||re,(le!==d||Q!==C)&&(i.blendEquationSeparate(lt[le],lt[Q]),d=le,C=Q),(se!==b||re!==M||j!==A||xe!==E)&&(i.blendFuncSeparate(Fe[se],Fe[re],Fe[j],Fe[xe]),b=se,M=re,A=j,E=xe),(Ie.equals(w)===!1||ot!==L)&&(i.blendColor(Ie.r,Ie.g,Ie.b,ot),w.copy(Ie),L=ot),m=D,S=!1}function R(D,le){D.side===_n?fe(i.CULL_FACE):K(i.CULL_FACE);let se=D.side===Rt;le&&(se=!se),Ne(se),D.blending===Mi&&D.transparent===!1?Ze(Sn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const re=D.stencilWrite;a.setTest(re),re&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function Oe(D){D!==vh?(K(i.CULL_FACE),D!==P&&(D===ga?i.cullFace(i.BACK):D===yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=D}function je(D){D!==F&&(Y&&i.lineWidth(D),F=D)}function de(D,le,se){D?(K(i.POLYGON_OFFSET_FILL),(B!==le||H!==se)&&(i.polygonOffset(le,se),B=le,H=se)):fe(i.POLYGON_OFFSET_FILL)}function rt(D){D?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ae(D){D===void 0&&(D=i.TEXTURE0+V-1),ne!==D&&(i.activeTexture(D),ne=D)}function Se(D,le,se){se===void 0&&(ne===null?se=i.TEXTURE0+V-1:se=ne);let re=ee[se];re===void 0&&(re={type:void 0,texture:void 0},ee[se]=re),(re.type!==D||re.texture!==le)&&(ne!==se&&(i.activeTexture(se),ne=se),i.bindTexture(D,le||$[D]),re.type=D,re.texture=le)}function T(){const D=ee[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function X(){try{i.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function oe(){try{i.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function be(){try{i.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ye(){try{i.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Z(){try{i.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ie(D){Xe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function Re(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Ce(D,le){let se=l.get(le);se===void 0&&(se=new WeakMap,l.set(le,se));let re=se.get(D);re===void 0&&(re=i.getUniformBlockIndex(le,D.name),se.set(D,re))}function ue(D,le){const re=l.get(le).get(D);c.get(le)!==re&&(i.uniformBlockBinding(le,re,D.__bindingPointIndex),c.set(le,re))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ee={},u={},f=new WeakMap,p=[],x=null,_=!1,m=null,d=null,b=null,M=null,C=null,A=null,E=null,w=new Ve(0,0,0),L=0,S=!1,v=null,P=null,F=null,B=null,H=null,Xe.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:Pe,drawBuffers:_e,useProgram:Le,setBlending:Ze,setMaterial:R,setFlipSided:Ne,setCullFace:Oe,setLineWidth:je,setPolygonOffset:de,setScissorTest:rt,activeTexture:ae,bindTexture:Se,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:ye,texImage3D:Z,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:be,texSubImage2D:q,texSubImage3D:X,compressedTexSubImage2D:k,compressedTexSubImage3D:ve,scissor:ie,viewport:Re,reset:De}}function km(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,g){return p?new OffscreenCanvas(T,g):js("canvas")}function _(T,g,O){let q=1;const X=Se(T);if((X.width>O||X.height>O)&&(q=O/Math.max(X.width,X.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const k=Math.floor(q*X.width),ve=Math.floor(q*X.height);u===void 0&&(u=x(k,ve));const oe=g?x(k,ve):u;return oe.width=k,oe.height=ve,oe.getContext("2d").drawImage(T,0,0,k,ve),Ue("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+k+"x"+ve+")."),oe}else return"data"in T&&Ue("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,g,O,q,X=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let k=g;if(g===i.RED&&(O===i.FLOAT&&(k=i.R32F),O===i.HALF_FLOAT&&(k=i.R16F),O===i.UNSIGNED_BYTE&&(k=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.R8UI),O===i.UNSIGNED_SHORT&&(k=i.R16UI),O===i.UNSIGNED_INT&&(k=i.R32UI),O===i.BYTE&&(k=i.R8I),O===i.SHORT&&(k=i.R16I),O===i.INT&&(k=i.R32I)),g===i.RG&&(O===i.FLOAT&&(k=i.RG32F),O===i.HALF_FLOAT&&(k=i.RG16F),O===i.UNSIGNED_BYTE&&(k=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RG8UI),O===i.UNSIGNED_SHORT&&(k=i.RG16UI),O===i.UNSIGNED_INT&&(k=i.RG32UI),O===i.BYTE&&(k=i.RG8I),O===i.SHORT&&(k=i.RG16I),O===i.INT&&(k=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RGB8UI),O===i.UNSIGNED_SHORT&&(k=i.RGB16UI),O===i.UNSIGNED_INT&&(k=i.RGB32UI),O===i.BYTE&&(k=i.RGB8I),O===i.SHORT&&(k=i.RGB16I),O===i.INT&&(k=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),O===i.UNSIGNED_INT&&(k=i.RGBA32UI),O===i.BYTE&&(k=i.RGBA8I),O===i.SHORT&&(k=i.RGBA16I),O===i.INT&&(k=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),g===i.RGBA){const ve=X?qs:Ye.getTransfer(q);O===i.FLOAT&&(k=i.RGBA32F),O===i.HALF_FLOAT&&(k=i.RGBA16F),O===i.UNSIGNED_BYTE&&(k=ve===et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function C(T,g){let O;return T?g===null||g===Zn||g===es?O=i.DEPTH24_STENCIL8:g===on?O=i.DEPTH32F_STENCIL8:g===Qi&&(O=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Zn||g===es?O=i.DEPTH_COMPONENT24:g===on?O=i.DEPTH_COMPONENT32F:g===Qi&&(O=i.DEPTH_COMPONENT16),O}function A(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==$t?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function E(T){const g=T.target;g.removeEventListener("dispose",E),L(g),g.isVideoTexture&&h.delete(g)}function w(T){const g=T.target;g.removeEventListener("dispose",w),v(g)}function L(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,q=f.get(O);if(q){const X=q[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&S(T),Object.keys(q).length===0&&f.delete(O)}n.remove(T)}function S(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,q=f.get(O);delete q[g.__cacheKey],o.memory.textures--}function v(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let X=0;X<g.__webglFramebuffer[q].length;X++)i.deleteFramebuffer(g.__webglFramebuffer[q][X]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,X=O.length;q<X;q++){const k=n.get(O[q]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(T)}let P=0;function F(){P=0}function B(){const T=P;return T>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function H(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function V(T,g){const O=n.get(T);if(T.isVideoTexture&&rt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function J(T,g){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function W(T,g){const O=n.get(T);if(T.version>0&&O.__version!==T.version){K(O,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const ne={[eo]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ee={[zt]:i.NEAREST,[jh]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[lr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},Me={[Qh]:i.NEVER,[ru]:i.ALWAYS,[eu]:i.LESS,[jc]:i.LEQUAL,[tu]:i.EQUAL,[su]:i.GEQUAL,[nu]:i.GREATER,[iu]:i.NOTEQUAL};function ze(T,g){if(g.type===on&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===$t||g.magFilter===lr||g.magFilter===ds||g.magFilter===qn||g.minFilter===$t||g.minFilter===lr||g.minFilter===ds||g.minFilter===qn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ee[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ee[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==ds&&g.minFilter!==qn||g.type===on&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Xe(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",E));const q=g.source;let X=f.get(q);X===void 0&&(X={},f.set(q,X));const k=H(g);if(k!==T.__cacheKey){X[k]===void 0&&(X[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),X[k].usedTimes++;const ve=X[T.__cacheKey];ve!==void 0&&(X[T.__cacheKey].usedTimes--,ve.usedTimes===0&&S(g)),T.__cacheKey=k,T.__webglTexture=X[k].texture}return O}function $e(T,g,O){return Math.floor(Math.floor(T/O)/g)}function nt(T,g,O,q){const k=T.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,q,g.data);else{k.sort((Z,ie)=>Z.start-ie.start);let ve=0;for(let Z=1;Z<k.length;Z++){const ie=k[ve],Re=k[Z],Ce=ie.start+ie.count,ue=$e(Re.start,g.width,4),De=$e(ie.start,g.width,4);Re.start<=Ce+1&&ue===De&&$e(Re.start+Re.count-1,g.width,4)===ue?ie.count=Math.max(ie.count,Re.start+Re.count-ie.start):(++ve,k[ve]=Re)}k.length=ve+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Z=0,ie=k.length;Z<ie;Z++){const Re=k[Z],Ce=Math.floor(Re.start/4),ue=Math.ceil(Re.count/4),De=Ce%g.width,D=Math.floor(Ce/g.width),le=ue,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,De),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,De,D,le,se,O,q,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function $(T,g,O){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const X=Xe(T,g),k=g.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+O);const ve=n.get(k);if(k.version!==ve.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const oe=Ye.getPrimaries(Ye.workingColorSpace),be=g.colorSpace===wn?null:Ye.getPrimaries(g.colorSpace),ye=g.colorSpace===wn||oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Z=_(g.image,!1,s.maxTextureSize);Z=ae(g,Z);const ie=r.convert(g.format,g.colorSpace),Re=r.convert(g.type);let Ce=M(g.internalFormat,ie,Re,g.colorSpace,g.isVideoTexture);ze(q,g);let ue;const De=g.mipmaps,D=g.isVideoTexture!==!0,le=ve.__version===void 0||X===!0,se=k.dataReady,re=A(g,Z);if(g.isDepthTexture)Ce=C(g.format===ns,g.type),le&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Ce,Z.width,Z.height,0,ie,Re,null));else if(g.isDataTexture)if(De.length>0){D&&le&&t.texStorage2D(i.TEXTURE_2D,re,Ce,De[0].width,De[0].height);for(let Q=0,j=De.length;Q<j;Q++)ue=De[Q],D?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,ie,Re,ue.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,ie,Re,ue.data);g.generateMipmaps=!1}else D?(le&&t.texStorage2D(i.TEXTURE_2D,re,Ce,Z.width,Z.height),se&&nt(g,Z,ie,Re)):t.texImage2D(i.TEXTURE_2D,0,Ce,Z.width,Z.height,0,ie,Re,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ce,De[0].width,De[0].height,Z.depth);for(let Q=0,j=De.length;Q<j;Q++)if(ue=De[Q],g.format!==Qt)if(ie!==null)if(D){if(se)if(g.layerUpdates.size>0){const xe=ec(ue.width,ue.height,g.format,g.type);for(const Ie of g.layerUpdates){const ot=ue.data.subarray(Ie*xe/ue.data.BYTES_PER_ELEMENT,(Ie+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ie,ue.width,ue.height,1,ie,ot)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,Z.depth,ie,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,ue.width,ue.height,Z.depth,0,ue.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,Z.depth,ie,Re,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,ue.width,ue.height,Z.depth,0,ie,Re,ue.data)}else{D&&le&&t.texStorage2D(i.TEXTURE_2D,re,Ce,De[0].width,De[0].height);for(let Q=0,j=De.length;Q<j;Q++)ue=De[Q],g.format!==Qt?ie!==null?D?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,ie,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,ue.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ue.width,ue.height,ie,Re,ue.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,ue.width,ue.height,0,ie,Re,ue.data)}else if(g.isDataArrayTexture)if(D){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ce,Z.width,Z.height,Z.depth),se)if(g.layerUpdates.size>0){const Q=ec(Z.width,Z.height,g.format,g.type);for(const j of g.layerUpdates){const xe=Z.data.subarray(j*Q/Z.data.BYTES_PER_ELEMENT,(j+1)*Q/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ie,Re,xe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ie,Re,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,Z.width,Z.height,Z.depth,0,ie,Re,Z.data);else if(g.isData3DTexture)D?(le&&t.texStorage3D(i.TEXTURE_3D,re,Ce,Z.width,Z.height,Z.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ie,Re,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,Z.width,Z.height,Z.depth,0,ie,Re,Z.data);else if(g.isFramebufferTexture){if(le)if(D)t.texStorage2D(i.TEXTURE_2D,re,Ce,Z.width,Z.height);else{let Q=Z.width,j=Z.height;for(let xe=0;xe<re;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ce,Q,j,0,ie,Re,null),Q>>=1,j>>=1}}else if(De.length>0){if(D&&le){const Q=Se(De[0]);t.texStorage2D(i.TEXTURE_2D,re,Ce,Q.width,Q.height)}for(let Q=0,j=De.length;Q<j;Q++)ue=De[Q],D?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ie,Re,ue):t.texImage2D(i.TEXTURE_2D,Q,Ce,ie,Re,ue);g.generateMipmaps=!1}else if(D){if(le){const Q=Se(Z);t.texStorage2D(i.TEXTURE_2D,re,Ce,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Re,Z)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ie,Re,Z);m(g)&&d(q),ve.__version=k.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function K(T,g,O){if(g.image.length!==6)return;const q=Xe(T,g),X=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const k=n.get(X);if(X.version!==k.__version||q===!0){t.activeTexture(i.TEXTURE0+O);const ve=Ye.getPrimaries(Ye.workingColorSpace),oe=g.colorSpace===wn?null:Ye.getPrimaries(g.colorSpace),be=g.colorSpace===wn||ve===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ye=g.isCompressedTexture||g.image[0].isCompressedTexture,Z=g.image[0]&&g.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!ye&&!Z?ie[j]=_(g.image[j],!0,s.maxCubemapSize):ie[j]=Z?g.image[j].image:g.image[j],ie[j]=ae(g,ie[j]);const Re=ie[0],Ce=r.convert(g.format,g.colorSpace),ue=r.convert(g.type),De=M(g.internalFormat,Ce,ue,g.colorSpace),D=g.isVideoTexture!==!0,le=k.__version===void 0||q===!0,se=X.dataReady;let re=A(g,Re);ze(i.TEXTURE_CUBE_MAP,g);let Q;if(ye){D&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,De,Re.width,Re.height);for(let j=0;j<6;j++){Q=ie[j].mipmaps;for(let xe=0;xe<Q.length;xe++){const Ie=Q[xe];g.format!==Qt?Ce!==null?D?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,De,Ie.width,Ie.height,0,Ie.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Ie.width,Ie.height,Ce,ue,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,De,Ie.width,Ie.height,0,Ce,ue,Ie.data)}}}else{if(Q=g.mipmaps,D&&le){Q.length>0&&re++;const j=Se(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,De,j.width,j.height)}for(let j=0;j<6;j++)if(Z){D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Ce,ue,ie[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,ie[j].width,ie[j].height,0,Ce,ue,ie[j].data);for(let xe=0;xe<Q.length;xe++){const ot=Q[xe].image[j].image;D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,ot.width,ot.height,Ce,ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,De,ot.width,ot.height,0,Ce,ue,ot.data)}}else{D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,ue,ie[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,Ce,ue,ie[j]);for(let xe=0;xe<Q.length;xe++){const Ie=Q[xe];D?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ce,ue,Ie.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,De,Ce,ue,Ie.image[j])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),k.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function fe(T,g,O,q,X,k){const ve=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),be=M(O.internalFormat,ve,oe,O.colorSpace),ye=n.get(g),Z=n.get(O);if(Z.__renderTarget=g,!ye.__hasExternalTextures){const ie=Math.max(1,g.width>>k),Re=Math.max(1,g.height>>k);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?t.texImage3D(X,k,be,ie,Re,g.depth,0,ve,oe,null):t.texImage2D(X,k,be,ie,Re,0,ve,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),de(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,X,Z.__webglTexture,0,je(g)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,X,Z.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,X=q&&q.isDepthTexture?q.type:null,k=C(g.stencilBuffer,X),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=je(g);de(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,k,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,k,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,k,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{const q=g.textures;for(let X=0;X<q.length;X++){const k=q[X],ve=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),be=M(k.internalFormat,ve,oe,k.colorSpace),ye=je(g);O&&de(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,be,g.width,g.height):de(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,be,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,be,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const X=q.__webglTexture,k=je(g);if(g.depthTexture.format===ts)de(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(g.depthTexture.format===ns)de(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Le(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",X)};q.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?_e(g.__webglFramebuffer[0],T):_e(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),Pe(g.__webglDepthbuffer[q],T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,k)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pe(g.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,g,O){const q=n.get(T);g!==void 0&&fe(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Le(T)}function Fe(T){const g=T.texture,O=n.get(T),q=n.get(g);T.addEventListener("dispose",w);const X=T.textures,k=T.isWebGLCubeRenderTarget===!0,ve=X.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,o.memory.textures++),k){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let be=0;be<g.mipmaps.length;be++)O.__webglFramebuffer[oe][be]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ve)for(let oe=0,be=X.length;oe<be;oe++){const ye=n.get(X[oe]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&de(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const be=X[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const ye=r.convert(be.format,be.colorSpace),Z=r.convert(be.type),ie=M(be.internalFormat,ye,Z,be.colorSpace,T.isXRRenderTarget===!0),Re=je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ie,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ze(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)fe(O.__webglFramebuffer[oe][be],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,be);else fe(O.__webglFramebuffer[oe],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,be=X.length;oe<be;oe++){const ye=X[oe],Z=n.get(ye);let ie=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ze(ie,ye),fe(O.__webglFramebuffer,T,ye,i.COLOR_ATTACHMENT0+oe,ie,0),m(ye)&&d(ie)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,q.__webglTexture),ze(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)fe(O.__webglFramebuffer[be],T,g,i.COLOR_ATTACHMENT0,oe,be);else fe(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,oe,0);m(g)&&d(oe),t.unbindTexture()}T.depthBuffer&&Le(T)}function Ze(T){const g=T.textures;for(let O=0,q=g.length;O<q;O++){const X=g[O];if(m(X)){const k=b(T),ve=n.get(X).__webglTexture;t.bindTexture(k,ve),d(k),t.unbindTexture()}}}const R=[],Ne=[];function Oe(T){if(T.samples>0){if(de(T)===!1){const g=T.textures,O=T.width,q=T.height;let X=i.COLOR_BUFFER_BIT;const k=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),oe=g.length>1;if(oe)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=T.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const Z=n.get(g[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,X,i.NEAREST),c===!0&&(R.length=0,Ne.length=0,R.push(i.COLOR_ATTACHMENT0+ye),T.depthBuffer&&T.resolveDepthBuffer===!1&&(R.push(k),Ne.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const Z=n.get(g[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function je(T){return Math.min(s.maxSamples,T.samples)}function de(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function rt(T){const g=o.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function ae(T,g){const O=T.colorSpace,q=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==wi&&O!==wn&&(Ye.getTransfer(O)===et?(q!==Qt||X!==ln)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",O)),g}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=lt,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=de}function zm(i,e){function t(n,s=wn){let r;const o=Ye.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===qc)return i.RGB;if(n===Qt)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===qo)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Ns||n===Os||n===Bs||n===ks)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===ao||n===co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===ao)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===xo||n===go||n===_o||n===vo||n===yo||n===So||n===Mo||n===bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===To||n===Eo||n===Co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===To)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===Ro||n===wo||n===Po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
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

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new al(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:Gm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends Ii{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,x=null;const _=typeof XRWebGLBinding<"u",m=new Hm,d={},b=t.getContextAttributes();let M=null,C=null;const A=[],E=[],w=new Ge;let L=null;const S=new kt;S.viewport=new tt;const v=new kt;v.viewport=new tt;const P=[S,v],F=new cf;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=A[$];return K===void 0&&(K=new Pr,A[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=A[$];return K===void 0&&(K=new Pr,A[$]=K),K.getGripSpace()},this.getHand=function($){let K=A[$];return K===void 0&&(K=new Pr,A[$]=K),K.getHandSpace()};function V($){const K=E.indexOf($.inputSource);if(K===-1)return;const fe=A[K];fe!==void 0&&(fe.update($.inputSource,$.frame,l||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",J);for(let $=0;$<A.length;$++){const K=E[$];K!==null&&(E[$]=null,A[$].disconnect(K))}B=null,H=null,m.reset();for(const $ in d)delete d[$];e.setRenderTarget(M),p=null,f=null,u=null,s=null,C=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,_e=null;b.depth&&(_e=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?ns:ts,Pe=b.stencil?es:Zn);const Le={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Jn(f.textureWidth,f.textureHeight,{format:Qt,type:ln,depthTexture:new ol(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Jn(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J($){for(let K=0;K<$.removed.length;K++){const fe=$.removed[K],Pe=E.indexOf(fe);Pe>=0&&(E[Pe]=null,A[Pe].disconnect(fe))}for(let K=0;K<$.added.length;K++){const fe=$.added[K];let Pe=E.indexOf(fe);if(Pe===-1){for(let Le=0;Le<A.length;Le++)if(Le>=E.length){E.push(fe),Pe=Le;break}else if(E[Le]===null){E[Le]=fe,Pe=Le;break}if(Pe===-1)break}const _e=A[Pe];_e&&_e.connect(fe)}}const W=new I,ne=new I;function ee($,K,fe){W.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const Pe=W.distanceTo(ne),_e=K.projectionMatrix.elements,Le=fe.projectionMatrix.elements,lt=_e[14]/(_e[10]-1),Fe=_e[14]/(_e[10]+1),Ze=(_e[9]+1)/_e[5],R=(_e[9]-1)/_e[5],Ne=(_e[8]-1)/_e[0],Oe=(Le[8]+1)/Le[0],je=lt*Ne,de=lt*Oe,rt=Pe/(-Ne+Oe),ae=rt*-Ne;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ae),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_e[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Se=lt+rt,T=Fe+rt,g=je-ae,O=de+(Pe-ae),q=Ze*Fe/T*Se,X=R*Fe/T*Se;$.projectionMatrix.makePerspective(g,O,q,X,Se,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Me($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),F.near=v.near=S.near=K,F.far=v.far=S.far=fe,(B!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,H=F.far),F.layers.mask=$.layers.mask|6,S.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;const Pe=$.parent,_e=F.cameras;Me(F,Pe);for(let Le=0;Le<_e.length;Le++)Me(_e[Le],Pe);_e.length===2?ee(F,S,v):F.projectionMatrix.copy(S.projectionMatrix),ze($,F,Pe)};function ze($,K,fe){fe===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ss*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return d[$]};let Xe=null;function $e($,K){if(h=K.getViewerPose(l||o),x=K,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Pe=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let Fe=0;Fe<fe.length;Fe++){const Ze=fe[Fe];let R=null;if(p!==null)R=p.getViewport(Ze);else{const Oe=u.getViewSubImage(f,Ze);R=Oe.viewport,Fe===0&&(e.setRenderTargetTextures(C,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(C))}let Ne=P[Fe];Ne===void 0&&(Ne=new kt,Ne.layers.enable(Fe),Ne.viewport=new tt,P[Fe]=Ne),Ne.matrix.fromArray(Ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(R.x,R.y,R.width,R.height),Fe===0&&(F.matrix.copy(Ne.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Ne)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Fe=u.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&m.init(Fe,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<fe.length;Fe++){const Ze=fe[Fe].camera;if(Ze){let R=d[Ze];R||(R=new al,d[Ze]=R);const Ne=u.getCameraImage(Ze);R.sourceTexture=Ne}}}}for(let fe=0;fe<A.length;fe++){const Pe=E[fe],_e=A[fe];Pe!==null&&_e!==void 0&&_e.update(Pe,K,l||o)}Xe&&Xe($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const nt=new ul;nt.setAnimationLoop($e),this.setAnimationLoop=function($){Xe=$},this.dispose=function(){}}}const Hn=new qt,Xm=new st;function $m(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,tl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,M,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,C)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),M=b.envMap,C=b.envMapRotation;M&&(m.envMap.value=M,Hn.copy(C),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),m.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Hn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qm(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){const C=M.program;n.uniformBlockBinding(b,C)}function l(b,M){let C=s[b.id];C===void 0&&(x(b),C=h(b),s[b.id]=C,b.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(b,A);const E=e.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function h(b){const M=u();b.__bindingPointIndex=M;const C=i.createBuffer(),A=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],C=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=C.length;E<w;E++){const L=Array.isArray(C[E])?C[E]:[C[E]];for(let S=0,v=L.length;S<v;S++){const P=L[S];if(p(P,E,S,A)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let V=0;V<B.length;V++){const Y=B[V],J=_(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,F+H,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,M,C,A){const E=b.value,w=M+"_"+C;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const L=A[w];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[w]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function x(b){const M=b.uniforms;let C=0;const A=16;for(let w=0,L=M.length;w<L;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,P=S.length;v<P;v++){const F=S[v],B=Array.isArray(F.value)?F.value:[F.value];for(let H=0,V=B.length;H<V;H++){const Y=B[H],J=_(Y),W=C%A,ne=W%J.boundary,ee=W+ne;C+=ne,ee!==0&&A-ee<J.storage&&(C+=A-ee),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=C,C+=J.storage}}}const E=C%A;return E>0&&(C+=A-E),b.__size=C,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const C=o.indexOf(M.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}const Ym=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xn=null;function jm(){return xn===null&&(xn=new sl(Ym,32,32,qo,Di),xn.minFilter=$t,xn.magFilter=$t,xn.wrapS=vn,xn.wrapT=vn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class Km{constructor(e={}){const{canvas:t=ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=new Set([jo,Yo,$o]),_=new Set([ln,Zn,Qi,es,Ho,Wo]),m=new Uint32Array(4),d=new Int32Array(4);let b=null,M=null;const C=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let w=!1;this._outputColorSpace=Xt;let L=0,S=0,v=null,P=-1,F=null;const B=new tt,H=new tt;let V=null;const Y=new Ve(0);let J=0,W=t.width,ne=t.height,ee=1,Me=null,ze=null;const Xe=new tt(0,0,W,ne),$e=new tt(0,0,W,ne);let nt=!1;const $=new ta;let K=!1,fe=!1;const Pe=new st,_e=new I,Le=new tt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ze(){return v===null?ee:1}let R=n;function Ne(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",xe,!1),R===null){const U="webgl2";if(R=Ne(U,y),R===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let Oe,je,de,rt,ae,Se,T,g,O,q,X,k,ve,oe,be,ye,Z,ie,Re,Ce,ue,De,D,le;function se(){Oe=new s0(R),Oe.init(),De=new zm(R,Oe),je=new jp(R,Oe,e,De),de=new Bm(R,Oe),je.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),rt=new a0(R),ae=new Em,Se=new km(R,Oe,de,ae,je,De,rt),T=new Zp(E),g=new i0(E),O=new uf(R),D=new qp(R,O),q=new r0(R,O,rt,D),X=new l0(R,q,O,rt),Re=new c0(R,je,Se),ye=new Kp(ae),k=new Tm(E,T,g,Oe,je,D,ye),ve=new $m(E,ae),oe=new Am,be=new Lm(Oe),ie=new $p(E,T,g,de,X,p,c),Z=new Nm(E,X,je),le=new qm(R,rt,je,de),Ce=new Yp(R,Oe,rt),ue=new o0(R,Oe,rt),rt.programs=k.programs,E.capabilities=je,E.extensions=Oe,E.properties=ae,E.renderLists=oe,E.shadowMap=Z,E.state=de,E.info=rt}se();const re=new Wm(E,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(W,ne,!1))},this.getSize=function(y){return y.set(W,ne)},this.setSize=function(y,U,z=!0){if(re.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,ne=U,t.width=Math.floor(y*ee),t.height=Math.floor(U*ee),z===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*ee,ne*ee).floor()},this.setDrawingBufferSize=function(y,U,z){W=y,ne=U,ee=z,t.width=Math.floor(y*z),t.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(B)},this.getViewport=function(y){return y.copy(Xe)},this.setViewport=function(y,U,z,G){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,U,z,G),de.viewport(B.copy(Xe).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,U,z,G){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,U,z,G),de.scissor(H.copy($e).multiplyScalar(ee).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){de.setScissorTest(nt=y)},this.setOpaqueSort=function(y){Me=y},this.setTransparentSort=function(y){ze=y},this.getClearColor=function(y){return y.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,z=!0){let G=0;if(y){let N=!1;if(v!==null){const te=v.texture.format;N=x.has(te)}if(N){const te=v.texture.type,he=_.has(te),ge=ie.getClearColor(),pe=ie.getClearAlpha(),Ae=ge.r,we=ge.g,Te=ge.b;he?(m[0]=Ae,m[1]=we,m[2]=Te,m[3]=pe,R.clearBufferuiv(R.COLOR,0,m)):(d[0]=Ae,d[1]=we,d[2]=Te,d[3]=pe,R.clearBufferiv(R.COLOR,0,d))}else G|=R.COLOR_BUFFER_BIT}U&&(G|=R.DEPTH_BUFFER_BIT),z&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ie.dispose(),oe.dispose(),be.dispose(),ae.dispose(),T.dispose(),g.dispose(),X.dispose(),D.dispose(),le.dispose(),k.dispose(),re.dispose(),re.removeEventListener("sessionstart",ha),re.removeEventListener("sessionend",ua),Nn.stop()};function Q(y){y.preventDefault(),Ea("WebGLRenderer: Context Lost."),w=!0}function j(){Ea("WebGLRenderer: Context Restored."),w=!1;const y=rt.autoReset,U=Z.enabled,z=Z.autoUpdate,G=Z.needsUpdate,N=Z.type;se(),rt.autoReset=y,Z.enabled=U,Z.autoUpdate=z,Z.needsUpdate=G,Z.type=N}function xe(y){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ie(y){const U=y.target;U.removeEventListener("dispose",Ie),ot(U)}function ot(y){Je(y),ae.remove(y)}function Je(y){const U=ae.get(y).programs;U!==void 0&&(U.forEach(function(z){k.releaseProgram(z)}),y.isShaderMaterial&&k.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,G,N,te){U===null&&(U=lt);const he=N.isMesh&&N.matrixWorld.determinant()<0,ge=fh(y,U,z,G,N);de.setMaterial(G,he);let pe=z.index,Ae=1;if(G.wireframe===!0){if(pe=q.getWireframeAttribute(z),pe===void 0)return;Ae=2}const we=z.drawRange,Te=z.attributes.position;let He=we.start*Ae,Qe=(we.start+we.count)*Ae;te!==null&&(He=Math.max(He,te.start*Ae),Qe=Math.min(Qe,(te.start+te.count)*Ae)),pe!==null?(He=Math.max(He,0),Qe=Math.min(Qe,pe.count)):Te!=null&&(He=Math.max(He,0),Qe=Math.min(Qe,Te.count));const ht=Qe-He;if(ht<0||ht===1/0)return;D.setup(N,G,ge,z,pe);let ut,it=Ce;if(pe!==null&&(ut=O.get(pe),it=ue,it.setIndex(ut)),N.isMesh)G.wireframe===!0?(de.setLineWidth(G.wireframeLinewidth*Ze()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(N.isLine){let Ee=G.linewidth;Ee===void 0&&(Ee=1),de.setLineWidth(Ee*Ze()),N.isLineSegments?it.setMode(R.LINES):N.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else N.isPoints?it.setMode(R.POINTS):N.isSprite&&it.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,at=N._multiDrawCounts,qe=N._multiDrawCount,Ft=pe?O.get(pe).bytesPerElement:1,si=ae.get(G).currentProgram.getUniforms();for(let Nt=0;Nt<qe;Nt++)si.setValue(R,"_gl_DrawID",Nt),it.render(Ee[Nt]/Ft,at[Nt])}else if(N.isInstancedMesh)it.renderInstances(He,ht,N.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,at=Math.min(z.instanceCount,Ee);it.renderInstances(He,ht,at)}else it.render(He,ht)};function nn(y,U,z){y.transparent===!0&&y.side===_n&&y.forceSinglePass===!1?(y.side=Rt,y.needsUpdate=!0,fs(y,U,z),y.side=Fn,y.needsUpdate=!0,fs(y,U,z),y.side=_n):fs(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),M=be.get(z),M.init(U),A.push(M),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(M.pushLight(N),N.castShadow&&M.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(M.pushLight(N),N.castShadow&&M.pushShadow(N))}),M.setupLights();const G=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const ge=te[he];nn(ge,z,N),G.add(ge)}else nn(te,z,N),G.add(te)}),M=A.pop(),G},this.compileAsync=function(y,U,z=null){const G=this.compile(y,U,z);return new Promise(N=>{function te(){if(G.forEach(function(he){ae.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){N(y);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Yt=null;function uh(y){Yt&&Yt(y)}function ha(){Nn.stop()}function ua(){Nn.start()}const Nn=new ul;Nn.setAnimationLoop(uh),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(y){Yt=y,re.setAnimationLoop(y),y===null?Nn.stop():Nn.start()},re.addEventListener("sessionstart",ha),re.addEventListener("sessionend",ua),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,U,v),M=be.get(y,A.length),M.init(U),A.push(M),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Pe,an,U.reversedDepth),fe=this.localClippingEnabled,K=ye.init(this.clippingPlanes,fe),b=oe.get(y,C.length),b.init(),C.push(b),re.enabled===!0&&re.isPresenting===!0){const te=E.xr.getDepthSensingMesh();te!==null&&ar(te,U,-1/0,E.sortObjects)}ar(y,U,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(Me,ze),Fe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Fe&&ie.addToRenderList(b,y),this.info.render.frame++,K===!0&&ye.beginShadows();const z=M.state.shadowsArray;Z.render(z,y,U),K===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=b.opaque,N=b.transmissive;if(M.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let he=0,ge=te.length;he<ge;he++){const pe=te[he];da(G,N,y,pe)}Fe&&ie.render(y);for(let he=0,ge=te.length;he<ge;he++){const pe=te[he];fa(b,y,pe,pe.viewport)}}else N.length>0&&da(G,N,y,U),Fe&&ie.render(y),fa(b,y,U);v!==null&&S===0&&(Se.updateMultisampleRenderTarget(v),Se.updateRenderTargetMipmap(v)),y.isScene===!0&&y.onAfterRender(E,y,U),D.resetDefaultState(),P=-1,F=null,A.pop(),A.length>0?(M=A[A.length-1],K===!0&&ye.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?b=C[C.length-1]:b=null};function ar(y,U,z,G){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)M.pushLight(y),y.castShadow&&M.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||$.intersectsSprite(y)){G&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pe);const he=X.update(y),ge=y.material;ge.visible&&b.push(y,he,ge,z,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||$.intersectsObject(y))){const he=X.update(y),ge=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(Pe)),Array.isArray(ge)){const pe=he.groups;for(let Ae=0,we=pe.length;Ae<we;Ae++){const Te=pe[Ae],He=ge[Te.materialIndex];He&&He.visible&&b.push(y,he,He,z,Le.z,Te)}}else ge.visible&&b.push(y,he,ge,z,Le.z,null)}}const te=y.children;for(let he=0,ge=te.length;he<ge;he++)ar(te[he],U,z,G)}function fa(y,U,z,G){const{opaque:N,transmissive:te,transparent:he}=y;M.setupLightsView(z),K===!0&&ye.setGlobalState(E.clippingPlanes,z),G&&de.viewport(B.copy(G)),N.length>0&&us(N,U,z),te.length>0&&us(te,U,z),he.length>0&&us(he,U,z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function da(y,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[G.id]===void 0&&(M.state.transmissionRenderTarget[G.id]=new Jn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Di:ln,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=M.state.transmissionRenderTarget[G.id],he=G.viewport||B;te.setSize(he.z*E.transmissionResolutionScale,he.w*E.transmissionResolutionScale);const ge=E.getRenderTarget(),pe=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(te),E.getClearColor(Y),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),Fe&&ie.render(z);const we=E.toneMapping;E.toneMapping=In;const Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),K===!0&&ye.setGlobalState(E.clippingPlanes,G),us(y,z,G),Se.updateMultisampleRenderTarget(te),Se.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Qe=0,ht=U.length;Qe<ht;Qe++){const ut=U[Qe],{object:it,geometry:Ee,material:at,group:qe}=ut;if(at.side===_n&&it.layers.test(G.layers)){const Ft=at.side;at.side=Rt,at.needsUpdate=!0,pa(it,z,G,Ee,at,qe),at.side=Ft,at.needsUpdate=!0,He=!0}}He===!0&&(Se.updateMultisampleRenderTarget(te),Se.updateRenderTargetMipmap(te))}E.setRenderTarget(ge,pe,Ae),E.setClearColor(Y,J),Te!==void 0&&(G.viewport=Te),E.toneMapping=we}function us(y,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=y.length;N<te;N++){const he=y[N],{object:ge,geometry:pe,group:Ae}=he;let we=he.material;we.allowOverride===!0&&G!==null&&(we=G),ge.layers.test(z.layers)&&pa(ge,U,z,pe,we,Ae)}}function pa(y,U,z,G,N,te){y.onBeforeRender(E,U,z,G,N,te),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(E,U,z,G,y,te),N.transparent===!0&&N.side===_n&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,E.renderBufferDirect(z,U,G,N,y,te),N.side=Fn,N.needsUpdate=!0,E.renderBufferDirect(z,U,G,N,y,te),N.side=_n):E.renderBufferDirect(z,U,G,N,y,te),y.onAfterRender(E,U,z,G,N,te)}function fs(y,U,z){U.isScene!==!0&&(U=lt);const G=ae.get(y),N=M.state.lights,te=M.state.shadowsArray,he=N.state.version,ge=k.getParameters(y,N.state,te,U,z),pe=k.getProgramCacheKey(ge);let Ae=G.programs;G.environment=y.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(y.isMeshStandardMaterial?g:T).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Ie),Ae=new Map,G.programs=Ae);let we=Ae.get(pe);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===he)return xa(y,ge),we}else ge.uniforms=k.getUniforms(y),y.onBeforeCompile(ge,E),we=k.acquireProgram(ge,pe),Ae.set(pe,we),G.uniforms=ge.uniforms;const Te=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ye.uniform),xa(y,ge),G.needsLights=ph(y),G.lightsStateVersion=he,G.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=we,G.uniformsList=null,we}function ma(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=zs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function xa(y,U){const z=ae.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function fh(y,U,z,G,N){U.isScene!==!0&&(U=lt),Se.resetTextureUnits();const te=U.fog,he=G.isMeshStandardMaterial?U.environment:null,ge=v===null?E.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:wi,pe=(G.isMeshStandardMaterial?g:T).get(G.envMap||he),Ae=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!z.morphAttributes.position,He=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let ht=In;G.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(ht=E.toneMapping);const ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=ut!==void 0?ut.length:0,Ee=ae.get(G),at=M.state.lights;if(K===!0&&(fe===!0||y!==F)){const Et=y===F&&G.id===P;ye.setState(G,y,Et)}let qe=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==at.state.version||Ee.outputColorSpace!==ge||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==pe||G.fog===!0&&Ee.fog!==te||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ye.numPlanes||Ee.numIntersection!==ye.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==we||Ee.morphTargets!==Te||Ee.morphNormals!==He||Ee.morphColors!==Qe||Ee.toneMapping!==ht||Ee.morphTargetsCount!==it)&&(qe=!0):(qe=!0,Ee.__version=G.version);let Ft=Ee.currentProgram;qe===!0&&(Ft=fs(G,U,N));let si=!1,Nt=!1,Oi=!1;const ct=Ft.getUniforms(),Dt=Ee.uniforms;if(de.useProgram(Ft.program)&&(si=!0,Nt=!0,Oi=!0),G.id!==P&&(P=G.id,Nt=!0),si||F!==y){de.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",y.projectionMatrix),ct.setValue(R,"viewMatrix",y.matrixWorldInverse);const It=ct.map.cameraPosition;It!==void 0&&It.setValue(R,_e.setFromMatrixPosition(y.matrixWorld)),je.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),F!==y&&(F=y,Nt=!0,Oi=!0)}if(N.isSkinnedMesh){ct.setOptional(R,N,"bindMatrix"),ct.setOptional(R,N,"bindMatrixInverse");const Et=N.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ct.setValue(R,"boneTexture",Et.boneTexture,Se))}N.isBatchedMesh&&(ct.setOptional(R,N,"batchingTexture"),ct.setValue(R,"batchingTexture",N._matricesTexture,Se),ct.setOptional(R,N,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",N._indirectTexture,Se),ct.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",N._colorsTexture,Se));const Ht=z.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Re.update(N,z,Ft),(Nt||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,ct.setValue(R,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Dt.envMap.value=pe,Dt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(Dt.envMapIntensity.value=U.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=jm()),Nt&&(ct.setValue(R,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&dh(Dt,Oi),te&&G.fog===!0&&ve.refreshFogUniforms(Dt,te),ve.refreshMaterialUniforms(Dt,G,ee,ne,M.state.transmissionRenderTarget[y.id]),zs.upload(R,ma(Ee),Dt,Se)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zs.upload(R,ma(Ee),Dt,Se),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(R,"center",N.center),ct.setValue(R,"modelViewMatrix",N.modelViewMatrix),ct.setValue(R,"normalMatrix",N.normalMatrix),ct.setValue(R,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Et=G.uniformsGroups;for(let It=0,cr=Et.length;It<cr;It++){const On=Et[It];le.update(On,Ft),le.bind(On,Ft)}}return Ft}function dh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function ph(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(y,U,z){const G=ae.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ae.get(y.texture).__webglTexture=U,ae.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const z=ae.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const mh=R.createFramebuffer();this.setRenderTarget=function(y,U=0,z=0){v=y,L=U,S=z;let G=!0,N=null,te=!1,he=!1;if(y){const pe=ae.get(y);if(pe.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)Se.setupRenderTarget(y);else if(pe.__hasExternalTextures)Se.rebindTextures(y,ae.get(y.texture).__webglTexture,ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(pe.__boundDepthTexture!==Te){if(Te!==null&&ae.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const we=ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[U])?N=we[U][z]:N=we[U],te=!0):y.samples>0&&Se.useMultisampledRTT(y)===!1?N=ae.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?N=we[z]:N=we,B.copy(y.viewport),H.copy(y.scissor),V=y.scissorTest}else B.copy(Xe).multiplyScalar(ee).floor(),H.copy($e).multiplyScalar(ee).floor(),V=nt;if(z!==0&&(N=mh),de.bindFramebuffer(R.FRAMEBUFFER,N)&&G&&de.drawBuffers(y,N),de.viewport(B),de.scissor(H),de.setScissorTest(V),te){const pe=ae.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,z)}else if(he){const pe=U;for(let Ae=0;Ae<y.textures.length;Ae++){const we=ae.get(y.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,we.__webglTexture,z,pe)}}else if(y!==null&&z!==0){const pe=ae.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pe.__webglTexture,z)}P=-1},this.readRenderTargetPixels=function(y,U,z,G,N,te,he,ge=0){if(!(y&&y.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){de.bindFramebuffer(R.FRAMEBUFFER,pe);try{const Ae=y.textures[ge],we=Ae.format,Te=Ae.type;if(!je.textureFormatReadable(we)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Te)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-G&&z>=0&&z<=y.height-N&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ge),R.readPixels(U,z,G,N,De.convert(we),De.convert(Te),te))}finally{const Ae=v!==null?ae.get(v).__webglFramebuffer:null;de.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,U,z,G,N,te,he,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(U>=0&&U<=y.width-G&&z>=0&&z<=y.height-N){de.bindFramebuffer(R.FRAMEBUFFER,pe);const Ae=y.textures[ge],we=Ae.format,Te=Ae.type;if(!je.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ge),R.readPixels(U,z,G,N,De.convert(we),De.convert(Te),0);const Qe=v!==null?ae.get(v).__webglFramebuffer:null;de.bindFramebuffer(R.FRAMEBUFFER,Qe);const ht=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await au(R,ht,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,He),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(He),R.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,z=0){const G=Math.pow(2,-z),N=Math.floor(y.image.width*G),te=Math.floor(y.image.height*G),he=U!==null?U.x:0,ge=U!==null?U.y:0;Se.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,he,ge,N,te),de.unbindTexture()};const xh=R.createFramebuffer(),gh=R.createFramebuffer();this.copyTextureToTexture=function(y,U,z=null,G=null,N=0,te=null){te===null&&(N!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let he,ge,pe,Ae,we,Te,He,Qe,ht;const ut=y.isCompressedTexture?y.mipmaps[te]:y.image;if(z!==null)he=z.max.x-z.min.x,ge=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,we=z.min.y,Te=z.isBox3?z.min.z:0;else{const Ht=Math.pow(2,-N);he=Math.floor(ut.width*Ht),ge=Math.floor(ut.height*Ht),y.isDataArrayTexture?pe=ut.depth:y.isData3DTexture?pe=Math.floor(ut.depth*Ht):pe=1,Ae=0,we=0,Te=0}G!==null?(He=G.x,Qe=G.y,ht=G.z):(He=0,Qe=0,ht=0);const it=De.convert(U.format),Ee=De.convert(U.type);let at;U.isData3DTexture?(Se.setTexture3D(U,0),at=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Se.setTexture2DArray(U,0),at=R.TEXTURE_2D_ARRAY):(Se.setTexture2D(U,0),at=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=R.getParameter(R.UNPACK_ROW_LENGTH),Ft=R.getParameter(R.UNPACK_IMAGE_HEIGHT),si=R.getParameter(R.UNPACK_SKIP_PIXELS),Nt=R.getParameter(R.UNPACK_SKIP_ROWS),Oi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ut.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,we),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);const ct=y.isDataArrayTexture||y.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ht=ae.get(y),Et=ae.get(U),It=ae.get(Ht.__renderTarget),cr=ae.get(Et.__renderTarget);de.bindFramebuffer(R.READ_FRAMEBUFFER,It.__webglFramebuffer),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let On=0;On<pe;On++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(y).__webglTexture,N,Te+On),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(U).__webglTexture,te,ht+On)),R.blitFramebuffer(Ae,we,he,ge,He,Qe,he,ge,R.DEPTH_BUFFER_BIT,R.NEAREST);de.bindFramebuffer(R.READ_FRAMEBUFFER,null),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||ae.has(y)){const Ht=ae.get(y),Et=ae.get(U);de.bindFramebuffer(R.READ_FRAMEBUFFER,xh),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,gh);for(let It=0;It<pe;It++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.__webglTexture,N,Te+It):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ht.__webglTexture,N),Dt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Et.__webglTexture,te,ht+It):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Et.__webglTexture,te),N!==0?R.blitFramebuffer(Ae,we,he,ge,He,Qe,he,ge,R.COLOR_BUFFER_BIT,R.NEAREST):Dt?R.copyTexSubImage3D(at,te,He,Qe,ht+It,Ae,we,he,ge):R.copyTexSubImage2D(at,te,He,Qe,Ae,we,he,ge);de.bindFramebuffer(R.READ_FRAMEBUFFER,null),de.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Dt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(at,te,He,Qe,ht,he,ge,pe,it,Ee,ut.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(at,te,He,Qe,ht,he,ge,pe,it,ut.data):R.texSubImage3D(at,te,He,Qe,ht,he,ge,pe,it,Ee,ut):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,He,Qe,he,ge,it,Ee,ut.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,He,Qe,ut.width,ut.height,it,ut.data):R.texSubImage2D(R.TEXTURE_2D,te,He,Qe,he,ge,it,Ee,ut);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ft),R.pixelStorei(R.UNPACK_SKIP_PIXELS,si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Oi),te===0&&U.generateMipmaps&&R.generateMipmap(at),de.unbindTexture()},this.initRenderTarget=function(y){ae.get(y).__webglFramebuffer===void 0&&Se.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Se.setTextureCube(y,0):y.isData3DTexture?Se.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Se.setTexture2DArray(y,0):Se.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){L=0,S=0,v=null,de.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const xl=Math.sqrt(3),Zm=.5*(xl-1),$i=(3-xl)/6,Tc=i=>Math.floor(i)|0,Ec=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Jm(i=Math.random){const e=Qm(i),t=new Float64Array(e).map(s=>Ec[s%12*2]),n=new Float64Array(e).map(s=>Ec[s%12*2+1]);return function(r,o){let a=0,c=0,l=0;const h=(r+o)*Zm,u=Tc(r+h),f=Tc(o+h),p=(u+f)*$i,x=u-p,_=f-p,m=r-x,d=o-_;let b,M;m>d?(b=1,M=0):(b=0,M=1);const C=m-b+$i,A=d-M+$i,E=m-1+2*$i,w=d-1+2*$i,L=u&255,S=f&255;let v=.5-m*m-d*d;if(v>=0){const B=L+e[S],H=t[B],V=n[B];v*=v,a=v*v*(H*m+V*d)}let P=.5-C*C-A*A;if(P>=0){const B=L+b+e[S+M],H=t[B],V=n[B];P*=P,c=P*P*(H*C+V*A)}let F=.5-E*E-w*w;if(F>=0){const B=L+1+e[S+1],H=t[B],V=n[B];F*=F,l=F*F*(H*E+V*w)}return 70*(a+c+l)}}function Qm(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=t[n];t[n]=t[s],t[s]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}class ex{constructor(e){this.chunkSize=e.chunkSize||32,this.tileSize=e.tileSize||1,this.chunks=new Map,this.mesh=new yn,this.noise2D=Jm(),this.material=new Ut({color:16777215,roughness:.8}),this.islandCenters=[{x:-150,z:150,type:"ice"},{x:-150,z:-150,type:"volcanic"}],this.destroyedBlocks=new Set,this.placedBlocks=new Map,this.generateChunk(0,0)}getChunkKey(e,t){return`${e},${t}`}generateChunk(e,t,n=!1){const s=this.getChunkKey(e,t);if(this.chunks.has(s))if(n){const h=this.chunks.get(s);this.mesh.remove(h),h.dispose(),this.chunks.delete(s)}else return;const r=new cn(this.tileSize,this.tileSize,this.tileSize),o=new Ku(r,this.material,this.chunkSize*this.chunkSize*60);o.castShadow=!0,o.receiveShadow=!0;const a=new mt;let c=0;const l=new Ve;for(let h=0;h<this.chunkSize;h++)for(let u=0;u<this.chunkSize;u++){const f=e*this.chunkSize+h,p=t*this.chunkSize+u;let x=1/0,_=null;for(const ae of this.islandCenters){const Se=f-ae.x,T=p-ae.z,g=Math.sqrt(Se*Se+T*T);g<x&&(x=g,_=ae)}const m=50,d=f-_.x,b=p-_.z,M=d<-30&&Math.abs(b)<3,C=M&&d<-48&&d>-55;if(x>m&&!C)continue;const A=x/m,E=45,w=this.noise2D(f*.05,p*.05)*4,L=E*(1-Math.pow(A,1.5))+w,S=30;let v=Math.floor(S-Math.max(2,L));C&&(v=-20);let P=!1,F=0;const B=12,H=f-(_.x-30),V=p-_.z,Y=Math.sqrt(H*H+V*V);if(Y<B){P=!0;const ae=Y/B;F=Math.floor(4*(1-ae*ae))}let J=!1;const W=_.x,ne=_.z,ee=f-W,Me=p-ne,ze=Math.sqrt(ee*ee+Me*Me),Xe=4.5,$e=7,$=$e*4,K=S+$;ze<=Xe+2&&(J=!0);let fe=S;J&&(fe=K+20),this.getTreeHeight(f,p);const Pe=_.type;let _e=6069830,Le=7032376,lt=5921370,Fe=3355443,Ze=4473924,R=4915330,Ne=6045747,Oe=16776960,je=6045747,de=16753920;Pe==="ice"?(_e=16777215,Le=14540287,lt=11193599,Fe=4482696,Ze=5601177,R=17544,Ne=3351057,Oe=11206655,je=2241348,de=16777215):Pe==="arcane"?(_e=4915330,Le=3025759,lt=4734347,Fe=2228292,Ze=3342421,R=16766720,Ne=12632256,Oe=65535,je=4915330,de=10040012):Pe==="volcanic"&&(_e=2236962,Le=4456448,lt=1118481,Fe=2228224,Ze=3342336,R=1118481,Ne=1118481,Oe=16729088,je=4456448,de=16711680);for(let ae=v;ae<=fe+8;ae++){if(this.destroyedBlocks.has(`${f},${ae},${p}`))continue;let Se=!1,T=_e;if(ae<=S)if(Se=!0,P){const X=S-F;ae>X?T=4474111:T=Le}else if(M){const k=S-2;C?(T=4474111,Math.random()>.8&&(T=8947967)):ae>k?T=4474111:T=Le}else{const X=S-ae;X===0?T=_e:X<4?T=Le:T=lt}if(J&&ae>S){const X=ae-S;if(X<=$){const k=X%$e===0||X%$e===$e-1,ve=k?Xe+.5:Xe;if(ze<=ve&&ze>ve-1.5&&(Se=!0,T=k?je:Math.random()>.5?Fe:Ze,X<5&&Me>0&&Math.abs(ee)<1.5&&(T=Ne,X>3?Se=!0:Se=!1),!k&&X>7)){const oe=Math.abs(ee)<1||Math.abs(Me)<1,be=X%$e;oe&&be>=2&&be<=4&&(T=Oe)}}else{const k=X-$;if(k<=2)ze<=Xe+2-k&&(Se=!0,T=R);else{const oe=4*(1-(k-2)/15),be=Math.sin(k*.2)*2,ye=Math.cos(k*.2)*1;Math.sqrt((ee-be)**2+(Me-ye)**2)<=Math.max(0,oe)&&(Se=!0,T=R,k>=4&&k<=6&&(T=de))}}}if(ae>S){const X=this.getVegetationBlock(f,ae,p,S);X.exists&&(Se=!0,T=X.color)}if(!Se)continue;a.position.set(f*this.tileSize,ae*this.tileSize,p*this.tileSize),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHex(T);const g=this.hash(f,ae+p*57),O=this.hash(f*13,ae*7+p),q=this.hash(f+ae*3,p*11);l.offsetHSL((g-.5)*.05,(O-.5)*.05,(q-.5)*.05),o.setColorAt(c,l),c++}const rt=`${f},${p}`;if(this.placedBlocks.has(rt)){const ae=this.placedBlocks.get(rt);for(const[Se,T]of ae)this.destroyedBlocks.has(`${f},${Se},${p}`)||(a.position.set(f*this.tileSize,Se*this.tileSize,p*this.tileSize),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHex(T),o.setColorAt(c,l),c++)}}o.count=c,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),this.chunks.set(s,o),this.mesh.add(o)}update(e){const t=Math.floor(e.x/this.chunkSize),n=Math.floor(e.z/this.chunkSize),s=4;for(let r=-s;r<=s;r++)for(let o=-s;o<=s;o++)this.generateChunk(t+r,n+o)}getHeight(e,t,n=30){if(!this.getIslandData(e,t).isIsland)return-1/0;const r=this.getTreeHeight(e,t);if(r>0)return 30+r;for(const o of this.islandCenters){const a=e-(o.x-30),c=t-o.z,l=Math.sqrt(a*a+c*c),h=12;if(l<h){const d=l/h;return 30-Math.floor(4*(1-d*d))}const u=o.x,f=o.z,p=e-u,x=t-f,_=Math.sqrt(p*p+x*x),m=Math.floor(60-1.5*_);if(n>40&&m>50)return m;if(_<=5)return _>3.5?x>0&&Math.abs(p)<1.8?30:50:30}return 30}findSpawnPoint(){return new I(150,32,150)}getIslandData(e,t){for(const s of this.islandCenters){const r=e-s.x,o=t-s.z,a=Math.sqrt(r*r+o*o);if(a<55)return{isIsland:!0,center:s,dist:a}}return{isIsland:!1}}getTreeHeight(e,t){const n=Math.floor(e),s=Math.floor(t),r=this.getIslandData(n,s);if(!r.isIsland)return 0;const o=r.center,a=r.dist,c=o.x,l=o.z,h=n-c,u=s-l,f=Math.sqrt(h*h+u*u),p=f<=7,x=n-(o.x-30),_=s-o.z,d=Math.sqrt(x*x+_*_)<12,b=n-o.x,M=s-o.z,C=b<-30&&Math.abs(M)<3;if(!p&&!d&&!C&&a>10&&f>8&&this.noise2D(n*.3,s*.3)>.6&&n%3===0&&s%3===0){const E=Math.abs(Math.sin(n*12.9898+s*78.233));return 4+Math.floor(E*3)}return 0}getBlock(e,t,n){const s=Math.floor(e),r=Math.floor(t),o=Math.floor(n),a=`${s},${r},${o}`;if(this.destroyedBlocks.has(a))return!1;const c=`${s},${o}`;if(this.placedBlocks.has(c)&&this.placedBlocks.get(c).has(r))return!0;const l=this.getHeight(s,o,r);return l===-1/0?!1:r<=l}raycast(e,t,n){const s=e.clone();let r=0,o=Math.floor(s.x),a=Math.floor(s.y),c=Math.floor(s.z);const l=Math.sign(t.x),h=Math.sign(t.y),u=Math.sign(t.z),f=l!==0?Math.abs(1/t.x):1/0,p=h!==0?Math.abs(1/t.y):1/0,x=u!==0?Math.abs(1/t.z):1/0,_=l>0?o+1-s.x:s.x-o,m=h>0?a+1-s.y:s.y-a,d=u>0?c+1-s.z:s.z-c;let b=l!==0?_*f:1/0,M=h!==0?m*p:1/0,C=u!==0?d*x:1/0,A=new I;for(;r<n;){if(this.getBlock(o,a,c))return{point:new I(s.x+t.x*r,s.y+t.y*r,s.z+t.z*r),normal:A,block:{x:o,y:a,z:c}};b<M?b<C?(o+=l,r=b,b+=f,A.set(-l,0,0)):(c+=u,r=C,C+=x,A.set(0,0,-u)):M<C?(a+=h,r=M,M+=p,A.set(0,-h,0)):(c+=u,r=C,C+=x,A.set(0,0,-u))}return null}addBlock(e,t,n,s){const r=Math.floor(e),o=Math.floor(t),a=Math.floor(n),c=`${r},${a}`;this.placedBlocks.has(c)||this.placedBlocks.set(c,new Map),this.placedBlocks.get(c).set(o,s);const h=Math.floor(r/this.chunkSize),u=Math.floor(a/this.chunkSize);this.generateChunk(h,u,!0)}removeBlock(e,t,n){const s=Math.floor(e),r=Math.floor(t),o=Math.floor(n),a=`${s},${r},${o}`,c=`${s},${o}`;if(this.placedBlocks.has(c)){const u=this.placedBlocks.get(c);if(u.has(r)){u.delete(r),u.size===0&&this.placedBlocks.delete(c);const f=Math.floor(s/this.chunkSize),p=Math.floor(o/this.chunkSize);this.generateChunk(f,p,!0);return}}if(r<=30||this.destroyedBlocks.has(a))return;this.destroyedBlocks.add(a);const l=Math.floor(s/this.chunkSize),h=Math.floor(o/this.chunkSize);this.generateChunk(l,h,!0)}getMapColor(e,t){const n=this.getIslandData(e,t);if(!n.isIsland)return"#000044";const s=n.center,r=s.x,o=s.z,a=e-r,c=t-o;if(a*a+c*c<=49)return"#555555";const l=e-(s.x-30),h=t-s.z;if(l*l+h*h<144)return"#4444FF";const u=e-s.x,f=t-s.z;return u<-30&&Math.abs(f)<3?"#4444FF":s.type==="ice"?"#FFFFFF":s.type==="arcane"?"#4B0082":s.type==="volcanic"?"#222222":"#5C9E46"}hash(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453123;return n-Math.floor(n)}getVegetationBlock(e,t,n,s){const r=this.getTreeHeight(e,n);if(r>0){const o=t-s;if(o>0){if(o<=r)return{exists:!0,color:6045747};if(o<=r+2)return{exists:!0,color:2263842}}}return{exists:!1}}}class tx{constructor(){this.keys={},this.mouseButtons={},this.mouse={x:0,y:0,movementX:0,movementY:0},this.isLocked=!1,window.addEventListener("keydown",e=>this.keys[e.code]=!0),window.addEventListener("keyup",e=>this.keys[e.code]=!1),document.addEventListener("mousedown",e=>{this.isLocked&&(this.mouseButtons[e.button]=!0)}),document.addEventListener("mouseup",e=>this.mouseButtons[e.button]=!1),document.addEventListener("mousemove",e=>{this.isLocked&&(this.mouse.movementX=e.movementX,this.mouse.movementY=e.movementY)}),document.addEventListener("click",e=>{!this.isLocked&&e.target.tagName==="CANVAS"&&document.body.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===document.body})}isKeyDown(e){return!!this.keys[e]}isMouseButtonDown(e){return!!this.mouseButtons[e]}getMouseMovement(){const e={x:this.mouse.movementX,y:this.mouse.movementY};return this.mouse.movementX=0,this.mouse.movementY=0,e}}class nx{constructor(e,t,n,s,r){this.scene=e,this.particleSystem=s,this.soundManager=r,this.velocity=n.clone().normalize().multiplyScalar(60),this.isAlive=!0,this.lifeTime=1.5,this.damage=10;const o=new Qn(.3,8,8),a=new cs({color:65535});this.mesh=new Ke(o,a),this.mesh.position.copy(t),this.light=new ll(65535,1,10),this.mesh.add(this.light),this.scene.add(this.mesh)}update(e,t){if(!this.isAlive)return;if(this.lifeTime-=e,this.lifeTime<=0){this.destroy();return}const n=this.velocity.clone().multiplyScalar(e),s=n.length(),r=n.clone().normalize(),o=t.raycast(this.mesh.position,r,s);if(o){this.mesh.position.copy(o.point),o.block&&t.removeBlock(o.block.x,o.block.y,o.block.z),this.onHit();return}this.mesh.position.add(n)}onHit(){this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(this.mesh.position,65535,15),this.destroy()}destroy(){this.isAlive=!1,this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.light.dispose()}}class ix{constructor(e,t,n,s,r,o,a){this.scene=e,this.camera=t,this.world=n,this.particleSystem=r,this.soundManager=o,this.networkManager=a,this.input=new tx,this.isDead=!1,this.spawnPoint=s?s.clone():new I(10,20,10),this.networkTimer=0,this.networkInterval=.05,this.mesh=new yn,this.mesh.position.set(10,20,10);const c=new jn(.5,1.5,8);this.bodyMat=new Ut({color:2755149});const l=new Ke(c,this.bodyMat);l.position.y=.75,this.mesh.add(l);const h=new Qn(.3,8,8),u=new Ut({color:16764074}),f=new Ke(h,u);f.position.y=1.6,this.mesh.add(f);const p=new Ti(.6,.6,.05,8);this.hatMat=new Ut({color:1118481});const x=new Ke(p,this.hatMat);x.position.y=1.85,this.mesh.add(x);const _=new jn(.3,.8,8),m=new Ke(_,this.hatMat);m.position.y=2.2,m.rotation.x=-.2,this.mesh.add(m);const d=new Qn(.12,8,8),b=new Ke(d,u);b.position.set(-.4,1,.3),this.mesh.add(b);const M=new Ke(d,u);M.position.set(.4,1,.3),this.mesh.add(M),this.wand=this.createWand(),this.wand.position.copy(M.position),this.wand.position.y+=.3,this.wand.rotation.z=-25*(Math.PI/180),this.wand.position.x+=.12,this.mesh.add(this.wand),this.broom=this.createBroom(),this.broom.visible=!1,this.mesh.add(this.broom),s?this.mesh.position.copy(s):this.mesh.position.set(10,20,10),this.mesh.traverse(E=>E.castShadow=!0),this.scene.add(this.mesh),this.velocity=new I,this.onGround=!1,this.gravity=-30,this.speed=10,this.flySpeed=25,this.jumpForce=10,this.isFlying=!1,this.flyTogglePressed=!1,this.projectiles=[],this.lastShotTime=0,this.shootCooldown=.3,this.isBuildMode=!1,this.buildTogglePressed=!1,this.buildCooldown=.2,this.lastBuildTime=0;const C=new cn(1.01,1.01,1.01),A=new cs({color:65280,wireframe:!0,transparent:!0,opacity:.5});this.ghostBlock=new Ke(C,A),this.scene.add(this.ghostBlock),this.ghostBlock.visible=!1,this.physicsPosition=this.mesh.position.clone(),this.cameraOffset=new I(0,2,5),this.rotation=new qt(0,0,0,"YXZ"),this.currentBiome="ice",this.checkBiomeTimer=0}get position(){return this.physicsPosition}update(e){if(this.isDead)return;this.networkTimer+=e,this.networkTimer>=this.networkInterval&&(this.networkTimer=0,this.networkManager&&this.networkManager.sendMove(this.physicsPosition,this.rotation,this.currentBiome)),this.input.isKeyDown("KeyF")?this.flyTogglePressed||(this.isFlying=!this.isFlying,this.flyTogglePressed=!0,this.broom.visible=this.isFlying,this.isFlying?(this.velocity.y=0,this.mesh.rotation.x=.3,this.mesh.position.y+=1):this.mesh.rotation.x=0):this.flyTogglePressed=!1,this.input.isKeyDown("KeyB")?this.buildTogglePressed||(this.isBuildMode=!this.isBuildMode,this.buildTogglePressed=!0,this.ghostBlock.visible=this.isBuildMode):this.buildTogglePressed=!1,this.isBuildMode?this.updateBuildMode(e):(this.ghostBlock.visible=!1,this.lastShotTime+=e,this.input.isMouseButtonDown(0)&&this.lastShotTime>=this.shootCooldown&&(this.shoot(),this.lastShotTime=0));for(let p=this.projectiles.length-1;p>=0;p--){const x=this.projectiles[p];x.update(e,this.world),x.isAlive||this.projectiles.splice(p,1)}const t=this.input.getMouseMovement();this.rotation.y-=t.x*.002,this.rotation.x-=t.y*.002,this.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.rotation.x));const n=new I(0,0,-1).applyAxisAngle(new I(0,1,0),this.rotation.y),s=new I(1,0,0).applyAxisAngle(new I(0,1,0),this.rotation.y),r=new I;this.input.isKeyDown("KeyW")&&r.add(n),this.input.isKeyDown("KeyS")&&r.sub(n),this.input.isKeyDown("KeyD")&&r.add(s),this.input.isKeyDown("KeyA")&&r.sub(s),r.length()>0&&r.normalize();const o=this.isFlying?this.flySpeed:this.speed;this.velocity.x=r.x*o,this.velocity.z=r.z*o,this.isFlying?this.input.isKeyDown("Space")?this.velocity.y=this.flySpeed*.5:this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("KeyC")?this.velocity.y=-this.flySpeed*.5:this.velocity.y=0:(this.onGround&&this.input.isKeyDown("Space")&&(this.velocity.y=this.jumpForce,this.onGround=!1),this.velocity.y+=this.gravity*e),this.wandParticles&&(this.wandParticles.rotation.y+=e*2,this.wandParticles.rotation.z+=e*1);const a=this.physicsPosition.clone();this.physicsPosition.x+=this.velocity.x*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.x=a.x,this.velocity.x=0),this.physicsPosition.z+=this.velocity.z*e,this.checkCollision(this.physicsPosition)&&(this.physicsPosition.z=a.z,this.velocity.z=0),this.physicsPosition.y+=this.velocity.y*e,this.checkCollision(this.physicsPosition)?(this.velocity.y<0?(this.onGround=!0,this.physicsPosition.y=a.y):this.physicsPosition.y=a.y,this.velocity.y=0):this.onGround=!1,this.physicsPosition.y<-50&&this.onDeath(),this.mesh.position.x=this.physicsPosition.x,this.mesh.position.z=this.physicsPosition.z,this.mesh.position.y=Si.lerp(this.mesh.position.y,this.physicsPosition.y,10*e);const c=this.mesh.position.clone().add(new I(0,1.5,0)),l=new I(1.5,1,5);l.applyEuler(this.rotation);const h=c.clone().add(l);this.camera.position.copy(h);const u=new I(0,0,-1);u.applyEuler(this.rotation);const f=h.clone().add(u.multiplyScalar(20));if(this.camera.lookAt(f),this.mesh.rotation.y=this.rotation.y,this.isFlying){let x=.3,_=0;if(this.input.isKeyDown("KeyW")&&(x=.8),this.input.isKeyDown("KeyS")&&(x=-.2),this.input.isKeyDown("KeyA")&&(_=.5),this.input.isKeyDown("KeyD")&&(_=-.5),this.mesh.rotation.x=Si.lerp(this.mesh.rotation.x,x,e*5),this.mesh.rotation.z=Si.lerp(this.mesh.rotation.z,_,e*5),this.particleSystem){const m=new I(0,0,1.4);m.applyMatrix4(this.broom.matrixWorld),this.particleSystem.emit(m,15645525,2)}}else this.mesh.rotation.x=Si.lerp(this.mesh.rotation.x,0,e*10),this.mesh.rotation.z=Si.lerp(this.mesh.rotation.z,0,e*10)}setTeam(e){this.team=e;let t=2755149;e==="red"?t=16711680:e==="blue"&&(t=255),this.bodyMat.color.setHex(t)}updateOutfit(){const e=this.world.getIslandData(this.mesh.position.x,this.mesh.position.z);let t="forest";if(e.isIsland&&(t=e.center.type),this.currentBiome!==t){this.currentBiome=t;let n=2755149,s=1118481;switch(t){case"ice":n=8965375,s=13158;break;case"arcane":n=4915330,s=16766720;break;case"volcanic":n=8388608,s=2236962;break;case"forest":default:n=2755149,s=1118481;break}this.bodyMat.color.setHex(n),this.hatMat.color.setHex(s)}}createWand(){const e=new yn,t=new cn(.04,1.2,.04),n=new Ut({color:4865073}),s=new Ke(t,n);s.position.y=0,e.add(s);const r=new cn(.06,.06,.06),o=new Ut({color:65535,emissive:65535,emissiveIntensity:.5});for(let x=0;x<3;x++){const _=new Ke(r,o);_.position.y=-.2+x*.25,e.add(_)}const a=new na(.12),c=new Ut({color:10040319,emissive:5570730,emissiveIntensity:.8,transparent:!0,opacity:.9}),l=new Ke(a,c);l.position.y=.7,e.add(l);const h=20,u=new Vt,f=[];for(let x=0;x<h;x++)f.push((Math.random()-.5)*.5,(Math.random()-.5)*.5,(Math.random()-.5)*.5);u.setAttribute("position",new yt(f,3));const p=new rl({color:16768324,size:.05,transparent:!0,opacity:.6});return this.wandParticles=new ef(u,p),this.wandParticles.position.y=.7,e.add(this.wandParticles),this.wandTip=new mt,this.wandTip.position.y=.9,e.add(this.wandTip),e}createBroom(){const e=new yn,t=new Ti(.04,.04,2.5,8),n=new Ut({color:6045747}),s=new Ke(t,n);s.rotation.x=Math.PI/2,e.add(s);const r=new jn(.2,.8,16),o=new Ut({color:15645525}),a=new Ke(r,o);a.rotation.x=-Math.PI/2,a.position.z=1.4,e.add(a);const c=new Ti(.06,.06,.1,8),l=new Ut({color:3355443}),h=new Ke(c,l);return h.rotation.x=Math.PI/2,h.position.z=1,e.add(h),e.position.set(0,.3,0),e.rotation.x=-.1,e}shoot(){const e=new I;this.wandTip.getWorldPosition(e);const t=new Ja;t.setFromCamera(new Ge(0,0),this.camera);const n=this.world.raycast(t.ray.origin,t.ray.direction,100),s=new I;n?s.copy(n.point):t.ray.at(100,s);const r=new I().subVectors(s,e).normalize(),o=new nx(this.scene,e,r,this.particleSystem,this.soundManager);this.projectiles.push(o),this.soundManager&&this.soundManager.playShoot()}onDeath(){if(this.isDead)return;this.isDead=!0,document.exitPointerLock();const e=document.getElementById("respawn-menu");e.style.display="block";const t=document.getElementById("respawn-btn");t.onclick=()=>{this.respawn(),e.style.display="none",document.body.requestPointerLock()}}respawn(){const e=this.spawnPoint.clone();this.physicsPosition.copy(e),this.mesh.position.copy(e),this.velocity.set(0,0,0),this.isDead=!1}setSpawnPoint(e){this.spawnPoint.copy(e)}checkCollision(e){if(this.world.getBlock(e.x,e.y,e.z)||this.world.getBlock(e.x,e.y+1,e.z)||this.world.getBlock(e.x,e.y+1.8,e.z))return!0;const s=[[.4,0,.4],[.4,0,-.4],[-.4,0,.4],[-.4,0,-.4],[.4,1.8,.4],[.4,1.8,-.4],[-.4,1.8,.4],[-.4,1.8,-.4],[.4,1.8/2,.4],[.4,1.8/2,-.4],[-.4,1.8/2,.4],[-.4,1.8/2,-.4]];for(let r of s)if(this.world.getBlock(e.x+r[0],e.y+r[1],e.z+r[2]))return!0;return!1}updateBuildMode(e){const t=new Ja;t.setFromCamera(new Ge(0,0),this.camera);const n=this.world.raycast(t.ray.origin,t.ray.direction,8);if(n){n.point;const s=n.normal,r=n.block.x,o=n.block.y,a=n.block.z,c=r+s.x,l=o+s.y,h=a+s.z;if(this.ghostBlock.position.set(c+.5,l+.5,h+.5),this.ghostBlock.visible=!0,this.lastBuildTime+=e,this.lastBuildTime>=this.buildCooldown){if(this.input.isMouseButtonDown(0))this.world.removeBlock(r,o,a),this.soundManager&&this.soundManager.playExplosion(),this.particleSystem&&this.particleSystem.emit(new I(r+.5,o+.5,a+.5),8947848,10),this.lastBuildTime=0;else if(this.input.isMouseButtonDown(2)){const u=this.physicsPosition;new I(c+.5,l+.5,h+.5).distanceTo(u)>1.5&&(this.world.addBlock(c,l,h,8934690),this.soundManager&&this.soundManager.playBuild(),this.lastBuildTime=0)}}}else this.ghostBlock.visible=!1}}class sx{constructor(e,t){this.world=e,this.player=t,this.canvas=document.getElementById("minimap"),this.ctx=this.canvas.getContext("2d"),this.size=200,this.zoom=1.5,this.visited=new Set,this.cellSize=4}update(){const e=this.player.position.x,t=this.player.position.z,n=60;for(let s=e-n;s<=e+n;s+=this.cellSize)for(let r=t-n;r<=t+n;r+=this.cellSize){const o=s-e,a=r-t;if(o*o+a*a<=n*n){const c=Math.floor(s/this.cellSize),l=Math.floor(r/this.cellSize);this.visited.add(`${c},${l}`)}}this.draw()}draw(){this.ctx.clearRect(0,0,this.size,this.size),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,this.size/2,0,Math.PI*2),this.ctx.clip(),this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.size,this.size);const e=this.player.position.x,t=this.player.position.z,n=this.size*this.zoom/2,s=Math.floor((e-n)/this.cellSize)*this.cellSize,r=Math.floor((e+n)/this.cellSize)*this.cellSize,o=Math.floor((t-n)/this.cellSize)*this.cellSize,a=Math.floor((t+n)/this.cellSize)*this.cellSize;for(let h=s;h<=r;h+=this.cellSize)for(let u=o;u<=a;u+=this.cellSize){const f=Math.floor(h/this.cellSize),p=Math.floor(u/this.cellSize);if(this.visited.has(`${f},${p}`)){const x=this.world.getMapColor(h,u),_=this.size/2+(h-e)/this.zoom,m=this.size/2+(u-t)/this.zoom,d=this.cellSize/this.zoom+1;this.ctx.fillStyle=x,this.ctx.fillRect(_,m,d,d)}}this.ctx.fillStyle="white",this.ctx.strokeStyle="black",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.arc(this.size/2,this.size/2,4,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke();const c=Math.sin(this.player.rotation.y),l=Math.cos(this.player.rotation.y);this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.moveTo(this.size/2,this.size/2),this.ctx.lineTo(this.size/2-c*10,this.size/2-l*10),this.ctx.stroke(),this.ctx.restore()}}class rx{constructor(e){this.scene=e,this.particles=[],this.geometry=new cn(.2,.2,.2),this.material=new cs({color:16777215})}emit(e,t,n=5,s=5,r=1){for(let o=0;o<n;o++){const a=new Ke(this.geometry,this.material.clone());a.material.color.setHex(t),a.position.copy(e),a.position.x+=(Math.random()-.5)*.5,a.position.y+=(Math.random()-.5)*.5,a.position.z+=(Math.random()-.5)*.5;const c=new I(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(s*Math.random());this.particles.push({mesh:a,velocity:c,life:r,maxLife:r}),this.scene.add(a)}}update(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.life-=e,n.mesh.position.add(n.velocity.clone().multiplyScalar(e)),n.velocity.y-=10*e;const s=n.life/n.maxLife;n.mesh.scale.setScalar(s),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.particles.splice(t,1))}}}class ox{constructor(e){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.3,this.masterGain.connect(this.ctx.destination),this.windOsc=null,this.windGain=null,this.initWind()}initWind(){const e=2*this.ctx.sampleRate,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let r=0;r<e;r++){const o=Math.random()*2-1;n[r]=(s+.02*o)/1.02,s=n[r],n[r]*=3.5}var s=0;this.windNode=this.ctx.createBufferSource(),this.windNode.buffer=t,this.windNode.loop=!0,this.windFilter=this.ctx.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=200,this.windGain=this.ctx.createGain(),this.windGain.gain.value=0,this.windNode.connect(this.windFilter),this.windFilter.connect(this.windGain),this.windGain.connect(this.masterGain),this.windNode.start()}updateWind(e){this.ctx.state==="suspended"&&this.ctx.resume();const t=Math.min(e/30,1);this.windGain.gain.setTargetAtTime(t*.5,this.ctx.currentTime,.1),this.windFilter.frequency.setTargetAtTime(200+t*800,this.ctx.currentTime,.1)}playShoot(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(100,this.ctx.currentTime+.2),t.gain.setValueAtTime(.5,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.2),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.2)}playExplosion(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(100,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(10,this.ctx.currentTime+.3),t.gain.setValueAtTime(.5,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.3),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.3)}playBuild(){this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.setValueAtTime(600,this.ctx.currentTime+.05),t.gain.setValueAtTime(.1,this.ctx.currentTime),t.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.1),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.1)}}class ax{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return cx(e).buffer}}function cx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function gl(i){return new lx(i).unpack()}function _l(i){const e=new hx,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class lx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class hx{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new ax,this._textEncoder=new TextEncoder}}let vl=!0,yl=!0;function ji(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function ti(i,e,t){if(!i.RTCPeerConnection)return;const n=i.RTCPeerConnection.prototype,s=n.addEventListener;n.addEventListener=function(o,a){if(o!==e)return s.apply(this,arguments);const c=l=>{const h=t(l);h&&(a.handleEvent?a.handleEvent(h):a(h))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),s.apply(this,[o,c])};const r=n.removeEventListener;n.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return r.apply(this,arguments);if(!this._eventMap[e].has(a))return r.apply(this,arguments);const c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,r.apply(this,[o,c])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function ux(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(vl=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function fx(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(yl=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Sl(){if(typeof window=="object"){if(vl)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function ra(i,e){yl&&console.warn(i+" is deprecated, please use "+e+" instead.")}function dx(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n)return{browser:"chrome",version:parseInt(n.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(ji(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(ji(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2));else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(ji(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=ji(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Cc(i){return Object.prototype.toString.call(i)==="[object Object]"}function Ml(i){return Cc(i)?Object.keys(i).reduce(function(e,t){const n=Cc(i[t]),s=n?Ml(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function Uo(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Uo(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{Uo(i,i.get(s),t)})}))}function Ac(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&Uo(i,a,s)})}),s}const Rc=Sl;function bl(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,p){return f?f+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(x=>x.kind==="videoinput");let p=f.find(x=>u.some(_=>x.label.toLowerCase().includes(_)));return!p&&f.length&&u.includes("back")&&(p=f[f.length-1]),p&&(a.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),a.video=n(a.video),Rc("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return Rc("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Tl(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function El(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",s=>{let r;i.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(a=>a.track&&a.track.id===s.track.id):r={track:s.track};const o=new Event("track");o.track=s.track,o.receiver=r,o.transceiver={receiver:r},o.streams=[n.stream],this.dispatchEvent(o)}),n.stream.getTracks().forEach(s=>{let r;i.RTCPeerConnection.prototype.getReceivers?r=this.getReceivers().find(a=>a.track&&a.track.id===s.id):r={track:s};const o=new Event("track");o.track=s,o.receiver=r,o.transceiver={receiver:r},o.streams=[n.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else ti(i,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function Cl(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Al(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const t=i.RTCPeerConnection.prototype.getSenders;t&&(i.RTCPeerConnection.prototype.getSenders=function(){const r=t.apply(this,[]);return r.forEach(o=>o._pc=this),r});const n=i.RTCPeerConnection.prototype.addTrack;n&&(i.RTCPeerConnection.prototype.addTrack=function(){const r=n.apply(this,arguments);return r._pc=this,r}),i.RTCRtpSender.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>Ac(o,r.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const t=i.RTCPeerConnection.prototype.getReceivers;t&&(i.RTCPeerConnection.prototype.getReceivers=function(){const s=t.apply(this,[]);return s.forEach(r=>r._pc=this),s}),ti(i,"track",n=>(n.receiver._pc=n.srcElement,n)),i.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(r=>Ac(r,s.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const e=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const n=arguments[0];let s,r,o;return this.getSenders().forEach(a=>{a.track===n&&(s?o=!0:s=a)}),this.getReceivers().forEach(a=>(a.track===n&&(r?o=!0:r=a),a.track===n)),o||s&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function Rl(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function wl(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Rl(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(p=>p.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const x=this._streams[u.id];if(x)x.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const p=l._reverseStreams[f],x=l._streams[p.id];u=u.replace(new RegExp(x.id,"g"),p.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const p=l._reverseStreams[f],x=l._streams[p.id];u=u.replace(new RegExp(p.id,"g"),x.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[x=>{const _=r(this,x);f[0].apply(null,[_])},x=>{f[1]&&f[1].apply(null,x)},arguments[2]]):h.apply(this,arguments).then(x=>r(this,x))}};i.RTCPeerConnection.prototype[l]=u[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(_=>h.track===_)&&(f=this._streams[p])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Fo(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function Pl(i,e){ti(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const wc=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Pl,shimAddTrackRemoveTrack:wl,shimAddTrackRemoveTrackWithNative:Rl,shimGetSendersWithDtmf:Cl,shimGetUserMedia:bl,shimMediaStream:Tl,shimOnTrack:El,shimPeerConnection:Fo,shimSenderReceiverGetStats:Al},Symbol.toStringTag,{value:"Module"}));function Dl(i,e){const t=i&&i.navigator,n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){ra("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function px(i,e){i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||i.navigator.mediaDevices&&(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)})}function Il(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function No(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection))return;!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(s){const r=i.RTCPeerConnection.prototype[s],o={[s](){return arguments[0]=new(s==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),r.apply(this,arguments)}};i.RTCPeerConnection.prototype[s]=o[s]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function Ll(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ul(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),ti(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Fl(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){ra("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Nl(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function Ol(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.addTransceiver;e&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];const s=n.length>0;s&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const r=e.apply(this,arguments);if(s){const{sender:o}=r,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return r})}function Bl(i){if(!(typeof i=="object"&&i.RTCRtpSender))return;const e=i.RTCRtpSender.prototype.getParameters;e&&(i.RTCRtpSender.prototype.getParameters=function(){const n=e.apply(this,arguments);return"encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n})}function kl(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function zl(i){if(!(typeof i=="object"&&i.RTCPeerConnection))return;const e=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Pc=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Ol,shimCreateAnswer:zl,shimCreateOffer:kl,shimGetDisplayMedia:px,shimGetParameters:Bl,shimGetUserMedia:Dl,shimOnTrack:Il,shimPeerConnection:No,shimRTCDataChannel:Nl,shimReceiverGetStats:Ul,shimRemoveStream:Fl,shimSenderGetStats:Ll},Symbol.toStringTag,{value:"Module"}));function Gl(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function Vl(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Hl(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function Wl(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Xl(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function Xl(i){return i&&i.video!==void 0?Object.assign({},i,{video:Ml(i.video)}):i}function $l(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(ra("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function ql(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Yl(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function jl(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Dc=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:jl,shimCallbacksAPI:Hl,shimConstraints:Xl,shimCreateOfferLegacy:Yl,shimGetUserMedia:Wl,shimLocalStreamsAPI:Gl,shimRTCIceServerUrls:$l,shimRemoteStreamsAPI:Vl,shimTrackEventTransceiver:ql},Symbol.toStringTag,{value:"Module"}));function mx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var kr={exports:{}},Ic;function xx(){return Ic||(Ic=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(x=>parseInt(x,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let p={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(p.rtx={ssrc:l}),n.push(p),r&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(p))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(kr)),kr.exports}var Kl=xx();const Ei=mx(Kl),gx=_h({__proto__:null,default:Ei},[Kl]);function Gs(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Ei.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,ti(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Oo(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||ti(i,"icecandidate",e=>{if(e.candidate){const t=Ei.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Vs(i,e){if(!i.RTCPeerConnection)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Ei.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Ei.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Ei.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return o.apply(this,arguments)}}function Hs(i){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype))return;function e(n,s){const r=n.send;n.send=function(){const a=arguments[0],c=a.length||a.size||a.byteLength;if(n.readyState==="open"&&s.sctp&&c>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return r.apply(n,arguments)}}const t=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const s=t.apply(this,arguments);return e(s,this),s},ti(i,"datachannel",n=>(e(n.channel,n.target),n))}function Bo(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function ko(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Ws(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Xs(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const _x=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:ko,shimAddIceCandidateNullOrEmpty:Ws,shimConnectionState:Bo,shimMaxMessageSize:Vs,shimParameterlessSetLocalDescription:Xs,shimRTCIceCandidate:Gs,shimRTCIceCandidateRelayProtocol:Oo,shimSendThrowTypeError:Hs},Symbol.toStringTag,{value:"Module"}));function vx({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Sl,n=dx(i),s={browserDetails:n,commonShim:_x,extractVersion:ji,disableLog:ux,disableWarnings:fx,sdp:gx};switch(n.browser){case"chrome":if(!wc||!Fo||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=wc,Ws(i,n),Xs(i),bl(i,n),Tl(i),Fo(i,n),El(i),wl(i,n),Cl(i),Al(i),Pl(i,n),Gs(i),Oo(i),Bo(i),Vs(i,n),Hs(i),ko(i,n);break;case"firefox":if(!Pc||!No||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Pc,Ws(i,n),Xs(i),Dl(i,n),No(i,n),Il(i),Fl(i),Ll(i),Ul(i),Nl(i),Ol(i),Bl(i),kl(i),zl(i),Gs(i),Bo(i),Vs(i,n),Hs(i);break;case"safari":if(!Dc||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Dc,Ws(i,n),Xs(i),$l(i),Yl(i),Hl(i),Gl(i),Vl(i),ql(i),Wl(i),jl(i),Gs(i),Oo(i),Vs(i,n),Hs(i),ko(i,n);break;default:t("Unsupported browser!");break}return s}const Lc=vx({window:typeof window>"u"?void 0:window});function ni(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Zl{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function yx(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const zr=Lc.default||Lc,qi=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return zr.browserDetails.browser}getVersion(){return zr.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=zr.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Sx=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Jl=()=>Math.random().toString(36).slice(2),Uc={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Mx extends Zl{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Uc,this.browser=qi.getBrowser(),this.browserVersion=qi.getVersion(),this.pack=_l,this.unpack=gl,this.supports=(function(){const t={browser:qi.isBrowserSupported(),webRTC:qi.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Uc),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!qi.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=Sx,this.randomToken=Jl}}const Lt=new Mx,bx="PeerJS: ";class Tx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[bx,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var me=new Tx,oa={},Ex=Object.prototype.hasOwnProperty,Pt="~";function rs(){}Object.create&&(rs.prototype=Object.create(null),new rs().__proto__||(Pt=!1));function Cx(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Ql(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Cx(t,n||i,s),o=Pt?Pt+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function $s(i,e){--i._eventsCount===0?i._events=new rs:delete i._events[e]}function Tt(){this._events=new rs,this._eventsCount=0}Tt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Ex.call(t,n)&&e.push(Pt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Tt.prototype.listeners=function(e){var t=Pt?Pt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};Tt.prototype.listenerCount=function(e){var t=Pt?Pt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Tt.prototype.emit=function(e,t,n,s,r,o){var a=Pt?Pt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,p;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(p=1,h=new Array(l-1);p<l;p++)h[p-1]=arguments[p];c[u].fn.apply(c[u].context,h)}}return!0};Tt.prototype.on=function(e,t,n){return Ql(this,e,t,n,!1)};Tt.prototype.once=function(e,t,n){return Ql(this,e,t,n,!0)};Tt.prototype.removeListener=function(e,t,n,s){var r=Pt?Pt+e:e;if(!this._events[r])return this;if(!t)return $s(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&$s(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:$s(this,r)}return this};Tt.prototype.removeAllListeners=function(e){var t;return e?(t=Pt?Pt+e:e,this._events[t]&&$s(this,t)):(this._events=new rs,this._eventsCount=0),this};Tt.prototype.off=Tt.prototype.removeListener;Tt.prototype.addListener=Tt.prototype.on;Tt.prefixed=Pt;Tt.EventEmitter=Tt;oa=Tt;var ii={};ni(ii,"ConnectionType",()=>Ln);ni(ii,"PeerErrorType",()=>pt);ni(ii,"BaseConnectionErrorType",()=>zo);ni(ii,"DataConnectionErrorType",()=>aa);ni(ii,"SerializationType",()=>rr);ni(ii,"SocketEventType",()=>Dn);ni(ii,"ServerMessageType",()=>bt);var Ln=(function(i){return i.Data="data",i.Media="media",i})({}),pt=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),zo=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),aa=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),rr=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),Dn=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),bt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const eh="1.5.5";class Ax extends oa.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+eh),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),me.log("Server message received:",r)}catch{me.log("Invalid server message",s.data);return}this.emit(Dn.Message,r)},this._socket.onclose=s=>{this._disconnected||(me.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(Dn.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),me.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){me.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:bt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Dn.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class th{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Ln.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){me.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;me.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(me.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:bt.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":me.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(zo.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":me.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(zo.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":me.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},me.log("Listening for data channel"),e.ondatachannel=o=>{me.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},me.log("Listening for remote stream"),e.ontrack=o=>{me.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Ln.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){me.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);me.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),me.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Ln.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:bt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(pt.WebRTC,s),me.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(pt.WebRTC,n),me.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();me.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),me.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:bt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(pt.WebRTC,s),me.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(pt.WebRTC,n),me.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;me.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),me.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(pt.WebRTC,o),me.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){me.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),me.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(pt.WebRTC,t),me.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(me.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return me.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){me.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class nh extends oa.EventEmitter{emitError(e,t){me.error("Error:",t),this.emit("error",new Rx(`${e}`,t))}}class Rx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class ih extends nh{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class Ks extends ih{static#e=this.ID_PREFIX="mc_";get type(){return Ln.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ks.ID_PREFIX+Lt.randomToken(),this._negotiator=new th(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{me.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){me.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case bt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case bt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:me.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){me.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class wx{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",eh),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){me.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Lt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Lt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw me.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class Zs extends ih{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Ln.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Zs.ID_PREFIX+Jl(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new th(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{me.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{me.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{me.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(aa.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case bt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case bt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:me.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class ca extends Zs{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Zs.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return me.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Gr extends ca{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Zl,this.serialization=rr.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=gl(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=yx(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=_l(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);me.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class Px extends ca{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=rr.None}}class Dx extends ca{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Lt.chunkedMTU){this.emitError(aa.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=rr.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class Ji extends nh{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Px,json:Dx,binary:Gr,"binary-utf8":Gr,default:Gr},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Lt.CLOUD_HOST,port:Lt.CLOUD_PORT,path:"/",key:Ji.DEFAULT_KEY,token:Lt.randomToken(),config:Lt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Lt.CLOUD_HOST?this._options.secure=Lt.isSecure():this._options.host==Lt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&me.setLogFunction(this._options.logFunction),me.logLevel=this._options.debug||0,this._api=new wx(t),this._socket=this._createServerConnection(),!Lt.supports.audioVideo&&!Lt.supports.data){this._delayedAbort(pt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Lt.validateId(n)){this._delayedAbort(pt.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(pt.ServerError,s))}_createServerConnection(){const e=new Ax(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Dn.Message,t=>{this._handleMessage(t)}),e.on(Dn.Error,t=>{this._abort(pt.SocketError,t)}),e.on(Dn.Disconnected,()=>{this.disconnected||(this.emitError(pt.Network,"Lost connection to server."),this.disconnect())}),e.on(Dn.Close,()=>{this.disconnected||this._abort(pt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case bt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case bt.Error:this._abort(pt.ServerError,n.msg);break;case bt.IdTaken:this._abort(pt.UnavailableID,`ID "${this.id}" is taken`);break;case bt.InvalidKey:this._abort(pt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case bt.Leave:me.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case bt.Expire:this.emitError(pt.PeerUnavailable,`Could not connect to peer ${s}`);break;case bt.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),me.warn(`Offer received for existing Connection ID:${r}`)),n.type===Ln.Media){const c=new Ks(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===Ln.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{me.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){me.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):me.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){me.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(pt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){me.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Ks(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){me.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){me.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(me.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;me.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)me.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)me.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(pt.ServerError,t))}}class Ix{constructor(e){this.networkManager=e,this.players={},this.crystals=[{id:2,x:-150,y:60,z:150,active:!0},{id:4,x:-150,y:60,z:-150,active:!0}],this.scores={red:0,blue:0},this.TEAMS=["red","blue"]}init(){this.scores={red:0,blue:0},this.crystals.forEach(e=>e.active=!0)}addPlayer(e){console.log("Host: Player connected:",e),this.players[e]={id:e,x:0,y:0,z:0,rx:0,ry:0,team:"spectator",biome:"forest"},this.networkManager.sendTo(e,"init",{id:e,players:this.players,crystals:this.crystals,scores:this.scores}),this.broadcastPlayerList()}removePlayer(e){console.log("Host: Player disconnected:",e),delete this.players[e],this.networkManager.broadcast("playerLeft",e),this.broadcastPlayerList()}broadcastPlayerList(){const e=Object.keys(this.players);this.networkManager.broadcast("playerListUpdate",e)}startGame(){this.networkManager.broadcast("gameStarted",{})}handleMessage(e,t,n){switch(t){case"joinTeam":this.handleJoinTeam(e,n);break;case"move":this.handleMove(e,n);break;case"collectCrystal":this.handleCollectCrystal(e,n);break}}handleJoinTeam(e,t){if(console.log(`Host: Player ${e} joining team ${t}`),!this.TEAMS.includes(t)){console.error(`Host: Invalid team ${t}`);return}let n=0,s=32,r=0;t==="blue"?(n=-150,r=150):t==="red"&&(n=-150,r=-150);const o=this.players[e];o?(o.team=t,o.x=n,o.y=s,o.z=r,console.log(`Host: Assigning ${e} to ${t}`),this.networkManager.sendTo(e,"teamAssigned",o),this.networkManager.broadcast("playerJoined",o)):console.error(`Host: Player ${e} not found in players list`)}handleMove(e,t){if(this.players[e]){const n=this.players[e];n.x=t.x,n.y=t.y,n.z=t.z,n.rx=t.rx,n.ry=t.ry,n.biome=t.biome,this.networkManager.broadcast("playerMoved",n,e)}}handleCollectCrystal(e,t){const n=this.crystals.find(s=>s.id===t);if(n&&n.active){n.active=!1;const s=this.players[e];s&&(this.scores[s.team]++,this.networkManager.broadcast("crystalCollected",{id:t,team:s.team,scores:this.scores}),this.checkWinCondition())}}checkWinCondition(){if(this.crystals.filter(t=>t.active).length===0){let t="red",n=-1;for(const[s,r]of Object.entries(this.scores))r>n&&(n=r,t=s);this.networkManager.broadcast("gameOver",{winner:t}),setTimeout(()=>this.resetGame(),5e3)}}resetGame(){this.crystals.forEach(e=>e.active=!0),this.scores={red:0,blue:0},this.networkManager.broadcast("gameReset",{crystals:this.crystals,scores:this.scores})}}class Lx{constructor(){this.peer=null,this.conn=null,this.connections=[],this.isHost=!1,this.gameHost=null,this.playerId=null,this.onLocalPlayerInit=null,this.onPlayerJoinedCallback=null,this.onPlayerLeftCallback=null,this.onPlayerMovedCallback=null,this.onCrystalsInit=null,this.onCrystalCollectedCallback=null,this.onScoreUpdate=null,this.onTeamAssignedCallback=null,this.onPlayerListUpdate=null,this.onGameStarted=null}async hostGame(e=null){this.isHost=!0;const t={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};return e?this.peer=new Ji(e,t):this.peer=new Ji(void 0,t),new Promise((n,s)=>{this.peer.on("open",r=>{console.log("My peer ID is: "+r),this.playerId=r,this.gameHost=new Ix(this),this.gameHost.init(),this.gameHost.addPlayer(r),this.showConnectionStatus(!0,`Hosting: ${r}`),n(r)}),this.peer.on("connection",r=>{this.handleConnection(r)}),this.peer.on("error",r=>{console.error(r);let o=r.type;r.type==="unavailable-id"&&(o="ID already taken. Try another."),this.showConnectionStatus(!1,o),s(o)})})}async joinGame(e){this.isHost=!1;const t={config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};return this.peer=new Ji(void 0,t),new Promise((n,s)=>{this.peer.on("open",r=>{this.playerId=r,console.log("My peer ID is: "+r),this.conn=this.peer.connect(e),this.conn.on("open",()=>{console.log("Connected to Host"),this.showConnectionStatus(!0,"Connected to Host"),n()}),this.conn.on("data",o=>{this.handleMessage(o)}),this.conn.on("close",()=>{this.showConnectionStatus(!1,"Disconnected")}),this.conn.on("error",o=>{console.error("Connection Error",o),this.showConnectionStatus(!1,"Connection Error"),s(o)})}),this.peer.on("error",r=>{console.error("Peer Error",r),s(r)})})}handleConnection(e){console.log("Client connected:",e.peer),this.connections.push(e),e.on("open",()=>{this.gameHost.addPlayer(e.peer)}),e.on("data",t=>{this.gameHost&&this.gameHost.handleMessage(e.peer,t.type,t.payload)}),e.on("close",()=>{this.connections=this.connections.filter(t=>t!==e),this.gameHost&&this.gameHost.removePlayer(e.peer)})}send(e,t){this.isHost?this.gameHost&&this.gameHost.handleMessage(this.playerId,e,t):this.conn&&this.conn.open&&this.conn.send({type:e,payload:t})}sendTo(e,t,n){if(e===this.playerId)this.handleMessage({type:t,payload:n});else{const s=this.connections.find(r=>r.peer===e);s&&s.open&&s.send({type:t,payload:n})}}broadcast(e,t,n=null){this.playerId!==n&&this.handleMessage({type:e,payload:t}),this.connections.forEach(s=>{s.peer!==n&&s.open&&s.send({type:e,payload:t})})}handleMessage(e){const{type:t,payload:n}=e;switch(t){case"playerListUpdate":this.onPlayerListUpdate&&this.onPlayerListUpdate(n);break;case"gameStarted":this.onGameStarted&&this.onGameStarted();break;case"init":n.players[this.playerId]&&this.onLocalPlayerInit&&this.onLocalPlayerInit(n.players[this.playerId]),Object.values(n.players).forEach(s=>{s.id!==this.playerId&&this.onPlayerJoined(s)}),this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"playerJoined":this.onPlayerJoined(n);break;case"playerLeft":this.onPlayerLeftCallback&&this.onPlayerLeftCallback(n);break;case"playerMoved":this.onPlayerMovedCallback&&this.onPlayerMovedCallback(n);break;case"crystalCollected":this.onCrystalCollectedCallback&&this.onCrystalCollectedCallback(n);break;case"gameOver":alert("Game Over! Winner: "+n.winner);break;case"gameReset":this.onCrystalsInit&&this.onCrystalsInit(n.crystals),this.onScoreUpdate&&this.onScoreUpdate(n.scores);break;case"teamAssigned":this.onTeamAssignedCallback&&this.onTeamAssignedCallback(n);break}}sendMove(e,t,n){this.send("move",{x:e.x,y:e.y,z:e.z,rx:t.x,ry:t.y,biome:n})}collectCrystal(e){this.send("collectCrystal",e)}joinTeam(e){console.log("NetworkManager: Joining team",e),this.send("joinTeam",e)}onPlayerJoined(e){this.onPlayerJoinedCallback&&this.onPlayerJoinedCallback(e)}showConnectionStatus(e,t=""){let n=document.getElementById("connection-status");n||(n=document.createElement("div"),n.id="connection-status",n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.padding="10px",n.style.borderRadius="5px",n.style.fontFamily="monospace",n.style.fontWeight="bold",n.style.zIndex="1000",n.style.maxWidth="300px",n.style.wordWrap="break-word",document.body.appendChild(n)),e?(n.textContent=t||"🟢 Online",n.style.backgroundColor="rgba(0, 255, 0, 0.8)",n.style.color="white"):(n.innerHTML="🔴 Offline<br><small>"+t+"</small>",n.style.backgroundColor="rgba(255, 0, 0, 0.8)",n.style.color="white")}}class Ux{constructor(e,t){this.scene=e,this.id=t.id,this.team=t.team,this.mesh=new yn,this.mesh.position.set(t.x,t.y,t.z);const n=new jn(.5,1.5,8);let s=2755149;this.team==="red"?s=16711680:this.team==="blue"&&(s=255),this.bodyMat=new Ut({color:s});const r=new Ke(n,this.bodyMat);r.position.y=.75,this.mesh.add(r);const o=new Qn(.3,8,8),a=new Ut({color:16764074}),c=new Ke(o,a);c.position.y=1.6,this.mesh.add(c);const l=new jn(.3,.8,8),h=new Ut({color:1118481}),u=new Ke(l,h);u.position.y=2.2,u.rotation.x=-.2,this.mesh.add(u),this.scene.add(this.mesh),this.targetPos=new I(t.x,t.y,t.z),this.targetRot=new qt(t.rx,t.ry,0)}update(e){this.mesh.position.lerp(this.targetPos,e*10),this.mesh.rotation.y=Si.lerp(this.mesh.rotation.y,this.targetRot.y,e*10)}updateData(e){this.targetPos.set(e.x,e.y,e.z),this.targetRot.set(e.rx,e.ry,0)}dispose(){this.scene.remove(this.mesh)}}const Gt=new Yu;Gt.background=new Ve(8900331);Gt.fog=new ea(8900331,10,500);const Js=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),ls=new Km({antialias:!0});ls.setSize(window.innerWidth,window.innerHeight);ls.shadowMap.enabled=!0;document.body.appendChild(ls.domElement);const la=new rx(Gt),or=new ox,vt=new Lx,Kn=new Map,Un=new Map;vt.onLocalPlayerInit=i=>{console.log("Connected as:",i.id)};vt.onTeamAssignedCallback=i=>{console.log("Team Assigned Callback received:",i),console.log("Team:",i.team),rn.setTeam(i.team);let e=new I(150,32,150);i.team==="blue"?e.set(-150,32,150):i.team==="red"&&e.set(-150,32,-150),console.log("Spawning at:",e),rn.mesh.position.copy(e),rn.physicsPosition.copy(e),rn.velocity.set(0,0,0),rn.setSpawnPoint(e);const t=document.getElementById("start-menu"),n=document.getElementById("ui"),s=document.getElementById("score-ui");console.log("Hiding start menu, showing UI"),t.style.display="none",n.style.display="block",s.style.display="block",lh=!0,document.body.requestPointerLock(),or.initWind()};document.querySelectorAll(".team-btn").forEach(i=>{i.addEventListener("click",e=>{const t=e.currentTarget.dataset.team;console.log("Team selected:",t),document.getElementById("team-select").style.display="none",document.getElementById("loading-msg").style.display="block",vt.joinTeam(t)})});vt.onPlayerJoinedCallback=i=>{console.log("Player Joined:",i.id);const e=new Ux(Gt,i);Kn.set(i.id,e)};vt.onPlayerLeftCallback=i=>{console.log("Player Left:",i),Kn.has(i)&&(Kn.get(i).dispose(),Kn.delete(i))};vt.onPlayerMovedCallback=i=>{Kn.has(i.id)&&Kn.get(i.id).updateData(i)};vt.onCrystalsInit=i=>{Un.forEach(n=>Gt.remove(n)),Un.clear();const e=new ia(1,0),t=new Ut({color:8388736,emissive:4194368,emissiveIntensity:2});i.forEach(n=>{if(n.active){const s=new Ke(e,t);s.position.set(n.x,n.y,n.z);const r=new ll(8388736,2,20);s.add(r),Gt.add(s),Un.set(n.id,s)}})};vt.onCrystalCollectedCallback=i=>{if(Un.has(i.id)){const e=Un.get(i.id);Gt.remove(e),Un.delete(i.id),la.emit(e.position,8388736,30),or.playExplosion()}sh(i.scores)};vt.onScoreUpdate=i=>{sh(i)};function sh(i){const e=document.getElementById("score-ui");e&&(e.innerHTML=`
            <span style="color: #ff4444">Red: ${i.red}</span> | 
            <span style="color: #4444ff">Blue: ${i.blue}</span>
        `)}const Fx=new Qn(500,32,32),Nx=new hn({uniforms:{topColor:{value:new Ve(30719)},bottomColor:{value:new Ve(16777215)},offset:{value:33},exponent:{value:.6}},vertexShader:`
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
    `,side:Rt}),Ox=new Ke(Fx,Nx);Gt.add(Ox);const Bx=new af(13421772,.6);Gt.add(Bx);const hs=new of(16777215,.8);hs.position.set(20,50,20);hs.castShadow=!0;hs.shadow.mapSize.width=2048;hs.shadow.mapSize.height=2048;Gt.add(hs);const os=new ex({chunkSize:32,tileSize:1});Gt.add(os.mesh);const kx=os.findSpawnPoint(),rn=new ix(Gt,Js,os,kx,la,or,vt),zx=document.getElementById("lobby-menu"),Yn=document.getElementById("lobby-status"),Fc=document.getElementById("btn-host"),Nc=document.getElementById("btn-join"),Gx=document.getElementById("input-host-id"),Vx=document.getElementById("input-custom-host-id"),rh=document.getElementById("waiting-room"),oh=document.getElementById("main-menu-buttons"),Oc=document.getElementById("player-list"),Qs=document.getElementById("start-game-btn"),ah=document.getElementById("waiting-msg"),ch=document.getElementById("lobby-name-display");vt.onPlayerListUpdate=i=>{Oc.innerHTML="",i.forEach(e=>{const t=document.createElement("li");t.textContent=e+(e===vt.playerId?" (You)":""),t.style.padding="5px",t.style.borderBottom="1px solid rgba(255,255,255,0.1)",Oc.appendChild(t)})};vt.onGameStarted=()=>{console.log("Game Started!"),zx.style.display="none",Hx.style.display="flex"};Fc&&Fc.addEventListener("click",async()=>{const i=Vx.value.trim()||null;Yn.textContent="Initializing Host...";try{const e=await vt.hostGame(i);Yn.textContent="",oh.style.display="none",rh.style.display="flex",Qs.style.display="block",ah.style.display="none",ch.textContent=e,navigator.clipboard.writeText(e)}catch(e){Yn.textContent="Error: "+e}});Qs&&Qs.addEventListener("click",()=>{vt.gameHost&&vt.gameHost.startGame()});Nc&&Nc.addEventListener("click",async()=>{const i=Gx.value.trim();if(!i){Yn.textContent="Please enter a Host ID";return}Yn.textContent="Connecting...";try{await vt.joinGame(i),Yn.textContent="",oh.style.display="none",rh.style.display="flex",Qs.style.display="none",ah.style.display="block",ch.textContent=i}catch(e){Yn.textContent="Error: "+e}});const Hx=document.getElementById("start-menu");document.getElementById("ui");let lh=!1;const tn=document.createElement("div");tn.id="score-ui";tn.style.position="absolute";tn.style.top="20px";tn.style.left="50%";tn.style.transform="translateX(-50%)";tn.style.color="white";tn.style.fontSize="24px";tn.style.fontWeight="bold";tn.style.textShadow="2px 2px 4px #000";tn.style.display="none";document.body.appendChild(tn);window.addEventListener("resize",()=>{Js.aspect=window.innerWidth/window.innerHeight,Js.updateProjectionMatrix(),ls.setSize(window.innerWidth,window.innerHeight)});const Bc=new lf;let Vr;function hh(){requestAnimationFrame(hh);const i=Bc.getDelta();if(lh){Vr||(Vr=new sx(os,rn)),rn.update(i),os.update(rn.position),Vr.update(),la.update(i),Kn.forEach(t=>t.update(i)),Un.forEach(t=>{t.rotation.y+=i,t.position.y+=Math.sin(Bc.getElapsedTime()*2)*.01}),Un.forEach((t,n)=>{rn.position.distanceTo(t.position)<2&&vt.collectCrystal(n)});const e=rn.velocity.length();or.updateWind(e)}ls.render(Gt,Js)}hh();
