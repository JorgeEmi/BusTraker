import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DriverScreen from './screens/DriverScreen';
import UserScreen from './screens/UserScreen';
import ReportForm from './screens/ReportForm';
import ReportScreen from './screens/ReportScreen';
import RouteScreen from './screens/RouteScreen';
import RouteForm from './screens/RouteForm';


const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    DriverScreen: DriverScreen,
    UserScreen: UserScreen,
    ReportForm: ReportForm,
    ReportScreen: ReportScreen,
    RouteScreen: RouteScreen,
    RouteForm: RouteForm,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);