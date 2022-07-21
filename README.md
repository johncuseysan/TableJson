<img src="https://github.com/johncuseysan/GettingStarted/blob/main/SanBanner.png" alt="John Cusey Sandbox Logo" height="150" width="1000">

# Table Json

# Introduction     

This project is about taking a JavaScript Object Notation (JSON) object Array to build a webpage's Hypertext Markup Language (HTML) table. In JSON object Array, the key fields make up the header in the table. The keys do not have to be identical in each JSON object in the Array. This program will Iterate through the Array of each object key and put it into a set. Set Data Structure will only let you add elements if not contained in the Set when the program iterates through array objects again to add data to the table. After the program gathers the necessary information to build the table, it will insert the webpage. I have a  separate JavaScrip file called database.js, which stores the JSON information. This program is just a prototype, but in the future, the data can put in a database. I  recommend using a  MySQL database. See below insert table. 

## JSON Database      
[Database](https://github.com/johncuseysan/TableJson/blob/main/public/js/database.js)

```HTML

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Dept</th>
    <th>Score</th>
    <th>Grade</th>
  </tr>
  <tr>
    <td>Pete Johnson</td>
    <td>18</td>
    <td>CSE</td>
    <td>90</td>
    <td></td>
  </tr>
  <tr>
    <td>Tom Smith</td>
    <td>23</td>
    <td>HIS</td>
    <td>87</td>
    <td></td>
  </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>10</td>
  </tr>
</table>

```
# Run the Application 

## Download Packages

```
$ npm install
```

## Start the web server

```
$ npm run devStart
```

<img src="https://github.com/johncuseysan/GettingStarted/blob/main/RepositoriesImages/TableJson/webpage.png" alt="
webpage" height="300" width="300">



# Tutorials    

## Set    
[Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## Class
* [Class basic syntax](https://javascript.info/class)
* [JavaScript Getters and Setters](https://www.javascripttutorial.net/es6/javascript-getters-and-setters/)

# Problems   
* [How to access variables from another file using JavaScript](https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/)   
* [How to fix "cannot use import statement outside a module](https://flaviocopes.com/fix-cannot-use-import-outside-module/)
* [JavaScript Modules with Import/Export Syntax (ES6) - JavaScript Tutorial](https://www.youtube.com/watch?v=s9kNndJLOjg)
* [Debug node js vscode using inspect! Learn to use a debugger with node. Tutorial in javascript](https://www.youtube.com/watch?v=FMsNsSHhRC8)
* [Write a line into a .txt file with Node.js](https://stackoverflow.com/questions/33418777/write-a-line-into-a-txt-file-with-node-js)