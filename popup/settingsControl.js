class SettingsControl {
  constructor() {
    this.fileName
    this.snooze
    this.repeat
  }

  setFilename = fileName => {
    this.fileName = fileName
  }

  setSnooze = snooze => {
    this.snooze = snooze
  }

  setRepeat = repeat => {
    this.repeat = repeat
  }

  onSave = () => {
    return Object.keys({
      fileName: this.fileName,
      snooze: this.snooze,
      repeat: this.repeat,
    }).map(key => {
      if (this[key]) {
        chrome.storage.sync.set({ [key]: this[key] })
      }
    })
  }
}

export default new SettingsControl()
