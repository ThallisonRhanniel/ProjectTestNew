import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
};