var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    greeting: function(){
        this.log('Hey, this is view model generator!');
    }
});