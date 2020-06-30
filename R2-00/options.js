// options.js
// Revision 1.00
// Copyright 2020 MaX Saxe Design
// All rights reserved
// Author: MaX Falstein

// options.js to create main in body (id=body)
// main (id=main) to have header, article1 and article2
// header (id=header) to have h2 (id=headerh2)
// article1 (id=article1) to have information (id=info1,2,3)
// article2 (id=article2) to have text-input (id=textinput)

body = document.getElementById("body");
main = document.createElement("main");
header = document.createElement("header");
headerh2 = document.createElement("h2");
headerh2.id = "headerh2";
headerh2.innerText = "Find Starlink Options";
article0 = document.createElement("article");
article0.id = "article0";
a0p0 = document.createElement("This options page give you the ability to save the region you are from");
a0p1 = document.createElement("");
a0p2 = document.createElement("");
a0p3 = document.createElement("");
article1 = document.createElement("article");
article1.id = "article1";
body.appendChild(main)


function createForm() {
  chrome.storage.sync.get(['removedContextMenu'], function(list) {
    let removed = list.removedContextMenu || [];
    let form = document.getElementById('form');
    for (let key of Object.keys(kLocales)) {
      let div = document.createElement('div');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = true;
      if (removed.includes(key)) {
        checkbox.checked = false;
      }
      checkbox.name = key;
      checkbox.value = kLocales[key];
      let span = document.createElement('span');
      span.textContent = kLocales[key];
      div.appendChild(checkbox);
      div.appendChild(span);
      form.appendChild(div);
    }
  });
}

createForm();

document.getElementById('optionsSubmit').onclick = function() {
  let checkboxes = document.getElementsByTagName('input');
  let removed = [];
  for (i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked == false) {
      removed.push(checkboxes[i].name);
    }
  }
  chrome.storage.sync.set({removedContextMenu: removed});
  window.close();
}
