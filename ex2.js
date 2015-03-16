
var returnSum = 0;
for (var i = 2; i < process.argv.length; i++) {
  returnSum += Number(process.argv[i]);
}
console.log(returnSum);