import React from 'react';

import { Bootstrap, Checkbox } from '../../../src';

const { Col, Row } = Bootstrap;

interface State {
  value: boolean;
}

export default class CheckBoxTest extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
    this.onChange = this.onChange.bind(this);
  }

  public onChange(value: boolean) {
    this.setState({
      value
    });
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col col={6}>
            <Checkbox
              label="Checked?"
              text={this.state.value ? 'checked' : 'not checked'}
              isRequired={true}
              checked={this.state.value}
              onChange={this.onChange}
            />
          </Col>
          <Col col={6}>
            <Checkbox
              text="Am I checked?"
              isEmptyLabel={true}
              checked={this.state.value}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
