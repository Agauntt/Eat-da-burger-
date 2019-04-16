// Dependancies
var connection = require('./connection');

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
      }
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? ( ?? ) values ( ? );";
    
        console.log(queryString);
    
        connection.query(queryString, [table, cols, vals], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    },
}

module.exports = orm;