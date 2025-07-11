$(function () {
  //counter

  $(document).ready(function () {
    $(".counter").counterUp({
      time: 500,
    });
  });

  //Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 3500,
    autoplay: {
      delay: 0,
    },
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: true,
    breakpoint: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // chart
  const data = {
    labels: ["동물 치료비", "사료 및 용품", "임시보호 지원", "운영비", "기타"],
    datasets: [
      {
        label: "2024 재정 사용 비율",
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
          "#FF8A80",
          "#FFD180",
          "#A5D6A7",
          "#90CAF9",
          "#CE93D8",
        ],
        hoverOffset: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: { size: 10, family: "IBM Plex Sans KR" },
        },
      },
      title: {
        display: true,
        text: "2024년 후원금 사용 내역",
        font: { size: 18, family: "IBM Plex Sans KR" },
        padding: { top: 10, bottom: 20 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "pie",
    data: data,
    options: options,
  });
});

//수입차트
var optionsRevenues = {
  series: [35, 26, 18, 9, 6, 4, 2],
  chart: {
    type: "donut",
    width: "100%",
    redrawOnWindowResize: true,
  },
  labels: [
    "개인후원(정기/일시후원)",
    "현물 기부 및 물품 후원",
    "정부 및 지자체 보조금",
    "기업 파트너십 및 협찬",
    "펀딩 캠페인",
    "오프라인이벤트 및 플리마켓 수익",
    "기타 기부 및 잡수입",
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    fontSize: "13px",
    itemMargin: {
      vertical: 5,
    },
  },

  responsive: [
    {
      breakpoint: 340,
      options: {
        chart: {
          width: 50,
        },
        legend: {
          position: "bottom",
          fontSize: "5px",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#revenues"),
  optionsRevenues
);
chart.render();

var optionsExpenses = {
  series: [72, 12, 7, 5, 4],
  chart: {
    type: "donut",
    width: "100%",
  },
  labels: [
    "보호 프로그램 운영비",
    "입양 연계 활동 및 사후 관리 지원",
    "자원봉사 교육·운영비",
    "모금 및 캠페인 운영비",
    "관리 및 운영 행정비",
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    fontSize: "13px",
    itemMargin: {
      vertical: 5,
    },
  },

  responsive: [
    {
      breakpoint: 340,
      options: {
        chart: {
          width: 50,
        },
        legend: {
          position: "bottom",
          fontSize: "5px",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#expenses"),
  optionsExpenses
);
chart.render();

$(function () {
  var swiper = new Swiper(".swiper-container01", {
    spaceBetween: 1,
    freeMode: false,
    enteredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    loopedSlides: 1,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
  });
});
$(function () {
  var swiper = new Swiper(".swiper-container02", {
    spaceBetween: 1,
    freeMode: false,
    enteredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
      reverseDirection: true,
    },
    loop: true,
    loopedSlides: 1,
    slidesPerView: 2,
    allowTouchMove: false,
    disableOnInteraction: true,
  });
});
