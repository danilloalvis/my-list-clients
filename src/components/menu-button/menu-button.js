import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from './menu-button.styled';

export default class MenuButton extends Component {
  render() {
    return (
      <Container>
        <TouchableWithoutFeedback onPress={this.props.openMenu}>
          <Icon name="menu" color={this.props.color || '#FFF'} size={24} />
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}
