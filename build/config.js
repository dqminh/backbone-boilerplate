// This is the main Backbone Boilerplate build configuration file.
//
// This is a JavaScript file, you can define any functions you would like in
// here.
config.init({

  lint: {
    files: ["build/config.js", "app/modules/*.js"]
  },

  brew_coffee: {
    "app/modules/": { src: "app/modules-coffee/", option: "-c" },
    "spec/compiled/specs.js": { src: "spec/coffeescript/**/*spec.coffee", option: "--join" }
  },

  concat: {

    // The core library files
    "dist/debug/js/libs.js": [
      "assets/js/libs/jquery.js",
      "assets/js/libs/underscore.js",
      "assets/js/libs/backbone.js"
    ],

    "spec/compiled/libs.js": [
      "assets/js/libs/jquery.js",
      "assets/js/libs/underscore.js",
      "assets/js/libs/backbone.js"
    ],

    // Application files
    "dist/debug/js/app.js": ["app/*.js", "app/modules/*.js"],
    "spec/compiled/app.js": ["app/*.js", "app/modules/*.js"],

    // Your CSS
    "dist/debug/css/style.css": ["assets/css/*.css"]
  },

  jst: {
    "dist/debug/js/templates.js": ["app/templates/*.html"],
    "spec/compiled/templates.js": ["app/templates/*.html"]
  },

  min: {
    "dist/release/js/libs.js": ["dist/debug/js/libs.js"],
    "dist/release/js/app.js": ["dist/debug/js/app.js"],
    "dist/release/js/templates.js": ["dist/debug/js/templates.js"]
  },

  mincss: {
    "dist/release/css/style.css": ["dist/debug/css/style.css"]
  },

  watch: {
    files: ["assets/**/*", "app/**/*"],
    tasks: "lint:files concat jst",

    min: {
      files: ["assets/**/*", "app/**/*"],
      tasks: "default"
    },

    coffee: {
      files: ["spec/coffeescript/**/*", "assets/**/*", "app/**/*"],
      tasks: "brew_coffee concat jst"
    }
  },

  clean: {
    folder: "dist/"
  }

});

// Run the following tasks...
task.registerTask("default", "clean lint:files concat jst min mincss");
