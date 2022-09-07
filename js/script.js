// Try to fetch the data
const api_url = "data.js";

fetch(api_url)
  .then((res) => {
    res = Array.from(data_persons);
    return res;
  })
  .then((data) => {
    function showPage(list, start, end) {
      let removal = list.slice(start, end);

      const student_list = document.querySelector(".student-list");

      let modList = removal.map(
        (element) => `
        <li class="student-item cf">
          <div class="student-details">
        <img class="avatar" src="${element.picture["thumbnail"]}" alt="Profile Picture">
            <h3>${element.name["first"]} ${element.name["last"]}</h3>
            <span class="email">${element.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined  ${element.registered["date"]}</span>
          </div>
        </li>
        `
      );

      return (student_list.innerHTML = modList);
    }

    function addPagination() {
      const link_list = document.querySelector(".link-list");
      let btn1 = document.createElement("button");
      btn1.className = "active";
      btn1.innerHTML = 1;
      link_list.appendChild(btn1);

      btn1.addEventListener("click", () => {
        showPage(data, 0, 9);
      });

      let btn2 = document.createElement("button");
      btn2.className = "active1";
      btn2.innerHTML = 2;
      link_list.appendChild(btn2);

      btn2.addEventListener("click", () => {
        showPage(data, 9, 18);
      });

      let btn3 = document.createElement("button");
      btn3.className = "active2";
      btn3.innerHTML = 3;
      link_list.appendChild(btn3);

      btn3.addEventListener("click", () => showPage(data, 18, 27));

      let btn4 = document.createElement("button");
      btn4.className = "active3";
      btn4.innerHTML = 4;
      link_list.appendChild(btn4);

      btn4.addEventListener("click", () => showPage(data, 27, 36));
    }

    addPagination();
  });


// function page(start, end, pageNo, pageSize) {
//   start = pageSize * (pageNo - 1);
//   end = pageSize * pageNo;
//   return `${start} ${end}`;
// }
