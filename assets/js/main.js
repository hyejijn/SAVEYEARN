$(function(){
     //counter

      $(document).ready(function () {
        $('.counter').counterUp({
            time: 500
        });
        });


    //Swiper
        var swiper = new Swiper(".mySwiper", {
             slidesPerView: 1,
             slidesPerView:2,
             spaceBetween: 30, 
             speed:2500,
             autoplay:{
                delay:0
             },
             loop:true,
             loopAdditionalSlides : 1,
             freeMode: true,  
        });


    // chart
    const data = {
    labels: ['동물 치료비', '사료 및 용품', '임시보호 지원', '운영비', '기타'],
    datasets: [{
        label: '2024 재정 사용 비율',
        data: [40, 25, 15, 10, 10],
        backgroundColor: [
        '#FF8A80', '#FFD180', '#A5D6A7', '#90CAF9', '#CE93D8'
        ],
        hoverOffset: 30
    }]
    };

    const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: 'bottom',
        labels: {
            font: { size: 10, family: 'IBM Plex Sans KR' }
        }
        },
        title: {
        display: true,
        text: '2024년 후원금 사용 내역',
        font: { size: 18, family: 'IBM Plex Sans KR' },
        padding: { top: 10, bottom: 20 }
        },
        tooltip: {
        callbacks: {
            label: ctx => `${ctx.label}: ${ctx.parsed}%`
        }
        }
    }
    };

    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
    });

})