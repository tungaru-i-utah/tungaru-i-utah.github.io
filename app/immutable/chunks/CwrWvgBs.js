import{i}from"./DHW7IoiC.js";async function a(n){try{await i("notify-admins",{kind:n})}catch(o){console.error(`[notify-admins] could not send "${n}" notification:`,o)}}export{a as n};
