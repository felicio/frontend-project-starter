import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Topic = ({ match }) => (
  <div>
    <Helmet title={match.params.topicId} />
    <h2>{match.params.topicId}</h2>
  </div>
)

Topic.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Topic
