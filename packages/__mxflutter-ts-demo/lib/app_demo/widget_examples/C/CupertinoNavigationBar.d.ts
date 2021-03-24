import { MXJSStatefulWidget, MXJSWidgetState } from '@mxflutter/mxflutter';
import { CupertinoPageScaffold, CupertinoNavigationBar } from '@mxflutter/mxflutter-widgets/cupertino';
declare class ExampleWidget extends MXJSStatefulWidget {
    constructor();
    createState(): PageExampleCupertinoNavigationBar;
}
declare class PageExampleCupertinoNavigationBar extends MXJSWidgetState {
    constructor();
    _normalCupertinoNavigationBar(): CupertinoNavigationBar;
    _changeLeadingCupertinoNavigationBar(): CupertinoNavigationBar;
    _trailingCupertinoNavigationBar(): CupertinoNavigationBar;
    _borderCupertinoNavigationBar(): CupertinoNavigationBar;
    _backgroundCupertinoNavigationBar(): CupertinoNavigationBar;
    _paddingCupertinoNavigationBar(): CupertinoNavigationBar;
    _actionsColorCupertinoNavigationBar(): CupertinoNavigationBar;
    build(context: any): CupertinoPageScaffold;
}
export { ExampleWidget };
