import 'angular-ui-router';

import 'ionic-scripts';

import Angular from 'angular';

import Loader from 'angular-ecmascript/module-loader';

import {
  Meteor
} from 'meteor/meteor';



// Modules
import ChatsCtrl from '../controllers/chats.controller';
import RoutesConfig from '../routes';



const App = 'Whatsapp';

new Loader(App)
  .load(ChatsCtrl)
  .load(RoutesConfig);



// Startup

if (Meteor.isCordova) {

  Angular.element(document).on('deviceready', onReady);
}
