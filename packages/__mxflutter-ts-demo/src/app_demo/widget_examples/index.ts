/* eslint-disable */
import { MXJSStatelessWidget } from '@mxflutter/mxflutter';
import {
  Scaffold,
  ScrollController,
  AppBar,
  Stack,
  Text,
  Scrollbar,
  ListView,
  Align,
  Alignment,
  SizedBox,
  Padding,
  EdgeInsets,
  GestureDetector,
  MaterialPageRoute,
  Icon,
  ListTile,
  Container,
  Theme,
  Colors,
  Navigator,
  IconData,
} from '@mxflutter/mxflutter-widgets/material';

let widgetsName =
  'AbsorbPointer,AlertDialog,Align,AnimatedBuilder,AnimatedContainer,AnimatedCrossFade,AnimatedDefaultTextStyle,AnimatedListState,AnimatedModalBarrier,AnimatedOpacity,AnimatedPhysicalModel,AnimatedPositioned,AnimatedSize,AnimatedWidget,AnimatedWidgetBaseState,Appbar,AspectRatio,AssetBundle,BackdropFilter,Baseline,BottomNavigationBar,BottomSheet,ButtonBar,Card,Center,Checkbox,Chip,CircularProgressIndicator,ClipOval,ClipPath,ClipRect,Column,ConstrainedBox,Container,CupertinoActionSheet,CupertinoActivityIndicator,CupertinoAlertDialog,CupertinoButton,CupertinoContextMenu,CupertinoDatePicker,CupertinoDialog,CupertinoDialogAction,CupertinoFullscreenDialogTransition,CupertinoNavigationBar,CupertinoPageScaffold,CupertinoPageTransition,CupertinoPicker,CupertinoPopupSurface,CupertinoScrollbar,CupertinoSegmentedControl,CupertinoSlider,CupertinoSlidingSegmentedControl,CupertinoSwitch,CupertinoTabBar,CupertinoTabScaffold,CupertinoTabView,CupertinoTextField,CupertinoTimerPicker,CustomMultiChildLayout,CustomPaint,CustomScrollView,CustomSingleChildLayout,DataTable,Date & Time Pickers,DecoratedBox,DecoratedBoxTransition,DefaultTextStyle,Dismissible,Divider,DragTarget,Draggable,Drawer,DropdownButton,ExcludeSemantics,Expanded,ExpansionPanel,FadeTransition,FittedBox,FlatButton,FloatingActionButton,Flow,FlutterLogo,Form,FormField,FractionalTranslation,FractionallySizedBox,FutureBuilder,GestureDetector,GridView,Hero,Icon,IconButton,IgnorePointer,Image,IndexedStack,IntrinsicHeight,IntrinsicWidth,LayoutBuilder,LimitedBox,LinearProgressIndicator,ListBody,ListTile,ListView,LongPressDraggable,MaterialApp,MediaQuery,MergeSemantics,Navigator,NestedScrollView,NotificationListener,Offstage,Opacity,OutlineButton,OverflowBox,Padding,PageView,Placeholder,PopupMenuButton,PositionedTransition,Radio,RaisedButton,RawImage,RawKeyboardListener,RefreshIndicator,RichText,RotatedBox,RotationTransition,Row,Scaffold,ScaleTransition,ScrollConfiguration,Scrollable,Scrollbar,Semantics,SimpleDialog,SingleChildScrollView,SizeTransition,SizedBox,SizedOverflowBox,SlideTransition,Slider,SliverAppBar,SnackBar,Stack,Stepper,StreamBuilder,Switch,TabBar,TabBarView,Table,Text,TextField,Theme,Tooltip,Transform,WidgetsApp,Wrap';

class WidgetExamplesPage extends MXJSStatelessWidget {
  private widgetsArray: any;
  private indexArray: any;
  private scrollController: any;
  constructor() {
    super('WidgetExamplesPage');
    this.widgetsArray = widgetsName.split(',');
    this.indexArray = this.calcIndexArray(this.widgetsArray);
    this.scrollController = new ScrollController();
  }

  calcIndexArray(widgetsArray) {
    let tempSet = new Set();
    for (let i = 1; i < widgetsArray.length; ++i) {
      let wName = widgetsArray[i];
      tempSet.add(wName.substring(0, 1));
    }

    return Array.from(tempSet);
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Widget Examples'),
      }),
      body: new Stack({
        children: [
          new Scrollbar({
            child: ListView.builder({
              controller: this.scrollController,
              itemCount: this.widgetsArray.length,
              itemBuilder: function (context, index) {
                return new ListViewItem(this.widgetsArray[index]);
              }.bind(this),
            }),
          }),
          new Align({
            alignment: Alignment.centerRight, //new FractionalOffset(1.0, 0.5),
            child: new SizedBox({
              width: 25,
              child: new Padding({
                padding: EdgeInsets.only({ top: 20 }),
                child: ListView.builder({
                  itemCount: this.indexArray.length,
                  itemBuilder: function (context, index) {
                    let t = this.indexArray[index];
                    return new GestureDetector({
                      onTap: function () {
                        this.onIndexTap(index);
                      }.bind(this),
                      child: new Text(t),
                    });
                  }.bind(this),
                }),
              }),
            }),
          }),
        ],
      }),
    });
    return widget;
  }

  onIndexTap(index) {
    let prefix = this.indexArray[index];
    let count = 0;
    for (; count < this.widgetsArray.length; ++count) {
      if (this.widgetsArray[count].substring(0, 1) == prefix) {
        break;
      }
    }

    let h = count * 45;
    this.scrollController.jumpTo(h);
  }
}

class ListViewItem extends MXJSStatelessWidget {
  private title: string;
  private subtitle: string;

  constructor(title) {
    super('ListViewItem');
    this.title = title;
    this.subtitle = '';
  }

  build(context) {
    let title = this.title;
    let prefix = title.substring(0, 1);
    var example = null;

    try {
      example = require('./' + prefix + '/' + title + '.ts');
    } catch (error) {
      console.log(error);
    }

    let c = Theme.of(context).primaryColor;

    if (!example) {
      c = Colors.grey;
      title = this.title + ' (未完成示例)';
    }

    return new Container({
      height: 45,
      child: new ListTile({
        title: new Text(title),
        leading: new Icon(new IconData(0xe06d, { fontFamily: 'MaterialIcons' }), { color: c }),
        onTap: function () {
          Navigator.push(
            context,
            new MaterialPageRoute({
              builder: function (context) {
                return new example.ExampleWidget();
              },
            }),
          );
        }.bind(this),
      }),
    });
  }
}

export { WidgetExamplesPage };
