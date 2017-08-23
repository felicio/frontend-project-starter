import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../../data/users/actions'
import dummyData from './dummyData'


class UserList extends PureComponent {
  componentWillMount() {
    if (this.props.loaded) return


    this.props.fetchUsers()
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.3) {
        this.props.fetchUsersSuccess(dummyData)
      }
      else {
        this.props.fetchUsersFailure('posralo se to')
      }
    }, 2000)
  }

  render() {
    const { users, loading, error } = this.props
    if (error) return <div>{error}</div>

    if (loading) return <div>loading</div>

    return (
      <ul>
        {users.map(user =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
    )
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
  error: state.users.error,
  users: state.users.data,
  loading: state.users.loading,
  loaded: state.users.loaded,
})

const mapDispatchToProps = {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
