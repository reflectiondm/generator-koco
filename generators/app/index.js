var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
        this.argument('name', { type: String, required: false });
    },
    greeting: function () {
        var done = this.async();
        this.prompt({
            type: 'list',
            name: 'generator',
            message: 'What would you like to create?',
            choices: ['component', 'view model'],
            default: 'component'
        }, function (answers) {
            this.log(`Let it be! I'll create a ${answers.generator}`);
            this.selectedGenerator = answers.generator;
            done();
        }.bind(this));
    },
    marshal: function () {
        this.log("I'll hand it over to my special friend");
        switch (this.selectedGenerator) {
            case 'component': {
                this.composeWith('koco:component');
            } break;
            case 'view model': {
                this.composeWith('koco:view-model');
            } break;
        }
    }
});