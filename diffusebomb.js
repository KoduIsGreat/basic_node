module.exports ={
    diffuse : function(wires){
        for(var i = 1 ; i < wires.length; i ++)
        {
          if(!/w[prgo]|rg|b[bpr]|o[rb]|g[ow]|p[rb]/
            .test(wires[i-1][0]+wires[i][0])){
            console.log("Boom!");
            return;
          }
        }
        console.log("Bomb Diffused!");
    }
}
