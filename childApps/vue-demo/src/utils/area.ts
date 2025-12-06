import { areaList } from '@vant/area-data'

const regionData: any = []

function areaFormat() {
  // let _this = this,
  //   cityNum = '',
  //   countyNum = ''

  for (const p in areaList.province_list) {
    const province_option = {
      value: p,

      label: areaList.province_list[p],

      children: [],
    }

    regionData.push(province_option)
  }

  for (const c in areaList.city_list) {
    const city_option = {
      value: c,

      label: areaList.city_list[c],

      children: [],
    }

    //城市与省会的索引差介于100到10000

    regionData.map((item: { value: string }, index: number) => {
      const diff = c - parseInt(item.value)

      if (diff < 10000 && diff > 99 && index < 34) {
        regionData[index].children.push(city_option)
      }

      //这里是外国数据

      if (index > 33 && c > 900000) {
        regionData[index].children.push({
          value: c,

          label: areaList.city_list[c],
        })
      }
    })
  }

  //城市与城区的索引差小于100

  for (const t in areaList.county_list) {
    let county_option = {
      value: t,

      label: areaList.county_list[t],
    }

    regionData.map((item: { children: any[] }, index: string | number) => {
      item.children.map((itemChild, indexChild) => {
        const diff = t - parseInt(itemChild.value)

        if (diff > 0 && diff < 100) {
          regionData[index].children[indexChild].children.push(county_option)
        }
      })
    })
  }
}

areaFormat()

function textToCode(arr: string | any[], regionData: any) {
  let areaCode = ''
  for (const item of regionData) {
    if (item.label == arr[0]) {
      for (const item2 of item.children) {
        if (item2.label == arr[1]) {
          //省市区
          if (arr.length == 3) {
            for (const item3 of item2.children) {
              if (item3.label == arr[2]) {
                areaCode = item3.value
              }
            }
          } else {
            //只有省市
            areaCode = item2.value
          }
        }
      }
    }
  }
  return areaCode
}

// console.log(regionData)

export { regionData, textToCode }
