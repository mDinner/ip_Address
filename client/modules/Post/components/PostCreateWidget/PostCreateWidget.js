import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    const categoryRef = this.refs.category;
    const ratingRef = this.refs.rating;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value, categoryRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />
          <input placeholder={this.props.intl.messages.category} className={styles['form-field']} ref="category" />
          <label>Rating</label>
          <input type="number" ref="rating" />
          <label>Has Rating</label>
          <input type="checkbox" ref="hasRating" />
          <label>Others Can Rate</label>
          <input type="checkbox" ref="othersCanRate" />
          <label>Others Can Comment</label>
          <input type="checkbox" ref="othersCanComment" />
          <label>Comments Have Ratings</label>
          <input type="checkbox" ref="commentsHaveRatings" />
          <label>Is Poll</label>
          <input type="checkbox" ref="isPoll" />
          <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} ref="content" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
