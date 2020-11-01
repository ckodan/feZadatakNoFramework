document.addEventListener("DOMContentLoaded", function () {
  tableFromJSON();
  sendSelectedParamsFilter();
  sendSelectedParamsSort();

  paginationSelect();  
});

var users = [
  {
    fullName: "Mark Pacheco",
    balance: 93481,
    isActive: "True",
    registered: "True",
    state: "ACT",
    country: "Singapore",
  },
  {
    fullName: "Graiden Reeves",
    balance: 22690,
    isActive: "False",
    registered: "False",
    state: "BL",
    country: "Japan",
  },
  {
    fullName: "Castor Lloyd",
    balance: 87078,
    isActive: "False",
    registered: "False",
    state: "Zeeland",
    country: "Uruguay",
  },
  {
    fullName: "Kasimir Hughes",
    balance: 10922,
    isActive: "False",
    registered: "False",
    state: "Hgo",
    country: "Yemen",
  },
  {
    fullName: "Timothy Simpson",
    balance: 57749,
    isActive: "True",
    registered: "True",
    state: "Ank",
    country: "Kazakhstan",
  },
  {
    fullName: "Ulric Hatfield",
    balance: 42249,
    isActive: "True",
    registered: "True",
    state: "Vienna",
    country: "Laos",
  },
  {
    fullName: "Kadeem Villarreal",
    balance: 73060,
    isActive: "True",
    registered: "False",
    state: "California",
    country: "Andorra",
  },
  {
    fullName: "Orson Schroeder",
    balance: 83728,
    isActive: "False",
    registered: "False",
    state: "OR",
    country: "South Africa",
  },
  {
    fullName: "Oscar Pitts",
    balance: 67798,
    isActive: "False",
    registered: "False",
    state: "Bolívar",
    country: "Uruguay",
  },
  {
    fullName: "Knox Tucker",
    balance: 21654,
    isActive: "False",
    registered: "True",
    state: "Tamaulipas",
    country: "Mauritania",
  },
  {
    fullName: "Linus Koch",
    balance: 38389,
    isActive: "True",
    registered: "True",
    state: "Brussels Hoofdstedelijk Gewest",
    country: "Kuwait",
  },
  {
    fullName: "Tucker Dodson",
    balance: 44273,
    isActive: "True",
    registered: "True",
    state: "Veracruz",
    country: "Madagascar",
  },
  {
    fullName: "Hall Hester",
    balance: 42808,
    isActive: "True",
    registered: "False",
    state: "NSW",
    country: "Isle of Man",
  },
  {
    fullName: "Laith Britt",
    balance: 11548,
    isActive: "False",
    registered: "True",
    state: "Gyeonggi",
    country: "Guam",
  },
  {
    fullName: "Hamilton Everett",
    balance: 68157,
    isActive: "True",
    registered: "True",
    state: "Mississippi",
    country: "Turkmenistan",
  },
  {
    fullName: "George Carroll",
    balance: 47228,
    isActive: "False",
    registered: "False",
    state: "Canarias",
    country: "Mongolia",
  },
  {
    fullName: "Macaulay Washington",
    balance: 10056,
    isActive: "False",
    registered: "False",
    state: "Diy",
    country: "Pakistan",
  },
  {
    fullName: "Ryder Moran",
    balance: 10318,
    isActive: "True",
    registered: "True",
    state: "Hamburg",
    country: "Croatia",
  },
  {
    fullName: "Palmer Mccall",
    balance: 18969,
    isActive: "False",
    registered: "True",
    state: "Antioquia",
    country: "Nicaragua",
  },
  {
    fullName: "Gareth Watson",
    balance: 92222,
    isActive: "False",
    registered: "True",
    state: "North Island",
    country: "Libya",
  },
  {
    fullName: "Dale Wilkins",
    balance: 77639,
    isActive: "False",
    registered: "True",
    state: "West Java",
    country: "Nepal",
  },
  {
    fullName: "Duncan Gonzales",
    balance: 97524,
    isActive: "False",
    registered: "True",
    state: "Metropolitana de Santiago",
    country: "Myanmar",
  },
  {
    fullName: "Acton Anderson",
    balance: 76738,
    isActive: "True",
    registered: "False",
    state: "ANT",
    country: "Russian Federation",
  },
  {
    fullName: "Gabriel Mccray",
    balance: 57787,
    isActive: "True",
    registered: "False",
    state: "C",
    country: "New Caledonia",
  },
  {
    fullName: "Kennedy Merrill",
    balance: 75384,
    isActive: "True",
    registered: "False",
    state: "BE",
    country: "France",
  },
  {
    fullName: "John Sherman",
    balance: 26809,
    isActive: "True",
    registered: "True",
    state: "IRK",
    country: "Bonaire, Sint Eustatius and Saba",
  },
  {
    fullName: "Ryder Levy",
    balance: 91157,
    isActive: "False",
    registered: "False",
    state: "OV",
    country: "Dominican Republic",
  },
  {
    fullName: "Griffith Burton",
    balance: 52649,
    isActive: "False",
    registered: "True",
    state: "WV",
    country: "Ukraine",
  },
  {
    fullName: "Roth Hobbs",
    balance: 52422,
    isActive: "True",
    registered: "True",
    state: "Gilgit Baltistan",
    country: "Laos",
  },
  {
    fullName: "Hedley Dickerson",
    balance: 48932,
    isActive: "False",
    registered: "True",
    state: "Stockholms län",
    country: "Sierra Leone",
  },
  {
    fullName: "Clayton Deleon",
    balance: 84407,
    isActive: "False",
    registered: "True",
    state: "QC",
    country: "Kuwait",
  },
  {
    fullName: "Kane Fitzgerald",
    balance: 81693,
    isActive: "True",
    registered: "False",
    state: "British Columbia",
    country: "Mayotte",
  },
  {
    fullName: "Mohammad Wilkerson",
    balance: 60416,
    isActive: "False",
    registered: "False",
    state: "Antioquia",
    country: "Honduras",
  },
  {
    fullName: "Daquan Logan",
    balance: 65156,
    isActive: "False",
    registered: "True",
    state: "BR",
    country: "Algeria",
  },
  {
    fullName: "Uriah Gill",
    balance: 18244,
    isActive: "True",
    registered: "False",
    state: "Provence-Alpes-Côte d'Azur",
    country: "Libya",
  },
  {
    fullName: "Hyatt Kidd",
    balance: 78728,
    isActive: "True",
    registered: "False",
    state: "AG",
    country: "Cook Islands",
  },
  {
    fullName: "Lamar Gill",
    balance: 70033,
    isActive: "True",
    registered: "True",
    state: "Antioquia",
    country: "Solomon Islands",
  },
  {
    fullName: "Edan Cherry",
    balance: 46656,
    isActive: "False",
    registered: "True",
    state: "Zeeland",
    country: "French Polynesia",
  },
  {
    fullName: "Keane Davenport",
    balance: 38174,
    isActive: "False",
    registered: "True",
    state: "Gye",
    country: "Latvia",
  },
  {
    fullName: "Steven Hudson",
    balance: 74217,
    isActive: "False",
    registered: "False",
    state: "LOR",
    country: "Greece",
  },
  {
    fullName: "Eagan Langley",
    balance: 10982,
    isActive: "False",
    registered: "True",
    state: "TOS",
    country: "Togo",
  },
  {
    fullName: "Wallace Patton",
    balance: 12698,
    isActive: "True",
    registered: "False",
    state: "ON",
    country: "Tajikistan",
  },
  {
    fullName: "Colin Stevenson",
    balance: 15256,
    isActive: "True",
    registered: "True",
    state: "Istanbul",
    country: "Armenia",
  },
  {
    fullName: "Zahir Preston",
    balance: 27557,
    isActive: "False",
    registered: "True",
    state: "PIU",
    country: "Congo, the Democratic Republic of the",
  },
  {
    fullName: "Josiah Orr",
    balance: 45860,
    isActive: "True",
    registered: "False",
    state: "Languedoc-Roussillon",
    country: "Saint Martin",
  },
  {
    fullName: "Kyle Mcgee",
    balance: 84730,
    isActive: "False",
    registered: "True",
    state: "AL",
    country: "Anguilla",
  },
  {
    fullName: "Harding Cross",
    balance: 78977,
    isActive: "False",
    registered: "False",
    state: "NSW",
    country: "Andorra",
  },
  {
    fullName: "Brody Navarro",
    balance: 82723,
    isActive: "True",
    registered: "False",
    state: "WB",
    country: "South Sudan",
  },
  {
    fullName: "Philip Wong",
    balance: 80563,
    isActive: "False",
    registered: "True",
    state: "Rio de Janeiro",
    country: "United States",
  },
  {
    fullName: "Griffin Beach",
    balance: 93988,
    isActive: "False",
    registered: "True",
    state: "Gilgit Baltistan",
    country: "Sierra Leone",
  },
  {
    fullName: "Damian Haynes",
    balance: 54397,
    isActive: "True",
    registered: "True",
    state: "NE",
    country: "Bulgaria",
  },
  {
    fullName: "Kyle Johnson",
    balance: 85251,
    isActive: "True",
    registered: "True",
    state: "NI",
    country: "Belgium",
  },
  {
    fullName: "Fuller Rodriquez",
    balance: 57064,
    isActive: "True",
    registered: "False",
    state: "NA",
    country: "Guernsey",
  },
  {
    fullName: "Bevis Nelson",
    balance: 30992,
    isActive: "False",
    registered: "False",
    state: "ANT",
    country: "Israel",
  },
  {
    fullName: "Branden Baldwin",
    balance: 98607,
    isActive: "True",
    registered: "False",
    state: "BE",
    country: "Latvia",
  },
  {
    fullName: "Keith Justice",
    balance: 67121,
    isActive: "True",
    registered: "True",
    state: "Stockholms län",
    country: "Estonia",
  },
  {
    fullName: "Cade Padilla",
    balance: 14447,
    isActive: "True",
    registered: "False",
    state: "IL",
    country: "Burkina Faso",
  },
  {
    fullName: "Jamal Osborn",
    balance: 32047,
    isActive: "True",
    registered: "True",
    state: "HH",
    country: "Turks and Caicos Islands",
  },
  {
    fullName: "Kelly Leonard",
    balance: 65166,
    isActive: "True",
    registered: "True",
    state: "Wie",
    country: "Zambia",
  },
  {
    fullName: "Jeremy Booth",
    balance: 85324,
    isActive: "True",
    registered: "False",
    state: "QC",
    country: "Hong Kong",
  },
  {
    fullName: "Berk Hancock",
    balance: 73157,
    isActive: "True",
    registered: "False",
    state: "Sokoto",
    country: "El Salvador",
  },
  {
    fullName: "Donovan Dixon",
    balance: 32061,
    isActive: "False",
    registered: "True",
    state: "NSW",
    country: "El Salvador",
  },
  {
    fullName: "Hakeem Frye",
    balance: 27238,
    isActive: "False",
    registered: "False",
    state: "SA",
    country: "Tajikistan",
  },
  {
    fullName: "Cain Miles",
    balance: 74782,
    isActive: "False",
    registered: "True",
    state: "Central Java",
    country: "Namibia",
  },
  {
    fullName: "Baxter Underwood",
    balance: 59010,
    isActive: "True",
    registered: "False",
    state: "Waals-Brabant",
    country: "Liberia",
  },
  {
    fullName: "Anthony Sanford",
    balance: 13733,
    isActive: "True",
    registered: "True",
    state: "Antwerpen",
    country: "Netherlands",
  },
  {
    fullName: "Raymond Padilla",
    balance: 31291,
    isActive: "False",
    registered: "False",
    state: "Luik",
    country: "Tunisia",
  },
  {
    fullName: "Tiger Hale",
    balance: 78686,
    isActive: "False",
    registered: "False",
    state: "British Columbia",
    country: "Israel",
  },
  {
    fullName: "Wing Conrad",
    balance: 79274,
    isActive: "True",
    registered: "True",
    state: "Mazowieckie",
    country: "South Africa",
  },
  {
    fullName: "Dalton Rodriguez",
    balance: 34603,
    isActive: "False",
    registered: "False",
    state: "MV",
    country: "Bulgaria",
  },
  {
    fullName: "Tobias Klein",
    balance: 45948,
    isActive: "True",
    registered: "False",
    state: "ANT",
    country: "Honduras",
  },
  {
    fullName: "Clayton Sutton",
    balance: 71014,
    isActive: "True",
    registered: "False",
    state: "Ankara",
    country: "Bosnia and Herzegovina",
  },
  {
    fullName: "Elliott Evans",
    balance: 83610,
    isActive: "False",
    registered: "False",
    state: "Victoria",
    country: "Comoros",
  },
  {
    fullName: "Troy Todd",
    balance: 62289,
    isActive: "False",
    registered: "True",
    state: "GA",
    country: "Guatemala",
  },
  {
    fullName: "Leonard Holman",
    balance: 41726,
    isActive: "True",
    registered: "True",
    state: "CV",
    country: "New Caledonia",
  },
  {
    fullName: "Keane Mcmahon",
    balance: 80889,
    isActive: "False",
    registered: "True",
    state: "Noord Holland",
    country: "Finland",
  },
  {
    fullName: "Lucius Sanford",
    balance: 40065,
    isActive: "False",
    registered: "False",
    state: "Luik",
    country: "Sudan",
  },
  {
    fullName: "Lester Holland",
    balance: 91944,
    isActive: "True",
    registered: "False",
    state: "Minas Gerais",
    country: "Turkey",
  },
  {
    fullName: "Quentin Carpenter",
    balance: 47355,
    isActive: "True",
    registered: "True",
    state: "ANT",
    country: "Brazil",
  },
  {
    fullName: "Brock Jones",
    balance: 86048,
    isActive: "False",
    registered: "False",
    state: "Ulster",
    country: "Russian Federation",
  },
  {
    fullName: "Omar Barber",
    balance: 63696,
    isActive: "False",
    registered: "True",
    state: "M",
    country: "Comoros",
  },
  {
    fullName: "Axel Barton",
    balance: 58808,
    isActive: "True",
    registered: "True",
    state: "Koc",
    country: "Congo (Brazzaville)",
  },
  {
    fullName: "Ethan Romero",
    balance: 33169,
    isActive: "False",
    registered: "True",
    state: "Waals-Brabant",
    country: "Mongolia",
  },
  {
    fullName: "Merrill Bonner",
    balance: 25652,
    isActive: "False",
    registered: "True",
    state: "NSW",
    country: "Bouvet Island",
  },
  {
    fullName: "Solomon Camacho",
    balance: 49800,
    isActive: "False",
    registered: "True",
    state: "La Libertad",
    country: "Cook Islands",
  },
  {
    fullName: "Erich Lara",
    balance: 13092,
    isActive: "True",
    registered: "False",
    state: "AZ",
    country: "Rwanda",
  },
  {
    fullName: "Octavius Rowland",
    balance: 38595,
    isActive: "False",
    registered: "False",
    state: "ANT",
    country: "Chile",
  },
  {
    fullName: "Bruno Church",
    balance: 37841,
    isActive: "True",
    registered: "True",
    state: "LD",
    country: "Libya",
  },
  {
    fullName: "Owen Frost",
    balance: 51933,
    isActive: "False",
    registered: "False",
    state: "Alajuela",
    country: "Andorra",
  },
  {
    fullName: "Marshall Mayer",
    balance: 12355,
    isActive: "True",
    registered: "True",
    state: "North Chungcheong",
    country: "Armenia",
  },
  {
    fullName: "Emerson Hensley",
    balance: 94892,
    isActive: "False",
    registered: "False",
    state: "O",
    country: "Japan",
  },
  {
    fullName: "Slade Alvarado",
    balance: 68101,
    isActive: "False",
    registered: "True",
    state: "Brandenburg",
    country: "Nigeria",
  },
  {
    fullName: "Berk Sears",
    balance: 64488,
    isActive: "True",
    registered: "False",
    state: "Loreto",
    country: "Guinea",
  },
  {
    fullName: "Harrison Matthews",
    balance: 57017,
    isActive: "True",
    registered: "True",
    state: "Renfrewshire",
    country: "El Salvador",
  },
  {
    fullName: "Brent Sargent",
    balance: 96629,
    isActive: "True",
    registered: "False",
    state: "Vologda Oblast",
    country: "Saint Lucia",
  },
  {
    fullName: "Thomas Harvey",
    balance: 23606,
    isActive: "True",
    registered: "False",
    state: "NI",
    country: "Svalbard and Jan Mayen Islands",
  },
  {
    fullName: "Buckminster Patel",
    balance: 82348,
    isActive: "False",
    registered: "True",
    state: "North Gyeongsang",
    country: "Solomon Islands",
  },
  {
    fullName: "Chester Fuentes",
    balance: 61488,
    isActive: "True",
    registered: "True",
    state: "Istanbul",
    country: "Ukraine",
  },
  {
    fullName: "Harding Wyatt",
    balance: 56699,
    isActive: "True",
    registered: "True",
    state: "WB",
    country: "Brunei",
  },
  {
    fullName: "Melvin Fisher",
    balance: 94654,
    isActive: "False",
    registered: "True",
    state: "PR",
    country: "Uganda",
  },
];

