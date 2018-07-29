// data
dn_2018_offSeason = [
  {
    event1: [
      "July 12<sup>th</sup>",
      "Trade",
      "Kenneth Faried, Darrell Arthur, a protected 2019(1-12) 1<sup>st</sup> Rd to the Nets for Isaiah Whitehead.",
      "https://www.cbssports.com/nba/news/nuggets-trade-kenneth-faried-darrell-arthur-to-nets-in-salary-dump-report-says/"
    ],
    event2: [
      "July 6<sup>th</sup>",
      "Trade",
      "Wilson Chandler and 2<sup>nd</sup> Round Pick to Philadelphia 76ers for cash considerations",
      "https://www.nba.com/nuggets/news/nuggets-trade-wilson-chandler-to-sixers-070618"
    ],
    event3: [
      "June 25<sup>th</sup>",
      " Contract",
      "Nikola Jokic, reach agreement on five-year max extension for $146.5 million.",
      "http://www.nba.com/article/2018/06/25/report-denver-nuggets-nikola-jokic-decline-team-option-get-max-extension"
    ],
    event4: [
      "June 21<sup>st</sup>",
      " Draft",
      "1<sup>st</sup> Round 14<sup>th</sup> - Michael Porter Jr., SF/PF, Missouri",
      "google.com"
    ],
    event5: [
      "June 21<sup>st</sup>",
      " Draft",
      "2<sup>nd</sup> Round 43<sup>rd</sup> - Jarred Vanderbilt, SF/PF, Kentucky",
      "google.com"
    ],
    event6: [
      "June 21<sup>st</sup>",
      " Draft",
      "2<sup>nd</sup> Round 58<sup>th</sup> - Thomas Welsh, C, UCLA",
      "google.com"
    ]
  }
];

dn_2018_playoffs = [
  {
    event22: [
      "April 2018",
      " Playoffs",
      "The Nuggets did not make the playoffs in 2017.",
      "https://www.cbssports.com/nba/news/nuggets-trade-kenneth-faried-darrell-arthur-to-nets-in-salary-dump-report-says/"
    ]
  }
];

function template(eachEvent) {
  return `
  <div class="event-item">
    <div class="event-date">${eachEvent.event1[0]} </div>
    <div class="event-type">${eachEvent.event1[1]} </div>
    <div class="event-desc">${eachEvent.event1[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event1[3]
    }" target="_blank"> VIEW </a>
    </div>
  </div>
  <div class="event-item">
    <div class="event-date">${eachEvent.event2[0]} </div>
    <div class="event-type">${eachEvent.event2[1]} </div>
    <div class="event-desc">${eachEvent.event2[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event2[3]
    }" target="_blank"> VIEW </a>
  </div>
  </div>
  <div class="event-item">
    <div class="event-date">${eachEvent.event3[0]} </div>
    <div class="event-type">${eachEvent.event3[1]} </div>
    <div class="event-desc">${eachEvent.event3[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event3[3]
    }" target="_blank"> VIEW </a>
    </div>
  </div>
    <div class="event-item">
    <div class="event-date">${eachEvent.event4[0]} </div>
    <div class="event-type">${eachEvent.event4[1]} </div>
    <div class="event-desc">${eachEvent.event4[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event4[3]
    }" target="_blank"> VIEW </a>
    </div>
  </div>
  <div class="event-item">
    <div class="event-date">${eachEvent.event5[0]} </div>
    <div class="event-type">${eachEvent.event5[1]} </div>
    <div class="event-desc">${eachEvent.event5[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event5[3]
    }" target="_blank"> VIEW </a>
  </div>
  </div>
    <div class="event-item">
    <div class="event-date">${eachEvent.event6[0]} </div>
    <div class="event-type">${eachEvent.event6[1]} </div>
    <div class="event-desc">${eachEvent.event6[2]} </div>
    <div class="event-link"><a href="${
      eachEvent.event6[3]
    }" target="_blank"> VIEW </a>
  </div>
  `;
}
document.getElementById("dn_2018_off").innerHTML = `
  ${dn_2018_offSeason.map(template).join(" ")}
`;

// function template(eachEvent) {
//   return `
//   <div class="event-item">
//     <div class="event-date">${eachEvent.event22[0]} </div>
//     <div class="event-type">${eachEvent.event22[1]} </div>
//     <div class="event-desc">${eachEvent.event22[2]} </div>
//     <div class="event-link"><a href="${
//       eachEvent.event22[3]
//     }" target="_blank"> VIEW </a>
//     </div>
//   `;8
// }

document.getElementById("dn_2018_pl").innerHTML = `
  ${dn_2018_playoffs.map(template).join(" ")}
`;

//  functions

// Show hide buttons
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//  ADD ICONS BASED ON TEXT
// if the event contains DRAFTED add the icon before
$('*:contains("Draft")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/drafted_player.svg" />');
});
// if the event contains DRAFTED add the icon before
$('*:contains("Signed")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/signed_player.svg" />');
});
// if the event contains STATLINE add the icon before
$('*:contains("Statline")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/statline.svg" />');
});
// if the event contains HIGHLIGHT add the icon before
$('*:contains("Highlight")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/highlight.svg" />');
});
// if the event contains TRADE add the icon before
$('*:contains("Trade")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/trade.svg" />');
});
// if the event contains CONTRACT add the icon before
$('*:contains("Contract")').each(function() {
  if ($(this).children().length < 1)
    $(this).prepend('<img id="icon" src="./assets/contract_ext.svg" />');
});

// show hide about section
$(document).ready(function() {
  $("#show-legend").click(function() {
    $("#legend").toggle("slow");
  });
});
