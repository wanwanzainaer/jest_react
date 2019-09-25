// import React, { useEffect, useCallback } from "react";
// import { connect } from "react-redux";

// const mapStateToProps = ({ auth }) => {
//   return { auth };
// };

// const composeComponent = ChildComponent => props => {
//   const shouldNavigateAway = useCallback(
//     auth => {
//       if (!auth) {
//         props.history.push("/");
//       }
//     },
//     [props.history]
//   );
//   useEffect(shouldNavigateAway(props.auth), [
//     props.auth,
//     shouldNavigateAway
//   ]);

//   return <ChildComponent {...props} />;
// };

// export default composeComponent;

import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

// save function component
// import React, { useEffect, useCallback } from "react";
// import { connect } from "react-redux";

// function composeComponent(ChildComponent) {
//   function compose(props) {
//     const shouldNavigateAway = useCallback(
//       auth => {
//         if (!auth) {
//           props.history.push("/");
//         }
//       },
//       [props.history]
//     );
//     useEffect(shouldNavigateAway(props.auth), [
//       props.auth,
//       shouldNavigateAway
//     ]);

//     return <ChildComponent {...props} />;
//   }
//   const mapStateToProps = ({ auth }) => {
//     return { auth };
//   };
//   return connect(mapStateToProps)(compose);
// }

// export default composeComponent;