//TABLE
function tableFromJSON() {
  var col = [];
  // Extract value from table header
  for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  // Create a table.
  var table = document.createElement("table");
  table.setAttribute("id", "usersTable");
  table.setAttribute("class", "pagination");
  // Create table header row with extracted headers
  var tr = table.insertRow(-1);
  // add data to the table as rows
  for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
  }

  for (var i = 0; i < users.length; i++) {
    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = users[i][col[j]];
    }
  }
  //Add table with data to a container
  var divShowData = document.querySelector(".tableWraper");
  divShowData.innerHTML = "";
  divShowData.appendChild(table);
}
//SORT
function sendSelectedParamsSort() {
  var paramsSelectField = document.getElementById("sortingParams");
  var sendParamsBtn = document.getElementById("sendParamsBtn");

  sendParamsBtn.addEventListener("click", function () {
    var paramSelected =
      paramsSelectField.options[paramsSelectField.selectedIndex].text;
    if (paramSelected === "Name") {
      sortTable(0, 0);
    } else if (paramSelected === "Balance") {
      sortTable(1, 1);
    } else if (paramSelected === "IsActive") {
      sortTable(2, 2);
    } else if (paramSelected === "Registered") {
      sortTable(3, 3);
    } else if (paramSelected === "State") {
      sortTable(4, 4);
    } else if (paramSelected === "Country") {
      sortTable(5, 5);
    } else {
      alert("Please select valid parameter");
    }
  });
}

