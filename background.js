import TabsController from './tabsController.js'

chrome.runtime.onInstalled.addListener(function() {
  chrome.windows.onRemoved.addListener(TabsController.closeTab)
  chrome.contextMenus.create({
    title: 'Clock',
    contexts:['browser_action'],
    onclick: function() {
      TabsController.openTab()
    }
  });
})
