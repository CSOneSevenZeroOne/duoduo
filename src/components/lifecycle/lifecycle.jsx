import React, {
    Component
} from 'react';
import Child from "../child/child.jsx"
// 库 框架
class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ["a", "b", "c"],
            value:"",
            bool:true
        }
    }
    getValue(e){
        this.setState({
            value:e.target.value
        })
    }
    toggle(){
        this.setState({
            bool:!this.state.bool
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.arr}</p>
                <input onChange={this.getValue.bind(this)} />
                <p ref="testel">{this.state.value}</p>
                <button onClick={this.toggle.bind(this)}>切换</button>
                {
                    ((bool)=>{
                        if(bool){
                            return <Child name={this.state.value} />
                        }else{
                            return;
                        }
                    })(this.state.bool)
                }
            </div>
        )
    }
    componentWillMount() {
        console.log("componentWillMount周期")
        console.log(this.refs.testel)
    }
    componentDidMount() {
        this.refs.testel.style.color = "red"
        console.log("componentDidMount周期")
        console.log(this.refs.testel)
    }
    shouldComponentUpdate(){
        if(this.state.value.length>=9){
            return false
        }else{
            return true
        }
       
    }
    componentWillUpdate(){
        console.log(this.refs.testel)
        console.log("componentWillUpdate周期")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate周期")
        console.log(this.refs.testel)
    }
}

export default LifeCycle;