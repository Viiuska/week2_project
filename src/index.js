//help:https://www.youtube.com/watch?v=WBCpJmzrDmM
if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  const addTableButton = document.getElementById("submit-data");

  addTableButton.addEventListener("click", function () {
    let table = document
      .getElementById("myTable")
      .getElementsByTagName("tbody")[0];
    let usernameInput = document.getElementById("input-username").value;
    let emailInput = document.getElementById("input-email").value;
    let addressInput = document.getElementById("input-address").value;

    let adminInput = document.getElementById("input-admin").checked;

    if (adminInput === true) {
      adminInput = "X";
    } else {
      adminInput = "-";
    }

    const userImage = document.getElementById("input-image").files[0];
    let myImage;
    console.log(userImage);
    if (userImage !== undefined) {
      let src = URL.createObjectURL(userImage);
      console.log(src);
      myImage = document.createElement("img");
      myImage.setAttribute("src", src);
      myImage.setAttribute("height", "64px");
      myImage.setAttribute("widht", "64px");
    } else {
      myImage = "No image";
    }

 

    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    let checkUpdate;
    //help: https://www.w3schools.com/jsref/coll_table_cells.asp
    //help:https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create
    //help:https://www.w3schools.com/jsref/coll_table_rows.asp
    for (var i = 0; i < table.rows.length; i++) {
      if (table.rows[i].cells[0].innerHTML === usernameInput) {
        table.rows[i].cells[1].innerHTML = emailInput;
        table.rows[i].cells[2].innerHTML = addressInput;
        table.rows[i].cells[3].innerHTML = adminInput;
        if (userImage !== undefined) {
          table.rows[i].cells[4].appendChild(myImage);
        } else {
          table.rows[i].cells[4].innerHTML = myImage;
        }

        checkUpdate = true;
      }
    }

    if (checkUpdate !== true) {
      cell1.innerHTML = usernameInput;
      cell2.innerHTML = emailInput;
      cell3.innerHTML = addressInput;
      cell4.innerHTML = adminInput;
      if (userImage !== undefined) {
        cell5.appendChild(myImage);
      } else {
        cell5.innerHTML = myImage;
      }
    }
  });

  const deleteTableButton = document.getElementById("empty-table");

  deleteTableButton.addEventListener("click", function () {
    let table = document
      .getElementById("myTable")
      .getElementsByTagName("tbody")[0];

    table.innerHTML = "";
  });
}
