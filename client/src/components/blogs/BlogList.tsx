import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';
import BlogItem from './BlogItem';
import { User } from '../../models/User';

interface DispatchProps {
    getCurrentUser(): void;
    getBlogs(): void;
}

interface StateProps {
    blogs: { [id: string]: Blog };
    currentUser: User | null;
}

interface State {
    modal: JSX.Element;
}

const initialState = {
    modal: <div></div>,
};

type BlogListProps = DispatchProps & StateProps;

class BlogList extends React.Component<BlogListProps, State, {}> {
    state = initialState;

    componentDidMount() {
        this.props.getBlogs();
    }

    renderList = () => {
        return Object.values(this.props.blogs).map((blog) => {
            return <BlogItem key={blog.id} blog={blog} />;
        });
    };

    render() {
        return (
            <div>
                <div className='row mb-2'>{this.renderList()}</div>
                {this.state.modal}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { auth, blogs } = state;
    return {
        blogs,
        currentUser: auth.currentUser,
    };
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    {
        getCurrentUser,
        getBlogs,
    }
)(BlogList);
