import{c as r,b as n,a4 as u,s as l}from"./index-89d6f53b.js";import{R as p}from"./rotate-cw-6d9f64d3.js";import{d as _}from"./debounce-c1ba2006.js";const x="_rotate_1dspl_1",g="_isRotating_1dspl_5",d="_rotating_1dspl_1",c={rotate:x,isRotating:g,rotating:d};function N({isRotating:t}){const e=r(c.rotate,{[c.isRotating]:t});return n("span",{className:e,children:n(p,{width:16})})}const{useCallback:m,useState:R,useMemo:h}=l;function f(t){const[,e]=u(t),[o,i]=R(""),s=h(()=>_(e,300),[e]);return[m(a=>{i(a.target.value),s(a.target.value)},[s]),o]}const T="_input_uqa0o_1",b={input:T};function j(t){const[e,o]=f(t.textAtom);return n("input",{className:b.input,type:"text",value:o,onChange:e,placeholder:t.placeholder})}export{N as R,j as T};