"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["marketing-enterprise"],{27133:(e,t,n)=>{var o=n(99477),i=n(36071);let r=window.devicePixelRatio||1,a=new o.xsS,s=new o.cPb(50,window.innerWidth/window.innerHeight,.1,1e3),l={x:0,y:2.8,z:8};s.position.z=l.z,s.position.y=l.y;let d={x:3.75,y:0,z:19},w={x:l.x,y:l.y,z:l.z},p={x:-.02,y:0,z:.3},m={x:p.x,y:p.y,z:p.z},y={x:-.15,y:.075},c=new o.CP7({alpha:!0}),x=new o.xo$(2,60,60),h=new o.Wid({color:2369838,metalness:0,roughness:.9}),u=new o.Kj0(x,h);a.add(u);let z=new o.Wid({color:16777215,wireframe:!0,wireframeLinewidth:2,opacity:.1,blending:o.WMw,metalness:.8,roughness:.8}),g=new o.xo$(2.014,30,30),v=new o.Kj0(g,z);a.add(v);let f=`
uniform vec3 viewVector;
uniform float c;
uniform float p;
varying float intensity;
varying float intensityA;
void main()
{
  vec3 vNormal = normalize( normalMatrix * normal );
  vec3 vNormel = normalize( normalMatrix * viewVector );
  intensity = pow( c - dot(vNormal, vNormel), p );
  intensityA = pow( 0.63 - dot(vNormal, vNormel), p );

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M=`
uniform vec3 glowColor;
varying float intensity;
varying float intensityA;
void main()
{
  gl_FragColor = vec4( glowColor * intensity, 1.0 * intensityA );
}`,j=new o.xo$(2,45,45),S=new o.jyz({uniforms:{c:{value:.65},p:{value:15},glowColor:{value:new o.Ilk(16018366)},viewVector:{value:new o.Pa4(0,0,l.z)}},vertexShader:f,fragmentShader:M,side:o._Li,blending:o.WMw,transparent:!0,dithering:!0}),_=new o.Kj0(j,S);_.scale.multiplyScalar(1.06),_.rotateX(.01*Math.PI),_.rotateY(.01*Math.PI),_.position.set(p.x,p.y,p.z),_.renderOrder=3,a.add(_);let P=new o.ZAu,b={x:-1.6,y:.3,z:0},L={x:0,y:0,z:0},C={x:b.x,y:b.y,z:b.z},E=new o.FT0({color:16777215,linewidth:1,scale:1,dashSize:.05,gapSize:.1,opacity:.3,transparent:!0}),A=new o.ZAu,I=new o.zf8(3,90),T=new o.TOt(I),k=new o.ejS(T,E);k.computeLineDistances();let N=new o.zf8(.1,12),O=new o.Kj0(N,h);A.add(k),A.add(O),O.position.set(3,0,0),P.add(A);let W=new o.ZAu,H=new o.zf8(4.35,90),K=new o.TOt(H),R=new o.ejS(K,E);R.computeLineDistances();let F=new o.zf8(.1,12),V=new o.Kj0(F,h),q=new o.Kj0(F,h);W.add(R),W.add(V),W.add(q),V.position.set(4.35,0,0),q.position.set(-4.35,0,0),P.add(W);let B=0,D=0,U=new o.V4E(4.338,4.35,90,1,0,B),Z=2*Math.PI,$=new o.vBJ({color:16777215,side:o._Li}),J=new o.Kj0(U,$);J.position.set(0,0,.01),J.setRotationFromEuler(new o.USm(Math.PI,0,-Math.PI/2)),P.add(J);let X=new o.zf8(6.307499999999999,90),Y=new o.TOt(X),G=new o.ejS(Y,E);G.computeLineDistances(),P.add(G),P.setRotationFromEuler(new o.USm(b.x,b.y,b.z)),a.add(P);let Q=new o._12(.1,.1),ee=new o.SPe(Q,new o.vBJ,300),et=new o.Ilk,en=[2573381,3941957,4465163,2698054,7825269],eo=new o.Tme;for(let e=0;e<300;e++){et.setHex(en[Math.floor(Math.random()*en.length)]),ee.setColorAt(e,et);let t={x:65*Math.random()-32.5+Math.random()*(2*Math.random()-1)*65/2,y:55*Math.random()-27.5+Math.random()*(2*Math.random()-1)*55/2,z:-50-10*Math.random()},n=2*Math.random();eo.position.set(t.x,t.y,t.z),eo.scale.set(n,n,1),eo.updateMatrix(),ee.setMatrixAt(e,eo.matrix)}a.add(ee),(0,i.N7)(".js-enterprise-planet",e=>{c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(r),c.domElement.classList.add("width-window","height-window"),e.appendChild(c.domElement),window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)});let t=new o.PMe(16018366,25,120,.3,0,1.1);t.position.set(-35,90,-40);let n=new o.Ox3(2197759,.5);n.position.set(-90,30,10),a.add(t,n),function e(){requestAnimationFrame(e),u.rotation.x+=.01,u.rotation.y+=.01,A.rotation.z-=.005,W.rotation.z-=.003,G.rotation.z-=.001,s.position.x=s.position.x+(w.x-s.position.x)*.1,s.position.y=s.position.y+(w.y-s.position.y)*.1,s.position.z=s.position.z+(w.z-s.position.z)*.1,_.position.x=_.position.x+(m.x-_.position.x)*.1,_.position.y=_.position.y+(m.y-_.position.y)*.1;let t={x:P.rotation.x+(C.x-P.rotation.x)*.1,y:P.rotation.y+(C.y-P.rotation.y)*.1,z:P.rotation.z+(C.z-P.rotation.z)*.1};if(P.setRotationFromEuler(new o.USm(t.x,t.y,t.z)),B!==D){J.geometry.dispose(),B+=(D-B)*.14;let e=new o.V4E(4.338,4.35,90,1,0,B);J.geometry=e}c.render(a,s)}()}),document.addEventListener("scroll",()=>{let e=document.querySelector(".js-enterprise-proto-platform");if(null===e||!(e instanceof HTMLElement))return;let t=window.innerHeight-e.getBoundingClientRect().height,n=e.getBoundingClientRect().top-t-150,o=n+document.documentElement.scrollTop,i=n>0?Math.max(0,1-n/o):1;w.x=l.x+(d.x-l.x)*i,w.y=l.y+(d.y-l.y)*i,w.z=l.z+(d.z-l.z)*i,m.x=p.x+(y.x-p.x)*i,m.y=p.y+(y.y-p.y)*i,C.x=b.x+(L.x-b.x)*i,C.y=b.y+(L.y-b.y)*i,C.z=b.z+(L.z-b.z)*i,D=Z*i*i}),(0,i.N7)(".js-enterprise-planet-container",e=>{new IntersectionObserver(e=>{let t=document.querySelector(".js-enterprise-planet");if(null!==t)for(let n of e){t.classList.toggle("enterprise-planet-stuck",n.isIntersecting);let e=document.querySelector(".js-enterprise-proto-platform-content");if(null===e)return;e.classList.toggle("enterprise-platform-content-follow",n.isIntersecting)}},{rootMargin:"0% 0% 0% 0%",threshold:0}).observe(e)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_three_build_three_module_js"],()=>t(27133)),e.O()}]);
//# sourceMappingURL=marketing-enterprise-daac3dee449a.js.map