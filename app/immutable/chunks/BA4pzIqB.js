function o(n=new Date){const e=n.getHours();return e<12?"Good morning":e<18?"Good afternoon":"Good evening"}function r(n,e=new Date){const t=o(e);return n?`${t}, ${n}`:t}export{r as g};
