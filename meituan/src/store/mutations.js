export default {
  changeCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
      console.log(1)
    }
  },
  getShop(state, shop) {
    state.shop = shop
    try {
      localStorage.shop = shop
    } catch (e) {
      console.log(1)
    }
  },
  getMenu(state, menu) {
    state.menu = menu
    try {
      localStorage.menu = menu
    } catch (e) {
      console.log("menu")
    }
  },
  getFee(state, fee) {
    state.fee = fee
  }
}