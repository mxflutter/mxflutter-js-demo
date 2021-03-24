/* eslint-disable */
import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import {
  Container,
  Scaffold,
  AppBar,
  ListView,
  Stepper,
  Step,
  StepState,
  Text,
} from '@mxflutter/mxflutter-widgets/material';

class ExampleWidget extends MXJSStatefulWidget {
  constructor() {
    super('ExampleWidget');
  }

  createState() {
    return new PageExampleTabbar();
  }
}

class PageExampleTabbar extends MXJSWidgetState {
  private _currentStep: number;
  constructor() {
    super();
    this._currentStep = 0;
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Stepper'),
      }),
      body: new ListView({
        children: [
          new Stepper({
            currentStep: this._currentStep,
            onStepTapped: function (value) {
              this.setState(
                function () {
                  this._currentStep = value;
                }.bind(this),
              );
            }.bind(this),
            onStepCancel: function () {},
            onStepContinue: function () {},
            steps: [
              new Step({
                title: new Text('待办事项1'),
                content: new Text('待办事项1的内容'),
              }),
              new Step({
                title: new Text('待办事项2'),
                subtitle: new Text('概述'),
                content: new Text('待办事项2的详细内容'),
              }),
              new Step({
                title: new Text('已完成的待办事项'),
                content: new Text('这条待办事项已被完成'),
                state: StepState.complete,
              }),
              new Step({
                title: new Text('有错误的待办事项'),
                content: new Text('这条待办事项貌似存在一些错误'),
                state: StepState.error,
              }),
              new Step({
                title: new Text('不可用的待办事项'),
                subtitle: new Text('这条待办事项已经过期或无法完成'),
                content: new Container(),
                state: StepState.disabled,
              }),
            ],
          }),
        ],
      }),
    });
    return widget;
  }
}

export { ExampleWidget };
