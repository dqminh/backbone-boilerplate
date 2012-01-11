var exec = require('child_process').exec;

task.registerBasicTask("brew_coffee", "Compile coffeescript to javascript", function(data, name) {
  exec("coffee -o " + name + " -c " + data, function(error, stdout, stderr) {
    console.log("stdout: " + stdout);
    console.log("stderror: " + stderr);
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
});
