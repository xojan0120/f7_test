import React from 'react';
import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
  Button,
  BlockTitle,
  Row,
  Col,
  Swiper,
  SwiperSlide,
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes,
  };

  return (
    <App params={f7params}>
      {/* Swiper */}
      <Swiper init={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      {/* Button */}
      <BlockTitle>Fill Buttons</BlockTitle>
      <Block>
        <Row>
          <Col>
            <Button fill>Button</Button>
          </Col>
          <Col>
            <Button fill>Button</Button>
          </Col>
        </Row>
      </Block>

      {/* Statusbar */}
      <Statusbar />

      {/* Left Panel */}
      <Panel left cover themeDark>
        <View url="/panel-left/" />
      </Panel>

      {/* Right Panel */}
      <Panel right reveal themeDark>
        <View url="/panel-right/"/>
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="safe-areas"/>

      {/* Popup */}
      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
          </Page>
        </View>
      </Popup>

      {/* Login Screen */}
      <LoginScreen id="login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                label="Username"
                name="username"
                placeholder="Username"
                type="text"
              />
              <ListInput
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
              />
            </List>
            <List>
              <ListButton title="Sign In" loginScreenClose></ListButton>
              <BlockFooter>
                <p>Click Sign In to close Login Screen</p>
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  );
};
