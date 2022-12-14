// 將函式轉為es2016類別;
class Getname {
  constructor(params) {
    let loc = params.indexOf(":", 6);
    this.domainName = params.slice(0, loc) + ":8080/reirasys_api";
  }
}
const Singleton = new Getname(window.location.href);
export default Singleton;


export function Recursive(id) {
  const depts = [
    { id: "000001", name: "John", up_dep: "no" },
    { id: "000101", name: "Romy", up_dep: "000001" },
    { id: "000201", name: "Celia", up_dep: "000101" },
    { id: "000301", name: "Mary", up_dep: "000101" },
    { id: "001101", name: "John", up_dep: "000301" },
    { id: "001101", name: "Akane", up_dep: "001101" },
    { id: "221004", name: "Reira", up_dep: "000201" },
  ];
  function topParent(id) {
    let path,item = { id: id, name: "" };
    let obj = depts.find((v) => {
      item.name = v.name;
      return v.id == id;
    });
    // console.log(obj);
    if (obj.up_dep == "no") {
      return [item];
    } else {
      path = topParent(obj.up_dep);
    }
    // console.log([item, ...path]);
    return path && [item, ...path];
  }
  // let s = topParent("TP003");

  return topParent(id);
}
 