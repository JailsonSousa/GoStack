import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, time }) => (
  <div className="post-header">
    <img className="avatar" src={avatar} alt="avatar" />
    <div className="text-container-header-post">
      <strong className="nameUser">
        {name}
      </strong>
      <span className="timePost">
        {time}
      </span>
    </div>
  </div>
);

PostHeader.PropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
