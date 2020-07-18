import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList80420Navigator from '../features/ArticleList80420/navigator';
import Maps80407Navigator from '../features/Maps80407/navigator';
import ArticleList80384Navigator from '../features/ArticleList80384/navigator';
import Maps80371Navigator from '../features/Maps80371/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList80420: { screen: ArticleList80420Navigator },
Maps80407: { screen: Maps80407Navigator },
ArticleList80384: { screen: ArticleList80384Navigator },
Maps80371: { screen: Maps80371Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
