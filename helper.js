const sizes = ["none",
  "xxs",
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl"];

const hint = [
  {
    name: "padding",
    out: ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]
  },
  {
    name: "paddingX",
    out: ["paddingLeft", "paddingRight"]
  },
  {
    name: "paddingY",
    out: ["paddingTop", "paddingBottom"]
  },
  {
    name: "paddingLeft",
    out: ["paddingLeft"]
  },
  {
    name: "paddingRight",
    out: ["paddingRight"]
  },
  {
    name: "paddingTop",
    out: ["paddingTop"]
  },
  {
    name: "paddingBottom",
    out: ["paddingBottom"]
  },
  {
    name: "margin",
    out: ["marginLeft", "marginRight", "marginTop", "marginBottom"]
  },
  {
    name: "marginX",
    out: ["marginLeft", "marginRight"]
  },
  {
    name: "marginY",
    out: ["marginTop", "marginBottom"]
  },
  {
    name: "marginLeft",
    out: ["marginLeft"]
  },
  {
    name: "marginRight",
    out: ["marginRight"]
  },
  {
    name: "marginTop",
    out: ["marginTop"]
  },
  {
    name: "marginBottom",
    out: ["marginBottom"]
  }
];


for (let v of hint) {
  let str = "";
  str += `${v.name}: {`;
  for (let vv of sizes) {
    str += `${vv}: {`;
    for (let h of v.out) {
      str += `${h}: '$${vv}',`;
    }
    str += `},`;
  }
  str += `},`;

  console.log(str);
}
