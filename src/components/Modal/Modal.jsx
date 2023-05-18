import { Component } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
const modalRootRef = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleESC);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleESC);
  }
  handleESC = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={this.props.active} alt="phot" />
          <button
            className={css.modal_button}
            type="button"
            onClick={() => this.props.onClick()}
          >
            Close image
          </button>
        </div>
      </div>,
      modalRootRef
    );
  }
}
