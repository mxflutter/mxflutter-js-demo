/* eslint-disable */
import {MXJSBaseWidget, MXJSFlutterApp, MXJSStatelessWidget, MXJSStatefulWidget, MXJSWidgetState, MXJSLog } from '@mxflutter/mxflutter';
import {
  MaterialApp,
  Scaffold,
  Container,
  ListTile,
  Center,
  Color,
  AppBar,
  SnackBar,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  Column,
  Row,
  IconButton,
  DropdownButton,
  DropdownMenuItem,
  MainAxisAlignment,
  TextStyle,
  PopupMenuButton,
  PopupMenuItem,
  ButtonBar,
  MainAxisSize,
  TextDecoration,
  RichText,
  TextSpan,
  Expanded,
  FontWeight,
  TextFormField,
  InputDecoration,
  UnderlineInputBorder,
  TextInputType,
  SizedBox,
  TextField,
  TextEditingController,
  ListView,
  Slider,
  Icons,
  Image,
  Theme,
  Padding,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
} from '@mxflutter/mxflutter-widgets/material';

import { SectionTitle } from '../component/section_title';

import { PageExampleAppBar } from './example_app_bar';
import { PageExampleText } from './example_text';
import { PageExampleButton } from './example_button';

import { PageExampleSnakeBar } from './example_snake_bar';
import { PageExampleColumn } from './example_column';
import { PageExampleRow } from './example_row';
import { PageExampleContainer } from './example_container';
import { PageExampleFlutterLogo } from './example_flutter_logo';
import { PageExampleColor } from './example_flutter_color';
import { PageExampleIcon } from './example_flutter_icon';
import { PageExampleImage } from './example_image';
import { PageExamplePlaceholder } from './example_placeholder';
import { PageExampleScaffold } from './example_scaffold';

//Animated
import { PageExampleAnimatedBuilder } from './animation/example_animated_builder';
import { PageExampleAnimatedBuilderV2 } from './animation/example_animated_builder_v2';
import { PageExampleAnimatedContainer } from './animation/example_animated_container';
import { PageExampleAnimatedCrossFade } from './animation/example_animated_cross_fade';
import { PageExampleAnimatedDefaultTextStyle } from './animation/example_animated_default_text_style';
import { PageExampleAnimatedListState } from './animation/example_animated_list_state';
import { PageExampleAnimatedModalBarrier } from './animation/example_animated_modal_barrier';
import { PageExampleAnimatedOpacity } from './animation/example_animated_opacity';
import { PageExampleAnimatedPhysicalModel } from './animation/example_animated_physical_model';
import { PageExampleAnimatedPositioned } from './animation/example_animated_positioned';
import { PageExampleAnimatedSize } from './animation/example_animated_size';

import { PageExampleAnimatedWidget } from './animation/example_animated_widget';
import { PageExampleAnimatedWidgetBaseState } from './animation/example_animated_widget_base_state';
import { PageExampleDecoratedBoxTransition } from './animation/example_decorated_box_transition';
import { PageExampleFadeTransition } from './animation/example_fade_transition';
import { PageExampleHero } from './animation/example_hero';
import { PageExamplePositionedTransition } from './animation/example_positioned_transition';
import { PageExampleRotationTransition } from './animation/example_rotation_transition';
import { PageExampleScaleTransition } from './animation/example_scale_transition';
import { PageExampleSizeTransition } from './animation/example_size_transition';
import { PageExampleSlideTransition } from './animation/example_slide_transition';

class ExamplesPage extends MXJSStatelessWidget {
  constructor() {
    super('ExamplesPage');
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Flutter Examples'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle('基础组件', /*{ key: new Key('1') }*/),

            new ListTile({
              title: new Text('AppBar'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAppBar();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Text'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleText();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Button'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleButton();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Image'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleImage();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Placeholder'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExamplePlaceholder();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Icon'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleIcon();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Color'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleColor();
                    },
                  }),
                );
              },
            }),
            new SectionTitle('布局组件', /*{ key: new Key('2') }*/),
            // this.genSectionTitle(context,"布局组件"),
            new ListTile({
              title: new Text('Column'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleColumn();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Row'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleRow();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Container'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleContainer();
                    },
                  }),
                );
              },
            }),
            new SectionTitle('动画组件', /*{ key: new Key('3') }*/),
            // this.genSectionTitle(context,"动画组件"),
            new ListTile({
              title: new Text('AnimatedBuilder'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedBuilder();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedBuilder v2'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedBuilderV2();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedContainer'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedContainer();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedCrossFade'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedCrossFade();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedDefaultTextStyle'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedDefaultTextStyle();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedListState'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedListState();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedModalBarrier'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedModalBarrier();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedOpacity'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedOpacity();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedPhysicalModel'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedPhysicalModel();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedPositioned'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedPositioned();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedSize'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedSize();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedWidget'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedWidget();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('AnimatedWidgetBaseState'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleAnimatedWidgetBaseState();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('DecoratedBoxTransition'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleDecoratedBoxTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('FadeTransition'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleFadeTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Hero'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleHero();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('PositionedTransition'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExamplePositionedTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('RotationTransition'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleRotationTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('ScaleTransition'),

              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleScaleTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('SizeTransition'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleSizeTransition();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('SlideTransition'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleSlideTransition();
                    },
                  }),
                );
              },
            }),
            new SectionTitle('其他组件', /*{ key: new Key('4') }*/),
            // this.genSectionTitle(context,"其他组件"),
            new ListTile({
              title: new Text('FlutterLogo'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleFlutterLogo();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('Scaffold'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleScaffold();
                    },
                  }),
                );
              },
            }),
            new ListTile({
              title: new Text('SnackBar'),
              onTap: function () {
                Navigator.push(
                  context,
                  new MaterialPageRoute({
                    builder: function (context) {
                      return new PageExampleSnakeBar();
                    },
                  }),
                );
              },
            }),
          ],
        }),
      }),
    });
    return widget;
  }
}

export {
  ExamplesPage,
};
