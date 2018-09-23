import React, { Component, PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'dva-react-router-3';
import Immutable from 'immutable';

const { Item: FormItem } = Form;
const formItemLayout = {
  labelCol: {
    xs: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 19 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 19,
      offset: 3,
    },
  },
};

@connect(state => ({
  [name]: state.[name],
}))
class Update[name] extends Component {
  static propTypes = {
    optType: PropTypes.string,
    handleAdd: PropTypes.func,
    handleUpdate: PropTypes.func,
    item: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
    [name]: PropTypes.instanceOf(Immutable.Map),
  };

  constructor(props) {
    super(props);
    this.renderOptBtn = this.renderOptBtn.bind(this);
    this.add[name] = this.add[name].bind(this);
    this.edit[name] = this.edit[name].bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.[name] !== this.props.[name]) {
      this.props.form.resetFields();
    }
  }

  edit[name]() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let [name] = {};
        this.props.handleUpdate([name]);
      }
    });
  }

  add[name]() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let [name] = {};
        this.props.handleAdd([name]);
      }
    });
  }

  renderOptBtn() {
    if (this.props.optType === 'add') {
      return (
        <div>
          <Button type="primary" htmlType="submit" onClick={() => this.add[name]()}>新增</Button>
          <Button type="primary" htmlType="submit" onClick={() => { location.href = '#/'; }}>返回</Button>
        </div>
      );
    } else {
      return (
        <div>
          <Button type="primary" htmlType="submit" onClick={() => this.edit[name]()}>保存</Button>
          <Button type="primary" htmlType="submit" onClick={() => { location.href = '#/'; }}>返回</Button>
        </div>
      );
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { item } = this.props;
   
    return (
        <Form>
          <FormItem
            {...formItemLayout}
            label="[name]"
          >
            {getFieldDecorator('title', {
              initialValue: item.title,
              rules: [
                { required: true, message: '' },
              ],
            })(
              <Input autoComplete="off" />,
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {
              this.renderOptBtn()
            }
          </FormItem>
        </Form>
    );
  }
}

const Update[name]Form = Form.create()(Update[name]);

export default Update[name]Form;
