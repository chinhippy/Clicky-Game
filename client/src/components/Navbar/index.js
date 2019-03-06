import React from 'react'
import './style.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar col-xs-12 col-xs-12 col-md-12 text right">
        {/* COL 1 */}
        <div className="col-xs-4" />
        {/* COl 2 */}
        <div className="answer col-xs-4" />
        {/* COl 3 */}
        <div className="score col-xs-4">
          Score: {this.props.score} 
        </div>
      </div>
    );
  }
}

export default Navbar