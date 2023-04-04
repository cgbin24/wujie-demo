/*
* 端口注释
* 主应用         7700
* react子应用    7710
* vue子应用      7720
*/

const map = {
  "//localhost:7710/": "/childApps/react-demo/",
  "//localhost:7720/": "/childApps/vue-demo/",
};

export default function hostMap(host) {
  if (process.env.NODE_ENV === "production") return map[host]
  return host
}
