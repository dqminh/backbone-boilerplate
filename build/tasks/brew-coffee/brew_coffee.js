var exec = require('child_process').exec;

task.registerBasicTask("brew_coffee", "Compile coffeescript to javascript", function(data, name) {
  var option = data.option;
  var src = data.src;

  command = "coffee " + option + " " + name + " --compile " + src;
  exec(command);
});
