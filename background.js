chrome.contextMenus.create({
   title: "Copy text as JIRA Markdown",
   contexts:["selection"],
   onclick: function(info ,tab) {
     saveToClipboard(makeSelectionInfoWithJiraMarkdown(tab.title, tab.url, info.selectionText));
   }
});
chrome.contextMenus.create({
   title: "Copy tab info as JIRA Markdown",
   contexts:["page"],
   onclick: function(info ,tab) {
     saveToClipboard(makeTabInfoWithJiraMarkdown(tab.title, tab.url));
   }
});
function makeSelectionInfoWithJiraMarkdown(title, url, text) {
   return '* [' + title + '|' + url + ']\n** ' + text;
}
function makeTabInfoWithJiraMarkdown(title, url) {
   return '[' + title + '|' + url + ']';
}
function saveToClipboard(text) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('Copy');
  input.remove();
}
