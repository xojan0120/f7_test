import React, { Component } from 'react';
import {
  Page,
  PageContent,
  List,
  ListItem,
  Icon,
  Link,
} from 'framework7-react';
//import styles from '../css/AppTest2.module.scss';
export default class SortableList extends Component {
  constructor(props) {
    super(props);
    this.state = { result: '' };
    this.onSort = this.onSort.bind(this);
  }
  onSort(event, indexes) {
    console.log("sort!");

    const result = JSON.stringify(indexes)
    // event.targetで動かしたListItem要素がとれる
    const title = event.target.querySelector(".item-title").textContent;
    this.setState({ result: `${title} is ${result}` })
  }

  render() {
    return (
      <React.Fragment>
        <Link sortableToggle=".sortable">Toggle</Link>
        <List hoge="hhh" sortable sortableEnabled onSortableSort={this.onSort}>
          <ListItem
            title="0 Jenna Smith"
            after="CEO">
            <Icon icon="icon-f7" slot="media"></Icon>
          </ListItem>
          <ListItem
            title="1 John Doe"
            after="Director">
            <Icon icon="icon-f7" slot="media"></Icon>
          </ListItem>
          <ListItem
            title="2 Agent Doe"
            after="Director">
            <Icon icon="icon-f7" slot="media"></Icon>
          </ListItem>
        </List>
        <div>
          {this.state.result}
        </div>
      </React.Fragment>
    )
  }
};
