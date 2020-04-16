/** @format */

export default {
  user: state => {
    const res = { ...state.user }
    if (!Object.keys(res).length) return res
    const genderMap = { 1: '男', 2: '女' }
    const idTypeMap = ['身份证', '军官证', '护照', '台胞证', '回乡证']
    res.genderName = genderMap[res.gender]
    res.idName = idTypeMap[res.card_type] + '：' + res.card_id
    res.fullAddress = res.provinces_name + res.city_name + res.area_name + res.address
    res.cascaderValue = [
      res.provinces_id.toString().slice(0, 2),
      res.city_id.toString().slice(0, 4),
      res.area_id.toString()
    ]
    return res
  },
  sosUser: state => {
    const res = { ...state.sosUser }
    if (!Object.keys(res).length) return res
    res.cascaderValue = [
      res.provinces_id.toString().slice(0, 2),
      res.city_id.toString().slice(0, 4),
      res.area_id.toString()
    ]
    res.fullAddress = res.provinces_name + res.city_name + res.area_name + res.address
    return res
  }
}
