import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Otp from '../screens/otp/Otp';

const Stack = createNativeStackNavigator();


const MainStack = () => {
   
    return (
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false, animation: "slide_from_right" }} >
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
  
    )
  }
  
  export default MainStack