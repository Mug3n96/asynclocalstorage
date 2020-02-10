const asyncLocalStorage = {
  async getItem(key) {
    const item = localStorage.getItem(key);
    if (item) 
      return JSON.parse(item);
    throw new Error('ITEM_NOT_FOUND');
  },
  async setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  },
  async clear() {
    localStorage.clear();
    return 'CLEARED';
  },
  async removeItem(key) {
    try {
      const value = await this.getItem(key);
      localStorage.removeItem(key);
      return {key, value}; 
    } catch (e) {
      throw e;
    }
  }
}

export default asyncLocalStorage;