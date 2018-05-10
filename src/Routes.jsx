import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import AboutPage from './components/about/AboutPage';
import ManageCoursePage from './components/course/ManageCoursePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/HomePage" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/course/:id" component={ManageCoursePage}/>
    <Route path="/about" component={AboutPage} />
  </Switch>
);

export default Routes;

