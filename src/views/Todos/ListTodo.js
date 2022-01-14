import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';




class ListTodo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            listTodos: [
                { id: '1', title: 'Doing homeword' },
                { id: '2', title: 'Making videos' },
                { id: '3', title: 'Fixing bugs' },
                { id: '4', title: 'tumochua' },
            ],
            editTodo: {}

        }
    }


    AddNewTodo = (todo) => {
        // alert('click me')
        this.setState({
            listTodos: [... this.state.listTodos, todo]
        })
        toast.success("Tạo thành công list todo");
    }


    handeDeleteTodo = (todo) => {
        let answer = window.confirm("bạn có chắc muốn xóa");
        if (answer) {
            let currenJob = this.state.listTodos
            currenJob = currenJob.filter(item => item.id !== todo.id)
            this.setState({
                listTodos: currenJob
            })
            toast.success('đã xóa thành công')
        }
        else {
            //some code
        }

    }

    handleOnclickEdit = (todo) => {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id)
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('sửa thành công')
            return
        }


        this.setState({
            editTodo: todo
        })
    }

    handleOnchanInputEdit = (event) => {
        let eidtTodoCopy = { ...this.state.editTodo }
        eidtTodoCopy.title = event.target.value
        this.setState({
            editTodo: eidtTodoCopy
        })
    }




    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (

            <div className="list-todo-container">
                <AddTodo
                    AddNewTodo={this.AddNewTodo}
                />
                <div className="list-todo-content">
                    <div className="todo-child">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} -
                                                        <input value={editTodo.title}
                                                            onChange={(event) => this.handleOnchanInputEdit(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className="edit-list-todo" onClick={() => this.handleOnclickEdit(item)}>
                                            {isEmptyObj === false &&
                                                editTodo.id === item.id ? "Save" : "Edit"
                                            }
                                        </button>
                                        <button onClick={() => this.handeDeleteTodo(item)}>Delete</button>
                                    </div>

                                )

                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default ListTodo