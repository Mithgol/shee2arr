module.exports = function(sheet){
   var result = [];
   var row;
   var rowNum;
   var colNum;
   for(rowNum = sheet['!range'].s.r; rowNum <= sheet['!range'].e.r; rowNum++){
      row = [];
      for(colNum=sheet['!range'].s.c; colNum<=sheet['!range'].e.c; colNum++){
         var nextCell = sheet[
            xlsx.utils.encode_cell({r: rowNum, c: colNum})
         ];
         if( typeof nextCell === 'undefined' ){
            row.push(void 0);
         } else row.push(nextCell.w);
      }
      result.push(row);
   }
   return result;
};