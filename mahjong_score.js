let str = "123456p234s33344z"
let regex = /(\d+)([mspz])/g;
let result = regex.exec(str);
console.log(result.groups);
function run() {
    return 0;
}