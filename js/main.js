var jobsApplied = JSON.parse(localStorage.getItem('jobsApplied')) || [];
function applyJob(id)
{
	var x = JSON.parse(localStorage.getItem('jobsApplied'));
	console.log('applyJobs called');
	x.push(id);
	x = x.filter((item,
        index) => x.indexOf(item) === index)
	localStorage.setItem('jobsApplied', JSON.stringify(x));
	document.getElementById(id).innerHTML = 'Applied&nbsp;&nbsp;<i class="fa fa-check"></i>';
	console.log(JSON.parse(localStorage.getItem('jobsApplied')));
}
 
function delJob(id)
{
	console.log("deleted called");
	var x = JSON.parse(localStorage.getItem('jobsApplied'));
	var index = x.indexOf(id);
	x.splice(index, 1);
	localStorage.setItem('jobsApplied', JSON.stringify(x));
	document.getElementById(id).innerHTML = 'Deleted&nbsp;&nbsp;<i class="fa fa-check"></i>';
	console.log(JSON.parse(localStorage.getItem('jobsApplied')));
}

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
		jobID: 0,
	  imageSrc: "img/google.jpg",
	  category: "Google",
	  position: "SDE 1",
	  location: "Palo Alto, CA",
	  time: "2 days ago",
	  payRange: "$120k-$150k"
	},
	{
		jobID: 1,
	  imageSrc: "img/amazon.png",
	  category: "Amazon",
	  position: "Software Engineer 2",
	  location: "Seattle, WA",
	  time: "5+ days ago",
	  payRange: "$190k-$220k"
	},
	{
		jobID: 2,
	  imageSrc: "img/sf.png",
	  category: "Salesforce",
	  position: "Software API Developer",
	  location: "Boston, MA",
	  time: "1 week ago",
	  payRange: "$140k-$160k"
	},
	{
		jobID: 3,
	  imageSrc: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
	  category: "Netflix",
	  position: "Data Scientist",
	  location: "San Francisco, CA",
	  time: "10+ days ago",
	  payRange: "$120k-$150k"
	},
	{
		jobID: 4,
		imageSrc: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
		category: "Microsoft",
		position: "SDE 3",
		location: "Vermont, CA",
		time: "10+ days ago",
		payRange: "$220k-$250k"
	  },
	  {
		jobID: 5,
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
function populateJobs() {
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
				  <button onclick= "applyJob(${job.jobID})" id="${job.jobID}" style="  border: none;
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

  

  function viewCharts() {
	//for charts - bar graph in dashboard.html
	new Chart(document.getElementById("bar-chart"), {
		type: 'bar',
		data: {
			labels: ["Jan 2024", "Feb 2024", "March 2024", "April 2024", "May 2024"],
			datasets: [
				{
					label: "Views",
					backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
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
			labels: ["Applied", "Viewed", "Converted"],
			datasets: [
				{
					label: "#",
					backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
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

	new Chart(document.getElementById("radar-chart"), {
		type: 'radar',
		data: {
		  labels: ["SDE", "Data Analyst", "Data Scientist", "Web Developer", "Business Analyst"],
		  datasets: [
			{
				label: "Feb 2024",
				fill: true,
				backgroundColor: "rgba(179,181,197,0.2)",
				borderColor: "rgba(179,181,198,1)",
				pointBorderColor: "#fff",
				pointBackgroundColor: "rgba(179,181,198,1)",
				data: [50, 10,20,0,39]
			  },
			  {
				label: "Mar 2024",
				fill: true,
				backgroundColor: "rgba(75, 192, 192, 0.2)", // Green
				borderColor: "rgba(75, 192, 192, 1)", // Green
				pointBorderColor: "#fff", // White
				pointBackgroundColor: "rgba(75, 192, 192, 1)", // Green
				data: [60, 13, 50	, 7, 14]
			}
			, {
			  label: "Apr 2024",
			  fill: true,
			  backgroundColor: "rgba(255,99,132,0.2)",
			  borderColor: "rgba(255,99,132,1)",
			  pointBorderColor: "#fff",
			  pointBackgroundColor: "rgba(255,99,132,1)",
			  pointBorderColor: "#fff",
			  data: [40, 40,30,10,10]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Distribution in % of Jobs Applied'
		  }
		}
	});

	new Chart(document.getElementById("bubble-chart"), {
		type: 'bubble',
		data: {
		  labels: "Africa",
		  datasets: [
			{
			  label: ["San Francisco"],
			  backgroundColor: "rgba(255,221,50,0.2)",
			  borderColor: "rgba(255,221,50,1)",
			  data: [{
				x: 150000,
				y: 200000,
				r:40
			  }]
			}, {
			  label: ["Atlanta"],
			  backgroundColor: "rgba(60,186,159,0.2)",
			  borderColor: "rgba(60,186,159,1)",
			  data: [{
				x: 110000,
				y: 100000,
				r: 20
			  }]
			}, {
			  label: ["New york"],
			  backgroundColor: "rgba(0,0,0,0.2)",
			  borderColor: "#000",
			  data: [{
				x: 160000,
				y: 260000,
				r: 10
			  }]
			}, {
			  label: ["Dallas"],
			  backgroundColor: "rgba(193,46,12,0.2)",
			  borderColor: "rgba(193,46,12,1)",
			  data: [{
				x: 120000,
				y: 200000,
				r: 25
			  }]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Job Availability across Locations'
		  }, scales: {
			yAxes: [{ 
			  scaleLabel: {
				display: true,
				labelString: "Jobs"
			  }
			}],
			xAxes: [{ 
			  scaleLabel: {
				display: true,
				labelString: "salary"
			  }
			}]
		  }
		}
	});
}

function showLoader()
{
  document.getElementById('loadgif').style.display = 'inline';
}

function showLoader1()
{
  document.getElementById('loadgif1').style.display = 'inline';
}

function jobsAppliedPopulate()
{
	//document.getElementById('parent1').innerHTML = '';
	const container = document.getElementById('parent1');
	container.innerHTML = '';
	var x = JSON.parse(localStorage.getItem('jobsApplied'));
	for (let i = 0; i < x.length; i++) {
	  const jobElement = `
		<div class="col-lg-12 col-md-6">
		<div class="item" style="margin: 20px;padding:20px">
		<div class="row">
		  <div class="col-lg-3">
		  <div class="image">
			<img src="${jobs[x[i]].imageSrc}" alt="" style="width:40%;position: static;transform: translateX(0px);border:#6c51a5 solid 2px" class="imgt">
		  </div>
		  </div>
		  <div class="col-lg-9">
		  <ul>
			<li>
			<span class="category">${jobs[x[i]].category}</span>
			<h4 class="pos">${jobs[x[i]].position}</h4>
			</li>
			<li>
			<span>Location:</span>
			<h6 class="loc">${jobs[x[i]].location}</h6>
			</li>
			<li>
			<span>Applied on</span>
			<h6 class="day">12 April</h6>
			</li>
			<li>
			

			<buton onclick= 'delJob(${jobs[x[i]].jobID})' id="${jobs[x[i]].jobID}" style="background-color:rgba(255, 0, 0, 0.772);color: white;height: 50px;font-size: 14px;padding: 15px 25px;border-radius: 25px;border:none; font-size: 14px; font-weight: 600;">Delete&nbsp;&nbsp;<i class="fa fa-trash-o"></i></button>
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
	}

}
function logout()
{
	console.log("logout");
	localStorage.setItem('jobsApplied', JSON.stringify([]));
}