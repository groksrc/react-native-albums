/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Header from './src/components/Header'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Header headerText={'Albums!'} />
    )
  }
}
