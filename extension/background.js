chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({
    audible: true
  }, function(tabs) {
    getState(function (state) {
      tabs.forEach(function(tab) {
        updateTab(tab, !state.muted);
      });
    });
  })
})

function saveState(state) {
  chrome.storage.sync.set({
    muted: state
  });
}

function getState(callback) {
  chrome.storage.sync.get({
    muted: false
  }, callback);
}

function updateTab(tab, mute) {
  chrome.tabs.update(tab.id, {
    muted: mute
  }, function(tab) {
    saveState(mute);
  })
}
