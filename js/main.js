// Slider for Navigation Bar
(function ($) {
	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}
})(window.jQuery);

//for charts - bar graph in dashboard.html
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Jan 2024", "Feb 2024", "March 2024", "April 2024", "May 2024"],
      datasets: [
        {
          label: "Views",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [49, 55, 100, 150, 189]
        }, {
          label: "Views",
          type: "line",
          borderColor: "rgba(255,221,50,1)",
          data: [49, 55, 100, 150, 189],
          fill: true
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Profile Views by Recruiters'
      }
    }
});

//for charts - doughnut chart in dashboard.html
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Applied", "Viewed" , "Converted"],
      datasets: [
        {
          label: "#",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
          data: [1000, 350, 50]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Application Trend'
      }
    }
});