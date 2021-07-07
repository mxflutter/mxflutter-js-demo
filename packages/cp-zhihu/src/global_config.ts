/* eslint-disable */
//global_config.js 正式开始，😝
import { ThemeData, Color, Colors, Brightness } from '@mxflutter/mxflutter-widgets/material';

class GlobalConfig {
  static get themeData() {
    return new ThemeData({ brightness: Brightness.light });
  }

  static get searchBackgroundColor() {
    return new Color(0xffeeeeee);
  }

  static get cardBackgroundColor() {
    return Colors.white;
  }

  static get fontColor() {
    return new Color(0xff444444);
  }
}

export { GlobalConfig };
