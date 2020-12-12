import React from 'react';

import { Bootstrap } from '../../../src';
import ButtonTest from './ButtonTest';
import CheckBoxTest from './CheckBoxTest';
import ModalTest from './ModalTest';
import TextInputTest from './TextInputTest';

const { Col, Row } = Bootstrap;

interface Props {
  theme: string;
}

export default class Test extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
        <h1>React Light Components ({this.props.theme} theme)</h1>
        <div className="container-fluid">
          <TextInputTest col={4}/>
          <br/>
          <ButtonTest switchThemePath={this.props.theme === 'Default' ? '/#/themes/dracula' : '/#/'}/>
          <br/>
          <CheckBoxTest/>
          <Row>
            <Col col={12}>
              <ModalTest/>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
