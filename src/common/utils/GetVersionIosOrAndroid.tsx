import {Platform} from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}

const majorVersionIOS = parseInt(Platform.Version.toString(), 10) 
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}


