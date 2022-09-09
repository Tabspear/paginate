// Try to fetch the data
let pageSize = 9;
const api_url = "data.js";

fetch(api_url)
  .then((res) => {
    res = Array.from(data_persons);
    return res;
  })
  .then((data) => {
    function showPage(list, pageNo) {
      start = pageSize * pageNo - pageSize;
      end = pageSize * pageNo;
      //  let removal = list.slice(start, end);
      
      const student_list = document.querySelector(".student-list");
      student_list.innerHTML = "";
      for (let element = 0; element < list.length; element++) {
        if (element >= start && element < end) {
          student_list.innerHTML += `
          <li class="student-item cf">
            <div class="student-details">
          <img class="avatar" src="${list[element].picture["thumbnail"]}" alt="Profile Picture">
              <h3>${list[element].name["first"]} ${list[element].name["last"]}</h3>
              <span class="email">${list[element].email}</span>
            </div>
            <div class="joined-details">
              <span class="date">Joined  ${list[element].registered["date"]}</span>
            </div>
          </li>
          `;
        }
      }
    }

    // function addPagination() {
    //   let btn1 = document.createElement("button");
    //   btn1.className = "active";
    //   btn1.innerHTML = 1;
    //   link_list.appendChild(btn1);

    //   btn1.addEventListener("click", () => {
    //     showPage(data, 0, 9);
    //   });

    //   let btn2 = document.createElement("button");
    //   btn2.className = "active1";
    //   btn2.innerHTML = 2;
    //   link_list.appendChild(btn2);

    //   btn2.addEventListener("click", () => {
    //     showPage(data, 9, 18);
    //   });

    //   let btn3 = document.createElement("button");
    //   btn3.className = "active2";
    //   btn3.innerHTML = 3;
    //   link_list.appendChild(btn3);

    //   btn3.addEventListener("click", () => showPage(data, 18, 27));

    //   let btn4 = document.createElement("button");
    //   btn4.className = "active3";
    //   btn4.innerHTML = 4;
    //   link_list.appendChild(btn4);

    //   btn4.addEventListener("click", () => showPage(data, 27, 36));

    //   let btn5 = document.createElement("button");
    //   btn5.className = "active3";
    //   btn5.innerHTML = 5;
    //   link_list.appendChild(btn5);
    //   btn5.addEventListener("click", () => showPage(data, 36));
    // }

    function pageBtns(list) {
      let pagebtns = Math.ceil(list.length / pageSize);
      const link_list = document.querySelector("ul.link-list");
      link_list.innerHTML = "";
      for (let i = 0; i < pagebtns; i++) {
        link_list.innerHTML += `
        <li>
        <button type="button" class="active">${i + 1}</button>
      </li>
        `;
      }

      let firstChild = document.querySelector(
        "ul.link-list li:first-child button"
      );
      firstChild.className = "active";
      link_list.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "button") {
          let allButtons = document.querySelectorAll("ul.link-list li button");
          Array.from(allButtons).forEach((button) => {
            button.classList.remove("active");
          });

          e.target.classList.add("active");
          let index = parseInt(e.target.innerHTML);
          showPage(data, index);
        }
      });
    }

    pageBtns(data);
    showPage(data, 1);

    // addPagination();
  });

// function page(start, end, pageNo, pageSize) {
//   start = pageSize * (pageNo - 1);
//   end = pageSize * pageNo;
//   return `${start} ${end}`;
// }
