import React from 'react';
import { Bootstrap, CurrencyInput, TextInput } from '../../../src';

const { Col, Row } = Bootstrap;

interface Props {
  col: number;
}

interface State {
  name: string;
  amount: number;
  currency: string;
  locale: string;
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
      amount: 10,
      currency: 'USD',
      locale: 'en'
    };
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col col={this.props.col}>
            <TextInput
              id="currency-code-id"
              label="Currency Code"
              name="currency-code"
              placeholder="The currency code (e.g.: BRL)"
              value={this.state.currency}
              onChange={(value) => this.setState({ currency: value })}
              isRequired={true}
            />
          </Col>
          <Col col={this.props.col}>
            <TextInput
              id="locale-id"
              label="Locale"
              name="locale"
              placeholder="The locale based on your region (e.g.: pt-br)"
              value={this.state.locale}
              onChange={(value) => this.setState({ locale: value })}
              isRequired={true}
            />
          </Col>
        </Row>
        <Row>
          <Col col={this.props.col}>
            <CurrencyInput
              id="currency-id"
              label="Currency"
              name="currency"
              currency={this.state.currency}
              locale={this.state.locale}
              placeholder="Currency"
              amount={this.state.amount}
              onChange={({ amount }) => this.setState({ amount })}
              isRequired={true}
            />
          </Col>
          <Col col={this.props.col}>
            <CurrencyInput
              id="currency-disabled-id"
              label="Currency Disabled"
              name="currency-disabled"
              currency={this.state.currency}
              locale={this.state.locale}
              placeholder="Currency Disabled"
              amount={this.state.amount}
              disabled={true}
            />
          </Col>
        </Row>
        <Row>
          <Col col={this.props.col}/>
        </Row>
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
