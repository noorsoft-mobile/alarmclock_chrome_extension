import SettingsControl from './settingsControl.js'

const FunctionSettings = {
  fileName: SettingsControl.setFilename,
  repeat: SettingsControl.setRepeat,
  snooze: SettingsControl.setSnooze,
}

const onChange = name => {
  const func = FunctionSettings[name]
  return event => {
    return func(event.target.value)
  }
}

const repeatStorage = (name, node, value) => {
  const func = FunctionSettings[name]
  func(value)
  const event = new Event('change')
  node.value = value
  return node.dispatchEvent(event)
}

const onClickSave = () => SettingsControl.onSave()

document.addEventListener(
  'DOMContentLoaded',
  function() {
    const changeFileName = document.getElementById('fileName')
    const changeSnooze = document.getElementById('snooze')
    const changeRepeat = document.getElementById('repeat')

    chrome.storage.sync.get(
      ['fileName', 'repeat', 'snooze'],
      ({ fileName, repeat, snooze }) => {
        changeFileName?.addEventListener('change', onChange('fileName'))
        changeSnooze?.addEventListener('change', onChange('snooze'))
        changeRepeat?.addEventListener('change', onChange('repeat'))
        if (fileName) {
          repeatStorage('fileName', changeFileName, fileName)
        }

        if (repeat) {
          repeatStorage('repeat', changeRepeat, repeat)
        }
        if (snooze) {
          repeatStorage('snooze', changeSnooze, snooze)
        }
      },
    )

    const saveButton = document.getElementById('save')

    if (saveButton) {
      saveButton.addEventListener('click', onClickSave)
    }
  },
  false,
)
