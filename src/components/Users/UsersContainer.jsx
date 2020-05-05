import React from "react";
import connect from "react-redux/lib/connect/connect";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress,  getUserS
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Loader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUserS(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUserS(pageNumber,this.props.pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/>  : null}<Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}



                 />
                 </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage,
            toggleFollowingProgress,
            getUserS
        }
    )
)(UsersAPIComponent)