function sortTable(sortX, sortY) {
  var table = document.getElementById("usersTable");
  var switching = true;
  var shouldSwitch;
  //Loop that until
  //no switching has been done
  while (switching) {    
    switching = false;
    var rows = table.rows;
    //Loop through all table rows (except the
    //first, which contains table headers)
    for (var i = 1; i < rows.length - 1; i++) {      
      shouldSwitch = false;
      //Get elements to compare,
      //one from current row and one from the next
      var x = rows[i].getElementsByTagName("TD")[sortX];
      var y = rows[i + 1].getElementsByTagName("TD")[sortY];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //If a switch has been marked, make the switch
      //and mark that a switch has been done
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
//FILTER
function sendSelectedParamsFilter() {
  var paramsSelectField = document.getElementById("filteringParams");
  var sendParamsInput = document.getElementById("searchBy");

  sendParamsInput.addEventListener("keyup", function () {
    var paramSelected =
      paramsSelectField.options[paramsSelectField.selectedIndex].text;
    if (paramSelected === "Name") {
      filterBy(0);
    } else if (paramSelected === "Balance") {
      filterBy(1);
    } else if (paramSelected === "IsActive") {
      filterBy(2);
    } else if (paramSelected === "Registered") {
      filterBy(3);
    } else if (paramSelected === "State") {
      filterBy(4);
    } else if (paramSelected === "Country") {
      filterBy(5);
    } else {
      alert("Please select valid parameter");
    }
  });
}

function filterBy(x) {
  var input = document.getElementById("searchBy");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("usersTable");
  var tr = table.getElementsByTagName("tr");
  var txtValue;
  var td;
  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[x];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//PAGINATION
function paginationSelect() {
	var btn20 = document.getElementById("pagination20");
  var btn50 = document.getElementById("pagination50");
	var btn100 = document.getElementById("pagination100");
	var table = document.getElementById("usersTable");		

	btn20.addEventListener('click', function() {			
		var exists = document.querySelector(".pager");
		if(exists !== null) 
		{
			document.querySelector(".pager").remove();
			table.setAttribute("data-pagecount", "20");
			genTables();
    } 
    else 
		{
			table.setAttribute("data-pagecount", "20");
			genTables();			
		}
	});

	btn50.addEventListener('click', function() {
		var exists = document.querySelector(".pager");
		if(exists !== null) 
		{
			document.querySelector(".pager").remove();
			table.setAttribute("data-pagecount", "50");
			genTables();
    } 
    else 
		{
			table.setAttribute("data-pagecount", "50");
			genTables();			
		}
	});

	btn100.addEventListener('click', function() {
		var exists = document.querySelector(".pager");
		if(exists !== null) 
		{
			document.querySelector(".pager").remove();
			table.setAttribute("data-pagecount", "100");
			genTables();
    } 
    else 
		{
			table.setAttribute("data-pagecount", "100");
			genTables();			
		}	
	});	
}

function genTables() {
  var tables = document.querySelectorAll(".pagination");
  for (var i = 0; i < tables.length; i++) {
      perPage = parseInt(tables[i].dataset.pagecount);
      createFooters(tables[i]);
      createTableMeta(tables[i]);
      loadTable(tables[i]);
  }
}
// based on current page, only show the elements in that range
function loadTable(table) {
  var startIndex = 0;

  if (table.querySelector("th")) {
    startIndex = 1;
  }

  var start = (parseInt(table.dataset.currentpage) * table.dataset.pagecount) + startIndex;
  var end = start + parseInt(table.dataset.pagecount);
  var rows = table.rows;

  for (var x = startIndex; x < rows.length; x++) {
    if (x < start || x >= end) {   
      rows[x].classList.add("inactive");
    }
    else {
      rows[x].classList.remove("inactive");
    }            
  }
}

function createTableMeta(table) {
    table.dataset.currentpage = "0";
}

function createFooters(table) {
  var hasHeader = false;
  if (table.querySelector("th")) {
    hasHeader = true;
  }       

  var rows = table.rows.length;

  if (hasHeader) {
    rows = rows - 1;
  }      

  var numPages = rows / perPage;
  var pager = document.createElement("div");
  
  if (numPages % 1 > 0) {
    numPages = Math.floor(numPages) + 1;
  }

	pager.className = "pager";
	
  for (var i = 0; i < numPages ; i++) {
    var page = document.createElement("div");
    page.innerHTML = i + 1;
    page.className = "pager-item";
    page.dataset.index = i;

    if (i == 0) {
      page.classList.add("selected");
    }

    page.addEventListener('click', function() {
      var parent = this.parentNode;
      var items = parent.querySelectorAll(".pager-item");
      for (var x = 0; x < items.length; x++) {
          items[x].classList.remove("selected");
      }

      this.classList.add("selected");
      table.dataset.currentpage = this.dataset.index;
      loadTable(table);
    });

    pager.appendChild(page);
  }
  // insert page at the top of the table
  table.parentNode.insertBefore(pager, table);
}