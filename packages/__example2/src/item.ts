/* eslint-disable */
import { MXJSBaseWidget, MXJSFlutterApp, StatelessWidget, MXJSStatefulWidget, State } from '@mxflutter/mxflutter'
import {
  Container,
  Expanded,
  Colors,
  Border,
  Text,
  Icon,
  Icons,
  EdgeInsets,
  BoxDecoration,
  TextField,
  TextEditingController,
  TextAlign,
  TextStyle,
  TextOverflow,
  Row,
  Padding,
  IconButton,
  Theme,
  GestureDetector,
  Column,
} from '@mxflutter/mxflutter-widgets/material'

class TodoItem extends MXJSStatefulWidget {
  public item: any;
  public callback: any;
  public deleteCallback: any;
  public editCallback: any;

  public constructor({ item, callback, deleteCallback, editCallback }) {
    super("TodoItem");
    this.item = item;
    this.callback = callback;
    this.deleteCallback = deleteCallback;
    this.editCallback = editCallback;
  }

  public createState() {
    return new TodoItemState();
  }
}

class TodoItemState extends State {
  public editTextValue: any;
  public isEdit: any;
  public widget: TodoItem;

  public constructor() {
    super();
    this.editTextValue = '';
    this.isEdit = false;
  }

  public build(context) {
    const textColor = this.widget.item.isDone ? Colors.grey : Theme.of(context).primaryColorDark;

    return new Container({
      padding: EdgeInsets.all(20),
      child: new Container({
        decoration: new BoxDecoration({
          border: Border.all({ color: Colors.grey, width: 0.5 }),
          // borderRadius: BorderRadius.all(Radius.circular(8)),
        }),
        padding: EdgeInsets.all(8),
        child: new Row({
          children: [
            // new Checkbox({
            //   value: this.widget.item.isDone,
            //   activeColor: Colors.grey,
            //   onChanged: (value) => {
            //     this.widget.callback(value);
            //   },
            // })
            new IconButton({
              tooltip: '完成',
              icon: new Icon(Icons.done),
              color: textColor,
              onPressed: () => {
                this.widget.callback(!this.widget.item.isDone);
              }
            }),
            new Padding({
              padding: EdgeInsets.only({ left: 10 })
            }),
            this.buildNameWidget(textColor),
            new IconButton({
              tooltip: '删除',
              icon: new Icon(Icons.delete_forever),
              color: Colors.grey,
              onPressed: () => {
                this.widget.deleteCallback(this.widget.item);
              }
            }),
          ]
        })
      })
    })
  }

  public buildNameWidget(textColor) {
    if (this.isEdit) {
      return new Expanded({
        child: new Container({
          width: 200,
          child: new TextField({
            controller: new TextEditingController({
              text: this.widget.item.name
            }),
            onChanged: (value) => {
              this.editTextValue = value;
            },
            onSubmitted: () => {
              this.widget.editCallback(this.editTextValue);

              this.setState(() => {
                this.isEdit = false;
              });
            }
          })
        })
      })
    }

    return new Expanded({
      child: new GestureDetector({
        onTap: () => {
          this.setState(() => {
            this.isEdit = true;
          });
        },
        child: new Text(this.widget.item.name, {
          softWrap: true,
          overflow: TextOverflow.ellipsis,
          maxLines: 2,
          textAlign: TextAlign.left,
          style: new TextStyle({
            fontSize: 20,
            color: textColor,
          }),
        })
      })
    });
  }
}

export {
  TodoItem
}
