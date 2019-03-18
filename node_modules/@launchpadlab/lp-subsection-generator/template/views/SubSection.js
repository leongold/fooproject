import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function %SubSection% () {
  return (
    <div> This is the %SubSection% view! </div>
  )
}

%SubSection%.propTypes = propTypes

%SubSection%.defaultProps = defaultProps

function mapStateToProps () {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(%SubSection%)
