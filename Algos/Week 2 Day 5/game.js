var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  var count = 0;
  if (i == 0 && j == 0) {
    count += theDojo[i][j + 1];
    count += theDojo[i + 1][j] + theDojo[i + 1][j + 1];
  } else if (i == 0 && j == 9) {
    count += theDojo[i][j - 1];
    count += theDojo[i + 1][j - 1] + theDojo[i + 1][j];
  } else if (i == 0) {
    count += theDojo[i][j - 1] + theDojo[i][j + 1];
    count += theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1];
  } else if (i == 9 && j == 0) {
    count += theDojo[i][j + 1];
    count += theDojo[i - 1][j] + theDojo[i - 1][j + 1];
  } else if (i == 9 && j == 9) {
    count += theDojo[i][j - 1];
    count += theDojo[i - 1][j - 1] + theDojo[i - 1][j];
  } else if (i == 9) {
    count += theDojo[i][j - 1] + theDojo[i][j + 1];
    count += theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
  }
  else if (j == 0) {
    count += theDojo[i][j + 1];
    count += theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    count += theDojo[i + 1][j] + theDojo[i + 1][j + 1];
  } else if (j == 9) {
    count += theDojo[i][j - 1];
    count += theDojo[i - 1][j - 1] + theDojo[i - 1][j];
    count += theDojo[i + 1][j - 1] + theDojo[i + 1][j];
  } else {
    count += theDojo[i][j - 1] + theDojo[i][j + 1];
    count += theDojo[i - 1][j - 1] + theDojo[i - 1][j] + theDojo[i - 1][j + 1];
    count += theDojo[i + 1][j - 1] + theDojo[i + 1][j] + theDojo[i + 1][j + 1];
  }

  alert(count);
}

//another way
function howMany(i, j, element) {
  console.log({i, j});
  var sum = 0;
  for(y = i-1; y<i+2;y++) {
    for(x=j-1; x<j+2;x++) {
      if (x==j && y==1 {
        console.log('don't check this');
      } else if (x >=0 && y >=0 && x < theDojo[0].length && y<theDojo.length) {
        console.log(`checking x:` + x + 'y:' + y)
        console.log('# of ninjas: ' + theDojo[y][x]);
        sum += theDojo[y][x];
      }
      })
    }
  }

    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
//       [0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,7] [0,8] [0,9] [0,10]
// [0]     1     0     1     1     1     0     4     0     8     0    

//       [1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [1]     3     1     0     7     0     0     6     0     8     8

//       [2,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [2]     5     0     7     0     3     6     6     6     0     0
 
//       [3,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [3]     2,    3,    0,    9,    0,    0,    6,    0,    8,    0

//       [4,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [4]     6,    0,    3,    3,    0,    2,    0,    3,    0,    4             

//       [5,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [5]     0,    0,    3,    3,    0,    0,    2,    2,    3,    0 

//       [6,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [6]     0,    0,    0,    0,    5,    0,    1,    2,    0,    6

//       [7,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [7]     2, 2, 2, 2, 0, 7, 1, 1, 1, 0
                
//       [8,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [8]      [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],          
                
//       [9,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,7] [1,8] [1,9] [1,10]
// [9]       [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]  
               

// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

