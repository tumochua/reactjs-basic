import React from "react";
import ChildComponent from "./ChildComponent";
import AddNewComponent from "./AddNewComponent";
class MyCommponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', title: 'dev', salary: '500' },
            { id: '2', title: 'testers', salary: '700' },
            { id: '3', title: 'project', salary: '100' },
            { id: '4', title: 'bug', salary: '800' },
        ]

    }

    addNewJob = (job) => {
        // console.log('ckech props', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    // handleDeleteJob = (job) => {
    //     let currenJob = this.state.arrJobs
    //     currenJob = currenJob.filter(item => item.id !== job.id)
    //     this.setState({
    //         arrJobs: currenJob
    //     })
    // }
    handleDeleteJob = (job) => {
        alert('bạn có chắc muốn xóa job này')
        let currenJob = this.state.arrJobs
        currenJob = currenJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJob
        })
    }

    render() {
        return (
            <>
                <AddNewComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    handleDeleteJob={this.handleDeleteJob}
                />
            </>
        )
    }
}

export default MyCommponent