import React from 'react';
import { Bootstrap, TextInput } from '../../../src';

const { Col, Row } = Bootstrap;

interface Props {
  col: number;
}

interface State {
  name: string;
  password: string;
  quantity: string;
}

export default class TextInputTest extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      quantity: '',
    };
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col col={this.props.col}>
            <TextInput
              id="name-id"
              label="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(value) => this.setState({ name: value })}
              isRequired={true}
            />
          </Col>
          <Col col={this.props.col}>
            <TextInput
              id="password-id"
              isEmptyLabel={true}
              name="password"
              placeholder="Password"
              type="password"
              isRequired={true}
              value={this.state.password}
              onChange={(value) => this.setState({ password: value })}
            />
          </Col>
          <Col col={this.props.col}>
            <TextInput
              label="Quantity"
              name="quantity"
              type="number"
              placeholder={'Quantity'}
              disabled={false}
              value={this.state.quantity}
              onChange={(value) => this.setState({ quantity: value })}
            />
          </Col>
        </Row>
        <Row>
          <Col col={this.props.col}>
            {this.state.name}
          </Col>
          <Col col={this.props.col}>
            {this.state.password}
          </Col>
          <Col col={this.props.col}>
            {this.state.quantity}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
