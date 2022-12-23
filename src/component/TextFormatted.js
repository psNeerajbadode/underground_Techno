import React from 'react';
import {Text} from 'react-native';
import _ from 'lodash';
import {theme} from '../utils/Constants';

function TextFormatted({children, style, fontFamily = 'Poppins', ...props}) {
  let transformedStyle = {};
  if (Array.isArray(style)) {
    _.flattenDeep(style).map(
      v => (transformedStyle = {...transformedStyle, ...(v || {})}),
    );
  } else {
    transformedStyle = style || {};
  }
  return (
    <Text
      {...props}
      style={[
        {color: theme.colors.text},
        transformedStyle,
        {
          fontWeight:
            transformedStyle?.fontFamily || !fontFamily
              ? transformedStyle?.fontWeight
              : null,
          fontFamily:
            transformedStyle?.fontFamily || !fontFamily
              ? transformedStyle?.fontFamily
              : fontFamily +
                getFontWeightName(transformedStyle?.fontWeight) +
                (transformedStyle?.fontStyle == 'italic' ? 'Italic' : ''),
        },
      ]}>
      {children}
    </Text>
  );
}

export default TextFormatted;

const getFontWeightName = weight => {
  if (weight == 'bold') {
    weight = '700';
  }
  if (weight == 'normal') {
    weight = '400';
  }
  var numWeight = parseInt(weight);
  if (!numWeight) {
    return '-Regular';
  }

  return {
    100: '-ExtraLight',
    200: '-ExtraLight',
    300: '-Light',
    400: '-Regular',
    500: '-Medium',
    600: '-SemiBold',
    700: '-Bold',
    800: '-ExtraBold',
    900: '-ExtraBold',
  }[numWeight];
};
