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

//Variable for job postings array
const jobs = [
	{
	  imageSrc: "img/google.jpg",
	  category: "Google",
	  position: "SDE 1",
	  location: "Palo Alto, CA",
	  time: "2 days ago",
	  payRange: "$120k-$150k"
	},
	{
	  imageSrc: "img/amazon.png",
	  category: "Amazon",
	  position: "Software Engineer 2",
	  location: "Seattle, WA",
	  time: "5+ days ago",
	  payRange: "$190k-$220k"
	},
	{
	  imageSrc: "img/sf.png",
	  category: "Salesforce",
	  position: "Software API Developer",
	  location: "Boston, MA",
	  time: "1 week ago",
	  payRange: "$140k-$160k"
	},
	{
	  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
	  category: "Netflix",
	  position: "Data Scientist",
	  location: "San Francisco, CA",
	  time: "10+ days ago",
	  payRange: "$120k-$150k"
	},
	{
		imageSrc: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
		category: "Microsoft",
		position: "SDE 3",
		location: "Vermont, CA",
		time: "10+ days ago",
		payRange: "$220k-$250k"
	  },
	  {
		imageSrc: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/dvcq6aphn9unb1ypolhz",
		category: "Atlassian",
		position: "Staff Engineer",
		location: "Seattle, WA",
		time: "5+ days ago",
		payRange: "$190k-$220k"
	  },
	// Add more job objects here
  ];

//function to populate all josb postings inside div tag
function populateJobs(jobs) {
	const container = document.getElementById('parent');
	jobs.forEach(job => {
	  const jobElement = `
		<div class="col-lg-12 col-md-6">
		  <div class="item" style="margin: 20px;padding:20px">
			<div class="row">
			  <div class="col-lg-3">
				<div class="image">
				  <img src="${job.imageSrc}" alt="" style="width:30%;position: static;transform: translateX(0px);border:#6c51a5 solid 2px" class="imgt">
				</div>
			  </div>
			  <div class="col-lg-9">
				<ul>
				  <li>
					<span class="category">${job.category}</span>
					<h4 class="pos">${job.position}</h4>
				  </li>
				  <li>
					<span>Location:</span>
					<h6 class="loc">${job.location}</h6>
				  </li>
				  <li>
				  <span>Base Pay:</span>
				  <h6 class="pay">${job.payRange}</h6>
				</li>
				  <li>
				  <button href="" style="  border: none;
				  height: 50px;
				  font-size: 14px;
				  font-weight: 600;
				  background-color: #50C878;
				  padding: 0px 25px;
				  border-radius: 25px;
				  color: #fff;">Apply&nbsp;&nbsp;<i class="fa fa-plus-square"></i></button>	
				  </li>
				</ul>
				
			  </div>
			</div>
		  </div>
		</div>
	  `;
	  const range = document.createRange();
	  const documentFragment = range.createContextualFragment(jobElement);
	  container.appendChild(documentFragment);
	});
  }

  

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

function showLoader()
{
  document.getElementById('loadgif').style.display = 'inline';
}

function showLoader1()
{
  document.getElementById('loadgif1').style.display = 'inline';
}