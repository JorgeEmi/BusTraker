import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DriverScreen from './screens/DriverScreen';
import UserScreen from './screens/UserScreen';
import ReportScreen from './screens/ReportScreen';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    DriverScreen: DriverScreen,
    UserScreen: UserScreen,
    ReportScreen: ReportScreen,
    
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);