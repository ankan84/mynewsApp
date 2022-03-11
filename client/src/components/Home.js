import React from 'react';
import Navbar from './Navbar';
import Container from './style/Container';

import {Route,Switch} from 'react-router-dom';
import SourceId from './site/SourceId';
import Test from './site/Test'
import Home_main from './site/Home_main';
import Login from './Login';
import Admin_Page from './site/Admin_Page';
import YourPost from './site/YourPost';
import Registation from './Registation';
import Loader from './style/Loader';
import Error from './site/Error';

export default function Home() {
  return(<>
    
    <Switch>
    <Route exact path='/' component={Home_main}/>
    <Route exact path='/top-headline' component={Container}/>
    <Route exact path='/source/:id' component={SourceId}/>
    <Route exact path='/admin/signin' component={Login}/>
    
    <Route exact path='/admin/signup' component={Registation}/>
    <Route exact path='/admin_home' component={Admin_Page}/>
    <Route exact path='/admin-allpost' component={YourPost}/>
    <Route  component={Error}/>



     
    </Switch>
   
  </>);
}
