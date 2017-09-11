chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({
    audible: true
  }, function(tabs) {
    tabs.forEach(function(tab) {
      if (tab.audible && !tab.mutedInfo.muted) {
        chrome.tabs.update(tab.id, {
          muted: true
        }, function(tab) {
          console.log('muted ' , tab)
        })
      } else {
        chrome.tabs.update(tab.id, {
          muted: false
        }, function(tab) {
          console.log('unmuted ' , tab)
        })
      }
    })
  })
})
