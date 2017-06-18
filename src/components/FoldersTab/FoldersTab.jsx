import * as React from "react";
import RadioGroup from "arui-feather/radio-group"
import Radio from "arui-feather/radio"

export default class FoldersTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedButtonId: "inbox"
        }
    }

    componentWillMount() {
        const {checkedButtonId} = this.props;
        checkedButtonId && this.setState({
            checkedButtonId: checkedButtonId
        })
    }

    handleChangeChecked = (next) => {
        this.setState({
            checkedButtonId: next
        })
    };

    render() {
        return (
            <RadioGroup type='button' width='available' onChange={this.handleChangeChecked}>
                <Radio
                    id="inbox"
                    text='Входящие'
                    value='inbox'
                    type='button'
                    checked={this.state.checkedButtonId === "inbox"}
                />
                <Radio
                    id="outbox"
                    text='Исходящие'
                    value='outbox'
                    type='button'
                    checked={this.state.checkedButtonId === "outbox"}
                />
            </RadioGroup>
        )
    }
}