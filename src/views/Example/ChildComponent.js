import React from "react";


class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDeleteJo = (job) => {
        this.props.handleDeleteJob(job)
    }


    render() {
        let { arrJobs } = this.props
        let { showJobs } = this.state

        return (
            <>
                {
                    showJobs === false ?
                        <div>
                            <button onClick={() => this.handleShowHide()}>Show</button>
                        </div>
                        :
                        <>
                            <div>
                                {
                                    arrJobs && arrJobs.length > 0 &&
                                    arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} <></>
                                                <span style={{ cursor: "pointer" }} onClick={() => this.handleDeleteJo(item)}>x</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}

export default ChildComponent