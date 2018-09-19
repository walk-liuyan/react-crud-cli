import React, { Component, PropTypes } from 'react';
import { Card, Row, Layout, Icon, Button, Table } from 'antd';
import { connect } from 'dva-react-router-3';
import Immutable from 'immutable';

@connect(state => ({
  [name]: state.[name],
}))
export default class [name]Page extends Component {
  static propTypes = {
    blog: PropTypes.instanceOf(Immutable.Map),
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { [name] } = this.props;
    const [name] = [
      {
        title: '文章标题',
        updatedBy: '2017-09-22',
        updatedAt: 'walk',
      }
    ];

    const initColumn = [{
      title: '文章标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '更新人',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
    }, {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    }, {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      render: (text, record) => (
        <div>
          <a href={`#/[name]-update/${record.id}/edit`}><Icon type="edit" /></a>
          <a href={`#/[name]/${record.id}`}><Icon type="book" /></a>
        </div>
      ),
    }];
    return (
      <Layout>
        <Layout.Content>
          <Row>
            <Card noHovering>
              <Button type="primary" onClick={() => { location.href = '#/[name]-update/add'; }}>新增</Button>
              <Table
                id="[name]List"
                rowKey="id"
                columns={initColumn}
                dataSource={[name]} />
            </Card>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}
