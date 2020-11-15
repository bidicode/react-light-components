import React from 'react';

import { Bootstrap, Button } from './../../src';

const { Col, Row } = Bootstrap;

interface Props {
  switchThemePath: string;
}

export default class ButtonTest extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.switchTheme = this.switchTheme.bind(this);
  }

  public switchTheme() {
    location.href = this.props.switchThemePath;
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col col={3}>
            <Button disabled={false} variant="primary" onClick={this.switchTheme}>Switch Theme</Button>
          </Col>
          <Col col={3}>
            <Button disabled={true} variant="primary" onClick={() => alert('Hello World')}>Button</Button>
          </Col>
        </Row>
        <Row>
          <Col col={3}>
            <Button disabled={false} variant="secondary" onClick={() => alert('Hello World')}>Button</Button>
          </Col>
          <Col col={3}>
            <Button disabled={true} variant="secondary" onClick={() => alert('Hello World')}>Button</Button>
          </Col>
          <Col col={3}>
            <Button isCompact={true} onClick={() => alert('Hello World')}>Button</Button>
          </Col>
          <Col col={3}>
            <Button disabled={true} isCompact={true} onClick={() => alert('Hello World')}>Button</Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
