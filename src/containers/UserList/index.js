import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../../data/users/actions'
import {
  selectError,
  selectUsers,
  selectLoading,
  selectLoaded,
} from '../../data/users/selectors.js'
import dummyData from './dummyData'
import * as API from '../../api'

class UserList extends PureComponent {
  componentWillMount() {
    if (this.props.loaded) {
      return
    }

    API.getAllPeople().then(result => this.props.fetchUsersSuccess(result.results))
  }

  render() {
    const { users, loading, error } = this.props
    if (error) {
      return <div>{error}</div>
    }

    if (loading) {
      return <div>loading</div>
    }

    return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
  }
}

UserList.propTypes = {
  error: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired,
  fetchUsersFailure: PropTypes.func.isRequired,
  fetchUsersSuccess: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  error: selectError(state),
  users: selectUsers(state),
  loading: selectLoading(state),
  loaded: selectLoaded(state),
})

const mapDispatchToProps = {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
