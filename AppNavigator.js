import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DriverScreen from './screens/DriverScreen';
import UserScreen from './screens/UserScreen';
import ReportForm from './screens/ReportForm';

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    DriverScreen: DriverScreen,
    UserScreen: UserScreen,
    ReportForm: ReportForm,
    
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);