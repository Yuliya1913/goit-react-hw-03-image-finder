import { Component } from 'react';
import css from './Modal.module.css';

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
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.active} alt="phot" />
          {this.props.children}
        </div>
      </div>
    );
  }
}
