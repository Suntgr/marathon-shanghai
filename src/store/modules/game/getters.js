/** @format */

export default {
  gameList: state => {
    if (!state.applyList) return []
    return state.applyList.list.map(el => ({
      id: el.sign_id,
      event: el.name,
      project: el.entry_name,
      results: el.status_name,
      status: el.status_name,
      number: el.entry_number
    }))
  },
  photoPart: state => {
    return state.photo.map(el => {
      if (el.images.length > 5) {
        el.part = el.images.slice(0, 5)
        el.more = true
      } else {
        el.part = el.images
        el.more = false
      }
      return el
    })
  },
  activedPhoto: state => state.activedPhoto
}
