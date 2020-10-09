exports.bodyMassIndex = function(req,res){

   var {weight, height} = req.body;
   
   try {
      if(weight === ''){
         throw "A variável peso não foi informada";
      }
      if(height === ''){
         throw "A variável altura não foi informada";
      }

      //Convert weight e height in float
      weight = parseFloat(weight);
      height = parseFloat(height);


      if(height === 0){
         throw "A variável altura é igual a zero";
      }else{
         //Calculator body mass index
         var bodyMassIndex = weight / Math.pow(height, height);
      }
   } catch (error) {
      console.log(error)
   }

   res.json({bodyMassIndex});
};