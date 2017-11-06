import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import  { selectBook } from '../actions/index'


class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key = {book.title}
                    onClick = {() => this.props.selectBook(book)}
                    className = "list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render(){

        return (
            <ul className = "list-group-item col-sm-4">
                {this.renderList()}
            </ul>

        );

    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as propps inside of BookList
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container

function mapDispatchToProps(dispatch) {
    //whenever selectBook is called the results should be passed to all of our reducers
    return bindActionCreators({selectBook:selectBook}, dispatch);

}

//promotes BookList from component to container it need sto know about the new dispatch method, selectBook. Make it available as props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);