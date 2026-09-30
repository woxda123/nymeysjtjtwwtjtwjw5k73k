// npm i ws && node server.js  — реле комнат для онлайн-режима Wox Mat
const {WebSocketServer}=require('ws');const R={};
new WebSocketServer({port:process.env.PORT||8080}).on('connection',(ws,req)=>{
  const c=req.url.slice(1);(R[c]=R[c]||new Set()).add(ws);
  ws.on('message',d=>R[c].forEach(x=>x!==ws&&x.readyState===1&&x.send(d.toString())));
  ws.on('close',()=>{R[c].delete(ws);if(!R[c].size)delete R[c]});
});
