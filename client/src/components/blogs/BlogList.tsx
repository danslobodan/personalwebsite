import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';
import { ShowModalButton } from '../form/modal';
import BlogItem from './BlogItem';
import BlogDelete from './BlogDelete';
import BlogEdit from './BlogEdit';
import BlogCreate from './BlogCreate';
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

    renderAdmin = (id: string) => {
        if (this.props.currentUser) {
            return (
                <div className='d-flex flex-row-reverse'>
                    <ShowModalButton
                        text='Delete'
                        buttonType='danger'
                        onClick={() =>
                            this.setState({
                                modal: (
                                    <BlogDelete blog={this.props.blogs[id]} />
                                ),
                            })
                        }
                    />
                    <ShowModalButton
                        text='Edit'
                        buttonType='primary'
                        onClick={() =>
                            this.setState({
                                modal: <BlogEdit blog={this.props.blogs[id]} />,
                            })
                        }
                    />
                </div>
            );
        }
    };

    renderList = () => {
        return Object.values(this.props.blogs).map((blog) => {
            return (
                <BlogItem key={blog.id} blog={blog}>
                    {this.renderAdmin(blog.id)}
                </BlogItem>
            );
        });
    };

    renderCreate = () => {
        if (this.props.currentUser) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <ShowModalButton
                        text='Create Blog'
                        buttonType='primary'
                        onClick={() =>
                            this.setState({
                                modal: <BlogCreate />,
                            })
                        }
                    />
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div className='row mb-2'>{this.renderList()}</div>
                {this.renderCreate()}
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
