class TabsController {
  constructor() {
    this.id
  }
  
  closeTab = id => {
    if (id === this.id) {
      return this.id = undefined
    }
    return
  }

  openTab = async () => {
    if (!this.id) {
      const id = await new Promise(res => chrome.windows.create({ url: "clock/clock.html", width: 650, height: 350, type: 'popup', left: 50, top: 50 }, function(tab) {
        res(tab.id)
      }))
      this.id = id
    }
    return chrome.windows.update(this.id, { focused: true })
  }
}

export default new TabsController()