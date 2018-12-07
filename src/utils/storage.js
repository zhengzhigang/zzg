const prefix = '__zzghahahaha__'

export default {
  _getStore(type) {
    return type !== 'session' ? window.localStorage : window.sessionStorage
  },

  /**
   * get
   *
   * @param {string} key
   * @return {any}
   */
  get(key, type) {
    let store = this._getStore(type)
    let ret = store.getItem(prefix + key)
    if (ret) {
      return JSON.parse(ret)
    }
    return null
  },

  /**
   * set
   *
   * @param {string} key
   * @param {any} value
   * @return {boolean}
   */
  set(key, value, type) {
    let store = this._getStore(type)
    store.setItem(prefix + key, JSON.stringify(value))
    return true
  },

  /**
   * remove
   *
   * @param {string} key
   * @return {boolean}
   */
  remove(key, type) {
    let store = this._getStore(type)
    store.removeItem(prefix + key)
    return true
  }
}
