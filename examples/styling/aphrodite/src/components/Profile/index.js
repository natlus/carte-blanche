import React, { Component } from 'react';
import { css } from 'aphrodite';

import Button from '../Button';

import styles from './styles';

class Profile extends Component {
  static propTypes = {
    avatarUrl: React.PropTypes.string.isRequired,
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string,
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.string,
  };

  onAddFriend = () => {
    alert(`Add @${this.props.username} as a friend`); // eslint-disable-line no-alert
  };

  render() {
    return (
      <div className={css(styles.card)}>
        <div className={css(styles.row)}>
          <img
            className={css(styles.avatar)}
            src={this.props.avatarUrl}
            alt={`${this.props.firstName} ${this.props.lastName}`}
          />
          <div className={css(styles.information)}>
            <h1 className={css(styles.name)}>
              {this.props.firstName}{(this.props.lastName) ? (` ${this.props.lastName}`) : null}
            </h1>
            <h2 className={css(styles.username)}>@{this.props.username}</h2>
          </div>
        </div>
        <p className={css(styles.paragraph)}>{this.props.bio}</p>
        <div className={css(styles.buttonWrapper)}>
          <Button type="secondary" onClick={this.onAddFriend}>
            Add friend!
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
