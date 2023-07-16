
import { Image, ImageBackground, ScrollView, Text } from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
    
};

const result = require('../../../img/sword.png');
const logo2 = {
    uri: result,
    width: 64,
    height: 64,
    
};



const SuperImageView = () => (    
    <ScrollView>
        <Image source={logo} />       
        <Image source={require('../../../img/sword.png')} 
        style={{width: 389, height: 400 }} />       
        <Image source={{uri: 'https://reactjs.org/logo-og.png', cache: 'only-if-cached', }}
       style={{width: 389, height: 400}} />
    </ScrollView>     
    
    
    // <ImageBackground source={require('../../../img/sword.png')} style={{width: '100%', height: '100%'}}>
    //     <Text style={{color: 'red'}}>Inside</Text>
    // </ImageBackground>
    
);


export default SuperImageView;
