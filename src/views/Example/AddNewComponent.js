import React from "react";


class AddNewComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleOnchangeInputTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnchangeInputSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleOnclickButton = () => {
        if (!this.state.title || !this.state.salary) {
            alert("Bạn nhập thiếu tham số bắt buộc")
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }


    render() {

        return (

            <form >
                <label for="fname">Job's title</label><br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleOnchangeInputTitle(event)}
                /><br />
                <label for="lname">salary</label><br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleOnchangeInputSalary(event)}
                /><br></br>
                <button type="button"
                    onClick={() => this.handleOnclickButton()}
                >Submit</button>

            </form>

        )
    }
}

export default AddNewComponent