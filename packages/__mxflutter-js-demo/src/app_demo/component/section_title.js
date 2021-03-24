import {
  MXJSStatelessWidget
} from '@mxflutter/mxflutter';
import {
  Colors,
  Theme
} from '@mxflutter/mxflutter-widgets/material';
import {
  Container,
  Text,
  Icon,
  IconData,
  Row,
  Padding
} from '@mxflutter/mxflutter-widgets/widgets';
import {
  Color,
  TextAlign,
  TextStyle
} from '@mxflutter/mxflutter-widgets/mx-dart-sdk';
import {
  EdgeInsets
} from '@mxflutter/mxflutter-widgets/painting';

class SectionTitle extends MXJSStatelessWidget {
  constructor(title, {
    key
  } = {}) {
    super("SectionTitle", {
      key: key
    });
    this.title = title;
  }

  build(context) {
    return new Container({
      padding: EdgeInsets.all(10.0),
      color: Theme.of(context).primaryColor,
      child: new Row({
        children: [
          new Icon(new IconData(0xe80e, {
            fontFamily: 'MaterialIcons'
          }), {
            size: 20,
            color: new Color(0xFFFFFFFF)
          }),
          new Padding({
            padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0)
          }),
          new Text(this.title, {
            textAlign: TextAlign.start,
            style: new TextStyle({
              fontSize: 16,
              fontWeight: Theme.of(context).textTheme.subtitle1.fontWeight,
              color: Colors.white
            })
          })
        ]
      })
    });
  }
}

export { SectionTitle };