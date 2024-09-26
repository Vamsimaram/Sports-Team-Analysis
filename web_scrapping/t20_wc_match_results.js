/* -------------- STAGE 1 ------------ */

//------- 1.a Interaction Code ------ //

navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');
collect(parse());




//------- 1.b Parser Code ------------//
//Step1: create an array to store all the records
let matchSummary = []

//Step2: Selecting all rows we need from target table
const allRows = $('table.engineTable > tbody > tr.data1');

//Step3: Looping through each rows and get the data from the cells(td)
 allRows.each((index, element) => {
 		const tds = $(element).find('td');   //find the td
		matchSummary.push({
              'team1':  $(tds[0]).text(),
              'team2':  $(tds[1]).text(),
              'winner':  $(tds[2]).text(),
              'margin':  $(tds[3]).text(),
              'ground': $(tds[4]).text(),
              'matchDate': $(tds[5]).text(),
              'scorecard':   $(tds[6]).text() 
		})   
 })


// step4: Finally returning the data
return {
  "matchSummary": matchSummary
};


// /* -------------- STAGE 1 ------------ */

// //------- 1.a Interaction Code ------ //

// navigate('https://stats.espncricinhttps://www.espncricinfo.com/records/season/team-match-results/2024-2024?trophy=89fo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');
// collect(parse());




// //------- 1.b Parser Code ------------//
// //Step1: create an array to store all the records
// let matchSummary = []

// //Step2: Selecting all rows we need from target table
// const allRows = $('table.ds-w-full ds-table ds-table-xs ds-table-auto  ds-w-full ds-overflow-scroll ds-scrollbar-hide > tbody > tr.ds-bg-ui-fill-translucent');

// //Step3: Looping through each rows and get the data from the cells(td)
//  allRows.each((index, element) => {
//  		const tds = $(element).find('td');   //find the td
// 		matchSummary.push({
//               'team1':  $(tds[0]).text(),
//               'team2':  $(tds[1]).text(),
//               'winner':  $(tds[2]).text(),
//               'margin':  $(tds[3]).text(),
//               'ground': $(tds[4]).text(),
//               'matchDate': $(tds[5]).text(),
//               'scorecard':   $(tds[6]).text() 
// 		})   
//  })


// // step4: Finally returning the data
// return {
//   "matchSummary": matchSummary
// };

