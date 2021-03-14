import React from 'react';
import { connect } from 'react-redux';
import { getBlogs, RootState } from '../../state';
import { Blog } from '../../models/Blog';
import BlogItem from './BlogItem';
import BlogDelete from './BlogDelete';
import ShowModalButton from '../form/modal/ShowModalButton';
import BlogEdit from './BlogEdit';
import BlogCreate from './BlogCreate';

interface DispatchProps {
    getBlogs(): void;
}

interface StateProps {
    blogs: { [id: string]: Blog };
    isAdmin: boolean;
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
        if (this.props.isAdmin) {
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
            return <BlogItem blog={blog}>{this.renderAdmin(blog.id)}</BlogItem>;
        });
    };

    renderCreate = () => {
        if (this.props.isAdmin) {
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
            <div className='container'>
                <div className='row mb-2'>{this.renderList()}</div>
                {this.renderCreate()}
                {this.state.modal}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { auth, blogs } = state;
    const { isAdmin } = auth;
    return {
        isAdmin: true,
        blogs,
    };
};

export default connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    {
        getBlogs,
    }
)(BlogList);
