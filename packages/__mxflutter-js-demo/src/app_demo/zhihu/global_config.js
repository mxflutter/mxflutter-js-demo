//global_config.js 正式开始，😝

import {
  Colors,
  ThemeData,
} from '@mxflutter/mxflutter-widgets/material';

import {
  Color,
  Brightness,
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';

class GlobalConfig {
  static get themeData() {
    return new ThemeData({
      brightness: Brightness.light
    });
  }

  static get searchBackgroundColor() {
    return new Color(0xFFEEEEEE);
  }

  static get cardBackgroundColor() {
    return Colors.white;
  }

  static get fontColor() {
    return new Color(0xFF444444);
  }
}

export { GlobalConfig };