module.exports = {
    default: {
        paths: ['ui-tests/features/**/*.feature'],
        require: [
            'ui-tests/steps/**/*.ts',
            'ui-tests/support/**/*.ts'
        ],
        requireModule: ['ts-node/register'],
        format: ['progress-bar']
    }
};