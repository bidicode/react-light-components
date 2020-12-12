import React from 'react';

import { Bootstrap, Button, Modal } from '../../../src';
import TextInputTest from './TextInputTest';

const { Col, Row } = Bootstrap;

type ModalSize = 'small' | 'medium' | 'large';

interface State {
  isVisible: boolean;
  size: ModalSize;
}

export default class ModalTest extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      size: 'small'
    };
    this.showModal = this.showModal.bind(this);
  }

  public showModal(isVisible: boolean, size: ModalSize = 'small') {
    this.setState({
      isVisible,
      size
    });
  }

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={4}>
            <Button
              onClick={() => this.showModal(true, 'small')}
            >
              Show Modal (small)
            </Button>
          </Col>
          <Col lg={4}>
            <Button
              onClick={() => this.showModal(true, 'medium')}
            >
              Show Modal (medium)
            </Button>
          </Col>
          <Col lg={4}>
            <Button
              onClick={() => this.showModal(true, 'large')}
            >
              Show Modal (large)
            </Button>
          </Col>
        </Row>
        <Modal
          isVisible={this.state.isVisible}
          className={`rlight-modal-content-${this.state.size}`}
        >
          <Row>
            <Col>
              <TextInputTest col={12}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => this.showModal(false)}
              >
                Close
              </Button>
            </Col>
          </Row>
        </Modal>
      </React.Fragment>
    );
  }
}
