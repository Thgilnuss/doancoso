const button = document.querySelector('.dangky');
const button1 = document.querySelector('.thamgia');
const formPopup = document.querySelector('.form');
const closeButton = document.querySelector('#close-button');

function resetForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('hangmuc1').checked = false;
  document.getElementById('hangmuc2').checked = false;
}

button.addEventListener('click', function () {
  formPopup.style.display = 'block';
  resetForm();
});

closeButton.addEventListener('click', function () {
  formPopup.style.display = 'none';
  resetForm();
});

window.addEventListener('click', function (event) {
  if (event.target == formPopup) {
    formPopup.style.display = 'none';
    resetForm();
  }
});

button1.addEventListener('click', function () {
  formPopup.style.display = 'block';
  resetForm();
});

const hangmuc1 = document.getElementById('hangmuc1');
const hangmuc2 = document.getElementById('hangmuc2');

hangmuc1.addEventListener('change', function () {
  if (this.checked) {
    hangmuc2.checked = false;
  }
});

hangmuc2.addEventListener('change', function () {
  if (this.checked) {
    hangmuc1.checked = false;
  }
});


const expandBtns = document.querySelectorAll(".prize1 span, .prize2 span");
expandBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < expandBtns.length; i++) {
      if (index == i) {
        expandBtns[i].parentElement.classList.toggle("expand");
      }
      else {
        expandBtns[i].parentElement.classList.remove("expand");
      }
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  var pP = document.querySelector(".p-p");
  var p3 = document.querySelector(".prize3");
  var pPr1 = document.querySelector(".p-pr1");
  var pPr2 = document.querySelector(".p-pr2");
  var pPr3 = document.querySelector(".p-pr3");
  var pPr4 = document.querySelector(".p-pr4");
  var pPr5 = document.querySelector(".p-pr5");
  var pPr6 = document.querySelector(".p-pr6");
  var pPr7 = document.querySelector(".p-pr7");
  var currentCategory = "";

  function updateText(category) {
    var danhMucText = "";
    var contentText = "";

    if (category === "Hạng mục 1") {
      danhMucText = "Hạng mục 1";
      contentText = "Dành cho sinh viên năm nhất & năm hai";
    } else if (category === "Hạng mục 2") {
      danhMucText = "Hạng mục 2";
      contentText = "Dành cho sinh viên năm ba & năm tư";
    }

    pPr1.textContent = danhMucText;
    pPr2.textContent = contentText;
    pPr3.textContent = "Giải thưởng";
    pPr4.textContent = "01 Giải nhất: " + (category === "Hạng mục 1" ? "2,000,000" : "4,000,000") + " đồng và giấy khen.";
    pPr5.textContent = "01 Giải nhì: " + (category === "Hạng mục 1" ? "1,500,000" : "3,000,000") + " đồng và giấy khen.";
    pPr6.textContent = "01 Giải ba: " + (category === "Hạng mục 1" ? "1,000,000" : "2,000,000") + " đồng và giấy khen.";
    pPr7.textContent = "01 Giải Khuyến Khích: " + (category === "Hạng mục 1" ? "500,000" : "1,000,000") + " đồng và giấy khen.";
  }

  function handleClick(event) {
    if (event.target.classList.contains("sp1")) {
      if (currentCategory === "Hạng mục 1") {
        pP.style.display = "none";
        currentCategory = "";
      } else {
        updateText("Hạng mục 1");
        pP.style.display = "block";
        currentCategory = "Hạng mục 1";
      }
    } else if (event.target.classList.contains("sp2")) {
      if (currentCategory === "Hạng mục 2") {
        pP.style.display = "none";
        currentCategory = "";
      } else {
        updateText("Hạng mục 2");
        pP.style.display = "block";
        currentCategory = "Hạng mục 2";
      }
    }
  }

  var sp1 = document.querySelector(".sp1");
  sp1.addEventListener("click", handleClick);

  var sp2 = document.querySelector(".sp2");
  sp2.addEventListener("click", handleClick);
});

document.addEventListener("DOMContentLoaded", function() {
  var gioithieuBtn = document.querySelector(".gioithieu");
  var ruleBtn = document.querySelector(".rule");
  var giaithuongBtn = document.querySelector(".giaithuong");

  var reviewContainer = document.getElementById("review-container");
  var prizeContainer = document.getElementById("thele-container");
  var theleContainer = document.getElementById("prize-container");

  gioithieuBtn.addEventListener("click", function() {
    scrollToElement(reviewContainer);
  });

  ruleBtn.addEventListener("click", function() {
    scrollToElement(theleContainer);
  });

  giaithuongBtn.addEventListener("click", function() {
    scrollToElement(prizeContainer);
  });

  function scrollToElement(element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop
    });
  }
});