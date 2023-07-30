import {AppRegistry} from 'react-native';
AppRegistry.registerHeadlessTask('SomeTaskName', () =>
    require('SomeTaskName'),
);

module.exports = async (taskData: any) => {
    // do stuff
};