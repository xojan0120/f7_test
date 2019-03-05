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
  render() {
    return (
      <Page>
        <Link sortableToggle=".sortable">Toggle</Link>
        <List sortable>
          <ListItem
            title="1 Jenna Smith"
            after="CEO">
            <Icon icon="icon-f7" slot="media"></Icon>
          </ListItem>
          <ListItem
            title="2 John Doe"
            after="Director">
            <Icon icon="icon-f7" slot="media"></Icon>
          </ListItem>
        </List>
      </Page>
    )
  }
};
