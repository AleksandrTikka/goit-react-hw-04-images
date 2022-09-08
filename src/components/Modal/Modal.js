import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEscDown);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEscDown);
  }

  handleKeyEscDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      console.log('esc был нажат');
    }
  };

  handleBackdropClick = e => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
      console.log('клик в бекдроп');
    }
  };
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          {/* <img src="" alt="" /> */}
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
