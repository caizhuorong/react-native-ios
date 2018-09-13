/** @format */
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import rootApp from './app/root';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => rootApp);