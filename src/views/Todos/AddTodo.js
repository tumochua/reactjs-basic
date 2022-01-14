import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: ''
        }
    }

    handleListTodoOnchange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnClickBtnListTodo = () => {
        if (!this.state.title) {
            toast.error('Bạn nhập thiếu tham số')
            return
        }
        this.props.AddNewTodo({
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }


    render() {

        return (

            <div className="add-todo">
                <input type='text' value={this.state.title}
                    onChange={(event) => this.handleListTodoOnchange(event)}
                />
                <button type="button" onClick={() => this.handleOnClickBtnListTodo()}>
                    Add
                </button>
            </div>

        )
    }
}

export default AddTodo