import React, { PropTypes } from 'react'
import { TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, StyleSheet, View, Platform } from 'react-native'
import colors from '../config/colors'
import Text from '../text/Text'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import getIconType from '../helpers/getIconType'

let styles = {}

const log = () => {
  console.log('please attach method to this component')
}

const Button = ({
  Component,
  disabled,
  buttonStyle,
  borderRadius,
  title,
  onPress,
  delayLongPress,
  delayPressIn,
  delayPressOut,
  onLayout,
  onLongPress,
  onPressIn,
  onPressOut,
  activeOpacity,
  onHideUnderlay,
  onShowUnderlay,
  background,
  SelectableBackground,
  SelectableBackgroundBorderless,
  Ripple,
  icon,
  secondary,
  secondary2,
  secondary3,
  primary1,
  primary2,
  primary3,
  backgroundColor,
  color,
  fontSize,
  underlayColor,
  raised,
  textStyle,
  small,
  iconRight,
  fontWeight,
  fontFamily}) => {
  let iconElement
  if (icon) {
    let Icon
    if (!icon.type) {
      Icon = MaterialIcon
    } else {
      Icon = getIconType(icon.type)
    }
    iconElement = (
      <Icon
        color={icon.color || 'white'}
        size={icon.size || small ? 18 : 26}
        style={[
          iconRight ? styles.iconRight : styles.icon,
          icon.style && icon.style
        ]}
        name={icon.name} />
    )
  }
  if (!Component && Platform.OS === 'ios') {
    Component = TouchableHighlight
  }
  if (!Component && Platform.OS === 'android') {
    Component = TouchableNativeFeedback
  }
  if (!Component) {
    Component = TouchableHighlight
  }
  return (
    <Component
      delayLongPress={delayLongPress}
      delayPressIn={delayPressIn}
      delayPressOut={delayPressOut}
      onLayout={onLayout}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={activeOpacity}
      onHideUnderlay={onHideUnderlay}
      onShowUnderlay={onShowUnderlay}
      background={background}
      SelectableBackground={SelectableBackground}
      SelectableBackgroundBorderless={SelectableBackgroundBorderless}
      Ripple={Ripple}
      underlayColor={underlayColor || 'transparent'}
      onPress={onPress || log}
      disabled={disabled || false}>
      <View
        style={[
          styles.button,
          secondary && {backgroundColor: colors.secondary},
          secondary2 && {backgroundColor: colors.secondary2},
          secondary3 && {backgroundColor: colors.secondary3},
          primary1 && {backgroundColor: colors.primary1},
          primary2 && {backgroundColor: colors.primary2},
          backgroundColor && {backgroundColor: backgroundColor},
          borderRadius && {borderRadius},
          buttonStyle && buttonStyle,
          raised && styles.raised,
          small && styles.small,
          disabled && {backgroundColor: colors.disabled}
        ]}
        >
        {
          icon && !iconRight && iconElement
        }
        <Text
          style={[
            styles.text,
            color && {color},
            fontSize && {fontSize},
            small && styles.smallFont,
            textStyle && textStyle,
            fontWeight && {fontWeight},
            fontFamily && {fontFamily}
          ]}>
          {title}
        </Text>
        {
          icon && iconRight && iconElement
        }
      </View>
    </Component>
  )
}

Button.propTypes = {
  buttonStyle: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.any,
  icon: PropTypes.object,
  secondary: PropTypes.bool,
  secondary2: PropTypes.bool,
  secondary3: PropTypes.bool,
  primary1: PropTypes.bool,
  primary2: PropTypes.bool,
  primary3: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  textStyle: PropTypes.any,
  disabled: PropTypes.bool
}

styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  icon: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  },
  small: {
    padding: 12
  },
  smallFont: {
    fontSize: 14
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 2
      }
    })
  }
})

export default Button
